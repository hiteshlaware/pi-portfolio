#!/bin/bash

# Raspberry Pi Deployment Script for Spring Boot Application
# Usage: ./deploy.sh [pi-hostname-or-ip] [username]

set -e

PI_HOST="${1:-raspberrypi.local}"
PI_USER="${2:-pi}"
APP_NAME="pi-web"
JAR_NAME="pi-web-1.0.0.jar"
REMOTE_DIR="/home/${PI_USER}/apps/${APP_NAME}"

echo "========================================="
echo "  Pi Web Server Deployment Script"
echo "========================================="
echo ""

# Build the application
echo "[1/4] Building application..."
./mvnw clean package -DskipTests
echo "✓ Build complete"
echo ""

# Create remote directory
echo "[2/4] Preparing remote directory..."
ssh ${PI_USER}@${PI_HOST} "mkdir -p ${REMOTE_DIR}"
echo "✓ Remote directory ready"
echo ""

# Copy JAR file to Pi
echo "[3/4] Copying JAR to Raspberry Pi..."
scp target/${JAR_NAME} ${PI_USER}@${PI_HOST}:${REMOTE_DIR}/
echo "✓ JAR copied"
echo ""

# Create and copy systemd service file
echo "[4/4] Setting up systemd service..."
cat > /tmp/pi-web.service << EOF
[Unit]
Description=Pi Web Server (Spring Boot)
After=network.target

[Service]
Type=simple
User=${PI_USER}
WorkingDirectory=${REMOTE_DIR}
ExecStart=/usr/bin/java -Xmx256m -jar ${REMOTE_DIR}/${JAR_NAME}
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

scp /tmp/pi-web.service ${PI_USER}@${PI_HOST}:/tmp/
ssh ${PI_USER}@${PI_HOST} "sudo mv /tmp/pi-web.service /etc/systemd/system/ && sudo systemctl daemon-reload && sudo systemctl enable pi-web && sudo systemctl restart pi-web"
rm /tmp/pi-web.service

echo ""
echo "========================================="
echo "  Deployment Complete!"
echo "========================================="
echo ""
echo "Your Spring Boot server is now running on:"
echo "  http://${PI_HOST}:8080"
echo ""
echo "Useful commands (run on Pi):"
echo "  sudo systemctl status pi-web    # Check status"
echo "  sudo systemctl stop pi-web      # Stop server"
echo "  sudo systemctl start pi-web     # Start server"
echo "  sudo journalctl -u pi-web -f    # View logs"
echo ""
