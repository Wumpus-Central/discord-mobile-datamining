// discord_app/modules/messages/native/renderer/createMessageFailedEmbed.tsx
import { MessageFailureState } from "Changeset";
import { MessageEmbedTypes } from "ME";
import { registerAsset } from "../../../../../_runtime/08067_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/08068_registerAsset.js";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { frozen } from "EmbedUtils.tsx";

const result = require("frozen").fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  let colors;
  let uploaderFile;
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      let obj = { type: null, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null, iconURL: null };
      obj[0] = MessageEmbedTypes.TEXT;
      const intl3 = getSystemLocale.intl;
      obj[1] = intl3.string(getSystemLocale.t.lBLP4u);
      obj[2] = MessageFailureState.UNSPECIFIED;
      obj[4] = colors.failedMessageBodyTextColor;
      colors = frozen.getAssetUriForEmbed;
      obj[5] = colors(registerAsset);
      const tmp14 = frozen;
    } else {
      obj = { type: null, numAttachments: null, failureState: null, attachmentsSize: null, bodyTextColor: null };
      obj[0] = MessageEmbedTypes.TEXT;
      const intl2 = getSystemLocale.intl;
      const obj1 = { count: null };
      obj1[0] = uploaderFile.attachmentsCount;
      obj[1] = intl2.formatToPlainString(getSystemLocale.t.D0noUt, obj1);
      obj[2] = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + tmp6(4822).sizeString(uploaderFile.currentSize) + ")";
        const tmp6Result = tmp6(4822);
      }
      obj[3] = "" + str;
      obj[4] = colors.embedBodyTextColor;
      tmp6 = require;
    }
  } else {
    obj = { type: null, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null };
    obj[0] = MessageEmbedTypes.TEXT;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.lBLP4u);
    obj[2] = MessageFailureState.UNSPECIFIED;
    obj[4] = colors.failedMessageBodyTextColor;
    return obj;
  }
};
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: null };
  obj[5] = frozen.getAssetUriForEmbed(registerAsset);
  return obj;
};