// _runtime/metro/00198__.js
import t from "../00215_t.js";
import URL from "../00226_URL.js";
import _isNativeReflectConstruct from "../00228__isNativeReflectConstruct.js";
import polyfillObjectProperty from "../00123_polyfillObjectProperty.js";
import { _isNativeReflectConstruct } from "../00199__isNativeReflectConstruct.js";
import { Blob } from "../00203_Blob.js";
import { FormData } from "../00211_FormData.js";
import { _isNativeReflectConstruct } from "../00217__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../00222__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../00223__isNativeReflectConstruct.js";

polyfillObjectProperty.polyfillGlobal("XMLHttpRequest", () => _isNativeReflectConstruct.default);
polyfillObjectProperty.polyfillGlobal("FormData", () => FormData.default);
polyfillObjectProperty.polyfillGlobal("fetch", () => t.fetch);
polyfillObjectProperty.polyfillGlobal("Headers", () => t.Headers);
polyfillObjectProperty.polyfillGlobal("Request", () => t.Request);
polyfillObjectProperty.polyfillGlobal("Response", () => t.Response);
polyfillObjectProperty.polyfillGlobal("WebSocket", () => _isNativeReflectConstruct.default);
polyfillObjectProperty.polyfillGlobal("Blob", () => Blob.default);
polyfillObjectProperty.polyfillGlobal("File", () => _isNativeReflectConstruct.default);
polyfillObjectProperty.polyfillGlobal("FileReader", () => _isNativeReflectConstruct.default);
polyfillObjectProperty.polyfillGlobal("URL", () => URL.URL);
polyfillObjectProperty.polyfillGlobal("URLSearchParams", () => URL.URLSearchParams);
polyfillObjectProperty.polyfillGlobal("AbortController", () => _isNativeReflectConstruct.AbortController);
polyfillObjectProperty.polyfillGlobal("AbortSignal", () => _isNativeReflectConstruct.AbortSignal);