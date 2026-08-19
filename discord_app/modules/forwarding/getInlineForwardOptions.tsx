// discord_app/modules/forwarding/getInlineForwardOptions.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";

const MessageReferenceTypes = ME.MessageReferenceTypes;
const result = obj132.fileFinishedImporting("modules/forwarding/getInlineForwardOptions.tsx");

export const getInlineForwardOptions = function getInlineForwardOptions(message, nativeSyntheticEventData) {
  ({ targetKind, embedIndex } = nativeSyntheticEventData);
  if ("media" === targetKind) {
    const messageReference = message.messageReference;
    let type;
    if (messageReference != null) {
      type = messageReference.type;
    }
    let tmp6 = message;
    if (type === MessageReferenceTypes.FORWARD) {
      const first = message.messageSnapshots[0];
      message = undefined;
      if (first != null) {
        message = first.message;
      }
      tmp6 = message;
    }
    let mapped;
    if (tmp6 != null) {
      const attachments = tmp6.attachments;
      const found = attachments.filter((item, index) => {
        const filename = item.filename;
        let isImageFileResult = callback(table[1]).isImageFile(filename);
        if (!isImageFileResult) {
          isImageFileResult = callback(table[1]).isVideoFile(filename);
          const tmpResult = callback(table[1]);
        }
        return isImageFileResult;
      });
      mapped = found.map((item, index) => item.id);
    }
    let obj = { onlyAttachmentIds: null };
    obj[0] = mapped;
    return obj;
  } else {
    if ("embed" === targetKind) {
      if (null != embedIndex) {
        obj = { onlyEmbedIndices: null };
        const items = [embedIndex];
        obj[0] = items;
      }
      return obj;
    }
    if ("shortcut" === targetKind) {
      obj = {};
    }
  }
};