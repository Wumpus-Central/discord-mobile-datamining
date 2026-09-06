// === Module 14059: AV1EncodeExperimentLinux ===

// Module 14059 (AV1EncodeExperimentLinux)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-06-av1-encode-linux", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};