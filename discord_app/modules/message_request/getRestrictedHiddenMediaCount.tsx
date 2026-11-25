// === Module 19178: getRestrictedHiddenMediaCount ===

// Module 19178 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 6748 */;
import formatMessageForwards from "formatMessageForwards" /* 14317 */;
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