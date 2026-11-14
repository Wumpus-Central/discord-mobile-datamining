// _runtime/01738_installNetworking.js
import _mod216 from "metro/00216__.js";
import _mod1739 from "metro/01739__.js";
import _mod1741 from "metro/01741__.js";
import _mod1742 from "metro/01742__.js";
import _mod1746 from "metro/01746__.js";
import invoke from "01747_invoke.js";
import _mod1748 from "metro/01748__.js";

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export function installNetworking() {
  if (undefined !== globalThis.__workletsNetworking) {
    if (!c2) {
      c2 = true;
      const _globalThis = globalThis;
      if (XMLHttpRequest == null) {
        _globalThis.XMLHttpRequest = _mod1739.XMLHttpRequest;
      }
      if (_globalThis.Blob == null) {
        _globalThis.Blob = _mod1742.Blob;
      }
      if (_globalThis.FileReader == null) {
        _globalThis.FileReader = invoke.FileReader;
      }
      if (_globalThis.FormData == null) {
        _globalThis.FormData = _mod1746.FormData;
      }
      if (_globalThis.DOMException == null) {
        _globalThis.DOMException = _mod1741.DOMException;
      }
      if (_globalThis.AbortController == null) {
        _globalThis.AbortController = _mod1748.AbortController;
      }
      if (_globalThis.AbortSignal == null) {
        _globalThis.AbortSignal = _mod1748.AbortSignal;
      }
      _mod216;
    }
  }
}
