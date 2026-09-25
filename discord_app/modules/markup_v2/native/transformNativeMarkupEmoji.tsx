// === Module 7548: transformNativeMarkupEmoji ===

// Module 7548 (transformNativeMarkupEmoji)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4480 */;
import MarkupTypes from "MarkupTypes" /* 5295 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupEmoji.tsx");

export const transformNativeEmoji = function transformNativeEmoji(value, disableAnimatedEmoji) {
  if ("unicode" === value.type) {
    value = value.value;
    const result = UnicodeEmojisDefault.convertSurrogateToName(value, false);
    const obj2 = { type: MarkupTypes.AST_KEY.EMOJI, content: null, surrogate: null };
    let combined = value;
    if ("" !== result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result + ":";
    }
    obj2.content = combined;
    obj2.surrogate = value;
    return obj2;
  } else {
    ({ id, animated, name } = value.value);
    const str1 = id.toString();
    const obj4 = { id: str1, animated, size: 48 };
    let emojiURL = AvatarUtilsDefault.getEmojiURL(obj4);
    const obj6 = { id: str1, animated: false, size: 48 };
    const emojiURL1 = AvatarUtilsDefault.getEmojiURL(obj6);
    const obj7 = { type: MarkupTypes.AST_KEY.CUSTOM_EMOJI, id: str1, alt: name, src: null, frozenSrc: null };
    if (true === disableAnimatedEmoji.disableAnimatedEmoji) {
      emojiURL = emojiURL1;
    }
    obj7.src = emojiURL;
    obj7.frozenSrc = emojiURL1;
    return obj7;
  }
};