// discord_app/modules/notifications/native/NotificationSurveyActionSheet.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import PushFeedbackActions from "../../push_feedback/PushFeedbackActions.tsx";
import FeedbackActionSheetDefault from "../../feedback/native/FeedbackActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function trackOpen() {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, {
    type: "Notification Feedback Sheet",
    source: "Notification End",
  });
}
const constants = fn(9619).NotificationUserFeedbackReasons;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationSurveyActionSheet(notificationType) {
      const cResult = notificationType(messageId[7]).c(10);
      notificationType = notificationType.notificationType;
      const _location = notificationType.location;
      messageId = notificationType.messageId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { value: constants.TOO_MANY, label: null };
        const intl = tmp(tmp2[4]).intl;
        obj2.label = intl.string(tmp(tmp2[4]).t.pLeQp0);
        const items = [obj2, ,];
        let obj3 = { value: constants.IRRELEVANT, label: null };
        const intl2 = tmp(tmp2[4]).intl;
        obj3.label = intl2.string(tmp(tmp2[4]).t.tuwPcC);
        items[1] = obj3;
        let obj4 = { value: constants.DISLIKE_CONTENT, label: null };
        const intl3 = tmp(tmp2[4]).intl;
        obj4.label = intl3.string(tmp(tmp2[4]).t.glUMhg);
        items[2] = obj4;
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === _location) {
        if (cResult[2] === messageId) {
          if (cResult[3] === notificationType) {
            let tmp6 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[4]).intl;
            const stringResult = intl4.string(tmp(tmp2[4]).t.wGioO1);
            cResult[5] = stringResult;
            let tmp7 = stringResult;
          } else {
            tmp7 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = tmp(tmp2[4]).intl;
            const stringResult1 = intl5.string(tmp(tmp2[4]).t.Yzl7Or);
            const intl6 = tmp(tmp2[4]).intl;
            const stringResult2 = intl6.string(tmp(tmp2[4]).t.g1q5fr);
            cResult[6] = stringResult1;
            cResult[7] = stringResult2;
            let tmp10 = stringResult2;
            let tmp9 = stringResult1;
          } else {
            tmp9 = cResult[6];
            tmp10 = cResult[7];
          }
          if (cResult[8] !== tmp6) {
            const obj5 = {
              headerLabel: tmp7,
              showHeaderCloseButton: true,
              hideDontShowAgainCheckbox: true,
              ratingsBodyLabel: tmp9,
              reasonsHeaderLabel: tmp10,
              reasons: first,
              trackOpen,
              trackReport: tmp6,
            };
            const tmp17 = jsx(_location(tmp2[10]), {
              headerLabel: tmp7,
              showHeaderCloseButton: true,
              hideDontShowAgainCheckbox: true,
              ratingsBodyLabel: tmp9,
              reasonsHeaderLabel: tmp10,
              reasons: first,
              trackOpen,
              trackReport: tmp6,
            });
            cResult[8] = tmp6;
            cResult[9] = tmp17;
            let tmp13 = tmp17;
          } else {
            tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
      function handleSubmit(arg0) {
        ({ rating, reason } = arg0);
        if (null != rating) {
          value = null;
          if (null != reason) {
            value = reason.value;
          }
          const obj = {
            reason: value,
            rating,
            notification_type: notificationType,
            location: _location,
            message_id: messageId,
          };
          AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_REPORT_SUBMITTED, obj);
          PushFeedbackActions.handleSurveyCleanup();
          ToastUtils.presentFeedbackSent();
        }
      }
      cResult[1] = _location;
      cResult[2] = messageId;
      cResult[3] = notificationType;
      cResult[4] = handleSubmit;
      tmp6 = handleSubmit;
      let obj = notificationType(messageId[7]);
    }
  : function NotificationSurveyActionSheet(arg0) {
      ({ notificationType: require, location: importDefault, messageId: dependencyMap } = arg0);
      let obj = { value: constants.TOO_MANY, label: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.pLeQp0);
      const items = [obj, ,];
      let obj2 = { value: constants.IRRELEVANT, label: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.tuwPcC);
      items[1] = obj2;
      let obj3 = { value: constants.DISLIKE_CONTENT, label: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.glUMhg);
      items[2] = obj3;
      let obj4 = {
        headerLabel: null,
        showHeaderCloseButton: true,
        hideDontShowAgainCheckbox: true,
        ratingsBodyLabel: null,
        reasonsHeaderLabel: null,
        reasons: null,
        trackOpen: null,
        trackReport: null,
      };
      const intl4 = util.intl;
      obj4.headerLabel = intl4.string(util.t.wGioO1);
      const intl5 = util.intl;
      obj4.ratingsBodyLabel = intl5.string(util.t.Yzl7Or);
      const intl6 = util.intl;
      obj4.reasonsHeaderLabel = intl6.string(util.t.g1q5fr);
      obj4.reasons = items;
      obj4.trackOpen = trackOpen;
      obj4.trackReport = function handleSubmit(arg0) {
        ({ rating, reason } = arg0);
        if (null != rating) {
          value = null;
          if (null != reason) {
            value = reason.value;
          }
          const obj = { reason: value, rating, notification_type, location: _location, message_id };
          AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_REPORT_SUBMITTED, obj);
          PushFeedbackActions.handleSurveyCleanup();
          ToastUtils.presentFeedbackSent();
        }
      };
      return jsx(FeedbackActionSheetDefault, {
        headerLabel: null,
        showHeaderCloseButton: true,
        hideDontShowAgainCheckbox: true,
        ratingsBodyLabel: null,
        reasonsHeaderLabel: null,
        reasons: null,
        trackOpen: null,
        trackReport: null,
      });
    };
