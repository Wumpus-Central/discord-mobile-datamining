// === Module 1738: installNetworking ===

// Module 1738 (installNetworking)
import _mod216 from "module_216" /* 216 */;
import _mod1739 from "module_1739" /* 1739 */;
import _mod1741 from "module_1741" /* 1741 */;
import _mod1742 from "module_1742" /* 1742 */;
import _mod1746 from "module_1746" /* 1746 */;
import invoke from "invoke" /* 1747 */;
import _mod1748 from "module_1748" /* 1748 */;

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