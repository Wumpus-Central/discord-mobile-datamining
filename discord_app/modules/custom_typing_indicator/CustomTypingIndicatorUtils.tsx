// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx
import _slicedToArray from "_slicedToArray";
import { parseRawEmojiObject } from "../emojis/UnicodeEmojis.tsx";
import { CustomTypingIndicatorAnimation } from "CustomTypingIndicatorTypes.tsx";

const require = arg1;
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
        let obj = parseRawEmojiObject;
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
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DEFAULT] = require("messagesProxy")["6Cdy4a"];
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.YAPPING] = require("messagesProxy").E5VRaj;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.VENTING] = require("messagesProxy").xmxdPC;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.OVERSHARING] = require("messagesProxy")["qGaH/9"];
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BARKING] = require("messagesProxy").M282uk;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BABBLING] = require("messagesProxy").myNZDT;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DAYDREAMING] = require("messagesProxy").F7RLTP;
obj = {};
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DEFAULT] = require("messagesProxy").kh4K4F;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.YAPPING] = require("messagesProxy").m9AeqG;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.VENTING] = require("messagesProxy")["SZ0/Qu"];
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.OVERSHARING] = require("messagesProxy").N8cWE8;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BARKING] = require("messagesProxy").L5aWEN;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.BABBLING] = require("messagesProxy").AoBaEw;
obj[require("CustomTypingIndicatorAnimation").CustomTypingIndicatorSuggestion.DAYDREAMING] = require("messagesProxy")["3hOLod"];
let closure_6 = ["eyes", "100", "sparkling_heart", "star_struck", "heart", "laughing", "thumbsup", "watermelon", "yum", "books"];
const result = require("messagesProxy").fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

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
  const obj = { emojis: getRandomCustomTypingIndicatorEmojis(), animation: null, typingSuggestion: null };
  let values = Object.values(CustomTypingIndicatorAnimation.CustomTypingIndicatorAnimation);
  obj[1] = values[Math.floor(Math, Math.random(Math) * values.length)];
  values = Object.values(CustomTypingIndicatorAnimation.CustomTypingIndicatorSuggestion);
  obj[2] = values[Math.floor(Math, Math.random(Math) * values.length)];
  return obj;
};