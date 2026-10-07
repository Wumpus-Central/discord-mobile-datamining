// === Module 9648: GoLiveAutoQualityExperiment ===

// Module 9648 (GoLiveAutoQualityExperiment)
import Storage3 from "Storage" /* 510 */;
import StreamActionCreators from "StreamActionCreators" /* 5038 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4942 */;
import ApexExperiment from "apex/ApexExperiment" /* 1441 */;

require = fn;
const ApplicationStreamPresets = fn(4943).ApplicationStreamPresets;
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
const ReactCompilerGating = fn(558);
function getGoLiveAutoQualityExperimentConfig(location) {
  return closure_6.getConfig({ location: location.location });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/GoLiveAutoQualityExperiment.tsx");

export { getGoLiveAutoQualityExperimentConfig };
export const useGoLiveAutoQualityExperimentConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = _location(576).c(3);
  _location = location.location;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== _location) {
    const fn = function n() {
      return config.getConfig({ location: _location });
    };
    cResult[1] = _location;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = _location(576);
  return _location(504).useStateFromStores(first, tmp6);
}) : ((location) => {
  location = location.location;
  const items = [ApexExperimentStore];
  return location(504).useStateFromStores(items, () => config.getConfig({ location }));
});
export const maybeMigrateToAutoQuality = function maybeMigrateToAutoQuality() {
  const Storage = Storage3.Storage;
  let num = Storage.get(GoLiveAutoQualityMigrationVersion);
  if (num == null) {
    num = 0;
  }
  if (closure_6.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality) {
    if (tmp4 < 1) {
      state = ApplicationStreamingSettingsStore.getState();
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