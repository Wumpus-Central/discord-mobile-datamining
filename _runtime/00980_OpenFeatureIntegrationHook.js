// _runtime/00980_OpenFeatureIntegrationHook.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class OpenFeatureIntegrationHook {
  constructor() {
    _classCallCheck(this, OpenFeatureIntegrationHook);
  }
}
const entry = {
  key: "after",
  value: function after(arg0, flagKey) {
    const obj = registerSpanErrorInstrumentation;
    const result = obj._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.value);
    const obj2 = registerSpanErrorInstrumentation;
    const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.value);
  },
};
const items = [
  entry,
  {
    key: "error",
    value: function error(flagKey, arg1, arg2) {
      const obj = registerSpanErrorInstrumentation;
      const result = obj._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.defaultValue);
      const obj2 = registerSpanErrorInstrumentation;
      const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.defaultValue);
    },
  },
];
const defineIntegrationResult = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "OpenFeature",
    processEvent(contexts, arg1, arg2) {
      const obj = registerSpanErrorInstrumentation;
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    },
  };
  return obj;
});
const OpenFeatureIntegrationHook_export = _createClass(OpenFeatureIntegrationHook, items);

export { OpenFeatureIntegrationHook_export as OpenFeatureIntegrationHook };
export const openFeatureIntegration = defineIntegrationResult;
