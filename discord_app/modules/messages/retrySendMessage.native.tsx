// discord_app/modules/messages/retrySendMessage.native.tsx
import MessageConstants from "MessageConstants.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import handleUploadAttachmentErrors from "../media_uploads/handleUploadAttachmentErrors.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    obj = { content, tts, invalidEmojis: [], validNonShortcutEmojis: [] };
    obj = {};
    const merged = Object.assign(obj);
    obj.nonce = nonce;
    obj.flags = flags;
    obj.messageReference = messageReference;
    obj.location = MessageSendLocation.RETRY;
    obj.attachmentsToUpload = mapped;
    obj.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      const obj = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
      const result = obj.handleUploadMessageAttachmentsErrors(obj);
    };
    tmpResult.sendMessage(id, obj, undefined, obj);
  }
}
