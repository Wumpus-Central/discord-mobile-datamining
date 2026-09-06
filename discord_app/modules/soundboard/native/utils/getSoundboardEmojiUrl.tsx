// === Module 11935: getSoundboardEmojiUrl ===

// Module 11935 (getSoundboardEmojiUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId, size) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    const obj = { id: emojiId, animated: false, size };
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};