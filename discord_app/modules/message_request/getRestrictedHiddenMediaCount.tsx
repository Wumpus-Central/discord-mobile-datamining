// === Module 16392: getRestrictedHiddenMediaCount ===

// Module 16392 (getRestrictedHiddenMediaCount)
import set from "set" /* 2 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4805 */;
import getForwardInfo from "getForwardInfo" /* 7796 */;

let result = set.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = getForwardInfo.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = getForwardInfo;
  const tmp = require;
  return sum + getStickerExtensionFromFormatType.getMessageStickers(message).length;
};