// discord_app/modules/emojis/utils/getEmojiItemUrl.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
