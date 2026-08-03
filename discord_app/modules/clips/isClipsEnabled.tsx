// === Module 4251: isClipsEnabled ===

// Module 4251 (isClipsEnabled)
import _migrateDefaultStorage from "_migrateDefaultStorage";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = require(4252) /* apexExperiment */.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    const result = require(4256) /* apexExperiment */.isClipsSettingsRedesignEnabled();
    let decoupledClipsEnabled = !result;
    if (result) {
      decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
    const tmpResult = require(4256) /* apexExperiment */;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = require(4252) /* apexExperiment */.useIsClipsAvailable();
  const obj = require(4252) /* apexExperiment */;
  const items = [_migrateDefaultStorage];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = require(589) /* initialize */;
  const isClipsSettingsRedesignEnabled = require(4256) /* apexExperiment */.useIsClipsSettingsRedesignEnabled();
  const obj3 = require(4256) /* apexExperiment */;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
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
  let clipsEnabled = require(4252) /* apexExperiment */.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    let tmpResult = tmp(4256);
    const result = tmpResult.isClipsSettingsRedesignEnabled();
    let decoupledClipsEnabled = !result;
    if (result) {
      decoupledClipsEnabled = obj2.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
  }
  tmpResult = tmp(500);
  const isWindowsResult = tmpResult.isWindows();
  const obj = require(4252) /* apexExperiment */;
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
  tmpResult1 = require(4256) /* apexExperiment */;
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let isClipsAvailable = require(4252) /* apexExperiment */.useIsClipsAvailable();
  const obj = require(4252) /* apexExperiment */;
  const items = [_migrateDefaultStorage];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = require(589) /* initialize */;
  const tmp4 = _migrateDefaultStorage;
  const isClipsSettingsRedesignEnabled = require(4256) /* apexExperiment */.useIsClipsSettingsRedesignEnabled();
  const obj3 = require(4256) /* apexExperiment */;
  const items1 = [_migrateDefaultStorage];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
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
  const obj4 = require(589) /* initialize */;
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