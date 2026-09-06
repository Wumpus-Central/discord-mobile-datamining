// === Module 834: instrumentAnthropicAiClient ===

// Module 834 (instrumentAnthropicAiClient)
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import messagesFromParams from "messagesFromParams" /* 835 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE = tmp(823);
function addPrivateRequestAttributes(setAttributes, prompt) {
  let obj = messagesFromParams;
  const messagesFromParamsResult = obj.messagesFromParams(prompt);
  messagesFromParams.setMessagesAttribute(setAttributes, messagesFromParamsResult);
  if ("prompt" in prompt) {
    obj = {};
    const _JSON = JSON;
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(prompt.prompt);
    setAttributes.setAttributes(obj);
  }
}
function handleStreamingError(arg0, isRecording, function) {
  let obj = { mechanism: null };
  obj = { handled: false, type: "auto.ai.anthropic", data: { function: _function } };
  obj.mechanism = obj;
  obj.captureException(arg0, obj);
  if (isRecording.isRecording()) {
    const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
    isRecording.setStatus(obj2);
    isRecording.end();
  }
  throw arg0;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentAnthropicAiClient = function instrumentAnthropicAiClient(arg0, arg1) {
  obj = require("module_713");
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
    get(self, arg1) {
      let obj = self[arg1];
      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
      if (typeof obj === "function") {
        if (tmpResult.shouldInstrument(methodPath)) {
          dependencyMap = methodPath;
          _self = self;
          closure_3 = closure_1_1;
          let _Proxy2 = Proxy;
          obj = {
            apply(arr, arg1, arg2) {
                  closure_0 = arr;
                  dependencyMap = arg2;
                  let obj = { [closure_1_0(closure_1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic" };
                  let tmp2 = str;
                  let startSpanManual = dependencyMap;
                  obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = str(dependencyMap[2]).getFinalOperationName(dependencyMap);
                  obj[str(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.anthropic";
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
                      _self = first1;
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
                          obj.name = "" + finalOperationName + " " + str10;
                          obj.op = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                          obj.attributes = obj;
                          return tmp2Result.startSpan(obj, (setAttributes) => {
                            if (tmp) {
                              let obj = str(_function[4]);
                              const messagesFromParamsResult = obj.messagesFromParams(closure_2);
                              const tmp2 = closure_2;
                              let tmp3 = str;
                              const tmp4 = _function;
                              str(_function[4]).setMessagesAttribute(setAttributes, messagesFromParamsResult);
                              if ("prompt" in closure_2) {
                                obj = {};
                                let _JSON = JSON;
                                obj[tmp3(tmp4[1]).GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(tmp2.prompt);
                                setAttributes.setAttributes(obj);
                              }
                              const obj2 = str(_function[4]);
                            }
                            return str(_function[9]).handleCallbackErrors(() => setAttributes.apply(closure_2, _function), (arg0) => {
                              setAttributes(_function[5]);
                              let obj = { mechanism: null };
                              obj = { handled: false, type: "auto.ai.anthropic", data: { function: _function } };
                              obj.mechanism = obj;
                              obj.captureException(arg0, obj);
                            }, () => {

                            }, (type) => {
                              let obj = closure_0;
                              let tmp = type;
                              if (type) {
                                tmp = typeof type === "object";
                              }
                              if (tmp) {
                                if ("type" in type) {
                                  if ("error" === type.type) {
                                    closure_4_0(closure_4_1[4]).handleResponseError(obj, type);
                                    const obj8 = closure_4_0(closure_4_1[4]);
                                  }
                                }
                                if (recordOutputs.recordOutputs) {
                                  (function addContentAttributes() { ... })(obj, type);
                                }
                                let tmp3 = "id" in type;
                                if (tmp3) {
                                  tmp3 = "model" in type;
                                }
                                if (tmp3) {
                                  obj = {};
                                  ({ id: obj2[closure_4_0(undefined, closure_4_1[1]).GEN_AI_RESPONSE_ID_ATTRIBUTE], model: obj2[closure_4_0(undefined, closure_4_1[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] } = type);
                                  obj.setAttributes(obj);
                                  if (tmp7) {
                                    obj = {};
                                    const _Date = Date;
                                    const date = new Date(1000 * type.created);
                                    obj[tmp4(tmp5[1]).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
                                    obj.setAttributes(obj);
                                  }
                                  if (tmp13) {
                                    let obj1 = {};
                                    const _Date2 = Date;
                                    const date1 = new Date(1000 * type.created_at);
                                    obj1[tmp4(tmp5[1]).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date1.toISOString();
                                    obj.setAttributes(obj1);
                                  }
                                  if (tmp19) {
                                    const tmp4Result = tmp4(tmp5[2]);
                                    const result = tmp4Result.setTokenUsageAttributes(obj, type.usage.input_tokens, type.usage.output_tokens, type.usage.cache_creation_input_tokens, type.usage.cache_read_input_tokens);
                                  }
                                  tmp13 = "created_at" in type && typeof type.created_at === "number";
                                  tmp19 = "usage" in type && type.usage;
                                  tmp7 = "created" in type && typeof type.created === "number";
                                }
                              }
                            });
                          });
                        }
                      }
                      dependencyMap = arr;
                      closure_3 = arg2;
                      closure_4 = tmp;
                      let recordInputs = closure_3;
                      let str14 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                      if (str14 == null) {
                        str14 = "unknown";
                      }
                      obj = { name: null, op: null, attributes: null };
                      const _HermesInternal2 = HermesInternal;
                      obj.name = "" + finalOperationName + " " + str14 + " stream-response";
                      obj.op = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                      obj.attributes = obj;
                      if (BooleanResult) {
                        if (!tmp12) {
                          closure_0 = _self(function*(arg0, value) {
                            if (c7 === 2) {
                              c7 = 3;
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
                                c7 = 2;
                                let tmp7 = c6;
                                if (0 !== c6) {
                                  if (1 === tmp7) {
                                    c5 = 0;
                                    tmp7 = tmp31(tmp31, closure_130_0, tmp31);
                                  } else if (arg0 === 1) {
                                    c7 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c5 = 0;
                                    c7 = 3;
                                    obj = { value, done: true };
                                    return obj;
                                  } else {
                                    closure_130_1 = value;
                                    obj = closure_0(closure_1[8]);
                                    const recordOutputs = c6.recordOutputs;
                                    c1 = recordOutputs;
                                    if (recordOutputs == null) {
                                      c1 = false;
                                    }
                                    c5 = 0;
                                    c7 = 3;
                                    const obj1 = { value: obj.instrumentAsyncIterableStream(closure_130_1, closure_130_0, c1), done: true };
                                    return obj1;
                                  }
                                }
                                if (arg0 === 1) {
                                  c7 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c7 = 3;
                                  const obj2 = { value, done: true };
                                  return obj2;
                                } else {
                                  closure_2 = tmp7;
                                  closure_130_0 = closure_0;
                                  closure_130_1 = undefined;
                                  c5 = 1;
                                  recordInputs = c6.recordInputs;
                                  if (recordInputs) {
                                    recordInputs = c5;
                                  }
                                  if (recordInputs) {
                                    tmp3(closure_0, c5);
                                  }
                                  c6 = 2;
                                  c7 = 1;
                                  const obj3 = { value: closure_0.apply(closure_2, tmp3), done: false };
                                  return obj3;
                                }
                              } catch (tmp31) {
                                if (tmp4 === c5) {
                                  c7 = tmp2;
                                  throw tmp31;
                                } else {
                                  c6 = tmp;
                                }
                              }
                            }
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
                            closure_3(arg0, first1);
                          }
                          const applyResult = closure_1.apply(closure_2, closure_3);
                          const tmp2 = recordInputs;
                          let flag = tmp2.recordOutputs;
                          if (flag == null) {
                            flag = false;
                          }
                          return str(closure_1[8]).instrumentMessageStream(applyResult, arg0, flag);
                        } catch (tmp13) {
                          closure_2_4(tmp13, tmp, closure_4);
                        }
                      });
                      const tmp2Result2 = tmp2(startSpanManual[2]);
                    }
                  }
                  if ("models.retrieve" === dependencyMap) {
                    str = arg2[0];
                  } else {
                    str = "unknown";
                  }
                  obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
                }
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
            if (methodPath === undefined) {
              str = "";
            }
            dependencyMap = closure_1_1;
            let _Proxy = Proxy;
            obj = {
              get(self, arg1) {
                      let obj = self[arg1];
                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                      if (typeof obj === "function") {
                        if (tmpResult.shouldInstrument(methodPath)) {
                          dependencyMap = methodPath;
                          _self = self;
                          closure_3 = closure_1_1;
                          let _Proxy2 = Proxy;
                          obj = {
                            apply(arr, arg1, arg2) {
                                  closure_0 = arr;
                                  dependencyMap = arg2;
                                  let obj = { [closure_1_0(closure_1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic" };
                                  let tmp2 = str;
                                  let startSpanManual = dependencyMap;
                                  obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = str(dependencyMap[2]).getFinalOperationName(dependencyMap);
                                  obj[str(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.anthropic";
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
                                      _self = first1;
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
                                          obj.name = "" + finalOperationName + " " + str10;
                                          obj.op = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                                          obj.attributes = obj;
                                          return tmp2Result.startSpan(obj, (setAttributes) => {
                                            if (tmp) {
                                              let obj = str(_function[4]);
                                              const messagesFromParamsResult = obj.messagesFromParams(closure_2);
                                              const tmp2 = closure_2;
                                              let tmp3 = str;
                                              const tmp4 = _function;
                                              str(_function[4]).setMessagesAttribute(setAttributes, messagesFromParamsResult);
                                              if ("prompt" in closure_2) {
                                                obj = {};
                                                let _JSON = JSON;
                                                obj[tmp3(tmp4[1]).GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(tmp2.prompt);
                                                setAttributes.setAttributes(obj);
                                              }
                                              const obj2 = str(_function[4]);
                                            }
                                            return str(_function[9]).handleCallbackErrors(() => { ... }, () => { ... }, /* F120238 */ function() { ... }, () => { ... });
                                          });
                                        }
                                      }
                                      dependencyMap = arr;
                                      closure_3 = arg2;
                                      closure_4 = tmp;
                                      let recordInputs = closure_3;
                                      let str14 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                      if (str14 == null) {
                                        str14 = "unknown";
                                      }
                                      obj = { name: null, op: null, attributes: null };
                                      const _HermesInternal2 = HermesInternal;
                                      obj.name = "" + finalOperationName + " " + str14 + " stream-response";
                                      obj.op = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                                      obj.attributes = obj;
                                      if (BooleanResult) {
                                        if (!tmp12) {
                                          closure_0 = _self(function*(arg0, value) {
                                            if (c7 === 2) {
                                              c7 = 3;
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
                                                c7 = 2;
                                                let tmp7 = c6;
                                                if (0 !== c6) {
                                                  if (1 === tmp7) {
                                                    c5 = 0;
                                                    tmp7 = tmp31(tmp31, closure_130_0, tmp31);
                                                  } else if (arg0 === 1) {
                                                    c7 = 3;
                                                    throw value;
                                                  } else if (arg0 === 2) {
                                                    c5 = 0;
                                                    c7 = 3;
                                                    obj = { value, done: true };
                                                    return obj;
                                                  } else {
                                                    closure_130_1 = value;
                                                    obj = closure_0(closure_1[8]);
                                                    const recordOutputs = c6.recordOutputs;
                                                    c1 = recordOutputs;
                                                    if (recordOutputs == null) {
                                                      c1 = false;
                                                    }
                                                    c5 = 0;
                                                    c7 = 3;
                                                    const obj1 = { value: obj.instrumentAsyncIterableStream(closure_130_1, closure_130_0, c1), done: true };
                                                    return obj1;
                                                  }
                                                }
                                                if (arg0 === 1) {
                                                  c7 = 3;
                                                  throw value;
                                                } else if (arg0 === 2) {
                                                  c7 = 3;
                                                  const obj2 = { value, done: true };
                                                  return obj2;
                                                } else {
                                                  closure_2 = tmp7;
                                                  closure_130_0 = closure_0;
                                                  closure_130_1 = undefined;
                                                  c5 = 1;
                                                  recordInputs = c6.recordInputs;
                                                  if (recordInputs) {
                                                    recordInputs = c5;
                                                  }
                                                  if (recordInputs) {
                                                    tmp3(closure_0, c5);
                                                  }
                                                  c6 = 2;
                                                  c7 = 1;
                                                  const obj3 = { value: closure_0.apply(closure_2, tmp3), done: false };
                                                  return obj3;
                                                }
                                              } catch (tmp31) {
                                                if (tmp4 === c5) {
                                                  c7 = tmp2;
                                                  throw tmp31;
                                                } else {
                                                  c6 = tmp;
                                                }
                                              }
                                            }
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
                                            closure_3(arg0, first1);
                                          }
                                          const applyResult = closure_1.apply(closure_2, closure_3);
                                          const tmp2 = recordInputs;
                                          let flag = tmp2.recordOutputs;
                                          if (flag == null) {
                                            flag = false;
                                          }
                                          return str(closure_1[8]).instrumentMessageStream(applyResult, arg0, flag);
                                        } catch (tmp13) {
                                          closure_2_4(tmp13, tmp, closure_4);
                                        }
                                      });
                                      const tmp2Result2 = tmp2(startSpanManual[2]);
                                    }
                                  }
                                  if ("models.retrieve" === dependencyMap) {
                                    str = arg2[0];
                                  } else {
                                    str = "unknown";
                                  }
                                  obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
                                }
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
                            if (methodPath === undefined) {
                              str = "";
                            }
                            dependencyMap = closure_1_1;
                            let _Proxy = Proxy;
                            obj = {
                              get(self, arg1) {
                                      let obj = self[arg1];
                                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                                      if (typeof obj === "function") {
                                        if (tmpResult.shouldInstrument(methodPath)) {
                                          dependencyMap = methodPath;
                                          _self = self;
                                          closure_3 = closure_1_1;
                                          let _Proxy2 = Proxy;
                                          obj = {
                                            apply(arr, arg1, arg2) {
                                                  closure_0 = arr;
                                                  dependencyMap = arg2;
                                                  let obj = { [closure_1_0(closure_1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic" };
                                                  let tmp2 = str;
                                                  let startSpanManual = dependencyMap;
                                                  obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = str(dependencyMap[2]).getFinalOperationName(dependencyMap);
                                                  obj[str(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.anthropic";
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
                                                      _self = first1;
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
                                                          obj.name = "" + finalOperationName + " " + str10;
                                                          obj.op = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                                                          obj.attributes = obj;
                                                          return tmp2Result.startSpan(obj, () => { ... });
                                                        }
                                                      }
                                                      dependencyMap = arr;
                                                      closure_3 = arg2;
                                                      closure_4 = tmp;
                                                      let recordInputs = closure_3;
                                                      let str14 = obj[tmp2(undefined, startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                                      if (str14 == null) {
                                                        str14 = "unknown";
                                                      }
                                                      obj = { name: null, op: null, attributes: null };
                                                      const _HermesInternal2 = HermesInternal;
                                                      obj.name = "" + finalOperationName + " " + str14 + " stream-response";
                                                      obj.op = tmp2(startSpanManual[2]).getSpanOperation(tmp);
                                                      obj.attributes = obj;
                                                      if (BooleanResult) {
                                                        if (!tmp12) {
                                                          closure_0 = _self(/* F124403 */ function() { ... });
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
                                                  if ("models.retrieve" === dependencyMap) {
                                                    str = arg2[0];
                                                  } else {
                                                    str = "unknown";
                                                  }
                                                  obj[tmp2(startSpanManual[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
                                                }
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
                                            if (methodPath === undefined) {
                                              str = "";
                                            }
                                            dependencyMap = closure_1_1;
                                            let _Proxy = Proxy;
                                            obj = {
                                              get(self, arg1) {
                                                      let obj = self[arg1];
                                                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                                                      if (typeof obj === "function") {
                                                        if (tmpResult.shouldInstrument(methodPath)) {
                                                          dependencyMap = methodPath;
                                                          _self = self;
                                                          closure_3 = closure_1_1;
                                                          let _Proxy2 = Proxy;
                                                          obj = { apply() { ... } };
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
                                                            if (methodPath === undefined) {
                                                              str = "";
                                                            }
                                                            dependencyMap = closure_1_1;
                                                            let _Proxy = Proxy;
                                                            obj = { get() { ... } };
                                                            proxy = new Proxy(obj, obj);
                                                          }
                                                        }
                                                      }
                                                    }
                                            };
                                            proxy = new Proxy(obj, obj);
                                          }
                                        }
                                      }
                                    }
                            };
                            proxy = new Proxy(obj, obj);
                          }
                        }
                      }
                    }
            };
            proxy = new Proxy(obj, obj);
          }
        }
      }
    }
  };
  const proxy = new Proxy(arg0, obj);
  return proxy;
};