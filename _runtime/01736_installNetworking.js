// === Module 1736: installNetworking ===

// Module 1736 (installNetworking)
import _mod216 from "module_216" /* 216 */;
import _mod1737 from "module_1737" /* 1737 */;
import _mod1739 from "module_1739" /* 1739 */;
import _mod1740 from "module_1740" /* 1740 */;
import _mod1744 from "module_1744" /* 1744 */;
import invoke from "invoke" /* 1745 */;
import _mod1746 from "module_1746" /* 1746 */;

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