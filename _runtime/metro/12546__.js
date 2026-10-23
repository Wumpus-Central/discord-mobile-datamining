// _runtime/metro/12546__.js
import _mod12521 from "12521__.js";
import ScopeClass from "../12541_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12521.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12521.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
