// just a comment
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/status", (req, res) => {
    res.json({
        status: "success",
        message: "Node.js REST API is running successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});