// discord_app/modules/clips/isClipsEnabled.tsx
import _migrateDefaultStorage from "_migrateDefaultStorage";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = require("ClipsExperiment.tsx") /* apexExperiment */.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    const result = require("ClipsSettingsRedesignExperiment.tsx") /* apexExperiment */.isClipsSettingsRedesignEnabled();
    let decoupledClipsEnabled = !result;
    if (result) {
      decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
    const tmpResult = require("ClipsSettingsRedesignExperiment.tsx") /* apexExperiment */;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = require("ClipsExperiment.tsx") /* apexExperiment */.useIsClipsAvailable();
  const obj = require("ClipsExperiment.tsx") /* apexExperiment */;
  const items = [_migrateDefaultStorage];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const isClipsSettingsRedesignEnabled = require("ClipsSettingsRedesignExperiment.tsx") /* apexExperiment */.useIsClipsSettingsRedesignEnabled();
  const obj3 = require("ClipsSettingsRedesignExperiment.tsx") /* apexExperiment */;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
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
  let clipsEnabled = require("ClipsExperiment.tsx") /* apexExperiment */.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    let tmpResult = tmp(4347);
    const result = tmpResult.isClipsSettingsRedesignEnabled();
    let decoupledClipsEnabled = !result;
    if (result) {
      decoupledClipsEnabled = obj2.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
  }
  tmpResult = tmp(500);
  const isWindowsResult = tmpResult.isWindows();
  const obj = require("ClipsExperiment.tsx") /* apexExperiment */;
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
  tmpResult1 = require("ClipsSettingsRedesignExperiment.tsx") /* apexExperiment */;
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let isClipsAvailable = require("ClipsExperiment.tsx") /* apexExperiment */.useIsClipsAvailable();
  const obj = require("ClipsExperiment.tsx") /* apexExperiment */;
  const items = [_migrateDefaultStorage];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const tmp4 = _migrateDefaultStorage;
  const isClipsSettingsRedesignEnabled = require("ClipsSettingsRedesignExperiment.tsx") /* apexExperiment */.useIsClipsSettingsRedesignEnabled();
  const obj3 = require("ClipsSettingsRedesignExperiment.tsx") /* apexExperiment */;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
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
  const obj4 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
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