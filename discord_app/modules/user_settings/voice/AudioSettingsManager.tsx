// discord_app/modules/user_settings/voice/AudioSettingsManager.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import UserSettingsProtoActionCreators from "../UserSettingsProtoActionCreators.tsx";
import AudioSettingsUtils from "AudioSettingsUtils.tsx";
import AudioSettingsDefaultVolumes from "../../../../discord_common/js/shared/shared-constants/AudioSettingsDefaultVolumes.tsx";
import AudioSettingsPending from "AudioSettingsPending.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GameConsoleStore from "../../game_console/GameConsoleStore.tsx";
import SoundboardStore from "../../soundboard/SoundboardStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import apply from "../../../../_runtime/metro/00012__.js";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleConnectionOpen() {
  let Storage = Storage2.Storage;
  if (typeof SETTINGS_MIGRATION_KEY === "function") {
    const _HermesInternal = HermesInternal;
    if (!Storage.get("AudioContextSettingsMigrated:" + tmp3)) {
      const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync(
        "audioContextSettings",
        async (arg0) => {
          let flag = false;
          const entries = Object.entries(state.getState().settingsByContext);
          while (tmp2 !== undefined) {
            let tmp5 = _slicedToArray(tmp3, 2);
            let first = tmp5[0];
            let tmp7 = first;
            let tmp8 = tmp5[1];
            let obj = AudioSettingsUtils;
            let result = obj.coerceAudioContextForProto(first);
            if (null != result) {
              let tmp53 = arg0[tmp12];
              let _String = String;
              let _Date = Date;
              let StringResult = String(Date.now());
              obj = {};
              let _Object4 = Object;
              let entries1 = Object.entries(tmp8.localMutes);
              for (const item10044 of entries1) {
                let tmp15 = _slicedToArray(item10044, 2);
                obj = { muted: tmp15[1], volume: null, modifiedAt: null, soundboardMuted: false };
                obj.volume = DEFAULT_VOLUME_FOR_CONTEXT(tmp7);
                obj.modifiedAt = StringResult;
                obj[tmp15[0]] = obj;
                continue;
              }
              let _Object = Object;
              let entries2 = Object.entries(tmp8.localVolumes);
              for (const item10065 of entries2) {
                let tmp25 = _slicedToArray(item10065, 2);
                let first1 = tmp25[0];
                let obj1 = { muted: false, modifiedAt: null };
                obj1.modifiedAt = StringResult;
                let merged = Object.assign(obj[first1]);
                let obj4 = AudioSettingsUtils;
                obj1.volume = obj4.snapVolumeToDefault(tmp25[1], tmp7);
                obj[first1] = obj1;
                continue;
              }
              let _Object2 = Object;
              let length = Object.keys(tmp53).length;
              let _Object3 = Object;
              let entries3 = Object.entries(obj);
              let entries4 = entries3.entries();
              for (const item10099 of entries4) {
                let tmp40 = _slicedToArray(item10099, 2);
                let tmp41 = _slicedToArray(tmp40[1], 2);
                [tmp42, tmp43] = tmp41;
                if (300 - length - (tmp40[0] + 1) <= 0) {
                  obj6.return();
                  break;
                } else {
                  if (null == tmp53[tmp42]) {
                    flag = true;
                    tmp53[tmp42] = tmp43;
                  }
                  continue;
                }
                continue;
              }
            }
            continue;
          }
          const Storage = Storage2.Storage;
          const result1 = Storage.set(SETTINGS_MIGRATION_KEY(id.getId()), true);
          return flag;
        },
        UserSettingsProtoActionCreators.UserSettingsDelay.AUTOMATED,
      );
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function handleSetLocalVolume(arg0) {
  ({ context, userId, volume } = arg0);
  if (userId !== AuthenticationStore.getId()) {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != remoteSessionId) {
      let obj = { muted: MediaEngineStore.isLocalMute(userId, context), volume };
      closure_13(remoteSessionId, userId, context, obj);
    }
    obj = { volume };
    const result = AudioSettingsPending.updatePendingSettings(context, userId, obj);
    closure_12();
  }
}
function handleSetLocalMute(arg0) {
  ({ context, userId } = arg0);
  if (userId !== AuthenticationStore.getId()) {
    const obj = { muted: MediaEngineStore.isLocalMute(userId, context) };
    const result = obj.updatePendingSettings(context, userId, obj);
    closure_12.cancel();
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync(
      "audioContextSettings",
      async (arg0) => {
        closure_0 = arg0;
        let result = closure_0(14071).drainPendingAudioSettings((arg0, arg1, arg2) => {
          let diff;
          let obj = AudioSettingsUtils;
          const result = obj.coerceAudioContextForProto(arg0);
          flag = false;
          if (null != result) {
            if (closure_0[result][arg1] != null) {
              tmp9[arg1] = tmp10;
              const _Object = Object;
              const merged = Object.assign(tmp9[arg1], arg2);
              const _String = String;
              const _Date = Date;
              tmp9[arg1].modifiedAt = String(Date.now());
              if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
                if (arg0 === constants.STREAM) {
                  let USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
                } else {
                  USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
                }
                if (!tmp21) {
                  delete tmp2[tmp];
                }
                const entries = SnowflakeUtilsDefault.entries(tmp9);
                flag = true;
                if (entries.length > 300) {
                  flag = true;
                  let num3 = 0;
                  if (0 < length - 300) {
                    do {
                      let first = _slicedToArray(tmp23[num3], 1)[0];
                      delete tmp2[tmp3];
                      num3 = num3 + 1;
                      flag = true;
                      diff = length - 300;
                    } while (num3 < diff);
                  }
                }
                tmp21 = tmp18 !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
              if (arg0 === constants.STREAM) {
                let USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
              } else {
                USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
              }
              obj = { muted: false, volume: USER };
              tmp11(obj);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          let tmp27 = flag;
          if (!flag) {
            tmp27 = flag;
          }
          flag = tmp27;
        });
        return false;
      },
      UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
    const isLocalMuteResult = MediaEngineStore.isLocalMute(userId, context);
  }
}
function handleSetLocalSoundboardMute(userId) {
  userId = userId.userId;
  if (userId !== AuthenticationStore.getId()) {
    const result = SoundboardStore.isLocalSoundboardMuted(userId);
    const obj = { soundboardMuted: result };
    const result1 = obj.updatePendingSettings(userId.context, userId, obj);
    closure_12.cancel();
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync(
      "audioContextSettings",
      async (arg0) => {
        closure_0 = arg0;
        let result = closure_0(14071).drainPendingAudioSettings((arg0, arg1, arg2) => {
          let diff;
          let obj = AudioSettingsUtils;
          const result = obj.coerceAudioContextForProto(arg0);
          flag = false;
          if (null != result) {
            if (closure_0[result][arg1] != null) {
              tmp9[arg1] = tmp10;
              const _Object = Object;
              const merged = Object.assign(tmp9[arg1], arg2);
              const _String = String;
              const _Date = Date;
              tmp9[arg1].modifiedAt = String(Date.now());
              if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
                if (arg0 === constants.STREAM) {
                  let USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
                } else {
                  USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
                }
                if (!tmp21) {
                  delete tmp2[tmp];
                }
                const entries = SnowflakeUtilsDefault.entries(tmp9);
                flag = true;
                if (entries.length > 300) {
                  flag = true;
                  let num3 = 0;
                  if (0 < length - 300) {
                    do {
                      let first = _slicedToArray(tmp23[num3], 1)[0];
                      delete tmp2[tmp3];
                      num3 = num3 + 1;
                      flag = true;
                      diff = length - 300;
                    } while (num3 < diff);
                  }
                }
                tmp21 = tmp18 !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
              if (arg0 === constants.STREAM) {
                let USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
              } else {
                USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
              }
              obj = { muted: false, volume: USER };
              tmp11(obj);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          let tmp27 = flag;
          if (!flag) {
            tmp27 = flag;
          }
          flag = tmp27;
        });
        return false;
      },
      UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
  }
}
function handleResetMediaEngineSettings(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync(
      "audioContextSettings",
      async (arg0) => {
        arg0.user = {};
        arg0.stream = {};
      },
      UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
  }
}
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
function SETTINGS_MIGRATION_KEY(id) {
  return "AudioContextSettingsMigrated:" + id;
}
function DEFAULT_VOLUME_FOR_CONTEXT(arg0) {
  if (arg0 === MediaEngineContextTypes.STREAM) {
    let USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
  }
  return USER;
}
let closure_12 = apply.debounce(() => {
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync(
    "audioContextSettings",
    async (arg0) => {
      closure_0 = arg0;
      let result = closure_0(14071).drainPendingAudioSettings((arg0, arg1, arg2) => {
        let diff;
        let obj = AudioSettingsUtils;
        const result = obj.coerceAudioContextForProto(arg0);
        flag = false;
        if (null != result) {
          if (closure_0[result][arg1] != null) {
            tmp9[arg1] = tmp10;
            const _Object = Object;
            const merged = Object.assign(tmp9[arg1], arg2);
            const _String = String;
            const _Date = Date;
            tmp9[arg1].modifiedAt = String(Date.now());
            if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
              if (arg0 === constants.STREAM) {
                let USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
              } else {
                USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
              }
              if (!tmp21) {
                delete tmp2[tmp];
              }
              const entries = SnowflakeUtilsDefault.entries(tmp9);
              flag = true;
              if (entries.length > 300) {
                flag = true;
                let num3 = 0;
                if (0 < length - 300) {
                  do {
                    let first = _slicedToArray(tmp23[num3], 1)[0];
                    delete tmp2[tmp3];
                    num3 = num3 + 1;
                    flag = true;
                    diff = length - 300;
                  } while (num3 < diff);
                }
              }
              tmp21 = tmp18 !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
            if (arg0 === constants.STREAM) {
              let USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
            }
            obj = { muted: false, volume: USER };
            tmp11(obj);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        let tmp27 = flag;
        if (!flag) {
          tmp27 = flag;
        }
        flag = tmp27;
      });
      return false;
    },
    UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
}, 2000);
let closure_13 = apply.debounce(fn(9448).remoteAudioSettingsUpdate, 500, { maxWait: 500 });
let prototype = function AudioSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN: handleConnectionOpen,
    AUDIO_SET_LOCAL_VOLUME: handleSetLocalVolume,
    AUDIO_TOGGLE_LOCAL_MUTE: handleSetLocalMute,
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: handleSetLocalSoundboardMute,
    MEDIA_ENGINE_RESET_SETTINGS: handleResetMediaEngineSettings,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsManager.tsx");

export default prototype;
