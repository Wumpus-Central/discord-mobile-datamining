// discord_app/modules/markup_v2/native/transformNativeMarkupEmoji.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupEmoji.tsx");

export const transformNativeEmoji = function transformNativeEmoji(value, disableAnimatedEmoji) {
  if ("unicode" === value.type) {
    value = value.value;
    const obj = { type: MarkupTypes.AST_KEY.EMOJI, content: value, surrogate: value };
    return obj;
  } else {
    ({ id, animated, name } = value.value);
    const str = id.toString();
    const obj3 = { id: str, animated, size: 48 };
    let emojiURL = AvatarUtilsDefault.getEmojiURL(obj3);
    const obj5 = { id: str, animated: false, size: 48 };
    const emojiURL1 = AvatarUtilsDefault.getEmojiURL(obj5);
    const obj6 = { type: MarkupTypes.AST_KEY.CUSTOM_EMOJI, id: str, alt: name, src: null, frozenSrc: null };
    if (true === disableAnimatedEmoji.disableAnimatedEmoji) {
      emojiURL = emojiURL1;
    }
    obj6.src = emojiURL;
    obj6.frozenSrc = emojiURL1;
    return obj6;
  }
};
