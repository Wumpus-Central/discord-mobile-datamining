// discord_app/modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";

const result = obj132.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    const obj = { id: null, animated: false, size: null };
    obj[0] = emojiId;
    obj[2] = arg1;
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};