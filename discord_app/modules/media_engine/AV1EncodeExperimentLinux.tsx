// discord_app/modules/media_engine/AV1EncodeExperimentLinux.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-06-av1-encode-linux", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
