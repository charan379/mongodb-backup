const { MongoClient } = require('mongodb');
const shell = require('shelljs');
const archiver = require('archiver');
const fs = require('fs');

async function backupDatabaseToZip(connectionString, outputZipPath) {
    try {
        // Step 1: Connect to the MongoDB database
        const client = await MongoClient.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db();

        // Step 2: Fetch all collections
        const collections = await db.listCollections().toArray();

        // Step 3: Create backup directory
        const backupDir = './temp_backup';
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir);
        }

        // Step 4: Export each collection to a JSON file in the backup directory
        for (const collectionInfo of collections) {
            const collectionName = collectionInfo.name;
            const outputFile = `${backupDir}/${collectionName}.json`;
            const collectionData = await db.collection(collectionName).find({}).toArray();
            fs.writeFileSync(outputFile, JSON.stringify(collectionData));
        }

        // Step 5: Zip the backup directory
        const zipOutput = fs.createWriteStream(outputZipPath);
        const archive = archiver('zip', { zlib: { level: 9 } });
        archive.pipe(zipOutput);
        archive.directory(backupDir, false);
        await archive.finalize();

        // Step 6: Cleanup - remove the temporary backup directory
        shell.rm('-rf', backupDir);

        console.log('Backup completed successfully.');
        client.close();
    } catch (err) {
        console.error('Error while performing the backup:', err);
    }
}


module.exports = { backupDatabaseToZip };