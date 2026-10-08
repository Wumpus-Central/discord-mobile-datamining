// === Module 7467: surveyFetch ===

// Module 7467 (surveyFetch)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import TypeUtils from "TypeUtils" /* 2076 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5944 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/surveyFetch.tsx");

export const surveyFetch = function surveyFetch(surveyOverride, disable_auto_seen) {
  const obj = {};
  if (null != surveyOverride) {
    obj.survey_override = surveyOverride;
  }
  if (null != disable_auto_seen) {
    obj.disable_auto_seen = disable_auto_seen;
  }
  const request = { url: Endpoints.USER_SURVEY, query: obj, trackedActionData: null, rejectWithError: null };
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
      return TypeUtils.exact({ key });
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
      return TypeUtils.exact({ key });
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