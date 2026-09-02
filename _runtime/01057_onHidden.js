// === Module 1057: onHidden ===

// Module 1057 (onHidden)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.onHidden = (arg0) => {
  const _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = callback(closure_1_1[0]).WINDOW.document;
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
  _require(1038).addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = _require(1038);
  _require(1038).addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};