// _runtime/metro/00712__.js
import _mod690 from "00690__.js";
import Scope from "../00708_Scope.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod690.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod690.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new Scope.Scope();
    return scope;
  });
};
