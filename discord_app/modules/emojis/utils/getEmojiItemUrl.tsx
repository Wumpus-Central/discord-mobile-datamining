// === Module 9913: getEmojiItemUrl ===

// Module 9913 (getEmojiItemUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getEmojiItemUrl.tsx");

export default function getEmojiItemUrl(id, arg1, size) {
  let emojiURL;
  if (null == id.id) {
    let str = id.url;
    if (str == null) {
      str = "";
    }
    emojiURL = str;
  } else {
    let animated = arg1;
    const obj = { id: id.id, animated, size };
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (arg1) {
      animated = id.animated;
    }
    emojiURL = getEmojiURL(obj);
  }
  return emojiURL;
};