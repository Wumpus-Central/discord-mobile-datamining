// === Module 16532: handleConnectionOpen ===

// Module 16532 (handleConnectionOpen)
import Storage2 from "Storage" /* 595 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1374 */;
import initializeDefault from "initialize" /* 5038 */;
import AudioSettingsDefaultVolumes from "AudioSettingsDefaultVolumes" /* 9657 */;
import getPendingAudioSettings from "getPendingAudioSettings" /* 13178 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import set from "set" /* 4540 */;
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate" /* 4780 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4529 */;
import importDefaultResult from "apply" /* 12 */;

require = fn;
function handleConnectionOpen() {
  let Storage = Storage2.Storage;
  const id = store.getId();
  if (typeof SETTINGS_MIGRATION_KEY !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (!Storage.get("AudioContextSettingsMigrated:" + id)) {
    const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      let flag = false;
      const entries = Object.entries(state.getState().settingsByContext);
      while (tmp2 !== undefined) {
        let tmp5 = callback2(tmp3, 2);
        let first = tmp5[0];
        let tmp7 = first;
        let tmp8 = tmp5[1];
        let obj = callback(9656);
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
            let tmp15 = callback2(item10044, 2);
            obj = { muted: null, volume: null, modifiedAt: null, soundboardMuted: false };
            obj[0] = tmp15[1];
            obj[1] = callback4(tmp7);
            obj[2] = StringResult;
            obj[tmp15[0]] = obj;
            continue;
          }
          let _Object = Object;
          let entries2 = Object.entries(tmp8.localVolumes);
          for (const item10065 of entries2) {
            let tmp25 = callback2(item10065, 2);
            let first1 = tmp25[0];
            obj1 = { muted: false, modifiedAt: null };
            obj1[1] = StringResult;
            let merged = Object.assign(obj[first1]);
            let obj4 = callback(9656);
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
            let tmp40 = callback2(item10099, 2);
            let tmp41 = callback2(tmp40[1], 2);
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
      const Storage = callback(595).Storage;
      const result1 = Storage.set(callback3(id.getId()), true);
      return flag;
    }, updateUserGuildSettings.UserSettingsDelay.AUTOMATED);
  }
}
function handleSetLocalVolume(arg0) {
  ({ context, userId, volume } = arg0);
  if (userId !== store.getId()) {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      let obj = { muted: null, volume: null };
      obj[0] = closure_7.isLocalMute(userId, context);
      obj[1] = volume;
      callback(remoteSessionId, userId, context, obj);
    }
    obj = { volume: null };
    obj[0] = volume;
    const result = getPendingAudioSettings.updatePendingSettings(context, userId, obj);
    lib();
  }
}
function handleSetLocalMute(arg0) {
  ({ context, userId } = arg0);
  if (userId !== store.getId()) {
    const obj = { muted: null };
    obj[0] = closure_7.isLocalMute(userId, context);
    const result = obj.updatePendingSettings(context, userId, obj);
    lib.cancel();
    const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      const callback = arg0;
      c1 = false;
      let result = callback(table[13]).drainPendingAudioSettings((arg0, arg1, arg2) => {
        let diff;
        let obj = callback(closure_1_2[11]);
        const result = obj.coerceAudioContextForProto(arg0);
        let flag = false;
        if (null != result) {
          if (callback[result][arg1] != null) {
            tmp9[arg1] = tmp10;
            const _Object = Object;
            const merged = Object.assign(tmp9[arg1], arg2);
            const _String = String;
            const _Date = Date;
            tmp9[arg1].modifiedAt = String(Date.now());
            if (typeof closure_1_10 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (arg0 === closure_1_8.STREAM) {
              let USER2 = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER2 = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.USER;
            }
            if (!tmp19) {
              delete tmp2[tmp];
            }
            const entries = callback2(closure_1_2[7]).entries(tmp9);
            flag = true;
            if (entries.length > 300) {
              flag = true;
              let num3 = 0;
              if (0 < length - 300) {
                do {
                  let first = closure_1_3(tmp21[num3], 1)[0];
                  delete tmp2[tmp3];
                  num3 = num3 + 1;
                  flag = true;
                  diff = length - 300;
                } while (num3 < diff);
              }
            }
            const obj3 = callback2(closure_1_2[7]);
            tmp19 = tmp9[arg1].volume !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
          } else {
            const AudioContextSetting = callback(closure_1_2[8]).AudioContextSetting;
            if (typeof closure_1_10 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (arg0 === closure_1_8.STREAM) {
              let USER = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.USER;
            }
            obj = { muted: false, volume: null };
            obj[1] = USER;
            obj = AudioContextSetting.create(obj);
          }
        }
        let tmp25 = flag;
        if (!flag) {
          tmp25 = flag;
        }
        flag = tmp25;
      });
      return c1;
    }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
    const isLocalMuteResult = closure_7.isLocalMute(userId, context);
  }
}
function handleSetLocalSoundboardMute(userId) {
  userId = userId.userId;
  if (userId !== store.getId()) {
    const result = localSoundboardMuted.isLocalSoundboardMuted(userId);
    const obj = { soundboardMuted: null };
    obj[0] = result;
    const result1 = obj.updatePendingSettings(userId.context, userId, obj);
    lib.cancel();
    const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      const callback = arg0;
      c1 = false;
      let result = callback(table[13]).drainPendingAudioSettings((arg0, arg1, arg2) => {
        let diff;
        let obj = callback(closure_1_2[11]);
        const result = obj.coerceAudioContextForProto(arg0);
        let flag = false;
        if (null != result) {
          if (callback[result][arg1] != null) {
            tmp9[arg1] = tmp10;
            const _Object = Object;
            const merged = Object.assign(tmp9[arg1], arg2);
            const _String = String;
            const _Date = Date;
            tmp9[arg1].modifiedAt = String(Date.now());
            if (typeof closure_1_10 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (arg0 === closure_1_8.STREAM) {
              let USER2 = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER2 = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.USER;
            }
            if (!tmp19) {
              delete tmp2[tmp];
            }
            const entries = callback2(closure_1_2[7]).entries(tmp9);
            flag = true;
            if (entries.length > 300) {
              flag = true;
              let num3 = 0;
              if (0 < length - 300) {
                do {
                  let first = closure_1_3(tmp21[num3], 1)[0];
                  delete tmp2[tmp3];
                  num3 = num3 + 1;
                  flag = true;
                  diff = length - 300;
                } while (num3 < diff);
              }
            }
            const obj3 = callback2(closure_1_2[7]);
            tmp19 = tmp9[arg1].volume !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
          } else {
            const AudioContextSetting = callback(closure_1_2[8]).AudioContextSetting;
            if (typeof closure_1_10 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (arg0 === closure_1_8.STREAM) {
              let USER = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.USER;
            }
            obj = { muted: false, volume: null };
            obj[1] = USER;
            obj = AudioContextSetting.create(obj);
          }
        }
        let tmp25 = flag;
        if (!flag) {
          tmp25 = flag;
        }
        flag = tmp25;
      });
      return c1;
    }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function handleResetMediaEngineSettings(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      arg0.user = {};
      arg0.stream = {};
    }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function SETTINGS_MIGRATION_KEY(arg0) {
  return "AudioContextSettingsMigrated:" + arg0;
}
function DEFAULT_VOLUME_FOR_CONTEXT(arg0) {
  if (arg0 === MediaEngineContextTypes.STREAM) {
    let USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = AudioSettingsDefaultVolumes.AudioSettingsDefaultVolumes.USER;
  }
  return USER;
}
let closure_12 = importDefaultResult.debounce(() => {
  const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
    const callback = arg0;
    c1 = false;
    let result = callback(table[13]).drainPendingAudioSettings((arg0, arg1, arg2) => {
      let diff;
      let obj = callback(closure_1_2[11]);
      const result = obj.coerceAudioContextForProto(arg0);
      let flag = false;
      if (null != result) {
        if (callback[result][arg1] != null) {
          tmp9[arg1] = tmp10;
          const _Object = Object;
          const merged = Object.assign(tmp9[arg1], arg2);
          const _String = String;
          const _Date = Date;
          tmp9[arg1].modifiedAt = String(Date.now());
          if (typeof closure_1_10 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (arg0 === closure_1_8.STREAM) {
            let USER2 = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.STREAM;
          } else {
            USER2 = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.USER;
          }
          if (!tmp19) {
            delete tmp2[tmp];
          }
          const entries = callback2(closure_1_2[7]).entries(tmp9);
          flag = true;
          if (entries.length > 300) {
            flag = true;
            let num3 = 0;
            if (0 < length - 300) {
              do {
                let first = closure_1_3(tmp21[num3], 1)[0];
                delete tmp2[tmp3];
                num3 = num3 + 1;
                flag = true;
                diff = length - 300;
              } while (num3 < diff);
            }
          }
          const obj3 = callback2(closure_1_2[7]);
          tmp19 = tmp9[arg1].volume !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
        } else {
          const AudioContextSetting = callback(closure_1_2[8]).AudioContextSetting;
          if (typeof closure_1_10 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (arg0 === closure_1_8.STREAM) {
            let USER = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.STREAM;
          } else {
            USER = callback(closure_1_2[6]).AudioSettingsDefaultVolumes.USER;
          }
          obj = { muted: false, volume: null };
          obj[1] = USER;
          obj = AudioContextSetting.create(obj);
        }
      }
      let tmp25 = flag;
      if (!flag) {
        tmp25 = flag;
      }
      flag = tmp25;
    });
    return c1;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
}, 2000);
let closure_13 = importDefaultResult.debounce(require("disconnectRemote").remoteAudioSettingsUpdate, 500, { maxWait: 500 });
initializeDefault;
let prototype = function AudioSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: handleConnectionOpen, AUDIO_SET_LOCAL_VOLUME: handleSetLocalVolume, AUDIO_TOGGLE_LOCAL_MUTE: handleSetLocalMute, AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: handleSetLocalSoundboardMute, MEDIA_ENGINE_RESET_SETTINGS: handleResetMediaEngineSettings };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const importDefaultResult1 = importDefaultResult;
let result = require("obj132").fileFinishedImporting("modules/user_settings/voice/AudioSettingsManager.tsx");

export default prototype;