// === Module 4664: overrideSurvey ===

// Module 4664 (overrideSurvey)
import encodeProperties from "encodeProperties" /* 503 */;
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef4665 from "module_4665" /* 4665 */;
import closure_3 from "fetchSurveyIfNeeded" /* 4663 */;
import { SURVEY_REFETCH_INTERVAL } from "fetchSurveyIfNeeded" /* 4663 */;
import ME from "ME" /* 676 */;

require = arg1;
({ AnalyticEvents: c5, NoticeTypes: closure_6, Endpoints: error } = ME);
const result = require("set").fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(id) {
  let obj = dispatcherDefault;
  obj = { type: "SURVEY_OVERRIDE", id };
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
      return callback(1404).exact({ key });
    }
  };
  obj[2] = obj;
  const obj2 = _modDef4665;
  obj[3] = sendRequest.rejectWithMigratedError();
  const value = obj2.get(obj);
  return value.then((body) => {
    let survey;
    if (body != null) {
      body = body.body;
      if (body != null) {
        survey = body.survey;
      }
    }
    callback2(709).dispatch({ type: "SURVEY_FETCHED", survey });
    let survey1;
    if (body != null) {
      const body2 = body.body;
      if (body2 != null) {
        survey1 = body2.survey;
      }
    }
    return survey1;
  }, () => {
    callback2(709).dispatch({ type: "SURVEY_FETCHED", survey: null });
  });
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
  const obj3 = _modDef4665;
  obj[1] = {
    event: _require(503).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      let obj = key(closure_1_2[6]);
      obj = { key };
      return obj.exact(obj);
    }
  };
  obj1 = {
    event: _require(503).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      let obj = key(closure_1_2[6]);
      obj = { key };
      return obj.exact(obj);
    }
  };
  obj[2] = _require(530).rejectWithMigratedError();
  return obj3.post(obj);
};