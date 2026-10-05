// discord_app/actions/surveyFetch.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import TypeUtils from "../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/surveyFetch.tsx");

export const surveyFetch = function surveyFetch(surveyOverride, disable_auto_seen) {
  let obj4;
  function properties(body) {
    let survey;
    if (body != null) {
      body = body.body;
      if (body != null) {
        survey = body.survey;
      }
    }
    let key;
    const exact = TypeUtils.exact;
    TypeUtils;
    if (survey != null) {
      key = survey.key;
    }
    return exact({ key });
  }
  let obj = {};
  if (null != surveyOverride) {
    obj.survey_override = surveyOverride;
  }
  if (null != disable_auto_seen) {
    obj.disable_auto_seen = disable_auto_seen;
  }
  const tmp = TrackedHTTPUtilsDefault;
  const request = {
    url: Endpoints.USER_SURVEY,
    query: obj,
    trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_SURVEY_FETCH, properties },
    rejectWithError: obj4.rejectWithMigratedError(),
  };
  const get = tmp.get;
  ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_SURVEY_FETCH, properties });
  obj4 = HTTPUtils;
  const value = get(request);
  return value.then(
    (body) => {
      let survey;
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (body != null) {
        body = body.body;
        if (body != null) {
          survey = body.survey;
        }
      }
      dispatch({ type: "SURVEY_FETCHED", survey });
      let survey1;
      if (body != null) {
        const body2 = body.body;
        if (body2 != null) {
          survey1 = body2.survey;
        }
      }
      return survey1;
    },
    () => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "SURVEY_FETCHED", survey: null });
    },
  );
};
