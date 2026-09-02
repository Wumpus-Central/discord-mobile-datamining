// === Module 844: getDefaultCurrentScope ===

// Module 844 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 822 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return getGlobalSingleton.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return getGlobalSingleton.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};