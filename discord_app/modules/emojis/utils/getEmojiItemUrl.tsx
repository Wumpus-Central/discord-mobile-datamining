// === Module 9485: getEmojiItemUrl ===

// Module 9485 (getEmojiItemUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getEmojiItemUrl.tsx");

export default function getEmojiItemUrl(id, arg1, size) {
  if (null == id.id) {
    let str = id.url;
    if (str == null) {
      str = "";
    }
    let emojiURL = str;
  } else {
    let animated = arg1;
    const obj2 = { id: id.id, animated: null, size: null };
    if (arg1) {
      animated = id.animated;
    }
    obj2.animated = animated;
    obj2.size = size;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
  }
  return emojiURL;
};