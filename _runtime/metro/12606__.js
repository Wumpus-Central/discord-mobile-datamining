// === Module 12606: ? ===

// Module 12606
import _mod12581 from "module_12581" /* 12581 */;
import _mod12601 from "module_12601" /* 12601 */;


export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12581;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12601.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12581;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12601.Scope();
    return scope;
  });
};