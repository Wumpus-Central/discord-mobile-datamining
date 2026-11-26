// _runtime/01737_installNetworking.js
import _mod216 from "metro/00216__.js";
import _mod1738 from "metro/01738__.js";
import _mod1740 from "metro/01740__.js";
import _mod1741 from "metro/01741__.js";
import _mod1745 from "metro/01745__.js";
import invoke from "01746_invoke.js";
import _mod1747 from "metro/01747__.js";

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export function installNetworking() {
  if (undefined !== globalThis.__workletsNetworking) {
    if (!c2) {
      c2 = true;
      const _globalThis = globalThis;
      if (XMLHttpRequest == null) {
        _globalThis.XMLHttpRequest = _mod1738.XMLHttpRequest;
      }
      if (_globalThis.Blob == null) {
        _globalThis.Blob = _mod1741.Blob;
      }
      if (_globalThis.FileReader == null) {
        _globalThis.FileReader = invoke.FileReader;
      }
      if (_globalThis.FormData == null) {
        _globalThis.FormData = _mod1745.FormData;
      }
      if (_globalThis.DOMException == null) {
        _globalThis.DOMException = _mod1740.DOMException;
      }
      if (_globalThis.AbortController == null) {
        _globalThis.AbortController = _mod1747.AbortController;
      }
      if (_globalThis.AbortSignal == null) {
        _globalThis.AbortSignal = _mod1747.AbortSignal;
      }
      _mod216;
    }
  }
}
