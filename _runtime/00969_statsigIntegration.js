// === Module 969: statsigIntegration ===

// Module 969 (statsigIntegration)
import registerSpanErrorInstrumentation from "module_681" /* 681 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const statsigIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClient) => {
  featureFlagClient = featureFlagClient.featureFlagClient;
  return {
    name: "Statsig",
    setup(arg0) {
      featureFlagClient.on("gate_evaluation", (gate) => {
        const result = featureFlagClient(681)._INTERNAL_insertFlagToScope(gate.gate.name, gate.gate.value);
        const obj = featureFlagClient(681);
        const result1 = featureFlagClient(681)._INTERNAL_addFeatureFlagToActiveSpan(gate.gate.name, gate.gate.value);
      });
    },
    processEvent(contexts, arg1, arg2) {
      return featureFlagClient(dependencyMap[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});