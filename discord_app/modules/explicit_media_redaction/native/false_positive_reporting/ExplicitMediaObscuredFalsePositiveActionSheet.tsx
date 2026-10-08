// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx
import ExplicitMediaRedactionActionCreators from "../../ExplicitMediaRedactionActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(6979).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
      const cResult = channelId(redactableMediaAttachmentsForMessage[4]).c(16);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ attachmentId, embedId } = channelId);
      const obj = channelId(redactableMediaAttachmentsForMessage[4]);
      redactableMediaAttachmentsForMessage = channelId(
        redactableMediaAttachmentsForMessage[5],
      ).useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
      const obj2 = channelId(redactableMediaAttachmentsForMessage[5]);
      const redactableMediaEmbedsForMessage = channelId(
        redactableMediaAttachmentsForMessage[5],
      ).useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          return channelId(redactableMediaAttachmentsForMessage[6]).handleSuccess(reportFalsePositive);
        };
        const fn2 = function c() {
          return channelId(redactableMediaAttachmentsForMessage[6]).handleError();
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
            if (cResult[5] === redactableMediaEmbedsForMessage) {
              let tmp6 = cResult[6];
            }
            const explicitMediaActions = tmp(tmp2[8]).useExplicitMediaActions(tmp6);
            const reportFalsePositive = explicitMediaActions.reportFalsePositive;
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
              messageId(tmp2[9]).hideActionSheet();
              const obj6 = messageId(tmp2[9]);
            }
            if (cResult[7] !== reportFalsePositive) {
              const fn3 = function u() {
                reportFalsePositive();
              };
              cResult[7] = reportFalsePositive;
              cResult[8] = fn3;
              let tmp12 = fn3;
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
                      if (cResult[14] === first1) {
                        let tmp15 = cResult[15];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
            const obj4 = {
              channelId,
              messageId,
              isReportFalsePositiveLoading,
              attachmentPreview: first,
              embedPreview: first1,
              onConfirmPress: tmp12,
              analyticsContext: tmp(tmp2[10]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            };
            const tmp17 = jsx(tmp(tmp2[6]).ExplicitMediaFalsePositiveActionSheet, {
              channelId,
              messageId,
              isReportFalsePositiveLoading,
              attachmentPreview: first,
              embedPreview: first1,
              onConfirmPress: tmp12,
              analyticsContext: tmp(tmp2[10]).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            });
            cResult[9] = channelId;
            cResult[10] = isReportFalsePositiveLoading;
            cResult[11] = messageId;
            cResult[12] = tmp12;
            cResult[13] = first;
            cResult[14] = first1;
            cResult[15] = tmp17;
            tmp15 = tmp17;
            const tmpResult = tmp(tmp2[8]);
          }
        }
      }
      const obj5 = {
        onSuccess: tmp4,
        onError: tmp5,
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
          return ExplicitMediaRedactionActionCreators.reportFalsePositive(channelId, messageId, mapped, mapped1);
        },
      };
      cResult[2] = channelId;
      cResult[3] = messageId;
      cResult[4] = redactableMediaAttachmentsForMessage;
      cResult[5] = redactableMediaEmbedsForMessage;
      cResult[6] = obj5;
      tmp6 = obj5;
      const obj3 = channelId(redactableMediaAttachmentsForMessage[5]);
    }
  : function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      let redactableMediaAttachmentsForMessage;
      ({ attachmentId, embedId } = channelId);
      redactableMediaAttachmentsForMessage = channelId(
        redactableMediaAttachmentsForMessage[5],
      ).useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId);
      const obj = channelId(redactableMediaAttachmentsForMessage[5]);
      const redactableMediaEmbedsForMessage = channelId(
        redactableMediaAttachmentsForMessage[5],
      ).useRedactableMediaEmbedsForMessage(channelId, messageId, embedId);
      const obj2 = channelId(redactableMediaAttachmentsForMessage[5]);
      const explicitMediaActions = channelId(redactableMediaAttachmentsForMessage[8]).useExplicitMediaActions({
        onSuccess() {
          return channelId(redactableMediaAttachmentsForMessage[6]).handleSuccess(reportFalsePositive);
        },
        onError() {
          return channelId(redactableMediaAttachmentsForMessage[6]).handleError();
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
          return ExplicitMediaRedactionActionCreators.reportFalsePositive(channelId, messageId, mapped, mapped1);
        },
      });
      const reportFalsePositive = explicitMediaActions.reportFalsePositive;
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
        messageId(tmp2[9]).hideActionSheet();
        const obj5 = messageId(tmp2[9]);
      }
      const items = [reportFalsePositive];
      const callback = redactableMediaEmbedsForMessage.useCallback(() => {
        reportFalsePositive();
      }, items);
      const obj6 = {
        channelId,
        messageId,
        isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading,
        attachmentPreview: null,
        embedPreview: null,
        onConfirmPress: null,
        analyticsContext: null,
      };
      let first;
      if (1 === redactableMediaAttachmentsForMessage.length) {
        first = redactableMediaAttachmentsForMessage[0];
      }
      obj6.attachmentPreview = first;
      let first1;
      if (1 === redactableMediaEmbedsForMessage.length) {
        first1 = redactableMediaEmbedsForMessage[0];
      }
      obj6.embedPreview = first1;
      obj6.onConfirmPress = callback;
      obj6.analyticsContext = channelId(
        redactableMediaAttachmentsForMessage[10],
      ).TrackMediaRedactionContext.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW;
      return jsx(channelId(redactableMediaAttachmentsForMessage[6]).ExplicitMediaFalsePositiveActionSheet, {
        channelId,
        messageId,
        isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading,
        attachmentPreview: null,
        embedPreview: null,
        onConfirmPress: null,
        analyticsContext: null,
      });
    };
