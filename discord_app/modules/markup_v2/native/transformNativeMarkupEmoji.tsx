// discord_app/modules/markup_v2/native/transformNativeMarkupEmoji.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupEmoji.tsx");

export const transformNativeEmoji = function transformNativeEmoji(value, disableAnimatedEmoji) {
  if ("unicode" === value.type) {
    value = value.value;
    let obj = { type: MarkupTypes.AST_KEY.EMOJI, content: value, surrogate: value };
    return obj;
  } else {
    ({ id, animated, name } = value.value);
    const str = id.toString();
    let obj1 = AvatarUtilsDefault;
    obj = { id: str, animated, size: 48 };
    let emojiURL = obj1.getEmojiURL(obj);
    obj = { id: str, animated: false, size: 48 };
    const emojiURL1 = AvatarUtilsDefault.getEmojiURL(obj);
    obj1 = { type: MarkupTypes.AST_KEY.CUSTOM_EMOJI, id: str, alt: name, src: null, frozenSrc: null };
    if (true === disableAnimatedEmoji.disableAnimatedEmoji) {
      emojiURL = emojiURL1;
    }
    obj1.src = emojiURL;
    obj1.frozenSrc = emojiURL1;
    return obj1;
  }
};
