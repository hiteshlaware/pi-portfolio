# Pi Web Server

A Spring Boot web application optimized for Raspberry Pi deployment.

## Features

- **Modern UI** – Beautiful responsive design with Tailwind CSS
- **REST API** – Built-in endpoints for status and system monitoring
- **Lightweight** – Optimized for Raspberry Pi's limited resources
- **Auto-start** – Systemd service for reliable 24/7 operation

## Prerequisites

### On Your Development Machine
- Java 17+ (for building)
- Maven (or use included `mvnw` wrapper)

### On Your Raspberry Pi
- Raspberry Pi OS (64-bit recommended)
- Java 17+ runtime

Install Java on Pi:
```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

## Quick Start

### 1. Build and Run Locally

```bash
# Build
./mvnw clean package

# Run
java -jar target/pi-web-1.0.0.jar
```

Visit http://localhost:8080

### 2. Deploy to Raspberry Pi

**Option A: Automated Deployment**

```bash
# Make script executable
chmod +x deploy.sh

# Deploy (replace with your Pi's hostname/IP)
./deploy.sh raspberrypi.local pi
```

**Option B: Manual Deployment**

1. Build the JAR:
   ```bash
   ./mvnw clean package -DskipTests
   ```

2. Copy to Pi:
   ```bash
   scp target/pi-web-1.0.0.jar pi@raspberrypi.local:~/
   ```

3. SSH into Pi and run:
   ```bash
   java -Xmx256m -jar pi-web-1.0.0.jar
   ```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /` | Home page |
| `GET /about` | System information page |
| `GET /api/status` | JSON status and uptime |
| `GET /api/system` | JSON system details |

## Configuration

Edit `src/main/resources/application.properties`:

```properties
# Change port (default: 8080)
server.port=8080

# Enable/disable dev tools
spring.devtools.restart.enabled=false
```

## Memory Optimization for Pi

The deployment script uses `-Xmx256m` to limit JVM heap to 256MB. Adjust based on your Pi model:

| Pi Model | Recommended Heap |
|----------|------------------|
| Pi Zero/1 | 128m |
| Pi 2/3 | 256m |
| Pi 4 (2GB+) | 512m |

## Systemd Service Management

After deployment, use these commands on your Pi:

```bash
# Check status
sudo systemctl status pi-web

# View logs
sudo journalctl -u pi-web -f

# Restart
sudo systemctl restart pi-web

# Stop
sudo systemctl stop pi-web
```

## Project Structure

```
pi/
├── pom.xml                          # Maven config
├── deploy.sh                        # Deployment script
├── README.md
└── src/main/
    ├── java/com/piserver/
    │   ├── PiWebApplication.java    # Main class
    │   └── controller/
    │       ├── HomeController.java  # Web pages
    │       └── ApiController.java   # REST API
    └── resources/
        ├── application.properties
        ├── static/css/style.css
        └── templates/
            ├── index.html
            └── about.html
```

## Troubleshooting

**Port already in use:**
```bash
sudo lsof -i :8080
sudo kill -9 <PID>
```

**Service won't start:**
```bash
sudo journalctl -u pi-web --no-pager -n 50
```

**Out of memory:**
- Reduce heap size: `-Xmx128m`
- Check for other processes: `htop`

## License

MIT
