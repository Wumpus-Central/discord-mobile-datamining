// discord_app/modules/go_live/native/ApplicationStreamingManager.tsx
import timestampDefault from "../../debug/Logger.tsx";
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef4662 from "../../../actions/native/AlertActionCreators.tsx";
import apexExperimentDefault from "MobileGoLiveUpsellExperiment.tsx";
import updateRegionDefault from "../ApplicationStreamingManager.tsx";
import closure_3 from "../../../stores/ApplicationStreamingSettingsStore.tsx";
import { ApplicationStreamPresets } from "../StreamSettingsConstants.tsx";
import { MediaEngineContextTypes } from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
let obj = new timestampDefault("ApplicationStreamingManager");
obj.enableNativeLogger(true);
updateRegionDefault;
class ApplicationStreamingManager extends tmp4 {
}
const prototype = ApplicationStreamingManager.prototype;
prototype["platformShowStreamFull"] = function platformShowStreamFull() {
  obj = _modDef4662;
  obj = {
    importer() {
      return callback(paths[9])(paths[8], paths.paths).then((arg0) => {
        closure_0 = arg0.default;
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
    setGoLiveSource = setGoLiveSource(9693).setGoLiveSource;
    obj = { desktopSettings: null, qualityOptions: null, context: null };
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
    const setGoLiveSourceResult = setGoLiveSource(9693);
  } else {
    const _HermesInternal = HermesInternal;
    obj.warn("invalid start_stream: both application + display modes were specified (source-id: " + sourceId + ")");
  }
};
prototype["platformHandleVoiceStateUpdate"] = function platformHandleVoiceStateUpdate(arg0) {

};
const applicationStreamingManager = new ApplicationStreamingManager();
const result = require("set").fileFinishedImporting("modules/go_live/native/ApplicationStreamingManager.tsx");

export default applicationStreamingManager;