// _runtime/01104_OpenFeatureIntegrationHook.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

const OpenFeatureIntegrationHook = require;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class OpenFeatureIntegrationHook {
  constructor() {
    tmp = outer1_2(this, OpenFeatureIntegrationHook);
    return;
  }
}
const items = [
  {
    key: "after",
    value: function after(arg0, flagKey) {
      const result = OpenFeatureIntegrationHook(817)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.value);
      const obj = OpenFeatureIntegrationHook(817);
      const result1 = OpenFeatureIntegrationHook(817)._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.value);
    }
  },
  {
    key: "error",
    value: function error(flagKey) {
      const result = OpenFeatureIntegrationHook(817)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.defaultValue);
      const obj = OpenFeatureIntegrationHook(817);
      const result1 = OpenFeatureIntegrationHook(817)._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.defaultValue);
    }
  }
];

export const OpenFeatureIntegrationHook = _createClass(OpenFeatureIntegrationHook, items);
export const openFeatureIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "OpenFeature",
  processEvent(contexts) {
    return callback(table[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  }
}));