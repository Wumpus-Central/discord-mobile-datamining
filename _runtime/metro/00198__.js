// === Module 198: ? ===

// Module 198
import _mod215 from "module_215" /* 215 */;
import URL from "URL" /* 226 */;
import _mod228 from "module_228" /* 228 */;
import polyfillObjectProperty_mod from "polyfillObjectProperty" /* 123 */;

const require = globalThis.__r;

let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("XMLHttpRequest", () => require("module_199").default);
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
polyfillObjectProperty.polyfillGlobal("WebSocket", () => require("module_217").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("Blob", () => require("Blob").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("File", () => require("module_222").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("FileReader", () => require("module_223").default);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("URL", () => URL.URL);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("URLSearchParams", () => URL.URLSearchParams);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("AbortController", () => _mod228.AbortController);
let polyfillObjectProperty = polyfillObjectProperty_mod;
polyfillObjectProperty.polyfillGlobal("AbortSignal", () => _mod228.AbortSignal);