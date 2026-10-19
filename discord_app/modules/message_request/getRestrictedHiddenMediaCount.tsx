// === Module 18079: getRestrictedHiddenMediaCount ===

// Module 18079 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 6442 */;
import formatMessageForwards from "formatMessageForwards" /* 8256 */;
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