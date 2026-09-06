// === Module 9398: ExplicitMediaSenderFalsePositiveActionSheet ===

// Module 9398 (ExplicitMediaSenderFalsePositiveActionSheet)
import ExplicitMediaRedactionActionCreators from "ExplicitMediaRedactionActionCreators" /* 7610 */;
import ExplicitMediaFalsePositiveActionCreatorsDefault from "ExplicitMediaFalsePositiveActionCreators" /* 9397 */;
import ExplicitMediaFalsePositiveActionSheet from "ExplicitMediaFalsePositiveActionSheet" /* 9400 */;
import noop from "module_19" /* 19 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7293 */;

require = fn;
let closure_5 = fn(7601).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let reportFalsePositive;
  let obj = channelId(563);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  noop = attachments1.map((filename) => filename.filename);
  obj = {
    onSuccess() {
      ExplicitMediaFalsePositiveActionSheet.handleSuccess(closure_5);
      const result = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(closure_2[6]).handleError();
    },
    report() {
      return ExplicitMediaRedactionActionCreators.reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3);
    }
  };
  const explicitMediaActions = channelId(9399).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4527).hideActionSheet();
    const obj4 = messageId(4527);
  }
  const items1 = [reportFalsePositive];
  const callback = noop.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(7600).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW };
  return jsx(channelId(9400).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(7600).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW });
};