// discord_app/modules/clips/isClipsEnabled.tsx
import _migrateDefaultStorage from "_migrateDefaultStorage";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { apexExperiment } from "ClipsExperiment.tsx";
import { apexExperiment } from "ClipsSettingsRedesignExperiment.tsx";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = apexExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    const result = apexExperiment.isClipsSettingsRedesignEnabled();
    let decoupledClipsEnabled = !result;
    if (result) {
      decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
    const tmpResult = apexExperiment;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = apexExperiment.useIsClipsAvailable();
  const obj = apexExperiment;
  const items = [_migrateDefaultStorage];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = initialize;
  const isClipsSettingsRedesignEnabled = apexExperiment.useIsClipsSettingsRedesignEnabled();
  const obj3 = apexExperiment;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    let tmp5 = !isClipsSettingsRedesignEnabled;
    if (isClipsSettingsRedesignEnabled) {
      tmp5 = stateFromStores1;
    }
    isClipsAvailable = tmp5;
  }
  return isClipsAvailable;
};
export const isDecoupledClipsEnabled = function isDecoupledClipsEnabled() {
  let clipsEnabled = apexExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    let tmpResult = tmp(4317);
    const result = tmpResult.isClipsSettingsRedesignEnabled();
    let decoupledClipsEnabled = !result;
    if (result) {
      decoupledClipsEnabled = obj2.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
  }
  tmpResult = tmp(500);
  const isWindowsResult = tmpResult.isWindows();
  const obj = apexExperiment;
  if (tmpResult1.isClipsSettingsRedesignEnabled()) {
    if (clipsEnabled) {
      clipsEnabled = isWindowsResult;
    }
    return clipsEnabled;
  } else {
    let decoupledClipsEnabled2 = clipsEnabled;
    if (clipsEnabled) {
      decoupledClipsEnabled2 = isWindowsResult;
    }
    if (decoupledClipsEnabled2) {
      decoupledClipsEnabled2 = obj2.getState().clipsSettings.decoupledClipsEnabled;
    }
    return decoupledClipsEnabled2;
  }
  tmpResult1 = apexExperiment;
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let isClipsAvailable = apexExperiment.useIsClipsAvailable();
  const obj = apexExperiment;
  const items = [_migrateDefaultStorage];
  const stateFromStores = initialize.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = initialize;
  const tmp4 = _migrateDefaultStorage;
  const isClipsSettingsRedesignEnabled = apexExperiment.useIsClipsSettingsRedesignEnabled();
  const obj3 = apexExperiment;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    let tmp8 = !isClipsSettingsRedesignEnabled;
    if (isClipsSettingsRedesignEnabled) {
      tmp8 = stateFromStores1;
    }
    isClipsAvailable = tmp8;
  }
  let tmpResult = tmp(500);
  const isWindowsResult = tmpResult.isWindows();
  tmpResult = tmp(589);
  const items2 = [tmp4];
  const stateFromStores2 = tmpResult.useStateFromStores(items2, () => store.getState().clipsSettings.decoupledClipsEnabled);
  const obj4 = initialize;
  if (tmpResult1.useIsClipsSettingsRedesignEnabled()) {
    if (isClipsAvailable) {
      isClipsAvailable = isWindowsResult;
    }
    let tmp11 = isClipsAvailable;
  } else {
    tmp11 = isClipsAvailable;
    if (isClipsAvailable) {
      tmp11 = isWindowsResult;
    }
    if (tmp11) {
      tmp11 = stateFromStores2;
    }
  }
  return tmp11;
};