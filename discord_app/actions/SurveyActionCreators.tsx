// === Module 4752: SurveyActionCreators ===

// Module 4752 (SurveyActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TypeUtils from "TypeUtils" /* 1969 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import SurveyStore from "SurveyStore" /* 4751 */;

require = fn;
const SURVEY_REFETCH_INTERVAL = fn(4751).SURVEY_REFETCH_INTERVAL;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, NoticeTypes: metroRequire, Endpoints: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(id, isActionTriggered) {
  const obj = { type: "SURVEY_OVERRIDE", id, isActionTriggered };
  obj.dispatch(obj);
};
export const surveyHide = function surveyHide(key, dismissed) {
  let obj = { type: "SURVEY_HIDE", key };
  obj.dispatch(obj);
  const track = AnalyticsUtilsDefault.track;
  if (dismissed) {
    obj = { notice_type: constants.SURVEY, survey_id: key, dismissed };
    track(tmp3.APP_NOTICE_CLOSED, obj);
  } else {
    const obj1 = { notice_type: constants.SURVEY };
    track(tmp3.APP_NOTICE_PRIMARY_CTA_OPENED, obj1);
  }
};
export const surveyFetch = function surveyFetch(surveyOverride, disable_auto_seen) {
  let obj = {};
  if (null != surveyOverride) {
    obj.survey_override = surveyOverride;
  }
  if (null != disable_auto_seen) {
    obj.disable_auto_seen = disable_auto_seen;
  }
  const request = { url: React5.USER_SURVEY, query: obj, trackedActionData: null, rejectWithError: null };
  obj = {
    event: discord_common_AnalyticsUtils.NetworkActionNames.USER_SURVEY_FETCH,
    properties(body) {
      let survey;
      if (body != null) {
        body = body.body;
        if (body != null) {
          survey = body.survey;
        }
      }
      let key;
      if (survey != null) {
        key = survey.key;
      }
      return require("TypeUtils").exact({ key });
    }
  };
  request.trackedActionData = obj;
  const obj2 = TrackedHTTPUtilsDefault;
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  value = obj2.get(request);
  return value.then((body) => {
    let survey;
    if (body != null) {
      body = body.body;
      if (body != null) {
        survey = body.survey;
      }
    }
    DispatcherDefault.dispatch({ type: "SURVEY_FETCHED", survey });
    let survey1;
    if (body != null) {
      const body2 = body.body;
      if (body2 != null) {
        survey1 = body2.survey;
      }
    }
    return survey1;
  }, () => {
    DispatcherDefault.dispatch({ type: "SURVEY_FETCHED", survey: null });
  });
};
export const surveySeen = function surveySeen(key) {
  _require = key;
  const lastSeenTimestamp = SurveyStore.getLastSeenTimestamp();
  if (null !== lastSeenTimestamp) {
    if (null != lastSeenTimestamp) {
      const _Date = Date;
    }
  }
  let obj = { type: "SURVEY_SEEN", key };
  obj.dispatch(obj);
  obj = { url: closure_7.USER_SURVEY_SEEN(key), trackedActionData: null, rejectWithError: null };
  const obj3 = TrackedHTTPUtilsDefault;
  obj.trackedActionData = {
    event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      const obj = { key };
      return obj.exact(obj);
    }
  };
  const obj1 = {
    event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      const obj = { key };
      return obj.exact(obj);
    }
  };
  obj.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  return obj3.post(obj);
};