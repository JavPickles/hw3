CREATE TABLE Forecast (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- Name of the location or city
    temp DECIMAL(5, 2),         -- Temperature, with up to 2 decimal places
    wind DECIMAL(5, 2),         -- Wind speed, with up to 2 decimal places
    forecast VARCHAR(255)       -- Weather description (e.g., Sunny, Cloudy, Rainy)
);
