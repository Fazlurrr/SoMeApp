-- Create the database
CREATE DATABASE SoMeAppDb;

-- Create the user
CREATE USER admin WITH PASSWORD 'SoMe';

-- Grant all privileges on the database to the user
GRANT ALL PRIVILEGES ON DATABASE SoMeAppDb TO admin;

-- Connect to the database
\c SoMeAppDb