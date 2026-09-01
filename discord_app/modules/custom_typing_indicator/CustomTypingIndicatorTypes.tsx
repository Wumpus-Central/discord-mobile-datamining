// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx
import set from "../../../_runtime/00002_set.js";
import create from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";

let obj = {
  emojis: [],
  typingSuggestion: create.TypingSuggestion.UNSPECIFIED,
  animation: create.TypingIndicatorAnimation.UNSPECIFIED,
};
const result = set.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx");

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
export const getEffectiveCustomTypingIndicatorAnimation = function getEffectiveCustomTypingIndicatorAnimation(map) {
  if (3 === map.emojis.length) {
    let UNSPECIFIED = map.animation;
  } else {
    UNSPECIFIED = create.TypingIndicatorAnimation.UNSPECIFIED;
  }
  return UNSPECIFIED;
};
export const serializeTypingIndicatorStyle = function serializeTypingIndicatorStyle(typingIndicatorStyle) {
  const emojis = typingIndicatorStyle.emojis;
  return {
    emojis: emojis.map((id) => {
      if (null != id.id) {
        let obj = { custom_emoji_id: null };
        obj[0] = id.id;
      } else {
        obj = { unicode_emoji: null };
        obj[0] = id.name;
      }
      return obj;
    }),
    animation: typingIndicatorStyle.animation,
    typing_suggestion: typingIndicatorStyle.typingSuggestion,
  };
};
export const parseServerTypingIndicatorStyle = function parseServerTypingIndicatorStyle(typing_indicator_style) {
  let tmp = null;
  if (null != typing_indicator_style) {
    let emojis = typing_indicator_style.emojis;
    if (emojis == null) {
      emojis = [];
    }
    let obj = { emojis: null, typingSuggestion: null, animation: null };
    obj[0] = emojis.map((custom_emoji_id) => {
      if (null != custom_emoji_id.custom_emoji_id) {
        let obj = { id: null, name: "", animated: null };
        ({ custom_emoji_id: obj2[0], animated } = custom_emoji_id);
        if (animated == null) {
          animated = false;
        }
        obj[2] = animated;
      } else {
        let str = custom_emoji_id.unicode_emoji;
        if (str == null) {
          str = "";
        }
        obj = { name: null };
        obj[0] = str;
      }
      return obj;
    });
    let UNSPECIFIED = typing_indicator_style.typing_suggestion;
    if (UNSPECIFIED == null) {
      UNSPECIFIED = create.TypingSuggestion.UNSPECIFIED;
    }
    obj[1] = UNSPECIFIED;
    let UNSPECIFIED2 = typing_indicator_style.animation;
    if (UNSPECIFIED2 == null) {
      UNSPECIFIED2 = create.TypingIndicatorAnimation.UNSPECIFIED;
    }
    obj[2] = UNSPECIFIED2;
    tmp = obj;
  }
  return tmp;
};
