// === Module 11116: jumpToReferencedMessage ===

// Module 11116 (jumpToReferencedMessage)
import obj132 from "obj132" /* 2 */;
import trackInviteDefault from "trackInvite" /* 7427 */;

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