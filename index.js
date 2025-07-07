const express = require("express");
const exphbs = require("express-handlebars");
const router = require("express-promise-router")();
const app = express();

var handlebars = exphbs.create({
    defaultLayout: false
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.use(router);

router.get("/", index)
router.get("/health/live", live)
router.get("/health/ready", ready)
router.get("/health/startup", startup)

async function index(_req, res) {
    return res.sendStatus(200);
}

async function live(_req, res) {
    return res.sendStatus(200);
}

async function ready(_req, res) {
    return res.sendStatus(200);
}

async function startup(_req, res) {
    return res.sendStatus(200);
}

if (!module.parent) {
    port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`listening on port ${port}`)
}

module.exports = app;
