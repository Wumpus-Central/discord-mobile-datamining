// === Module 10240: WindowsEffectsExperiment ===

// Module 10240 (WindowsEffectsExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;

const require = fn;
const obj = { preferSystemEffects: false };
const ApexExperiment = fn(1434);
const obj3 = { name: "2025-12-windows-audio-effects", kind: "user", defaultConfig: obj, variations: null };
const obj4 = { 1: null };
const obj5 = {};
const merged = Object.assign(obj);
obj5.preferSystemEffects = true;
obj4[1] = obj5;
obj3.variations = obj4;
const config = ApexExperiment.createApexExperiment(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export const getWindowsAudioEffectsExperimentConfig = function getWindowsAudioEffectsExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
export const useWindowsAudioEffectsExperimentConfig = function useWindowsAudioEffectsExperimentConfig(location) {
  location = location.location;
  const items = [ApexExperimentStore];
  return location(504).useStateFromStores(items, () => config.getConfig({ location }));
};