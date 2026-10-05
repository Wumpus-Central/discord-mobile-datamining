// discord_app/modules/forwarding/getInlineForwardOptions.tsx
import Constants from "../../Constants.tsx";
import MediaFormatTesters from "../messages/MediaFormatTesters.tsx";
import size from "../../../_runtime/metro/00002__.js";

let filename;

const MessageReferenceTypes = Constants.MessageReferenceTypes;
const result = size.fileFinishedImporting("modules/forwarding/getInlineForwardOptions.tsx");

export const getInlineForwardOptions = function getInlineForwardOptions(message, nativeSyntheticEventData) {
  let embedIndex;
  let items;
  let targetKind;
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
        const obj = MediaFormatTesters;
        let isImageFileResult = obj.isImageFile(filename);
        if (!isImageFileResult) {
          const tmpResult = MediaFormatTesters;
          isImageFileResult = tmpResult.isVideoFile(filename);
        }
        return isImageFileResult;
      });
      mapped = found.map((id) => id.id);
    }
    return { onlyAttachmentIds: mapped };
  } else {
    let obj;
    if ("embed" === targetKind) {
      if (null != embedIndex) {
        const obj3 = { onlyEmbedIndices: items };
        items = [embedIndex];
        obj = obj3;
      }
      return obj;
    }
    if ("shortcut" === targetKind) {
      obj = {};
    }
  }
};
