// === Module 11121: getSoundboardEmojiUrl ===

// Module 11121 (getSoundboardEmojiUrl)
import obj132 from "obj132" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;

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