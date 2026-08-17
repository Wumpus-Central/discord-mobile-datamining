// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx
import set from "set" /* 2 */;

let obj = { DEFAULT: "DEFAULT", YAPPING: "YAPPING", VENTING: "VENTING", OVERSHARING: "OVERSHARING", BARKING: "BARKING", BABBLING: "BABBLING", DAYDREAMING: "DAYDREAMING" };
obj = { emojis: [], typingSuggestion: obj.DEFAULT, animation: null };
const result = set.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx");

export const CustomTypingIndicatorAnimation = { PULSE: "PULSE", RING: "RING", WAVE: "WAVE" };
export const CustomTypingIndicatorSuggestion = obj;
export const CUSTOM_TYPING_INDICATOR_EMOJI_COUNT = 3;
export const EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = obj;
export const hasCustomTypingIndicatorEmojis = function hasCustomTypingIndicatorEmojis(emojis) {
  return 3 === emojis.length;
};
export const isValidCustomTypingIndicatorEmojiSelection = function isValidCustomTypingIndicatorEmojiSelection(arg0) {
  let tmp = 0 === arg0.length;
  if (!tmp) {
    tmp = 3 === arg0.length;
  }
  return tmp;
};
export const getEffectiveCustomTypingIndicatorAnimation = function getEffectiveCustomTypingIndicatorAnimation(config) {
  let animation = null;
  if (3 === config.emojis.length) {
    animation = config.animation;
  }
  return animation;
};