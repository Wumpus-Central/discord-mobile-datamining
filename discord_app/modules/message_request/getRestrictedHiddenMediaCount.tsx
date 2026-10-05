// === Module 17080: getRestrictedHiddenMediaCount ===

// Module 17080 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 5428 */;
import formatMessageForwards from "formatMessageForwards" /* 7613 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const obj = formatMessageForwards;
  const result = obj.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const tmpResult = StickersUtils;
  return sum + tmpResult.getMessageStickers(message).length;
};