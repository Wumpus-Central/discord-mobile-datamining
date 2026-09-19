// === Module 4948: SurveyActionCreators ===

// Module 4948 (SurveyActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import TypeUtils from "TypeUtils" /* 2053 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4949 */;
import SurveyStore from "SurveyStore" /* 4947 */;

const require = globalThis.__r;

require = fn;
const SURVEY_REFETCH_INTERVAL = fn(4947).SURVEY_REFETCH_INTERVAL;
const Constants = fn(1074);
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
export const surveyFetch = function surveyFetch(surveyOverride, disable_auto_seen) {
  const obj = {};
  if (null != surveyOverride) {
    obj.survey_override = surveyOverride;
  }
  if (null != disable_auto_seen) {
    obj.disable_auto_seen = disable_auto_seen;
  }
  const request = { url: React5.USER_SURVEY, query: obj, trackedActionData: null, rejectWithError: null };
  const obj2 = TrackedHTTPUtilsDefault;
  request.trackedActionData = {
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
  const obj3 = {
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
  DispatcherDefault.dispatch({ type: "SURVEY_SEEN", key });
  const obj2 = { type: "SURVEY_SEEN", key };
  const obj4 = { url: closure_7.USER_SURVEY_SEEN(key), trackedActionData: null, rejectWithError: null };
  const obj3 = TrackedHTTPUtilsDefault;
  obj4.trackedActionData = {
    event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      return TypeUtils.exact({ key });
    }
  };
  const obj5 = {
    event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      return TypeUtils.exact({ key });
    }
  };
  obj4.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  return obj3.post(obj4);
};