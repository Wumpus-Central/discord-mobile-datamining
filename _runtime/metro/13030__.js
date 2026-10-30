// _runtime/metro/13030__.js
import _mod13005 from "13005__.js";
import ScopeClass from "../13025_ScopeClass.js";

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
