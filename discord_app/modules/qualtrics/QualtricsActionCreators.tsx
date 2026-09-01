// === Module 4710: fetchSurveyDetails ===

// Module 4710 (fetchSurveyDetails)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "fetchSurveyIfNeeded" /* 4711 */;
import { useQualtricsResponseStore } from "useQualtricsResponseStore" /* 4714 */;
import closure_7 from "map" /* 4715 */;
import QuestionTypeEnum from "QuestionTypeEnum" /* 4716 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function fetchSurveyDetails() {
  const self = this;
  const apply = _fetchSurveyDetails.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSurveyDetails() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp3;
              body = tmp7;
              body = undefined;
              c4 = 1;
              const HTTP = callback(closure_1_2[7]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = closure_1_10.EMBEDDED_SURVEY(callback);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = closure_3;
            let obj4 = body(1208);
            obj4.captureException(dependencyMap);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = body(709);
            obj4 = { type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId: null, surveyDetails: null };
            obj4[1] = callback;
            obj4[2] = body;
            obj.dispatch(obj4);
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
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
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function submitSurveyResponse() {
  const self = this;
  const apply = _submitSurveyResponse.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitSurveyResponse() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c8 = 0;
    c9 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_5 = tmp3;
              closure_4 = tmp7;
              state = state.getState();
              const displayedQuestions = state.getDisplayedQuestions(callback);
              let table = displayedQuestions;
              if (displayedQuestions == null) {
                table = [];
              }
              let tmp19 = (function parseSurveyResponses(arg0, arg1, closure_2) {
                let tmp20;
                const survey = tmp20.getSurvey(arg0);
                if (null == survey) {
                  return null;
                } else {
                  const obj = {};
                  const _Object2 = Object;
                  const entries = Object.entries(arg1);
                  const tmp43 = entries[Symbol.iterator]();
                  while (tmp43 !== undefined) {
                    let tmp5 = callback;
                    let tmp6 = callback(tmp3, 2);
                    let first = tmp6[0];
                    let tmp8 = first;
                    let str = tmp6[1];
                    let tmp9 = survey.Questions[first];
                    let tmp10 = tmp9;
                    if (null != tmp9) {
                      let tmp44 = tmp9;
                      let tmp45 = constants2;
                      if (tmp10.QuestionType === constants2.MULTIPLE_CHOICE) {
                        let tmp11 = tmp9;
                        let tmp12 = constants;
                        if (tmp10.Selector === constants.MULTIPLE_ANSWER) {
                          let tmp32 = first;
                          let tmp33 = str;
                          obj[tmp8] = str.split(",");
                          let tmp34 = tmp9;
                          if (null != tmp10.ChoiceOrder) {
                            let tmp35 = first;
                            let _HermesInternal4 = HermesInternal;
                            let tmp36 = tmp9;
                            obj["" + tmp8 + "_DO"] = tmp10.ChoiceOrder;
                          }
                        }
                      }
                      let tmp13 = tmp9;
                      if (tmp10.QuestionType === tmp45.MULTIPLE_CHOICE) {
                        let tmp14 = tmp9;
                        let tmp15 = constants;
                        if (tmp10.Selector === constants.SINGLE_ANSWER) {
                          let tmp21 = str;
                          if (str.includes(":TEXT:")) {
                            let tmp24 = str;
                            let first1 = str.split(":TEXT:", 2)[0];
                            let tmp26 = first;
                            let _parseInt2 = parseInt;
                            obj[tmp8] = parseInt(first1);
                            let _HermesInternal2 = HermesInternal;
                            let str2 = "";
                            let tmp27 = tmp8;
                            let str3 = "_";
                            let tmp28 = first1;
                            let str4 = "_TEXT";
                            obj["" + first + "_" + first1 + "_TEXT"] = str.split(":TEXT:", 2)[1];
                          } else {
                            let tmp22 = first;
                            let _parseInt = parseInt;
                            let tmp23 = str;
                            obj[tmp8] = parseInt(str);
                          }
                          let tmp29 = tmp9;
                          if (null != tmp10.ChoiceOrder) {
                            let tmp30 = first;
                            let _HermesInternal3 = HermesInternal;
                            let tmp31 = tmp9;
                            obj["" + tmp8 + "_DO"] = tmp10.ChoiceOrder;
                          }
                        }
                      }
                      let tmp16 = tmp9;
                      if (tmp10.QuestionType === tmp45.TEXT_ENTRY) {
                        let tmp19 = first;
                        let _HermesInternal = HermesInternal;
                        tmp20 = str;
                        obj["" + tmp8 + "_TEXT"] = str;
                      } else {
                        let tmp17 = first;
                        let tmp18 = str;
                        obj[tmp8] = str;
                      }
                    }
                    continue;
                  }
                  const _Object = Object;
                  closure_2 = Object.keys(arg1);
                  const item = closure_2.forEach((arg0) => {
                    if (!closure_2.includes(arg0)) {
                      if (null != survey.Questions[arg0]) {
                        let tmp4 = null != tmp2.ChoiceOrder;
                        if (tmp4) {
                          tmp4 = tmp2.QuestionType === closure_1_9.MULTIPLE_CHOICE;
                        }
                        if (tmp4) {
                          if (tmp2.Selector === closure_1_8.MULTIPLE_ANSWER) {
                            obj[arg0] = [];
                          }
                          const _HermesInternal = HermesInternal;
                          obj["" + arg0 + "_DO"] = tmp2.ChoiceOrder;
                        }
                      }
                    }
                  });
                  return obj;
                }
              })(callback, callback2, table);
              if (null == tmp19) {
                c9 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = { responseId: "null" };
                return obj1;
              } else {
                state = 1;
                closure_3 = {};
                const HTTP = callback(closure_1_2[7]).HTTP;
                let obj2 = { url: null, body: null, rejectWithError: true };
                obj2[0] = closure_1_10.EMBEDDED_SURVEY_RESPONSE(tmp30);
                const obj3 = { values_json: null };
                const _JSON = JSON;
                obj3[0] = JSON.stringify(tmp19);
                obj2[1] = obj3;
                c8 = 2;
                c9 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj2);
                return obj4;
              }
              let tmp31 = callback2;
            }
          } else if (1 === tmp7) {
            state = 0;
            callback = closure_7;
            obj2 = callback2(table[9]);
            obj2.captureException(callback);
            c9 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = { responseId: "null" };
            return obj5;
          } else if (arg0 === 1) {
            c9 = 3;
            throw body;
          } else if (arg0 === 2) {
            state = 0;
            c9 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            closure_3.responseId = body.body.responseId;
            state = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_3;
            return obj;
          }
        } catch (tmp20) {
          closure_7 = tmp20;
          if (tmp4 === state) {
            c9 = tmp2;
            throw tmp20;
          } else {
            c8 = tmp;
          }
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fireSurveyAction(BOUNTY_ABANDONED, arg1) {
  const self = this;
  const apply = _fireSurveyAction.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fireSurveyAction() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp5;
              let lib;
              if ((function shouldFireSurveyAction(closure_0) {
                let result = c5.shouldAllowSurveyAction();
                if (result) {
                  const _Math = Math;
                  result = callback(_undefined[10]).SURVEY_ACTION_SAMPLE_PERCENTS[closure_0] >= 100 * Math.random();
                }
                return result;
              })(lib)) {
                obj1 = { action_type: null };
                obj1[0] = tmp29;
                if (null != tmp30) {
                  obj1.metadata = tmp30;
                }
                let actionTriggeredSurveyOverride = 1;
                const HTTP = lib(closure_1_2[7]).HTTP;
                const obj2 = { url: null, query: null, body: null, rejectWithError: true };
                obj2[0] = closure_1_10.EMBEDDED_SURVEY_ACTION;
                actionTriggeredSurveyOverride = actionTriggeredSurveyOverride.getActionTriggeredSurveyOverride();
                let table = actionTriggeredSurveyOverride;
                if (actionTriggeredSurveyOverride == null) {
                  table = undefined;
                }
                const obj3 = { force_survey_id: null };
                obj3[0] = table;
                obj2[1] = obj3;
                obj2[2] = obj1;
                c6 = 2;
                c7 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj2);
                return obj4;
              }
              tmp29 = lib;
            }
          } else {
            if (1 === tmp8) {
              actionTriggeredSurveyOverride = 0;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = callback(table[8]);
              let survey;
              if (lib != null) {
                const body = lib.body;
                if (body != null) {
                  survey = body.survey;
                }
              }
              const obj5 = { type: "SURVEY_FETCHED", survey: null, isActionTriggered: true };
              obj5[1] = survey;
              obj.dispatch(obj5);
              actionTriggeredSurveyOverride = 0;
            }
            actionTriggeredSurveyOverride = 0;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
          c7 = 3;
        } catch (tmp21) {
          if (tmp4 === actionTriggeredSurveyOverride) {
            c7 = tmp2;
            throw tmp21;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ QuestionSelectorEnum: closure_8, QuestionTypeEnum: c9 } = QuestionTypeEnum);
let result = require("set").fileFinishedImporting("modules/qualtrics/QualtricsActionCreators.tsx");

export default { fetchSurveyDetails, submitSurveyResponse, fireSurveyAction };
export { fetchSurveyDetails };
export { submitSurveyResponse };
export { fireSurveyAction };