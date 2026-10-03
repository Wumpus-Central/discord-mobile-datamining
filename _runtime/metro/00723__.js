// === Module 723: ? ===

// Module 723
import _mod701 from "module_701" /* 701 */;
import Scope from "Scope" /* 719 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod701.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod701.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};