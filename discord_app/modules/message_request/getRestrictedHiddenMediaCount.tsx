// discord_app/modules/message_request/getRestrictedHiddenMediaCount.tsx
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require("../forwarding/formatMessageForwards.tsx") /* getForwardInfo */.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require("../forwarding/formatMessageForwards.tsx") /* getForwardInfo */;
  const tmp = require;
  return sum + require("../stickers/StickersUtils.tsx") /* getStickerExtensionFromFormatType */.getMessageStickers(message).length;
};