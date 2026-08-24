// === Module 7802: getDefaultCurrentScope ===

// Module 7802 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 7777 */;

require = arg1;
const dependencyMap = arg6;
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