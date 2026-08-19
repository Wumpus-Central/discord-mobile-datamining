// === Module 10866: retrySendMessage ===

// Module 10866 (retrySendMessage)
import obj132 from "obj132" /* 2 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4663 */;
import trackInviteDefault from "trackInvite" /* 7427 */;

const MessageSendLocation = MESSAGE_GROUP_SPACING.MessageSendLocation;
let result = obj132.fileFinishedImporting("modules/messages/retrySendMessage.native.tsx");

export default function retrySendMessage(id, id2, arr) {
  const _require = id;
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  trackInviteDefault.deleteMessage(id.id, id2.id, true);
  if (id2.isCommandType()) {
    if (tmp17) {
      _require(10255).retryCommandMessage(id2, id, obj);
      const obj6 = _require(10255);
    }
    tmp17 = null != id2.interactionData && null != obj.applicationId;
  } else {
    const messageReference = id2.messageReference;
    let mapped;
    ({ content, tts, flags, nonce } = id2);
    if (arr != null) {
      mapped = arr.map((item, index) => {
        let fromJsonResult = item;
        if (null == item.on) {
          const CloudUpload = guildId(table[3]).CloudUpload;
          fromJsonResult = CloudUpload.fromJson(item);
        }
        return fromJsonResult;
      });
    }
    const tmpResult = trackInviteDefault;
    id = id.id;
    obj = { content: null, tts: null, invalidEmojis: null, validNonShortcutEmojis: null };
    obj[0] = content;
    obj[1] = tts;
    obj[2] = [];
    obj[3] = [];
    obj = {};
    const merged = Object.assign(obj);
    obj.nonce = nonce;
    obj.flags = flags;
    obj.messageReference = messageReference;
    obj.location = MessageSendLocation.RETRY;
    obj.attachmentsToUpload = mapped;
    obj.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      guildId(dependencyMap[4]);
      const obj = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
      const result = obj.handleUploadMessageAttachmentsErrors(obj);
    };
    tmpResult.sendMessage(id, obj, undefined, obj);
  }
};