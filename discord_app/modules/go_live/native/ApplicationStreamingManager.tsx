// discord_app/modules/go_live/native/ApplicationStreamingManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStreamingSettingsStore from "../../../stores/ApplicationStreamingSettingsStore.tsx";
import ApplicationStreamingManager from "../ApplicationStreamingManager.tsx";

const require = fn;
const ApplicationStreamPresets = fn(4607).ApplicationStreamPresets;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsx = fn(21).jsx;
let desktopSettings = new LoggerDefault("ApplicationStreamingManager");
desktopSettings.enableNativeLogger(true);
class ApplicationStreamingManager extends tmp4 {}
const prototype = ApplicationStreamingManager.prototype;
prototype["platformShowStreamFull"] = function platformShowStreamFull() {
  const obj = {
    importer() {
      return require("asyncRequireImpl")(paths[8], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_2_6(closure_0, {});
        };
      });
    },
  };
  obj.openLazy(obj);
};
prototype["platformHandleStreamStart"] = function platformHandleStreamStart(sourceId) {
  sourceId = sourceId.sourceId;
  if (null != sourceId) {
    let setGoLiveSource = importDefault;
    desktopSettings = MobileGoLiveUpsellExperimentDefault;
    if (desktopSettings.getConfig({ location: "platformHandleStreamStart" }).showMobileGoLiveUpsell) {
      let state = ApplicationStreamingSettingsStore.getState();
    } else {
      state = { preset: ApplicationStreamPresets.PRESET_CUSTOM, resolution: 720, fps: 30, soundshareEnabled: true };
    }
    ({ preset, resolution, fps, soundshareEnabled } = state);
    setGoLiveSource = setGoLiveSource(9089).setGoLiveSource;
    desktopSettings = { desktopSettings: null, qualityOptions: null, context: null };
    desktopSettings = { sourceId, sound: soundshareEnabled };
    desktopSettings.desktopSettings = desktopSettings;
    const obj1 = { preset, resolution, frameRate: fps };
    desktopSettings.qualityOptions = obj1;
    desktopSettings.context = MediaEngineContextTypes.STREAM;
    setGoLiveSource(desktopSettings);
    const setGoLiveSourceResult = setGoLiveSource(9089);
  } else {
    const _HermesInternal = HermesInternal;
    desktopSettings.warn(
      "invalid start_stream: both application + display modes were specified (source-id: " + sourceId + ")",
    );
  }
};
prototype["platformHandleVoiceStateUpdate"] = function platformHandleVoiceStateUpdate() {};
const applicationStreamingManager = new ApplicationStreamingManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/native/ApplicationStreamingManager.tsx");

export default applicationStreamingManager;
