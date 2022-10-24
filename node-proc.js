const { exec } = require("child_process");

async function echoMessage(message) {
    // Use a promise to return the result of the exec() function
    const execStatus = new Promise((resolve, reject) => {
        exec(`echo '${message}' >> output.txt`, (error, stdout, stderr) => {
            if (error) {
                resolve(`Error: Could not write message to file.\n${error.message}`);
            } else if (stderr) {
                resolve(`Error: Could not write message to file.\n${stderr}`);
            }
            resolve(`Message successfully written to file!`);
        });
    });
    // Unwrap the promise and return the result
    return await execStatus;
}

function getNodeVersion() {
    return process.versions.node;
}

module.exports = { getNodeVersion, echoMessage };