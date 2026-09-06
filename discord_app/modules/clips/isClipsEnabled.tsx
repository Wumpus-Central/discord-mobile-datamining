// === Module 13674: isClipsEnabled ===

// Module 13674 (isClipsEnabled)
import ClipsExperiment from "ClipsExperiment" /* 13675 */;
import ClipsStore from "ClipsStore" /* 1914 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = ClipsExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = ClipsStore.getState().clipsSettings.clipsEnabled;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = ClipsExperiment.useIsClipsAvailable();
  const items = [ClipsStore];
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
};