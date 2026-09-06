// === Module 972: statsigIntegration ===

// Module 972 (statsigIntegration)
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const statsigIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClient) => {
  featureFlagClient = featureFlagClient.featureFlagClient;
  return {
    name: "Statsig",
    setup(arg0) {
      featureFlagClient.on("gate_evaluation", (gate) => {
        const result = featureFlagClient(682)._INTERNAL_insertFlagToScope(gate.gate.name, gate.gate.value);
        const obj = featureFlagClient(682);
        const result1 = featureFlagClient(682)._INTERNAL_addFeatureFlagToActiveSpan(gate.gate.name, gate.gate.value);
      });
    },
    processEvent(contexts, arg1, arg2) {
      return featureFlagClient(dependencyMap[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});