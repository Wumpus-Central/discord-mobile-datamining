// === Module 17490: AudioSettingsManager ===

// Module 17490 (AudioSettingsManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Storage2 from "Storage" /* 510 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2033 */;
import Constants from "Constants" /* 4921 */;
import AudioSettingsUtils from "AudioSettingsUtils" /* 8082 */;
import AudioSettingsDefaultVolumes from "AudioSettingsDefaultVolumes" /* 8083 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9461 */;
import AudioSettingsPending from "AudioSettingsPending" /* 13904 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameConsoleStore from "GameConsoleStore" /* 4913 */;
import SoundboardStore from "SoundboardStore" /* 5687 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import module_12_mod from "module_12" /* 12 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

const f130992 = async (arg0) => {
  let closure_0 = arg0;
  let closure_1 = false;
  let obj = closure_0(closure_2[13]);
  let result = obj.drainPendingAudioSettings((arg0, arg1, arg2) => {
    let diff;
    const obj = AudioSettingsUtils;
    const result = obj.coerceAudioContextForProto(arg0);
    let flag = false;
    if (null != result) {
      const tmp6 = closure_0[result];
      let tmp8Result = tmp6[arg1];
      const tmp5 = arg1;
      if (tmp8Result == null) {
        const AudioContextSetting = preloaded_user_settings.AudioContextSetting;
        if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
          let USER;
          if (arg0 === constants.STREAM) {
            USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
          } else {
            USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
          }
          const obj2 = { muted: false, volume: USER };
          tmp8Result = tmp8(obj2);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      let tmp11 = arg2;
      tmp6[arg1] = tmp8Result;
      const _Object = Object;
      const merged = Object.assign(tmp6[arg1], arg2);
      const _String = String;
      const _Date = Date;
      tmp6[arg1].modifiedAt = String(Date.now());
      if (typeof DEFAULT_VOLUME_FOR_CONTEXT === "function") {
        let USER2;
        if (arg0 === constants.STREAM) {
          USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
        } else {
          USER2 = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
        }
        const tmp17 = tmp14 !== USER2 || tmp6[arg1].muted || tmp6[arg1].soundboardMuted;
        if (!tmp17) {
          delete tmp6[tmp5];
        }
        const obj3 = SnowflakeUtilsDefault;
        const entries = obj3.entries(tmp6);
        flag = true;
        if (entries.length > 300) {
          flag = true;
          let num3 = 0;
          if (0 < entries.length - 300) {
            do {
              delete tmp6[_slicedToArray(undefined, tmp19[num3], 1)[0]];
              num3 = num3 + 1;
              flag = true;
              diff = length - 300;
            } while (num3 < diff);
          }
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    closure_1 = closure_1 || flag;
  });
  return closure_1;
};
function handleConnectionOpen() {
  let id;
  let state;
  let Storage = Storage2.Storage;
  const get = Storage.get;
  if (typeof SETTINGS_MIGRATION_KEY === "function") {
    const _HermesInternal = HermesInternal;
    if (!get("AudioContextSettingsMigrated:" + tmp3)) {
      const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", async (arg0) => {
        let first;
        let tmp45;
        let tmp46;
        let tmp8;
        let flag = false;
        const entries = Object.entries(state.getState().settingsByContext);
        const tmp2 = entries[Symbol.iterator]();
        while (tmp2 !== undefined) {
          [first, tmp8] = tmp3;
          let tmp7 = first;
          let obj = AudioSettingsUtils;
          let result = obj.coerceAudioContextForProto(first);
          if (null != result) {
            let tmp56 = arg0[tmp12];
            let _String = String;
            let _Date = Date;
            let StringResult = String(Date.now());
            let obj2 = {};
            let _Object4 = Object;
            let entries1 = Object.entries(tmp8.localMutes);
            for (const item10044 of entries1) {
              let tmp15 = _slicedToArray(item10044, 2);
              let obj3 = { muted: tmp15[1], volume: DEFAULT_VOLUME_FOR_CONTEXT(tmp7), modifiedAt: StringResult, soundboardMuted: false };
              let first1 = tmp15[0];
              obj2[first1] = obj3;
              continue;
            }
            let _Object = Object;
            let entries2 = Object.entries(tmp8.localVolumes);
            for (const item10065 of entries2) {
              let tmp26 = _slicedToArray(item10065, 2);
              let first2 = tmp26[0];
              let obj5 = { muted: false, modifiedAt: StringResult, volume: obj4.snapVolumeToDefault(tmp28, tmp7) };
              let tmp28 = tmp26[1];
              let merged = Object.assign(obj2[first2]);
              let obj4 = AudioSettingsUtils;
              obj2[first2] = obj5;
              continue;
            }
            let _Object2 = Object;
            let length = Object.keys(tmp56).length;
            let _Object3 = Object;
            let entries3 = Object.entries(obj2);
            let entries4 = entries3.entries();
            for (const item10099 of entries4) {
              let tmp42 = _slicedToArray(item10099, 2);
              let first3 = tmp42[0];
              let tmp44 = _slicedToArray(tmp42[1], 2);
              [tmp45, tmp46] = tmp44;
              if (300 - length - (first3 + 1) <= 0) {
                obj6.return();
                break;
              } else {
                if (null == tmp56[tmp45]) {
                  flag = true;
                  tmp56[tmp45] = tmp46;
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
      }, UserSettingsProtoActionCreators.UserSettingsDelay.AUTOMATED);
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function handleSetLocalVolume(arg0) {
  let context;
  let userId;
  let volume;
  ({ context, userId, volume } = arg0);
  if (userId !== AuthenticationStore.getId()) {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != remoteSessionId) {
      const obj = { muted: MediaEngineStore.isLocalMute(userId, context), volume };
      closure_13(remoteSessionId, userId, context, obj);
    }
    const obj3 = { volume };
    const obj2 = AudioSettingsPending;
    const result = obj2.updatePendingSettings(context, userId, obj3);
    closure_12();
  }
}
function handleSetLocalMute(arg0) {
  let context;
  let userId;
  ({ context, userId } = arg0);
  if (userId !== AuthenticationStore.getId()) {
    const obj2 = { muted: MediaEngineStore.isLocalMute(userId, context) };
    const obj = AudioSettingsPending;
    const result = obj.updatePendingSettings(context, userId, obj2);
    closure_12.cancel();
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", f130992, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function handleSetLocalSoundboardMute(userId) {
  userId = userId.userId;
  const context = userId.context;
  if (userId !== AuthenticationStore.getId()) {
    const result = SoundboardStore.isLocalSoundboardMuted(userId);
    const obj2 = { soundboardMuted: result };
    const obj = AudioSettingsPending;
    const result1 = obj.updatePendingSettings(context, userId, obj2);
    closure_12.cancel();
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", f130992, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function handleResetMediaEngineSettings(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", async (arg0) => {
      arg0.user = {};
      arg0.stream = {};
    }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
function SETTINGS_MIGRATION_KEY(id) {
  return "AudioContextSettingsMigrated:" + id;
}
function DEFAULT_VOLUME_FOR_CONTEXT(arg0) {
  let USER;
  if (arg0 === MediaEngineContextTypes.STREAM) {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
  }
  return USER;
}
let module_12 = module_12_mod;
let closure_12 = module_12.debounce(() => {
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", f130992, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
}, 2000);
module_12 = module_12_mod;
let closure_13 = module_12.debounce(GameConsoleActionCreators.remoteAudioSettingsUpdate, 500, { maxWait: 500 });
class AudioSettingsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { POST_CONNECTION_OPEN: handleConnectionOpen, AUDIO_SET_LOCAL_VOLUME: handleSetLocalVolume, AUDIO_TOGGLE_LOCAL_MUTE: handleSetLocalMute, AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: handleSetLocalSoundboardMute, MEDIA_ENGINE_RESET_SETTINGS: handleResetMediaEngineSettings };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const audioSettingsManager = new AudioSettingsManager();
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsManager.tsx");

export default audioSettingsManager;