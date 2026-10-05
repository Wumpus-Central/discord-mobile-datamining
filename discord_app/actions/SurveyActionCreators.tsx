// discord_app/actions/SurveyActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import TypeUtils from "../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import SurveyStore2 from "../stores/SurveyStore.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  const obj3 = {
    url: closure_7.USER_SURVEY_SEEN(key),
    trackedActionData: {
      event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN,
      properties,
    },
    rejectWithError: obj5.rejectWithMigratedError(),
  };
  ({ event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN, properties });
  obj5 = require("HTTPUtils");
  return post(obj3);
};
