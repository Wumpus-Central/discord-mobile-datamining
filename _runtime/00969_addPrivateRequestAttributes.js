// _runtime/00969_addPrivateRequestAttributes.js
import asyncGeneratorStep from "captureCheckIn";
import { getSpanStatusFromHttpCode } from "00840_getSpanStatusFromHttpCode.js";
import { captureCheckIn } from "00869_captureCheckIn.js";
import { handleResponseError } from "00970_handleResponseError.js";

function addPrivateRequestAttributes(setAttributes, prompt) {
  let obj = handleResponseError;
  const messagesFromParamsResult = obj.messagesFromParams(prompt);
  const tmp = require;
  handleResponseError.setMessagesAttribute(setAttributes, messagesFromParamsResult);
  if ("prompt" in prompt) {
    obj = {};
    const _JSON = JSON;
    obj[tmp(958).GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(prompt.prompt);
    setAttributes.setAttributes(obj);
  }
}
function handleStreamingError(arg0, isRecording, arg2) {
  let obj = captureCheckIn;
  obj = { function: arg2 };
  obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.anthropic", data: obj } });
  if (isRecording.isRecording()) {
    obj = { code: null, message: "internal_error" };
    obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
    isRecording.setStatus(obj);
    isRecording.end();
  }
  throw arg0;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentAnthropicAiClient = function instrumentAnthropicAiClient(arg0, arg1) {
  obj = _require(obj[10]);
  const client = obj.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const BooleanResult = Boolean(sendDefaultPii);
  obj = { recordInputs: BooleanResult, recordOutputs: BooleanResult };
  const merged = Object.assign(arg1);
  _require = "";
  obj = {
    get(self) {
      let obj = self[arg1];
      let methodPath = outer1_0(outer1_1[2]).buildMethodPath(str, String(arg1));
      if (typeof obj === "function") {
        if (tmpResult.shouldInstrument(methodPath)) {
          str = obj;
          let closure_2 = self;
          let closure_3 = methodPath;
          let _Proxy2 = Proxy;
          obj = { apply: null };
          obj[0] = function apply(closure_0) {
            let closure_1 = arg2;
            let obj = { [outer1_0(outer1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic" };
            let tmp2 = str;
            let startSpanManual = methodPath;
            obj[str(methodPath[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = str(methodPath[2]).getFinalOperationName(closure_1);
            obj[str(methodPath[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.anthropic";
            if (arg2.length > 0) {
              if (typeof arg2[0] === "object") {
                if (null !== arg2[0]) {
                  const first = arg2[0];
                  let tools = first.tools;
                  if (tools) {
                    let _Array = Array;
                    tools = Array.isArray(first.tools);
                  }
                  if (tools) {
                    let _JSON = JSON;
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(first.tools);
                  }
                  let str3 = first.model;
                  if (str3 == null) {
                    str3 = "unknown";
                  }
                  obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str3;
                  if ("temperature" in first) {
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
                  }
                  if ("top_p" in first) {
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
                  }
                  if ("stream" in first) {
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
                  }
                  if ("top_k" in first) {
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = first.top_k;
                  }
                  if ("frequency_penalty" in first) {
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = first.frequency_penalty;
                  }
                  if ("max_tokens" in first) {
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = first.max_tokens;
                  }
                }
                let str10 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                if (str10 == null) {
                  str10 = "unknown";
                }
                let tmp2Result = tmp2(startSpanManual[2]);
                const finalOperationName = tmp2Result.getFinalOperationName(tmp);
                let first1;
                if (typeof arg2[0] === "object") {
                  first1 = arg2[0];
                }
                const _self = first1;
                let stream;
                if (first1 != null) {
                  stream = first1.stream;
                }
                const BooleanResult = Boolean(stream);
                if (!BooleanResult) {
                  if (!tmp12) {
                    tmp2Result = tmp2(startSpanManual[7]);
                    obj = { name: null, op: null, attributes: null };
                    const _HermesInternal = HermesInternal;
                    obj[0] = "" + finalOperationName + " " + str10;
                    obj[1] = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                    obj[2] = obj;
                    return tmp2Result.startSpan(obj, (setAttributes) => {
                      let closure_0 = setAttributes;
                      if (tmp) {
                        let obj = str(methodPath[4]);
                        const messagesFromParamsResult = obj.messagesFromParams(closure_2);
                        const tmp2 = closure_2;
                        let tmp3 = str;
                        const tmp4 = methodPath;
                        str(methodPath[4]).setMessagesAttribute(setAttributes, messagesFromParamsResult);
                        if ("prompt" in closure_2) {
                          obj = {};
                          let _JSON = JSON;
                          obj[tmp3(tmp4[1]).GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(tmp2.prompt);
                          setAttributes.setAttributes(obj);
                        }
                        const obj2 = str(methodPath[4]);
                      }
                      return str(methodPath[9]).handleCallbackErrors(() => setAttributes.apply(outer1_2, closure_1), (arg0) => {
                        let obj = setAttributes(outer1_1[5]);
                        obj = { function: closure_1 };
                        obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.anthropic", data: obj } });
                      }, () => {

                      }, (error) => {
                        let obj = closure_0;
                        let tmp = error;
                        if (error) {
                          tmp = typeof error === "object";
                        }
                        if (tmp) {
                          if ("type" in error) {
                            if ("error" === error.type) {
                              str(methodPath[4]).handleResponseError(obj, error);
                              const obj8 = str(methodPath[4]);
                            }
                          }
                          if (recordOutputs.recordOutputs) {
                            (function addContentAttributes() { ... })(obj, error);
                          }
                          let tmp3 = "id" in error;
                          if (tmp3) {
                            tmp3 = "model" in error;
                          }
                          if (tmp3) {
                            obj = {};
                            ({ id: obj2[str(undefined, methodPath[1]).GEN_AI_RESPONSE_ID_ATTRIBUTE], model: obj2[str(undefined, methodPath[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] } = error);
                            obj.setAttributes(obj);
                            if (tmp7) {
                              obj = {};
                              const _Date = Date;
                              const date = new Date(1000 * error.created);
                              obj[tmp4(tmp5[1]).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
                              obj.setAttributes(obj);
                            }
                            if (tmp13) {
                              let obj1 = {};
                              const _Date2 = Date;
                              const date1 = new Date(1000 * error.created_at);
                              obj1[tmp4(tmp5[1]).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date1.toISOString();
                              obj.setAttributes(obj1);
                            }
                            if (tmp19) {
                              const tmp4Result = tmp4(tmp5[2]);
                              const result = tmp4Result.setTokenUsageAttributes(obj, error.usage.input_tokens, error.usage.output_tokens, error.usage.cache_creation_input_tokens, error.usage.cache_read_input_tokens);
                            }
                            tmp13 = "created_at" in error && typeof error.created_at === "number";
                            tmp19 = "usage" in error && error.usage;
                            tmp7 = "created" in error && typeof error.created === "number";
                          }
                        }
                      });
                    });
                  }
                }
                closure_1 = closure_0;
                let closure_3 = arg2;
                let closure_4 = tmp;
                let closure_6 = closure_3;
                let str14 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                if (str14 == null) {
                  str14 = "unknown";
                }
                obj = { name: null, op: null, attributes: null };
                const _HermesInternal2 = HermesInternal;
                obj[0] = "" + finalOperationName + " " + str14 + " stream-response";
                obj[1] = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                obj[2] = obj;
                if (BooleanResult) {
                  if (!tmp12) {
                    closure_0 = undefined;
                    closure_0 = _self((arg0) => {
                      let closure_0 = arg0;
                      let c6 = 0;
                      let c7 = 0;
                      let c5 = 0;
                      return (function*(arg0) {
                        if (c7 === 2) {
                          c7 = 3;
                          HermesBuiltin.throwTypeError();
                        } else if (tmp6 === 3) {
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
                            let tmp7 = c6;
                            if (0 !== c6) {
                              if (1 === tmp7) {
                                let c5 = 0;
                                tmp7 = callback3(callback3, callback, outer1_4);
                              } else if (arg0 === 1) {
                                c7 = 3;
                                throw arg1;
                              } else if (arg0 === 2) {
                                c5 = 0;
                                c7 = 3;
                                obj = { value: null, done: true };
                                obj[0] = arg1;
                                return obj;
                              } else {
                                let c1 = arg1;
                                obj = callback(table[8]);
                                const recordOutputs = c6.recordOutputs;
                                c1 = recordOutputs;
                                if (recordOutputs == null) {
                                  c1 = false;
                                }
                                c5 = 0;
                                c7 = 3;
                                const obj1 = { value: null, done: true };
                                obj1[0] = obj.instrumentAsyncIterableStream(c1, callback, c1);
                                return obj1;
                              }
                            }
                            if (arg0 === 1) {
                              c7 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              c7 = 3;
                              const obj2 = { value: null, done: true };
                              obj2[0] = arg1;
                              return obj2;
                            } else {
                              const callback2 = tmp3;
                              let closure_2 = tmp7;
                              c1 = undefined;
                              c5 = 1;
                              let recordInputs = c6.recordInputs;
                              if (recordInputs) {
                                recordInputs = c5;
                              }
                              if (recordInputs) {
                                callback2(callback, c5);
                              }
                              c6 = 2;
                              c7 = 1;
                              const obj3 = { value: null, done: false };
                              obj3[0] = callback.apply(outer1_2, outer1_3);
                              return obj3;
                            }
                          } catch (tmp31) {
                            callback3 = tmp31;
                            if (tmp4 === c5) {
                              c7 = tmp2;
                              throw tmp31;
                            } else {
                              c6 = tmp;
                            }
                          }
                        }
                      })();
                    });
                    let startSpanManualResult = tmp2(startSpanManual[7]).startSpanManual(obj, function(arg0) {
                      const self = this;
                      const apply = closure_0.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    });
                    const tmp2Result3 = tmp2(startSpanManual[7]);
                  }
                }
                tmp2 = tmp2(startSpanManual[7]);
                startSpanManual = tmp2.startSpanManual;
                startSpanManualResult = startSpanManual(obj, (arg0) => {
                  try {
                    recordInputs = recordInputs.recordInputs;
                    if (recordInputs) {
                      recordInputs = first1;
                    }
                    if (recordInputs) {
                      lib(arg0, first1);
                    }
                    const applyResult = dependencyMap.apply(closure_2, lib);
                    const tmp2 = recordInputs;
                    let flag = tmp2.recordOutputs;
                    if (flag == null) {
                      flag = false;
                    }
                    return callback(dependencyMap[8]).instrumentMessageStream(applyResult, arg0, flag);
                  } catch (tmp13) {
                    tmp(tmp13, tmp, tmp);
                  }
                });
                const tmp2Result2 = tmp2(startSpanManual[2]);
              }
            }
            if ("models.retrieve" === closure_1) {
              str = arg2[0];
            } else {
              str = "unknown";
            }
            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
          };
          let proxy = new Proxy(obj, obj);
        }
        return proxy;
      }
      if (typeof obj === "function") {
        proxy = obj.bind(self);
      } else {
        proxy = obj;
        if (obj) {
          proxy = obj;
          if (typeof obj === "object") {
            str = methodPath;
            if (methodPath === undefined) {
              str = "";
            }
            let _Proxy = Proxy;
            obj = { get: null };
            obj[0] = function get(self) {
              let obj = self[arg1];
              let methodPath = outer1_0(outer1_1[2]).buildMethodPath(str, String(arg1));
              if (typeof obj === "function") {
                if (tmpResult.shouldInstrument(methodPath)) {
                  str = obj;
                  let closure_2 = self;
                  let closure_3 = methodPath;
                  let _Proxy2 = Proxy;
                  obj = { apply: null };
                  obj[0] = function apply(closure_0) {
                    let closure_1 = arg2;
                    let obj = { [outer1_0(outer1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic" };
                    let tmp2 = str;
                    let startSpanManual = methodPath;
                    obj[str(methodPath[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = str(methodPath[2]).getFinalOperationName(closure_1);
                    obj[str(methodPath[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.anthropic";
                    if (arg2.length > 0) {
                      if (typeof arg2[0] === "object") {
                        if (null !== arg2[0]) {
                          const first = arg2[0];
                          let tools = first.tools;
                          if (tools) {
                            let _Array = Array;
                            tools = Array.isArray(first.tools);
                          }
                          if (tools) {
                            let _JSON = JSON;
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(first.tools);
                          }
                          let str3 = first.model;
                          if (str3 == null) {
                            str3 = "unknown";
                          }
                          obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str3;
                          if ("temperature" in first) {
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
                          }
                          if ("top_p" in first) {
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
                          }
                          if ("stream" in first) {
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
                          }
                          if ("top_k" in first) {
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = first.top_k;
                          }
                          if ("frequency_penalty" in first) {
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = first.frequency_penalty;
                          }
                          if ("max_tokens" in first) {
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = first.max_tokens;
                          }
                        }
                        let str10 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                        if (str10 == null) {
                          str10 = "unknown";
                        }
                        let tmp2Result = tmp2(startSpanManual[2]);
                        const finalOperationName = tmp2Result.getFinalOperationName(tmp);
                        let first1;
                        if (typeof arg2[0] === "object") {
                          first1 = arg2[0];
                        }
                        const _self = first1;
                        let stream;
                        if (first1 != null) {
                          stream = first1.stream;
                        }
                        const BooleanResult = Boolean(stream);
                        if (!BooleanResult) {
                          if (!tmp12) {
                            tmp2Result = tmp2(startSpanManual[7]);
                            obj = { name: null, op: null, attributes: null };
                            const _HermesInternal = HermesInternal;
                            obj[0] = "" + finalOperationName + " " + str10;
                            obj[1] = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                            obj[2] = obj;
                            return tmp2Result.startSpan(obj, (setAttributes) => {
                              let closure_0 = setAttributes;
                              if (tmp) {
                                let obj = str(methodPath[4]);
                                const messagesFromParamsResult = obj.messagesFromParams(closure_2);
                                const tmp2 = closure_2;
                                let tmp3 = str;
                                const tmp4 = methodPath;
                                str(methodPath[4]).setMessagesAttribute(setAttributes, messagesFromParamsResult);
                                if ("prompt" in closure_2) {
                                  obj = {};
                                  let _JSON = JSON;
                                  obj[tmp3(tmp4[1]).GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(tmp2.prompt);
                                  setAttributes.setAttributes(obj);
                                }
                                const obj2 = str(methodPath[4]);
                              }
                              return str(methodPath[9]).handleCallbackErrors(() => { ... }, () => { ... }, /* F114781 */ function() { ... }, () => { ... });
                            });
                          }
                        }
                        closure_1 = closure_0;
                        let closure_3 = arg2;
                        let closure_4 = tmp;
                        let closure_6 = closure_3;
                        let str14 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                        if (str14 == null) {
                          str14 = "unknown";
                        }
                        obj = { name: null, op: null, attributes: null };
                        const _HermesInternal2 = HermesInternal;
                        obj[0] = "" + finalOperationName + " " + str14 + " stream-response";
                        obj[1] = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                        obj[2] = obj;
                        if (BooleanResult) {
                          if (!tmp12) {
                            closure_0 = undefined;
                            closure_0 = _self((arg0) => {
                              let closure_0 = arg0;
                              let c6 = 0;
                              let c7 = 0;
                              let c5 = 0;
                              return (/* F119896 */ function*() { ... })();
                            });
                            let startSpanManualResult = tmp2(startSpanManual[7]).startSpanManual(obj, function(arg0) {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            });
                            const tmp2Result3 = tmp2(startSpanManual[7]);
                          }
                        }
                        tmp2 = tmp2(startSpanManual[7]);
                        startSpanManual = tmp2.startSpanManual;
                        startSpanManualResult = startSpanManual(obj, (arg0) => {
                          try {
                            recordInputs = recordInputs.recordInputs;
                            if (recordInputs) {
                              recordInputs = first1;
                            }
                            if (recordInputs) {
                              lib(arg0, first1);
                            }
                            const applyResult = dependencyMap.apply(closure_2, lib);
                            const tmp2 = recordInputs;
                            let flag = tmp2.recordOutputs;
                            if (flag == null) {
                              flag = false;
                            }
                            return callback(dependencyMap[8]).instrumentMessageStream(applyResult, arg0, flag);
                          } catch (tmp13) {
                            tmp(tmp13, tmp, tmp);
                          }
                        });
                        const tmp2Result2 = tmp2(startSpanManual[2]);
                      }
                    }
                    if ("models.retrieve" === closure_1) {
                      str = arg2[0];
                    } else {
                      str = "unknown";
                    }
                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
                  };
                  let proxy = new Proxy(obj, obj);
                }
                return proxy;
              }
              if (typeof obj === "function") {
                proxy = obj.bind(self);
              } else {
                proxy = obj;
                if (obj) {
                  proxy = obj;
                  if (typeof obj === "object") {
                    str = methodPath;
                    if (methodPath === undefined) {
                      str = "";
                    }
                    let _Proxy = Proxy;
                    obj = { get: null };
                    obj[0] = function get(self) {
                      let obj = self[arg1];
                      let methodPath = outer1_0(outer1_1[2]).buildMethodPath(str, String(arg1));
                      if (typeof obj === "function") {
                        if (tmpResult.shouldInstrument(methodPath)) {
                          str = obj;
                          let closure_2 = self;
                          let closure_3 = methodPath;
                          let _Proxy2 = Proxy;
                          obj = { apply: null };
                          obj[0] = function apply(closure_0) {
                            let closure_1 = arg2;
                            let obj = { [outer1_0(outer1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic" };
                            let tmp2 = str;
                            let startSpanManual = methodPath;
                            obj[str(methodPath[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = str(methodPath[2]).getFinalOperationName(closure_1);
                            obj[str(methodPath[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.anthropic";
                            if (arg2.length > 0) {
                              if (typeof arg2[0] === "object") {
                                if (null !== arg2[0]) {
                                  const first = arg2[0];
                                  let tools = first.tools;
                                  if (tools) {
                                    let _Array = Array;
                                    tools = Array.isArray(first.tools);
                                  }
                                  if (tools) {
                                    let _JSON = JSON;
                                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(first.tools);
                                  }
                                  let str3 = first.model;
                                  if (str3 == null) {
                                    str3 = "unknown";
                                  }
                                  obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str3;
                                  if ("temperature" in first) {
                                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
                                  }
                                  if ("top_p" in first) {
                                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
                                  }
                                  if ("stream" in first) {
                                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
                                  }
                                  if ("top_k" in first) {
                                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = first.top_k;
                                  }
                                  if ("frequency_penalty" in first) {
                                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = first.frequency_penalty;
                                  }
                                  if ("max_tokens" in first) {
                                    obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = first.max_tokens;
                                  }
                                }
                                let str10 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                if (str10 == null) {
                                  str10 = "unknown";
                                }
                                let tmp2Result = tmp2(startSpanManual[2]);
                                const finalOperationName = tmp2Result.getFinalOperationName(tmp);
                                let first1;
                                if (typeof arg2[0] === "object") {
                                  first1 = arg2[0];
                                }
                                const _self = first1;
                                let stream;
                                if (first1 != null) {
                                  stream = first1.stream;
                                }
                                const BooleanResult = Boolean(stream);
                                if (!BooleanResult) {
                                  if (!tmp12) {
                                    tmp2Result = tmp2(startSpanManual[7]);
                                    obj = { name: null, op: null, attributes: null };
                                    const _HermesInternal = HermesInternal;
                                    obj[0] = "" + finalOperationName + " " + str10;
                                    obj[1] = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                                    obj[2] = obj;
                                    return tmp2Result.startSpan(obj, () => { ... });
                                  }
                                }
                                closure_1 = closure_0;
                                let closure_3 = arg2;
                                let closure_4 = tmp;
                                let closure_6 = closure_3;
                                let str14 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                if (str14 == null) {
                                  str14 = "unknown";
                                }
                                obj = { name: null, op: null, attributes: null };
                                const _HermesInternal2 = HermesInternal;
                                obj[0] = "" + finalOperationName + " " + str14 + " stream-response";
                                obj[1] = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                                obj[2] = obj;
                                if (BooleanResult) {
                                  if (!tmp12) {
                                    closure_0 = undefined;
                                    closure_0 = _self(/* F118832 */ function() { ... });
                                    let startSpanManualResult = tmp2(startSpanManual[7]).startSpanManual(obj, () => { ... });
                                    const tmp2Result3 = tmp2(startSpanManual[7]);
                                  }
                                }
                                tmp2 = tmp2(startSpanManual[7]);
                                startSpanManual = tmp2.startSpanManual;
                                startSpanManualResult = startSpanManual(obj, () => { ... });
                                const tmp2Result2 = tmp2(startSpanManual[2]);
                              }
                            }
                            if ("models.retrieve" === closure_1) {
                              str = arg2[0];
                            } else {
                              str = "unknown";
                            }
                            obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
                          };
                          let proxy = new Proxy(obj, obj);
                        }
                        return proxy;
                      }
                      if (typeof obj === "function") {
                        proxy = obj.bind(self);
                      } else {
                        proxy = obj;
                        if (obj) {
                          proxy = obj;
                          if (typeof obj === "object") {
                            str = methodPath;
                            if (methodPath === undefined) {
                              str = "";
                            }
                            let _Proxy = Proxy;
                            obj = { get: null };
                            obj[0] = function get(self) {
                              let obj = self[arg1];
                              let methodPath = outer1_0(outer1_1[2]).buildMethodPath(str, String(arg1));
                              if (typeof obj === "function") {
                                if (tmpResult.shouldInstrument(methodPath)) {
                                  str = obj;
                                  let closure_2 = self;
                                  let closure_3 = methodPath;
                                  let _Proxy2 = Proxy;
                                  obj = { apply: null };
                                  obj[0] = function apply() { ... };
                                  let proxy = new Proxy(obj, obj);
                                }
                                return proxy;
                              }
                              if (typeof obj === "function") {
                                proxy = obj.bind(self);
                              } else {
                                proxy = obj;
                                if (obj) {
                                  proxy = obj;
                                  if (typeof obj === "object") {
                                    str = methodPath;
                                    if (methodPath === undefined) {
                                      str = "";
                                    }
                                    let _Proxy = Proxy;
                                    obj = { get: null };
                                    obj[0] = function get() { ... };
                                    proxy = new Proxy(obj, obj);
                                    let tmp14 = methodPath;
                                  }
                                }
                              }
                            };
                            proxy = new Proxy(obj, obj);
                            let tmp14 = methodPath;
                          }
                        }
                      }
                    };
                    proxy = new Proxy(obj, obj);
                    let tmp14 = methodPath;
                  }
                }
              }
            };
            proxy = new Proxy(obj, obj);
            let tmp14 = methodPath;
          }
        }
      }
    }
  };
  const proxy = new Proxy(arg0, obj);
  return proxy;
};