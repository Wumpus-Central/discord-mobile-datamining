// === Module 5086: QualtricsActionCreators ===

// Module 5086 (QualtricsActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import QualtricsResponseStore from "QualtricsResponseStore" /* 5090 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SurveyStore from "SurveyStore" /* 5087 */;
import QualtricsStore from "QualtricsStore" /* 5091 */;
import QualtricsConstants from "QualtricsConstants" /* 5092 */;
import size from "module_2" /* 2 */;

let c2, c8, closure_3, state;

let c9;
let metroImportAll;
function fetchSurveyDetails() {
  return obj(...arguments);
}
let obj = function _fetchSurveyDetails() {
  obj = _asyncToGenerator(async (surveyId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj4 = { url: Endpoints.EMBEDDED_SURVEY(surveyId), rejectWithError: true };
              const obj6 = { value: get(obj4), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj5 = closure_130_1(closure_130_2[9]);
            obj5.captureException(closure_2);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj8 = { type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId, surveyDetails: body };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj8);
            c4 = 0;
            c6 = 3;
            return { value: body, done: true };
          }
        } catch (tmp24) {
          closure_3 = tmp24;
          if (0 === c4) {
            c6 = 3;
            throw tmp24;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function submitSurveyResponse() {
  return obj(...arguments);
}
obj = function _submitSurveyResponse() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_7;
    let obj6;
    let survey;
    let tmp17;
    let value;
    function parseSurveyResponses(arg0, arg1, arr) {
      survey = survey.getSurvey(arg0);
      if (null == survey) {
        return null;
      } else {
        obj = {};
        const _Object2 = Object;
        const entries = Object.entries(arg1);
        const tmp44 = entries[Symbol.iterator]();
        const tmp2 = entries;
        let tmp4 = tmp44;
        while (tmp44 !== undefined) {
          let tmp6 = closure_3(tmp3, 2);
          let first = tmp6[0];
          let tmp8 = first;
          let str = tmp6[1];
          let tmp9 = survey.Questions[first];
          let tmp10 = tmp9;
          if (null != tmp9) {
            if (tmp10.QuestionType === constants2.MULTIPLE_CHOICE) {
              if (tmp10.Selector === constants.MULTIPLE_ANSWER) {
                obj[tmp8] = str.split(",");
                if (null != tmp10.ChoiceOrder) {
                  let _HermesInternal4 = HermesInternal;
                  obj["" + tmp8 + "_DO"] = tmp10.ChoiceOrder;
                }
              }
            }
            if (tmp10.QuestionType === constants2.MULTIPLE_CHOICE) {
              if (tmp10.Selector === constants.SINGLE_ANSWER) {
                if (str.includes(":TEXT:")) {
                  let first1 = str.split(":TEXT:", 2)[0];
                  let _parseInt2 = parseInt;
                  let tmp26 = str.split(":TEXT:", 2)[1];
                  obj[tmp8] = parseInt(first1);
                  let _HermesInternal2 = HermesInternal;
                  let str2 = "";
                  let str3 = "_";
                  let str4 = "_TEXT";
                  obj["" + first + "_" + first1 + "_TEXT"] = tmp26;
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
            if (tmp10.QuestionType === constants2.TEXT_ENTRY) {
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
              const tmp4 = null != tmp2.ChoiceOrder && tmp2.QuestionType === constants2.MULTIPLE_CHOICE;
              if (tmp4) {
                if (survey.Questions[item].Selector === constants.MULTIPLE_ANSWER) {
                  obj[item] = [];
                }
                const _HermesInternal = HermesInternal;
                obj["" + item + "_DO"] = survey.Questions[item].ChoiceOrder;
              }
            }
          }
        });
        return obj;
      }
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c9 === 2) {
      c9 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let tmp20 = value;
      let tmp21 = arg0;
      let tmp23 = globalThis;
      let tmp24 = null;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          let closure_5;
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_5 = tmp;
              let closure_4 = tmp4;
              let tmp27 = state;
              state = state.getState();
              const displayedQuestions = state.getDisplayedQuestions(closure_0);
              let closure_2 = displayedQuestions;
              if (displayedQuestions == null) {
                closure_2 = [];
              }
              let tmp16 = parseSurveyResponses(tmp25, closure_1, closure_2);
              if (null == tmp16) {
                c9 = 3;
                const obj5 = { value: { responseId: "null" }, done: true };
                return obj5;
              } else {
                c6 = 1;
                value = {};
                const HTTP = HTTPUtils.HTTP;
                const request = { url: Endpoints.EMBEDDED_SURVEY_RESPONSE(closure_0), body: obj6, rejectWithError: true };
                const post = HTTP.post;
                obj6 = { values_json: JSON.stringify(tmp16) };
                const _JSON = JSON;
                c8 = 2;
                c9 = 1;
                const obj7 = { value: post(request), done: false };
                return obj7;
              }
            }
          } else if (1 === tmp4) {
            let tmp8 = closure_5;
            let tmp9 = survey;
            let tmp10 = survey;
            c6 = 0;
            closure_0 = survey;
            let tmp13 = closure_0;
            const obj3 = closure_133_1(closure_133_2[9]);
            obj3.captureException(closure_0);
            c9 = 3;
            const obj8 = { value: { responseId: "null" }, done: true };
            return obj8;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            value.responseId = value.body.responseId;
            c6 = 0;
            c9 = 3;
            let tmp6 = value;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp17) {
          survey = tmp17;
          let tmp19 = c6;
          if (0 === c6) {
            c9 = 3;
            throw tmp17;
          } else {
            c8 = 1;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
function fireSurveyAction() {
  return obj(...arguments);
}
obj = function _fireSurveyAction() {
  let actionTriggeredSurveyOverride;
  obj = _asyncToGenerator(async (arg0, metadata) => {
    let body = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj5;
      function shouldFireSurveyAction(arg0) {
        let result = closure_1_5.shouldAllowSurveyAction();
        if (result) {
          const _Math = Math;
          result = body(closure_1_2[10]).SURVEY_ACTION_SAMPLE_PERCENTS[arg0] >= 100 * Math.random();
        }
        return result;
      }
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              body = undefined;
              HTTP = actionTriggeredSurveyOverride.getActionTriggeredSurveyOverride();
              c2 = HTTP;
              if (HTTP == null) {
                c2 = undefined;
              }
              HTTP = shouldFireSurveyAction(tmp21);
              const obj4 = { action_type: body };
              const tmp11 = c2;
              if (null != metadata) {
                obj4.metadata = metadata;
              }
              c5 = 1;
              HTTP = HTTPUtils.HTTP;
              const request = { url: constants.EMBEDDED_SURVEY_ACTION, query: obj5, body: obj4, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              obj5 = { force_survey_id: tmp11 };
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (1 === tmp4) {
            c5 = 0;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value;
            HTTP = closure_132_1(closure_132_2[8]);
            let survey;
            const dispatch = HTTP.dispatch;
            if (body != null) {
              body = body.body;
              if (body != null) {
                survey = body.survey;
              }
            }
            obj = { type: "SURVEY_FETCHED", survey, isActionTriggered: true };
            dispatch(obj);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          if (0 === c5) {
            c7 = 3;
            throw tmp15;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const useQualtricsResponseStore = QualtricsResponseStore.useQualtricsResponseStore;
({ QuestionSelectorEnum: metroImportAll, QuestionTypeEnum: c9 } = QualtricsConstants);
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/qualtrics/QualtricsActionCreators.tsx");

export default { fetchSurveyDetails, submitSurveyResponse, fireSurveyAction };
export { fetchSurveyDetails };
export { submitSurveyResponse };
export { fireSurveyAction };