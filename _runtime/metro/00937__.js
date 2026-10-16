// === Module 937: ? ===

// Module 937
import _mod916 from "module_916" /* 916 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const onHidden = (arg0) => {
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod916.WINDOW.document;
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
  require("module_918").addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = require("module_918");
  require("module_918").addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};