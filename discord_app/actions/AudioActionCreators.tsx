// discord_app/actions/AudioActionCreators.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import debounceDefault from "../../_runtime/00551_debounce.js";
import DispatcherDefault from "../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import AudioSettingsUtils from "../modules/user_settings/voice/AudioSettingsUtils.tsx";
import trackVoiceAndVideoSettingsUpdateDefault from "../modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx";
import applyBackgroundOption from "../modules/video_backgrounds/applyBackgroundOption.tsx";
import StreamQualityUtils from "../utils/StreamQualityUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import CertifiedDeviceStore from "../stores/CertifiedDeviceStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import MediaEngineStore from "../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import UserStore from "../stores/UserStore.tsx";

require = fn;
function trackDeviceChanged(inputDevices, inputDeviceId, found, Video) {
  if (inputDeviceId !== found) {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = ChannelStore.getChannel(voiceChannelId);
    }
    const mediaEngine = MediaEngineStore.getMediaEngine();
    const audioSubsystem = mediaEngine.getAudioSubsystem();
    const mediaEngine1 = MediaEngineStore.getMediaEngine();
    const audioLayer = mediaEngine1.getAudioLayer();
    let str = "";
    let str2 = "";
    if (null != inputDevices[inputDeviceId]) {
      str2 = tmp6.name;
    }
    const obj = {
      device_from_name: CertifiedDeviceStore.getCertifiedDeviceName(inputDeviceId, str2),
      device_to_name: null,
      device_type: null,
      device_is_certified: null,
      location: null,
      location_stack: null,
      voice_channel_type: null,
      audio_subsystem: null,
      audio_layer: null,
    };
    if (null != inputDevices[found]) {
      str = tmp7.name;
    }
    obj.device_to_name = CertifiedDeviceStore.getCertifiedDeviceName(found, str);
    obj.device_type = Video;
    obj.device_is_certified = CertifiedDeviceStore.isCertified(found);
    obj.location = tmp;
    obj.location_stack = tmp2;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.voice_channel_type = type;
    obj.audio_subsystem = audioSubsystem;
    obj.audio_layer = audioLayer;
    AnalyticsUtilsDefault.track(constants2.MEDIA_DEVICE_CHANGED, obj);
  }
}
const Constants = fn(1074);
({ InputModes: c10, AnalyticEvents: closure_11 } = Constants);
const SoundOutputChannel = fn(9091).SoundOutputChannel;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
let settings = new LoggerDefault("AudioActionCreators");
settings.enableNativeLogger(true);
let closure_15 = debounceDefault((target_user_id, context, volume) => {
  const obj = {
    target_user_id,
    context,
    volume,
    media_session_id: RTCConnectionStore.getMediaSessionId(),
    rtc_connection_id: RTCConnectionStore.getRTCConnectionId(),
  };
  obj.track(constants2.USER_VOLUME_SETTING_UPDATED, obj);
}, 300);
function isNotSupported() {
  return false;
}
function trackToggleSelfMute() {}
function trackToggleSelfDeaf() {}
settings = {
  enable() {
    return Promise.resolve(true);
  },
  toggleSelfMute(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let DEFAULT = obj.context;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let flag = obj.syncRemote;
    if (flag === undefined) {
      flag = true;
    }
    if (obj.usedKeybind !== undefined) {
      let flag2 = obj.playSoundEffect;
      if (flag2 === undefined) {
        flag2 = true;
      }
      const _location = obj.location;
      if (typeof isNotSupported === "function") {
        if (typeof trackToggleSelfMute === "function") {
          if (flag2) {
            flag2 = !MediaEngineStore.hasActiveCallKitCall();
          }
          const currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (isStaffResult) {
            obj.info("Toggling self mute");
          }
          if (MediaEngineStore.isEnabled()) {
            obj = { type: "AUDIO_TOGGLE_SELF_MUTE", context: DEFAULT, syncRemote: flag, playSoundEffect: flag2 };
            let dispatchResult = DispatcherDefault.dispatch(obj);
          } else {
            const self = this;
            dispatchResult = this.enable(true);
          }
          return dispatchResult;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  },
  setSelfMute(context, mute) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    if (typeof isNotSupported === "function") {
      if (flag) {
        flag = !MediaEngineStore.hasActiveCallKitCall();
      }
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (isStaffResult) {
        obj.info("Setting self mute", mute);
      }
      obj = { type: "AUDIO_SET_SELF_MUTE", context, mute, playSoundEffect: flag };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setTemporarySelfMute(mute) {
    if (typeof isNotSupported === "function") {
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (isStaffResult) {
        obj.info("Setting temporary self mute", mute);
      }
      obj = { type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  toggleSelfDeaf(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let DEFAULT = obj.context;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let flag = obj.syncRemote;
    if (flag === undefined) {
      flag = true;
    }
    if (obj.usedKeybind !== undefined) {
      const _location = obj.location;
      if (typeof isNotSupported === "function") {
        if (typeof trackToggleSelfDeaf === "function") {
          obj = { type: "AUDIO_TOGGLE_SELF_DEAF", context: DEFAULT, syncRemote: flag };
          DispatcherDefault.dispatch(obj);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  },
  toggleLocalMute(id, arg1) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_TOGGLE_LOCAL_MUTE", context: DEFAULT, userId: id };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  toggleLocalSoundboardMute(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    const obj = { type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: DEFAULT, userId: id };
    obj.dispatch(obj);
  },
  setDisableLocalVideo(id, MANUAL_ENABLED, DEFAULT, arg3) {
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let flag = arg3;
    if (arg3 === undefined) {
      flag = true;
    }
    let flag2 = arg4;
    if (arg4 === undefined) {
      flag2 = false;
    }
    if (typeof isNotSupported === "function") {
      const obj = {
        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
        context: DEFAULT,
        userId: id,
        videoToggleState: MANUAL_ENABLED,
        persist: flag,
        isAutomatic: flag2,
      };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setLocalVolume(userId, USER, DEFAULT) {
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = AudioSettingsUtils;
    const snapVolumeToDefaultResult = obj.snapVolumeToDefault(USER, DEFAULT);
    obj = { type: "AUDIO_SET_LOCAL_VOLUME", context: DEFAULT, userId, volume: snapVolumeToDefaultResult };
    DispatcherDefault.dispatch(obj);
    closure_15(userId, DEFAULT, snapVolumeToDefaultResult);
  },
  setAudioMixerSettings(audioMixerSettings) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    const obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: DEFAULT, settings: audioMixerSettings };
    obj.dispatch(obj);
  },
  setSpatialAudio(enabled, arg1) {
    if (typeof isNotSupported === "function") {
      const audioMixerSettings = MediaEngineStore.getAudioMixerSettings();
      trackVoiceAndVideoSettingsUpdateDefault("spatial_audio_enabled", enabled, audioMixerSettings.enabled, arg1);
      settings = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: MediaEngineContextTypes.DEFAULT, settings: null };
      settings = {};
      const merged = Object.assign(audioMixerSettings);
      settings.enabled = enabled;
      settings.settings = settings;
      settings.dispatch(settings);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setLocalPan(userId, left, right) {
    let DEFAULT = arg3;
    if (arg3 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    const rect = { type: "AUDIO_SET_LOCAL_PAN", context: DEFAULT, userId, left, right };
    DispatcherDefault.dispatch(rect);
  },
  setMode(mode, arg1, DEFAULT) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (typeof isNotSupported === "function") {
      let obj2 = MediaEngineStore;
      mode = MediaEngineStore.getMode();
      const modeOptions = MediaEngineStore.getModeOptions(DEFAULT);
      let obj3 = DispatcherDefault;
      obj = { type: "AUDIO_SET_MODE", context: DEFAULT, mode, options: null };
      const obj1 = {};
      const merged = Object.assign(modeOptions);
      const merged1 = Object.assign(obj);
      obj.options = obj1;
      obj3.dispatch(obj);
      if (mode !== mode) {
        const mediaEngine = obj2.getMediaEngine();
        const audioSubsystem = mediaEngine.getAudioSubsystem();
        const mediaEngine1 = obj2.getMediaEngine();
        const audioLayer = mediaEngine1.getAudioLayer();
        const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
        let channel = null;
        if (null != voiceChannelId) {
          channel = ChannelStore.getChannel(voiceChannelId);
        }
        const inputDevices = obj2.getInputDevices();
        const tmp29 = inputDevices[obj2.getInputDeviceId(obj2)];
        let str2 = "";
        if (null != tmp29) {
          str2 = tmp29.name;
        }
        let tmp5Result = tmp5(1242);
        obj2 = {
          mode,
          location_stack: analyticsLocations,
          voice_channel_type: null,
          input_device_name: null,
          audio_subsystem: null,
          audio_layer: null,
        };
        let type;
        if (channel != null) {
          type = channel.type;
        }
        obj2.voice_channel_type = type;
        obj2.input_device_name = str2;
        obj2.audio_subsystem = audioSubsystem;
        obj2.audio_layer = audioLayer;
        tmp5Result.track(constants2.VOICE_ACTIVATION_MODE_CHANGED, obj2);
      } else if (mode === constants.VOICE_ACTIVITY) {
        if (modeOptions !== obj) {
          const mediaEngine2 = obj2.getMediaEngine();
          const audioSubsystem1 = mediaEngine2.getAudioSubsystem();
          const mediaEngine3 = obj2.getMediaEngine();
          const audioLayer1 = mediaEngine3.getAudioLayer();
          const voiceChannelId1 = SelectedChannelStore.getVoiceChannelId();
          let channel1 = null;
          if (null != voiceChannelId1) {
            channel1 = ChannelStore.getChannel(voiceChannelId1);
          }
          const inputDevices1 = obj2.getInputDevices();
          const tmp17 = inputDevices1[obj2.getInputDeviceId(obj2)];
          let str = "";
          if (null != tmp17) {
            str = tmp17.name;
          }
          tmp5Result = tmp5(1242);
          obj3 = {
            location_stack: analyticsLocations,
            voice_channel_type: null,
            input_device_name: null,
            audio_subsystem: null,
            audio_layer: null,
            old_threshold: null,
            new_threshold: null,
            old_auto_threshold: null,
            new_auto_threshold: null,
          };
          let type1;
          if (channel1 != null) {
            type1 = channel1.type;
          }
          obj3.voice_channel_type = type1;
          obj3.input_device_name = str;
          obj3.audio_subsystem = audioSubsystem1;
          obj3.audio_layer = audioLayer1;
          obj3.old_threshold = modeOptions.threshold;
          obj3.new_threshold = obj.threshold;
          obj3.old_auto_threshold = modeOptions.autoThreshold;
          obj3.new_auto_threshold = obj.autoThreshold;
          tmp5Result.track(constants2.VOICE_ACTIVITY_THRESHOLD_CHANGED, obj3);
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setBypassSystemInputProcessing(bypassEnabled, location) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled, location };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setInputVolume(volume) {
    if (arg1 === undefined) {
      let obj = {};
    }
    if (typeof isNotSupported === "function") {
      obj = { type: "AUDIO_SET_INPUT_VOLUME", volume };
      DispatcherDefault.dispatch(obj);
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = ChannelStore.getChannel(voiceChannelId);
      }
      obj = { volume, location_stack: tmp, voice_channel_type: null };
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.voice_channel_type = type;
      AnalyticsUtilsDefault.track(constants2.MEDIA_INPUT_VOLUME_CHANGED, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setOutputVolume(volume) {
    if (arg1 === undefined) {
      let obj = {};
    }
    if (typeof isNotSupported === "function") {
      obj = { type: "AUDIO_SET_OUTPUT_VOLUME", volume };
      DispatcherDefault.dispatch(obj);
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = ChannelStore.getChannel(voiceChannelId);
      }
      obj = { volume, location_stack: tmp, voice_channel_type: null };
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.voice_channel_type = type;
      AnalyticsUtilsDefault.track(constants2.MEDIA_OUTPUT_VOLUME_CHANGED, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setInputDevice(id) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported === "function") {
      const inputDeviceId = MediaEngineStore.getInputDeviceId();
      if (null != _location) {
        obj = { location: _location, analyticsLocations };
        trackDeviceChanged(MediaEngineStore.getInputDevices(), inputDeviceId, id, "Audio Input", obj);
      }
      obj = { type: "AUDIO_SET_INPUT_DEVICE", id, oldId: inputDeviceId };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setOutputDevice(id) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported === "function") {
      const outputDeviceId = MediaEngineStore.getOutputDeviceId();
      if (null != _location) {
        obj = { location: _location, analyticsLocations };
        trackDeviceChanged(MediaEngineStore.getOutputDevices(), outputDeviceId, id, "Audio Output", obj);
      }
      obj = { type: "AUDIO_SET_OUTPUT_DEVICE", id, oldId: outputDeviceId };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setVideoDevice(found) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported === "function") {
      const videoDeviceId = MediaEngineStore.getVideoDeviceId();
      if (null != _location) {
        obj = { location: _location, analyticsLocations };
        trackDeviceChanged(MediaEngineStore.getVideoDevices(), videoDeviceId, found, "Video", obj);
      }
      obj = { type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: found, oldId: videoDeviceId };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setActiveInputProfile(inputProfile) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (typeof isNotSupported === "function") {
      const activeInputProfile = MediaEngineStore.getActiveInputProfile();
      trackVoiceAndVideoSettingsUpdateDefault(
        "active_input_profile",
        inputProfile,
        activeInputProfile,
        analyticsLocations,
      );
      obj = { type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setEchoCancellation(enabled, location) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_SET_ECHO_CANCELLATION", enabled, location };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setSidechainCompression(enabled) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault(
        "stream_attenuation_enabled",
        enabled,
        MediaEngineStore.getSidechainCompression(),
        analyticsLocations,
      );
      obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setSidechainCompressionStrength(strength) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault(
        "stream_attenuation_strength",
        strength,
        MediaEngineStore.getSidechainCompressionStrength(),
        analyticsLocations,
      );
      obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setLoopback(loopbackReason, enabled) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_SET_LOOPBACK", loopbackReason, enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setNoiseSuppression(enabled, location) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled, location };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setNoiseCancellation(enabled, location) {
    if (typeof isNotSupported === "function") {
      let obj = { type: "AUDIO_SET_NOISE_CANCELLATION", enabled, location };
      obj.dispatch(obj);
      obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !enabled, location };
      DispatcherDefault.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setAutomaticGainControl(enabled, location) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled, location };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setAttenuation(attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers) {
    if (typeof isNotSupported === "function") {
      attenuation = MediaEngineStore.getAttenuation();
      attenuateWhileSpeakingSelf = MediaEngineStore.getAttenuateWhileSpeakingSelf();
      attenuateWhileSpeakingOthers = MediaEngineStore.getAttenuateWhileSpeakingOthers();
      if (attenuation !== attenuation) {
        trackVoiceAndVideoSettingsUpdateDefault("global_attenuation_strength", attenuation, attenuation);
      } else if (attenuateWhileSpeakingSelf !== attenuateWhileSpeakingSelf) {
        trackVoiceAndVideoSettingsUpdateDefault(
          "global_attenuation_for_self_speak_enabled",
          attenuateWhileSpeakingSelf,
          attenuateWhileSpeakingSelf,
        );
      } else if (attenuateWhileSpeakingOthers !== attenuateWhileSpeakingOthers) {
        trackVoiceAndVideoSettingsUpdateDefault(
          "global_attenuation_for_other_speak_enabled",
          attenuateWhileSpeakingOthers,
          attenuateWhileSpeakingOthers,
        );
      }
      const obj = {
        type: "AUDIO_SET_ATTENUATION",
        attenuation,
        attenuateWhileSpeakingSelf,
        attenuateWhileSpeakingOthers,
      };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setQoS(enabled) {
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault("quality_of_service_packets_enabled", enabled, MediaEngineStore.getQoS());
      const obj = { type: "AUDIO_SET_QOS", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  reset() {
    if (typeof isNotSupported === "function") {
      DispatcherDefault.dispatch({ type: "AUDIO_RESET" });
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setSilenceWarning(enabled) {
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault(
        "silence_warning_enabled",
        enabled,
        MediaEngineStore.getEnableSilenceWarning(),
      );
      const obj = { type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setDebugLogging(arg0) {
    closure_0 = arg0;
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp2;
              isNotSupported();
              v1 = 1;
              dependencyMap = 1;
              const obj1 = {
                value: v1(9094)("debug_logging_enabled", closure_0, debugLogging.getDebugLogging()),
                done: false,
              };
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            obj = v1(573);
            const obj3 = { type: "AUDIO_SET_DEBUG_LOGGING", enabled: closure_128_0 };
            obj.dispatch(obj3);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          dependencyMap = tmp;
          throw tmp18;
        }
      }
    })();
  },
  setVideoHook(enabled) {
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault("video_hook_enabled", enabled, MediaEngineStore.getVideoHook());
      const obj = { type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setExperimentalSoundshare(enabled) {
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault(
        "experimental_soundshare_enabled",
        enabled,
        MediaEngineStore.getExperimentalSoundshare(),
      );
      const obj = { type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setUseSystemScreensharePicker(enabled) {
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault(
        "system_screenshare_picker_enabled",
        enabled,
        MediaEngineStore.getUseSystemScreensharePicker(),
      );
      const obj = { type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setAudioSubsystem(arg0) {
    closure_0 = arg0;
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp2;
              isNotSupported();
              v1 = 1;
              dependencyMap = 1;
              const obj1 = {
                value: v1(9094)("audio_subsystem", closure_0, audioSubsystem.getAudioSubsystem()),
                done: false,
              };
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            obj = v1(573);
            const obj3 = { type: "AUDIO_SET_SUBSYSTEM", subsystem: closure_128_0 };
            obj.dispatch(obj3);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          dependencyMap = tmp;
          throw tmp18;
        }
      }
    })();
  },
  setVideoEnabled(enabled) {
    let obj = applyBackgroundOption;
    const result = obj.applyInitialVideoBackgroundOption();
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled };
    DispatcherDefault.dispatch(obj);
  },
  setGoLiveSource(qualityOptions) {
    qualityOptions = undefined;
    if (qualityOptions != null) {
      qualityOptions = qualityOptions.qualityOptions;
    }
    if (null != qualityOptions) {
      let obj = StreamQualityUtils;
      const preset = qualityOptions.qualityOptions.preset;
      const resolution = qualityOptions.qualityOptions.resolution;
      const frameRate = qualityOptions.qualityOptions.frameRate;
      const desktopSettings = qualityOptions.desktopSettings;
      let sound;
      if (desktopSettings != null) {
        sound = desktopSettings.sound;
      }
      const result = obj.trackStreamSettingsUpdate(preset, resolution, frameRate, sound);
    }
    obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: qualityOptions };
    DispatcherDefault.dispatch(obj);
  },
  setAecDump(enabled) {
    if (typeof isNotSupported === "function") {
      trackVoiceAndVideoSettingsUpdateDefault(
        "diagnostic_audio_recording_enabled",
        enabled,
        MediaEngineStore.getAecDump(),
      );
      const obj = { type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  interact() {
    if (typeof isNotSupported === "function") {
      DispatcherDefault.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: false });
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setEnableHardwareMuteNotice(enabled) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setKrispSuppressionLevel(level) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setKrispModelOverride(model) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model };
      obj.dispatch(obj);
      if (MediaEngineStore.getNoiseCancellation()) {
        const self = this;
        this.setNoiseCancellation(false);
        this.setNoiseCancellation(true);
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setNoiseCancellationEnableStats(arg0) {
    if (typeof isNotSupported !== "function") {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setOpenH264Enabled(enabled) {
    if (typeof isNotSupported === "function") {
      const obj = { type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled };
      obj.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  resetMediaEngineSettings(overrides) {
    const obj = { type: "MEDIA_ENGINE_RESET_SETTINGS", overrides };
    return obj.dispatch(obj);
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("actions/AudioActionCreators.tsx");

export default settings;
