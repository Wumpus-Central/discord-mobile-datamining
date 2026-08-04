import handleConnectionOpen from "handleConnectionOpen";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import closure_8 from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { SoundOutputChannel } from "SoundOutputChannel";
import { MediaEngineContextTypes } from "DesktopSources";

let c10;
let unpackModuleId;
const require = arg1;
function trackDeviceChanged(inputDevices, inputDeviceId, found, Video, arg4) {
  if (inputDeviceId !== found) {
    const voiceChannelId = store4.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = store.getChannel(voiceChannelId);
    }
    const mediaEngine = store2.getMediaEngine();
    const audioSubsystem = mediaEngine.getAudioSubsystem();
    const mediaEngine1 = store2.getMediaEngine();
    const audioLayer = mediaEngine1.getAudioLayer();
    let str = "";
    let str2 = "";
    if (null != inputDevices[inputDeviceId]) {
      str2 = tmp6.name;
    }
    const obj = { device_from_name: null, device_to_name: null, device_type: null, device_is_certified: null, location: null, location_stack: null, voice_channel_type: null, audio_subsystem: null, audio_layer: null };
    obj[0] = certifiedDeviceName.getCertifiedDeviceName(inputDeviceId, str2);
    if (null != inputDevices[found]) {
      str = tmp7.name;
    }
    obj[1] = certifiedDeviceName.getCertifiedDeviceName(found, str);
    obj[2] = Video;
    obj[3] = certifiedDeviceName.isCertified(found);
    obj[4] = tmp;
    obj[5] = tmp2;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[6] = type;
    obj[7] = audioSubsystem;
    obj[8] = audioLayer;
    importDefault(698).track(constants2.MEDIA_DEVICE_CHANGED, obj);
    const obj3 = importDefault(698);
  }
}
({ InputModes: c10, AnalyticEvents: unpackModuleId } = ME);
let obj = new require("_detectH265HardwareDecode")("AudioActionCreators");
obj.enableNativeLogger(true);
let closure_15 = require("debounce")((target_user_id, context, volume) => {
  let obj = importDefault(698);
  obj = { target_user_id, context, volume, media_session_id: store3.getMediaSessionId(), rtc_connection_id: store3.getRTCConnectionId() };
  obj.track(constants2.USER_VOLUME_SETTING_UPDATED, obj);
}, 300);
function isNotSupported() {
  return false;
}
function trackToggleSelfMute() {

}
function trackToggleSelfDeaf() {

}
obj = {
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
      if (typeof isNotSupported !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof trackToggleSelfMute !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (flag2) {
        flag2 = !store2.hasActiveCallKitCall();
      }
      const currentUser = authStore.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (isStaffResult) {
        obj.info("Toggling self mute");
      }
      if (store2.isEnabled()) {
        obj = { type: "AUDIO_TOGGLE_SELF_MUTE", context: null, syncRemote: null, playSoundEffect: null };
        obj[1] = DEFAULT;
        obj[2] = flag;
        obj[3] = flag2;
        let dispatchResult = importDefault(709).dispatch(obj);
        const obj3 = importDefault(709);
      } else {
        const self = this;
        dispatchResult = this.enable(true);
      }
      return dispatchResult;
    }
  },
  setSelfMute(context, mute) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (flag) {
      flag = !store2.hasActiveCallKitCall();
    }
    const currentUser = authStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (isStaffResult) {
      obj.info("Setting self mute", mute);
    }
    obj = { type: "AUDIO_SET_SELF_MUTE", context, mute, playSoundEffect: flag };
    importDefault(709).dispatch(obj);
  },
  setTemporarySelfMute(mute) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const currentUser = authStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (isStaffResult) {
      obj.info("Setting temporary self mute", mute);
    }
    obj = { type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute };
    importDefault(709).dispatch(obj);
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
      if (typeof isNotSupported !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof trackToggleSelfDeaf !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { type: "AUDIO_TOGGLE_SELF_DEAF", context: null, syncRemote: null };
      obj[1] = DEFAULT;
      obj[2] = flag;
      importDefault(709).dispatch(obj);
    }
  },
  toggleLocalMute(id, closure_1) {
    let DEFAULT = closure_1;
    if (closure_1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_TOGGLE_LOCAL_MUTE", context: DEFAULT, userId: id };
    obj.dispatch(obj);
  },
  toggleLocalSoundboardMute(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: DEFAULT, userId: id };
    obj.dispatch(obj);
  },
  setDisableLocalVideo(closure_0, MANUAL_ENABLED, DEFAULT, arg3) {
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
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: DEFAULT, userId: closure_0, videoToggleState: MANUAL_ENABLED, persist: flag, isAutomatic: flag2 };
    obj.dispatch(obj);
  },
  setLocalVolume(userId, USER, DEFAULT) {
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = require(9079) /* snapVolumeToDefault */;
    const snapVolumeToDefaultResult = obj.snapVolumeToDefault(USER, DEFAULT);
    obj = { type: "AUDIO_SET_LOCAL_VOLUME", context: DEFAULT, userId, volume: snapVolumeToDefaultResult };
    importDefault(709).dispatch(obj);
    callback2(userId, DEFAULT, snapVolumeToDefaultResult);
  },
  setAudioMixerSettings(audioMixerSettings) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: DEFAULT, settings: audioMixerSettings };
    obj.dispatch(obj);
  },
  setSpatialAudio(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const audioMixerSettings = store2.getAudioMixerSettings();
    importDefault(9081)("spatial_audio_enabled", enabled, audioMixerSettings.enabled, arg1);
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: MediaEngineContextTypes.DEFAULT, settings: null };
    obj = {};
    const merged = Object.assign(audioMixerSettings);
    obj.enabled = enabled;
    obj[2] = obj;
    obj.dispatch(obj);
  },
  setLocalPan(userId, left, right) {
    let DEFAULT = arg3;
    if (arg3 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_LOCAL_PAN", context: DEFAULT, userId, left, right };
    obj.dispatch(obj);
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
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj2 = store2;
    mode = store2.getMode();
    const modeOptions = store2.getModeOptions(DEFAULT);
    let obj3 = importDefault(709);
    obj = { type: "AUDIO_SET_MODE", context: DEFAULT, mode, options: null };
    const merged = Object.assign(modeOptions);
    const merged1 = Object.assign(obj);
    obj[3] = {};
    obj3.dispatch(obj);
    if (mode !== mode) {
      const mediaEngine = obj2.getMediaEngine();
      const audioSubsystem = mediaEngine.getAudioSubsystem();
      const mediaEngine1 = obj2.getMediaEngine();
      const audioLayer = mediaEngine1.getAudioLayer();
      const voiceChannelId = store4.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = store.getChannel(voiceChannelId);
      }
      const inputDevices = obj2.getInputDevices();
      const tmp24 = inputDevices[obj2.getInputDeviceId(obj2)];
      let str2 = "";
      if (null != tmp24) {
        str2 = tmp24.name;
      }
      let tmp4Result = tmp4(698);
      obj2 = { mode: null, location_stack: null, voice_channel_type: null, input_device_name: null, audio_subsystem: null, audio_layer: null };
      obj2[0] = mode;
      obj2[1] = analyticsLocations;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj2[2] = type;
      obj2[3] = str2;
      obj2[4] = audioSubsystem;
      obj2[5] = audioLayer;
      tmp4Result.track(constants2.VOICE_ACTIVATION_MODE_CHANGED, obj2);
    } else if (mode === constants.VOICE_ACTIVITY) {
      if (modeOptions !== obj) {
        const mediaEngine2 = obj2.getMediaEngine();
        const audioSubsystem1 = mediaEngine2.getAudioSubsystem();
        const mediaEngine3 = obj2.getMediaEngine();
        const audioLayer1 = mediaEngine3.getAudioLayer();
        const voiceChannelId1 = store4.getVoiceChannelId();
        let channel1 = null;
        if (null != voiceChannelId1) {
          channel1 = store.getChannel(voiceChannelId1);
        }
        const inputDevices1 = obj2.getInputDevices();
        const tmp12 = inputDevices1[obj2.getInputDeviceId(obj2)];
        let str = "";
        if (null != tmp12) {
          str = tmp12.name;
        }
        tmp4Result = tmp4(698);
        obj3 = { location_stack: null, voice_channel_type: null, input_device_name: null, audio_subsystem: null, audio_layer: null, old_threshold: null, new_threshold: null, old_auto_threshold: null, new_auto_threshold: null };
        obj3[0] = analyticsLocations;
        let type1;
        if (channel1 != null) {
          type1 = channel1.type;
        }
        obj3[1] = type1;
        obj3[2] = str;
        obj3[3] = audioSubsystem1;
        obj3[4] = audioLayer1;
        obj3[5] = modeOptions.threshold;
        obj3[6] = obj.threshold;
        obj3[7] = modeOptions.autoThreshold;
        obj3[8] = obj.autoThreshold;
        tmp4Result.track(constants2.VOICE_ACTIVITY_THRESHOLD_CHANGED, obj3);
      }
    }
  },
  setBypassSystemInputProcessing(bypassEnabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled, location };
    obj.dispatch(obj);
  },
  setInputVolume(volume) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { type: "AUDIO_SET_INPUT_VOLUME", volume };
    importDefault(709).dispatch(obj);
    const voiceChannelId = store4.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = store.getChannel(voiceChannelId);
    }
    const obj2 = importDefault(709);
    const tmp = importDefault;
    obj = { volume, location_stack: obj.analyticsLocations, voice_channel_type: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[2] = type;
    importDefault(698).track(constants2.MEDIA_INPUT_VOLUME_CHANGED, obj);
  },
  setOutputVolume(volume) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { type: "AUDIO_SET_OUTPUT_VOLUME", volume };
    importDefault(709).dispatch(obj);
    const voiceChannelId = store4.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = store.getChannel(voiceChannelId);
    }
    const obj2 = importDefault(709);
    const tmp = importDefault;
    obj = { volume, location_stack: obj.analyticsLocations, voice_channel_type: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[2] = type;
    importDefault(698).track(constants2.MEDIA_OUTPUT_VOLUME_CHANGED, obj);
  },
  setInputDevice(id) {
    let _location;
    let analyticsLocations;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const inputDeviceId = store2.getInputDeviceId();
    if (null != _location) {
      obj = { location: null, analyticsLocations: null };
      obj[0] = _location;
      obj[1] = analyticsLocations;
      trackDeviceChanged(store2.getInputDevices(), inputDeviceId, id, "Audio Input", obj);
    }
    obj = { type: "AUDIO_SET_INPUT_DEVICE", id, oldId: inputDeviceId };
    importDefault(709).dispatch(obj);
  },
  setOutputDevice(id) {
    let _location;
    let analyticsLocations;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const outputDeviceId = store2.getOutputDeviceId();
    if (null != _location) {
      obj = { location: null, analyticsLocations: null };
      obj[0] = _location;
      obj[1] = analyticsLocations;
      trackDeviceChanged(store2.getOutputDevices(), outputDeviceId, id, "Audio Output", obj);
    }
    obj = { type: "AUDIO_SET_OUTPUT_DEVICE", id, oldId: outputDeviceId };
    importDefault(709).dispatch(obj);
  },
  setVideoDevice(found) {
    let _location;
    let analyticsLocations;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const videoDeviceId = store2.getVideoDeviceId();
    if (null != _location) {
      obj = { location: null, analyticsLocations: null };
      obj[0] = _location;
      obj[1] = analyticsLocations;
      trackDeviceChanged(store2.getVideoDevices(), videoDeviceId, found, "Video", obj);
    }
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: found, oldId: videoDeviceId };
    importDefault(709).dispatch(obj);
  },
  setActiveInputProfile(inputProfile) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const activeInputProfile = store2.getActiveInputProfile();
    importDefault(9081)("active_input_profile", inputProfile, activeInputProfile, obj.analyticsLocations);
    const tmp = importDefault;
    const tmp3 = importDefault(9081);
    obj = { type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile };
    importDefault(709).dispatch(obj);
  },
  setEchoCancellation(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_ECHO_CANCELLATION", enabled, location };
    obj.dispatch(obj);
  },
  setSidechainCompression(enabled) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("stream_attenuation_enabled", enabled, store2.getSidechainCompression(), obj.analyticsLocations);
    const tmp = importDefault(9081);
    obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled };
    importDefault(709).dispatch(obj);
  },
  setSidechainCompressionStrength(strength) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("stream_attenuation_strength", strength, store2.getSidechainCompressionStrength(), obj.analyticsLocations);
    const tmp = importDefault(9081);
    obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength };
    importDefault(709).dispatch(obj);
  },
  setLoopback(loopbackReason, enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_LOOPBACK", loopbackReason, enabled };
    obj.dispatch(obj);
  },
  setNoiseSuppression(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled, location };
    obj.dispatch(obj);
  },
  setNoiseCancellation(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_NOISE_CANCELLATION", enabled, location };
    obj.dispatch(obj);
    obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !enabled, location };
    importDefault(709).dispatch(obj);
  },
  setAutomaticGainControl(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled, location };
    obj.dispatch(obj);
  },
  setAttenuation(attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    attenuation = store2.getAttenuation();
    attenuateWhileSpeakingSelf = store2.getAttenuateWhileSpeakingSelf();
    attenuateWhileSpeakingOthers = store2.getAttenuateWhileSpeakingOthers();
    if (attenuation !== attenuation) {
      importDefault(9081)("global_attenuation_strength", attenuation, attenuation);
    } else if (attenuateWhileSpeakingSelf !== attenuateWhileSpeakingSelf) {
      importDefault(9081)("global_attenuation_for_self_speak_enabled", attenuateWhileSpeakingSelf, attenuateWhileSpeakingSelf);
    } else if (attenuateWhileSpeakingOthers !== attenuateWhileSpeakingOthers) {
      importDefault(9081)("global_attenuation_for_other_speak_enabled", attenuateWhileSpeakingOthers, attenuateWhileSpeakingOthers);
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_ATTENUATION", attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers };
    obj.dispatch(obj);
  },
  setQoS(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("quality_of_service_packets_enabled", enabled, store2.getQoS());
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_QOS", enabled };
    obj.dispatch(obj);
  },
  reset() {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(709).dispatch({ type: "AUDIO_RESET" });
  },
  setSilenceWarning(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("silence_warning_enabled", enabled, store2.getEnableSilenceWarning());
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled };
    obj.dispatch(obj);
  },
  setDebugLogging(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp2;
              outer1_16();
              v0 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = v0(9081)("debug_logging_enabled", outer1_0, outer1_6.getDebugLogging());
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = v0(709);
            const obj3 = { type: "AUDIO_SET_DEBUG_LOGGING", enabled: null };
            obj3[1] = closure_0;
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
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("video_hook_enabled", enabled, store2.getVideoHook());
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled };
    obj.dispatch(obj);
  },
  setExperimentalSoundshare(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("experimental_soundshare_enabled", enabled, store2.getExperimentalSoundshare());
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled };
    obj.dispatch(obj);
  },
  setUseSystemScreensharePicker(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("system_screenshare_picker_enabled", enabled, store2.getUseSystemScreensharePicker());
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled };
    obj.dispatch(obj);
  },
  setAudioSubsystem(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp2;
              outer1_16();
              v0 = 1;
              dependencyMap = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = v0(9081)("audio_subsystem", outer1_0, outer1_6.getAudioSubsystem());
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = v0(709);
            const obj3 = { type: "AUDIO_SET_SUBSYSTEM", subsystem: null };
            obj3[1] = closure_0;
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
    let obj = require(9082) /* _getFilterBlob */;
    const result = obj.applyInitialVideoBackgroundOption();
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled };
    importDefault(709).dispatch(obj);
  },
  setGoLiveSource(qualityOptions) {
    qualityOptions = undefined;
    if (qualityOptions != null) {
      qualityOptions = qualityOptions.qualityOptions;
    }
    if (null != qualityOptions) {
      let obj = require(9090) /* isPremiumResolution */;
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
    importDefault(709).dispatch(obj);
  },
  setAecDump(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(9081)("diagnostic_audio_recording_enabled", enabled, store2.getAecDump());
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled };
    obj.dispatch(obj);
  },
  interact() {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    importDefault(709).dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: false });
  },
  setEnableHardwareMuteNotice(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled };
    obj.dispatch(obj);
  },
  setKrispSuppressionLevel(level) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level };
    obj.dispatch(obj);
  },
  setKrispModelOverride(model) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model };
    obj.dispatch(obj);
    if (store2.getNoiseCancellation()) {
      const self = this;
      this.setNoiseCancellation(false);
      this.setNoiseCancellation(true);
    }
  },
  setNoiseCancellationEnableStats(arg0) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
  },
  setOpenH264Enabled(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled };
    obj.dispatch(obj);
  },
  resetMediaEngineSettings(overrides) {
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_RESET_SETTINGS", overrides };
    return obj.dispatch(obj);
  }
};
let result = require("ensureGuildLoaded").fileFinishedImporting("actions/AudioActionCreators.tsx");

export default obj;