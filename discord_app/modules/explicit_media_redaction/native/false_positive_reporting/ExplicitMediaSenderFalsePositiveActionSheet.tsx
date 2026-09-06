// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../ExplicitMediaStore.tsx";
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "../../ExplicitMediaRedactionConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx",
);

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  dependencyMap = undefined;
  let React;
  let reportFalsePositive;
  let obj = channelId(563);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => reportFalsePositive.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  React = attachments1.map((filename) => filename.filename);
  obj = {
    onSuccess() {
      channelId(9400).handleSuccess(closure_1_5);
      const obj = channelId(9400);
      const result = messageId(9397).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(9400).handleError();
    },
    report() {
      return channelId(7610).reportFailedSendFalsePositive(channelId, messageId, dependencyMap, closure_3);
    },
  };
  const explicitMediaActions = channelId(9399).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4527).hideActionSheet();
    const obj4 = messageId(4527);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = {
    channelId,
    messageId,
    isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading,
    onConfirmPress: callback,
    analyticsContext: tmp(7600).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
  };
  return jsx(channelId(9400).ExplicitMediaFalsePositiveActionSheet, {
    channelId,
    messageId,
    isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading,
    onConfirmPress: callback,
    analyticsContext: tmp(7600).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
  });
}
