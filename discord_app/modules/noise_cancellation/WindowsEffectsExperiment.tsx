// === Module 10904: getWindowsAudioEffectsExperimentConfig ===

// Module 10904 (getWindowsAudioEffectsExperimentConfig)
import initialize from "initialize";
import ApexExperiment from "ApexExperiment";

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
const result = require("initialize").fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export const getWindowsAudioEffectsExperimentConfig = function getWindowsAudioEffectsExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
export const useWindowsAudioEffectsExperimentConfig = function useWindowsAudioEffectsExperimentConfig(location) {
  location = location.location;
  const items = [initialize];
  return location(589).useStateFromStores(items, () => outer1_3.getConfig({ location }));
};