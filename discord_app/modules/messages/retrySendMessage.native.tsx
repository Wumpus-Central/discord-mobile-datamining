// discord_app/modules/messages/retrySendMessage.native.tsx
import MessageConstants from "MessageConstants.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import handleUploadAttachmentErrors from "../media_uploads/handleUploadAttachmentErrors.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const MessageSendLocation = MessageConstants.MessageSendLocation;
let result = size.fileFinishedImporting("modules/messages/retrySendMessage.native.tsx");

export default function retrySendMessage(id, id2, arr) {
  let content;
  let flags;
  let guildId;
  let nonce;
  let tts;
  _require = id;
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let obj2 = MessageActionCreatorsDefault;
  obj2.deleteMessage(id.id, id2.id, true);
  if (id2.isCommandType()) {
    const tmp18 = null != id2.interactionData && null != obj.applicationId;
    if (tmp18) {
      const obj5 = require("executeCommand");
      obj5.retryCommandMessage(id2, id, obj);
    }
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
    id = id.id;
    const sendMessage = MessageActionCreatorsDefault.sendMessage;
    const obj3 = { content, tts, invalidEmojis: [], validNonShortcutEmojis: [] };
    const obj4 = {
      nonce,
      flags,
      messageReference,
      location: MessageSendLocation.RETRY,
      attachmentsToUpload: mapped,
      onAttachmentUploadError(file, code, reason) {
        const obj = handleUploadAttachmentErrors;
        const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
        const result = obj.handleUploadMessageAttachmentsErrors(obj2);
      },
    };
    const tmpResult = MessageActionCreatorsDefault;
    const merged = Object.assign(obj);
    sendMessage(id, obj3, undefined, obj4);
  }
}
