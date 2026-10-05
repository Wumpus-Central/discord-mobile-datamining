// === Module 4936: ApplicationStreamingSettingsStore ===

// Module 4936 (ApplicationStreamingSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 4915 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4937 */;
import size from "module_2" /* 2 */;

let ApplicationStreamFPS;
let ApplicationStreamResolutions;
const ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
({ ApplicationStreamResolutions, ApplicationStreamFPS } = StreamSettingsConstants);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
let PRESET_VIDEO = ApplicationStreamPresets.PRESET_VIDEO;
let RESOLUTION_720 = ApplicationStreamResolutions.RESOLUTION_720;
let FPS_30 = ApplicationStreamFPS.FPS_30;
let soundshareEnabled = true;
const PersistedStore = get_initializedDefault.PersistedStore;
class ApplicationStreamingSettingsStore extends PersistedStore {
  initialize(preset) {
    if (null != preset) {
      PRESET_VIDEO = preset.preset;
      if (PRESET_VIDEO == null) {
        PRESET_VIDEO = ApplicationStreamPresets.PRESET_VIDEO;
      }
      ({ resolution: RESOLUTION_720, fps: FPS_30, soundshareEnabled } = preset);
      if (soundshareEnabled == null) {
        soundshareEnabled = true;
      }
    }
  }
  getState() {
    return { preset: PRESET_VIDEO, resolution: RESOLUTION_720, fps: FPS_30, soundshareEnabled };
  }
}
const prototype = ApplicationStreamingSettingsStore.prototype;
ApplicationStreamingSettingsStore.displayName = "ApplicationStreamingSettingsStore";
ApplicationStreamingSettingsStore.persistKey = "ApplicationStreamingSettingStore";
const obj = {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(settings) {
    settings = settings.settings;
    let context;
    if (settings != null) {
      context = settings.context;
    }
    if (context === MediaEngineContextTypes.STREAM) {
      let qualityOptions;
      if (settings != null) {
        qualityOptions = settings.qualityOptions;
      }
      if (null != qualityOptions) {
        let flag = false;
        if (PRESET_VIDEO !== settings.qualityOptions.preset) {
          PRESET_VIDEO = settings.qualityOptions.preset;
          flag = true;
        }
        if (RESOLUTION_720 !== settings.qualityOptions.resolution) {
          RESOLUTION_720 = settings.qualityOptions.resolution;
          flag = true;
        }
        if (FPS_30 !== settings.qualityOptions.frameRate) {
          FPS_30 = settings.qualityOptions.frameRate;
          flag = true;
        }
        return flag;
      }
    }
    return false;
  },
  STREAM_UPDATE_SETTINGS: function handleUpdateSettings(arg0) {
    let frameRate;
    let preset;
    let resolution;
    ({ preset, resolution, frameRate, soundshareEnabled } = arg0);
    let flag = false;
    const tmp = null != preset && preset !== PRESET_VIDEO;
    if (tmp) {
      PRESET_VIDEO = preset;
      flag = true;
    }
    const tmp3 = null != resolution && resolution !== RESOLUTION_720;
    if (tmp3) {
      RESOLUTION_720 = resolution;
      flag = true;
    }
    const tmp5 = null != frameRate && frameRate !== FPS_30;
    if (tmp5) {
      FPS_30 = frameRate;
      flag = true;
    }
    const tmp7 = null != soundshareEnabled && soundshareEnabled !== soundshareEnabled;
    if (tmp7) {
      flag = true;
    }
    return flag;
  }
};
const applicationStreamingSettingsStore = new ApplicationStreamingSettingsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ApplicationStreamingSettingsStore.tsx");

export default applicationStreamingSettingsStore;