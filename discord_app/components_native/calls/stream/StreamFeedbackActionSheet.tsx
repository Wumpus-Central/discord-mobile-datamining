// === Module 17529: StreamFeedbackActionSheet ===

// Module 17529 (StreamFeedbackActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants2 from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import FeedbackUtils from "FeedbackUtils" /* 11265 */;
import trackStreamProblemDefault from "trackStreamProblem" /* 17389 */;
import shouldShowLogUploadForCategory from "shouldShowLogUploadForCategory" /* 17531 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 11262 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const AnalyticEvents = Constants2.AnalyticEvents;
({ FeedbackCategory: hasOwnProperty, FeedbackType: metroRequire, StreamFeedbackOption: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFeedbackActionSheet.tsx");

export default function StreamFeedbackActionSheet(stream) {
  let TVTIT1;
  let intl5;
  let intl6;
  let obj4;
  let streamApplication;
  let string;
  let tmp10;
  let tmpResult;
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  const tmp = stream;
  let obj = stream(7241);
  dependencyMap = obj.useGetStreamApplication(stream);
  let obj2 = stream(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => AuthenticationStore.getId() === stream.ownerId);
  const intl = stream(1126).intl;
  const stringResult = intl.string(stream(1126).t["5smP3R"]);
  const intl2 = stream(1126).intl;
  const stringResult1 = intl2.string(stream(1126).t["0uxA2V"]);
  const intl3 = stream(1126).intl;
  let stringResult2 = intl3.string(stream(1126).t.CqjnLN);
  let obj3 = { value: stateFromStores ? constants.STREAMING : constants.STREAM_WATCHING, label: string(TVTIT1), problemsHeader: intl5.string(tmp(1126).t["6Y1t5P"]), problemOptions: tmpResult.getStreamFeedbackOptions({ isStreamer: stateFromStores }), freeformConfig: obj4 };
  const intl4 = tmp(1126).intl;
  string = intl4.string;
  const tmp9 = analyticsData(2783);
  if (stateFromStores) {
    TVTIT1 = tmp9["0ZBLiZ"];
    tmp10 = tmp8;
  } else {
    TVTIT1 = tmp9.TVTIT1;
    tmp10 = tmp8;
  }
  intl5 = tmp(1126).intl;
  tmpResult = tmp(11265);
  obj4 = { value: constants2.FREEFORM, label: intl6.string(tmp(1126).t.emlT91) };
  intl6 = tmp(1126).intl;
  tmp10(17530);
  if (stateFromStores) {
    stringResult2 = stringResult1;
  }
  const intl7 = tmp(1126).intl;
  const items1 = [obj3];
  return <tmp10Result headerLabel={stringResult} showHeaderCloseButton ratingBody={stringResult2} categoriesHeader={intl7.string(tmp10(2783).tq8598)} optionsTree={items1} trackOpen={function trackOpen() {
    let id;
    let id1;
    let name;
    const obj = { type: "Stream Feedback Sheet", other_user_id: stream.ownerId, application_id: id, application_name: name, game_id: id1 };
    id = null;
    const track = AnalyticsUtilsDefault.track;
    const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
    AnalyticsUtilsDefault;
    if (null != streamApplication) {
      id = streamApplication.id;
    }
    name = null;
    if (null != streamApplication) {
      name = streamApplication.name;
    }
    id1 = null;
    if (null != streamApplication) {
      id1 = streamApplication.id;
    }
    track(OPEN_POPOUT, obj);
  }} trackReport={function trackReport(dontShowAgain) {
    let category;
    let feedback;
    let rating;
    let reason;
    let value;
    let variant;
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { feedbackType: metroRequire.STREAM, location: "StreamFeedbackActionSheet" };
      const obj = FeedbackUtils;
      obj.processOptOut(obj2);
    }
    if (null != rating) {
      const obj5 = { category, problem: value, variant, stream, feedback, streamApplication, analyticsData, location: "Stream End", rating };
      value = undefined;
      const tmp24 = trackStreamProblemDefault;
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
      tmp24(obj5);
      if (null != reason) {
        const obj3 = shouldShowLogUploadForCategory;
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          const obj7 = { mediaSessionId: null, rtcConnectionId: null };
          ({ media_session_id: obj6.mediaSessionId, rtc_connection_id: obj6.rtcConnectionId } = analyticsData);
          const tmp22Result = ActionSheetActionCreatorsDefault;
          tmp22Result.openLazy(asyncRequire(17532, dependencyMap.paths), "UploadLogs", obj7);
        }
      }
      const obj4 = ToastUtils;
      obj4.presentFeedbackSent();
    }
  }} />;
};