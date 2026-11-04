// _runtime/metro/13300__.js
import _mod13275 from "13275__.js";
import ScopeClass from "../13295_ScopeClass.js";

require = arg1;
const dependencyMap = arg6;

export function getDefaultCurrentScope() {
  return _mod13275.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod13275.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
}
