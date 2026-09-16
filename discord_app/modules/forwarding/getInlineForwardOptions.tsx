// === Module 12074: getInlineForwardOptions ===

// Module 12074 (getInlineForwardOptions)
import Constants from "Constants" /* 1074 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4788 */;
import size from "module_2" /* 2 */;

const MessageReferenceTypes = Constants.MessageReferenceTypes;
const result = size.fileFinishedImporting("modules/forwarding/getInlineForwardOptions.tsx");

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
        let isImageFileResult = MediaFormatTesters.isImageFile(filename);
        if (!isImageFileResult) {
          isImageFileResult = MediaFormatTesters.isVideoFile(filename);
          const tmpResult = MediaFormatTesters;
        }
        return isImageFileResult;
      });
      mapped = found.map((id) => id.id);
    }
    const obj2 = { onlyAttachmentIds: mapped };
    return obj2;
  } else {
    if ("embed" === targetKind) {
      if (null != embedIndex) {
        const obj3 = { onlyEmbedIndices: null };
        const items = [embedIndex];
        obj3.onlyEmbedIndices = items;
        let obj = obj3;
      }
      return obj;
    }
    if ("shortcut" === targetKind) {
      obj = {};
    }
  }
};