import noop from "noop";
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  let attachmentId;
  let embedId;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let redactableMediaAttachmentsForMessage;
  let redactableMediaEmbedsForMessage;
  let reportFalsePositive;
  ({ attachmentId, embedId } = channelId);
  let obj = channelId(redactableMediaAttachmentsForMessage[3]);
  redactableMediaAttachmentsForMessage = obj.useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
  redactableMediaEmbedsForMessage = channelId(redactableMediaAttachmentsForMessage[3]).useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
  const obj2 = channelId(redactableMediaAttachmentsForMessage[3]);
  obj = {
    onSuccess() {
      return channelId(redactableMediaAttachmentsForMessage[5]).handleSuccess(reportFalsePositive);
    },
    onError() {
      return channelId(redactableMediaAttachmentsForMessage[5]).handleError();
    },
    report() {
      let mapped;
      if (redactableMediaAttachmentsForMessage != null) {
        mapped = redactableMediaAttachmentsForMessage.map((id) => id.id);
      }
      if (mapped == null) {
        mapped = [];
      }
      let mapped1 = redactableMediaEmbedsForMessage.map((id) => id.id);
      if (mapped1 == null) {
        mapped1 = [];
      }
      return channelId(redactableMediaAttachmentsForMessage[6]).reportFalsePositive(channelId, messageId, mapped, mapped1);
    }
  };
  const explicitMediaActions = channelId(redactableMediaAttachmentsForMessage[4]).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  let num;
  if (redactableMediaAttachmentsForMessage != null) {
    num = redactableMediaAttachmentsForMessage.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp4 = num > 0;
  if (!tmp4) {
    let num2;
    if (redactableMediaEmbedsForMessage != null) {
      num2 = redactableMediaEmbedsForMessage.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp4 = num2 > 0;
  }
  if (!tmp4) {
    messageId(tmp2[7]).hideActionSheet();
    const obj5 = messageId(tmp2[7]);
  }
  const items = [reportFalsePositive];
  const callback = redactableMediaEmbedsForMessage.useCallback(() => {
    reportFalsePositive();
  }, items);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, attachmentPreview: null, embedPreview: null, onConfirmPress: null, analyticsContext: null };
  let first;
  if (1 === redactableMediaAttachmentsForMessage.length) {
    first = redactableMediaAttachmentsForMessage[0];
  }
  obj[3] = first;
  let first1;
  if (1 === redactableMediaEmbedsForMessage.length) {
    first1 = redactableMediaEmbedsForMessage[0];
  }
  obj[4] = first1;
  obj[5] = callback;
  obj[6] = channelId(redactableMediaAttachmentsForMessage[8]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW;
  return jsx(channelId(redactableMediaAttachmentsForMessage[5]).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, attachmentPreview: null, embedPreview: null, onConfirmPress: null, analyticsContext: null });
};