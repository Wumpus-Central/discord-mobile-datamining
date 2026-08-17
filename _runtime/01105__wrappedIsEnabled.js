// _runtime/01105__wrappedIsEnabled.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

function _wrappedIsEnabled(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = callback.apply(this, items);
    if (typeof first === "string") {
      if (typeof applyResult === "boolean") {
        const result = callback(closure_1_1[0])._INTERNAL_insertFlagToScope(first, applyResult);
        const obj = callback(closure_1_1[0]);
        const result1 = callback(closure_1_1[0])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
        const obj2 = callback(closure_1_1[0]);
      }
      return applyResult;
    }
    if (callback(closure_1_1[1]).DEBUG_BUILD) {
      const debug = callback(closure_1_1[0]).debug;
      const _HermesInternal = HermesInternal;
      debug.error("[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: " + first + " (" + typeof first + "), result: " + applyResult + " (" + typeof applyResult + ")");
    }
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const unleashIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClientClass) => {
  featureFlagClientClass = featureFlagClientClass.featureFlagClientClass;
  return {
    name: "Unleash",
    setupOnce() {
      featureFlagClientClass(closure_1_1[0]).fill(featureFlagClientClass.prototype, "isEnabled", closure_1_2);
    },
    processEvent(contexts) {
      return featureFlagClientClass(table[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});