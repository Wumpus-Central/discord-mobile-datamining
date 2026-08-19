// === Module 72: map ===

// Module 72 (map)
const global = arg0;
const map = new Map();
arg5.unstable_hasComponent = function unstable_hasComponent(arg0) {
  let value = map.get(arg0);
  if (null == value) {
    if (global.__nativeComponentRegistry__hasComponent) {
      const result = global.__nativeComponentRegistry__hasComponent(arg0);
      const result1 = map.set(arg0, result);
      value = result;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("unstable_hasComponent('" + arg0 + "'): Global function is not registered");
      throw error;
    }
  }
  return value;
};