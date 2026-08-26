// === Module 9371: trackDeviceChanged ===

// Module 9371 (trackDeviceChanged)
import timestampDefault from "timestamp" /* 3 */;
import debounceDefault from "debounce" /* 636 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import snapVolumeToDefault from "snapVolumeToDefault" /* 9373 */;
import trackVoiceAndVideoDebuggingSettingsUpdatedDefault from "trackVoiceAndVideoDebuggingSettingsUpdated" /* 9375 */;
import _getFilterBlob from "_getFilterBlob" /* 9376 */;
import isPremiumResolution from "isPremiumResolution" /* 9384 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "initialize" /* 4517 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "_detectH265HardwareDecode" /* 4495 */;
import closure_7 from "createRTCConnection" /* 4518 */;
import closure_8 from "handleConnectionOpen" /* 1981 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { SoundOutputChannel } from "SoundOutputChannel" /* 9372 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4508 */;

require = arg1;
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
    obj = { device_from_name: null, device_to_name: null, device_type: null, device_is_certified: null, location: null, location_stack: null, voice_channel_type: null, audio_subsystem: null, audio_layer: null };
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
    expandEventPropertiesDefault.track(constants2.MEDIA_DEVICE_CHANGED, obj);
    const obj3 = expandEventPropertiesDefault;
  }
}
({ InputModes: c10, AnalyticEvents: unpackModuleId } = ME);
let obj = new timestampDefault("AudioActionCreators");
obj.enableNativeLogger(true);
let closure_15 = debounceDefault((target_user_id, context, volume) => {
  obj = expandEventPropertiesDefault;
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
        let dispatchResult = dispatcherDefault.dispatch(obj);
        const obj3 = dispatcherDefault;
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
    dispatcherDefault.dispatch(obj);
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
    dispatcherDefault.dispatch(obj);
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
      if (typeof isNotSupported !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof trackToggleSelfDeaf !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = { type: "AUDIO_TOGGLE_SELF_DEAF", context: null, syncRemote: null };
      obj[1] = DEFAULT;
      obj[2] = flag;
      dispatcherDefault.dispatch(obj);
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
    obj = dispatcherDefault;
    obj = { type: "AUDIO_TOGGLE_LOCAL_MUTE", context: DEFAULT, userId: id };
    obj.dispatch(obj);
  },
  toggleLocalSoundboardMute(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    obj = dispatcherDefault;
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
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: DEFAULT, userId: closure_0, videoToggleState: MANUAL_ENABLED, persist: flag, isAutomatic: flag2 };
    obj.dispatch(obj);
  },
  setLocalVolume(userId, USER, DEFAULT) {
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    obj = snapVolumeToDefault;
    const snapVolumeToDefaultResult = obj.snapVolumeToDefault(USER, DEFAULT);
    obj = { type: "AUDIO_SET_LOCAL_VOLUME", context: DEFAULT, userId, volume: snapVolumeToDefaultResult };
    dispatcherDefault.dispatch(obj);
    callback2(userId, DEFAULT, snapVolumeToDefaultResult);
  },
  setAudioMixerSettings(audioMixerSettings) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: DEFAULT, settings: audioMixerSettings };
    obj.dispatch(obj);
  },
  setSpatialAudio(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const audioMixerSettings = store2.getAudioMixerSettings();
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("spatial_audio_enabled", enabled, audioMixerSettings.enabled, arg1);
    obj = dispatcherDefault;
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
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_LOCAL_PAN", context: DEFAULT, userId, left, right };
    obj.dispatch(obj);
  },
  setMode(mode, arg1, DEFAULT) {
    obj = arg1;
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
    let obj3 = dispatcherDefault;
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
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled, location };
    obj.dispatch(obj);
  },
  setInputVolume(volume) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { type: "AUDIO_SET_INPUT_VOLUME", volume };
    dispatcherDefault.dispatch(obj);
    const voiceChannelId = store4.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = store.getChannel(voiceChannelId);
    }
    const obj2 = dispatcherDefault;
    const tmp = importDefault;
    obj = { volume, location_stack: obj.analyticsLocations, voice_channel_type: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[2] = type;
    expandEventPropertiesDefault.track(constants2.MEDIA_INPUT_VOLUME_CHANGED, obj);
  },
  setOutputVolume(volume) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { type: "AUDIO_SET_OUTPUT_VOLUME", volume };
    dispatcherDefault.dispatch(obj);
    const voiceChannelId = store4.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = store.getChannel(voiceChannelId);
    }
    const obj2 = dispatcherDefault;
    const tmp = importDefault;
    obj = { volume, location_stack: obj.analyticsLocations, voice_channel_type: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[2] = type;
    expandEventPropertiesDefault.track(constants2.MEDIA_OUTPUT_VOLUME_CHANGED, obj);
  },
  setInputDevice(id) {
    obj = arg1;
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
    dispatcherDefault.dispatch(obj);
  },
  setOutputDevice(id) {
    obj = arg1;
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
    dispatcherDefault.dispatch(obj);
  },
  setVideoDevice(found) {
    obj = arg1;
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
    dispatcherDefault.dispatch(obj);
  },
  setActiveInputProfile(inputProfile) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const activeInputProfile = store2.getActiveInputProfile();
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("active_input_profile", inputProfile, activeInputProfile, obj.analyticsLocations);
    const tmp = importDefault;
    const tmp3 = trackVoiceAndVideoDebuggingSettingsUpdatedDefault;
    obj = { type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile };
    dispatcherDefault.dispatch(obj);
  },
  setEchoCancellation(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_ECHO_CANCELLATION", enabled, location };
    obj.dispatch(obj);
  },
  setSidechainCompression(enabled) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("stream_attenuation_enabled", enabled, store2.getSidechainCompression(), obj.analyticsLocations);
    const tmp = trackVoiceAndVideoDebuggingSettingsUpdatedDefault;
    obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled };
    dispatcherDefault.dispatch(obj);
  },
  setSidechainCompressionStrength(strength) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("stream_attenuation_strength", strength, store2.getSidechainCompressionStrength(), obj.analyticsLocations);
    const tmp = trackVoiceAndVideoDebuggingSettingsUpdatedDefault;
    obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength };
    dispatcherDefault.dispatch(obj);
  },
  setLoopback(loopbackReason, enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_LOOPBACK", loopbackReason, enabled };
    obj.dispatch(obj);
  },
  setNoiseSuppression(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled, location };
    obj.dispatch(obj);
  },
  setNoiseCancellation(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_NOISE_CANCELLATION", enabled, location };
    obj.dispatch(obj);
    obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !enabled, location };
    dispatcherDefault.dispatch(obj);
  },
  setAutomaticGainControl(enabled, location) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
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
      trackVoiceAndVideoDebuggingSettingsUpdatedDefault("global_attenuation_strength", attenuation, attenuation);
    } else if (attenuateWhileSpeakingSelf !== attenuateWhileSpeakingSelf) {
      trackVoiceAndVideoDebuggingSettingsUpdatedDefault("global_attenuation_for_self_speak_enabled", attenuateWhileSpeakingSelf, attenuateWhileSpeakingSelf);
    } else if (attenuateWhileSpeakingOthers !== attenuateWhileSpeakingOthers) {
      trackVoiceAndVideoDebuggingSettingsUpdatedDefault("global_attenuation_for_other_speak_enabled", attenuateWhileSpeakingOthers, attenuateWhileSpeakingOthers);
    }
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_ATTENUATION", attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers };
    obj.dispatch(obj);
  },
  setQoS(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("quality_of_service_packets_enabled", enabled, store2.getQoS());
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_QOS", enabled };
    obj.dispatch(obj);
  },
  reset() {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    dispatcherDefault.dispatch({ type: "AUDIO_RESET" });
  },
  setSilenceWarning(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("silence_warning_enabled", enabled, store2.getEnableSilenceWarning());
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled };
    obj.dispatch(obj);
  },
  setDebugLogging(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
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
              closure_0 = tmp2;
              closure_1_16();
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0(9375)("debug_logging_enabled", closure_1_0, closure_1_6.getDebugLogging());
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
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("video_hook_enabled", enabled, store2.getVideoHook());
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled };
    obj.dispatch(obj);
  },
  setExperimentalSoundshare(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("experimental_soundshare_enabled", enabled, store2.getExperimentalSoundshare());
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled };
    obj.dispatch(obj);
  },
  setUseSystemScreensharePicker(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("system_screenshare_picker_enabled", enabled, store2.getUseSystemScreensharePicker());
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled };
    obj.dispatch(obj);
  },
  setAudioSubsystem(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
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
              closure_0 = tmp2;
              closure_1_16();
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0(9375)("audio_subsystem", closure_1_0, closure_1_6.getAudioSubsystem());
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
    obj = _getFilterBlob;
    const result = obj.applyInitialVideoBackgroundOption();
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled };
    dispatcherDefault.dispatch(obj);
  },
  setGoLiveSource(qualityOptions) {
    qualityOptions = undefined;
    if (qualityOptions != null) {
      qualityOptions = qualityOptions.qualityOptions;
    }
    if (null != qualityOptions) {
      obj = isPremiumResolution;
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
    dispatcherDefault.dispatch(obj);
  },
  setAecDump(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    trackVoiceAndVideoDebuggingSettingsUpdatedDefault("diagnostic_audio_recording_enabled", enabled, store2.getAecDump());
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled };
    obj.dispatch(obj);
  },
  interact() {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    dispatcherDefault.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: false });
  },
  setEnableHardwareMuteNotice(enabled) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled };
    obj.dispatch(obj);
  },
  setKrispSuppressionLevel(level) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
    obj = { type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level };
    obj.dispatch(obj);
  },
  setKrispModelOverride(model) {
    if (typeof isNotSupported !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = dispatcherDefault;
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
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled };
    obj.dispatch(obj);
  },
  resetMediaEngineSettings(overrides) {
    obj = dispatcherDefault;
    obj = { type: "MEDIA_ENGINE_RESET_SETTINGS", overrides };
    return obj.dispatch(obj);
  }
};
let result = require("set").fileFinishedImporting("actions/AudioActionCreators.tsx");

export default obj;