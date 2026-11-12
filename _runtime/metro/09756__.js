// === Module 9756: ? ===

// Module 9756
import _mod9731 from "module_9731" /* 9731 */;
import ScopeClass from "ScopeClass" /* 9751 */;

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod9731.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod9731.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}