// === Module 11508: getSoundboardEmojiUrl ===

// Module 11508 (getSoundboardEmojiUrl)
import set from "set" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    let obj = getAvatarURLDefault;
    obj = { id: null, animated: false, size: null };
    obj[0] = emojiId;
    obj[2] = arg1;
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};