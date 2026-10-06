// === Module 15600: SurveyActionCreators ===

// Module 15600 (SurveyActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import TypeUtils from "TypeUtils" /* 2064 */;
import SurveyStore2 from "SurveyStore" /* 5087 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5089 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SurveyStore = SurveyStore2;
let _require;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const SURVEY_REFETCH_INTERVAL = SurveyStore2.SURVEY_REFETCH_INTERVAL;
({ AnalyticEvents: hasOwnProperty, NoticeTypes: metroRequire, Endpoints: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(id, isActionTriggered) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SURVEY_OVERRIDE", id, isActionTriggered };
  obj.dispatch(obj2);
};
export const surveyHide = function surveyHide(key, dismissed) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SURVEY_HIDE", key };
  obj.dispatch(obj2);
  const track = AnalyticsUtilsDefault.track;
  AnalyticsUtilsDefault;
  if (dismissed) {
    const obj3 = { notice_type: metroRequire.SURVEY, survey_id: key, dismissed };
    track(hasOwnProperty.APP_NOTICE_CLOSED, obj3);
  } else {
    const obj4 = { notice_type: metroRequire.SURVEY };
    track(hasOwnProperty.APP_NOTICE_PRIMARY_CTA_OPENED, obj4);
  }
};
export const surveySeen = function surveySeen(key) {
  let obj5;
  function properties() {
    const obj = TypeUtils;
    const obj2 = { key };
    return obj.exact(obj2);
  }
  _require = key;
  const lastSeenTimestamp = SurveyStore.getLastSeenTimestamp();
  if (null !== lastSeenTimestamp) {
    if (null != lastSeenTimestamp) {
      const _Date = Date;
    }
  }
  let obj = DispatcherDefault;
  let obj2 = { type: "SURVEY_SEEN", key };
  obj.dispatch(obj2);
  const tmp5 = TrackedHTTPUtilsDefault;
  const post = tmp5.post;
  const obj3 = { url: closure_7.USER_SURVEY_SEEN(key), trackedActionData: { event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN, properties }, rejectWithError: obj5.rejectWithMigratedError() };
  ({ event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN, properties });
  obj5 = require("HTTPUtils");
  return post(obj3);
};