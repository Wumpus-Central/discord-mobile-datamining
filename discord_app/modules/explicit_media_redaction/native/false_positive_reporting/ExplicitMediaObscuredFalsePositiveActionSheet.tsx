// === Module 11301: ExplicitMediaObscuredFalsePositiveActionSheet ===

// Module 11301 (ExplicitMediaObscuredFalsePositiveActionSheet)
import Fragment from "Fragment" /* 21 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7110 */;
import ExplicitMediaRedactionActionCreators from "ExplicitMediaRedactionActionCreators" /* 8924 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let closure_4 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let attachmentId;
  let embedId;
  let redactableMediaAttachmentsForMessage;
  let tmp4;
  let tmp5;
  const tmp = channelId;
  let obj = channelId(redactableMediaAttachmentsForMessage[4]);
  const cResult = obj.c(16);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ attachmentId, embedId } = channelId);
  const obj2 = channelId(redactableMediaAttachmentsForMessage[5]);
  redactableMediaAttachmentsForMessage = obj2.useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
  const obj3 = channelId(redactableMediaAttachmentsForMessage[5]);
  const redactableMediaEmbedsForMessage = obj3.useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = channelId(redactableMediaAttachmentsForMessage[6]);
      return obj.handleSuccess(reportFalsePositive);
    };
    const fn2 = function c() {
      const obj = channelId(redactableMediaAttachmentsForMessage[6]);
      return obj.handleError();
    };
    cResult[0] = fn;
    cResult[1] = fn2;
    tmp4 = fn;
    tmp5 = fn2;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === messageId) {
      if (cResult[4] === redactableMediaAttachmentsForMessage) {
        let tmp6;
        let tmp12;
        if (cResult[5] === redactableMediaEmbedsForMessage) {
          tmp6 = cResult[6];
        }
        const tmpResult = tmp(redactableMediaAttachmentsForMessage[8]);
        const explicitMediaActions = tmpResult.useExplicitMediaActions(tmp6);
        let reportFalsePositive = explicitMediaActions.reportFalsePositive;
        const isReportFalsePositiveLoading = explicitMediaActions.isReportFalsePositiveLoading;
        let num3;
        if (redactableMediaAttachmentsForMessage != null) {
          num3 = redactableMediaAttachmentsForMessage.length;
        }
        if (num3 == null) {
          num3 = 0;
        }
        let tmp9 = num3 > 0;
        if (!tmp9) {
          let num5;
          if (redactableMediaEmbedsForMessage != null) {
            num5 = redactableMediaEmbedsForMessage.length;
          }
          if (num5 == null) {
            num5 = 0;
          }
          tmp9 = num5 > 0;
        }
        if (!tmp9) {
          const obj6 = messageId(redactableMediaAttachmentsForMessage[9]);
          obj6.hideActionSheet();
        }
        if (cResult[7] !== reportFalsePositive) {
          const fn3 = function u() {
            reportFalsePositive();
          };
          cResult[7] = reportFalsePositive;
          cResult[8] = fn3;
          tmp12 = fn3;
        } else {
          tmp12 = cResult[8];
        }
        let first;
        if (1 === redactableMediaAttachmentsForMessage.length) {
          first = redactableMediaAttachmentsForMessage[0];
        }
        let first1;
        if (1 === redactableMediaEmbedsForMessage.length) {
          first1 = redactableMediaEmbedsForMessage[0];
        }
        if (cResult[9] === channelId) {
          if (cResult[10] === isReportFalsePositiveLoading) {
            if (cResult[11] === messageId) {
              if (cResult[12] === tmp12) {
                if (cResult[13] === first) {
                  let tmp15;
                  if (cResult[14] === first1) {
                    tmp15 = cResult[15];
                  }
                  return tmp15;
                }
              }
            }
          }
        }
        const ExplicitMediaFalsePositiveActionSheet = tmp(tmp2[6]).ExplicitMediaFalsePositiveActionSheet;
        const tmp17 = <ExplicitMediaFalsePositiveActionSheet channelId={channelId} messageId={messageId} isReportFalsePositiveLoading={isReportFalsePositiveLoading} attachmentPreview={first} embedPreview={first1} onConfirmPress={tmp12} analyticsContext={tmp(redactableMediaAttachmentsForMessage[10]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW} />;
        cResult[9] = channelId;
        cResult[10] = isReportFalsePositiveLoading;
        cResult[11] = messageId;
        cResult[12] = tmp12;
        cResult[13] = first;
        cResult[14] = first1;
        cResult[15] = tmp17;
        tmp15 = tmp17;
      }
    }
  }
  const obj5 = {
    onSuccess: tmp4,
    onError: tmp5,
    report() {
      let mapped;
      reportFalsePositive = ExplicitMediaRedactionActionCreators.reportFalsePositive;
      ExplicitMediaRedactionActionCreators;
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
      return reportFalsePositive(channelId, messageId, mapped, mapped1);
    }
  };
  cResult[2] = channelId;
  cResult[3] = messageId;
  cResult[4] = redactableMediaAttachmentsForMessage;
  cResult[5] = redactableMediaEmbedsForMessage;
  cResult[6] = obj5;
  tmp6 = obj5;
}) : ((channelId) => {
  let attachmentId;
  let embedId;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let redactableMediaAttachmentsForMessage;
  const tmp = channelId;
  ({ attachmentId, embedId } = channelId);
  let obj = channelId(redactableMediaAttachmentsForMessage[5]);
  redactableMediaAttachmentsForMessage = obj.useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
  const obj2 = channelId(redactableMediaAttachmentsForMessage[5]);
  const redactableMediaEmbedsForMessage = obj2.useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
  const obj3 = channelId(redactableMediaAttachmentsForMessage[8]);
  const obj4 = {
    onSuccess() {
      const obj = channelId(redactableMediaAttachmentsForMessage[6]);
      return obj.handleSuccess(reportFalsePositive);
    },
    onError() {
      const obj = channelId(redactableMediaAttachmentsForMessage[6]);
      return obj.handleError();
    },
    report() {
      let mapped;
      reportFalsePositive = ExplicitMediaRedactionActionCreators.reportFalsePositive;
      ExplicitMediaRedactionActionCreators;
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
      return reportFalsePositive(channelId, messageId, mapped, mapped1);
    }
  };
  const explicitMediaActions = obj3.useExplicitMediaActions(obj4);
  let reportFalsePositive = explicitMediaActions.reportFalsePositive;
  let num;
  const isReportFalsePositiveLoading = explicitMediaActions.isReportFalsePositiveLoading;
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
    const obj5 = messageId(redactableMediaAttachmentsForMessage[9]);
    obj5.hideActionSheet();
  }
  const items = [reportFalsePositive];
  const callback = redactableMediaEmbedsForMessage.useCallback(() => {
    reportFalsePositive();
  }, items);
  let first;
  const ExplicitMediaFalsePositiveActionSheet = tmp(tmp2[6]).ExplicitMediaFalsePositiveActionSheet;
  if (1 === redactableMediaAttachmentsForMessage.length) {
    first = redactableMediaAttachmentsForMessage[0];
  }
  let first1;
  if (1 === redactableMediaEmbedsForMessage.length) {
    first1 = redactableMediaEmbedsForMessage[0];
  }
  return <ExplicitMediaFalsePositiveActionSheet channelId={channelId} messageId={messageId} isReportFalsePositiveLoading={isReportFalsePositiveLoading} attachmentPreview={first} embedPreview={first1} onConfirmPress={callback} analyticsContext={tmp(redactableMediaAttachmentsForMessage[10]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW} />;
});
const result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx");

export default tmp2;