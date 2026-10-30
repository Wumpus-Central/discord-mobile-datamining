// _runtime/metro/00711__.js
import _mod689 from "00689__.js";
import Scope from "../00707_Scope.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function getDefaultCurrentScope() {
  return _mod689.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
export function getDefaultIsolationScope() {
  return _mod689.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
}
