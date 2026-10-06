// === Module 9648: GoLiveAutoQualityExperiment ===

// Module 9648 (GoLiveAutoQualityExperiment)
import Storage3 from "Storage" /* 510 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4943 */;
import StreamActionCreators from "StreamActionCreators" /* 5038 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4942 */;
import ApexExperiment from "apex/ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj3;
const ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
let obj = { allowAutoQuality: false, defaultAutoQuality: false, migrateAutoQuality: false };
const GoLiveAutoQualityMigrationVersion = "GoLiveAutoQualityMigrationVersion";
const obj2 = { name: "2025-10-go-live-auto-quality", kind: "user", defaultConfig: obj, variations: obj3 };
obj3 = { 1: null, 2: null };
const obj4 = { allowAutoQuality: true, migrateAutoQuality: true };
const merged = Object.assign(obj);
obj3[1] = obj4;
const obj5 = { allowAutoQuality: true, defaultAutoQuality: true };
const merged1 = Object.assign(obj);
obj3[2] = obj5;
let closure_6 = ApexExperiment(obj2);
function getGoLiveAutoQualityExperimentConfig(location) {
  const obj = { location: location.location };
  return closure_6.getConfig(obj);
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let _location;
  let config;
  let first;
  let tmp6;
  let obj = _location(576);
  const cResult = obj.c(3);
  const tmp = _location;
  _location = location.location;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== _location) {
    const fn = function n() {
      const obj = { location: _location };
      return config.getConfig(obj);
    };
    cResult[1] = _location;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((location) => {
  let config;
  location = location.location;
  let obj = location(504);
  const items = [ApexExperimentStore];
  return obj.useStateFromStores(items, () => {
    const obj = { location };
    return config.getConfig(obj);
  });
});
let result = size.fileFinishedImporting("modules/go_live/GoLiveAutoQualityExperiment.tsx");

export { getGoLiveAutoQualityExperimentConfig };
export const useGoLiveAutoQualityExperimentConfig = tmp5;
export const maybeMigrateToAutoQuality = function maybeMigrateToAutoQuality() {
  const migrateAutoQuality = closure_6.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality;
  const Storage = Storage3.Storage;
  let num = Storage.get(GoLiveAutoQualityMigrationVersion);
  if (num == null) {
    num = 0;
  }
  if (migrateAutoQuality) {
    if (tmp4 < 1) {
      const state = ApplicationStreamingSettingsStore.getState();
      if (state.preset !== ApplicationStreamPresets.PRESET_CUSTOM) {
        const obj = { preset: tmp9.PRESET_AUTO, resolution: null, frameRate: null, soundshareEnabled: null, noTrack: true };
        ({ resolution: obj2.resolution, fps: obj2.frameRate, soundshareEnabled: obj2.soundshareEnabled } = state);
        const tmpResult = StreamActionCreators;
        tmpResult.updateStreamSettings(obj);
        const Storage2 = Storage3.Storage;
        const result = Storage2.set(GoLiveAutoQualityMigrationVersion, 1);
      }
    }
  }
};