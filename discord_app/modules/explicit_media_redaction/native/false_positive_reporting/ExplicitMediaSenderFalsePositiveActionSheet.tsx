// === Module 11100: ExplicitMediaObscuredFalsePositiveActionSheet ===

// Module 11100 (ExplicitMediaObscuredFalsePositiveActionSheet)
import noop from "noop" /* 19 */;
import getFpMessageInfo from "getFpMessageInfo" /* 5002 */;
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "USER_SETTING_ACTION_SHEET_KEY" /* 5004 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let reportFalsePositive;
  let obj = channelId(647);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => reportFalsePositive.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((item, index) => item.id);
  const attachments1 = stateFromStores.attachments;
  const React = attachments1.map((item, index) => item.filename);
  obj = {
    onSuccess() {
      channelId(10871).handleSuccess(closure_1_5);
      const obj = channelId(10871);
      const result = messageId(11099).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(10871).handleError();
    },
    report() {
      return channelId(5027).reportFailedSendFalsePositive(channelId, messageId, dependencyMap, closure_3);
    }
  };
  const explicitMediaActions = channelId(10870).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4342).hideActionSheet();
    const obj4 = messageId(4342);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(5001).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW };
  return jsx(channelId(10871).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(5001).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW });
};