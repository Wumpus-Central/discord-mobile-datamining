// discord_app/modules/media_engine/WindowsMediaFoundationGpuEncode.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2025-12-wmf-gpu-encode", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncode.tsx");

export const getWmfGpuEncode = function getWmfGpuEncode(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
