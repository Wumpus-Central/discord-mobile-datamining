// === Module 19346: getRestrictedHiddenMediaCount ===

// Module 19346 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 6615 */;
import formatMessageForwards from "formatMessageForwards" /* 8483 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = formatMessageForwards.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  return sum + StickersUtils.getMessageStickers(message).length;
};