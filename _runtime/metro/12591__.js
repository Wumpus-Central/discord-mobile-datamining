// === Module 12591: ? ===

// Module 12591
import _mod12566 from "module_12566" /* 12566 */;
import ScopeClass from "ScopeClass" /* 12586 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12566.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12566.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};