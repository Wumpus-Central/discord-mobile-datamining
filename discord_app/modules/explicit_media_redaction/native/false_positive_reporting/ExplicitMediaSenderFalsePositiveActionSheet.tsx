// === Module 8331: ExplicitMediaObscuredFalsePositiveActionSheet ===

// Module 8331 (ExplicitMediaObscuredFalsePositiveActionSheet)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getFpMessageInfo" /* 6091 */;
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "USER_SETTING_ACTION_SHEET_KEY" /* 7279 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  dependencyMap = undefined;
  let React;
  let reportFalsePositive;
  let obj = channelId(647);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => reportFalsePositive.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  React = attachments1.map((filename) => filename.filename);
  obj = {
    onSuccess() {
      channelId(8333).handleSuccess(closure_1_5);
      const obj = channelId(8333);
      const result = messageId(8330).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(8333).handleError();
    },
    report() {
      return channelId(7288).reportFailedSendFalsePositive(channelId, messageId, dependencyMap, closure_3);
    }
  };
  const explicitMediaActions = channelId(8332).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4412).hideActionSheet();
    const obj4 = messageId(4412);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(7278).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW };
  return jsx(channelId(8333).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(7278).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW });
};