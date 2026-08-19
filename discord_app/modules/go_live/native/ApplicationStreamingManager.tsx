// === Module 17074: platformShowStreamFull ===

// Module 17074 (platformShowStreamFull)
import timestampDefault from "timestamp" /* 3 */;
import noopAll from "noop" /* 19 */;
import _modDef4656 from "module_4656" /* 4656 */;
import apexExperimentDefault from "apexExperiment" /* 10938 */;
import updateRegionDefault from "updateRegion" /* 17075 */;
import ApplicationStreamPresets from "ApplicationStreamPresets" /* 4562 */;
import { ApplicationStreamPresets } from "RESOLUTION_720" /* 4524 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4529 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let obj = new timestampDefault("ApplicationStreamingManager");
obj.enableNativeLogger(true);
updateRegionDefault;
class ApplicationStreamingManager extends tmp4 {
}
const prototype = ApplicationStreamingManager.prototype;
prototype["platformShowStreamFull"] = function platformShowStreamFull() {
  obj = {
    importer() {
      return callback(paths[9])(paths[8], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_1_6(closure_0, {});
        };
      });
    }
  };
  obj.openLazy(obj);
};
prototype["platformHandleStreamStart"] = function platformHandleStreamStart(sourceId) {
  sourceId = sourceId.sourceId;
  if (null != sourceId) {
    let setGoLiveSource = importDefault;
    obj = apexExperimentDefault;
    if (obj.getConfig({ location: "platformHandleStreamStart" }).showMobileGoLiveUpsell) {
      state = state.getState();
    } else {
      state = { preset: null, resolution: 720, fps: 30, soundshareEnabled: true };
      state[0] = ApplicationStreamPresets.PRESET_CUSTOM;
    }
    ({ preset, resolution, fps, soundshareEnabled } = state);
    setGoLiveSource = setGoLiveSource(9654).setGoLiveSource;
    obj = { sourceId: null, sound: null };
    obj[0] = sourceId;
    obj[1] = soundshareEnabled;
    obj[0] = obj;
    obj1 = { preset: null, resolution: null, frameRate: null };
    obj1[0] = preset;
    obj1[1] = resolution;
    obj1[2] = fps;
    obj[1] = obj1;
    obj[2] = MediaEngineContextTypes.STREAM;
    setGoLiveSource(obj);
    const setGoLiveSourceResult = setGoLiveSource(9654);
  } else {
    const _HermesInternal = HermesInternal;
    obj.warn("invalid start_stream: both application + display modes were specified (source-id: " + sourceId + ")");
  }
};
prototype["platformHandleVoiceStateUpdate"] = function platformHandleVoiceStateUpdate(item) {

};
const applicationStreamingManager = new ApplicationStreamingManager();
const result = require("obj132").fileFinishedImporting("modules/go_live/native/ApplicationStreamingManager.tsx");

export default applicationStreamingManager;