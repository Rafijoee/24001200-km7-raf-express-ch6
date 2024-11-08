const config = require("./configs/config");
const express = require("express");
const upload = require("./routes/upload");
const app = express();
const port = config.port;

app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.use("/api/v1", upload);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});