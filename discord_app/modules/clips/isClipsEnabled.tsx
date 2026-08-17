// discord_app/modules/clips/isClipsEnabled.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import apexExperiment from "ClipsExperiment.tsx";
import closure_2 from "ClipsStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

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
  const obj = apexExperiment;
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = initialize;
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
    decoupledClipsEnabled = obj2.getState().clipsSettings.decoupledClipsEnabled;
  }
  const obj = apexExperiment;
  obj2 = store;
  const tmp = require;
  if (decoupledClipsEnabled) {
    decoupledClipsEnabled = tmpResult.isWindows();
  }
  return decoupledClipsEnabled;
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let isClipsAvailable = apexExperiment.useIsClipsAvailable();
  const obj = apexExperiment;
  const tmp = require;
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = initialize;
  const items1 = [closure_2];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores1;
  }
  const obj3 = initialize;
  if (isClipsAvailable) {
    isClipsAvailable = tmpResult.isWindows();
  }
  return isClipsAvailable;
};