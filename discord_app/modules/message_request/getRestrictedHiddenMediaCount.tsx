// === Module 16116: getRestrictedHiddenMediaCount ===

// Module 16116 (getRestrictedHiddenMediaCount)
import obj132 from "obj132" /* 2 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import getForwardInfo from "getForwardInfo" /* 8179 */;

let result = obj132.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = getForwardInfo.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  return sum + getStickerExtensionFromFormatType.getMessageStickers(message).length;
};