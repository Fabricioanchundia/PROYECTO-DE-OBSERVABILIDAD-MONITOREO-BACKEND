```md
# Monitoring & Logging Platform for Microservices

A production-oriented observability platform built to demonstrate how monitoring, metrics, and logging are implemented in real-world microservice architectures.

This project focuses exclusively on **observability**, not business logic, and is designed as a **portfolio project** to showcase backend engineering practices used in production environments.

---

## 🎯 Project Goals

The goal of this project is to extend a microservices-based system with:

- Centralized monitoring
- Structured logging
- Service health visibility
- Production-ready Docker infrastructure

It demonstrates how backend engineers observe and reason about systems **after deployment**, not just how they build APIs.

---

## 🧠 What is Observability?

Observability answers three key questions in production systems:

1. **Is the system up?** (Health)
2. **How is it behaving?** (Metrics)
3. **What happened when something went wrong?** (Logs)

This project implements **basic but realistic observability** using industry-standard tools.

---

## 🧱 Architecture Overview

```

Client
|
v
API Gateway
|
+--> Auth Service
+--> Orders Service
+--> Notifications Service

Each service exposes:

* /health   → service health
* /metrics  → Prometheus metrics

Prometheus scrapes metrics from all services
Grafana visualizes metrics in real time

````

---

## ⚙️ Tech Stack

**Backend**
- Node.js
- NestJS
- TypeScript

**Observability**
- Prometheus (metrics collection)
- Grafana (metrics visualization)
- Pino (structured JSON logging)

**Infrastructure**
- Docker
- Docker Compose

---

## 🔍 Observability Features

### ✅ Health Checks
Each microservice exposes a `/health` endpoint using `@nestjs/terminus`.

### 📊 Metrics
Each service exposes Prometheus metrics:
- Total HTTP requests
- Error count
- Service availability (`up`)

### 🪵 Structured Logging
All services use structured JSON logs, including:
- HTTP method
- Request path
- Status code
- Response time
- Service name

Logs are designed to be machine-readable and production-ready.

---

## 📈 Grafana Dashboard

The Grafana dashboard provides:

- **Requests per service (req/s)**
- **Errors per service**
- **Service status (UP / DOWN)**

Dashboards are versioned as JSON and automatically provisioned when the stack starts.

---

## 🚀 How to Run the Project

### Prerequisites
- Docker
- Docker Compose

### Start the full stack
From the project root:

```bash
docker compose up --build
````

### Access services

* API Gateway health: `http://localhost:3000/health`
* Prometheus UI: `http://localhost:9090`
* Grafana UI: `http://localhost:3006`

Grafana default credentials:

* **User:** admin
* **Password:** admin

---

## 📁 Project Structure

```
monitoring-observability-platform/
├── services/
│   ├── api-gateway/
│   ├── auth-service/
│   ├── orders-service/
│   └── notifications-service/
├── monitoring/
│   ├── prometheus/
│   │   └── prometheus.yml
│   └── grafana/
│       ├── dashboards/
│       │   └── microservices-observability-dashboard.json
│       └── provisioning/
│           └── dashboards/
│               └── dashboard.yml
├── docker-compose.yml
└── README.md
```

---

## 🧪 Why This Project Matters

This project demonstrates:

* Understanding of **production systems**
* Experience with **monitoring and observability**
* Ability to reason about system behavior, not just API responses
* Docker-first mindset
* Clean, reproducible infrastructure

It is intentionally simple in business logic and focused on **engineering quality**.

---
## 👨‍💻 Author

Built by **Fabricio Anchundia**
Backend / Platform Engineering Enthusiast
Focused on scalable systems, observability, and production readiness.
---

```


