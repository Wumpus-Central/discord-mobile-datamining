// _runtime/metro/12606__.js
import _mod12581 from "12581__.js";
import _mod12601 from "12601__.js";

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  const obj = _mod12581;
  return obj.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new _mod12601.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  const obj = _mod12581;
  return obj.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new _mod12601.Scope();
    return scope;
  });
};
