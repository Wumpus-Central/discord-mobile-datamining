// === Module 712: ? ===

// Module 712
import _mod690 from "module_690" /* 690 */;
import Scope from "Scope" /* 708 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod690.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod690.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};