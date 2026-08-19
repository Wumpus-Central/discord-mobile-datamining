// discord_app/modules/message_request/getRestrictedHiddenMediaCount.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getStickerExtensionFromFormatType from "../stickers/StickersUtils.tsx";
import getForwardInfo from "../forwarding/formatMessageForwards.tsx";

let result = obj132.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = getForwardInfo.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  return sum + getStickerExtensionFromFormatType.getMessageStickers(message).length;
};