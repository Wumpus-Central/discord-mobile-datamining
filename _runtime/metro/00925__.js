// === Module 925: ? ===

// Module 925
import _mod904 from "module_904" /* 904 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const onHidden = (arg0) => {
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod904.WINDOW.document;
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
  require("module_906").addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = require("module_906");
  require("module_906").addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};