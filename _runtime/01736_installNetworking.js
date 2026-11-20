// _runtime/01736_installNetworking.js
import _mod216 from "metro/00216__.js";
import _mod1737 from "metro/01737__.js";
import _mod1739 from "metro/01739__.js";
import _mod1740 from "metro/01740__.js";
import _mod1744 from "metro/01744__.js";
import invoke from "01745_invoke.js";
import _mod1746 from "metro/01746__.js";

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export function installNetworking() {
  if (undefined !== globalThis.__workletsNetworking) {
    if (!c2) {
      c2 = true;
      const _globalThis = globalThis;
      if (XMLHttpRequest == null) {
        _globalThis.XMLHttpRequest = _mod1737.XMLHttpRequest;
      }
      if (_globalThis.Blob == null) {
        _globalThis.Blob = _mod1740.Blob;
      }
      if (_globalThis.FileReader == null) {
        _globalThis.FileReader = invoke.FileReader;
      }
      if (_globalThis.FormData == null) {
        _globalThis.FormData = _mod1744.FormData;
      }
      if (_globalThis.DOMException == null) {
        _globalThis.DOMException = _mod1739.DOMException;
      }
      if (_globalThis.AbortController == null) {
        _globalThis.AbortController = _mod1746.AbortController;
      }
      if (_globalThis.AbortSignal == null) {
        _globalThis.AbortSignal = _mod1746.AbortSignal;
      }
      _mod216;
    }
  }
}
