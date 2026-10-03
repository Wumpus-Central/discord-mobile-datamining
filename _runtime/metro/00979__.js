// === Module 979: ? ===

// Module 979
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function buildLaunchDarklyFlagUsedHandler() {
  return {
    name: "sentry-flag-auditor",
    type: "flag-used",
    synchronous: true,
    method(flagKey, arg1, arg2) {
      const result = registerSpanErrorInstrumentation._INTERNAL_insertFlagToScope(flagKey, arg1.value);
      const result1 = registerSpanErrorInstrumentation._INTERNAL_addFeatureFlagToActiveSpan(flagKey, arg1.value);
    }
  };
}
export const launchDarklyIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "LaunchDarkly",
  processEvent(contexts, arg1, arg2) {
    return registerSpanErrorInstrumentation._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  }
}));