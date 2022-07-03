const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const staticFolder = path.resolve(__dirname, './www/');

if (!fs.existsSync(staticFolder)) {
    console.log("www folder don't found");
    process.exit(1);
}
app.use(express.static(staticFolder));

app.get('/*', (_req, res) => {
    try {
        const indexHTML = path.resolve(staticFolder, 'index.html');

        if (!fs.existsSync(indexHTML)) {
            res.status(404).send('Page Not Found');
        } else {
            res.sendFile(indexHTML);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal error');
    }
});

const port = process.env.PORT || 3001;

app.listen(
    port,
    err => err ?
        console.log(err) :
        console.log('Server on')
);