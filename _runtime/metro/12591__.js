// === Module 12591: ? ===

// Module 12591
import _mod12566 from "module_12566" /* 12566 */;
import _mod12586 from "module_12586" /* 12586 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12566;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12586.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12566;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12586.Scope();
    return scope;
  });
};