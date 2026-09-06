// _runtime/00072_unstable_hasComponent.js
const global = arg0;
const map = new Map();

export const unstable_hasComponent = function unstable_hasComponent(arg0) {
  value = map.get(arg0);
  if (null == value) {
    if (global.__nativeComponentRegistry__hasComponent) {
      const result = obj2.__nativeComponentRegistry__hasComponent(arg0);
      const result1 = map.set(arg0, result);
      value = result;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("unstable_hasComponent('" + arg0 + "'): Global function is not registered");
      throw error;
    }
    obj2 = global;
  }
  return value;
};
