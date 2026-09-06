// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx
import user from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorTypes.tsx");

export const CUSTOM_TYPING_INDICATOR_EMOJI_COUNT = 3;
export const EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = {
  emojis: [],
  typingSuggestion: user.TypingSuggestion.UNSPECIFIED,
  animation: user.TypingIndicatorAnimation.UNSPECIFIED,
};
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
    UNSPECIFIED = user.TypingIndicatorAnimation.UNSPECIFIED;
  }
  return UNSPECIFIED;
};
export const serializeTypingIndicatorStyle = function serializeTypingIndicatorStyle(typingIndicatorStyle) {
  let obj = {
    emojis: null,
    animation: typingIndicatorStyle.animation,
    typing_suggestion: typingIndicatorStyle.typingSuggestion,
  };
  const emojis = typingIndicatorStyle.emojis;
  obj.emojis = emojis.map((id) => {
    if (null != id.id) {
      let obj = { custom_emoji_id: id.id };
    } else {
      obj = { unicode_emoji: id.name };
    }
    return obj;
  });
  return obj;
};
export const parseServerTypingIndicatorStyle = function parseServerTypingIndicatorStyle(typing_indicator_style) {
  let tmp = null;
  if (null != typing_indicator_style) {
    let emojis = typing_indicator_style.emojis;
    if (emojis == null) {
      emojis = [];
    }
    let obj = {
      emojis: emojis.map((custom_emoji_id) => {
        if (null != custom_emoji_id.custom_emoji_id) {
          let obj = { id: null, name: "", animated: null };
          ({ custom_emoji_id: obj2.id, animated } = custom_emoji_id);
          if (animated == null) {
            animated = false;
          }
          obj.animated = animated;
        } else {
          let str = custom_emoji_id.unicode_emoji;
          if (str == null) {
            str = "";
          }
          obj = { name: str };
        }
        return obj;
      }),
      typingSuggestion: null,
      animation: null,
    };
    let UNSPECIFIED = typing_indicator_style.typing_suggestion;
    if (UNSPECIFIED == null) {
      UNSPECIFIED = user.TypingSuggestion.UNSPECIFIED;
    }
    obj.typingSuggestion = UNSPECIFIED;
    let UNSPECIFIED2 = typing_indicator_style.animation;
    if (UNSPECIFIED2 == null) {
      UNSPECIFIED2 = user.TypingIndicatorAnimation.UNSPECIFIED;
    }
    obj.animation = UNSPECIFIED2;
    tmp = obj;
  }
  return tmp;
};
