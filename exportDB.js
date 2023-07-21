const backupDatabaseToZip = require("./backupDatabaseToZip").backupDatabaseToZip;

const connectionString = process.argv[2]; // MongoDB connection string
const outputZipPath = process.argv[3]; // The path where the zip file will be saved

// const connectionString = 'mongodb+srv://charanteja379:swordFish%40379@cluster1.lwi7smq.mongodb.net/moviebunkers?retryWrites=true&w=majority'; // Replace with your MongoDB connection string
// const outputZipPath = 'backup.zip'; // The path where the zip file will be saved

backupDatabaseToZip(connectionString, outputZipPath);