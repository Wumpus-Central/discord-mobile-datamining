// _runtime/metro/12827__.js
import _mod12802 from "12802__.js";
import ScopeClass from "../12822_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12802.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12802.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
