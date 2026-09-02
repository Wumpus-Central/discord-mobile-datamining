// === Module 10069: getGoLiveAutoQualityExperimentConfig ===

// Module 10069 (getGoLiveAutoQualityExperimentConfig)
import Storage3 from "Storage" /* 592 */;
import closure_2 from "initialize" /* 1209 */;
import closure_3 from "ApplicationStreamPresets" /* 4572 */;
import { ApplicationStreamPresets } from "RESOLUTION_720" /* 4537 */;
import importDefaultResult from "getUnitId" /* 1468 */;

require = arg1;
let obj = { allowAutoQuality: false, defaultAutoQuality: false, migrateAutoQuality: false };
const GoLiveAutoQualityMigrationVersion = "GoLiveAutoQualityMigrationVersion";
obj = { name: "2025-10-go-live-auto-quality", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null, 2: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.allowAutoQuality = true;
obj1.migrateAutoQuality = true;
obj[1] = obj1;
const obj2 = {};
const merged1 = Object.assign(obj);
obj2.allowAutoQuality = true;
obj2.defaultAutoQuality = true;
obj[2] = obj2;
obj[3] = obj;
let closure_6 = importDefaultResult(obj);
let result = require("set").fileFinishedImporting("modules/go_live/GoLiveAutoQualityExperiment.tsx");

export const getGoLiveAutoQualityExperimentConfig = function getGoLiveAutoQualityExperimentConfig(location) {
  return store.getConfig({ location: location.location });
};
export const useGoLiveAutoQualityExperimentConfig = function useGoLiveAutoQualityExperimentConfig(location) {
  location = location.location;
  const items = [closure_2];
  return location(586).useStateFromStores(items, () => closure_1_6.getConfig({ location }));
};
export const maybeMigrateToAutoQuality = function maybeMigrateToAutoQuality() {
  const Storage = Storage3.Storage;
  let num = Storage.get(GoLiveAutoQualityMigrationVersion);
  if (num == null) {
    num = 0;
  }
  if (store.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality) {
    if (tmp4 < 1) {
      state = state.getState();
      if (state.preset !== ApplicationStreamPresets.PRESET_CUSTOM) {
        const obj = { preset: null, resolution: null, frameRate: null, soundshareEnabled: null, noTrack: true };
        obj[0] = tmp9.PRESET_AUTO;
        ({ resolution: obj2[1], fps: obj2[2], soundshareEnabled: obj2[3] } = state);
        tmp(4663).updateStreamSettings(obj);
        const Storage2 = tmp(592).Storage;
        const result = Storage2.set(GoLiveAutoQualityMigrationVersion, 1);
        const tmpResult = tmp(4663);
      }
    }
  }
};