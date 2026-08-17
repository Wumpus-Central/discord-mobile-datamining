// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx
import messagesProxyDefault from "messagesProxy" /* 3403 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import CustomTypingIndicatorAnimation from "CustomTypingIndicatorAnimation" /* 14707 */;
import closure_3 from "_slicedToArray" /* 32 */;

require = arg1;
function getRandomCustomTypingIndicatorEmojis() {
  const items = [...closure_6];
  const items1 = [];
  if (items1.length < CustomTypingIndicatorAnimation.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT) {
    if (items.length > 0) {
      while (true) {
        let _Math = Math;
        let _Math2 = Math;
        let tmp = callback;
        let tmp2 = importDefault;
        let tmp3 = dependencyMap;
        obj = parseRawEmojiObjectDefault;
        let byName = obj.getByName(callback(items.splice(Math.floor(Math.random() * items.length), 1), 1)[0]);
        let surrogates;
        if (byName != null) {
          surrogates = byName.surrogates;
        }
        if (null != surrogates) {
          obj = { name: null };
          obj[0] = byName.surrogates;
          let arr = items1.push(obj);
        }
        let tmp7 = require;
        if (items1.length >= CustomTypingIndicatorAnimation.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT) {
          break;
        } else if (items.length <= 0) {
          break;
        }
      }
    }
  }
  return items1;
}
let obj = {};
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DEFAULT] = messagesProxyDefault["6Cdy4a"];
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.YAPPING] = messagesProxyDefault.E5VRaj;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.VENTING] = messagesProxyDefault.xmxdPC;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.OVERSHARING] = messagesProxyDefault["qGaH/9"];
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BARKING] = messagesProxyDefault.M282uk;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BABBLING] = messagesProxyDefault.myNZDT;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DAYDREAMING] = messagesProxyDefault.F7RLTP;
obj = {};
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DEFAULT] = messagesProxyDefault.kh4K4F;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.YAPPING] = messagesProxyDefault.m9AeqG;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.VENTING] = messagesProxyDefault["SZ0/Qu"];
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.OVERSHARING] = messagesProxyDefault.N8cWE8;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BARKING] = messagesProxyDefault.L5aWEN;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BABBLING] = messagesProxyDefault.AoBaEw;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DAYDREAMING] = messagesProxyDefault["3hOLod"];
let closure_6 = ["eyes", "100", "sparkling_heart", "star_struck", "heart", "laughing", "thumbsup", "watermelon", "yum", "books"];
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export { getRandomCustomTypingIndicatorEmojis };
export const getRandomCustomTypingIndicatorAnimation = function getRandomCustomTypingIndicatorAnimation() {
  const values = Object.values(CustomTypingIndicatorAnimation.CustomTypingIndicatorAnimation);
  return values[Math.floor(Math, Math.random(Math) * values.length)];
};
export const getCustomTypingIndicatorSuggestionPresets = function getCustomTypingIndicatorSuggestionPresets() {
  return Object.values(CustomTypingIndicatorAnimation.CustomTypingIndicatorSuggestion);
};
export const getCustomTypingIndicatorSuggestionMessage = function getCustomTypingIndicatorSuggestionMessage(first1) {
  return obj[first1];
};
export const getCustomTypingIndicatorSuggestionWithNameMessage = function getCustomTypingIndicatorSuggestionWithNameMessage(typingSuggestion) {
  return obj[typingSuggestion];
};
export const getRandomCustomTypingIndicatorSuggestion = function getRandomCustomTypingIndicatorSuggestion() {
  const values = Object.values(CustomTypingIndicatorAnimation.CustomTypingIndicatorSuggestion);
  return values[Math.floor(Math, Math.random(Math) * values.length)];
};
export const getRandomCustomTypingIndicatorConfig = function getRandomCustomTypingIndicatorConfig() {
  obj = { emojis: getRandomCustomTypingIndicatorEmojis(), animation: null, typingSuggestion: null };
  let values = Object.values(CustomTypingIndicatorAnimation.CustomTypingIndicatorAnimation);
  obj[1] = values[Math.floor(Math, Math.random(Math) * values.length)];
  values = Object.values(CustomTypingIndicatorAnimation.CustomTypingIndicatorSuggestion);
  obj[2] = values[Math.floor(Math, Math.random(Math) * values.length)];
  return obj;
};