// discord_app/modules/messages/native/jumpToReferencedMessage.tsx
import set from "../../../../_runtime/00002_set.js";
import trackInviteDefault from "../../../actions/MessageActionCreators.tsx";

const result = set.fileFinishedImporting("modules/messages/native/jumpToReferencedMessage.tsx");

export default function jumpToReferencedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  if (tmp2) {
    let obj = trackInviteDefault;
    obj = { channelId: null, messageId: null, flash: true, returnMessageId: null };
    ({ channel_id: obj2[0], message_id: obj2[1] } = messageReference);
    obj[3] = messageReference.id;
    obj.jumpToMessage(obj);
  }
}
