// === Module 4526: isClipsEnabled ===

// Module 4526 (isClipsEnabled)
import initialize from "initialize" /* 589 */;
import apexExperiment from "apexExperiment" /* 4527 */;
import _migrateDefaultStorage from "_migrateDefaultStorage" /* 4503 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let decoupledClipsEnabled = apexExperiment.areClipsAvailable();
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
  }
  return decoupledClipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = apexExperiment.useIsClipsAvailable();
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const items1 = [closure_2];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores1;
  }
  return isClipsAvailable;
};
export const isDecoupledClipsEnabled = function isDecoupledClipsEnabled() {
  let decoupledClipsEnabled = apexExperiment.areClipsAvailable();
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
  }
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = tmpResult.isWindows();
  }
  return decoupledClipsEnabled;
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let isClipsAvailable = apexExperiment.useIsClipsAvailable();
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const items1 = [closure_2];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores1;
  }
  if (isClipsAvailable) {
    isClipsAvailable = tmpResult.isWindows();
  }
  return isClipsAvailable;
};