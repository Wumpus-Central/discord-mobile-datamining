// discord_app/modules/clips/ClipsManager.tsx
import initialize from "initialize";
import { getSystemAnalyticsInfo } from "getSystemAnalyticsInfo";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import closure_9 from "initialize";
import _migrateDefaultStorage from "_migrateDefaultStorage";
import result from "result";
import ME from "ME";
import { StreamTypes } from "StreamIssueReportReasons";
import "initialize";

let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
let require = arg1;
({ WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: unpackModuleId, WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: closure_12, CLIPS_HARDWARE_CLASSIFICATION_VERSION: map1 } = result);
({ AnalyticEvents: closure_14, RTCConnectionStates: closure_15 } = ME);
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
  let context;
  let streamKey;
  ({ context, streamKey } = state);
  if (obj.areClipsAvailable()) {
    if (state.state === constants2.RTC_CONNECTED) {
      const self = this;
      const id = store.getId();
      if (tmp(4290).MediaEngineContextTypes.DEFAULT === context) {
        const result = self.applyUserVoiceRecording(id);
        const result1 = self.applyUserSoundboardRecording(id);
      } else if (tmp(4290).MediaEngineContextTypes.STREAM === context) {
        if (null != streamKey) {
          if (tmpResult.decodeStreamKey(streamKey).ownerId === id) {
            const rTCConnection = store2.getRTCConnection(streamKey);
            if (null != rTCConnection) {
              self.applyStreamRecording(id, rTCConnection);
            }
          }
          tmpResult = tmp(4257);
        }
      }
    }
  }
};
prototype["handleRTCUsersUpdate"] = function handleRTCUsersUpdate(userIds) {
  const self = this;
  userIds = userIds.userIds;
  if (userIds.context === self(4290).MediaEngineContextTypes.DEFAULT) {
    const item = userIds.forEach((id) => {
      const result = self.applyUserVoiceRecording(id);
      const result1 = self.applyUserSoundboardRecording(id);
    });
  }
};
prototype["handleRTCConnectionFlags"] = function handleRTCConnectionFlags(arg0) {
  let channelId;
  let guildId;
  let userId;
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
  const rTCConnection = store2.getRTCConnection(importAll(4257).encodeStreamKey({ streamType: CALL, ownerId: userId, channelId, guildId }));
  if (null != rTCConnection) {
    self.applyStreamRecording(userId, rTCConnection);
  }
};
prototype["handleClipsInitFailure"] = function handleClipsInitFailure(arg0) {
  let applicationName;
  let errMsg;
  ({ applicationName, errMsg } = arg0);
  let obj = importDefault(698);
  obj = { application_name: applicationName, error_message: errMsg, clip_runtime: null };
  obj[2] = require(4730) /* apexExperiment */.getClipsRuntime("handleClipsInitFailure");
  obj.track(constants.CLIPS_INIT_FAILURE, obj);
};
prototype["maybeShowClipsWarning"] = function maybeShowClipsWarning(userId) {
  const channelId = authStore.getChannelId();
  if (null != channelId) {
    if (!authStore2.getClipsWarningShown(channelId)) {
      let setting = userId !== store.getId() && obj3.isClipsEnabledForUser(userId);
      if (setting) {
        const ClipsAllowVoiceRecording = require(3866) /* explicitContentFromProto */.ClipsAllowVoiceRecording;
        setting = ClipsAllowVoiceRecording.getSetting();
      }
      if (setting) {
        const self = this;
        let obj = importDefault(709);
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
  if (importDefault(4253)(_detectH265HardwareDecode)) {
    const self = this;
    const result = this.applyNativeClipsSettings();
    if (obj.areClipsAvailable()) {
      const clipsFromStorage = self.loadClipsFromStorage();
      let tmp6 = null != authStore2.getHardwareClassification() && null != obj2.getHardwareClassificationForDecoupled();
      if (tmp6) {
        tmp6 = obj2.getHardwareClassificationVersion() === closure_13;
      }
      if (!tmp6) {
        const result1 = self.classifyHardwareAndTrack();
        result1.then((classification) => {
          let obj = callback(table[17]);
          obj = { type: "CLIPS_CLASSIFY_HARDWARE", classification };
          obj.dispatch(obj);
        });
      }
    }
    obj = require(4252) /* apexExperiment */;
  }
};
prototype["loadClipsFromStorage"] = function loadClipsFromStorage() {

};
prototype["handleRTCConnectionVideo"] = function handleRTCConnectionVideo(arg0) {
  let channelId;
  let context;
  let guildId;
  let userId;
  ({ userId, guildId } = arg0);
  ({ context, channelId } = arg0);
  if (context === require(4290) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM) {
    if (importDefault(4253)(_detectH265HardwareDecode)) {
      let obj = importAll(4257);
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp7;
            closure_0 = undefined;
            gpuModels = undefined;
            let classification;
            let dependencyMap = 1;
            v0 = 2;
            c5 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = v0(function*() {
              if (table === 2) {
                table = 3;
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
                  table = 2;
                  if (0 === closure_2) {
                    if (arg0 === 1) {
                      table = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      table = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      let closure_1 = tmp5;
                      let closure_0 = tmp2;
                      closure_0 = undefined;
                      closure_1 = undefined;
                      closure_2 = undefined;
                      closure_2 = 1;
                      table = 1;
                      const obj1 = { value: null, done: false };
                      obj1[0] = callback();
                      return obj1;
                    }
                  } else if (1 === tmp5) {
                    if (arg0 === 1) {
                      table = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      table = 3;
                      const obj2 = { value: null, done: true };
                      obj2[0] = arg1;
                      return obj2;
                    } else {
                      closure_0 = arg1;
                      let gpus;
                      if (closure_0 != null) {
                        gpus = closure_0.gpus;
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
                        obj3[1] = outer1_0.classifyHardware(closure_1);
                        table = 3;
                        const obj4 = { value: null, done: true };
                        obj4[0] = obj3;
                        return obj4;
                      } else {
                        const processUtils = gpuModels(table[19]).processUtils;
                        closure_2 = 2;
                        table = 1;
                        const obj5 = { value: null, done: false };
                        obj5[0] = processUtils.getSystemInfo();
                        return obj5;
                      }
                    }
                  } else if (arg0 === 1) {
                    table = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    table = 3;
                    const obj6 = { value: null, done: true };
                    obj6[0] = arg1;
                    return obj6;
                  } else {
                    const gpus2 = arg1.gpus;
                    closure_2 = gpus2.map((model) => model.model);
                    obj = { gpuModels: null, classification: null };
                    obj[0] = closure_2;
                    obj[1] = outer1_0.classifyHardware(closure_2);
                    table = 3;
                    const obj7 = { value: null, done: true };
                    obj7[0] = obj;
                    return obj7;
                  }
                } catch (tmp22) {
                  table = tmp;
                  throw tmp22;
                }
              }
            })();
            return obj1;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          c5 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = outer1_0(4250).ClipsHardwareClassification.UNKNOWN;
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
          let obj4 = { classification: null, version: null, gpu_models: null, clip_runtime: null };
          obj4[0] = classification;
          obj4[1] = outer1_13;
          obj4[2] = gpuModels;
          let obj7 = outer1_1(698);
          obj4[3] = outer1_0(4730).getClipsRuntime("classifyHardwareAndTrack");
          obj7.track(outer1_14.CLIPS_HARDWARE_CLASSIFICATION, obj4);
          dependencyMap = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = classification;
          return obj;
        }
      } catch (tmp13) {
        classification = tmp13;
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp13;
        } else {
          v0 = tmp;
        }
      }
    }
  })();
};
prototype["classifyHardware"] = function classifyHardware(closure_1) {
  if (obj.isWindows()) {
    const someResult = closure_1.some((arg0) => regex.test(arg0));
    const ClipsHardwareClassification = tmp(4250).ClipsHardwareClassification;
    if (someResult) {
      let MEETS_AUTO_ENABLE = ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    } else {
      MEETS_AUTO_ENABLE = someResult1 ? ClipsHardwareClassification.MEETS_MINIMUM : ClipsHardwareClassification.BELOW_MINIMUM;
    }
    return MEETS_AUTO_ENABLE;
  } else {
    if (tmpResult.isMac()) {
      const app = importDefault(3804).app;
      if ("arm64" === app.getAppArch()) {
        let MEETS_MINIMUM = tmp(4250).ClipsHardwareClassification.MEETS_AUTO_ENABLE;
      } else {
        MEETS_MINIMUM = tmp(4250).ClipsHardwareClassification.MEETS_MINIMUM;
      }
    } else {
      return tmp(4250).ClipsHardwareClassification.UNKNOWN;
    }
    tmpResult = tmp(500);
  }
};
prototype["applyUserVoiceRecording"] = function applyUserVoiceRecording(id) {
  if (importDefault(4253)(_detectH265HardwareDecode)) {
    const rTCConnection = authStore.getRTCConnection();
    if (null != rTCConnection) {
      if (id !== store.getId()) {
        rTCConnection.setClipRecordUser(id, "audio", authStore2.isVoiceRecordingAllowedForUser(id));
      } else {
        rTCConnection.setClipRecordUser(id, "audio", require(4251) /* isClipsEnabled */.isClipsEnabled());
        const obj2 = require(4251) /* isClipsEnabled */;
      }
    }
  }
};
prototype["applyUserSoundboardRecording"] = function applyUserSoundboardRecording(id) {
  if (importDefault(4253)(_detectH265HardwareDecode)) {
    const rTCConnection = authStore.getRTCConnection();
    if (null != rTCConnection) {
      rTCConnection.setClipRecordUser(id, "soundboard", require(4251) /* isClipsEnabled */.isClipsEnabled());
      const obj2 = require(4251) /* isClipsEnabled */;
    }
  }
};
prototype["applyStreamRecording"] = function applyStreamRecording(userId, rTCConnection) {
  if (importDefault(4253)(_detectH265HardwareDecode)) {
    if (store.getId() === userId) {
      const isClipsEnabledResult = require(4251) /* isClipsEnabled */.isClipsEnabled();
      rTCConnection.setClipRecordUser(userId, "audio", isClipsEnabledResult);
      rTCConnection.setClipRecordUser(userId, "video", isClipsEnabledResult);
      const obj = require(4251) /* isClipsEnabled */;
    }
  }
};
result = require("fetchFingerprint").fileFinishedImporting("modules/clips/ClipsManager.tsx");

export default ClipsManager;