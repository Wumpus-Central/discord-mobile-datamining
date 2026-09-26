// === Module 16319: StreamFeedbackActionSheet ===

// Module 16319 (StreamFeedbackActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import FeedbackUtils from "FeedbackUtils" /* 11124 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 16321 */;
import shouldShowLogUploadForCategory from "shouldShowLogUploadForCategory" /* 16322 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Constants = fn(11121);
({ FeedbackCategory: hasOwnProperty, FeedbackType: metroRequire, StreamFeedbackOption: closure_7 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFeedbackActionSheet.tsx");

export default function StreamFeedbackActionSheet(stream) {
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  dependencyMap = stream(7157).useGetStreamApplication(stream);
  let obj = stream(7157);
  const items = [AuthenticationStore];
  const stateFromStores = stream(504).useStateFromStores(items, () => AuthenticationStore.getId() === stream.ownerId);
  const intl = stream(1115).intl;
  let obj2 = stream(504);
  const intl2 = stream(1115).intl;
  const stringResult = intl.string(stream(1115).t["5smP3R"]);
  const intl3 = stream(1115).intl;
  let stringResult2 = intl3.string(stream(1115).t.CqjnLN);
  let obj3 = { value: stateFromStores ? constants.STREAMING : constants.STREAM_WATCHING, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl4 = tmp(1115).intl;
  const tmp9 = analyticsData(2749);
  if (stateFromStores) {
    let TVTIT1 = tmp9["0ZBLiZ"];
    let tmp10 = tmp8;
  } else {
    TVTIT1 = tmp9.TVTIT1;
    tmp10 = tmp8;
  }
  obj3.label = intl4.string(TVTIT1);
  const intl5 = tmp(1115).intl;
  obj3.problemsHeader = intl5.string(stream(1115).t["6Y1t5P"]);
  const stringResult1 = intl2.string(stream(1115).t["0uxA2V"]);
  obj3.problemOptions = stream(11124).getStreamFeedbackOptions({ isStreamer: stateFromStores });
  let obj4 = { value: constants2.FREEFORM, label: null };
  const intl6 = tmp(1115).intl;
  obj4.label = intl6.string(stream(1115).t.emlT91);
  obj3.freeformConfig = obj4;
  let obj5 = { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const tmpResult = stream(11124);
  if (stateFromStores) {
    stringResult2 = stringResult1;
  }
  obj5.ratingBody = stringResult2;
  const intl7 = tmp(1115).intl;
  obj5.categoriesHeader = intl7.string(tmp10(2749).tq8598);
  const items1 = [obj3];
  obj5.optionsTree = items1;
  obj5.trackOpen = function trackOpen() {
    const obj2 = { type: "Stream Feedback Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != streamApplication) {
      id = streamApplication.id;
    }
    obj2.application_id = id;
    let name = null;
    if (null != streamApplication) {
      name = streamApplication.name;
    }
    obj2.application_name = name;
    let id1 = null;
    if (null != streamApplication) {
      id1 = streamApplication.id;
    }
    obj2.game_id = id1;
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj2);
  };
  obj5.trackReport = function trackReport(dontShowAgain) {
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { feedbackType: constants.STREAM, location: "StreamFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj2);
    }
    if (null != rating) {
      const obj5 = { category, problem: null, variant: null, stream: null, feedback: null, streamApplication: null, analyticsData: null, location: "Stream End", rating: null };
      value = undefined;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      obj5.problem = value;
      let variant;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      obj5.variant = variant;
      obj5.stream = stream;
      if (feedback == null) {
        feedback = "";
      }
      obj5.feedback = feedback;
      obj5.streamApplication = streamApplication;
      obj5.analyticsData = analyticsData;
      obj5.rating = rating;
      trackStreamProblemDefault(obj5);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16323, dependencyMap.paths), "UploadLogs", { mediaSessionId: null, rtcConnectionId: null });
          const obj7 = { mediaSessionId: null, rtcConnectionId: null };
          const tmp22Result = ActionSheetActionCreatorsDefault;
        }
        obj3 = shouldShowLogUploadForCategory;
      }
      ToastUtils.presentFeedbackSent();
    }
  };
  return jsx(tmp10(16320), { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null });
};