// === Module 934: ? ===

// Module 934
import _mod913 from "module_913" /* 913 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export (arg0) => {
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod913.WINDOW.document;
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
  require("module_915").addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = require("module_915");
  require("module_915").addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
}