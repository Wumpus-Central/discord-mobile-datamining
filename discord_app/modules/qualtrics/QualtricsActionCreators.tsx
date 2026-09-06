// === Module 4750: QualtricsActionCreators ===

// Module 4750 (QualtricsActionCreators)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SurveyStore from "SurveyStore" /* 4751 */;
import QualtricsStore from "QualtricsStore" /* 4755 */;

require = fn;
function fetchSurveyDetails() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchSurveyDetails(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          let body;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.EMBEDDED_SURVEY(closure_0), rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        let obj4 = closure_130_1(closure_130_2[9]);
        obj4.captureException(closure_129_2);
        c6 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        obj = closure_130_1(closure_130_2[8]);
        obj4 = { type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId: closure_129_0, surveyDetails: body };
        obj.dispatch(obj4);
        c4 = 0;
        c6 = 3;
        const obj5 = { value: body, done: true };
        return obj5;
      }
    } catch (tmp27) {
      closure_3 = tmp27;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp27;
      } else {
        c5 = tmp;
      }
    }
  }
};
function submitSurveyResponse() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _submitSurveyResponse(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          state = state.getState();
          const displayedQuestions = state.getDisplayedQuestions(closure_0);
          closure_2 = displayedQuestions;
          if (displayedQuestions == null) {
            closure_2 = [];
          }
          let tmp19 = (function parseSurveyResponses(arg0, arg1, arr) {
            survey = survey.getSurvey(arg0);
            if (null == survey) {
              return null;
            } else {
              const obj = {};
              const _Object2 = Object;
              const entries = Object.entries(arg1);
              const tmp43 = entries[Symbol.iterator]();
              while (tmp43 !== undefined) {
                let tmp6 = closure_3(tmp3, 2);
                let first = tmp6[0];
                let tmp8 = first;
                let str = tmp6[1];
                let tmp9 = survey.Questions[first];
                let tmp10 = tmp9;
                if (null != tmp9) {
                  let tmp45 = constants2;
                  if (tmp10.QuestionType === constants2.MULTIPLE_CHOICE) {
                    if (tmp10.Selector === constants.MULTIPLE_ANSWER) {
                      obj[tmp8] = str.split(",");
                      if (null != tmp10.ChoiceOrder) {
                        let _HermesInternal4 = HermesInternal;
                        obj["" + tmp8 + "_DO"] = tmp10.ChoiceOrder;
                      }
                    }
                  }
                  if (tmp10.QuestionType === tmp45.MULTIPLE_CHOICE) {
                    if (tmp10.Selector === constants.SINGLE_ANSWER) {
                      if (str.includes(":TEXT:")) {
                        let first1 = str.split(":TEXT:", 2)[0];
                        let _parseInt2 = parseInt;
                        obj[tmp8] = parseInt(first1);
                        let _HermesInternal2 = HermesInternal;
                        let str2 = "";
                        let str3 = "_";
                        let str4 = "_TEXT";
                        obj["" + first + "_" + first1 + "_TEXT"] = str.split(":TEXT:", 2)[1];
                      } else {
                        let _parseInt = parseInt;
                        obj[tmp8] = parseInt(str);
                      }
                      if (null != tmp10.ChoiceOrder) {
                        let _HermesInternal3 = HermesInternal;
                        obj["" + tmp8 + "_DO"] = tmp10.ChoiceOrder;
                      }
                    }
                  }
                  if (tmp10.QuestionType === tmp45.TEXT_ENTRY) {
                    let _HermesInternal = HermesInternal;
                    obj["" + tmp8 + "_TEXT"] = str;
                  } else {
                    obj[tmp8] = str;
                  }
                }
                continue;
              }
              const _Object = Object;
              closure_2 = Object.keys(arg1);
              const item = arr.forEach((item) => {
                if (!closure_2.includes(item)) {
                  if (null != survey.Questions[item]) {
                    let tmp4 = null != tmp2.ChoiceOrder;
                    if (tmp4) {
                      tmp4 = tmp2.QuestionType === constants2.MULTIPLE_CHOICE;
                    }
                    if (tmp4) {
                      if (tmp2.Selector === constants.MULTIPLE_ANSWER) {
                        obj[item] = [];
                      }
                      const _HermesInternal = HermesInternal;
                      obj["" + item + "_DO"] = tmp2.ChoiceOrder;
                    }
                  }
                }
              });
              return obj;
            }
          })(closure_0, closure_1, closure_2);
          if (null == tmp19) {
            c9 = 3;
            const obj1 = { value: { responseId: "null" }, done: true };
            return obj1;
          } else {
            c6 = 1;
            value = {};
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.EMBEDDED_SURVEY_RESPONSE(tmp29), body: null, rejectWithError: true };
            let obj2 = { values_json: null };
            const _JSON = JSON;
            obj2.values_json = JSON.stringify(tmp19);
            request.body = obj2;
            c8 = 2;
            c9 = 1;
            const obj3 = { value: HTTP.post(request), done: false };
            return obj3;
          }
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_132_0 = survey;
        obj2 = closure_133_1(closure_133_2[9]);
        obj2.captureException(closure_132_0);
        c9 = 3;
        const obj4 = { value: { responseId: "null" }, done: true };
        return obj4;
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c9 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        value.responseId = value.body.responseId;
        c6 = 0;
        c9 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp20) {
      survey = tmp20;
      if (tmp4 === c6) {
        c9 = tmp2;
        throw tmp20;
      } else {
        c8 = tmp;
      }
    }
  }
};
function fireSurveyAction() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _fireSurveyAction(arg0, arg1) {
  closure_4 = tmp3;
  closure_3 = tmp5;
  actionTriggeredSurveyOverride = actionTriggeredSurveyOverride.getActionTriggeredSurveyOverride();
  dependencyMap = actionTriggeredSurveyOverride;
  if (actionTriggeredSurveyOverride == null) {
    dependencyMap = undefined;
  }
  const obj1 = { action_type: _require };
  if (null != closure_1) {
    obj1.metadata = tmp27;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.EMBEDDED_SURVEY_ACTION, query: { force_survey_id: dependencyMap }, body: obj1, rejectWithError: true };
  await HTTP.post(request);
  if (1 === tmp8) {
    c5 = 0;
  } else if (arg0 === 1) {
    c7 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_131_0 = arg1;
    let survey;
    if (closure_131_0 != null) {
      const body = closure_131_0.body;
      if (body != null) {
        survey = body.survey;
      }
    }
    closure_132_1(closure_132_2[8]).dispatch({ type: "SURVEY_FETCHED", survey, isActionTriggered: true });
    c5 = 0;
    closure_132_1(closure_132_2[8]);
  }
  return arg1;
};
const useQualtricsResponseStore = fn(4754).useQualtricsResponseStore;
const QualtricsConstants = fn(4756);
({ QuestionSelectorEnum: closure_8, QuestionTypeEnum: closure_9 } = QualtricsConstants);
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/qualtrics/QualtricsActionCreators.tsx");

export default { fetchSurveyDetails, submitSurveyResponse, fireSurveyAction };
export { fetchSurveyDetails };
export { submitSurveyResponse };
export { fireSurveyAction };