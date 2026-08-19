// discord_app/modules/messages/native/jumpToReferencedMessage.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import trackInviteDefault from "../../../actions/MessageActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    const obj = { channelId: null, messageId: null, flash: true, returnMessageId: null };
    ({ channel_id: obj2[0], message_id: obj2[1] } = messageReference);
    obj[3] = messageReference.id;
    obj.jumpToMessage(obj);
  }
  tmp2 = null != channel_id && null != messageReference.message_id;
};