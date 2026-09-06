// discord_app/modules/messages/native/jumpToReferencedMessage.tsx
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    const obj = { channelId: null, messageId: null, flash: true, returnMessageId: null };
    ({ channel_id: obj2.channelId, message_id: obj2.messageId } = messageReference);
    obj.returnMessageId = messageReference.id;
    obj.jumpToMessage(obj);
  }
}
