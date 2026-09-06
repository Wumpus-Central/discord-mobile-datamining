// === Module 9956: GoLiveAutoQualityExperiment ===

// Module 9956 (GoLiveAutoQualityExperiment)
import Storage3 from "Storage" /* 510 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4606 */;
import ApexExperiment from "apex/ApexExperiment" /* 1434 */;

require = fn;
const ApplicationStreamPresets = fn(4607).ApplicationStreamPresets;
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
obj.variations = obj;
let closure_6 = ApexExperiment(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/GoLiveAutoQualityExperiment.tsx");

export const getGoLiveAutoQualityExperimentConfig = function getGoLiveAutoQualityExperimentConfig(location) {
  return closure_6.getConfig({ location: location.location });
};
export const useGoLiveAutoQualityExperimentConfig = function useGoLiveAutoQualityExperimentConfig(location) {
  location = location.location;
  const items = [ApexExperimentStore];
  return location(504).useStateFromStores(items, () => config.getConfig({ location }));
};
export const maybeMigrateToAutoQuality = function maybeMigrateToAutoQuality() {
  const Storage = Storage3.Storage;
  let num = Storage.get(GoLiveAutoQualityMigrationVersion);
  if (num == null) {
    num = 0;
  }
  if (closure_6.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality) {
    if (tmp4 < 1) {
      const state = ApplicationStreamingSettingsStore.getState();
      if (state.preset !== ApplicationStreamPresets.PRESET_CUSTOM) {
        const obj = { preset: tmp9.PRESET_AUTO, resolution: null, frameRate: null, soundshareEnabled: null, noTrack: true };
        ({ resolution: obj2.resolution, fps: obj2.frameRate, soundshareEnabled: obj2.soundshareEnabled } = state);
        tmp(4702).updateStreamSettings(obj);
        const Storage2 = tmp(510).Storage;
        const result = Storage2.set(GoLiveAutoQualityMigrationVersion, 1);
        const tmpResult = tmp(4702);
      }
    }
  }
};