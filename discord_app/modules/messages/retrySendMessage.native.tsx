// === Module 11931: retrySendMessage ===

// Module 11931 (retrySendMessage)
import MessageConstants from "MessageConstants" /* 4750 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7701 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 9429 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MessageSendLocation = MessageConstants.MessageSendLocation;
let result = size.fileFinishedImporting("modules/messages/retrySendMessage.native.tsx");

export default function retrySendMessage(id, id2, arr) {
  _require = id;
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  MessageActionCreatorsDefault.deleteMessage(id.id, id2.id, true);
  if (id2.isCommandType()) {
    if (tmp17) {
      require("executeCommand").retryCommandMessage(id2, id, obj);
      const obj6 = require("executeCommand");
    }
    tmp17 = null != id2.interactionData && null != obj.applicationId;
  } else {
    const messageReference = id2.messageReference;
    let mapped;
    ({ content, tts, flags, nonce } = id2);
    if (arr != null) {
      mapped = arr.map((on) => {
        let fromJsonResult = on;
        if (null == on.on) {
          const CloudUpload = guildId(dependencyMap[3]).CloudUpload;
          fromJsonResult = CloudUpload.fromJson(on);
        }
        return fromJsonResult;
      });
    }
    const tmpResult = MessageActionCreatorsDefault;
    id = id.id;
    const obj3 = { content, tts, invalidEmojis: [], validNonShortcutEmojis: [] };
    const obj4 = {};
    const merged = Object.assign(obj);
    obj4.nonce = nonce;
    obj4.flags = flags;
    obj4.messageReference = messageReference;
    obj4.location = MessageSendLocation.RETRY;
    obj4.attachmentsToUpload = mapped;
    obj4.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      const obj = handleUploadAttachmentErrors;
      const result = obj.handleUploadMessageAttachmentsErrors({ file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason });
    };
    tmpResult.sendMessage(id, obj3, undefined, obj4);
  }
};