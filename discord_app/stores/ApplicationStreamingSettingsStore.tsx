// discord_app/stores/ApplicationStreamingSettingsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../../discord_common/js/packages/media-engine/Constants.tsx";
import StreamSettingsConstants from "../modules/go_live/StreamSettingsConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
({ ApplicationStreamResolutions, ApplicationStreamFPS } = StreamSettingsConstants);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
let preset = ApplicationStreamPresets.PRESET_VIDEO;
let resolution = ApplicationStreamResolutions.RESOLUTION_720;
let frameRate = ApplicationStreamFPS.FPS_30;
const soundshareEnabled = true;
const PersistedStore = initializeDefault.PersistedStore;
class ApplicationStreamingSettingsStore extends PersistedStore {}
const prototype = ApplicationStreamingSettingsStore.prototype;
prototype["initialize"] = function initialize(preset) {
  if (null != preset) {
    let PRESET_VIDEO = preset.preset;
    if (PRESET_VIDEO == null) {
      PRESET_VIDEO = ApplicationStreamPresets.PRESET_VIDEO;
    }
    preset = PRESET_VIDEO;
    ({ resolution, fps: frameRate, soundshareEnabled } = preset);
    if (soundshareEnabled == null) {
      soundshareEnabled = true;
    }
  }
};
prototype["getState"] = function getState() {
  return { preset, resolution, fps: frameRate, soundshareEnabled };
};
ApplicationStreamingSettingsStore.displayName = "ApplicationStreamingSettingsStore";
ApplicationStreamingSettingsStore.persistKey = "ApplicationStreamingSettingStore";
const applicationStreamingSettingsStore = new ApplicationStreamingSettingsStore(DispatcherDefault, {
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
  },
});
const result = size.fileFinishedImporting("stores/ApplicationStreamingSettingsStore.tsx");

export default applicationStreamingSettingsStore;
