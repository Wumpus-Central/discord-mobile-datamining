// === Module 17360: trackOpen ===

// Module 17360 (trackOpen)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import messagesProxyDefault from "messagesProxy" /* 2658 */;
import closeActionSheetDefault from "closeActionSheet" /* 17354 */;
import { AnalyticEvents } from "ME" /* 1074 */;
import FeedbackRating from "FeedbackRating" /* 11626 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function trackOpen() {
  expandEventPropertiesDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Call Session Feedback" });
}
noopAll;
({ AudioFeedbackOption: c4, ConnectionFeedbackOption: c5, FeedbackCategory: closure_6, FeedbackType: error, PeopleFeedbackOption: closure_8, VideoFeedbackOption: c9 } = FeedbackRating);
const result = require("set").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx");

export default function VoiceFeedbackActionSheet(analyticsData) {
  analyticsData = analyticsData.analyticsData;
  const intl = analyticsData(1114).intl;
  const intl2 = analyticsData(1114).intl;
  let obj = { value: constants3.CONNECTION, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const stringResult = intl.string(analyticsData(1114).t.Ss6tlb);
  const intl3 = analyticsData(1114).intl;
  obj[1] = intl3.string(messagesProxyDefault.FVhMw6);
  const intl4 = analyticsData(1114).intl;
  obj[2] = intl4.string(analyticsData(1114).t.FJmoxF);
  obj1 = analyticsData(11629);
  obj[3] = obj1.getConnectionFeedbackOptions();
  obj = { value: constants2.FREEFORM, label: null };
  const intl5 = analyticsData(1114).intl;
  obj[1] = intl5.string(analyticsData(1114).t.emlT91);
  obj[4] = obj;
  obj = { value: constants3.AUDIO, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl6 = analyticsData(1114).intl;
  obj[1] = intl6.string(messagesProxyDefault.PL2l6A);
  const intl7 = analyticsData(1114).intl;
  obj[2] = intl7.string(analyticsData(1114).t.FJmoxF);
  let obj4 = analyticsData(11629);
  obj[3] = obj4.getAudioFeedbackOptions({ isMobile: true });
  obj1 = { value: constants.FREEFORM, label: null };
  const intl8 = analyticsData(1114).intl;
  obj1[1] = intl8.string(analyticsData(1114).t.emlT91);
  obj[4] = obj1;
  const obj2 = { value: constants3.VIDEO, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl9 = analyticsData(1114).intl;
  obj2[1] = intl9.string(messagesProxyDefault["0WFzPh"]);
  const intl10 = analyticsData(1114).intl;
  obj2[2] = intl10.string(analyticsData(1114).t.FJmoxF);
  const stringResult1 = intl2.string(analyticsData(1114).t.tLi4cR);
  obj2[3] = analyticsData(11629).getVideoFeedbackOptions();
  let obj3 = { value: constants5.FREEFORM, label: null };
  const intl11 = analyticsData(1114).intl;
  obj3[1] = intl11.string(analyticsData(1114).t.emlT91);
  obj2[4] = obj3;
  obj4 = { value: constants3.PEOPLE, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl12 = analyticsData(1114).intl;
  obj4[1] = intl12.string(messagesProxyDefault.Moa3W9);
  const intl13 = analyticsData(1114).intl;
  obj4[2] = intl13.string(analyticsData(1114).t.FJmoxF);
  const obj8 = analyticsData(11629);
  obj4[3] = analyticsData(11629).getPeopleFeedbackOptions();
  const obj5 = { value: constants4.FREEFORM, label: null };
  const intl14 = analyticsData(1114).intl;
  obj5[1] = intl14.string(analyticsData(1114).t.emlT91);
  obj4[4] = obj5;
  const obj6 = { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: stringResult1, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const obj11 = analyticsData(11629);
  const intl15 = analyticsData(1114).intl;
  obj6[3] = intl15.string(messagesProxyDefault.tq8598);
  const items = [obj, obj, obj2, obj4];
  obj6[4] = items;
  obj6[5] = trackOpen;
  obj6[6] = function trackReport(dontShowAgain) {
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      let obj = analyticsData(closure_1_2[7]);
      obj = { feedbackType: null, location: "VoiceFeedbackActionSheet" };
      obj[0] = closure_1_7.VOICE;
      obj.processOptOut(obj);
    }
    if (null != rating) {
      obj = { rating: null, category: null, reasonDescription: null, variant: null, feedback: null, analyticsData: null };
      obj[0] = rating;
      obj[1] = category;
      let value;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      obj[2] = value;
      let variant;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      obj[3] = variant;
      if (feedback == null) {
        feedback = "";
      }
      obj[4] = feedback;
      obj[5] = analyticsData;
      closure_1_1(closure_1_2[9])(closure_1_3.CALL_REPORT_PROBLEM, obj);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6[0], rtc_connection_id: obj6[1] } = tmp7);
          tmp20(closure_1_2[11]).openLazy(analyticsData(closure_1_2[13])(closure_1_2[12], closure_1_2.paths), "UploadLogs", { mediaSessionId: null, rtcConnectionId: null });
          obj1 = { mediaSessionId: null, rtcConnectionId: null };
          const tmp20Result = tmp20(closure_1_2[11]);
        }
        obj3 = analyticsData(closure_1_2[10]);
      }
      tmp20 = closure_1_1;
      const tmp22 = closure_1_1(closure_1_2[9]);
      tmp7 = analyticsData;
      analyticsData(closure_1_2[14]).presentFeedbackSent();
      const obj4 = analyticsData(closure_1_2[14]);
    }
  };
  return jsx(closeActionSheetDefault, { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: stringResult1, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null });
};