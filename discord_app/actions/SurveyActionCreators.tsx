// === Module 9875: overrideSurvey ===

// Module 9875 (overrideSurvey)
import encodeProperties from "encodeProperties" /* 503 */;
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef5227 from "module_5227" /* 5227 */;
import fetchSurveyIfNeeded from "fetchSurveyIfNeeded" /* 9874 */;
import { SURVEY_REFETCH_INTERVAL } from "fetchSurveyIfNeeded" /* 9874 */;
import ME from "ME" /* 676 */;

require = fn;
({ AnalyticEvents: c5, NoticeTypes: closure_6, Endpoints: error } = ME);
const result = require("obj132").fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(id) {
  const obj = { type: "SURVEY_OVERRIDE", id };
  obj.dispatch(obj);
};
export const surveyHide = function surveyHide(key, arg1) {
  let obj = { type: "SURVEY_HIDE", key };
  obj.dispatch(obj);
  const track = expandEventPropertiesDefault.track;
  if (arg1) {
    obj = { notice_type: null, survey_id: null, dismissed: null };
    obj[0] = constants.SURVEY;
    obj[1] = key;
    obj[2] = arg1;
    track(constants.APP_NOTICE_CLOSED, obj);
  } else {
    obj1 = { notice_type: null };
    obj1[0] = constants.SURVEY;
    track(constants.APP_NOTICE_PRIMARY_CTA_OPENED, obj1);
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
  const obj2 = _modDef5227;
  obj[3] = sendRequest.rejectWithMigratedError();
  const value = obj2.get(obj);
  return value.then((result) => {
    let survey;
    if (result != null) {
      const body = result.body;
      if (body != null) {
        survey = body.survey;
      }
    }
    callback2(709).dispatch({ type: "SURVEY_FETCHED", survey });
    let survey1;
    if (result != null) {
      const body2 = result.body;
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
  let obj = { type: "SURVEY_SEEN", key };
  obj.dispatch(obj);
  obj = { url: closure_7.USER_SURVEY_SEEN(key), trackedActionData: null, rejectWithError: null };
  const obj3 = _modDef5227;
  obj[1] = {
    event: _require(503).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      key(dependencyMap[6]);
      const obj = { key };
      return obj.exact(obj);
    }
  };
  obj1 = {
    event: _require(503).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      key(dependencyMap[6]);
      const obj = { key };
      return obj.exact(obj);
    }
  };
  obj[2] = _require(530).rejectWithMigratedError();
  return obj3.post(obj);
};