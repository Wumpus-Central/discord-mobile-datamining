// _runtime/metro/00198__.js
import _mod215 from "00215__.js";
import URL from "../00226_URL.js";
import _mod228 from "00228__.js";
import polyfillObjectProperty from "../00123_polyfillObjectProperty.js";

polyfillObjectProperty.polyfillGlobal("XMLHttpRequest", () => require("00199__.js").default);
polyfillObjectProperty.polyfillGlobal("FormData", () => require("FormData").default);
polyfillObjectProperty.polyfillGlobal("fetch", () => _mod215.fetch);
polyfillObjectProperty.polyfillGlobal("Headers", () => _mod215.Headers);
polyfillObjectProperty.polyfillGlobal("Request", () => _mod215.Request);
polyfillObjectProperty.polyfillGlobal("Response", () => _mod215.Response);
polyfillObjectProperty.polyfillGlobal("WebSocket", () => require("00217__.js").default);
polyfillObjectProperty.polyfillGlobal("Blob", () => require("Blob").default);
polyfillObjectProperty.polyfillGlobal("File", () => require("00222__.js").default);
polyfillObjectProperty.polyfillGlobal("FileReader", () => require("00223__.js").default);
polyfillObjectProperty.polyfillGlobal("URL", () => URL.URL);
polyfillObjectProperty.polyfillGlobal("URLSearchParams", () => URL.URLSearchParams);
polyfillObjectProperty.polyfillGlobal("AbortController", () => _mod228.AbortController);
polyfillObjectProperty.polyfillGlobal("AbortSignal", () => _mod228.AbortSignal);
