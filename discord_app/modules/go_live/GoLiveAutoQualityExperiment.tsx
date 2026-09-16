// === Module 10096: GoLiveAutoQualityExperiment ===

// Module 10096 (GoLiveAutoQualityExperiment)
import Storage3 from "Storage" /* 510 */;
import StreamActionCreators from "StreamActionCreators" /* 4780 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4684 */;
import ApexExperiment from "apex/ApexExperiment" /* 1435 */;

require = fn;
const ApplicationStreamPresets = fn(4685).ApplicationStreamPresets;
let obj = { allowAutoQuality: false, defaultAutoQuality: false, migrateAutoQuality: false };
const GoLiveAutoQualityMigrationVersion = "GoLiveAutoQualityMigrationVersion";
const obj2 = { name: "2025-10-go-live-auto-quality", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 1: null, 2: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.allowAutoQuality = true;
obj4.migrateAutoQuality = true;
obj3[1] = obj4;
const obj5 = {};
const merged1 = Object.assign(obj);
obj5.allowAutoQuality = true;
obj5.defaultAutoQuality = true;
obj3[2] = obj5;
obj2.variations = obj3;
let closure_6 = ApexExperiment(obj2);
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
        StreamActionCreators.updateStreamSettings(obj);
        const Storage2 = Storage3.Storage;
        const result = Storage2.set(GoLiveAutoQualityMigrationVersion, 1);
        const tmpResult = StreamActionCreators;
      }
    }
  }
};