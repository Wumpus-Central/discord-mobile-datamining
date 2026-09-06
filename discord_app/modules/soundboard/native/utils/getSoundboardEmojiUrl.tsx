// discord_app/modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId, size) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    const obj = { id: emojiId, animated: false, size };
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
}
