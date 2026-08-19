// discord_app/modules/noise_cancellation/WindowsEffectsExperiment.tsx
import initialize from "../experiments/apex/ApexExperimentStore.tsx";
import "ApexExperiment";

const require = fn;
let obj = { preferSystemEffects: false };
obj = { 1: null };
const ApexExperiment = {};
const merged = Object.assign(obj);
ApexExperiment.preferSystemEffects = true;
obj[1] = ApexExperiment;
obj[3] = obj;
let closure_3 = ApexExperiment.createApexExperiment(obj);
const result = require("obj132").fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export const getWindowsAudioEffectsExperimentConfig = function getWindowsAudioEffectsExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
export const useWindowsAudioEffectsExperimentConfig = function useWindowsAudioEffectsExperimentConfig(location) {
  location = location.location;
  const items = [closure_2];
  return location(589).useStateFromStores(items, () => closure_1_3.getConfig({ location }));
};