// _runtime/metro/13304__.js
import _mod13279 from "13279__.js";
import ScopeClass from "../13299_ScopeClass.js";

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
