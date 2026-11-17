// _runtime/metro/09836__.js
import _mod9811 from "09811__.js";
import ScopeClass from "../09831_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod9811.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod9811.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
