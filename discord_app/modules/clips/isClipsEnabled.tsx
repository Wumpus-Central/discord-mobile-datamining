// discord_app/modules/clips/isClipsEnabled.tsx
import apexExperiment from "ClipsExperiment.tsx";
import closure_2 from "ClipsStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = apexExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = state.getState().clipsSettings.clipsEnabled;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = apexExperiment.useIsClipsAvailable();
  const obj = apexExperiment;
  const items = [closure_2];
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
};