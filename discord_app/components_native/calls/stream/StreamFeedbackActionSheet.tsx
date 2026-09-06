// === Module 17353: StreamFeedbackActionSheet ===

// Module 17353 (StreamFeedbackActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import FeedbackUtils from "FeedbackUtils" /* 11629 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 17218 */;
import shouldShowLogUploadForCategory from "shouldShowLogUploadForCategory" /* 17355 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Constants = fn(11626);
({ FeedbackCategory: hasOwnProperty, FeedbackType: metroRequire, StreamFeedbackOption: closure_7 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFeedbackActionSheet.tsx");

export default function StreamFeedbackActionSheet(stream) {
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  let obj = stream(7738);
  dependencyMap = obj.useGetStreamApplication(stream);
  let obj1 = stream(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj1.useStateFromStores(items, () => AuthenticationStore.getId() === stream.ownerId);
  const intl = stream(1114).intl;
  const intl2 = stream(1114).intl;
  const stringResult = intl.string(stream(1114).t["5smP3R"]);
  const intl3 = stream(1114).intl;
  let stringResult2 = intl3.string(stream(1114).t.CqjnLN);
  obj = { value: stateFromStores ? constants.STREAMING : constants.STREAM_WATCHING, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl4 = tmp(1114).intl;
  const tmp9 = analyticsData(2658);
  if (stateFromStores) {
    let TVTIT1 = tmp9["0ZBLiZ"];
    let tmp10 = tmp8;
  } else {
    TVTIT1 = tmp9.TVTIT1;
    tmp10 = tmp8;
  }
  obj.label = intl4.string(TVTIT1);
  const intl5 = tmp(1114).intl;
  obj.problemsHeader = intl5.string(stream(1114).t["6Y1t5P"]);
  const stringResult1 = intl2.string(stream(1114).t["0uxA2V"]);
  obj.problemOptions = stream(11629).getStreamFeedbackOptions({ isStreamer: stateFromStores });
  obj = { value: constants2.FREEFORM, label: null };
  const intl6 = tmp(1114).intl;
  obj.label = intl6.string(stream(1114).t.emlT91);
  obj.freeformConfig = obj;
  obj1 = { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const tmpResult = stream(11629);
  if (stateFromStores) {
    stringResult2 = stringResult1;
  }
  obj1.ratingBody = stringResult2;
  const intl7 = tmp(1114).intl;
  obj1.categoriesHeader = intl7.string(tmp10(2658).tq8598);
  const items1 = [obj];
  obj1.optionsTree = items1;
  obj1.trackOpen = function trackOpen() {
    const obj = { type: "Stream Feedback Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != streamApplication) {
      id = streamApplication.id;
    }
    obj.application_id = id;
    let name = null;
    if (null != streamApplication) {
      name = streamApplication.name;
    }
    obj.application_name = name;
    let id1 = null;
    if (null != streamApplication) {
      id1 = streamApplication.id;
    }
    obj.game_id = id1;
    obj.track(AnalyticEvents.OPEN_POPOUT, obj);
  };
  obj1.trackReport = function trackReport(dontShowAgain) {
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      let obj = { feedbackType: constants.STREAM, location: "StreamFeedbackActionSheet" };
      obj.processOptOut(obj);
    }
    if (null != rating) {
      obj = { category, problem: null, variant: null, stream: null, feedback: null, streamApplication: null, analyticsData: null, location: "Stream End", rating: null };
      value = undefined;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      obj.problem = value;
      let variant;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      obj.variant = variant;
      obj.stream = stream;
      if (feedback == null) {
        feedback = "";
      }
      obj.feedback = feedback;
      obj.streamApplication = streamApplication;
      obj.analyticsData = analyticsData;
      obj.rating = rating;
      trackStreamProblemDefault(obj);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17356, dependencyMap.paths), "UploadLogs", { mediaSessionId: null, rtcConnectionId: null });
          const obj1 = { mediaSessionId: null, rtcConnectionId: null };
          const tmp22Result = ActionSheetActionCreatorsDefault;
        }
        obj3 = shouldShowLogUploadForCategory;
      }
      ToastUtils.presentFeedbackSent();
    }
  };
  return jsx(tmp10(17354), { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null });
};