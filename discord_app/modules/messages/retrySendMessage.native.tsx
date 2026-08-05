// discord_app/modules/messages/retrySendMessage.native.tsx
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let result = require("_executeCommand").fileFinishedImporting("modules/messages/retrySendMessage.native.tsx");

export default function retrySendMessage(id, id2, arr) {
  let content;
  let flags;
  let nonce;
  let tts;
  const _require = id;
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  require("../../actions/MessageActionCreators.tsx").deleteMessage(id.id, id2.id, true);
  if (id2.isCommandType()) {
    if (tmp17) {
      _require("../application_commands/executeCommand.tsx").retryCommandMessage(id2, id, obj);
      const obj6 = _require("../application_commands/executeCommand.tsx");
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
          const CloudUpload = guildId(table[3]).CloudUpload;
          fromJsonResult = CloudUpload.fromJson(on);
        }
        return fromJsonResult;
      });
    }
    const tmpResult = require("../../actions/MessageActionCreators.tsx");
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
      let obj = guildId(outer1_2[4]);
      obj = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
      const result = obj.handleUploadMessageAttachmentsErrors(obj);
    };
    tmpResult.sendMessage(id, obj, undefined, obj);
  }
};