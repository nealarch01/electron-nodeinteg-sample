// This JavaScript file belongs to index.html. It is the renderer process.

// Creates an event listener for the button
document.getElementById("send-button").addEventListener("click", async () => {
    // Get the value of the input field
    const message = document.getElementById("input-box").value;
    const statusMsgRef = document.getElementById("status-message")
    statusMsgRef.innerHTML = "Writing message...";
    let execStatus = await main.writeToFile(message);
    statusMsgRef.innerHTML = execStatus;
});

document.getElementById("version-button").addEventListener("click", () => {
    const version = main.version();
    alert("Node version: " + version);
});


