// _runtime/00969_OpenFeatureIntegrationHook.js
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import registerSpanErrorInstrumentation from "00682_registerSpanErrorInstrumentation.js";

const OpenFeatureIntegrationHook = require;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class OpenFeatureIntegrationHook {
  constructor() {
    tmp = closure_2(this, OpenFeatureIntegrationHook);
    return;
  }
}
const items = [
  {
    key: "after",
    value: function after(arg0, flagKey) {
      const result = OpenFeatureIntegrationHook(682)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.value);
      const obj = OpenFeatureIntegrationHook(682);
      const result1 = OpenFeatureIntegrationHook(682)._INTERNAL_addFeatureFlagToActiveSpan(
        flagKey.flagKey,
        flagKey.value,
      );
    },
  },
  {
    key: "error",
    value: function error(flagKey) {
      const result = OpenFeatureIntegrationHook(682)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.defaultValue);
      const obj = OpenFeatureIntegrationHook(682);
      const result1 = OpenFeatureIntegrationHook(682)._INTERNAL_addFeatureFlagToActiveSpan(
        flagKey.flagKey,
        flagKey.defaultValue,
      );
    },
  },
];

export const OpenFeatureIntegrationHook = _createClass(OpenFeatureIntegrationHook, items);
export const openFeatureIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "OpenFeature",
  processEvent(contexts) {
    return callback(table[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
}));
