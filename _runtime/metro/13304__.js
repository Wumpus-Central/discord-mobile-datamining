// === Module 13304: ? ===

// Module 13304
import _mod13279 from "module_13279" /* 13279 */;
import ScopeClass from "ScopeClass" /* 13299 */;

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod13279.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod13279.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}