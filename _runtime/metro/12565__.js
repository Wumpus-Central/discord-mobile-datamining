// _runtime/metro/12565__.js
import _mod12540 from "12540__.js";
import ScopeClass from "../12560_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12540.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12540.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
