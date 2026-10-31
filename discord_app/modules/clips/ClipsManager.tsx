// discord_app/modules/clips/ClipsManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import StreamKeyUtils from "../go_live/utils/StreamKeyUtils.tsx";
import isClipsEnabled from "isClipsEnabled.tsx";
import ClipsExperiment from "ClipsExperiment.tsx";
import AutoclipsExperimentDefault from "AutoclipsExperiment.tsx";
import ClipsDefaultOnGeoExperimentDefault from "ClipsDefaultOnGeoExperiment.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ClipsStore from "ClipsStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

const StreamKeyUtilsAll = StreamKeyUtils;

require = fn;
const getSystemAnalyticsInfo = fn(5783).getSystemAnalyticsInfo;
const ClipsConstants = fn(8214);
({
  WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: closure_14,
  WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: closure_15,
  CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_16,
  CLIPS_DEFAULT_SETTINGS_VERSION: closure_17,
  ClipsHardwareClassification: closure_18,
  CLIP_RUNTIME: closure_19,
} = ClipsConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_20, RTCConnectionStates: closure_21 } = Constants);
const StreamTypes = fn(6715).StreamTypes;
const Features = fn(5768).Features;
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
      },
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
  const rTCConnection = StreamRTCConnectionStore.getRTCConnection(
    StreamKeyUtilsAll.encodeStreamKey({ streamType: CALL, ownerId: userId, channelId, guildId }),
  );
  if (null != rTCConnection) {
    self.applyStreamRecording(userId, rTCConnection);
  }
};
prototype["handleClipsInitFailure"] = function handleClipsInitFailure(arg0) {
  ({ applicationName, errMsg } = arg0);
  AnalyticsUtilsDefault.track(constants2.CLIPS_INIT_FAILURE, {
    application_name: applicationName,
    error_message: errMsg,
    clip_runtime,
  });
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
  const self = this;
  if (obj.isClientClipsCapable(MediaEngineStore)) {
    let result = self.applyNativeClipsSettings();
    if (tmpResult.areClipsAvailable()) {
      const clipsFromStorage = self.loadClipsFromStorage();
      self.maybeStartNtpClock();
      const hardwareClassification = ClipsStore.getHardwareClassification();
      if (null != hardwareClassification) {
        if (null != ClipsStore.getHardwareClassificationForDecoupled()) {
          if (ClipsStore.getHardwareClassificationVersion() === __initData2) {
            const clipsDefaultSettingsDecision = self.getClipsDefaultSettingsDecision(hardwareClassification);
            if (null != clipsDefaultSettingsDecision) {
              const result1 = self.applyClipsDefaultSettings(hardwareClassification, clipsDefaultSettingsDecision);
            }
          }
        }
      }
      const result2 = self.classifyHardwareAndTrack();
      result2.then((result) => {
        result = self.applyClipsDefaultSettings(result, self.getClipsDefaultSettingsDecision(result));
      });
    }
    tmpResult = ClipsExperiment;
  }
  obj = ClipsExperiment;
};
prototype["applyClipsDefaultSettings"] = function applyClipsDefaultSettings(
  hardwareClassification,
  clipsDefaultSettingsDecision,
) {
  closure_0 = hardwareClassification;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const classification = tmp3;
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
            const ClipsAllowVoiceRecording = classification(4839).ClipsAllowVoiceRecording;
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
            const obj8 = {
              hardware_classification: closure_129_0,
              was_hardware_classified: closure_128_3,
              nsfw_allowed: closure_129_1.nsfwAllowed,
              geo_allowed: closure_129_1.geoAllowed,
              default_clips_enabled: closure_129_1.clipsEnabled,
              version,
              previous_clips_enabled: clipsEnabled,
              previous_clips_enabled_source: clipsEnabledSource,
              actual_clips_enabled: ClipsStore.getState().clipsSettings.clipsEnabled,
              clips_enabled_source: ClipsStore.getClipsDefaultSettingsState().clipsEnabledSource,
              default_autoclipping_enabled: closure_129_1.enableAutoclipping,
              previous_autoclipping_enabled: enableAutoclipping,
              actual_autoclipping_enabled: ClipsStore.getEnableAutoclipping(),
              default_allow_voice_recording: closure_129_1.allowVoiceRecording,
              previous_allow_voice_recording: setting,
              actual_allow_voice_recording: null,
              clip_runtime: null,
            };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const ClipsAllowVoiceRecording = tmp4(4839).ClipsAllowVoiceRecording;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  })();
};
prototype["getClipsDefaultSettingsDecision"] = function getClipsDefaultSettingsDecision(hardwareClassification) {
  if (ClipsStore.getClipsDefaultSettingsState().version >= closure_1_17) {
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
        let tmp6 = tmp5;
        if (true === nsfwAllowed) {
          tmp6 = hardwareClassification === constants.MEETS_AUTO_ENABLE;
        }
        let allowDefaultOn = null;
        if (true === nsfwAllowed) {
          allowDefaultOn = ClipsDefaultOnGeoExperimentDefault.getConfig({
            location: "getClipsDefaultSettingsDecision",
          }).allowDefaultOn;
          const tmpResult = ClipsDefaultOnGeoExperimentDefault;
        }
        const obj2 = {
          clipsEnabled: tmp6,
          enableAutoclipping: null,
          allowVoiceRecording: null,
          nsfwAllowed: null,
          geoAllowed: null,
        };
        if (tmp6) {
          tmp6 = true === allowDefaultOn;
        }
        obj2.enableAutoclipping = tmp6;
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
prototype["loadClipsFromStorage"] = function loadClipsFromStorage() {};
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
prototype["classifyHardwareAndTrack"] = function classifyHardwareAndTrack() {
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp7;
            closure_128_0 = undefined;
            let gpuModels;
            let classification;
            c3 = 1;
            v2 = 2;
            c5 = 1;
            const obj4 = {
              value: v2(async () => {
                await closure_2_5();
                closure_128_0 = value;
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
                const processUtils = tmp3(closure_2_3[23]).processUtils;
                await processUtils.getSystemInfo();
                const gpus2 = value.gpus;
                closure_128_2 = gpus2.map((model) => model.model);
                return { gpuModels: closure_128_2, classification: tmp2.classifyHardware(closure_128_2) };
              })(),
              done: false,
            };
            return obj4;
          }
        } else if (1 === tmp7) {
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          gpuModels = closure_128_0.gpuModels;
          classification = closure_128_0.classification;
          const obj8 = { classification, version, gpu_models: gpuModels, clip_runtime };
          tmp3(c3[18]).track(constants2.CLIPS_HARDWARE_CLASSIFICATION, obj8);
          c3 = 0;
          c5 = 3;
          const obj = { value: classification, done: true };
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
      let MEETS_AUTO_ENABLE = constants.MEETS_AUTO_ENABLE;
    } else {
      MEETS_AUTO_ENABLE = tmp10 ? constants.MEETS_MINIMUM : constants.BELOW_MINIMUM;
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
  obj = PlatformUtils;
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
