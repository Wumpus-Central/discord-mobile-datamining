// === Module 10950: getWindowsAudioEffectsExperimentConfig ===

// Module 10950 (getWindowsAudioEffectsExperimentConfig)
import closure_2 from "initialize" /* 1212 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const require = arg1;
let obj = { preferSystemEffects: false };
obj = { name: "2025-12-windows-audio-effects", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
ApexExperiment = {};
const merged = Object.assign(obj);
ApexExperiment.preferSystemEffects = true;
obj[1] = ApexExperiment;
obj[3] = obj;
let closure_3 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export const getWindowsAudioEffectsExperimentConfig = function getWindowsAudioEffectsExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
export const useWindowsAudioEffectsExperimentConfig = function useWindowsAudioEffectsExperimentConfig(location) {
  location = location.location;
  const items = [closure_2];
  return location(589).useStateFromStores(items, () => closure_1_3.getConfig({ location }));
};