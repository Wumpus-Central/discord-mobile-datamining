// discord_app/modules/go_live/native/ApplicationStreamingManager.tsx
import "noop";
import ApplicationStreamPresets from "ApplicationStreamPresets";
import { ApplicationStreamPresets } from "RESOLUTION_720";
import { MediaEngineContextTypes } from "DesktopSources";
import { jsx } from "jsxProd";
import "updateRegion";
import { AlertActionCreators } from "../../../actions/native/AlertActionCreators.tsx";
import { apexExperiment } from "MobileGoLiveUpsellExperiment.tsx";

const require = arg1;
let obj = new require("DesktopSources")("ApplicationStreamingManager");
obj.enableNativeLogger(true);
class ApplicationStreamingManager extends tmp4 {
}
const prototype = ApplicationStreamingManager.prototype;
prototype["platformShowStreamFull"] = function platformShowStreamFull() {
  let obj = AlertActionCreators;
  obj = {
    importer() {
      return callback(paths[9])(paths[8], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return outer1_6(closure_0, {});
        };
      });
    }
  };
  obj.openLazy(obj);
};
prototype["platformHandleStreamStart"] = function platformHandleStreamStart(sourceId) {
  let fps;
  let preset;
  let resolution;
  let soundshareEnabled;
  sourceId = sourceId.sourceId;
  if (null != sourceId) {
    let setGoLiveSource = importDefault;
    let obj = apexExperiment;
    if (obj.getConfig({ location: "platformHandleStreamStart" }).showMobileGoLiveUpsell) {
      state = state.getState();
    } else {
      state = { preset: null, resolution: 720, fps: 30, soundshareEnabled: true };
      state[0] = ApplicationStreamPresets.PRESET_CUSTOM;
    }
    ({ preset, resolution, fps, soundshareEnabled } = state);
    setGoLiveSource = setGoLiveSource(9049).setGoLiveSource;
    obj = { desktopSettings: null, qualityOptions: null, context: null };
    obj = { sourceId: null, sound: null };
    obj[0] = sourceId;
    obj[1] = soundshareEnabled;
    obj[0] = obj;
    const obj1 = { preset: null, resolution: null, frameRate: null };
    obj1[0] = preset;
    obj1[1] = resolution;
    obj1[2] = fps;
    obj[1] = obj1;
    obj[2] = MediaEngineContextTypes.STREAM;
    setGoLiveSource(obj);
    const setGoLiveSourceResult = setGoLiveSource(9049);
  } else {
    const _HermesInternal = HermesInternal;
    obj.warn("invalid start_stream: both application + display modes were specified (source-id: " + sourceId + ")");
  }
};
prototype["platformHandleVoiceStateUpdate"] = function platformHandleVoiceStateUpdate(arg0) {

};
const applicationStreamingManager = new ApplicationStreamingManager();
const result = require("RESOLUTION_720").fileFinishedImporting("modules/go_live/native/ApplicationStreamingManager.tsx");

export default applicationStreamingManager;