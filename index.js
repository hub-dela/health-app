const express = require("express");
const exphbs = require("express-handlebars");
const router = require("express-promise-router")();
const app = express();

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: false
    })
);
app.set("view engine", "handlebars");
app.use(router);

router.get("/", index)
router.get("/health/live", live)
router.get("/health/ready", ready)

async function index(_req, res) {
    return res.sendStatus(200);
}

async function live(_req, res) {
    return res.sendStatus(200);
}

async function ready(_req, res) {
    return res.sendStatus(200);
}

if (!module.parent) {
    port = process.env.PORT || 4000;
    app.listen(port);
    console.log(`listening on port ${port}`)
}

module.exports = app;