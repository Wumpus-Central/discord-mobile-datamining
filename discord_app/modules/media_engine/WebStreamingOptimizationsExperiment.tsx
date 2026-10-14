// discord_app/modules/media_engine/WebStreamingOptimizationsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-web-streaming-optimizations",
  kind: "user",
  defaultConfig: { degradationPreference: "default", motionContentHint: false },
  variations: null,
};
const obj2 = {
  1: null,
  2: { degradationPreference: "maintain-framerate", motionContentHint: false },
  3: { degradationPreference: "default", motionContentHint: true },
  4: { degradationPreference: "maintain-framerate", motionContentHint: true },
};
obj2[4] = { degradationPreference: "balanced", motionContentHint: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WebStreamingOptimizationsExperiment.tsx");

export const WebStreamingOptimizationsExperiment = apexExperiment;
