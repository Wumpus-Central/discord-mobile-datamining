// discord_app/actions/SurveyActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import expandEventPropertiesDefault from "../utils/AnalyticsUtils.tsx";
import encodeProperties from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef4753 from "../utils/TrackedHTTPUtils.tsx";
import closure_3 from "../stores/SurveyStore.tsx";
import { SURVEY_REFETCH_INTERVAL } from "../stores/SurveyStore.tsx";
import ME from "../Constants.tsx";

require = arg1;
({ AnalyticEvents: c5, NoticeTypes: closure_6, Endpoints: error } = ME);
const result = require("set").fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(id) {
  let obj = dispatcherDefault;
  obj = { type: "SURVEY_OVERRIDE", id, isActionTriggered: arg1 };
  obj.dispatch(obj);
};
export const surveyHide = function surveyHide(key, arg1) {
  let obj = dispatcherDefault;
  obj = { type: "SURVEY_HIDE", key };
  obj.dispatch(obj);
  const track = expandEventPropertiesDefault.track;
  if (arg1) {
    obj = { notice_type: null, survey_id: null, dismissed: null };
    obj[0] = constants.SURVEY;
    obj[1] = key;
    obj[2] = arg1;
    track(tmp3.APP_NOTICE_CLOSED, obj);
  } else {
    obj1 = { notice_type: null };
    obj1[0] = constants.SURVEY;
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
  obj = { url: closure_7.USER_SURVEY, query: obj, trackedActionData: null, rejectWithError: null };
  obj = {
    event: encodeProperties.NetworkActionNames.USER_SURVEY_FETCH,
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
      return callback(1969).exact({ key });
    },
  };
  obj[2] = obj;
  const obj2 = _modDef4753;
  obj[3] = sendRequest.rejectWithMigratedError();
  const value = obj2.get(obj);
  return value.then(
    (body) => {
      let survey;
      if (body != null) {
        body = body.body;
        if (body != null) {
          survey = body.survey;
        }
      }
      callback2(573).dispatch({ type: "SURVEY_FETCHED", survey });
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
      callback2(573).dispatch({ type: "SURVEY_FETCHED", survey: null });
    },
  );
};
export const surveySeen = function surveySeen(key) {
  const _require = key;
  lastSeenTimestamp = lastSeenTimestamp.getLastSeenTimestamp();
  if (null !== lastSeenTimestamp) {
    if (null != lastSeenTimestamp) {
      const _Date = Date;
    }
  }
  let obj = dispatcherDefault;
  obj = { type: "SURVEY_SEEN", key };
  obj.dispatch(obj);
  obj = { url: closure_7.USER_SURVEY_SEEN(key), trackedActionData: null, rejectWithError: null };
  const obj3 = _modDef4753;
  obj[1] = {
    event: require("../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx").NetworkActionNames
      .USER_SURVEY_SEEN,
    properties() {
      let obj = key(closure_1_2[6]);
      obj = { key };
      return obj.exact(obj);
    },
  };
  obj1 = {
    event: require("../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx").NetworkActionNames
      .USER_SURVEY_SEEN,
    properties() {
      let obj = key(closure_1_2[6]);
      obj = { key };
      return obj.exact(obj);
    },
  };
  obj[2] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
  return obj3.post(obj);
};
