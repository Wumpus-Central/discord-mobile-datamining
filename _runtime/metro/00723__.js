// _runtime/metro/00723__.js
import _mod701 from "00701__.js";
import Scope from "../00719_Scope.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function getDefaultCurrentScope() {
  return _mod701.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod701.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
