// === Module 13030: ? ===

// Module 13030
import _mod13005 from "module_13005" /* 13005 */;
import ScopeClass from "ScopeClass" /* 13025 */;

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod13005.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod13005.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}