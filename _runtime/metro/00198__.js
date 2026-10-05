// === Module 198: ? ===

// Module 198
import _mod215 from "module_215" /* 215 */;
import URLSearchParams from "URLSearchParams" /* 226 */;
import AbortController from "AbortController" /* 228 */;
import defineLazyObjectProperty_mod from "defineLazyObjectProperty" /* 123 */;

const require = globalThis.__r;

let defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("XMLHttpRequest", () => require("module_199").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("FormData", () => require("module_211").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("fetch", () => _mod215.fetch);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Headers", () => _mod215.Headers);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Request", () => _mod215.Request);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Response", () => _mod215.Response);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("WebSocket", () => require("module_217").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("Blob", () => require("module_203").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("File", () => require("module_222").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("FileReader", () => require("module_223").default);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("URL", () => URLSearchParams.URL);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("URLSearchParams", () => URLSearchParams.URLSearchParams);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("AbortController", () => AbortController.AbortController);
defineLazyObjectProperty = defineLazyObjectProperty_mod;
defineLazyObjectProperty.polyfillGlobal("AbortSignal", () => AbortController.AbortSignal);