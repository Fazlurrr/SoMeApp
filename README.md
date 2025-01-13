# SoMeApp

## Overview
1. Repo Setup

SoMeApp is a web application with a .NET backend and a PostgreSQL database. This project uses Docker to manage the PostgreSQL database.

## Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Docker](https://www.docker.com/get-started)
- [pgAdmin](https://www.pgadmin.org/download/)

## Setting Up the Project

### 1. Clone the Repository

```sh
git clone https://github.com/Fazlurrr/SoMeApp.git
cd SoMeApp
```

### 2. Set Up PostgreSQL with Docker
Ensure Docker is installed and running on your machine.

#### Create and Start the PostgreSQL Container

Use a `docker-compose.yml` file in the root of your project with the following content:

```yaml
services:
  postgres:
    image: postgres:13
    container_name: someapp_postgres
    environment:
      POSTGRES_DB: SoMeAppDb
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: SoMe
    ports:
      - "8080:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Start the PostgreSQL container:

```sh
docker-compose up -d
```

### 3. Update appsettings.json
Ensure your `appsettings.json` file is configured to connect to the PostgreSQL database:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=8080;Database=SoMeAppDb;Username=admin;Password=SoMe"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### 4. Run Migrations
After setting up PostgreSQL with Docker, run the migration commands to set up your database schema:

```sh
cd backend
dotnet ef migrations add InitialCreate
dotnet ef database update
```