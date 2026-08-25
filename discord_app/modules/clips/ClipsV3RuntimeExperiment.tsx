// === Module 4958: apexExperiment ===

// Module 4958 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { 1: null, 2: { enableClipsV3: true, enableClipsV3ML: false } };
obj[2] = { enableClipsV3: true, enableClipsV3ML: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-clips-v3-runtime", defaultConfig: { enableClipsV3: false, enableClipsV3ML: false }, variations: obj });
let c1 = null;
const result = set.fileFinishedImporting("modules/clips/ClipsV3RuntimeExperiment.tsx");

export const ClipsV3RuntimeExperiment = apexExperiment;
export const isClipsV3Enabled = function isClipsV3Enabled(location) {
  return apexExperiment.getConfig({ location }).enableClipsV3;
};
export const useIsClipsV3Enabled = function useIsClipsV3Enabled(location) {
  return apexExperiment.useConfig({ location }).enableClipsV3;
};
export function setActiveClipsRuntime(arg0) {
  closure_1 = arg0;
}
export const getClipsRuntime = function getClipsRuntime(classifyHardwareAndTrack) {
  if (null != c1) {
    let str = c1;
  } else {
    const obj = { location: null };
    obj[0] = classifyHardwareAndTrack;
    str = "v1";
    if (apexExperiment.getConfig(obj).enableClipsV3) {
      str = "v3";
    }
  }
  return str;
};
export const isClipsV3MLEnabled = function isClipsV3MLEnabled(location) {
  const config = apexExperiment.getConfig({ location });
  return config.enableClipsV3 && config.enableClipsV3ML;
};
export const useIsClipsV3MLEnabled = function useIsClipsV3MLEnabled(location) {
  const config = apexExperiment.useConfig({ location });
  return config.enableClipsV3 && config.enableClipsV3ML;
};