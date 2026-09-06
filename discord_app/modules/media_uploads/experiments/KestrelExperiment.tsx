// discord_app/modules/media_uploads/experiments/KestrelExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-04-kestrel",
  kind: "user",
  defaultConfig: { enabled: false, threshold: 0 },
  variations: {
    0: { enabled: false, threshold: 0 },
    1: { enabled: true, threshold: 15 },
    2: { enabled: true, threshold: 20 },
    3: { enabled: true, threshold: 25 },
  },
};
let config = ApexExperiment.createApexExperiment(obj);
obj = {
  name: "2026-08-kestrel-ga",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const config2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/KestrelExperiment.tsx");

export const KESTREL_GA_UPLOAD_LIMIT_MB = 20;
export const getKestrelConfig = function getKestrelConfig(location) {
  const _location = location.location;
  if (config2.getConfig({ location: _location }).enabled) {
    return { enabled: true, threshold: 20, isGA: true };
  } else {
    let obj = { location: _location };
    config = config.getConfig(obj);
    obj = { enabled: null, threshold: null, isGA: false };
    ({ enabled: obj2.enabled, threshold: obj2.threshold } = config);
    return obj;
  }
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
  let str = "kestrel_ga";
  if (!kestrelConfig.isGA) {
    let str2 = "control";
    if (kestrelConfig.enabled) {
      let str3 = "kestrel_a";
      if (15 !== kestrelConfig.threshold) {
        let str4 = "kestrel_b";
        if (20 !== kestrelConfig.threshold) {
          let str5 = "unknown";
          if (25 === kestrelConfig.threshold) {
            str5 = "kestrel_c";
          }
          str4 = str5;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
