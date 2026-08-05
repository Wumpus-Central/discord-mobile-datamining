// discord_app/modules/message_request/getRestrictedHiddenMediaCount.tsx
import { getForwardInfo } from "../forwarding/formatMessageForwards.tsx";
import { getStickerExtensionFromFormatType } from "../stickers/StickersUtils.tsx";
let result = require("set").fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

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