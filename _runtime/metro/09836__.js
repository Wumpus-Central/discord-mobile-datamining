// === Module 9836: ? ===

// Module 9836
import _mod9811 from "module_9811" /* 9811 */;
import ScopeClass from "ScopeClass" /* 9831 */;

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod9811.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod9811.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}