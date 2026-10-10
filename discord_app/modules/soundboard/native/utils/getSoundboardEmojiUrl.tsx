// === Module 11601: getSoundboardEmojiUrl ===

// Module 11601 (getSoundboardEmojiUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId, size) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    const obj2 = { id: emojiId, animated: false, size };
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
  }
  return emojiURL;
};