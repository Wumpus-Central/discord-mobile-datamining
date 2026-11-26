// === Module 1737: installNetworking ===

// Module 1737 (installNetworking)
import _mod216 from "module_216" /* 216 */;
import _mod1738 from "module_1738" /* 1738 */;
import _mod1740 from "module_1740" /* 1740 */;
import _mod1741 from "module_1741" /* 1741 */;
import _mod1745 from "module_1745" /* 1745 */;
import invoke from "invoke" /* 1746 */;
import _mod1747 from "module_1747" /* 1747 */;

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