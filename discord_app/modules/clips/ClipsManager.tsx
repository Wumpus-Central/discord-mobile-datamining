// === Module 20452: clips/ClipsManager ===

// Module 20452 (clips/ClipsManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 4967 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5920 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6774 */;
import ClipsExperiment from "ClipsExperiment" /* 15210 */;
import isClipsEnabled from "isClipsEnabled" /* 15521 */;
import AutoclipsExperimentDefault from "AutoclipsExperiment" /* 20454 */;
import ClipsDefaultOnGeoExperimentDefault from "ClipsDefaultOnGeoExperiment" /* 20455 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5895 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7966 */;
import UserStore from "UserStore" /* 1385 */;
import ClipsStore from "ClipsStore" /* 2136 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7353 */;

const StreamKeyUtilsAll = StreamKeyUtils;

require = fn;
function getCodecSurvey() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_25 = async function _getCodecSurvey() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          c4 = 1;
          const _JSON = JSON;
          mediaEngine = mediaEngine.getMediaEngine();
          c6 = 2;
          c7 = 1;
          const obj4 = { value: mediaEngine.getCodecSurvey(), done: false };
          return obj4;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_130_0 = closure_5;
        closure_131_18.warn("Failed to get codec survey", closure_130_0);
        c7 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 0;
        c7 = 3;
        const obj = { value: parse(value), done: true };
        return obj;
      }
    } catch (tmp18) {
      closure_5 = tmp18;
      if (tmp4 === c4) {
        c7 = tmp2;
        throw tmp18;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_26 = async function _probeHardware() {
  closure_4 = tmp2;
  closure_3 = tmp5;
  items = [getCodecSurvey(), getSystemAnalyticsInfo()];
  await Promise.all(items);
  closure_131_0 = value;
  closure_131_1 = closure_132_4(closure_131_0, 2);
  closure_131_2 = closure_131_1[0];
  closure_131_3 = closure_131_1[1];
  if (closure_131_3 != null) {
    const gpus = closure_131_3.gpus;
  }
  c0 = gpus;
  if (gpus == null) {
    c0 = null;
  }
  closure_131_4 = c0;
  importDefault = closure_131_4;
  if (closure_131_4 == null) {
    importDefault = [];
  }
  const mapped = importDefault.map((brand) => brand.brand);
  closure_131_5 = mapped.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  if (closure_131_2 != null) {
    const prop = closure_131_2.available_video_decoders;
  }
  if (null == prop) {
    return { classification: closure_132_17.UNKNOWN, gpuModels: closure_131_5, videoEncoders: [] };
  }
  const available_video_encoders = closure_131_2.available_video_encoders;
  closure_2 = available_video_encoders;
  if (available_video_encoders == null) {
    closure_2 = [];
  }
  closure_131_6 = closure_2;
  return { classification: closure_132_0(closure_132_3[15]).classifyClipsHardware(closure_131_6, closure_131_4), gpuModels: closure_131_5, videoEncoders: closure_131_6 };
};
const getSystemAnalyticsInfo = fn(5914).getSystemAnalyticsInfo;
const ClipsConstants = fn(8288);
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_15, CLIPS_DEFAULT_SETTINGS_VERSION: closure_16, ClipsHardwareClassification: closure_17, ClipsLogger: closure_18, CLIP_RUNTIME: closure_19 } = ClipsConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_20, RTCConnectionStates: closure_21 } = Constants);
const StreamTypes = fn(6772).StreamTypes;
const Features = fn(5899).Features;
class ClipsManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.classifyHardwarePromise = null;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.handlePostConnectionOpen();
          },
      RTC_CONNECTION_FLAGS(arg0) {
            return applyArgumentsResult.handleRTCConnectionFlags(arg0);
          },
      RTC_CONNECTION_USERS_MERGED(userIds) {
            return applyArgumentsResult.handleRTCUsersUpdate(userIds);
          },
      CLIPS_INIT_FAILURE(arg0) {
            return applyArgumentsResult.handleClipsInitFailure(arg0);
          },
      CLIPS_SETTINGS_UPDATE(arg0) {
            return applyArgumentsResult.applyNativeClipsSettings(arg0);
          },
      CLIPS_ALLOW_VOICE_RECORDING_UPDATE() {
            return applyArgumentsResult.handleClipsAllowVoiceRecordingUpdate();
          },
      STREAM_START() {
            const mediaEngine = MediaEngineStore.getMediaEngine();
            if (!mediaEngine.supports(Features.UNIFIED_CAPTURE_BROKER)) {
              const result = applyArgumentsResult.applyNativeClipsSettings();
            }
          },
      STREAM_DELETE(arg0) {
            const mediaEngine = MediaEngineStore.getMediaEngine();
            if (!mediaEngine.supports(Features.UNIFIED_CAPTURE_BROKER)) {
              applyArgumentsResult.handleStreamEnded(arg0);
            }
          },
      STREAM_CLOSE(arg0) {
            const mediaEngine = MediaEngineStore.getMediaEngine();
            if (!mediaEngine.supports(Features.UNIFIED_CAPTURE_BROKER)) {
              applyArgumentsResult.handleStreamEnded(arg0);
            }
          },
      RUNNING_GAME_TOGGLE_DETECTION(arg0) {
            return applyArgumentsResult.handleClipsInitOnToggleDetection(arg0);
          },
      RUNNING_GAMES_CHANGE(arg0) {
            return applyArgumentsResult.handleClipsInitOnGamesChange(arg0);
          },
      CLIPS_RESTART() {
            return applyArgumentsResult.fireClipsInitEvent(true);
          },
      RTC_CONNECTION_VIDEO(arg0) {
            return applyArgumentsResult.handleRTCConnectionVideo(arg0);
          },
      RTC_CONNECTION_STATE(arg0) {
            return applyArgumentsResult.handleRTCConnectionState(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = ClipsManager.prototype;
prototype["handleRTCConnectionState"] = function handleRTCConnectionState(state) {
  ({ context, streamKey } = state);
  if (obj.areClipsAvailable()) {
    if (state.state === constants3.RTC_CONNECTED) {
      const self = this;
      const id = AuthenticationStore.getId();
      if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === context) {
        const result = self.applyUserVoiceRecording(id);
        const result1 = self.applyUserSoundboardRecording(id);
      } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === context) {
        if (null != streamKey) {
          if (tmpResult.decodeStreamKey(streamKey).ownerId === id) {
            const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
            if (null != rTCConnection) {
              self.applyStreamRecording(id, rTCConnection);
            }
          }
          tmpResult = StreamKeyUtils;
        }
      }
    }
  }
  obj = ClipsExperiment;
};
prototype["handleRTCUsersUpdate"] = function handleRTCUsersUpdate(userIds) {
  const self = this;
  userIds = userIds.userIds;
  if (userIds.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT) {
    const item = userIds.forEach((item) => {
      const result = self.applyUserVoiceRecording(item);
      const result1 = self.applyUserSoundboardRecording(item);
    });
  }
};
prototype["handleRTCConnectionFlags"] = function handleRTCConnectionFlags(arg0) {
  const self = this;
  ({ userId, guildId, channelId } = arg0);
  const result = this.maybeShowClipsWarning(userId);
  const result1 = this.applyUserVoiceRecording(userId);
  const result2 = this.applyUserSoundboardRecording(userId);
  if (null != guildId) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  const rTCConnection = StreamRTCConnectionStore.getRTCConnection(StreamKeyUtilsAll.encodeStreamKey({ streamType: CALL, ownerId: userId, channelId, guildId }));
  if (null != rTCConnection) {
    self.applyStreamRecording(userId, rTCConnection);
  }
};
prototype["handleClipsInitFailure"] = function handleClipsInitFailure(arg0) {
  ({ applicationName, errMsg } = arg0);
  AnalyticsUtilsDefault.track(constants2.CLIPS_INIT_FAILURE, { application_name: applicationName, error_message: errMsg, clip_runtime });
};
prototype["maybeShowClipsWarning"] = function maybeShowClipsWarning(userId) {
  const channelId = RTCConnectionStore.getChannelId();
  if (null != channelId) {
    if (!ClipsStore.getClipsWarningShown(channelId)) {
      let setting = userId !== AuthenticationStore.getId() && ClipsStore.isClipsEnabledForUser(userId);
      if (setting) {
        const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
        setting = ClipsAllowVoiceRecording.getSetting();
      }
      if (setting) {
        const self = this;
        const obj2 = { type: "CLIPS_SHOW_CALL_WARNING", channelId };
        DispatcherDefault.dispatch(obj2);
        this.showClipsToast();
      }
    }
  }
};
prototype["handleClipsAllowVoiceRecordingUpdate"] = function handleClipsAllowVoiceRecordingUpdate() {
  const self = this;
  const userIds = RTCConnectionStore.getUserIds();
  if (userIds != null) {
    const item = userIds.forEach((item) => self.maybeShowClipsWarning(item));
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  if (obj.isClientClipsCapable(MediaEngineStore)) {
    const self = this;
    const result = this.applyNativeClipsSettings();
    if (tmpResult.areClipsAvailable()) {
      const clipsFromStorage = self.loadClipsFromStorage();
      self.maybeStartNtpClock();
      const result1 = self.updateHardwareClassification();
    } else {
      DispatcherDefault.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" });
    }
    tmpResult = ClipsExperiment;
  }
  obj = ClipsExperiment;
};
prototype["applyClipsDefaultSettings"] = function applyClipsDefaultSettings(classification, clipsDefaultSettingsDecision) {
  closure_0 = classification;
  closure_1 = clipsDefaultSettingsDecision;
  const self = this;
  return (async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const decision = tmp2;
            classification = tmp3;
            let clipsEnabled;
            let clipsEnabledSource;
            let enableAutoclipping;
            closure_128_3 = undefined;
            let setting;
            closure_128_5 = undefined;
            clipsEnabled = ClipsStore.getState().clipsSettings.clipsEnabled;
            clipsEnabledSource = ClipsStore.getClipsDefaultSettingsState().clipsEnabledSource;
            enableAutoclipping = ClipsStore.getEnableAutoclipping();
            closure_128_3 = null != ClipsStore.getHardwareClassification();
            const obj4 = { type: "CLIPS_APPLY_DEFAULT_SETTINGS", classification, decision };
            c2 = 1;
            dependencyMap = 1;
            const obj5 = { value: decision(572).dispatch(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const result = closure_129_2.applyNativeClipsSettings();
          if (null != closure_129_1) {
            const ClipsAllowVoiceRecording = classification(4967).ClipsAllowVoiceRecording;
            setting = ClipsAllowVoiceRecording.getSetting();
            const clips = settings.settings.clips;
            let allowVoiceRecording;
            if (clips != null) {
              allowVoiceRecording = clips.allowVoiceRecording;
            }
            let tmp8 = null == allowVoiceRecording;
            if (tmp8) {
              tmp8 = !closure_129_1.allowVoiceRecording;
            }
            closure_128_5 = tmp8;
            if (closure_128_5) {
              const result1 = closure_129_2.updateAllowVoiceRecordingDefault(false);
            }
            const obj8 = { hardware_classification: closure_129_0, was_hardware_classified: closure_128_3, nsfw_allowed: closure_129_1.nsfwAllowed, geo_allowed: closure_129_1.geoAllowed, default_clips_enabled: closure_129_1.clipsEnabled, version, previous_clips_enabled: clipsEnabled, previous_clips_enabled_source: clipsEnabledSource, actual_clips_enabled: ClipsStore.getState().clipsSettings.clipsEnabled, clips_enabled_source: ClipsStore.getClipsDefaultSettingsState().clipsEnabledSource, default_autoclipping_enabled: closure_129_1.enableAutoclipping, previous_autoclipping_enabled: enableAutoclipping, actual_autoclipping_enabled: ClipsStore.getEnableAutoclipping(), default_allow_voice_recording: closure_129_1.allowVoiceRecording, previous_allow_voice_recording: setting, actual_allow_voice_recording: null, clip_runtime: null };
            let tmp36 = setting;
            if (setting) {
              tmp36 = !closure_128_5;
            }
            obj8.actual_allow_voice_recording = tmp36;
            obj8.clip_runtime = clip_runtime;
            decision(1252).track(constants.CLIPS_DEFAULT_SETTINGS_APPLIED, obj8);
            const obj = decision(1252);
          }
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp42) {
        dependencyMap = tmp;
        throw tmp42;
      }
    }
  })();
};
prototype["updateAllowVoiceRecordingDefault"] = function updateAllowVoiceRecordingDefault(arg0) {
  closure_0 = arg0;
  return (async () => {
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
        return { value: "HermesInternal", done: null };
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
            const ClipsAllowVoiceRecording = tmp4(4967).ClipsAllowVoiceRecording;
            v1 = 1;
            c2 = 1;
            const obj4 = { value: ClipsAllowVoiceRecording.updateSetting(tmp4), done: false };
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
          v1(572).dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  })();
};
prototype["getClipsDefaultSettingsDecision"] = function getClipsDefaultSettingsDecision(classification) {
  if (classification === constants.UNKNOWN) {
    return null;
  } else if (ClipsStore.getClipsDefaultSettingsState().version >= value2) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (obj4.isUserPremiumTypeForClipsEarlyAccess(currentUser)) {
      if (obj.getConfig({ location: "getClipsDefaultSettingsDecision" }).enabled) {
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        if (nsfwAllowed == null) {
          nsfwAllowed = null;
        }
        let tmp7 = tmp6;
        if (true === nsfwAllowed) {
          tmp7 = classification === tmp.MEETS_AUTO_ENABLE;
        }
        let allowDefaultOn = null;
        if (true === nsfwAllowed) {
          allowDefaultOn = ClipsDefaultOnGeoExperimentDefault.getConfig({ location: "getClipsDefaultSettingsDecision" }).allowDefaultOn;
          const tmp2Result = ClipsDefaultOnGeoExperimentDefault;
        }
        const obj2 = { clipsEnabled: tmp7, enableAutoclipping: null, allowVoiceRecording: null, nsfwAllowed: null, geoAllowed: null };
        if (tmp7) {
          tmp7 = true === allowDefaultOn;
        }
        obj2.enableAutoclipping = tmp7;
        obj2.allowVoiceRecording = true === allowDefaultOn;
        obj2.nsfwAllowed = nsfwAllowed;
        obj2.geoAllowed = allowDefaultOn;
        return obj2;
      }
      obj = AutoclipsExperimentDefault;
    }
    return null;
  }
};
prototype["loadClipsFromStorage"] = function loadClipsFromStorage() {

};
prototype["handleRTCConnectionVideo"] = function handleRTCConnectionVideo(arg0) {
  ({ userId, guildId } = arg0);
  ({ context, channelId } = arg0);
  if (context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    if (tmpResult.isClientClipsCapable(MediaEngineStore)) {
      if (null != guildId) {
        let CALL = StreamTypes.GUILD;
      } else {
        CALL = StreamTypes.CALL;
      }
      const obj2 = { streamType: CALL, ownerId: userId, channelId, guildId };
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(StreamKeyUtilsAll.encodeStreamKey(obj2));
      if (null != rTCConnection) {
        const self = this;
        this.applyStreamRecording(userId, rTCConnection);
      }
    }
    tmpResult = ClipsExperiment;
  }
};
prototype["updateHardwareClassification"] = function updateHardwareClassification() {
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp7;
            let hardwareClassification2;
            closure_128_1 = undefined;
            if (self.classifyHardwarePromise == null) {
              tmp33.classifyHardwarePromise = self.classifyHardware();
            }
            c4 = 1;
            c5 = 1;
            const obj5 = { value: self.classifyHardwarePromise, done: false };
            return obj5;
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              hardwareClassification2 = hardwareClassification.getHardwareClassification();
              let clipsDefaultSettingsDecision = null;
              if (null != hardwareClassification2) {
                clipsDefaultSettingsDecision = closure_129_0.getClipsDefaultSettingsDecision(hardwareClassification2);
              }
              closure_128_1 = clipsDefaultSettingsDecision;
              if (null != hardwareClassification2) {
                if (null != closure_128_1) {
                  dependencyMap = 1;
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: closure_129_0.applyClipsDefaultSettings(hardwareClassification2, closure_128_1), done: false };
                  return obj7;
                }
              }
            }
          } else {
            if (2 === tmp7) {
              dependencyMap = 0;
              closure_128_2 = closure_2;
              logger.error("Failed to apply clips default settings", closure_128_2);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          tmp3(dependencyMap[22]).dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" });
          c5 = 3;
          const obj2 = tmp3(dependencyMap[22]);
        }
      } catch (tmp36) {
        closure_2 = tmp36;
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp36;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["classifyHardware"] = function classifyHardware() {
  const self = this;
  return (async () => {
    closure_1 = tmp3;
    await self.classifyAndApplyHardware();
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = closure_2;
      logger.error("Failed to classify hardware", closure_128_0);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  })();
};
prototype["classifyAndApplyHardware"] = function classifyAndApplyHardware() {
  let self = this;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            let classification;
            let gpuModels;
            let videoEncoders;
            let hardwareClassification;
            c2 = 1;
            c3 = 1;
            const obj5 = {
              value: (function probeHardware() {
                        self = this;
                        const apply = closure_1_26.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(),
              done: false
            };
            return obj5;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              classification = closure_128_0.classification;
              gpuModels = closure_128_0.gpuModels;
              videoEncoders = closure_128_0.videoEncoders;
              hardwareClassification = ClipsStore.getHardwareClassification();
              let tmp9 = classification === constants.UNKNOWN;
              if (tmp9) {
                tmp9 = null != hardwareClassification;
              }
              if (tmp9) {
                tmp9 = hardwareClassification !== constants.UNKNOWN;
              }
              if (!tmp9) {
                let tmp17 = classification === hardwareClassification;
                if (tmp17) {
                  tmp17 = ClipsStore.getHardwareClassificationVersion() === version;
                }
                tmp9 = tmp17;
              }
              if (!tmp9) {
                const obj7 = { classification, version, gpu_models: gpuModels, video_encoders: videoEncoders, clip_runtime };
                closure_1(c3[20]).track(constants2.CLIPS_HARDWARE_CLASSIFICATION, obj7);
                c2 = 2;
                c3 = 1;
                const obj8 = { value: closure_129_0.applyClipsDefaultSettings(classification, closure_129_0.getClipsDefaultSettingsDecision(classification)), done: false };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp35) {
        c3 = tmp;
        throw tmp35;
      }
    }
  })();
};
prototype["applyUserVoiceRecording"] = function applyUserVoiceRecording(id) {
  if (obj.isClientClipsCapable(MediaEngineStore)) {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null != rTCConnection) {
      const channel = ChannelStore.getChannel(RTCConnectionStore.getChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        rTCConnection.setClipRecordUser(id, "audio", false);
      } else if (id !== AuthenticationStore.getId()) {
        rTCConnection.setClipRecordUser(id, "audio", ClipsStore.isVoiceRecordingAllowedForUser(id));
      } else {
        rTCConnection.setClipRecordUser(id, "audio", isClipsEnabled.isClipsEnabled());
        const tmpResult = isClipsEnabled;
      }
    }
  }
  obj = ClipsExperiment;
};
prototype["applyUserSoundboardRecording"] = function applyUserSoundboardRecording(id) {
  if (obj.isClientClipsCapable(MediaEngineStore)) {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null != rTCConnection) {
      rTCConnection.setClipRecordUser(id, "soundboard", isClipsEnabled.isClipsEnabled());
      const tmpResult = isClipsEnabled;
    }
  }
  obj = ClipsExperiment;
};
prototype["applyStreamRecording"] = function applyStreamRecording(userId, rTCConnection) {
  if (obj.isClientClipsCapable(MediaEngineStore)) {
    if (AuthenticationStore.getId() === userId) {
      const isClipsEnabledResult = isClipsEnabled.isClipsEnabled();
      rTCConnection.setClipRecordUser(userId, "audio", isClipsEnabledResult);
      rTCConnection.setClipRecordUser(userId, "video", isClipsEnabledResult);
      const tmpResult = isClipsEnabled;
    }
  }
  obj = ClipsExperiment;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/clips/ClipsManager.tsx");

export default ClipsManager;