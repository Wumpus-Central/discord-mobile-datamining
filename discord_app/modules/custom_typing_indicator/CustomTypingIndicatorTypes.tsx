// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx
import user from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  emojis: [],
  typingSuggestion: user.TypingSuggestion.UNSPECIFIED,
  animation: user.TypingIndicatorAnimation.UNSPECIFIED,
};
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx");

export const CUSTOM_TYPING_INDICATOR_EMOJI_COUNT = 3;
export const EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = obj;
export const hasCustomTypingIndicatorEmojis = function hasCustomTypingIndicatorEmojis(emojis) {
  return 3 === emojis.length;
};
export const isValidCustomTypingIndicatorEmojiSelection = function isValidCustomTypingIndicatorEmojiSelection(arg0) {
  return 0 === arg0.length || 3 === arg0.length;
};
export const getEffectiveCustomTypingIndicatorAnimation = function getEffectiveCustomTypingIndicatorAnimation(config) {
  let UNSPECIFIED;
  if (3 === config.emojis.length) {
    UNSPECIFIED = config.animation;
  } else {
    UNSPECIFIED = user.TypingIndicatorAnimation.UNSPECIFIED;
  }
  return UNSPECIFIED;
};
export const serializeTypingIndicatorStyle = function serializeTypingIndicatorStyle(typingIndicatorStyle) {
  let emojis;
  let obj = {
    emojis: emojis.map((id) => {
      let obj;
      if (null != id.id) {
        obj = { custom_emoji_id: id.id };
        const obj2 = { custom_emoji_id: id.id };
      } else {
        obj = { unicode_emoji: id.name };
      }
      return obj;
    }),
    animation: typingIndicatorStyle.animation,
    typing_suggestion: typingIndicatorStyle.typingSuggestion,
  };
  emojis = typingIndicatorStyle.emojis;
  return obj;
};
export const parseServerTypingIndicatorStyle = function parseServerTypingIndicatorStyle(typing_indicator_style) {
  let UNSPECIFIED;
  let UNSPECIFIED2;
  let tmp = null;
  if (null != typing_indicator_style) {
    let emojis = typing_indicator_style.emojis;
    if (emojis == null) {
      emojis = [];
    }
    let obj = {
      emojis: emojis.map((custom_emoji_id) => {
        let animated;
        let obj;
        if (null != custom_emoji_id.custom_emoji_id) {
          const obj3 = { id: null, name: "", animated };
          ({ custom_emoji_id: obj2.id, animated } = custom_emoji_id);
          if (animated == null) {
            animated = false;
          }
          obj = obj3;
        } else {
          let str = custom_emoji_id.unicode_emoji;
          if (str == null) {
            str = "";
          }
          obj = { name: str };
        }
        return obj;
      }),
      typingSuggestion: UNSPECIFIED,
      animation: UNSPECIFIED2,
    };
    UNSPECIFIED = typing_indicator_style.typing_suggestion;
    if (UNSPECIFIED == null) {
      UNSPECIFIED = user.TypingSuggestion.UNSPECIFIED;
    }
    UNSPECIFIED2 = typing_indicator_style.animation;
    if (UNSPECIFIED2 == null) {
      UNSPECIFIED2 = user.TypingIndicatorAnimation.UNSPECIFIED;
    }
    tmp = obj;
  }
  return tmp;
};
