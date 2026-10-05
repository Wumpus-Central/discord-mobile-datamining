// _runtime/metro/00198__.js
import _mod215 from "00215__.js";
import URLSearchParams from "../00226_URLSearchParams.js";
import AbortController from "../00228_AbortController.js";
import defineLazyObjectProperty_mod from "../00123_defineLazyObjectProperty.js";

const require = globalThis.__r;

let defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("XMLHttpRequest", () => require("00199__.js").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("FormData", () => require("00211__.js").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("fetch", () => _mod215.fetch);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Headers", () => _mod215.Headers);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Request", () => _mod215.Request);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Response", () => _mod215.Response);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("WebSocket", () => require("00217__.js").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Blob", () => require("00203__.js").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("File", () => require("00222__.js").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("FileReader", () => require("00223__.js").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("URL", () => URLSearchParams.URL);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("URLSearchParams", () => URLSearchParams.URLSearchParams);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("AbortController", () => AbortController.AbortController);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("AbortSignal", () => AbortController.AbortSignal);
