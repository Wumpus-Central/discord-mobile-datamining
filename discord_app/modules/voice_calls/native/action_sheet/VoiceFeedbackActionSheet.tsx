// discord_app/modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef2658 from "../../../feedback/intl/Feedback.messages.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import FeedbackUtils from "../../../feedback/FeedbackUtils.tsx";
import FeedbackActionSheetV2Default from "../../../feedback/native/FeedbackActionSheetV2.tsx";
import shouldShowLogUploadForCategory from "../../../feedback/shouldShowLogUploadForCategory.tsx";
import trackVoiceFeedbackDefault from "../../trackVoiceFeedback.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function trackOpen() {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Call Session Feedback" });
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const Constants = fn(11626);
({
  AudioFeedbackOption: closure_4,
  ConnectionFeedbackOption: hasOwnProperty,
  FeedbackCategory: metroRequire,
  FeedbackType: closure_7,
  PeopleFeedbackOption: closure_8,
  VideoFeedbackOption: closure_9,
} = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx");

export default function VoiceFeedbackActionSheet(analyticsData) {
  analyticsData = analyticsData.analyticsData;
  const intl = analyticsData(1114).intl;
  const intl2 = analyticsData(1114).intl;
  let obj = {
    value: constants3.CONNECTION,
    label: null,
    problemsHeader: null,
    problemOptions: null,
    freeformConfig: null,
  };
  const stringResult = intl.string(analyticsData(1114).t.Ss6tlb);
  const intl3 = analyticsData(1114).intl;
  obj.label = intl3.string(_modDef2658.FVhMw6);
  const intl4 = analyticsData(1114).intl;
  obj.problemsHeader = intl4.string(analyticsData(1114).t.FJmoxF);
  let obj1 = analyticsData(11629);
  obj.problemOptions = obj1.getConnectionFeedbackOptions();
  obj = { value: constants2.FREEFORM, label: null };
  const intl5 = analyticsData(1114).intl;
  obj.label = intl5.string(analyticsData(1114).t.emlT91);
  obj.freeformConfig = obj;
  obj = { value: constants3.AUDIO, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl6 = analyticsData(1114).intl;
  obj.label = intl6.string(_modDef2658.PL2l6A);
  const intl7 = analyticsData(1114).intl;
  obj.problemsHeader = intl7.string(analyticsData(1114).t.FJmoxF);
  let obj4 = analyticsData(11629);
  obj.problemOptions = obj4.getAudioFeedbackOptions({ isMobile: true });
  obj1 = { value: constants.FREEFORM, label: null };
  const intl8 = analyticsData(1114).intl;
  obj1.label = intl8.string(analyticsData(1114).t.emlT91);
  obj.freeformConfig = obj1;
  const obj2 = {
    value: constants3.VIDEO,
    label: null,
    problemsHeader: null,
    problemOptions: null,
    freeformConfig: null,
  };
  const intl9 = analyticsData(1114).intl;
  obj2.label = intl9.string(_modDef2658["0WFzPh"]);
  const intl10 = analyticsData(1114).intl;
  obj2.problemsHeader = intl10.string(analyticsData(1114).t.FJmoxF);
  const stringResult1 = intl2.string(analyticsData(1114).t.tLi4cR);
  obj2.problemOptions = analyticsData(11629).getVideoFeedbackOptions();
  let obj3 = { value: constants6.FREEFORM, label: null };
  const intl11 = analyticsData(1114).intl;
  obj3.label = intl11.string(analyticsData(1114).t.emlT91);
  obj2.freeformConfig = obj3;
  obj4 = { value: constants3.PEOPLE, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl12 = analyticsData(1114).intl;
  obj4.label = intl12.string(_modDef2658.Moa3W9);
  const intl13 = analyticsData(1114).intl;
  obj4.problemsHeader = intl13.string(analyticsData(1114).t.FJmoxF);
  const obj8 = analyticsData(11629);
  obj4.problemOptions = analyticsData(11629).getPeopleFeedbackOptions();
  const obj5 = { value: constants5.FREEFORM, label: null };
  const intl14 = analyticsData(1114).intl;
  obj5.label = intl14.string(analyticsData(1114).t.emlT91);
  obj4.freeformConfig = obj5;
  const obj6 = {
    headerLabel: stringResult,
    showHeaderCloseButton: true,
    ratingBody: stringResult1,
    categoriesHeader: null,
    optionsTree: null,
    trackOpen: null,
    trackReport: null,
  };
  const obj11 = analyticsData(11629);
  const intl15 = analyticsData(1114).intl;
  obj6.categoriesHeader = intl15.string(_modDef2658.tq8598);
  const items = [obj, obj, obj2, obj4];
  obj6.optionsTree = items;
  obj6.trackOpen = trackOpen;
  obj6.trackReport = function trackReport(dontShowAgain) {
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      let obj = { feedbackType: constants4.VOICE, location: "VoiceFeedbackActionSheet" };
      obj.processOptOut(obj);
    }
    if (null != rating) {
      obj = { rating, category, reasonDescription: null, variant: null, feedback: null, analyticsData: null };
      value = undefined;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      obj.reasonDescription = value;
      let variant;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      obj.variant = variant;
      if (feedback == null) {
        feedback = "";
      }
      obj.feedback = feedback;
      obj.analyticsData = analyticsData;
      trackVoiceFeedbackDefault(AnalyticEvents.CALL_REPORT_PROBLEM, obj);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = tmp7);
          tmp20(4527).openLazy(asyncRequireImpl(17356, dependencyMap.paths), "UploadLogs", {
            mediaSessionId: null,
            rtcConnectionId: null,
          });
          const obj1 = { mediaSessionId: null, rtcConnectionId: null };
          const tmp20Result = tmp20(4527);
        }
        obj3 = shouldShowLogUploadForCategory;
      }
      tmp20 = importDefault;
      tmp7 = analyticsData;
      ToastUtils.presentFeedbackSent();
    }
  };
  return jsx(FeedbackActionSheetV2Default, {
    headerLabel: stringResult,
    showHeaderCloseButton: true,
    ratingBody: stringResult1,
    categoriesHeader: null,
    optionsTree: null,
    trackOpen: null,
    trackReport: null,
  });
}
