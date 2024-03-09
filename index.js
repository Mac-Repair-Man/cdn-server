const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// 200 OK
app.get("/", (req, res) => {
    res.status(200).json({
        code: 200,
        message: "OK",
    });
});

// 404 Not Found
app.get("/*", (req, res) => {
    res.status(404).json({
        code: 404,
        message: "Not Found",
    });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});