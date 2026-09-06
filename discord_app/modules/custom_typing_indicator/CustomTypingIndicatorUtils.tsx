// === Module 11971: CustomTypingIndicatorUtils ===

// Module 11971 (CustomTypingIndicatorUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1392 */;
import _modDef3549 from "module_3549" /* 3549 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8160 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Permissions = fn(1074).Permissions;
const EmojiIntention = fn(1374).EmojiIntention;
let obj = {};
obj[fn(1379).TypingSuggestion.UNSPECIFIED] = _modDef3549["6Cdy4a"];
obj[fn(1379).TypingSuggestion.YAPPING] = _modDef3549.E5VRaj;
obj[fn(1379).TypingSuggestion.VENTING] = _modDef3549.xmxdPC;
obj[fn(1379).TypingSuggestion.OVERSHARING] = _modDef3549["qGaH/9"];
obj[fn(1379).TypingSuggestion.BARKING] = _modDef3549.M282uk;
obj[fn(1379).TypingSuggestion.BABBLING] = _modDef3549.myNZDT;
obj[fn(1379).TypingSuggestion.DAYDREAMING] = _modDef3549.F7RLTP;
obj[fn(1379).TypingSuggestion.MEOWING] = _modDef3549.EfxyQI;
obj = {};
obj[fn(1379).TypingSuggestion.UNSPECIFIED] = _modDef3549.kh4K4F;
obj[fn(1379).TypingSuggestion.YAPPING] = _modDef3549.m9AeqG;
obj[fn(1379).TypingSuggestion.VENTING] = _modDef3549["SZ0/Qu"];
obj[fn(1379).TypingSuggestion.OVERSHARING] = _modDef3549.N8cWE8;
obj[fn(1379).TypingSuggestion.BARKING] = _modDef3549.L5aWEN;
obj[fn(1379).TypingSuggestion.BABBLING] = _modDef3549.AoBaEw;
obj[fn(1379).TypingSuggestion.DAYDREAMING] = _modDef3549["3hOLod"];
obj[fn(1379).TypingSuggestion.MEOWING] = _modDef3549["0Z9/o9"];
let items = [fn(1379).TypingSuggestion.UNSPECIFIED, fn(1379).TypingSuggestion.YAPPING, fn(1379).TypingSuggestion.VENTING, fn(1379).TypingSuggestion.OVERSHARING, fn(1379).TypingSuggestion.BARKING, fn(1379).TypingSuggestion.BABBLING, fn(1379).TypingSuggestion.DAYDREAMING, fn(1379).TypingSuggestion.MEOWING];
let items1 = [fn(1379).TypingIndicatorAnimation.PULSE, fn(1379).TypingIndicatorAnimation.RING, fn(1379).TypingIndicatorAnimation.WAVE];
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
      closure_1_1(closure_1_3[10]);
      obj = { emoji, channel: null, guildId: "Array", intention: constants.TYPING_INDICATOR, bypassPremiumEmojiEntitlement: null };
      return null == obj.getEmojiUnavailableReason(obj);
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
  return obj[suggestion];
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
        obj = { user, context: null };
        obj.context = channel;
        let tmp7 = customTypingIndicatorConfig;
        if (!obj.has(obj2.computePermissions(obj), Permissions.USE_EXTERNAL_EMOJIS)) {
          obj = {};
          const merged = Object.assign(customTypingIndicatorConfig);
          obj.emojis = [];
          tmp7 = obj;
        }
        return tmp7;
      } else {
        return customTypingIndicatorConfig;
      }
    }
  }
  return customTypingIndicatorConfig;
};
export const useCurrentCustomTypingIndicatorConfig = function useCurrentCustomTypingIndicatorConfig(isTryItOut) {
  _require = isTryItOut;
  items = [UserProfileSettingsStore, UserStore];
  items1 = [isTryItOut];
  return require("initialize").useStateFromStores(items, () => {
    if (closure_0) {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = obj.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
      if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
        EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      }
      return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
    } else {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = obj.getPendingChanges().pendingCustomTypingIndicatorStyle;
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
};