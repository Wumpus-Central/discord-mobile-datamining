// === Module 16693: StreamFeedbackActionSheet ===

// Module 16693 (StreamFeedbackActionSheet)
import noopAll from "noop" /* 19 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import { AnalyticEvents } from "ME" /* 676 */;
import FeedbackRating from "FeedbackRating" /* 11174 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ FeedbackCategory: c5, FeedbackType: closure_6, StreamFeedbackOption: error } = FeedbackRating);
const result = require("set").fileFinishedImporting("components_native/calls/stream/StreamFeedbackActionSheet.tsx");

export default function StreamFeedbackActionSheet(stream) {
  stream = stream.stream;
  const analyticsData = stream.analyticsData;
  dependencyMap = undefined;
  let obj = stream(7342);
  dependencyMap = obj.useGetStreamApplication(stream);
  obj1 = stream(589);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_3.getId() === stream.ownerId);
  const intl = stream(1236).intl;
  const intl2 = stream(1236).intl;
  const stringResult = intl.string(stream(1236).t["5smP3R"]);
  const intl3 = stream(1236).intl;
  let stringResult2 = intl3.string(stream(1236).t.CqjnLN);
  obj = { value: stateFromStores ? tmp7.STREAMING : tmp7.STREAM_WATCHING, label: null, problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl4 = tmp(1236).intl;
  let tmp9 = analyticsData(2567);
  if (stateFromStores) {
    let TVTIT1 = tmp9["0ZBLiZ"];
    let tmp10 = tmp8;
  } else {
    TVTIT1 = tmp9.TVTIT1;
    tmp10 = tmp8;
  }
  obj[1] = intl4.string(TVTIT1);
  const intl5 = tmp(1236).intl;
  obj[2] = intl5.string(stream(1236).t["6Y1t5P"]);
  const stringResult1 = intl2.string(stream(1236).t["0uxA2V"]);
  obj[3] = stream(11177).getStreamFeedbackOptions({ isStreamer: stateFromStores });
  obj = { value: constants.FREEFORM, label: null };
  const intl6 = tmp(1236).intl;
  obj[1] = intl6.string(stream(1236).t.emlT91);
  obj[4] = obj;
  obj1 = { headerLabel: stringResult, showHeaderCloseButton: true, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const tmp11 = jsx;
  const tmpResult = stream(11177);
  if (stateFromStores) {
    stringResult2 = stringResult1;
  }
  obj1[2] = stringResult2;
  const intl7 = tmp(1236).intl;
  obj1[3] = intl7.string(tmp10(2567).tq8598);
  const items1 = [obj];
  obj1[4] = items1;
  obj1[5] = function trackOpen() {
    let obj = analyticsData(paths[11]);
    obj = { type: "Stream Feedback Sheet", other_user_id: stream.ownerId, application_id: null, application_name: null, game_id: null };
    let id = null;
    if (null != paths) {
      id = tmp.id;
    }
    obj[2] = id;
    let name = null;
    if (null != paths) {
      name = tmp.name;
    }
    obj[3] = name;
    let id1 = null;
    if (null != paths) {
      id1 = tmp.id;
    }
    obj[4] = id1;
    obj.track(closure_1_4.OPEN_POPOUT, obj);
  };
  obj1[6] = function trackReport(dontShowAgain) {
    ({ rating, category, reason, feedback } = dontShowAgain);
    if (dontShowAgain.dontShowAgain) {
      let obj = stream(paths[9]);
      obj = { feedbackType: null, location: "StreamFeedbackActionSheet" };
      obj[0] = closure_1_6.STREAM;
      obj.processOptOut(obj);
    }
    if (null != rating) {
      obj = { category: null, problem: null, variant: null, stream: null, feedback: null, streamApplication: null, analyticsData: null, location: "Stream End", rating: null };
      obj[0] = category;
      let value;
      if (reason != null) {
        value = reason.value;
      }
      if (value == null) {
        value = null;
      }
      obj[1] = value;
      let variant;
      if (reason != null) {
        variant = reason.variant;
      }
      if (variant == null) {
        variant = null;
      }
      obj[2] = variant;
      obj[3] = stream;
      if (feedback == null) {
        feedback = "";
      }
      obj[4] = feedback;
      obj[5] = paths;
      obj[6] = analyticsData;
      obj[8] = rating;
      analyticsData(paths[12])(obj);
      if (null != reason) {
        if (obj3.shouldShowLogUploadForCategory(rating, category, reason)) {
          ({ media_session_id: obj6[0], rtc_connection_id: obj6[1] } = tmp9);
          tmp22(paths[14]).openLazy(stream(paths[16])(paths[15], paths.paths), "UploadLogs", { mediaSessionId: null, rtcConnectionId: null });
          obj1 = { mediaSessionId: null, rtcConnectionId: null };
          const tmp22Result = tmp22(paths[14]);
        }
        obj3 = stream(paths[13]);
      }
      tmp22 = analyticsData;
      const tmp24 = analyticsData(paths[12]);
      tmp9 = analyticsData;
      stream(paths[17]).presentFeedbackSent();
      const obj4 = stream(paths[17]);
    }
  };
  return tmp11(tmp10(16694), obj1);
};