"use strict";
exports.__esModule = true;
// required for local dev, actual font will be sourced from inside the html file
require("./assets/fonts/font.scss");
require("@fortawesome/fontawesome-free/css/all.css");
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var app = (0, vue_1.createApp)(App_vue_1["default"]);
app.use(router_1["default"]);
app.mount("#app");
