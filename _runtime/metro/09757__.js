// _runtime/metro/09757__.js
import _mod9732 from "09732__.js";
import ScopeClass from "../09752_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod9732.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod9732.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
