// discord_app/modules/clips/ClipsManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import Constants2 from "../go_live/Constants.tsx";
import SystemAnalyticsStore from "../system_analytics/SystemAnalyticsStore.native.tsx";
import StreamKeyUtils from "../go_live/utils/StreamKeyUtils.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import isClipsEnabled from "isClipsEnabled.tsx";
import ClipsExperiment from "ClipsExperiment.tsx";
import isClientClipsCapableDefault from "isClientClipsCapable.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";
import ClipsStore from "ClipsStore.tsx";
import ClipsConstants from "ClipsConstants.tsx";
import Constants from "../../Constants.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const StreamKeyUtilsAll = StreamKeyUtils;
let _self, c5;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
const getSystemAnalyticsInfo = SystemAnalyticsStore.getSystemAnalyticsInfo;
({
  WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: closure_12,
  WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: map1,
  CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_14,
  ClipsHardwareClassification: closure_15,
  CLIP_RUNTIME: closure_16,
} = ClipsConstants);
({ AnalyticEvents: closure_17, RTCConnectionStates: closure_18 } = Constants);
const StreamTypes = Constants2.StreamTypes;
class ClipsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
      },
    };
    return applyArgumentsResult;
  }
  handleRTCConnectionState(state) {
    let context;
    let streamKey;
    ({ context, streamKey } = state);
    state = state.state;
    const obj = ClipsExperiment;
    if (obj.areClipsAvailable()) {
      if (state === constants3.RTC_CONNECTED) {
        const self = this;
        const id = AuthenticationStore.getId();
        if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === context) {
          const result = self.applyUserVoiceRecording(id);
          const result1 = self.applyUserSoundboardRecording(id);
        } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === context) {
          if (null != streamKey) {
            const tmpResult = StreamKeyUtils;
            if (tmpResult.decodeStreamKey(streamKey).ownerId === id) {
              const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
              if (null != rTCConnection) {
                self.applyStreamRecording(id, rTCConnection);
              }
            }
          }
        }
      }
    }
  }
  handleRTCUsersUpdate(userIds) {
    const self = this;
    userIds = userIds.userIds;
    if (userIds.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT) {
      const item = userIds.forEach((item) => {
        const result = self.applyUserVoiceRecording(item);
        const result1 = self.applyUserSoundboardRecording(item);
      });
    }
  }
  handleRTCConnectionFlags(arg0) {
    let CALL;
    let channelId;
    let guildId;
    let userId;
    const self = this;
    ({ userId, guildId, channelId } = arg0);
    const result = this.maybeShowClipsWarning(userId);
    const result1 = this.applyUserVoiceRecording(userId);
    const result2 = this.applyUserSoundboardRecording(userId);
    const getRTCConnection = StreamRTCConnectionStore.getRTCConnection;
    const encodeStreamKey = StreamKeyUtilsAll.encodeStreamKey;
    StreamKeyUtilsAll;
    if (null != guildId) {
      CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const rTCConnection = getRTCConnection(encodeStreamKey({ streamType: CALL, ownerId: userId, channelId, guildId }));
    if (null != rTCConnection) {
      self.applyStreamRecording(userId, rTCConnection);
    }
  }
  handleClipsInitFailure(arg0) {
    let applicationName;
    let errMsg;
    ({ applicationName, errMsg } = arg0);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { application_name: applicationName, error_message: errMsg, clip_runtime };
    obj.track(constants2.CLIPS_INIT_FAILURE, obj2);
  }
  maybeShowClipsWarning(userId) {
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
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
          this.showClipsToast();
        }
      }
    }
  }
  handleClipsAllowVoiceRecordingUpdate() {
    const self = this;
    const userIds = RTCConnectionStore.getUserIds();
    if (userIds != null) {
      const item = userIds.forEach((item) => self.maybeShowClipsWarning(item));
    }
  }
  handlePostConnectionOpen() {
    if (isClientClipsCapableDefault(MediaEngineStore)) {
      const self = this;
      const result = this.applyNativeClipsSettings();
      let obj = ClipsExperiment;
      if (obj.areClipsAvailable()) {
        const clipsFromStorage = self.loadClipsFromStorage();
        self.maybeStartNtpClock();
        const tmp7 =
          null != ClipsStore.getHardwareClassification() &&
          null != ClipsStore.getHardwareClassificationForDecoupled() &&
          ClipsStore.getHardwareClassificationVersion() === authStore2;
        if (!tmp7) {
          const result1 = self.classifyHardwareAndTrack();
          result1.then((classification) => {
            const obj = DispatcherDefault;
            const obj2 = { type: "CLIPS_CLASSIFY_HARDWARE", classification };
            obj.dispatch(obj2);
          });
        }
      }
    }
  }
  loadClipsFromStorage() {}
  handleRTCConnectionVideo(arg0) {
    let channelId;
    let context;
    let guildId;
    let userId;
    ({ userId, guildId } = arg0);
    ({ context, channelId } = arg0);
    if (context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
      if (isClientClipsCapableDefault(MediaEngineStore)) {
        let CALL;
        const getRTCConnection = StreamRTCConnectionStore.getRTCConnection;
        const encodeStreamKey = StreamKeyUtilsAll.encodeStreamKey;
        StreamKeyUtilsAll;
        if (null != guildId) {
          CALL = StreamTypes.GUILD;
        } else {
          CALL = StreamTypes.CALL;
        }
        const obj = { streamType: CALL, ownerId: userId, channelId, guildId };
        const rTCConnection = getRTCConnection(encodeStreamKey(obj));
        if (null != rTCConnection) {
          const self = this;
          this.applyStreamRecording(userId, rTCConnection);
        }
      }
    }
  }
  classifyHardwareAndTrack() {
    const self = this;
    return (async () => {
      let closure_0;
      let closure_1;
      let tmp;
      let v1;
      if (c5 === 2) {
        c5 = 3;
        const str = "Generator functions may not be called on executing generators";
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
        let c3;
        try {
          let gpuModels;
          let classification;
          c5 = 2;
          const tmp4 = v1;
          if (0 === v1) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _self = undefined;
              gpuModels = undefined;
              classification = undefined;
              c3 = 1;
              v1 = 2;
              c5 = 1;
              const obj4 = {
                value: v1(function* () {
                  let gpus;
                  let gpuModels = tmp4;
                  yield closure_2_5();
                  const tmp = value;
                  if (tmp != null) {
                    gpus = tmp.gpus;
                  }
                  if (null != gpus) {
                    const gpus1 = tmp.gpus;
                    const mapped = gpus1.map((brand) => brand.brand);
                    gpuModels = mapped.filter((item) => null != item && "" !== item);
                    const obj6 = { gpuModels, classification: tmp.classifyHardware(gpuModels) };
                    return obj6;
                  }
                  const processUtils = closure_2_1(closure_2_3[19]).processUtils;
                  yield processUtils.getSystemInfo();
                  const gpus2 = value.gpus;
                  const gpuModels2 = gpus2.map((model) => model.model);
                  const obj = { gpuModels: gpuModels2, classification: tmp.classifyHardware(gpuModels2) };
                  return obj;
                })(),
                done: false,
              };
              return obj4;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value: constants.UNKNOWN, done: true };
            return obj5;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            _self = value;
            gpuModels = _self.gpuModels;
            classification = _self.classification;
            const obj7 = tmp(c3[15]);
            const obj8 = { classification, version, gpu_models: gpuModels, clip_runtime };
            obj7.track(constants2.CLIPS_HARDWARE_CLASSIFICATION, obj8);
            c3 = 0;
            c5 = 3;
            let obj = { value: classification, done: true };
            return obj;
          }
        } catch (tmp9) {
          let closure_2 = tmp9;
          if (0 === c3) {
            c5 = 3;
            throw tmp9;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  }
  classifyHardware(arr) {
    let regex;
    let regex2;
    const obj = PlatformUtils;
    if (obj.isWindows()) {
      let MEETS_AUTO_ENABLE;
      const someResult = arr.some((item) => regex.test(item));
      if (someResult) {
        MEETS_AUTO_ENABLE = constants.MEETS_AUTO_ENABLE;
      } else {
        MEETS_AUTO_ENABLE = tmp9 ? constants.MEETS_MINIMUM : constants.BELOW_MINIMUM;
      }
      return MEETS_AUTO_ENABLE;
    } else {
      let UNKNOWN;
      const tmpResult = PlatformUtils;
      if (tmpResult.isMac()) {
        let MEETS_MINIMUM;
        const app = DiscordNativeDefault.app;
        if ("arm64" === app.getAppArch()) {
          MEETS_MINIMUM = constants.MEETS_AUTO_ENABLE;
        } else {
          MEETS_MINIMUM = constants.MEETS_MINIMUM;
        }
        UNKNOWN = MEETS_MINIMUM;
      } else {
        UNKNOWN = constants.UNKNOWN;
      }
      return UNKNOWN;
    }
  }
  applyUserVoiceRecording(id) {
    if (isClientClipsCapableDefault(MediaEngineStore)) {
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
          const setClipRecordUser = rTCConnection.setClipRecordUser;
          const obj3 = isClipsEnabled;
          setClipRecordUser(id, "audio", obj3.isClipsEnabled());
        }
      }
    }
  }
  applyUserSoundboardRecording(id) {
    if (isClientClipsCapableDefault(MediaEngineStore)) {
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      if (null != rTCConnection) {
        const setClipRecordUser = rTCConnection.setClipRecordUser;
        const obj = isClipsEnabled;
        setClipRecordUser(id, "soundboard", obj.isClipsEnabled());
      }
    }
  }
  applyStreamRecording(userId, rTCConnection) {
    if (isClientClipsCapableDefault(MediaEngineStore)) {
      if (AuthenticationStore.getId() === userId) {
        const obj = isClipsEnabled;
        const isClipsEnabledResult = obj.isClipsEnabled();
        rTCConnection.setClipRecordUser(userId, "audio", isClipsEnabledResult);
        rTCConnection.setClipRecordUser(userId, "video", isClipsEnabledResult);
      }
    }
  }
}
const prototype = ClipsManager.prototype;
let result = size.fileFinishedImporting("modules/clips/ClipsManager.tsx");

export default ClipsManager;
