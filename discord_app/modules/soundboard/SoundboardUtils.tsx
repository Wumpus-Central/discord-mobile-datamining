// === Module 7342: hasPermissionToPlaySound ===

// Module 7342 (hasPermissionToPlaySound)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4042 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 5047 */;
import SoundButtonOverlay from "SoundButtonOverlay" /* 6862 */;
import _fetchDefaultSoundsFromApi2 from "_fetchDefaultSoundsFromApi2" /* 7337 */;
import getMuteStates from "getMuteStates" /* 7343 */;
import VoiceChannelEffectSentLocation from "VoiceChannelEffectSentLocation" /* 7344 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "handleConnectionClosedOrResumed" /* 1340 */;
import { SILENT_JOIN_LEAVE_CHANNEL_TYPES as closure_5 } from "createChannelRecord" /* 1395 */;
import closure_6 from "getUncachedChannelPermissions" /* 4024 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import closure_8 from "handleSoundCreateOrUpdate" /* 4785 */;
import MAX_LENGTH_SOUND_NAME from "MAX_LENGTH_SOUND_NAME" /* 4786 */;
import ME from "ME" /* 676 */;
import { ExpressionPickerViewType } from "ExpressionPickerViewType" /* 1338 */;

require = arg1;
function hasPermissionToPlaySound(guildId, guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let canResult = null == guild_id;
  if (!canResult) {
    canResult = closure_6.can(constants.USE_EXTERNAL_SOUNDS, guild_id);
  }
  if (!canResult) {
    canResult = guildId.guildId === closure_10;
  }
  if (!canResult) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    canResult = guildId.guildId === guild_id1;
  }
  return canResult;
}
function canUseSoundboardSound(closure_0, closure_1, channel) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  let result = getPremiumPlanItemDefault.canUseSoundboardEverywhere(closure_0);
  if (!result) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    result = closure_1.guildId === guild_id;
  }
  if (!result) {
    result = closure_1.guildId === closure_10;
  }
  if (result) {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    let canResult = null == guild_id1;
    if (!canResult) {
      canResult = closure_6.can(constants.USE_EXTERNAL_SOUNDS, channel);
    }
    if (!canResult) {
      canResult = closure_1.guildId === closure_10;
    }
    if (!canResult) {
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      canResult = closure_1.guildId === guild_id2;
    }
    result = canResult;
  }
  if (result) {
    let available = !flag;
    if (flag) {
      available = closure_1.available;
    }
    result = available;
  }
  return result;
}
function canMakeSound(channel) {
  let obj = getMuteStates;
  obj = { channel };
  const muteStates = obj.getMuteStates(obj);
  const mute = muteStates.mute;
  let tmp2 = !mute;
  if (!mute) {
    tmp2 = !muteStates.suppress;
  }
  return tmp2;
}
function _maybePlayCustomJoinSound() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (sound2 === 2) {
        sound2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          sound2 = 2;
          if (0 === guildId) {
            if (arg0 === 1) {
              sound2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              sound2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let customJoinSound = tmp3;
              let id = tmp2;
              let currentUser;
              id = undefined;
              customJoinSound = undefined;
              guildId = undefined;
              sound2 = undefined;
              currentUser = closure_1_7.getCurrentUser();
              const tmp53 = closure_1_1(closure_1_2[16])();
              id = tmp53;
              customJoinSound = callback(closure_1_2[17]).getCustomJoinSound(currentUser);
              if (null != tmp53) {
                if (!closure_1_5.has(tmp53.type)) {
                  if (null != customJoinSound) {
                    if (tmp51Result.canUseCustomCallSounds(currentUser)) {
                      let tmp54Result = tmp54(tmp52[18]);
                      if (tmp54Result.canSelectedVoiceChannelUseSoundboard()) {
                        tmp54Result = tmp54(tmp52[12]);
                        guildId = 1;
                        sound2 = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = tmp54Result.maybeFetchSoundboardSounds();
                        return obj1;
                      }
                    }
                    tmp51Result = tmp51(tmp52[10]);
                  }
                }
              }
              const obj9 = callback(closure_1_2[17]);
              tmp51 = closure_1_1;
            }
          } else if (arg0 === 1) {
            sound2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            sound2 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            if (customJoinSound.guildId === closure_9) {
              guildId = closure_10;
            } else {
              guildId = customJoinSound.guildId;
            }
            sound2 = sound.getSound(guildId, customJoinSound.soundId);
            if (null != sound2) {
              let tmp23 = null;
              if (callback2(sound2, id)) {
                tmp23 = null;
                if (callback3(currentUser, sound2, id, true)) {
                  tmp23 = null;
                  if (callback4(id)) {
                    (function playCustomJoinSound(c4, id) {
                      currentUser(customJoinSound[12]).playSoundLocally(id, c4, currentUser(customJoinSound[13]).LocalSoundTrigger.JOINED_VOICE_CHANNEL);
                      const obj = currentUser(customJoinSound[12]);
                      const result = currentUser(customJoinSound[14]).sendVoiceChannelCustomCallSoundEffect(id, c4, false);
                    })(sound2, id.id);
                  }
                }
              }
              sound2 = 3;
              obj = { value: null, done: true };
              obj[0] = tmp23;
              return obj;
            }
          }
          sound2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp33) {
          sound2 = tmp;
          throw tmp33;
        }
      }
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: c9, DEFAULT_SOUND_GUILD_ID: c10 } = MAX_LENGTH_SOUND_NAME);
({ Permissions: unpackModuleId, AnalyticEvents: closure_12 } = ME);
let result = require("set").fileFinishedImporting("modules/soundboard/SoundboardUtils.tsx");

export const getAmplitudinalSoundboardVolume = function getAmplitudinalSoundboardVolume() {
  const SoundboardSettings = explicitContentFromProto.SoundboardSettings;
  const setting = SoundboardSettings.getSetting();
  let num;
  if (setting != null) {
    num = setting.volume;
  }
  if (num == null) {
    num = 100;
  }
  return num;
};
export { hasPermissionToPlaySound };
export { canUseSoundboardSound };
export { canMakeSound };
export const playSound = function playSound(soundId, channelId) {
  let obj = _fetchDefaultSoundsFromApi2;
  obj.playSoundLocally(channelId, soundId, SoundButtonOverlay.LocalSoundTrigger.SOUNDBOARD);
  const result = VoiceChannelEffectSentLocation.sendVoiceChannelSoundboardEffect(channelId, soundId, false, arg2, arg3);
  const obj2 = VoiceChannelEffectSentLocation;
  obj = { type: "SOUNDBOARD_TRACK_USAGE", soundId: soundId.soundId };
  dispatcherDefault.dispatch(obj);
};
export const hasSetAnyCustomJoinSound = function hasSetAnyCustomJoinSound() {
  let guilds = closure_4.settings.guilds;
  guilds = undefined;
  if (guilds != null) {
    guilds = guilds.guilds;
  }
  if (guilds == null) {
    guilds = {};
  }
  const values = Object.values(guilds);
  return values.some((joinSound) => null != joinSound.joinSound);
};
export const maybePlayCustomJoinSound = function maybePlayCustomJoinSound() {
  const self = this;
  const apply = _maybePlayCustomJoinSound.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useSoundBoardDismissContentTypes = function useSoundBoardDismissContentTypes(isSoundboardButtonDisabled) {
  let flag = isSoundboardButtonDisabled.isSoundboardButtonDisabled;
  if (flag === undefined) {
    flag = false;
  }
  const items = [closure_7];
  const stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [];
  if (!flag) {
    let guilds = closure_4.settings.guilds;
    guilds = undefined;
    if (guilds != null) {
      guilds = guilds.guilds;
    }
    if (guilds == null) {
      guilds = {};
    }
    const _Object = Object;
    const values = Object.values(guilds);
    if (!values.some((joinSound) => null != joinSound.joinSound)) {
      const result = tmp(4223).ageEligibleForPremiumUpsell(stateFromStores);
      const tmpResult = tmp(4223);
      const obj5 = getPremiumPlanItemDefault;
      if (tmp9) {
        items1.push(tmp(1377).DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
      }
      tmp9 = getPremiumPlanItemDefault.canUseCustomCallSounds(stateFromStores) || result;
    }
  }
  return items1;
};
export const removeCustomJoinSound = function removeCustomJoinSound(closure_0) {
  const _require = closure_0;
  closure_1 = arg1;
  const result = _require(1374).updateUserGuildSettings(closure_0, (arg0) => {
    arg0.joinSound = undefined;
    let obj = { guildId: callback, changeType: callback(closure_1_2[13]).AnalyticsChangeType.REMOVED, soundType: callback(closure_1_2[13]).AnalyticsSoundType.ENTRY, location: callback2 };
    const guildId = obj.guildId;
    ({ changeType, soundType, soundSource, location: _location } = obj);
    obj = { location_stack: _location, guild_id: null, change_type: null, sound_type: null, sound_source: null };
    let num = 0;
    if ("" !== guildId) {
      const _Number = Number;
      num = Number(guildId);
    }
    obj[1] = num;
    obj[2] = changeType;
    obj[3] = soundType;
    obj[4] = soundSource;
    callback2(closure_1_2[23]).track(closure_1_12.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, obj);
  }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const updateCustomJoinSound = function updateCustomJoinSound(closure_0) {
  const _require = closure_0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const result = _require(1374).updateUserGuildSettings(closure_0, (joinSound) => {
    const AnalyticsSoundSource = callback(table[13]).AnalyticsSoundSource;
    if (lib.guildId === closure_1_10) {
      let CUSTOM = AnalyticsSoundSource.DEFAULT;
      let tmp5 = tmp4;
      let tmp6 = tmp3;
    } else {
      CUSTOM = AnalyticsSoundSource.CUSTOM;
      tmp5 = tmp4;
      tmp6 = tmp3;
    }
    if (null != joinSound.joinSound) {
      let ADDED = tmp6(tmp5[13]).AnalyticsChangeType.UPDATED;
    } else {
      ADDED = tmp6(tmp5[13]).AnalyticsChangeType.ADDED;
    }
    joinSound.joinSound = { soundId: lib.soundId, guildId: lib.guildId === closure_1_10 ? closure_1_9 : lib.guildId };
    let obj = lib(tmp5[23]);
    obj = { location_stack: table, guild_id: null, change_type: null, sound_type: null, sound_source: null };
    let num = 0;
    if ("" !== callback) {
      const _Number = Number;
      num = Number(callback);
    }
    obj[1] = num;
    obj[2] = ADDED;
    obj[3] = tmp6(tmp5[13]).AnalyticsSoundType.ENTRY;
    obj[4] = CUSTOM;
    obj.track(closure_1_12.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, obj);
  }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const trackCustomCallSoundExternallyDeleted = function trackCustomCallSoundExternallyDeleted(location_stack) {
  expandEventPropertiesDefault.track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: location_stack.location });
};
export const trackSoundFavorited = function trackSoundFavorited(location) {
  const sound = location.sound;
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { location: location.location, expression_type: ExpressionPickerViewType.SOUNDBOARD, expression_id: sound.soundId, expression_name: sound.name, expression_guild_id: sound.guildId };
  obj.trackWithMetadata(constants2.EXPRESSION_FAVORITED, obj);
};