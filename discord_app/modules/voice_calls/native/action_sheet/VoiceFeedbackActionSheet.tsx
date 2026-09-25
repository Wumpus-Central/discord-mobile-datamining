// discord_app/modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import _modDef2748 from "../../../feedback/intl/Feedback.messages.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
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
const Constants = fn(11107);
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
  const intl = analyticsData(1115).intl;
  const intl2 = analyticsData(1115).intl;
  let obj = {
    value: constants3.CONNECTION,
    label: null,
    problemsHeader: null,
    problemOptions: null,
    freeformConfig: null,
  };
  const stringResult = intl.string(analyticsData(1115).t.Ss6tlb);
  const intl3 = analyticsData(1115).intl;
  obj.label = intl3.string(_modDef2748.FVhMw6);
  const intl4 = analyticsData(1115).intl;
  obj.problemsHeader = intl4.string(analyticsData(1115).t.FJmoxF);
  const stringResult1 = intl2.string(analyticsData(1115).t.tLi4cR);
  obj.problemOptions = analyticsData(11110).getConnectionFeedbackOptions();
  let obj3 = { value: constants2.FREEFORM, label: null };
  const intl5 = analyticsData(1115).intl;
  obj3.label = intl5.string(analyticsData(1115).t.emlT91);
  obj.freeformConfig = obj3;
  let obj4 = { value: constants3.AUDIO, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl6 = analyticsData(1115).intl;
  obj4.label = intl6.string(_modDef2748.PL2l6A);
  const intl7 = analyticsData(1115).intl;
  obj4.problemsHeader = intl7.string(analyticsData(1115).t.FJmoxF);
  let obj2 = analyticsData(11110);
  obj4.problemOptions = analyticsData(11110).getAudioFeedbackOptions({ isMobile: true });
  const obj6 = { value: constants.FREEFORM, label: null };
  const intl8 = analyticsData(1115).intl;
  obj6.label = intl8.string(analyticsData(1115).t.emlT91);
  obj4.freeformConfig = obj6;
  let obj7 = { value: constants3.VIDEO, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl9 = analyticsData(1115).intl;
  obj7.label = intl9.string(_modDef2748["0WFzPh"]);
  const intl10 = analyticsData(1115).intl;
  obj7.problemsHeader = intl10.string(analyticsData(1115).t.FJmoxF);
  let obj5 = analyticsData(11110);
  obj7.problemOptions = analyticsData(11110).getVideoFeedbackOptions();
  const obj9 = { value: constants6.FREEFORM, label: null };
  const intl11 = analyticsData(1115).intl;
  obj9.label = intl11.string(analyticsData(1115).t.emlT91);
  obj7.freeformConfig = obj9;
  const obj10 = {
    value: constants3.PEOPLE,
    label: null,
    problemsHeader: null,
    problemOptions: null,
    freeformConfig: null,
  };
  const intl12 = analyticsData(1115).intl;
  obj10.label = intl12.string(_modDef2748.Moa3W9);
  const intl13 = analyticsData(1115).intl;
  obj10.problemsHeader = intl13.string(analyticsData(1115).t.FJmoxF);
  const obj8 = analyticsData(11110);
  obj10.problemOptions = analyticsData(11110).getPeopleFeedbackOptions();
  const obj12 = { value: constants5.FREEFORM, label: null };
  const intl14 = analyticsData(1115).intl;
  obj12.label = intl14.string(analyticsData(1115).t.emlT91);
  obj10.freeformConfig = obj12;
  const obj13 = {
    headerLabel: stringResult,
    showHeaderCloseButton: true,
    ratingBody: stringResult1,
    categoriesHeader: null,
    optionsTree: null,
    trackOpen: null,
    trackReport: null,
  };
  const obj11 = analyticsData(11110);
  const intl15 = analyticsData(1115).intl;
  obj13.categoriesHeader = intl15.string(_modDef2748.tq8598);
  const items = [obj, obj4, obj7, obj10];
  obj13.optionsTree = items;
  obj13.trackOpen = trackOpen;
  obj13.trackReport = function trackReport(dontShowAgain) {
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { feedbackType: constants4.VOICE, location: "VoiceFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj2);
    }
    if (null != rating) {
      const obj5 = { rating, category, reasonDescription: null, variant: null, feedback: null, analyticsData: null };
      value = undefined;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      obj5.reasonDescription = value;
      let variant;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      obj5.variant = variant;
      if (feedback == null) {
        feedback = "";
      }
      obj5.feedback = feedback;
      obj5.analyticsData = analyticsData;
      trackVoiceFeedbackDefault(AnalyticEvents.CALL_REPORT_PROBLEM, obj5);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16295, dependencyMap.paths), "UploadLogs", {
            mediaSessionId: null,
            rtcConnectionId: null,
          });
          const obj7 = { mediaSessionId: null, rtcConnectionId: null };
          const tmp20Result = ActionSheetActionCreatorsDefault;
        }
        obj3 = shouldShowLogUploadForCategory;
      }
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
