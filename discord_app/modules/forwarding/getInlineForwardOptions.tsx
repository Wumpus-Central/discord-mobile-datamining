// discord_app/modules/forwarding/getInlineForwardOptions.tsx
import Constants from "../../Constants.tsx";
import MediaFormatTesters from "../messages/MediaFormatTesters.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    let obj = { onlyAttachmentIds: mapped };
    return obj;
  } else {
    if ("embed" === targetKind) {
      if (null != embedIndex) {
        obj = { onlyEmbedIndices: null };
        const items = [embedIndex];
        obj.onlyEmbedIndices = items;
      }
      return obj;
    }
    if ("shortcut" === targetKind) {
      obj = {};
    }
  }
};
