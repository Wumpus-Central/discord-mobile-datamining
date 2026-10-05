// === Module 723: ? ===

// Module 723
import _mod701 from "module_701" /* 701 */;
import Scope from "Scope" /* 719 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod701;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod701;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};