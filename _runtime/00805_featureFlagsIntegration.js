// _runtime/00805_featureFlagsIntegration.js
import _INTERNAL_FLAG_BUFFER_SIZE from "00806__INTERNAL_FLAG_BUFFER_SIZE.js";
import 00763__ from "metro/00763__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = module_763.defineIntegration(() => {
  let obj = {
    name: "FeatureFlags",
    processEvent(contexts, arg1, arg2) {
      const obj = _INTERNAL_FLAG_BUFFER_SIZE;
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    },
    addFeatureFlag(flagKey, value) {
      const obj = _INTERNAL_FLAG_BUFFER_SIZE;
      const result = obj._INTERNAL_insertFlagToScope(flagKey, value);
      const obj2 = _INTERNAL_FLAG_BUFFER_SIZE;
      const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(flagKey, value);
    }
  };
  return obj;
});