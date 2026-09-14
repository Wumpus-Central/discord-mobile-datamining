// _runtime/metro/00198__.js
import _mod215 from "00215__.js";
import URL from "../00226_URL.js";
import _mod228 from "00228__.js";
import polyfillObjectProperty_mod from "../00123_polyfillObjectProperty.js";

const require = globalThis.__r;

let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("XMLHttpRequest", () => require("00199__.js").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("FormData", () => require("FormData").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("fetch", () => _mod215.fetch);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("Headers", () => _mod215.Headers);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("Request", () => _mod215.Request);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("Response", () => _mod215.Response);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("WebSocket", () => require("00217__.js").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("Blob", () => require("Blob").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("File", () => require("00222__.js").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("FileReader", () => require("00223__.js").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("URL", () => URL.URL);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("URLSearchParams", () => URL.URLSearchParams);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("AbortController", () => _mod228.AbortController);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("AbortSignal", () => _mod228.AbortSignal);
