// === Module 1735: installNetworking ===

// Module 1735 (installNetworking)
import _mod216 from "module_216" /* 216 */;
import _mod1736 from "module_1736" /* 1736 */;
import _mod1738 from "module_1738" /* 1738 */;
import _mod1739 from "module_1739" /* 1739 */;
import _mod1743 from "module_1743" /* 1743 */;
import invoke from "invoke" /* 1744 */;
import _mod1745 from "module_1745" /* 1745 */;

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