// discord_app/modules/messages/native/renderer/createMessageFailedEmbed.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import FileUtils from "../../../../utils/FileUtils.tsx";
import RowGeneratorConstants from "RowGeneratorConstants.tsx";
import renderer_EmbedUtils from "EmbedUtils.tsx";
import _modDef8303 from "../../../../../_runtime/metro/08303__.js";
import _modDef8304 from "../../../../../_runtime/metro/08304__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const MessageFailureState = RowGeneratorConstants.MessageFailureState;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      const obj2 = {
        type: MessageEmbedTypes.TEXT,
        messageSendError: null,
        failureState: null,
        disableBackgroundColor: true,
        bodyTextColor: null,
        iconURL: null,
      };
      const intl3 = util.intl;
      obj2.messageSendError = intl3.string(util.t.lBLP4u);
      obj2.failureState = MessageFailureState.UNSPECIFIED;
      obj2.bodyTextColor = colors.failedMessageBodyTextColor;
      colors = renderer_EmbedUtils.getAssetUriForEmbed;
      obj2.iconURL = colors(_modDef8304);
      let obj3 = obj2;
    } else {
      obj3 = {
        type: MessageEmbedTypes.TEXT,
        numAttachments: null,
        failureState: null,
        attachmentsSize: null,
        bodyTextColor: null,
      };
      const intl2 = util.intl;
      const obj4 = { count: uploaderFile.attachmentsCount };
      obj3.numAttachments = intl2.formatToPlainString(util.t.D0noUt, obj4);
      obj3.failureState = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + FileUtils.sizeString(uploaderFile.currentSize) + ")";
        const tmp6Result = FileUtils;
      }
      obj3.attachmentsSize = "" + str;
      obj3.bodyTextColor = colors.embedBodyTextColor;
    }
  } else {
    const obj = {
      type: MessageEmbedTypes.TEXT,
      messageSendError: null,
      failureState: null,
      disableBackgroundColor: true,
      bodyTextColor: null,
    };
    const intl = util.intl;
    obj.messageSendError = intl.string(util.t.lBLP4u);
    obj.failureState = MessageFailureState.UNSPECIFIED;
    obj.bodyTextColor = colors.failedMessageBodyTextColor;
    return obj;
  }
}
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  const obj = {
    type: MessageEmbedTypes.TEXT,
    messageSendError: errorMessage.errorMessage,
    failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE,
    disableBackgroundColor: true,
    bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor,
    iconURL: renderer_EmbedUtils.getAssetUriForEmbed(_modDef8303),
  };
  return obj;
};
