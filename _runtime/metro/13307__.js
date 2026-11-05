// === Module 13307: ? ===

// Module 13307
import _mod13282 from "module_13282" /* 13282 */;
import ScopeClass from "ScopeClass" /* 13302 */;

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod13282.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod13282.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}