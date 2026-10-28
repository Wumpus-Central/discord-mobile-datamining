// === Module 5872: WebStreamingOptimizationsExperiment ===

// Module 5872 (WebStreamingOptimizationsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-web-streaming-optimizations", kind: "user", defaultConfig: { degradationPreference: "default", motionContentHint: false, cpuFallback: false }, variations: null };
const obj2 = { 1: null, 2: { degradationPreference: "maintain-framerate", motionContentHint: false, cpuFallback: false }, 3: { degradationPreference: "default", motionContentHint: true, cpuFallback: false }, 4: { degradationPreference: "maintain-framerate", motionContentHint: true, cpuFallback: false }, 5: { degradationPreference: "balanced", motionContentHint: false, cpuFallback: false }, 6: { degradationPreference: "maintain-resolution", motionContentHint: true, cpuFallback: false } };
obj2[6] = { degradationPreference: "maintain-resolution", motionContentHint: true, cpuFallback: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WebStreamingOptimizationsExperiment.tsx");

export const WebStreamingOptimizationsExperiment = apexExperiment;