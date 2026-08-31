// discord_app/modules/clips/ClipsManager.tsx
import set from "../../utils/PlatformUtils.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import setDefault from "../../lib/DiscordNative.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import isClipsEnabled from "isClipsEnabled.tsx";
import apexExperiment from "ClipsExperiment.tsx";
import isClientClipsCapableDefault from "isClientClipsCapable.tsx";
import isStreamKeyAll from "../go_live/utils/StreamKeyUtils.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import apexExperiment2 from "ClipsV3RuntimeExperiment.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { getSystemAnalyticsInfo } from "../system_analytics/SystemAnalyticsStore.native.tsx";
import closure_6 from "../../stores/AuthenticationStore.tsx";
import closure_7 from "../../stores/MediaEngineStore.tsx";
import closure_8 from "../../stores/RTCConnectionStore.tsx";
import closure_9 from "../../stores/StreamRTCConnectionStore.tsx";
import closure_10 from "ClipsStore.tsx";
import result from "ClipsConstants.tsx";
import ME from "../../Constants.tsx";
import { StreamTypes } from "../go_live/Constants.tsx";

require = arg1;
({ WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: unpackModuleId, WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: closure_12, CLIPS_HARDWARE_CLASSIFICATION_VERSION: map1, ClipsHardwareClassification: closure_14 } = result);
({ AnalyticEvents: closure_15, RTCConnectionStates: closure_16 } = ME);
initializeDefault;
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
      const id = store.getId();
      if (tmp(4547).MediaEngineContextTypes.DEFAULT === context) {
        const result = self.applyUserVoiceRecording(id);
        const result1 = self.applyUserSoundboardRecording(id);
      } else if (tmp(4547).MediaEngineContextTypes.STREAM === context) {
        if (null != streamKey) {
          if (tmpResult.decodeStreamKey(streamKey).ownerId === id) {
            const rTCConnection = store2.getRTCConnection(streamKey);
            if (null != rTCConnection) {
              self.applyStreamRecording(id, rTCConnection);
            }
          }
          tmpResult = tmp(4514);
        }
      }
    }
  }
};
prototype["handleRTCUsersUpdate"] = function handleRTCUsersUpdate(userIds) {
  const self = this;
  userIds = userIds.userIds;
  if (userIds.context === self(4547).MediaEngineContextTypes.DEFAULT) {
    const item = userIds.forEach((id) => {
      const result = self.applyUserVoiceRecording(id);
      const result1 = self.applyUserSoundboardRecording(id);
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
  const rTCConnection = store2.getRTCConnection(isStreamKeyAll.encodeStreamKey({ streamType: CALL, ownerId: userId, channelId, guildId }));
  if (null != rTCConnection) {
    self.applyStreamRecording(userId, rTCConnection);
  }
};
prototype["handleClipsInitFailure"] = function handleClipsInitFailure(arg0) {
  ({ applicationName, errMsg } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { application_name: applicationName, error_message: errMsg, clip_runtime: apexExperiment2.getClipsRuntime("handleClipsInitFailure") };
  obj.track(constants2.CLIPS_INIT_FAILURE, obj);
};
prototype["maybeShowClipsWarning"] = function maybeShowClipsWarning(userId) {
  const channelId = authStore.getChannelId();
  if (null != channelId) {
    if (!authStore2.getClipsWarningShown(channelId)) {
      let setting = userId !== store.getId() && obj3.isClipsEnabledForUser(userId);
      if (setting) {
        const ClipsAllowVoiceRecording = explicitContentFromProto.ClipsAllowVoiceRecording;
        setting = ClipsAllowVoiceRecording.getSetting();
      }
      if (setting) {
        const self = this;
        let obj = dispatcherDefault;
        obj = { type: "CLIPS_SHOW_CALL_WARNING", channelId: null };
        obj[1] = channelId;
        obj.dispatch(obj);
        this.showClipsToast();
      }
    }
    obj3 = authStore2;
  }
};
prototype["handleClipsAllowVoiceRecordingUpdate"] = function handleClipsAllowVoiceRecordingUpdate() {
  const self = this;
  const userIds = authStore.getUserIds();
  if (userIds != null) {
    const item = userIds.forEach((userId) => self.maybeShowClipsWarning(userId));
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  if (isClientClipsCapableDefault(closure_7)) {
    const self = this;
    const result = this.applyNativeClipsSettings();
    if (obj.areClipsAvailable()) {
      const clipsFromStorage = self.loadClipsFromStorage();
      self.maybeStartNtpClock();
      let tmp7 = null != authStore2.getHardwareClassification() && null != obj2.getHardwareClassificationForDecoupled();
      if (tmp7) {
        tmp7 = obj2.getHardwareClassificationVersion() === closure_13;
      }
      if (!tmp7) {
        const result1 = self.classifyHardwareAndTrack();
        result1.then((classification) => {
          let obj = callback(table[17]);
          obj = { type: "CLIPS_CLASSIFY_HARDWARE", classification };
          obj.dispatch(obj);
        });
      }
    }
    obj = apexExperiment;
  }
};
prototype["loadClipsFromStorage"] = function loadClipsFromStorage() {

};
prototype["handleRTCConnectionVideo"] = function handleRTCConnectionVideo(arg0) {
  ({ userId, guildId } = arg0);
  ({ context, channelId } = arg0);
  if (context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    if (isClientClipsCapableDefault(closure_7)) {
      let obj = isStreamKeyAll;
      if (null != guildId) {
        let CALL = StreamTypes.GUILD;
      } else {
        CALL = StreamTypes.CALL;
      }
      obj = { streamType: null, ownerId: null, channelId: null, guildId: null };
      obj[0] = CALL;
      obj[1] = userId;
      obj[2] = channelId;
      obj[3] = guildId;
      const rTCConnection = store2.getRTCConnection(obj.encodeStreamKey(obj));
      if (null != rTCConnection) {
        const self = this;
        this.applyStreamRecording(userId, rTCConnection);
      }
    }
  }
};
prototype["classifyHardwareAndTrack"] = function classifyHardwareAndTrack() {
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let gpuModels = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            gpuModels = undefined;
            let classification;
            dependencyMap = 1;
            v0 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = v0(function*() {
              closure_0 = tmp2;
              closure_0 = yield callback();
              if (closure_0 != null) {
                const gpus = closure_0.gpus;
              }
              if (null != gpus) {
                const gpus1 = closure_0.gpus;
                const mapped = gpus1.map((brand) => brand.brand);
                closure_1 = mapped.filter((arg0) => {
                  let tmp = null != arg0;
                  if (tmp) {
                    tmp = "" !== arg0;
                  }
                  return tmp;
                });
                const obj3 = { gpuModels: null, classification: null };
                obj3[0] = closure_1;
                obj3[1] = closure_1_0.classifyHardware(closure_1);
                return obj3;
              }
              const processUtils = gpuModels(table[19]).processUtils;
              yield processUtils.getSystemInfo();
              const gpus2 = arg1.gpus;
              const obj = { gpuModels: null, classification: null };
              obj[0] = closure_2;
              obj[1] = closure_1_0.classifyHardware(closure_2);
              return obj;
            })();
            return obj1;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = closure_1_14.UNKNOWN;
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c5 = 3;
          let obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          gpuModels = closure_0.gpuModels;
          classification = closure_0.classification;
          const obj4 = { classification: null, version: null, gpu_models: null, clip_runtime: null };
          obj4[0] = classification;
          obj4[1] = closure_1_13;
          obj4[2] = gpuModels;
          const obj7 = closure_1_1(698);
          obj4[3] = closure_1_0(5045).getClipsRuntime("classifyHardwareAndTrack");
          obj7.track(closure_1_15.CLIPS_HARDWARE_CLASSIFICATION, obj4);
          dependencyMap = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = classification;
          return obj;
        }
      } catch (tmp12) {
        classification = tmp12;
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp12;
        } else {
          v0 = tmp;
        }
      }
    }
  })();
};
prototype["classifyHardware"] = function classifyHardware(closure_1) {
  if (obj.isWindows()) {
    if (someResult) {
      let MEETS_AUTO_ENABLE = tmp11.MEETS_AUTO_ENABLE;
    } else {
      MEETS_AUTO_ENABLE = tmp10 ? tmp11.MEETS_MINIMUM : tmp11.BELOW_MINIMUM;
    }
    return MEETS_AUTO_ENABLE;
  } else {
    if (tmpResult.isMac()) {
      const app = setDefault.app;
      if ("arm64" === app.getAppArch()) {
        let MEETS_MINIMUM = constants.MEETS_AUTO_ENABLE;
      } else {
        MEETS_MINIMUM = constants.MEETS_MINIMUM;
      }
    } else {
      return constants.UNKNOWN;
    }
    tmpResult = set;
  }
};
prototype["applyUserVoiceRecording"] = function applyUserVoiceRecording(id) {
  if (isClientClipsCapableDefault(closure_7)) {
    const rTCConnection = authStore.getRTCConnection();
    if (null != rTCConnection) {
      if (id !== store.getId()) {
        rTCConnection.setClipRecordUser(id, "audio", authStore2.isVoiceRecordingAllowedForUser(id));
      } else {
        rTCConnection.setClipRecordUser(id, "audio", isClipsEnabled.isClipsEnabled());
        const obj2 = isClipsEnabled;
      }
    }
  }
};
prototype["applyUserSoundboardRecording"] = function applyUserSoundboardRecording(id) {
  if (isClientClipsCapableDefault(closure_7)) {
    const rTCConnection = authStore.getRTCConnection();
    if (null != rTCConnection) {
      rTCConnection.setClipRecordUser(id, "soundboard", isClipsEnabled.isClipsEnabled());
      const obj2 = isClipsEnabled;
    }
  }
};
prototype["applyStreamRecording"] = function applyStreamRecording(userId, rTCConnection) {
  if (isClientClipsCapableDefault(closure_7)) {
    if (store.getId() === userId) {
      const isClipsEnabledResult = isClipsEnabled.isClipsEnabled();
      rTCConnection.setClipRecordUser(userId, "audio", isClipsEnabledResult);
      rTCConnection.setClipRecordUser(userId, "video", isClipsEnabledResult);
      const obj = isClipsEnabled;
    }
  }
};
result = require("set").fileFinishedImporting("modules/clips/ClipsManager.tsx");

export default ClipsManager;