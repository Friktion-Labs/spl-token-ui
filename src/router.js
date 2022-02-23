"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var TokenCreator = function () { return Promise.resolve().then(function () { return require("@/components/tokens/TokenCreator.vue"); }); };
var TokenEditor = function () { return Promise.resolve().then(function () { return require("@/components/tokens/TokenEditor.vue"); }); };
var AccountCreator = function () { return Promise.resolve().then(function () { return require("@/components/accounts/AccountCreator.vue"); }); };
var AccountEditor = function () {
    return Promise.resolve().then(function () { return require("@/components/accounts/accountEditing/AccountEditor.vue"); });
};
var Airdrop = function () { return Promise.resolve().then(function () { return require("@/components/airdrops/Airdrop.vue"); }); };
var FaucetCreator = function () { return Promise.resolve().then(function () { return require("@/components/airdrops/FaucetCreator.vue"); }); };
var FaucetCloser = function () { return Promise.resolve().then(function () { return require("@/components/airdrops/FaucetCloser.vue"); }); };
var TokenAirdrop = function () { return Promise.resolve().then(function () { return require("@/components/airdrops/TokenAirdrop.vue"); }); };
var TokenFaucets = function () { return Promise.resolve().then(function () { return require("@/components/airdrops/TokenFaucets.vue"); }); };
var routes = [
    { path: "/", name: "token-creator", component: TokenCreator },
    { path: "/token-editor", name: "token-editor", component: TokenEditor },
    {
        path: "/account-creator",
        name: "account-creator",
        component: AccountCreator
    },
    {
        path: "/account-editor",
        name: "account-editor",
        component: AccountEditor
    },
    {
        path: "/sol-airdrop",
        name: "sol-airdrop",
        component: Airdrop
    },
    {
        path: "/faucet-creator",
        name: "faucet-creator",
        component: FaucetCreator
    },
    {
        path: "/faucet-closer",
        name: "faucet-closer",
        component: FaucetCloser
    },
    {
        path: "/token-airdrop",
        name: "token-airdrop",
        component: TokenAirdrop
    },
    {
        path: "/token-faucets",
        name: "token-faucets",
        component: TokenFaucets
    }
];
exports["default"] = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHashHistory)(),
    routes: routes
});
