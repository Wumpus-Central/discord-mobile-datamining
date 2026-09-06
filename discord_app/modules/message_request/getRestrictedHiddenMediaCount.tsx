// discord_app/modules/message_request/getRestrictedHiddenMediaCount.tsx
import StickersUtils from "../stickers/StickersUtils.tsx";
import formatMessageForwards from "../forwarding/formatMessageForwards.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = formatMessageForwards.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  return sum + StickersUtils.getMessageStickers(message).length;
}
