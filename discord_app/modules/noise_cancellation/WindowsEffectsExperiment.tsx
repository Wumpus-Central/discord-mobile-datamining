// discord_app/modules/noise_cancellation/WindowsEffectsExperiment.tsx
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";

const require = fn;
let obj = { preferSystemEffects: false };
fn(1433);
obj = { name: "2025-12-windows-audio-effects", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
const ApexExperiment = {};
const merged = Object.assign(obj);
ApexExperiment.preferSystemEffects = true;
obj[1] = ApexExperiment;
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
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
