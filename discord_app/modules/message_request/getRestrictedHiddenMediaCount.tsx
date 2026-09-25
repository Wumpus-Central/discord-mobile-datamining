// === Module 16690: getRestrictedHiddenMediaCount ===

// Module 16690 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5191 */;
import formatMessageForwards from "formatMessageForwards" /* 7391 */;
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