// === Module 13718: CustomTypingIndicatorUtils ===

// Module 13718 (CustomTypingIndicatorUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import user2 from "user" /* 1391 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1405 */;
import _modDef3870 from "module_3870" /* 3870 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4960 */;
import EmojiStore from "EmojiStore" /* 6796 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8731 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;
import UserStore from "UserStore" /* 1383 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1072).Permissions;
const EmojiIntention = fn(1386).EmojiIntention;
let obj = {};
obj[fn(1391).TypingSuggestion.UNSPECIFIED] = _modDef3870["6Cdy4a"];
obj[fn(1391).TypingSuggestion.YAPPING] = _modDef3870.E5VRaj;
obj[fn(1391).TypingSuggestion.VENTING] = _modDef3870.xmxdPC;
obj[fn(1391).TypingSuggestion.OVERSHARING] = _modDef3870["qGaH/9"];
obj[fn(1391).TypingSuggestion.BARKING] = _modDef3870.M282uk;
obj[fn(1391).TypingSuggestion.BABBLING] = _modDef3870.myNZDT;
obj[fn(1391).TypingSuggestion.DAYDREAMING] = _modDef3870.F7RLTP;
obj[fn(1391).TypingSuggestion.MEOWING] = _modDef3870.EfxyQI;
let obj2 = {};
obj2[fn(1391).TypingSuggestion.UNSPECIFIED] = _modDef3870.kh4K4F;
obj2[fn(1391).TypingSuggestion.YAPPING] = _modDef3870.m9AeqG;
obj2[fn(1391).TypingSuggestion.VENTING] = _modDef3870["SZ0/Qu"];
obj2[fn(1391).TypingSuggestion.OVERSHARING] = _modDef3870.N8cWE8;
obj2[fn(1391).TypingSuggestion.BARKING] = _modDef3870.L5aWEN;
obj2[fn(1391).TypingSuggestion.BABBLING] = _modDef3870.AoBaEw;
obj2[fn(1391).TypingSuggestion.DAYDREAMING] = _modDef3870["3hOLod"];
obj2[fn(1391).TypingSuggestion.MEOWING] = _modDef3870["0Z9/o9"];
let items = [fn(1391).TypingSuggestion.UNSPECIFIED, fn(1391).TypingSuggestion.YAPPING, fn(1391).TypingSuggestion.VENTING, fn(1391).TypingSuggestion.OVERSHARING, fn(1391).TypingSuggestion.BARKING, fn(1391).TypingSuggestion.BABBLING, fn(1391).TypingSuggestion.DAYDREAMING, fn(1391).TypingSuggestion.MEOWING];
let items1 = [fn(1391).TypingIndicatorAnimation.PULSE, fn(1391).TypingIndicatorAnimation.RING, fn(1391).TypingIndicatorAnimation.WAVE];
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export function getSurpriseMeEmojiPool() {
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
}
export function pickRandomCustomTypingIndicatorEmojis(current) {
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
}
export function getRandomCustomTypingIndicatorAnimation() {
  return items1[Math.floor(Math, Math.random(Math) * items1.length)];
}
export function getCustomTypingIndicatorSuggestionPresets() {
  return items;
}
export function getCustomTypingIndicatorSuggestionMessage(typingSuggestion) {
  let tmp2 = obj[typingSuggestion];
  if (tmp2 == null) {
    tmp2 = tmp[user2.TypingSuggestion.UNSPECIFIED];
  }
  return tmp2;
}
export function getCustomTypingIndicatorSuggestionWithNameMessage(suggestion) {
  let tmp2 = obj2[suggestion];
  if (tmp2 == null) {
    tmp2 = tmp[user2.TypingSuggestion.UNSPECIFIED];
  }
  return tmp2;
}
export function getRandomCustomTypingIndicatorSuggestion() {
  return items[Math.floor(Math, Math.random(Math) * items.length)];
}
export function getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, user, guildEmojis) {
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
}
export function useCurrentCustomTypingIndicatorConfig(isTryItOut) {
  _require = isTryItOut;
  items = [UserProfileSettingsStore, UserStore];
  items1 = [isTryItOut];
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
}