// === Module 711: ? ===

// Module 711
import _mod689 from "module_689" /* 689 */;
import Scope from "Scope" /* 707 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function getDefaultCurrentScope() {
  return _mod689.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod689.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}