// === Module 11572: getInlineForwardOptions ===

// Module 11572 (getInlineForwardOptions)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const MessageReferenceTypes = ME.MessageReferenceTypes;
const result = set.fileFinishedImporting("modules/forwarding/getInlineForwardOptions.tsx");

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
      const found = attachments.filter((filename) => {
        filename = filename.filename;
        let isImageFileResult = callback(table[1]).isImageFile(filename);
        if (!isImageFileResult) {
          isImageFileResult = callback(table[1]).isVideoFile(filename);
          const tmpResult = callback(table[1]);
        }
        return isImageFileResult;
      });
      mapped = found.map((id) => id.id);
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