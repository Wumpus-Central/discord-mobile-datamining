// === Module 8154: createMessageFailedEmbed ===

// Module 8154 (createMessageFailedEmbed)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7933 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import _modDef8155 from "module_8155" /* 8155 */;
import _modDef8156 from "module_8156" /* 8156 */;
import size from "module_2" /* 2 */;

const MessageFailureState = RowGeneratorConstants.MessageFailureState;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      let obj = { type: MessageEmbedTypes.TEXT, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null, iconURL: null };
      const intl3 = util.intl;
      obj.messageSendError = intl3.string(util.t.lBLP4u);
      obj.failureState = MessageFailureState.UNSPECIFIED;
      obj.bodyTextColor = colors.failedMessageBodyTextColor;
      colors = renderer_EmbedUtils.getAssetUriForEmbed;
      obj.iconURL = colors(_modDef8156);
    } else {
      obj = { type: MessageEmbedTypes.TEXT, numAttachments: null, failureState: null, attachmentsSize: null, bodyTextColor: null };
      const intl2 = util.intl;
      const obj1 = { count: uploaderFile.attachmentsCount };
      obj.numAttachments = intl2.formatToPlainString(util.t.D0noUt, obj1);
      obj.failureState = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + tmp6(5134).sizeString(uploaderFile.currentSize) + ")";
        const tmp6Result = tmp6(5134);
      }
      obj.attachmentsSize = "" + str;
      obj.bodyTextColor = colors.embedBodyTextColor;
      tmp6 = require;
    }
  } else {
    obj = { type: MessageEmbedTypes.TEXT, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null };
    const intl = util.intl;
    obj.messageSendError = intl.string(util.t.lBLP4u);
    obj.failureState = MessageFailureState.UNSPECIFIED;
    obj.bodyTextColor = colors.failedMessageBodyTextColor;
    return obj;
  }
};
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: renderer_EmbedUtils.getAssetUriForEmbed(_modDef8155) };
  return obj;
};