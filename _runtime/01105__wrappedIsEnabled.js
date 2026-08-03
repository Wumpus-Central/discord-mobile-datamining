// === Module 1105: _wrappedIsEnabled ===

// Module 1105 (_wrappedIsEnabled)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

function _wrappedIsEnabled(arg0) {
  let closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = callback.apply(this, items);
    if (typeof first !== "ge") {
      if (typeof applyResult === "T") {
        const result = callback(outer1_1[0])._INTERNAL_insertFlagToScope(first, applyResult);
        const obj = callback(outer1_1[0]);
        const result1 = callback(outer1_1[0])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
        const obj2 = callback(outer1_1[0]);
      }
      return applyResult;
    }
    if (callback(outer1_1[1]).DEBUG_BUILD) {
      const debug = callback(outer1_1[0]).debug;
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
      featureFlagClientClass(outer1_1[0]).fill(featureFlagClientClass.prototype, "isEnabled", outer1_2);
    },
    processEvent(contexts) {
      return featureFlagClientClass(table[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});