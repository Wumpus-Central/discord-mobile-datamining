// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx
import ExplicitMediaRedactionActionCreators from "../../ExplicitMediaRedactionActionCreators.tsx";
import ExplicitMediaFalsePositiveActionCreatorsDefault from "../../ExplicitMediaFalsePositiveActionCreators.tsx";
import ExplicitMediaFalsePositiveActionSheet from "ExplicitMediaFalsePositiveActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ExplicitMediaStore from "../../ExplicitMediaStore.tsx";

require = fn;
let closure_5 = fn(7931).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx",
);

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let reportFalsePositive;
  const items = [reportFalsePositive];
  const stateFromStores = channelId(563).useStateFromStores(items, () =>
    ExplicitMediaStore.getFpMessageInfo(messageId),
  );
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  noop = attachments1.map((filename) => filename.filename);
  let obj = channelId(563);
  const explicitMediaActions = channelId(9596).useExplicitMediaActions({
    onSuccess() {
      ExplicitMediaFalsePositiveActionSheet.handleSuccess(closure_5);
      const result = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(closure_2[6]).handleError();
    },
    report() {
      return ExplicitMediaRedactionActionCreators.reportFailedSendFalsePositive(
        channelId,
        messageId,
        closure_2,
        closure_3,
      );
    },
  });
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4796).hideActionSheet();
    const obj4 = messageId(4796);
  }
  const items1 = [reportFalsePositive];
  const callback = noop.useCallback(() => {
    reportFalsePositive();
  }, items1);
  const obj2 = channelId(9596);
  const obj3 = {
    onSuccess() {
      ExplicitMediaFalsePositiveActionSheet.handleSuccess(closure_5);
      const result = ExplicitMediaFalsePositiveActionCreatorsDefault.disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(closure_2[6]).handleError();
    },
    report() {
      return ExplicitMediaRedactionActionCreators.reportFailedSendFalsePositive(
        channelId,
        messageId,
        closure_2,
        closure_3,
      );
    },
  };
  return jsx(channelId(9597).ExplicitMediaFalsePositiveActionSheet, {
    channelId,
    messageId,
    isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading,
    onConfirmPress: callback,
    analyticsContext: channelId(7930).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
  });
}
