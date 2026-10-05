// discord_app/modules/emojis/utils/getEmojiItemUrl.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
