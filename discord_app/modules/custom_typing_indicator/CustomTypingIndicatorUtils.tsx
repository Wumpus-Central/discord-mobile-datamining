// === Module 11600: CustomTypingIndicatorUtils ===

// Module 11600 (CustomTypingIndicatorUtils)
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import user2 from "user" /* 1385 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1398 */;
import _modDef3755 from "module_3755" /* 3755 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7842 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, usableGuildEmoji;

const Permissions = Constants.Permissions;
const EmojiIntention = EmojiConstants.EmojiIntention;
let obj = {};
obj[user2.TypingSuggestion.UNSPECIFIED] = _modDef3755["6Cdy4a"];
obj[user2.TypingSuggestion.YAPPING] = _modDef3755.E5VRaj;
obj[user2.TypingSuggestion.VENTING] = _modDef3755.xmxdPC;
obj[user2.TypingSuggestion.OVERSHARING] = _modDef3755["qGaH/9"];
obj[user2.TypingSuggestion.BARKING] = _modDef3755.M282uk;
obj[user2.TypingSuggestion.BABBLING] = _modDef3755.myNZDT;
obj[user2.TypingSuggestion.DAYDREAMING] = _modDef3755.F7RLTP;
obj[user2.TypingSuggestion.MEOWING] = _modDef3755.EfxyQI;
let obj2 = {};
obj2[user2.TypingSuggestion.UNSPECIFIED] = _modDef3755.kh4K4F;
obj2[user2.TypingSuggestion.YAPPING] = _modDef3755.m9AeqG;
obj2[user2.TypingSuggestion.VENTING] = _modDef3755["SZ0/Qu"];
obj2[user2.TypingSuggestion.OVERSHARING] = _modDef3755.N8cWE8;
obj2[user2.TypingSuggestion.BARKING] = _modDef3755.L5aWEN;
obj2[user2.TypingSuggestion.BABBLING] = _modDef3755.AoBaEw;
obj2[user2.TypingSuggestion.DAYDREAMING] = _modDef3755["3hOLod"];
obj2[user2.TypingSuggestion.MEOWING] = _modDef3755["0Z9/o9"];
let items = [user2.TypingSuggestion.UNSPECIFIED, user2.TypingSuggestion.YAPPING, user2.TypingSuggestion.VENTING, user2.TypingSuggestion.OVERSHARING, user2.TypingSuggestion.BARKING, user2.TypingSuggestion.BABBLING, user2.TypingSuggestion.DAYDREAMING, user2.TypingSuggestion.MEOWING];
let items1 = [user2.TypingIndicatorAnimation.PULSE, user2.TypingIndicatorAnimation.RING, user2.TypingIndicatorAnimation.WAVE];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [UserProfileSettingsStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (closure_0) {
        let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = UserProfileSettingsStore.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
      } else {
        let typingIndicatorStyle;
        let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = UserProfileSettingsStore.getPendingChanges().pendingCustomTypingIndicatorStyle;
        if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
          if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
            EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
          }
          typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        } else {
          const currentUser = UserStore.getCurrentUser();
          typingIndicatorStyle = undefined;
          if (currentUser != null) {
            typingIndicatorStyle = currentUser.typingIndicatorStyle;
          }
          if (typingIndicatorStyle == null) {
            typingIndicatorStyle = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
          }
        }
        return typingIndicatorStyle;
      }
    };
    items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  items = [UserProfileSettingsStore, UserStore];
  items1 = [arg0];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (closure_0) {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = UserProfileSettingsStore.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
      if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
        EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      }
      return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
    } else {
      let typingIndicatorStyle;
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = UserProfileSettingsStore.getPendingChanges().pendingCustomTypingIndicatorStyle;
      if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      } else {
        const currentUser = UserStore.getCurrentUser();
        typingIndicatorStyle = undefined;
        if (currentUser != null) {
          typingIndicatorStyle = currentUser.typingIndicatorStyle;
        }
        if (typingIndicatorStyle == null) {
          typingIndicatorStyle = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
      }
      return typingIndicatorStyle;
    }
  }, items1);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export const getSurpriseMeEmojiPool = function getSurpriseMeEmojiPool() {
  obj = UnicodeEmojisDefault;
  const categories = obj.getCategories();
  items = [
    ...categories.flatMap((item) => {
      obj = UnicodeEmojisDefault;
      const byCategory = obj.getByCategory(item);
      let mapped;
      if (byCategory != null) {
        mapped = byCategory.map((name) => ({ name: name.surrogates }));
      }
      if (mapped == null) {
        mapped = [];
      }
      return mapped;
    })
  ];
  const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
  HermesBuiltin.arraySpread(items, flattenedGuildIds.flatMap((item) => {
    usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(item);
    const found = usableGuildEmoji.filter((emoji) => {
      obj2 = { emoji, channel: null, guildId: "Array", intention: constants.TYPING_INDICATOR, bypassPremiumEmojiEntitlement: null };
      obj = closure_1_1(closure_1_3[10]);
      return null == obj.getEmojiUnavailableReason(obj2);
    });
    return found.map((id) => ({ id: id.id, name: id.name, animated: id.animated }));
  }), tmp2);
  return items;
};
export const pickRandomCustomTypingIndicatorEmojis = function pickRandomCustomTypingIndicatorEmojis(current) {
  let closure_0 = current;
  const bound = Math.min(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, current.length);
  set = new Set();
  if (set.size < bound) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      let addResult = set.add(Math.floor(Math.random() * current.length));
      size = set.size;
    } while (size < bound);
  }
  items = [...set];
  return items.map((item) => closure_0[item]);
};
export const getRandomCustomTypingIndicatorAnimation = function getRandomCustomTypingIndicatorAnimation() {
  return items1[Math.floor(Math, Math.random(Math) * items1.length)];
};
export function getCustomTypingIndicatorSuggestionPresets() {
  return items;
}
export const getCustomTypingIndicatorSuggestionMessage = function getCustomTypingIndicatorSuggestionMessage(typingSuggestion) {
  return obj[typingSuggestion];
};
export const getCustomTypingIndicatorSuggestionWithNameMessage = function getCustomTypingIndicatorSuggestionWithNameMessage(suggestion) {
  return obj2[suggestion];
};
export const getRandomCustomTypingIndicatorSuggestion = function getRandomCustomTypingIndicatorSuggestion() {
  return items[Math.floor(Math, Math.random(Math) * items.length)];
};
export const getViewableCustomTypingIndicatorConfig = function getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, user, guildEmojis) {
  let closure_0 = guildEmojis;
  if (null != channel.getGuildId()) {
    if (0 !== customTypingIndicatorConfig.emojis.length) {
      const emojis = customTypingIndicatorConfig.emojis;
      if (emojis.some((id) => {
        let tmp = null != id.id;
        if (tmp) {
          let tmp3;
          if (closure_0 != null) {
            tmp3 = tmp2[id.id];
          }
          tmp = null == tmp3;
        }
        return tmp;
      })) {
        channel = null;
        if (channel.isThread()) {
          channel = null;
          if (null != channel.parent_id) {
            channel = ChannelStore.getChannel(channel.parent_id);
          }
        }
        let tmp3 = user;
        const has = BigFlagUtilsAll.has;
        BigFlagUtilsAll;
        obj = { user, context: channel };
        const computePermissions = PermissionUtilsAll.computePermissions;
        PermissionUtilsAll;
        let tmp9 = customTypingIndicatorConfig;
        if (!has(computePermissions(obj), Permissions.USE_EXTERNAL_EMOJIS)) {
          obj2 = { emojis: [] };
          const merged = Object.assign(customTypingIndicatorConfig);
          tmp9 = obj2;
        }
        return tmp9;
      } else {
        return customTypingIndicatorConfig;
      }
    }
  }
  return customTypingIndicatorConfig;
};
export const useCurrentCustomTypingIndicatorConfig = tmp2;