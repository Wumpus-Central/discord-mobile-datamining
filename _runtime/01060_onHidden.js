// _runtime/01060_onHidden.js
import { addPageListener } from "01041_addPageListener.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.onHidden = (arg0) => {
  const _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = callback(dependencyMap[0]).WINDOW.document;
      let visibilityState;
      if (_document != null) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" !== visibilityState;
    }
    if (!tmp) {
      callback(type);
    }
  }
  require("01041_addPageListener.js").addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = addPageListener;
  require("01041_addPageListener.js").addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};