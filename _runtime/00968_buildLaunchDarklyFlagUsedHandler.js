// _runtime/00968_buildLaunchDarklyFlagUsedHandler.js
import registerSpanErrorInstrumentation from "00682_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function buildLaunchDarklyFlagUsedHandler() {
  return {
    name: "sentry-flag-auditor",
    type: "flag-used",
    synchronous: true,
    method(closure_2) {
      const result = callback(682)._INTERNAL_insertFlagToScope(closure_2, arg1.value);
      const obj = callback(682);
      const result1 = callback(682)._INTERNAL_addFeatureFlagToActiveSpan(closure_2, arg1.value);
    },
  };
}
export const launchDarklyIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "LaunchDarkly",
  processEvent(contexts) {
    return callback(table[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
}));
