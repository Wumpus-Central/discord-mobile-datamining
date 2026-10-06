// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ExplicitMediaRedactionConstants from "../../ExplicitMediaRedactionConstants.tsx";
import ExplicitMediaFalsePositiveActionCreatorsDefault from "../../ExplicitMediaFalsePositiveActionCreators.tsx";
import ExplicitMediaFalsePositiveActionSheet2 from "ExplicitMediaFalsePositiveActionSheet.tsx";
import ExplicitMediaRedactionActionCreators from "../../ExplicitMediaRedactionActionCreators.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import ExplicitMediaStore from "../../ExplicitMediaStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channelId, dependencyMap;

let react = react_mod;
let closure_5 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_2;
      let first;
      let tmp6;
      let tmp8;
      let obj = channelId(576);
      const cResult = obj.c(28);
      const tmp = channelId;
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ExplicitMediaStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== messageId) {
        const fn = function l() {
          return ExplicitMediaStore.getFpMessageInfo(messageId);
        };
        cResult[1] = messageId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores.attachments) {
        let tmp9;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function p(id) {
            return id.id;
          };
          cResult[5] = fn2;
          tmp9 = fn2;
        } else {
          tmp9 = cResult[5];
        }
        const attachments = stateFromStores.attachments;
        const mapped = attachments.map(tmp9);
        cResult[3] = stateFromStores.attachments;
        cResult[4] = mapped;
        tmp8 = mapped;
      } else {
        tmp8 = cResult[4];
      }
      dependencyMap = tmp8;
      if (cResult[6] !== stateFromStores.attachments) {
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(filename) {
              return filename.filename;
            }
          }
          cResult[8] = F;
        } else {
          class F {
            constructor(filename) {
              return filename.filename;
            }
          }
        }
        const attachments1 = stateFromStores.attachments;
        let mapped1 = attachments1.map(F);
        cResult[6] = stateFromStores.attachments;
        cResult[7] = mapped1;
      } else {
        class F {
          constructor(filename) {
            return filename.filename;
          }
        }
      }
      mapped1 = tmp11;
      if (cResult[9] === channelId) {
        class F {
          constructor(filename) {
            return filename.filename;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(filename) {
              return filename.filename;
            }
          }
          cResult[12] = tmp15;
        } else {
          class F {
            constructor(filename) {
              return filename.filename;
            }
          }
        }
        if (cResult[13] === tmp11) {
          class F {
            constructor(filename) {
              return filename.filename;
            }
          }
        }
        class A {
          constructor() {
            const obj = ExplicitMediaRedactionActionCreators;
            return obj.reportFailedSendFalsePositive(channelId, messageId, closure_2, mapped1);
          }
        }
        cResult[13] = tmp11;
        cResult[14] = tmp8;
        cResult[15] = channelId;
        cResult[16] = messageId;
        cResult[17] = A;
      }
      const fn3 = function u() {
        const obj = ExplicitMediaFalsePositiveActionSheet2;
        obj.handleSuccess(closure_5);
        const obj2 = ExplicitMediaFalsePositiveActionCreatorsDefault;
        const result = obj2.disableFalsePositiveButton(channelId, messageId);
      };
      cResult[9] = channelId;
      cResult[10] = messageId;
      cResult[11] = fn3;
    }
  : (channelId) => {
      let closure_2;
      let closure_3;
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      let reportFalsePositive;
      let obj = channelId(573);
      const items = [reportFalsePositive];
      const stateFromStores = obj.useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(messageId));
      const attachments = stateFromStores.attachments;
      dependencyMap = attachments.map((id) => id.id);
      const attachments1 = stateFromStores.attachments;
      react = attachments1.map((filename) => filename.filename);
      let obj2 = channelId(8954);
      const obj3 = {
        onSuccess() {
          const obj = ExplicitMediaFalsePositiveActionSheet2;
          obj.handleSuccess(closure_5);
          const obj2 = ExplicitMediaFalsePositiveActionCreatorsDefault;
          const result = obj2.disableFalsePositiveButton(channelId, messageId);
        },
        onError() {
          const obj = channelId(closure_2[7]);
          return obj.handleError();
        },
        report() {
          const obj = ExplicitMediaRedactionActionCreators;
          return obj.reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3);
        },
      };
      const explicitMediaActions = obj2.useExplicitMediaActions(obj3);
      reportFalsePositive = explicitMediaActions.reportFalsePositive;
      const isReportFalsePositiveLoading = explicitMediaActions.isReportFalsePositiveLoading;
      if (stateFromStores.attachments.length <= 0) {
        const obj4 = messageId(4860);
        obj4.hideActionSheet();
      }
      const items1 = [reportFalsePositive];
      const callback = react.useCallback(() => {
        reportFalsePositive();
      }, items1);
      const ExplicitMediaFalsePositiveActionSheet = tmp(8950).ExplicitMediaFalsePositiveActionSheet;
      return (
        <ExplicitMediaFalsePositiveActionSheet
          channelId={channelId}
          messageId={messageId}
          isReportFalsePositiveLoading={isReportFalsePositiveLoading}
          onConfirmPress={callback}
          analyticsContext={channelId(7122).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW}
        />
      );
    };
let result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx",
);

export default tmp2;
