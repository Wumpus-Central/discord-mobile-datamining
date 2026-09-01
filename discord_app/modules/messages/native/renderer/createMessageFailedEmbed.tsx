// === Module 8064: createMessageFailedEmbed ===

// Module 8064 (createMessageFailedEmbed)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Changeset from "Changeset" /* 7842 */;
import frozen from "frozen" /* 7855 */;
import registerAssetDefault from "registerAsset" /* 8065 */;
import registerAssetDefault2 from "registerAsset" /* 8066 */;

const MessageFailureState = Changeset.MessageFailureState;
const MessageEmbedTypes = ME.MessageEmbedTypes;
const result = set.fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
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
      obj[5] = colors(registerAssetDefault2);
      const tmp14 = frozen;
    } else {
      obj = { type: null, numAttachments: null, failureState: null, attachmentsSize: null, bodyTextColor: null };
      obj[0] = MessageEmbedTypes.TEXT;
      const intl2 = getSystemLocale.intl;
      obj1 = { count: null };
      obj1[0] = uploaderFile.attachmentsCount;
      obj[1] = intl2.formatToPlainString(getSystemLocale.t.D0noUt, obj1);
      obj[2] = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + tmp6(5078).sizeString(uploaderFile.currentSize) + ")";
        const tmp6Result = tmp6(5078);
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
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: frozen.getAssetUriForEmbed(registerAssetDefault) };
  return obj;
};