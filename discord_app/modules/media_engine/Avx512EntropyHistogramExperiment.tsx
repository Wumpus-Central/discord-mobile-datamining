// discord_app/modules/media_engine/Avx512EntropyHistogramExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-10-avx512-entropy-histogram",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/media_engine/Avx512EntropyHistogramExperiment.tsx");

export const getIsAvx512EntropyHistogramEnabled = function getIsAvx512EntropyHistogramEnabled(RTCConnection) {
  return config.getConfig({ location: RTCConnection }).enabled;
};
