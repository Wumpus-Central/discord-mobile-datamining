import _slicedToArray from "_slicedToArray";
import set from "set";
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { MediaEngineContextTypes } from "DesktopSources";
import importDefaultResult from "apply";
import "initialize";
import importDefaultResult1 from "apply";

const require = arg1;
function handleConnectionOpen() {
  let Storage = require(595) /* Storage */.Storage;
  const id = store.getId();
  if (typeof SETTINGS_MIGRATION_KEY !== "error") {
    HermesBuiltin.throwTypeError();
  }
  if (!Storage.get("AudioContextSettingsMigrated:" + id)) {
    const PreloadedUserSettingsActionCreators = tmp(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      let tmp42;
      let tmp43;
      let flag = false;
      const entries = Object.entries(state.getState().settingsByContext);
      while (tmp2 !== undefined) {
        let tmp4 = callback2;
        let tmp5 = callback2(tmp3, 2);
        let first = tmp5[0];
        let tmp7 = first;
        let tmp8 = tmp5[1];
        let tmp9 = callback;
        let tmp10 = dependencyMap;
        let obj = callback(9026);
        let result = obj.coerceAudioContextForProto(first);
        if (null != result) {
          let tmp52 = result;
          let tmp53 = arg0[tmp12];
          let _String = String;
          let _Date = Date;
          let StringResult = String(Date.now());
          obj = {};
          let _Object4 = Object;
          let tmp55 = tmp8;
          let entries1 = Object.entries(tmp8.localMutes);
          let tmp57 = entries1;
          let tmp13 = entries1;
          for (const item10044 of entries1) {
            let tmp14 = callback2;
            let tmp15 = callback2(item10044, 2);
            let tmp16 = obj;
            obj = { muted: null, volume: null, modifiedAt: null, soundboardMuted: false };
            obj[0] = tmp15[1];
            let tmp17 = callback4;
            let tmp18 = first;
            obj[1] = callback4(tmp7);
            let tmp19 = StringResult;
            obj[2] = StringResult;
            obj[tmp15[0]] = obj;
            continue;
          }
          let _Object = Object;
          let tmp20 = tmp8;
          let entries2 = Object.entries(tmp8.localVolumes);
          let tmp22 = entries2;
          let tmp23 = entries2;
          for (const item10065 of entries2) {
            let tmp24 = callback2;
            let tmp25 = callback2(item10065, 2);
            let first1 = tmp25[0];
            let tmp27 = obj;
            let obj1 = { muted: false, modifiedAt: null };
            let tmp28 = StringResult;
            obj1[1] = StringResult;
            let tmp29 = obj1;
            let merged = Object.assign(obj[first1]);
            let tmp31 = callback;
            let tmp32 = dependencyMap;
            let obj4 = callback(9026);
            let tmp33 = first;
            obj1.volume = obj4.snapVolumeToDefault(tmp25[1], tmp7);
            obj[first1] = obj1;
            continue;
          }
          let _Object2 = Object;
          let tmp34 = tmp53;
          let length = Object.keys(tmp53).length;
          let _Object3 = Object;
          let tmp35 = obj;
          let entries3 = Object.entries(obj);
          let entries4 = entries3.entries();
          let tmp37 = entries4;
          let tmp38 = entries4;
          for (const item10099 of entries4) {
            let tmp39 = callback2;
            let tmp40 = callback2(item10099, 2);
            let tmp41 = callback2(tmp40[1], 2);
            [tmp42, tmp43] = tmp41;
            let tmp44 = length;
            if (300 - length - (tmp40[0] + 1) <= 0) {
              let tmp50 = obj6;
              obj6.return();
              break;
            } else {
              let tmp45 = tmp53;
              let tmp46 = tmp42;
              if (null == tmp53[tmp42]) {
                flag = true;
                let tmp47 = tmp53;
                let tmp48 = tmp42;
                let tmp49 = tmp43;
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
    }, tmp(1355).UserSettingsDelay.AUTOMATED);
  }
}
function handleSetLocalVolume(arg0) {
  let context;
  let userId;
  let volume;
  ({ context, userId, volume } = arg0);
  if (userId !== store.getId()) {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      let obj = { muted: null, volume: null };
      obj[0] = _detectH265HardwareDecode.isLocalMute(userId, context);
      obj[1] = volume;
      callback(remoteSessionId, userId, context, obj);
    }
    obj = { volume: null };
    obj[0] = volume;
    const result = require(13043) /* getPendingAudioSettings */.updatePendingSettings(context, userId, obj);
    lib();
    const obj2 = require(13043) /* getPendingAudioSettings */;
  }
}
function handleSetLocalMute(arg0) {
  let context;
  let userId;
  ({ context, userId } = arg0);
  if (userId !== store.getId()) {
    let obj = require(13043) /* getPendingAudioSettings */;
    obj = { muted: null };
    obj[0] = _detectH265HardwareDecode.isLocalMute(userId, context);
    const result = obj.updatePendingSettings(context, userId, obj);
    lib.cancel();
    const PreloadedUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      const callback = arg0;
      let c1 = false;
      let result = callback(table[13]).drainPendingAudioSettings((first) => {
        let diff;
        let obj = callback(outer1_2[11]);
        const result = obj.coerceAudioContextForProto(first);
        let flag = false;
        if (null != result) {
          if (callback[result][arg1] != null) {
            tmp9[arg1] = tmp10;
            const _Object = Object;
            const merged = Object.assign(tmp9[arg1], arg2);
            const _String = String;
            const _Date = Date;
            tmp9[arg1].modifiedAt = String(Date.now());
            if (typeof outer1_10 !== "error") {
              HermesBuiltin.throwTypeError();
            }
            if (first === outer1_8.STREAM) {
              let USER2 = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER2 = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.USER;
            }
            if (!tmp19) {
              delete tmp2[tmp];
            }
            const entries = callback2(tmp6[7]).entries(tmp9);
            flag = true;
            if (entries.length > 300) {
              flag = true;
              let num3 = 0;
              if (0 < length - 300) {
                do {
                  let tmp22 = outer1_3;
                  first = outer1_3(tmp21[num3], 1)[0];
                  delete tmp2[tmp3];
                  num3 = num3 + 1;
                  flag = true;
                  diff = length - 300;
                } while (num3 < diff);
              }
            }
            const obj3 = callback2(tmp6[7]);
            tmp19 = tmp9[arg1].volume !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
          } else {
            const AudioContextSetting = tmp5(tmp6[8]).AudioContextSetting;
            if (typeof outer1_10 !== "error") {
              HermesBuiltin.throwTypeError();
            }
            if (first === outer1_8.STREAM) {
              let USER = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.USER;
            }
            obj = { muted: false, volume: null };
            obj[1] = USER;
            obj = AudioContextSetting.create(obj);
          }
        }
        let tmp25 = callback2;
        if (!callback2) {
          tmp25 = flag;
        }
        callback2 = tmp25;
      });
      return c1;
    }, require(1355) /* updateUserGuildSettings */.UserSettingsDelay.INFREQUENT_USER_ACTION);
    const isLocalMuteResult = _detectH265HardwareDecode.isLocalMute(userId, context);
  }
}
function handleSetLocalSoundboardMute(userId) {
  userId = userId.userId;
  if (userId !== store.getId()) {
    const result = localSoundboardMuted.isLocalSoundboardMuted(userId);
    let obj = require(13043) /* getPendingAudioSettings */;
    obj = { soundboardMuted: null };
    obj[0] = result;
    const result1 = obj.updatePendingSettings(userId.context, userId, obj);
    lib.cancel();
    const PreloadedUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      const callback = arg0;
      let c1 = false;
      let result = callback(table[13]).drainPendingAudioSettings((first) => {
        let diff;
        let obj = callback(outer1_2[11]);
        const result = obj.coerceAudioContextForProto(first);
        let flag = false;
        if (null != result) {
          if (callback[result][arg1] != null) {
            tmp9[arg1] = tmp10;
            const _Object = Object;
            const merged = Object.assign(tmp9[arg1], arg2);
            const _String = String;
            const _Date = Date;
            tmp9[arg1].modifiedAt = String(Date.now());
            if (typeof outer1_10 !== "error") {
              HermesBuiltin.throwTypeError();
            }
            if (first === outer1_8.STREAM) {
              let USER2 = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER2 = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.USER;
            }
            if (!tmp19) {
              delete tmp2[tmp];
            }
            const entries = callback2(tmp6[7]).entries(tmp9);
            flag = true;
            if (entries.length > 300) {
              flag = true;
              let num3 = 0;
              if (0 < length - 300) {
                do {
                  let tmp22 = outer1_3;
                  first = outer1_3(tmp21[num3], 1)[0];
                  delete tmp2[tmp3];
                  num3 = num3 + 1;
                  flag = true;
                  diff = length - 300;
                } while (num3 < diff);
              }
            }
            const obj3 = callback2(tmp6[7]);
            tmp19 = tmp9[arg1].volume !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
          } else {
            const AudioContextSetting = tmp5(tmp6[8]).AudioContextSetting;
            if (typeof outer1_10 !== "error") {
              HermesBuiltin.throwTypeError();
            }
            if (first === outer1_8.STREAM) {
              let USER = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.STREAM;
            } else {
              USER = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.USER;
            }
            obj = { muted: false, volume: null };
            obj[1] = USER;
            obj = AudioContextSetting.create(obj);
          }
        }
        let tmp25 = callback2;
        if (!callback2) {
          tmp25 = flag;
        }
        callback2 = tmp25;
      });
      return c1;
    }, require(1355) /* updateUserGuildSettings */.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function handleResetMediaEngineSettings(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const PreloadedUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      arg0.user = {};
      arg0.stream = {};
    }, require(1355) /* updateUserGuildSettings */.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function SETTINGS_MIGRATION_KEY(arg0) {
  return "AudioContextSettingsMigrated:" + arg0;
}
function DEFAULT_VOLUME_FOR_CONTEXT(arg0) {
  if (arg0 === MediaEngineContextTypes.STREAM) {
    let USER = require(9027) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = require(9027) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.USER;
  }
  return USER;
}
let closure_12 = require("apply").debounce(() => {
  const PreloadedUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
    const callback = arg0;
    let c1 = false;
    let result = callback(table[13]).drainPendingAudioSettings((first) => {
      let diff;
      let obj = callback(outer1_2[11]);
      const result = obj.coerceAudioContextForProto(first);
      let flag = false;
      if (null != result) {
        if (callback[result][arg1] != null) {
          tmp9[arg1] = tmp10;
          const _Object = Object;
          const merged = Object.assign(tmp9[arg1], arg2);
          const _String = String;
          const _Date = Date;
          tmp9[arg1].modifiedAt = String(Date.now());
          if (typeof outer1_10 !== "error") {
            HermesBuiltin.throwTypeError();
          }
          if (first === outer1_8.STREAM) {
            let USER2 = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.STREAM;
          } else {
            USER2 = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.USER;
          }
          if (!tmp19) {
            delete tmp2[tmp];
          }
          const entries = callback2(tmp6[7]).entries(tmp9);
          flag = true;
          if (entries.length > 300) {
            flag = true;
            let num3 = 0;
            if (0 < length - 300) {
              do {
                let tmp22 = outer1_3;
                first = outer1_3(tmp21[num3], 1)[0];
                delete tmp2[tmp3];
                num3 = num3 + 1;
                flag = true;
                diff = length - 300;
              } while (num3 < diff);
            }
          }
          const obj3 = callback2(tmp6[7]);
          tmp19 = tmp9[arg1].volume !== USER2 || tmp9[arg1].muted || tmp9[arg1].soundboardMuted;
        } else {
          const AudioContextSetting = tmp5(tmp6[8]).AudioContextSetting;
          if (typeof outer1_10 !== "error") {
            HermesBuiltin.throwTypeError();
          }
          if (first === outer1_8.STREAM) {
            let USER = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.STREAM;
          } else {
            USER = tmp5(tmp6[6]).AudioSettingsDefaultVolumes.USER;
          }
          obj = { muted: false, volume: null };
          obj[1] = USER;
          obj = AudioContextSetting.create(obj);
        }
      }
      let tmp25 = callback2;
      if (!callback2) {
        tmp25 = flag;
      }
      callback2 = tmp25;
    });
    return c1;
  }, require(1355) /* updateUserGuildSettings */.UserSettingsDelay.INFREQUENT_USER_ACTION);
}, 2000);
let closure_13 = require("apply").debounce(require("disconnectRemote").remoteAudioSettingsUpdate, 500, { maxWait: 500 });
let prototype = function AudioSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: handleConnectionOpen, AUDIO_SET_LOCAL_VOLUME: handleSetLocalVolume, AUDIO_TOGGLE_LOCAL_MUTE: handleSetLocalMute, AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: handleSetLocalSoundboardMute, MEDIA_ENGINE_RESET_SETTINGS: handleResetMediaEngineSettings };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("handleSoundCreateOrUpdate").fileFinishedImporting("modules/user_settings/voice/AudioSettingsManager.tsx");

export default prototype;