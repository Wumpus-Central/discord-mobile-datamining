// _runtime/metro/00922__.js
import _mod901 from "00901__.js";

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
  require("00903__.js").addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = require("00903__.js");
  require("00903__.js").addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
}