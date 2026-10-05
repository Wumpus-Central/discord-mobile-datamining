// _runtime/metro/12591__.js
import _mod12566 from "12566__.js";
import _mod12586 from "12586__.js";

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12566;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12586.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12566;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12586.Scope();
    return scope;
  });
};
