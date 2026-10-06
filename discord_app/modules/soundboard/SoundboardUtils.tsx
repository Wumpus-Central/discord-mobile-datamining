// discord_app/modules/soundboard/SoundboardUtils.tsx
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react from "../../../_runtime/00576_react.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import ExpressionPickerConstants from "../expression_picker/ExpressionPickerConstants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import UserUtils from "../../utils/UserUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import SoundboardTypes from "SoundboardTypes.tsx";
import SoundboardActionCreators from "SoundboardActionCreators.tsx";
import useMuteStates from "../video_calls/useMuteStates.tsx";
import VoiceChannelEffectsActionCreators from "../voice_channel_effects/VoiceChannelEffectsActionCreators.tsx";
import getCurrentVoiceChannelDefault from "../rpc/helpers/getCurrentVoiceChannel.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import SoundboardStore from "SoundboardStore.tsx";
import SoundboardConstants from "SoundboardConstants.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c4, dependencyMap, isSoundboardButtonDisabled;

let c10;
let c9;
let closure_12;
let unpackModuleId;
const f93564 = (joinSound) => null != joinSound.joinSound;
function hasPermissionToPlaySound(guildId, guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let canResult =
    null == guild_id ||
    PermissionStore.can(unpackModuleId.USE_EXTERNAL_SOUNDS, guild_id) ||
    guildId.guildId === authStore;
  if (!canResult) {
    let guild_id1;
    guildId = guildId.guildId;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    canResult = guildId === guild_id1;
  }
  return canResult;
}
function canUseSoundboardSound(stateFromStores, guildId, guild_id) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  obj = PremiumUtilsDefault;
  let result = obj.canUseSoundboardEverywhere(stateFromStores);
  if (!result) {
    guild_id = undefined;
    guildId = guildId.guildId;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    result = guildId === guild_id;
  }
  if (!result) {
    result = guildId.guildId === authStore;
  }
  if (result) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    let canResult =
      null == guild_id1 ||
      PermissionStore.can(unpackModuleId.USE_EXTERNAL_SOUNDS, guild_id) ||
      guildId.guildId === authStore;
    if (!canResult) {
      let guild_id2;
      const guildId2 = guildId.guildId;
      if (guild_id != null) {
        guild_id2 = guild_id.guild_id;
      }
      canResult = guildId2 === guild_id2;
    }
    result = canResult;
  }
  if (result) {
    let available = !flag;
    if (flag) {
      available = guildId.available;
    }
    result = available;
  }
  return result;
}
function canMakeSound(channel) {
  obj = useMuteStates;
  const obj2 = { channel };
  const muteStates = obj.getMuteStates(obj2);
  return !muteStates.mute && !muteStates.suppress;
}
let obj = function _maybePlayCustomJoinSound() {
  obj = _asyncToGenerator(async (arg0) => {
    let tmp51Result2;
    function playCustomJoinSound(sound, id) {
      obj = closure_1_0(closure_1_2[12]);
      obj.playSoundLocally(id, sound);
      const obj2 = closure_1_0(closure_1_2[13]);
      const result = obj2.sendVoiceChannelCustomCallSoundEffect(id, sound, false);
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let guildId;
        let sound;
        let id;
        let customJoinSound;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp2;
            currentUser = undefined;
            guildId = undefined;
            sound = undefined;
            currentUser = currentUser.getCurrentUser();
            const tmp50 = getCurrentVoiceChannelDefault();
            id = tmp50;
            const obj9 = require("useCustomJoinSound");
            customJoinSound = obj9.getCustomJoinSound(closure_0);
            if (null != tmp50) {
              if (!set.has(tmp50.type)) {
                if (null != customJoinSound) {
                  const tmp48Result = PremiumUtilsDefault;
                  if (tmp48Result.canUseCustomCallSounds(currentUser)) {
                    const tmp51Result = require("canChannelUseSoundboard");
                    if (tmp51Result.canSelectedVoiceChannelUseSoundboard()) {
                      c3 = 1;
                      c4 = 1;
                      const obj4 = { value: tmp51Result2.maybeFetchSoundboardSounds(), done: false };
                      tmp51Result2 = require("SoundboardActionCreators");
                      return obj4;
                    }
                  }
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (customJoinSound.guildId === closure_130_9) {
            guildId = closure_130_10;
          } else {
            guildId = customJoinSound.guildId;
          }
          sound = closure_130_8.getSound(guildId, customJoinSound.soundId);
          if (null != sound) {
            let tmp22 = null;
            if (closure_130_14(sound, id)) {
              tmp22 = null;
              if (closure_130_15(currentUser, sound, id, true)) {
                tmp22 = null;
                if (closure_130_16(id)) {
                  playCustomJoinSound(sound, id.id);
                }
              }
            }
            c4 = 3;
            obj = { value: tmp22, done: true };
            return obj;
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp32) {
        c4 = 3;
        throw tmp32;
      }
    }
  });
  return obj(...arguments);
};
let closure_5 = ChannelRecord.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
({ CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: c9, DEFAULT_SOUND_GUILD_ID: c10 } = SoundboardConstants);
({ Permissions: unpackModuleId, AnalyticEvents: closure_12 } = Constants);
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSoundboardButtonDisabled) => {
      let currentUser;
      let tmp5;
      let tmp6;
      obj = react;
      const cResult = obj.c(5);
      isSoundboardButtonDisabled = isSoundboardButtonDisabled.isSoundboardButtonDisabled;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === stateFromStores) {
        let tmp9;
        if (cResult[3] === (undefined !== isSoundboardButtonDisabled && isSoundboardButtonDisabled)) {
          tmp9 = cResult[4];
        }
        return tmp9;
      }
      const items1 = [];
      if (!(undefined !== isSoundboardButtonDisabled && isSoundboardButtonDisabled)) {
        const guilds = UserSettingsProtoStore.settings.guilds;
        let obj2;
        if (guilds != null) {
          obj2 = guilds.guilds;
        }
        if (obj2 == null) {
          obj2 = {};
        }
        const _Object = Object;
        const values = Object.values(obj2);
        if (!values.some(f93564)) {
          const tmpResult2 = UserUtils;
          const result = tmpResult2.ageEligibleForPremiumUpsell(stateFromStores);
          const obj6 = PremiumUtilsDefault;
          const tmp14 = obj6.canUseCustomCallSounds(stateFromStores) || result;
          if (tmp14) {
            items1.push(dismissible_content.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
          }
        }
      }
      cResult[2] = stateFromStores;
      cResult[3] = undefined !== isSoundboardButtonDisabled && isSoundboardButtonDisabled;
      cResult[4] = items1;
      tmp9 = items1;
    }
  : (isSoundboardButtonDisabled) => {
      let currentUser;
      let flag = isSoundboardButtonDisabled.isSoundboardButtonDisabled;
      if (flag === undefined) {
        flag = false;
      }
      const items = [UserStore];
      obj = useStateFromStores;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [];
      if (!flag) {
        const guilds = UserSettingsProtoStore.settings.guilds;
        let obj2;
        if (guilds != null) {
          obj2 = guilds.guilds;
        }
        if (obj2 == null) {
          obj2 = {};
        }
        const _Object = Object;
        const values = Object.values(obj2);
        if (!values.some(f93564)) {
          const tmpResult = UserUtils;
          const result = tmpResult.ageEligibleForPremiumUpsell(stateFromStores);
          const obj5 = PremiumUtilsDefault;
          const tmp9 = obj5.canUseCustomCallSounds(stateFromStores) || result;
          if (tmp9) {
            items1.push(dismissible_content.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
          }
        }
      }
      return items1;
    };
function hasSetAnyCustomJoinSound() {
  const guilds = UserSettingsProtoStore.settings.guilds;
  obj = undefined;
  if (guilds != null) {
    obj = guilds.guilds;
  }
  if (obj == null) {
    obj = {};
  }
  const values = Object.values(obj);
  return values.some(f93564);
}
let result = size.fileFinishedImporting("modules/soundboard/SoundboardUtils.tsx");

export const getAmplitudinalSoundboardVolume = function getAmplitudinalSoundboardVolume() {
  const SoundboardSettings = UserSettings.SoundboardSettings;
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
export const playSound = function playSound(soundId, id, items, arg3) {
  obj = SoundboardActionCreators;
  obj.playSoundLocally(id, soundId);
  const obj2 = VoiceChannelEffectsActionCreators;
  const result = obj2.sendVoiceChannelSoundboardEffect(id, soundId, false, items, arg3);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "SOUNDBOARD_TRACK_USAGE", soundId: soundId.soundId };
  obj3.dispatch(obj4);
};
export const playEcho = function playEcho(soundId, id, arg2) {
  obj = SoundboardActionCreators;
  obj.playSoundLocally(id, soundId);
  const obj2 = VoiceChannelEffectsActionCreators;
  const result = obj2.sendVoiceChannelSoundboardEcho(id, soundId, false, arg2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "SOUNDBOARD_TRACK_USAGE", soundId: soundId.soundId };
  obj3.dispatch(obj4);
};
export { hasSetAnyCustomJoinSound };
export const maybePlayCustomJoinSound = function maybePlayCustomJoinSound() {
  return obj(...arguments);
};
export const useSoundBoardDismissContentTypes = tmp4;
export const removeCustomJoinSound = function removeCustomJoinSound(guildId, _location) {
  _require = guildId;
  obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(
    guildId,
    (arg0) => {
      let changeType;
      let num;
      let soundSource;
      let soundType;
      arg0.joinSound = undefined;
      obj = {
        guildId,
        changeType: SoundboardTypes.AnalyticsChangeType.REMOVED,
        soundType: SoundboardTypes.AnalyticsSoundType.ENTRY,
        location: _location,
      };
      guildId = obj.guildId;
      ({ changeType, soundType, soundSource, location: _location } = obj);
      const obj2 = {
        location_stack: _location,
        guild_id: num,
        change_type: changeType,
        sound_type: soundType,
        sound_source: soundSource,
      };
      num = 0;
      const track = AnalyticsUtilsDefault.track;
      const USER_CUSTOM_CALL_SOUND_SETTING_UPDATED = constants.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED;
      AnalyticsUtilsDefault;
      if ("" !== guildId) {
        const _Number = Number;
        num = Number(guildId);
      }
      track(USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, obj2);
    },
    require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export const updateCustomJoinSound = function updateCustomJoinSound(guildId, guildId2, location_stack) {
  _require = guildId;
  dependencyMap = location_stack;
  obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(
    guildId,
    (joinSound) => {
      let ADDED;
      let CUSTOM;
      let num;
      let tmp6;
      const AnalyticsSoundSource = SoundboardTypes.AnalyticsSoundSource;
      if (guildId.guildId === authStore) {
        CUSTOM = AnalyticsSoundSource.DEFAULT;
        tmp6 = require;
      } else {
        CUSTOM = AnalyticsSoundSource.CUSTOM;
        tmp6 = require;
      }
      if (null != joinSound.joinSound) {
        ADDED = tmp6(5812).AnalyticsChangeType.UPDATED;
      } else {
        ADDED = tmp6(5812).AnalyticsChangeType.ADDED;
      }
      joinSound.joinSound = {
        soundId: guildId.soundId,
        guildId: guildId.guildId === authStore ? React4 : guildId.guildId,
      };
      const ENTRY = tmp6(5812).AnalyticsSoundType.ENTRY;
      obj = { location_stack, guild_id: num, change_type: ADDED, sound_type: ENTRY, sound_source: CUSTOM };
      num = 0;
      const track = AnalyticsUtilsDefault.track;
      const USER_CUSTOM_CALL_SOUND_SETTING_UPDATED = constants.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED;
      AnalyticsUtilsDefault;
      if ("" !== closure_0) {
        const _Number = Number;
        num = Number(closure_0);
      }
      track(USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, obj);
    },
    require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export const trackCustomCallSoundExternallyDeleted = function trackCustomCallSoundExternallyDeleted(location) {
  const _location = location.location;
  obj = AnalyticsUtilsDefault;
  obj.track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: _location });
};
export const trackSoundFavorited = function trackSoundFavorited(sound) {
  sound = sound.sound;
  const _location = sound.location;
  obj = AppAnalyticsUtilsDefault;
  const obj2 = {
    location: _location,
    expression_type: ExpressionPickerViewType.SOUNDBOARD,
    expression_id: sound.soundId,
    expression_name: sound.name,
    expression_guild_id: sound.guildId,
  };
  obj.trackWithMetadata(constants2.EXPRESSION_FAVORITED, obj2);
};
