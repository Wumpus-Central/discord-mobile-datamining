// _runtime/01735_installNetworking.js
import _mod216 from "metro/00216__.js";
import _mod1736 from "metro/01736__.js";
import _mod1738 from "metro/01738__.js";
import _mod1739 from "metro/01739__.js";
import _mod1743 from "metro/01743__.js";
import invoke from "01744_invoke.js";
import _mod1745 from "metro/01745__.js";

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export function installNetworking() {
  if (undefined !== globalThis.__workletsNetworking) {
    if (!c2) {
      c2 = true;
      const _globalThis = globalThis;
      if (XMLHttpRequest == null) {
        _globalThis.XMLHttpRequest = _mod1736.XMLHttpRequest;
      }
      if (_globalThis.Blob == null) {
        _globalThis.Blob = _mod1739.Blob;
      }
      if (_globalThis.FileReader == null) {
        _globalThis.FileReader = invoke.FileReader;
      }
      if (_globalThis.FormData == null) {
        _globalThis.FormData = _mod1743.FormData;
      }
      if (_globalThis.DOMException == null) {
        _globalThis.DOMException = _mod1738.DOMException;
      }
      if (_globalThis.AbortController == null) {
        _globalThis.AbortController = _mod1745.AbortController;
      }
      if (_globalThis.AbortSignal == null) {
        _globalThis.AbortSignal = _mod1745.AbortSignal;
      }
      _mod216;
    }
  }
}
