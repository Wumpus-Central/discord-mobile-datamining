// === Module 11396: jumpToReferencedMessage ===

// Module 11396 (jumpToReferencedMessage)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6871 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    const obj3 = { channelId: null, messageId: null, flash: true, returnMessageId: null };
    ({ channel_id: obj2.channelId, message_id: obj2.messageId } = messageReference);
    obj3.returnMessageId = messageReference.id;
    MessageActionCreatorsDefault.jumpToMessage(obj3);
  }
  tmp2 = null != channel_id && null != messageReference.message_id;
};