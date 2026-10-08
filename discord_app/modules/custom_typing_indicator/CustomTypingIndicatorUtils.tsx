// === Module 11659: CustomTypingIndicatorUtils ===

// Module 11659 (CustomTypingIndicatorUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1410 */;
import _modDef3829 from "module_3829" /* 3829 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4721 */;
import EmojiStore from "EmojiStore" /* 5992 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8260 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1085).Permissions;
const EmojiIntention = fn(1392).EmojiIntention;
let obj = {};
obj[fn(1397).TypingSuggestion.UNSPECIFIED] = _modDef3829["6Cdy4a"];
obj[fn(1397).TypingSuggestion.YAPPING] = _modDef3829.E5VRaj;
obj[fn(1397).TypingSuggestion.VENTING] = _modDef3829.xmxdPC;
obj[fn(1397).TypingSuggestion.OVERSHARING] = _modDef3829["qGaH/9"];
obj[fn(1397).TypingSuggestion.BARKING] = _modDef3829.M282uk;
obj[fn(1397).TypingSuggestion.BABBLING] = _modDef3829.myNZDT;
obj[fn(1397).TypingSuggestion.DAYDREAMING] = _modDef3829.F7RLTP;
obj[fn(1397).TypingSuggestion.MEOWING] = _modDef3829.EfxyQI;
let obj2 = {};
obj2[fn(1397).TypingSuggestion.UNSPECIFIED] = _modDef3829.kh4K4F;
obj2[fn(1397).TypingSuggestion.YAPPING] = _modDef3829.m9AeqG;
obj2[fn(1397).TypingSuggestion.VENTING] = _modDef3829["SZ0/Qu"];
obj2[fn(1397).TypingSuggestion.OVERSHARING] = _modDef3829.N8cWE8;
obj2[fn(1397).TypingSuggestion.BARKING] = _modDef3829.L5aWEN;
obj2[fn(1397).TypingSuggestion.BABBLING] = _modDef3829.AoBaEw;
obj2[fn(1397).TypingSuggestion.DAYDREAMING] = _modDef3829["3hOLod"];
obj2[fn(1397).TypingSuggestion.MEOWING] = _modDef3829["0Z9/o9"];
let items = [fn(1397).TypingSuggestion.UNSPECIFIED, fn(1397).TypingSuggestion.YAPPING, fn(1397).TypingSuggestion.VENTING, fn(1397).TypingSuggestion.OVERSHARING, fn(1397).TypingSuggestion.BARKING, fn(1397).TypingSuggestion.BABBLING, fn(1397).TypingSuggestion.DAYDREAMING, fn(1397).TypingSuggestion.MEOWING];
let items1 = [fn(1397).TypingIndicatorAnimation.PULSE, fn(1397).TypingIndicatorAnimation.RING, fn(1397).TypingIndicatorAnimation.WAVE];
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export const getSurpriseMeEmojiPool = function getSurpriseMeEmojiPool() {
  const categories = UnicodeEmojisDefault.getCategories();
  items = [
    ...categories.flatMap((item) => {
      const byCategory = UnicodeEmojisDefault.getByCategory(item);
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
  HermesBuiltin.arraySpread(flattenedGuildIds.flatMap((item) => {
    usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(item);
    const found = usableGuildEmoji.filter((emoji) => {
      obj2 = { emoji, channel: null, guildId: "Array", intention: constants.TYPING_INDICATOR, bypassPremiumEmojiEntitlement: null };
      return null == closure_1_1(closure_1_3[10]).getEmojiUnavailableReason(obj2);
    });
    return found.map((id) => ({ id: id.id, name: id.name, animated: id.animated }));
  }), tmp);
  return items;
};
export const pickRandomCustomTypingIndicatorEmojis = function pickRandomCustomTypingIndicatorEmojis(current) {
  let size;
  closure_0 = current;
  const bound = Math.min(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, current.length);
  const set = new Set();
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
  closure_0 = guildEmojis;
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
        obj = BigFlagUtilsAll;
        const obj3 = { user, context: channel };
        let tmp7 = customTypingIndicatorConfig;
        if (!obj.has(obj2.computePermissions(obj3), Permissions.USE_EXTERNAL_EMOJIS)) {
          const obj4 = {};
          const merged = Object.assign(customTypingIndicatorConfig);
          obj4.emojis = [];
          tmp7 = obj4;
        }
        return tmp7;
      } else {
        return customTypingIndicatorConfig;
      }
    }
  }
  return customTypingIndicatorConfig;
};
export const useCurrentCustomTypingIndicatorConfig = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentCustomTypingIndicatorConfig(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [UserProfileSettingsStore, UserStore];
    cResult[0] = items;
    let first = items;
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
        let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = UserProfileSettingsStore.getPendingChanges().pendingCustomTypingIndicatorStyle;
        if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
          if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
            EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
          }
          let typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useCurrentCustomTypingIndicatorConfig(arg0) {
  _require = arg0;
  items = [UserProfileSettingsStore, UserStore];
  items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (closure_0) {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = UserProfileSettingsStore.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
      if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
        EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      }
      return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
    } else {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = UserProfileSettingsStore.getPendingChanges().pendingCustomTypingIndicatorStyle;
      if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        let typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
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