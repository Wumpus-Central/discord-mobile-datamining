// === Module 198: ? ===

// Module 198
import t from "t" /* 215 */;
import URL from "URL" /* 226 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 228 */;
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

polyfillObjectProperty.polyfillGlobal("XMLHttpRequest", () => require(199) /* _isNativeReflectConstruct */.default);
polyfillObjectProperty.polyfillGlobal("FormData", () => require(211) /* FormData */.default);
polyfillObjectProperty.polyfillGlobal("fetch", () => t.fetch);
polyfillObjectProperty.polyfillGlobal("Headers", () => t.Headers);
polyfillObjectProperty.polyfillGlobal("Request", () => t.Request);
polyfillObjectProperty.polyfillGlobal("Response", () => t.Response);
polyfillObjectProperty.polyfillGlobal("WebSocket", () => require(217) /* _isNativeReflectConstruct */.default);
polyfillObjectProperty.polyfillGlobal("Blob", () => require(203) /* Blob */.default);
polyfillObjectProperty.polyfillGlobal("File", () => require(222) /* _isNativeReflectConstruct */.default);
polyfillObjectProperty.polyfillGlobal("FileReader", () => require(223) /* _isNativeReflectConstruct */.default);
polyfillObjectProperty.polyfillGlobal("URL", () => URL.URL);
polyfillObjectProperty.polyfillGlobal("URLSearchParams", () => URL.URLSearchParams);
polyfillObjectProperty.polyfillGlobal("AbortController", () => _isNativeReflectConstruct.AbortController);
polyfillObjectProperty.polyfillGlobal("AbortSignal", () => _isNativeReflectConstruct.AbortSignal);