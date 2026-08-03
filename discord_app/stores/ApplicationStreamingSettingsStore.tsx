// === Module 4345: ApplicationStreamPresets ===

// Module 4345 (ApplicationStreamPresets)
import RESOLUTION_720 from "RESOLUTION_720";
import { MediaEngineContextTypes } from "DesktopSources";
import { PersistedStore } from "initialize";

let ApplicationStreamFPS;
let ApplicationStreamResolutions;
const ApplicationStreamPresets = RESOLUTION_720.ApplicationStreamPresets;
({ ApplicationStreamResolutions, ApplicationStreamFPS } = RESOLUTION_720);
let PRESET_VIDEO = ApplicationStreamPresets.PRESET_VIDEO;
RESOLUTION_720 = ApplicationStreamResolutions.RESOLUTION_720;
const FPS_30 = ApplicationStreamFPS.FPS_30;
let c5 = true;
class ApplicationStreamingSettingsStore extends PersistedStore {
}
const prototype = ApplicationStreamingSettingsStore.prototype;
prototype["initialize"] = function initialize(preset) {
  let FPS_30;
  let RESOLUTION_720;
  let soundshareEnabled;
  if (null != preset) {
    let PRESET_VIDEO = preset.preset;
    if (PRESET_VIDEO == null) {
      PRESET_VIDEO = ApplicationStreamPresets.PRESET_VIDEO;
    }
    ({ resolution: RESOLUTION_720, fps: FPS_30, soundshareEnabled } = preset);
    if (soundshareEnabled == null) {
      soundshareEnabled = true;
    }
  }
};
prototype["getState"] = function getState() {
  return { preset: PRESET_VIDEO, resolution: RESOLUTION_720, fps: FPS_30, soundshareEnabled: c5 };
};
ApplicationStreamingSettingsStore.displayName = "ApplicationStreamingSettingsStore";
ApplicationStreamingSettingsStore.persistKey = "ApplicationStreamingSettingStore";
const applicationStreamingSettingsStore = new ApplicationStreamingSettingsStore(require("dispatcher"), {
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
        if (preset !== settings.qualityOptions.preset) {
          preset = settings.qualityOptions.preset;
          flag = true;
        }
        if (resolution !== settings.qualityOptions.resolution) {
          resolution = settings.qualityOptions.resolution;
          flag = true;
        }
        if (frameRate !== settings.qualityOptions.frameRate) {
          frameRate = settings.qualityOptions.frameRate;
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
    let soundshareEnabled;
    ({ preset, resolution, frameRate, soundshareEnabled } = arg0);
    let tmp = null != preset;
    if (tmp) {
      tmp = preset !== preset;
    }
    let flag = false;
    if (tmp) {
      flag = true;
    }
    let tmp3 = null != resolution;
    if (tmp3) {
      tmp3 = resolution !== resolution;
    }
    if (tmp3) {
      flag = true;
    }
    let tmp5 = null != frameRate;
    if (tmp5) {
      tmp5 = frameRate !== frameRate;
    }
    if (tmp5) {
      flag = true;
    }
    let tmp7 = null != soundshareEnabled;
    if (tmp7) {
      tmp7 = soundshareEnabled !== soundshareEnabled;
    }
    if (tmp7) {
      flag = true;
    }
    return flag;
  }
});
const result = require("initialize").fileFinishedImporting("stores/ApplicationStreamingSettingsStore.tsx");

export default applicationStreamingSettingsStore;