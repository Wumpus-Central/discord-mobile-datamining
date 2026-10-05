// === Module 9306: AudioActionCreators ===

// Module 9306 (AudioActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import debounceDefault from "debounce" /* 551 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants2 from "Constants" /* 4915 */;
import StreamQualityUtils from "StreamQualityUtils" /* 9102 */;
import Constants3 from "Constants" /* 9308 */;
import AudioSettingsUtils from "AudioSettingsUtils" /* 9309 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 9311 */;
import applyBackgroundOption from "applyBackgroundOption" /* 9312 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CertifiedDeviceStore from "CertifiedDeviceStore" /* 9307 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;

let c10;
let unpackModuleId;
function trackDeviceChanged(inputDevices, inputDeviceId, found, Video) {
  let getCertifiedDeviceName2;
  let type;
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
    const track = AnalyticsUtilsDefault.track;
    const MEDIA_DEVICE_CHANGED = unpackModuleId.MEDIA_DEVICE_CHANGED;
    const getCertifiedDeviceName = CertifiedDeviceStore.getCertifiedDeviceName;
    AnalyticsUtilsDefault;
    if (null != inputDevices[inputDeviceId]) {
      str2 = tmp6.name;
    }
    obj = { device_from_name: getCertifiedDeviceName(inputDeviceId, str2), device_to_name: getCertifiedDeviceName2(found, str), device_type: Video, device_is_certified: CertifiedDeviceStore.isCertified(found), location: tmp, location_stack: tmp2, voice_channel_type: type, audio_subsystem: audioSubsystem, audio_layer: audioLayer };
    getCertifiedDeviceName2 = CertifiedDeviceStore.getCertifiedDeviceName;
    if (null != inputDevices[found]) {
      str = tmp7.name;
    }
    type = undefined;
    if (channel != null) {
      type = channel.type;
    }
    track(MEDIA_DEVICE_CHANGED, obj);
  }
}
({ InputModes: c10, AnalyticEvents: unpackModuleId } = Constants);
const SoundOutputChannel = Constants3.SoundOutputChannel;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
let obj = new LoggerDefault("AudioActionCreators");
obj.enableNativeLogger(true);
let closure_15 = debounceDefault((target_user_id, context, volume) => {
  obj = AnalyticsUtilsDefault;
  const obj2 = { target_user_id, context, volume, media_session_id: RTCConnectionStore.getMediaSessionId(), rtc_connection_id: RTCConnectionStore.getRTCConnectionId() };
  obj.track(unpackModuleId.USER_VOLUME_SETTING_UPDATED, obj2);
}, 300);
function isNotSupported() {
  return false;
}
function trackToggleSelfMute() {

}
function trackToggleSelfDeaf() {

}
let obj2 = {
  enable() {
    return Promise.resolve(true);
  },
  toggleSelfMute(arg0) {
    obj = arg0;
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
          let dispatchResult;
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
            const obj2 = { type: "AUDIO_TOGGLE_SELF_MUTE", context: DEFAULT, syncRemote: flag, playSoundEffect: flag2 };
            const obj3 = DispatcherDefault;
            dispatchResult = obj3.dispatch(obj2);
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
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj);
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
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  toggleSelfDeaf(arg0) {
    obj = arg0;
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
          const obj3 = { type: "AUDIO_TOGGLE_SELF_DEAF", context: DEFAULT, syncRemote: flag };
          const obj2 = DispatcherDefault;
          obj2.dispatch(obj3);
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
      const obj2 = { type: "AUDIO_TOGGLE_LOCAL_MUTE", context: DEFAULT, userId: id };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  toggleLocalSoundboardMute(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    obj = DispatcherDefault;
    const obj2 = { type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: DEFAULT, userId: id };
    obj.dispatch(obj2);
  },
  setDisableLocalVideo(id, MANUAL_ENABLED) {
    let DEFAULT;
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
      const obj2 = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: DEFAULT, userId: id, videoToggleState: MANUAL_ENABLED, persist: flag, isAutomatic: flag2 };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setLocalVolume(userId, USER) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    obj = AudioSettingsUtils;
    const snapVolumeToDefaultResult = obj.snapVolumeToDefault(USER, DEFAULT);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "AUDIO_SET_LOCAL_VOLUME", context: DEFAULT, userId, volume: snapVolumeToDefaultResult };
    obj2.dispatch(obj3);
    closure_15(userId, DEFAULT, snapVolumeToDefaultResult);
  },
  setAudioMixerSettings(settings) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    obj = DispatcherDefault;
    const obj2 = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: DEFAULT, settings };
    obj.dispatch(obj2);
  },
  setSpatialAudio(enabled, arg1) {
    let obj2;
    if (typeof isNotSupported === "function") {
      const audioMixerSettings = MediaEngineStore.getAudioMixerSettings();
      trackVoiceAndVideoSettingsUpdateDefault("spatial_audio_enabled", enabled, audioMixerSettings.enabled, arg1);
      obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: MediaEngineContextTypes.DEFAULT, settings: obj2 };
      obj2 = { enabled };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      const merged = Object.assign(audioMixerSettings);
      dispatch(obj);
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
    obj = DispatcherDefault;
    obj.dispatch(rect);
  },
  setMode(mode, arg1) {
    let DEFAULT;
    let obj5;
    let type;
    let type1;
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj2 = arg3;
    if (arg3 === undefined) {
      obj2 = {};
    }
    const analyticsLocations = obj2.analyticsLocations;
    if (typeof isNotSupported === "function") {
      mode = MediaEngineStore.getMode();
      const modeOptions = MediaEngineStore.getModeOptions(DEFAULT);
      const obj4 = { type: "AUDIO_SET_MODE", context: DEFAULT, mode, options: obj5 };
      obj5 = {};
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      const merged = Object.assign(modeOptions);
      const merged1 = Object.assign(obj);
      dispatch(obj4);
      if (mode !== mode) {
        const mediaEngine = MediaEngineStore.getMediaEngine();
        const audioSubsystem = mediaEngine.getAudioSubsystem();
        const mediaEngine1 = MediaEngineStore.getMediaEngine();
        const audioLayer = mediaEngine1.getAudioLayer();
        const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
        let channel = null;
        if (null != voiceChannelId) {
          channel = ChannelStore.getChannel(voiceChannelId);
        }
        const inputDevices = MediaEngineStore.getInputDevices();
        const tmp31 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
        let str2 = "";
        if (null != tmp31) {
          str2 = tmp31.name;
        }
        const obj6 = { mode, location_stack: analyticsLocations, voice_channel_type: type, input_device_name: str2, audio_subsystem: audioSubsystem, audio_layer: audioLayer };
        type = undefined;
        const track2 = AnalyticsUtilsDefault.track;
        const VOICE_ACTIVATION_MODE_CHANGED = unpackModuleId.VOICE_ACTIVATION_MODE_CHANGED;
        AnalyticsUtilsDefault;
        if (channel != null) {
          type = channel.type;
        }
        track2(VOICE_ACTIVATION_MODE_CHANGED, obj6);
      } else if (mode === constants.VOICE_ACTIVITY) {
        if (modeOptions !== obj) {
          const mediaEngine2 = MediaEngineStore.getMediaEngine();
          const audioSubsystem1 = mediaEngine2.getAudioSubsystem();
          const mediaEngine3 = MediaEngineStore.getMediaEngine();
          const audioLayer1 = mediaEngine3.getAudioLayer();
          const voiceChannelId1 = SelectedChannelStore.getVoiceChannelId();
          let channel1 = null;
          if (null != voiceChannelId1) {
            channel1 = ChannelStore.getChannel(voiceChannelId1);
          }
          const inputDevices1 = MediaEngineStore.getInputDevices();
          const tmp18 = inputDevices1[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
          let str = "";
          if (null != tmp18) {
            str = tmp18.name;
          }
          const obj7 = { location_stack: analyticsLocations, voice_channel_type: type1, input_device_name: str, audio_subsystem: audioSubsystem1, audio_layer: audioLayer1, old_threshold: modeOptions.threshold, new_threshold: obj.threshold, old_auto_threshold: modeOptions.autoThreshold, new_auto_threshold: obj.autoThreshold };
          type1 = undefined;
          const track = AnalyticsUtilsDefault.track;
          const VOICE_ACTIVITY_THRESHOLD_CHANGED = unpackModuleId.VOICE_ACTIVITY_THRESHOLD_CHANGED;
          AnalyticsUtilsDefault;
          if (channel1 != null) {
            type1 = channel1.type;
          }
          track(VOICE_ACTIVITY_THRESHOLD_CHANGED, obj7);
        }
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setBypassSystemInputProcessing(bypassEnabled, location) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled, location };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setInputVolume(volume) {
    let type;
    if (typeof isNotSupported === "function") {
      const obj3 = { type: "AUDIO_SET_INPUT_VOLUME", volume };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = ChannelStore.getChannel(voiceChannelId);
      }
      const obj4 = { volume, location_stack: tmp, voice_channel_type: type };
      type = undefined;
      const track = AnalyticsUtilsDefault.track;
      const MEDIA_INPUT_VOLUME_CHANGED = unpackModuleId.MEDIA_INPUT_VOLUME_CHANGED;
      AnalyticsUtilsDefault;
      if (channel != null) {
        type = channel.type;
      }
      track(MEDIA_INPUT_VOLUME_CHANGED, obj4);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setOutputVolume(volume) {
    let type;
    if (typeof isNotSupported === "function") {
      const obj3 = { type: "AUDIO_SET_OUTPUT_VOLUME", volume };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = ChannelStore.getChannel(voiceChannelId);
      }
      const obj4 = { volume, location_stack: tmp, voice_channel_type: type };
      type = undefined;
      const track = AnalyticsUtilsDefault.track;
      const MEDIA_OUTPUT_VOLUME_CHANGED = unpackModuleId.MEDIA_OUTPUT_VOLUME_CHANGED;
      AnalyticsUtilsDefault;
      if (channel != null) {
        type = channel.type;
      }
      track(MEDIA_OUTPUT_VOLUME_CHANGED, obj4);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setInputDevice(id) {
    let _location;
    let analyticsLocations;
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported === "function") {
      const inputDeviceId = MediaEngineStore.getInputDeviceId();
      if (null != _location) {
        const obj3 = { location: _location, analyticsLocations };
        trackDeviceChanged(MediaEngineStore.getInputDevices(), inputDeviceId, id, "Audio Input", obj3);
      }
      const obj5 = { type: "AUDIO_SET_INPUT_DEVICE", id, oldId: inputDeviceId };
      const obj4 = DispatcherDefault;
      obj4.dispatch(obj5);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setOutputDevice(id) {
    let _location;
    let analyticsLocations;
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported === "function") {
      const outputDeviceId = MediaEngineStore.getOutputDeviceId();
      if (null != _location) {
        const obj3 = { location: _location, analyticsLocations };
        trackDeviceChanged(MediaEngineStore.getOutputDevices(), outputDeviceId, id, "Audio Output", obj3);
      }
      const obj5 = { type: "AUDIO_SET_OUTPUT_DEVICE", id, oldId: outputDeviceId };
      const obj4 = DispatcherDefault;
      obj4.dispatch(obj5);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setVideoDevice(found) {
    let _location;
    let analyticsLocations;
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported === "function") {
      const videoDeviceId = MediaEngineStore.getVideoDeviceId();
      if (null != _location) {
        const obj3 = { location: _location, analyticsLocations };
        trackDeviceChanged(MediaEngineStore.getVideoDevices(), videoDeviceId, found, "Video", obj3);
      }
      const obj5 = { type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: found, oldId: videoDeviceId };
      const obj4 = DispatcherDefault;
      obj4.dispatch(obj5);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setActiveInputProfile(inputProfile) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (typeof isNotSupported === "function") {
      const tmp3 = trackVoiceAndVideoSettingsUpdateDefault;
      const activeInputProfile = MediaEngineStore.getActiveInputProfile();
      tmp3("active_input_profile", inputProfile, activeInputProfile, analyticsLocations);
      const obj2 = { type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile };
      const tmpResult = DispatcherDefault;
      tmpResult.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setEchoCancellation(enabled, location) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_ECHO_CANCELLATION", enabled, location };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setSidechainCompression(enabled) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("stream_attenuation_enabled", enabled, MediaEngineStore.getSidechainCompression(), analyticsLocations);
      const obj3 = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setSidechainCompressionStrength(strength) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("stream_attenuation_strength", strength, MediaEngineStore.getSidechainCompressionStrength(), analyticsLocations);
      const obj3 = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setLoopback(loopbackReason, enabled) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_LOOPBACK", loopbackReason, enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setNoiseSuppression(enabled, location) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled, location };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setNoiseCancellation(enabled, location) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_NOISE_CANCELLATION", enabled, location };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
      const obj4 = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !enabled, location };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj4);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setAutomaticGainControl(enabled, location) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled, location };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
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
        trackVoiceAndVideoSettingsUpdateDefault("global_attenuation_for_self_speak_enabled", attenuateWhileSpeakingSelf, attenuateWhileSpeakingSelf);
      } else if (attenuateWhileSpeakingOthers !== attenuateWhileSpeakingOthers) {
        trackVoiceAndVideoSettingsUpdateDefault("global_attenuation_for_other_speak_enabled", attenuateWhileSpeakingOthers, attenuateWhileSpeakingOthers);
      }
      const obj2 = { type: "AUDIO_SET_ATTENUATION", attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setQoS(enabled) {
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("quality_of_service_packets_enabled", enabled, MediaEngineStore.getQoS());
      const obj2 = { type: "AUDIO_SET_QOS", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  reset() {
    if (typeof isNotSupported === "function") {
      obj = DispatcherDefault;
      obj.dispatch({ type: "AUDIO_RESET" });
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setSilenceWarning(enabled) {
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("silence_warning_enabled", enabled, MediaEngineStore.getEnableSilenceWarning());
      const obj2 = { type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setDebugLogging(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp;
              isNotSupported();
              const tmp14 = v1(c2[15]);
              v1 = 1;
              c2 = 1;
              const obj4 = { value: tmp14("debug_logging_enabled", closure_0, debugLogging.getDebugLogging()), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj6 = { type: "AUDIO_SET_DEBUG_LOGGING", enabled: closure_128_0 };
            obj = v1(c2[13]);
            obj.dispatch(obj6);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp17) {
          c2 = 3;
          throw tmp17;
        }
      }
    })();
  },
  setVideoHook(enabled) {
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("video_hook_enabled", enabled, MediaEngineStore.getVideoHook());
      const obj2 = { type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setExperimentalSoundshare(enabled) {
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("experimental_soundshare_enabled", enabled, MediaEngineStore.getExperimentalSoundshare());
      const obj2 = { type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setUseSystemScreensharePicker(enabled) {
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("system_screenshare_picker_enabled", enabled, MediaEngineStore.getUseSystemScreensharePicker());
      const obj2 = { type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setAudioSubsystem(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp;
              isNotSupported();
              const tmp14 = v1(c2[15]);
              v1 = 1;
              c2 = 1;
              const obj4 = { value: tmp14("audio_subsystem", closure_0, audioSubsystem.getAudioSubsystem()), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj6 = { type: "AUDIO_SET_SUBSYSTEM", subsystem: closure_128_0 };
            obj = v1(c2[13]);
            obj.dispatch(obj6);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp17) {
          c2 = 3;
          throw tmp17;
        }
      }
    })();
  },
  setVideoEnabled(enabled) {
    const tmp = enabled;
    if (tmp) {
      obj = applyBackgroundOption;
      const result = obj.applyInitialVideoBackgroundOption();
    }
    const obj2 = DispatcherDefault;
    const obj3 = { type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled };
    obj2.dispatch(obj3);
  },
  setGoLiveSource(qualityOptions) {
    qualityOptions = undefined;
    if (qualityOptions != null) {
      qualityOptions = qualityOptions.qualityOptions;
    }
    if (null != qualityOptions) {
      const preset = qualityOptions.qualityOptions.preset;
      const resolution = qualityOptions.qualityOptions.resolution;
      const frameRate = qualityOptions.qualityOptions.frameRate;
      const desktopSettings = qualityOptions.desktopSettings;
      let sound;
      const trackStreamSettingsUpdate = StreamQualityUtils.trackStreamSettingsUpdate;
      if (desktopSettings != null) {
        sound = desktopSettings.sound;
      }
      const result = trackStreamSettingsUpdate(preset, resolution, frameRate, sound);
    }
    obj = DispatcherDefault;
    const obj2 = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: qualityOptions };
    obj.dispatch(obj2);
  },
  setAecDump(enabled) {
    if (typeof isNotSupported === "function") {
      const tmp4 = trackVoiceAndVideoSettingsUpdateDefault;
      tmp4("diagnostic_audio_recording_enabled", enabled, MediaEngineStore.getAecDump());
      const obj2 = { type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  interact() {
    if (typeof isNotSupported === "function") {
      obj = DispatcherDefault;
      obj.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: false });
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setEnableHardwareMuteNotice(enabled) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setKrispSuppressionLevel(level) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  setKrispModelOverride(model) {
    if (typeof isNotSupported === "function") {
      const obj2 = { type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
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
      const obj2 = { type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  resetMediaEngineSettings(overrides) {
    obj = DispatcherDefault;
    const obj2 = { type: "MEDIA_ENGINE_RESET_SETTINGS", overrides };
    return obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("actions/AudioActionCreators.tsx");

export default obj2;