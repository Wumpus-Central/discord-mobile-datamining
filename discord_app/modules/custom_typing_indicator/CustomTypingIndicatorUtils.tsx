// === Module 11199: items ===

// Module 11199 (items)
import messagesProxyDefault from "messagesProxy" /* 3406 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4037 */;
import closure_3 from "getEmojiToGroupId" /* 6764 */;
import closure_4 from "insertUnsortedGuilds" /* 5083 */;
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
      const byCategory = callback(table[5]).getByCategory(name);
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
  const flattenedGuildIds = store.getFlattenedGuildIds();
  HermesBuiltin.arraySpread(flattenedGuildIds.flatMap((arg0) => {
    usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(arg0);
    const found = usableGuildEmoji.filter((emoji) => {
      obj = callback(table[6]);
      obj = { emoji, channel: null, guildId: "Array", intention: "\u{1F9DC}\u{1F3FC}\u200D\u2640\uFE0F" };
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
  const bound = Math.min(_require(11197).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, current.length);
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
  return items.map((arg0) => items[arg0]);
};
export const getRandomCustomTypingIndicatorEmojis = function getRandomCustomTypingIndicatorEmojis() {
  let size;
  const categories = parseRawEmojiObjectDefault.getCategories();
  items = [
    ...categories.flatMap((name) => {
      const byCategory = callback(table[5]).getByCategory(name);
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
  const flattenedGuildIds = store.getFlattenedGuildIds();
  HermesBuiltin.arraySpread(flattenedGuildIds.flatMap((arg0) => {
    usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(arg0);
    const found = usableGuildEmoji.filter((emoji) => {
      obj = callback(table[6]);
      obj = { emoji, channel: null, guildId: "Array", intention: "\u{1F9DC}\u{1F3FC}\u200D\u2640\uFE0F" };
      obj[3] = constants.TYPING_INDICATOR;
      return null == obj.getEmojiUnavailableReason(obj);
    });
    return found.map((id) => ({ id: id.id, name: id.name, animated: id.animated }));
  }), tmp);
  const bound = Math.min(items(11197).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, items.length);
  const set = new Set();
  if (set.size < bound) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      let addResult = set.add(Math.floor(Math.random() * items.length));
      size = set.size;
    } while (size < bound);
  }
  items1 = [...set];
  return items1.map((arg0) => items[arg0]);
};
export const getRandomCustomTypingIndicatorAnimation = function getRandomCustomTypingIndicatorAnimation() {
  return items1[Math.floor(Math, Math.random(Math) * items1.length)];
};
export function getCustomTypingIndicatorSuggestionPresets() {
  return items;
}
export const getCustomTypingIndicatorSuggestionMessage = function getCustomTypingIndicatorSuggestionMessage(first1) {
  return obj[first1];
};
export const getCustomTypingIndicatorSuggestionWithNameMessage = function getCustomTypingIndicatorSuggestionWithNameMessage(suggestion) {
  return obj[suggestion];
};
export const getRandomCustomTypingIndicatorSuggestion = function getRandomCustomTypingIndicatorSuggestion() {
  return items[Math.floor(Math, Math.random(Math) * items.length)];
};