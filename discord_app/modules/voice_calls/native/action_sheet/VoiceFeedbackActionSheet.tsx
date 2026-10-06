// discord_app/modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants2 from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import _modDef2783 from "../../../feedback/intl/Feedback.messages.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FeedbackUtils from "../../../feedback/FeedbackUtils.tsx";
import FeedbackActionSheetV2Default from "../../../feedback/native/FeedbackActionSheetV2.tsx";
import shouldShowLogUploadForCategory from "../../../feedback/shouldShowLogUploadForCategory.tsx";
import trackVoiceFeedbackDefault from "../../trackVoiceFeedback.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../feedback/Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function trackOpen() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Call Session Feedback" });
}
const AnalyticEvents = Constants2.AnalyticEvents;
({
  AudioFeedbackOption: closure_4,
  ConnectionFeedbackOption: hasOwnProperty,
  FeedbackCategory: metroRequire,
  FeedbackType: metroImportDefault,
  PeopleFeedbackOption: metroImportAll,
  VideoFeedbackOption: c9,
} = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx");

export default function VoiceFeedbackActionSheet(analyticsData) {
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj11;
  let obj12;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  analyticsData = analyticsData.analyticsData;
  const intl = analyticsData(1126).intl;
  const stringResult = intl.string(analyticsData(1126).t.Ss6tlb);
  const intl2 = analyticsData(1126).intl;
  let obj = {
    value: constants3.CONNECTION,
    label: intl3.string(_modDef2783.FVhMw6),
    problemsHeader: intl4.string(analyticsData(1126).t.FJmoxF),
    problemOptions: obj2.getConnectionFeedbackOptions(),
    freeformConfig: obj3,
  };
  const stringResult1 = intl2.string(analyticsData(1126).t.tLi4cR);
  intl3 = analyticsData(1126).intl;
  intl4 = analyticsData(1126).intl;
  obj2 = analyticsData(11265);
  obj3 = { value: constants2.FREEFORM, label: intl5.string(analyticsData(1126).t.emlT91) };
  intl5 = analyticsData(1126).intl;
  let obj4 = {
    value: constants3.AUDIO,
    label: intl6.string(_modDef2783.PL2l6A),
    problemsHeader: intl7.string(analyticsData(1126).t.FJmoxF),
    problemOptions: obj5.getAudioFeedbackOptions({ isMobile: true }),
    freeformConfig: obj6,
  };
  intl6 = analyticsData(1126).intl;
  intl7 = analyticsData(1126).intl;
  obj5 = analyticsData(11265);
  obj6 = { value: constants.FREEFORM, label: intl8.string(analyticsData(1126).t.emlT91) };
  intl8 = analyticsData(1126).intl;
  let obj7 = {
    value: constants3.VIDEO,
    label: intl9.string(_modDef2783["0WFzPh"]),
    problemsHeader: intl10.string(analyticsData(1126).t.FJmoxF),
    problemOptions: obj8.getVideoFeedbackOptions(),
    freeformConfig: obj9,
  };
  intl9 = analyticsData(1126).intl;
  intl10 = analyticsData(1126).intl;
  obj8 = analyticsData(11265);
  obj9 = { value: constants6.FREEFORM, label: intl11.string(analyticsData(1126).t.emlT91) };
  intl11 = analyticsData(1126).intl;
  const obj10 = {
    value: constants3.PEOPLE,
    label: intl12.string(_modDef2783.Moa3W9),
    problemsHeader: intl13.string(analyticsData(1126).t.FJmoxF),
    problemOptions: obj11.getPeopleFeedbackOptions(),
    freeformConfig: obj12,
  };
  intl12 = analyticsData(1126).intl;
  intl13 = analyticsData(1126).intl;
  obj11 = analyticsData(11265);
  obj12 = { value: constants5.FREEFORM, label: intl14.string(analyticsData(1126).t.emlT91) };
  intl14 = analyticsData(1126).intl;
  FeedbackActionSheetV2Default;
  const intl15 = analyticsData(1126).intl;
  const items = [obj, obj4, obj7, obj10];
  return (
    <tmp3
      headerLabel={stringResult}
      showHeaderCloseButton
      ratingBody={stringResult1}
      categoriesHeader={intl15.string(_modDef2783.tq8598)}
      optionsTree={items}
      trackOpen={trackOpen}
      trackReport={function trackReport(dontShowAgain) {
        let category;
        let feedback;
        let rating;
        let reason;
        let value;
        let variant;
        ({ rating, category, reason, feedback } = dontShowAgain);
        if (dontShowAgain.dontShowAgain) {
          const obj2 = { feedbackType: metroImportDefault.VOICE, location: "VoiceFeedbackActionSheet" };
          const obj = FeedbackUtils;
          obj.processOptOut(obj2);
        }
        if (null != rating) {
          const obj5 = { rating, category, reasonDescription: value, variant, feedback, analyticsData };
          value = undefined;
          const CALL_REPORT_PROBLEM = AnalyticEvents.CALL_REPORT_PROBLEM;
          const tmp22 = trackVoiceFeedbackDefault;
          if (reason != null) {
            value = reason.value;
          }
          if (value == null) {
            value = null;
          }
          variant = undefined;
          if (reason != null) {
            variant = reason.variant;
          }
          if (variant == null) {
            variant = null;
          }
          if (feedback == null) {
            feedback = "";
          }
          tmp22(CALL_REPORT_PROBLEM, obj5);
          if (null != reason) {
            const obj3 = shouldShowLogUploadForCategory;
            if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
              const obj7 = { mediaSessionId: null, rtcConnectionId: null };
              ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
              const tmp20Result = ActionSheetActionCreatorsDefault;
              tmp20Result.openLazy(asyncRequire(17532, dependencyMap.paths), "UploadLogs", obj7);
            }
          }
          const obj4 = ToastUtils;
          obj4.presentFeedbackSent();
        }
      }}
    />
  );
}
