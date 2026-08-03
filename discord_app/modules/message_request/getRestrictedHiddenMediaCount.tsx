let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(7861) /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(7861) /* getForwardInfo */;
  const tmp = require;
  return sum + require(4590) /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};