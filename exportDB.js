const backupDatabaseToZip = require("./backupDatabaseToZip").backupDatabaseToZip;

const connectionString = process.argv[2]; // MongoDB connection string
const outputZipPath = process.argv[3]; // The path where the zip file will be saved

backupDatabaseToZip(connectionString, outputZipPath);