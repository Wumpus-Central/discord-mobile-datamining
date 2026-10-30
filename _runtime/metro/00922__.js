// === Module 922: ? ===

// Module 922
import _mod901 from "module_901" /* 901 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (arg0) => {
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod901.WINDOW.document;
      let visibilityState;
      if (_document != null) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" !== visibilityState;
    }
    if (!tmp) {
      closure_0(type);
    }
  }
  require("module_903").addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = require("module_903");
  require("module_903").addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
}