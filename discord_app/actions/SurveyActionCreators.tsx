// discord_app/actions/SurveyActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import TypeUtils from "../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import SurveyStore from "../stores/SurveyStore.tsx";

const require = globalThis.__r;

require = fn;
const SURVEY_REFETCH_INTERVAL = fn(5081).SURVEY_REFETCH_INTERVAL;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, NoticeTypes: metroRequire, Endpoints: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(id, isActionTriggered) {
  DispatcherDefault.dispatch({ type: "SURVEY_OVERRIDE", id, isActionTriggered });
};
export const surveyHide = function surveyHide(key, dismissed) {
  DispatcherDefault.dispatch({ type: "SURVEY_HIDE", key });
  const obj2 = { type: "SURVEY_HIDE", key };
  const track = AnalyticsUtilsDefault.track;
  if (dismissed) {
    const obj3 = { notice_type: constants.SURVEY, survey_id: key, dismissed };
    track(hasOwnProperty.APP_NOTICE_CLOSED, obj3);
  } else {
    const obj4 = { notice_type: constants.SURVEY };
    track(hasOwnProperty.APP_NOTICE_PRIMARY_CTA_OPENED, obj4);
  }
};
export const surveySeen = function surveySeen(key) {
  _require = key;
  const lastSeenTimestamp = SurveyStore.getLastSeenTimestamp();
  if (null !== lastSeenTimestamp) {
    if (null != lastSeenTimestamp) {
      const _Date = Date;
    }
  }
  DispatcherDefault.dispatch({ type: "SURVEY_SEEN", key });
  const obj2 = { type: "SURVEY_SEEN", key };
  const obj4 = { url: closure_7.USER_SURVEY_SEEN(key), trackedActionData: null, rejectWithError: null };
  const obj3 = TrackedHTTPUtilsDefault;
  obj4.trackedActionData = {
    event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      return TypeUtils.exact({ key });
    },
  };
  const obj5 = {
    event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      return TypeUtils.exact({ key });
    },
  };
  obj4.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  return obj3.post(obj4);
};
