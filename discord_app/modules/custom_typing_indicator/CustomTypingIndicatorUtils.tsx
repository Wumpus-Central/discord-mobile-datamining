// === Module 11611: items ===

// Module 11611 (items)
import fromStringAll from "fromString" /* 506 */;
import messagesProxyDefault from "messagesProxy" /* 3471 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4102 */;
import closure_4 from "getEmojiToGroupId" /* 5348 */;
import closure_5 from "handleFormOpen" /* 8484 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "insertUnsortedGuilds" /* 5328 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;
import { EmojiIntention } from "set" /* 1925 */;

const require = arg1;
let obj = {};
obj[require("create").TypingSuggestion.UNSPECIFIED] = messagesProxyDefault["6Cdy4a"];
obj[require("create").TypingSuggestion.YAPPING] = messagesProxyDefault.E5VRaj;
obj[require("create").TypingSuggestion.VENTING] = messagesProxyDefault.xmxdPC;
obj[require("create").TypingSuggestion.OVERSHARING] = messagesProxyDefault["qGaH/9"];
obj[require("create").TypingSuggestion.BARKING] = messagesProxyDefault.M282uk;
obj[require("create").TypingSuggestion.BABBLING] = messagesProxyDefault.myNZDT;
obj[require("create").TypingSuggestion.DAYDREAMING] = messagesProxyDefault.F7RLTP;
obj[require("create").TypingSuggestion.MEOWING] = messagesProxyDefault.EfxyQI;
obj = {};
obj[require("create").TypingSuggestion.UNSPECIFIED] = messagesProxyDefault.kh4K4F;
obj[require("create").TypingSuggestion.YAPPING] = messagesProxyDefault.m9AeqG;
obj[require("create").TypingSuggestion.VENTING] = messagesProxyDefault["SZ0/Qu"];
obj[require("create").TypingSuggestion.OVERSHARING] = messagesProxyDefault.N8cWE8;
obj[require("create").TypingSuggestion.BARKING] = messagesProxyDefault.L5aWEN;
obj[require("create").TypingSuggestion.BABBLING] = messagesProxyDefault.AoBaEw;
obj[require("create").TypingSuggestion.DAYDREAMING] = messagesProxyDefault["3hOLod"];
obj[require("create").TypingSuggestion.MEOWING] = messagesProxyDefault["0Z9/o9"];
let items = [require("create").TypingSuggestion.UNSPECIFIED, require("create").TypingSuggestion.YAPPING, require("create").TypingSuggestion.VENTING, require("create").TypingSuggestion.OVERSHARING, require("create").TypingSuggestion.BARKING, require("create").TypingSuggestion.BABBLING, require("create").TypingSuggestion.DAYDREAMING, require("create").TypingSuggestion.MEOWING];
let items1 = [require("create").TypingIndicatorAnimation.PULSE, require("create").TypingIndicatorAnimation.RING, require("create").TypingIndicatorAnimation.WAVE];
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export const getSurpriseMeEmojiPool = function getSurpriseMeEmojiPool() {
  const categories = parseRawEmojiObjectDefault.getCategories();
  items = [
    ...categories.flatMap((name) => {
      const byCategory = callback(table[9]).getByCategory(name);
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
  flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
  HermesBuiltin.arraySpread(flattenedGuildIds.flatMap((arg0) => {
    usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(arg0);
    const found = usableGuildEmoji.filter((emoji) => {
      obj = callback(table[10]);
      obj = { emoji, channel: null, guildId: "Array", intention: true, bypassPremiumEmojiEntitlement: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl" };
      obj[3] = constants.TYPING_INDICATOR;
      return null == obj.getEmojiUnavailableReason(obj);
    });
    return found.map((id) => ({ id: id.id, name: id.name, animated: id.animated }));
  }), tmp);
  return items;
};
export const pickRandomCustomTypingIndicatorEmojis = function pickRandomCustomTypingIndicatorEmojis(current) {
  let size;
  const _require = current;
  const bound = Math.min(_require(1937).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, current.length);
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
  return items.map((arg0) => table[arg0]);
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
export const getViewableCustomTypingIndicatorConfig = function getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, getGuildId, arg2, guildEmojis) {
  closure_0 = guildEmojis;
  if (null != getGuildId.getGuildId()) {
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
        let channel = null;
        if (getGuildId.isThread()) {
          channel = null;
          if (null != getGuildId.parent_id) {
            channel = channel.getChannel(getGuildId.parent_id);
          }
        }
        obj = fromStringAll;
        obj = { user: null, context: null };
        obj[0] = arg2;
        if (channel == null) {
          channel = getGuildId;
        }
        obj[1] = channel;
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
  const _require = isTryItOut;
  items = [closure_5, closure_8];
  items1 = [isTryItOut];
  return _require(589).useStateFromStores(items, () => {
    if (isTryItOut) {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = obj.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
      if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
        EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = isTryItOut(closure_1_3[11]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      }
      return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
    } else {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = obj.getPendingChanges().pendingCustomTypingIndicatorStyle;
      if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = isTryItOut(closure_1_3[11]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        let typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      } else {
        const currentUser = closure_1_8.getCurrentUser();
        typingIndicatorStyle = undefined;
        if (currentUser != null) {
          typingIndicatorStyle = currentUser.typingIndicatorStyle;
        }
        if (typingIndicatorStyle == null) {
          typingIndicatorStyle = isTryItOut(closure_1_3[11]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
      }
      return typingIndicatorStyle;
    }
  }, items1);
};