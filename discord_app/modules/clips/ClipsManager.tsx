// === Module 17803: clips/ClipsManager ===

// Module 17803 (clips/ClipsManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import DiscordNativeDefault from "DiscordNative" /* 4182 */;
import StreamKeyUtilsAll from "StreamKeyUtils" /* 4612 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import isClipsEnabled from "isClipsEnabled" /* 13674 */;
import ClipsExperiment from "ClipsExperiment" /* 13675 */;
import isClientClipsCapableDefault from "isClientClipsCapable" /* 13676 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;
import ClipsStore from "ClipsStore" /* 1914 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const getSystemAnalyticsInfo = fn(4605).getSystemAnalyticsInfo;
const ClipsConstants = fn(5132);
({ WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: closure_11, WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: closure_12, CLIPS_HARDWARE_CLASSIFICATION_VERSION: map1, ClipsHardwareClassification: closure_14, CLIP_RUNTIME: closure_15 } = ClipsConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_16, RTCConnectionStates: closure_17 } = Constants);
const StreamTypes = fn(4602).StreamTypes;
class ClipsManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
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
            return applyArgumentsResult.applyNativeClipsSettings();
          },
      STREAM_DELETE(arg0) {
            return applyArgumentsResult.handleStreamEnded(arg0);
          },
      STREAM_CLOSE(arg0) {
            return applyArgumentsResult.handleStreamEnded(arg0);
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
      if (tmp(4615).MediaEngineContextTypes.DEFAULT === context) {
        const result = self.applyUserVoiceRecording(id);
        const result1 = self.applyUserSoundboardRecording(id);
      } else if (tmp(4615).MediaEngineContextTypes.STREAM === context) {
        if (null != streamKey) {
          if (tmpResult.decodeStreamKey(streamKey).ownerId === id) {
            const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
            if (null != rTCConnection) {
              self.applyStreamRecording(id, rTCConnection);
            }
          }
          tmpResult = tmp(4612);
        }
      }
    }
  }
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
  const obj = { application_name: applicationName, error_message: errMsg, clip_runtime };
  obj.track(constants2.CLIPS_INIT_FAILURE, obj);
};
prototype["maybeShowClipsWarning"] = function maybeShowClipsWarning(userId) {
  const channelId = RTCConnectionStore.getChannelId();
  if (null != channelId) {
    if (!ClipsStore.getClipsWarningShown(channelId)) {
      let setting = userId !== AuthenticationStore.getId() && obj3.isClipsEnabledForUser(userId);
      if (setting) {
        const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
        setting = ClipsAllowVoiceRecording.getSetting();
      }
      if (setting) {
        const self = this;
        const obj = { type: "CLIPS_SHOW_CALL_WARNING", channelId };
        obj.dispatch(obj);
        this.showClipsToast();
      }
    }
    obj3 = ClipsStore;
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
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const self = this;
    const result = this.applyNativeClipsSettings();
    if (obj.areClipsAvailable()) {
      const clipsFromStorage = self.loadClipsFromStorage();
      self.maybeStartNtpClock();
      let tmp7 = null != ClipsStore.getHardwareClassification() && null != obj2.getHardwareClassificationForDecoupled();
      if (tmp7) {
        tmp7 = obj2.getHardwareClassificationVersion() === map1;
      }
      if (!tmp7) {
        const result1 = self.classifyHardwareAndTrack();
        result1.then((classification) => {
          const obj = { type: "CLIPS_CLASSIFY_HARDWARE", classification };
          obj.dispatch(obj);
        });
      }
    }
    obj = ClipsExperiment;
  }
};
prototype["loadClipsFromStorage"] = function loadClipsFromStorage() {

};
prototype["handleRTCConnectionVideo"] = function handleRTCConnectionVideo(arg0) {
  ({ userId, guildId } = arg0);
  ({ context, channelId } = arg0);
  if (context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    if (isClientClipsCapableDefault(MediaEngineStore)) {
      let obj = StreamKeyUtilsAll;
      if (null != guildId) {
        let CALL = StreamTypes.GUILD;
      } else {
        CALL = StreamTypes.CALL;
      }
      obj = { streamType: CALL, ownerId: userId, channelId, guildId };
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(obj.encodeStreamKey(obj));
      if (null != rTCConnection) {
        const self = this;
        this.applyStreamRecording(userId, rTCConnection);
      }
    }
  }
};
prototype["classifyHardwareAndTrack"] = function classifyHardwareAndTrack() {
  const self = this;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp7;
            closure_128_0 = undefined;
            let gpuModels;
            let classification;
            c3 = 1;
            v2 = 2;
            c5 = 1;
            const obj1 = {
              value: v2(async () => {
                        closure_128_0 = await closure_2_5();
                        if (closure_128_0 != null) {
                          const gpus = closure_128_0.gpus;
                        }
                        if (null != gpus) {
                          const gpus1 = closure_128_0.gpus;
                          const mapped = gpus1.map((brand) => brand.brand);
                          closure_128_1 = mapped.filter((item) => {
                            let tmp = null != item;
                            if (tmp) {
                              tmp = "" !== item;
                            }
                            return tmp;
                          });
                          return { gpuModels: closure_128_1, classification: tmp2.classifyHardware(closure_128_1) };
                        }
                        const processUtils = tmp3(closure_2_3[18]).processUtils;
                        await processUtils.getSystemInfo();
                        const gpus2 = arg1.gpus;
                        closure_128_2 = gpus2.map((model) => model.model);
                        return { gpuModels: closure_128_2, classification: tmp2.classifyHardware(closure_128_2) };
                      })(),
              done: false
            };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c5 = 3;
          const obj2 = { value: constants.UNKNOWN, done: true };
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_128_0 = value;
          gpuModels = closure_128_0.gpuModels;
          classification = closure_128_0.classification;
          const obj4 = { classification, version, gpu_models: gpuModels, clip_runtime };
          tmp3(c3[14]).track(constants2.CLIPS_HARDWARE_CLASSIFICATION, obj4);
          c3 = 0;
          c5 = 3;
          obj = { value: classification, done: true };
          return obj;
        }
      } catch (tmp12) {
        closure_2 = tmp12;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp12;
        } else {
          v2 = tmp;
        }
      }
    }
  })();
};
prototype["classifyHardware"] = function classifyHardware(arr) {
  if (obj.isWindows()) {
    if (someResult) {
      let MEETS_AUTO_ENABLE = tmp11.MEETS_AUTO_ENABLE;
    } else {
      MEETS_AUTO_ENABLE = tmp10 ? tmp11.MEETS_MINIMUM : tmp11.BELOW_MINIMUM;
    }
    return MEETS_AUTO_ENABLE;
  } else {
    if (tmpResult.isMac()) {
      const app = DiscordNativeDefault.app;
      if ("arm64" === app.getAppArch()) {
        let MEETS_MINIMUM = constants.MEETS_AUTO_ENABLE;
      } else {
        MEETS_MINIMUM = constants.MEETS_MINIMUM;
      }
    } else {
      return constants.UNKNOWN;
    }
    tmpResult = PlatformUtils;
  }
};
prototype["applyUserVoiceRecording"] = function applyUserVoiceRecording(id) {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null != rTCConnection) {
      if (id !== AuthenticationStore.getId()) {
        rTCConnection.setClipRecordUser(id, "audio", ClipsStore.isVoiceRecordingAllowedForUser(id));
      } else {
        rTCConnection.setClipRecordUser(id, "audio", isClipsEnabled.isClipsEnabled());
      }
    }
  }
};
prototype["applyUserSoundboardRecording"] = function applyUserSoundboardRecording(id) {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null != rTCConnection) {
      rTCConnection.setClipRecordUser(id, "soundboard", isClipsEnabled.isClipsEnabled());
    }
  }
};
prototype["applyStreamRecording"] = function applyStreamRecording(userId, rTCConnection) {
  if (isClientClipsCapableDefault(MediaEngineStore)) {
    if (AuthenticationStore.getId() === userId) {
      const isClipsEnabledResult = isClipsEnabled.isClipsEnabled();
      rTCConnection.setClipRecordUser(userId, "audio", isClipsEnabledResult);
      rTCConnection.setClipRecordUser(userId, "video", isClipsEnabledResult);
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/clips/ClipsManager.tsx");

export default ClipsManager;