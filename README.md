# mongodb-backup

This Node.js package allows you to backup a MongoDB database to a zip file.

## Installation

You can install the package via npm:

```bash
npm install mongodb-backup
```

## Usage

### Method 1: Command Line Usage

To backup your MongoDB database from the command line, you can use the provided script `exportDB.js` directly with the node command, passing the MongoDB connection string and output zip path as runtime arguments.

##### Example command:

```bash
node exportDB.js <MONGODB_CONNECTION_STRING> <OUTPUT_ZIP_PATH>
```

Replace `<MONGODB_CONNECTION_STRING>` with your actual MongoDB connection string, and `<OUTPUT_ZIP_PATH>` with the desired path to save the backup zip file.

###### For example:

```bash
node exportDB.js mongodb://localhost:27017/my_database my_backup.zip
```

The script will connect to the specified MongoDB database, export each collection to a JSON file, zip the files into `my_backup.zip`, and save it in the current directory.

### Method 2: Importing the Package

You can also use this package by importing the `backupDatabaseToZip` function into another Node.js application.

```
const { backupDatabaseToZip } = require("mongodb-backup");

const connectionString = 'mongodb://localhost:27017/your_database'; // Replace with your MongoDB connection string
const outputZipPath = 'backup.zip'; // The path where the zip file will be saved

backupDatabaseToZip(connectionString, outputZipPath)
  .then(() => {
    console.log('Backup completed successfully.');
  })
  .catch((err) => {
    console.error('Error while performing the backup:', err);
  });
```

In this method, you can use the `backupDatabaseToZip` function with the desired MongoDB connection string and output zip path directly within your application.

### Dependencies

This package depends on the following modules:

[archiver](https://www.npmjs.com/package/archiver) (^5.3.1)        
[mongodb](https://www.npmjs.com/package/mongodb) (^5.7.0)       
[shelljs](https://www.npmjs.com/package/shelljs) (^0.8.5)       

## Authors

- [@charan379](https://www.github.com/charan379)

## License

[![AGPL License](https://img.shields.io/badge/LICENSE-GNU%20AGPLv3-brightgreen)](https://www.gnu.org/licenses/agpl-3.0.en.html)