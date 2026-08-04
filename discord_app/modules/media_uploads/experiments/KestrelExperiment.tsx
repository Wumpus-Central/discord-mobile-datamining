// discord_app/modules/media_uploads/experiments/KestrelExperiment.tsx
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-04-kestrel", kind: "user", defaultConfig: { enabled: false, threshold: 0 }, variations: { 0: { enabled: false, threshold: 0 }, 1: { enabled: true, threshold: 15 }, 2: { enabled: true, threshold: 20 }, 3: { enabled: true, threshold: 25 } } });
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/KestrelExperiment.tsx");

export const getKestrelConfig = function getKestrelConfig(location) {
  return config.getConfig({ location: location.location });
};
export const getEffectiveKestrelLimit = function getEffectiveKestrelLimit(kestrelConfig, maxFileSize) {
  let bound = maxFileSize;
  if (kestrelConfig.enabled) {
    const _Math = Math;
    bound = Math.max(1048576 * kestrelConfig.threshold, maxFileSize);
  }
  return bound;
};
export const getKestrelVariantName = function getKestrelVariantName(kestrelConfig) {
  let str = "control";
  if (kestrelConfig.enabled) {
    let str2 = "kestrel_a";
    if (15 !== kestrelConfig.threshold) {
      let str3 = "kestrel_b";
      if (20 !== kestrelConfig.threshold) {
        let str4 = "unknown";
        if (25 === kestrelConfig.threshold) {
          str4 = "kestrel_c";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};