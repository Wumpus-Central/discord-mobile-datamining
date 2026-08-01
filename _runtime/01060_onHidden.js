// === Module 1060: onHidden ===

// Module 1060 (onHidden)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.onHidden = (arg0) => {
  const _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = callback(outer1_1[0]).WINDOW.document;
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
  _require(1041).addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = _require(1041);
  _require(1041).addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};