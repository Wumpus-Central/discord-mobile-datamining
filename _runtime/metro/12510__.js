// _runtime/metro/12510__.js
import _mod12485 from "12485__.js";
import ScopeClass from "../12505_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12485.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12485.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
