// === Module 15443: isClipsEnabled ===

// Module 15443 (isClipsEnabled)
import ClipsExperiment from "ClipsExperiment" /* 15444 */;
import ClipsStore from "ClipsStore" /* 2141 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export function isClipsEnabled() {
  let clipsEnabled = ClipsExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = ClipsStore.getState().clipsSettings.clipsEnabled;
  }
  return clipsEnabled;
}
export function useIsClipsEnabled() {
  let isClipsAvailable = ClipsExperiment.useIsClipsAvailable();
  items = [ClipsStore];
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
}