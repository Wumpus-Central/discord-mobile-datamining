// === Module 198: ? ===

// Module 198
import _mod215 from "module_215" /* 215 */;
import URL from "URL" /* 226 */;
import _mod228 from "module_228" /* 228 */;
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

polyfillObjectProperty.polyfillGlobal("XMLHttpRequest", () => require("module_199").default);
polyfillObjectProperty.polyfillGlobal("FormData", () => require("FormData").default);
polyfillObjectProperty.polyfillGlobal("fetch", () => _mod215.fetch);
polyfillObjectProperty.polyfillGlobal("Headers", () => _mod215.Headers);
polyfillObjectProperty.polyfillGlobal("Request", () => _mod215.Request);
polyfillObjectProperty.polyfillGlobal("Response", () => _mod215.Response);
polyfillObjectProperty.polyfillGlobal("WebSocket", () => require("module_217").default);
polyfillObjectProperty.polyfillGlobal("Blob", () => require("Blob").default);
polyfillObjectProperty.polyfillGlobal("File", () => require("module_222").default);
polyfillObjectProperty.polyfillGlobal("FileReader", () => require("module_223").default);
polyfillObjectProperty.polyfillGlobal("URL", () => URL.URL);
polyfillObjectProperty.polyfillGlobal("URLSearchParams", () => URL.URLSearchParams);
polyfillObjectProperty.polyfillGlobal("AbortController", () => _mod228.AbortController);
polyfillObjectProperty.polyfillGlobal("AbortSignal", () => _mod228.AbortSignal);