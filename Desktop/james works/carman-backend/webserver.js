const express = require('express');
const app = express();
const cors = require('cors');
const account = require("./src/router/account");
const bodyParser = require('body-parser');
const PORT = 3333;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.text({ type: "text/*" }));
app.use(cors()); // เรียกใช้ฟังก์ชัน cors

app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
    })
);

app.listen(PORT, () => {
    console.log("started server");
});

app.get("/health", (req, res) => {
    console.log("HEALth");
    return res.status(200).json({
        status: 'good'
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/account", account); // ใช้ app.use สำหรับเส้นทาง account
