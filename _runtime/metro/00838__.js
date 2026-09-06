// _runtime/metro/00838__.js
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "../00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import truncateTextByBytes from "../00826_truncateTextByBytes.js";
import contentUnionToMessages from "../00840_contentUnionToMessages.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";

function addPrivateRequestAttributes(setAttributes, config) {
  let systemInstruction = "config" in config && config.config && typeof config.config === "object";
  if (systemInstruction) {
    systemInstruction = "systemInstruction" in config.config;
  }
  if (systemInstruction) {
    systemInstruction = config.config.systemInstruction;
  }
  const items = [];
  if (systemInstruction) {
    const push = items.push;
    let obj = contentUnionToMessages;
    const items1 = [];
    HermesBuiltin.arraySpread(obj.contentUnionToMessages(config.config.systemInstruction, "system"), 0);
    HermesBuiltin.apply(items1, items);
  }
  if ("history" in config) {
    const push2 = items.push;
    const items2 = [];
    HermesBuiltin.arraySpread(contentUnionToMessages.contentUnionToMessages(config.history, "user"), 0);
    HermesBuiltin.apply(items2, items);
  }
  if ("contents" in config) {
    const push3 = items.push;
    const items3 = [];
    HermesBuiltin.arraySpread(contentUnionToMessages.contentUnionToMessages(config.contents, "user"), 0);
    HermesBuiltin.apply(items3, items);
  }
  if ("message" in config) {
    const push4 = items.push;
    const items4 = [];
    HermesBuiltin.arraySpread(contentUnionToMessages.contentUnionToMessages(config.message, "user"), 0);
    HermesBuiltin.apply(items4, items);
  }
  if (tmp33) {
    obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = items.length;
    const _JSON = JSON;
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = JSON.stringify(truncateTextByBytes.truncateGenAiMessages(items));
    setAttributes.setAttributes(obj);
  }
  tmp33 = Array.isArray(items) && items.length;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractModel = function extractModel(model, model2) {
  if ("model" in model) {
    if (typeof model.model === "string") {
      return model.model;
    }
  }
  if (model2) {
    if (typeof model2 === "object") {
      if ("model" in model2) {
        if (typeof model2.model === "string") {
          return model2.model;
        }
      }
      if ("modelVersion" in model2) {
        if (typeof model2.modelVersion === "string") {
          return model2.modelVersion;
        }
      }
    }
  }
  return "unknown";
};
export const instrumentGoogleGenAIClient = function instrumentGoogleGenAIClient(arg0, arg1) {
  obj = require("00713__.js");
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
    get(self, arg1, arg2) {
      let value = Reflect.get(self, arg1, arg2);
      let obj1 = str(dependencyMap[3]);
      let methodPath = obj1.buildMethodPath(str, String(arg1));
      if (typeof value === "function") {
        if (tmpResult.shouldInstrument(methodPath)) {
          if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
            dependencyMap = self;
            closure_2 = dependencyMap;
            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
            let _Proxy3 = Proxy;
            let obj = {
              apply(arr, arg1, arg2) {
                      closure_0 = arr;
                      dependencyMap = arg2;
                      const first = arg2[0];
                      let obj = {};
                      obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                      let obj1 = str(dependencyMap[3]);
                      obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                      obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                      const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                      if (first) {
                        if ("model" in first) {
                          if (typeof first.model === "string") {
                            let str5 = first.model;
                          }
                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                          if ("config" in first) {
                            if (typeof first.config === "object") {
                              if (first.config) {
                                const config = first.config;
                                let tmp7 = "temperature" in config;
                                if (tmp7) {
                                  tmp7 = typeof config.temperature === "number";
                                }
                                obj = {};
                                if (tmp7) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                }
                                if (tmp8) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                }
                                if (tmp9) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                }
                                if (tmp10) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                }
                                if (tmp11) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                }
                                if (tmp12) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                }
                                const merged = Object.assign(obj, obj);
                                if ("tools" in config) {
                                  let _Array = Array;
                                  if (Array.isArray(config.tools)) {
                                    const tools = config.tools;
                                    let _JSON = JSON;
                                    obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations));
                                    const flatMapResult = tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations);
                                  }
                                }
                                tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                tmp8 = "topP" in config && typeof config.topP === "number";
                                tmp9 = "topK" in config && typeof config.topK === "number";
                              }
                            }
                          }
                        }
                        str5 = "unknown";
                        if (tmp3) {
                          str5 = "unknown";
                          if (typeof tmp3 === "object") {
                            if ("model" in tmp3) {
                              if (typeof tmp3.model === "string") {
                                str5 = tmp3.model;
                              }
                            }
                            str5 = "unknown";
                            if ("modelVersion" in tmp3) {
                              str5 = "unknown";
                              if (typeof tmp3.modelVersion === "string") {
                                str5 = tmp3.modelVersion;
                              }
                            }
                          }
                        }
                      } else {
                        obj = {};
                        if ("model" in obj) {
                          if (typeof obj.model === "string") {
                            let str2 = obj.model;
                          }
                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                        }
                        str2 = "unknown";
                        if (tmp3) {
                          str2 = "unknown";
                          if (typeof tmp3 === "object") {
                            if ("model" in tmp3) {
                              if (typeof tmp3.model === "string") {
                                str2 = tmp3.model;
                              }
                            }
                            str2 = "unknown";
                            if ("modelVersion" in tmp3) {
                              str2 = "unknown";
                              if (typeof tmp3.modelVersion === "string") {
                                str2 = tmp3.modelVersion;
                              }
                            }
                          }
                        }
                      }
                      let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                      if (str15 == null) {
                        str15 = "unknown";
                      }
                      let tmp4Result = tmp4(tmp5[3]);
                      const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                      tmp4Result = tmp4(tmp5[5]);
                      const tmp4Result1 = str(dependencyMap[7]);
                      if (isStreamingMethodResult) {
                        obj1 = { name: null, op: null, attributes: null };
                        const _HermesInternal2 = HermesInternal;
                        obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                        obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                        obj1.attributes = obj;
                        closure_0 = closure_2((_function) => {
                          c5 = 0;
                          c6 = 0;
                          c4 = 0;
                          return (function*(arg0) {
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
                                    dependencyMap = tmp7;
                                    closure_129_0 = _function;
                                    closure_129_1 = undefined;
                                    c4 = 1;
                                    let recordInputs = first.recordInputs;
                                    if (recordInputs) {
                                      recordInputs = closure_2;
                                    }
                                    if (recordInputs) {
                                      tmp37(_function, closure_2);
                                    }
                                    c5 = 2;
                                    c6 = 1;
                                    const obj1 = { value: _function.apply(dependencyMap, dependencyMap), done: false };
                                    return obj1;
                                  }
                                } else if (1 === tmp7) {
                                  c4 = 0;
                                  closure_129_2 = tmp37;
                                  const obj2 = { code: str(dependencyMap[9]).SPAN_STATUS_ERROR, message: "internal_error" };
                                  closure_129_0.setStatus(obj2);
                                  let obj4 = str(dependencyMap[10]);
                                  const obj3 = { mechanism: null };
                                  obj4 = { handled: false, type: "auto.ai.google_genai", data: null };
                                  const obj5 = { function: _function };
                                  obj4.data = obj5;
                                  obj3.mechanism = obj4;
                                  obj4.captureException(closure_129_2, obj3);
                                  closure_129_0.end();
                                  throw closure_129_2;
                                } else if (arg0 === 1) {
                                  c6 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c4 = 0;
                                  c6 = 3;
                                  const obj6 = { value, done: true };
                                  return obj6;
                                } else {
                                  closure_129_1 = value;
                                  obj = str(dependencyMap[8]);
                                  const _Boolean = Boolean;
                                  c4 = 0;
                                  c6 = 3;
                                  const obj7 = { value: obj.instrumentStream(closure_129_1, closure_129_0, Boolean(first.recordOutputs)), done: true };
                                  return obj7;
                                }
                              } catch (tmp37) {
                                if (tmp4 === c4) {
                                  c6 = tmp2;
                                  throw tmp37;
                                } else {
                                  c5 = tmp;
                                }
                              }
                            }
                          })();
                        });
                        let startSpanManualResult = tmp4Result1.startSpanManual(obj1, function(arg0) {
                          const self = this;
                          const apply = closure_0.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        });
                        const tmp4Result2 = tmp4(tmp5[3]);
                      } else {
                        const _HermesInternal = HermesInternal;
                        if (closure_3) {
                          let combined = concat(finalOperationName, " ", str15, " create");
                        } else {
                          combined = concat(finalOperationName, " ", str15);
                        }
                        let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                        startSpanManualResult = tmp4Result1.startSpan(obj2, (_function) => {
                          if (tmp) {
                            closure_3(_function, first);
                          }
                          return str(dependencyMap[11]).handleCallbackErrors(() => _function.apply(closure_1, dependencyMap), (arg0) => {
                            _function(dependencyMap[10]);
                            let obj = { mechanism: null };
                            obj = { handled: false, type: "auto.ai.google_genai", data: { function: _function } };
                            obj.mechanism = obj;
                            obj.captureException(arg0, obj);
                          }, () => {

                          }, (modelVersion) => {
                            if (!closure_3) {
                              let obj = closure_0;
                              recordOutputs = recordOutputs.recordOutputs;
                              if (modelVersion) {
                                if (typeof modelVersion === "object") {
                                  if (modelVersion.modelVersion) {
                                    const attr = obj.setAttribute(str(dependencyMap[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, modelVersion.modelVersion);
                                  }
                                  if (modelVersion.usageMetadata) {
                                    if (typeof modelVersion.usageMetadata === "object") {
                                      const usageMetadata = modelVersion.usageMetadata;
                                      if (typeof usageMetadata.promptTokenCount === "number") {
                                        obj = {};
                                        obj[str(dependencyMap[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = usageMetadata.promptTokenCount;
                                        obj.setAttributes(obj);
                                      }
                                      if (typeof usageMetadata.candidatesTokenCount === "number") {
                                        obj = {};
                                        obj[str(dependencyMap[1]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = usageMetadata.candidatesTokenCount;
                                        obj.setAttributes(obj);
                                      }
                                      if (typeof usageMetadata.totalTokenCount === "number") {
                                        const obj1 = {};
                                        obj1[str(dependencyMap[1]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = usageMetadata.totalTokenCount;
                                        obj.setAttributes(obj1);
                                      }
                                    }
                                  }
                                  if (recordOutputs) {
                                    let _Array = Array;
                                    if (Array.isArray(modelVersion.candidates)) {
                                      if (modelVersion.candidates.length > 0) {
                                        const candidates = modelVersion.candidates;
                                        let mapped = candidates.map(() => { ... });
                                        let found = mapped.filter(() => { ... });
                                        if (found.length > 0) {
                                          const obj2 = {};
                                          obj2[""(dependencyMap[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = found.join("");
                                          obj.setAttributes(obj2);
                                        }
                                      }
                                    }
                                  }
                                  if (recordOutputs) {
                                    if (modelVersion.functionCalls) {
                                      const functionCalls = modelVersion.functionCalls;
                                      const _Array2 = Array;
                                      let isArray = Array.isArray(functionCalls);
                                      if (isArray) {
                                        isArray = functionCalls.length > 0;
                                      }
                                      if (isArray) {
                                        const obj3 = {};
                                        const _JSON = JSON;
                                        obj3[str(dependencyMap[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(functionCalls);
                                        obj.setAttributes(obj3);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          });
                        });
                        const tmp4Result3 = tmp4(tmp5[3]);
                      }
                      return startSpanManualResult;
                    }
            };
            let proxy = new Proxy(value, obj);
            str = proxy;
            return function instrumentedAndProxiedCreate() {
              let tmp = str(...HermesBuiltin.copyRestArgs());
              let proxy = tmp;
              if (tmp) {
                proxy = tmp;
                if (typeof tmp === "object") {
                  closure_3_0(closure_3_1[2]).CHAT_PATH;
                  str = undefined;
                  closure_1 = undefined;
                  if (str === undefined) {
                    str = "";
                  }
                  closure_1 = closure_2_1;
                  let _Proxy = Proxy;
                  let obj = {
                    get(self, arg1, arg2) {
                          let value = Reflect.get(self, arg1, arg2);
                          let obj1 = str(dependencyMap[3]);
                          let methodPath = obj1.buildMethodPath(str, String(arg1));
                          if (typeof value === "function") {
                            if (tmpResult.shouldInstrument(methodPath)) {
                              if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                dependencyMap = self;
                                closure_2 = dependencyMap;
                                closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                let _Proxy3 = Proxy;
                                let obj = {
                                  apply(arr, arg1, arg2) {
                                          closure_0 = arr;
                                          dependencyMap = arg2;
                                          const first = arg2[0];
                                          let obj = {};
                                          obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                                          let obj1 = str(dependencyMap[3]);
                                          obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                                          obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                                          const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                                          if (first) {
                                            if ("model" in first) {
                                              if (typeof first.model === "string") {
                                                let str5 = first.model;
                                              }
                                              obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                                              if ("config" in first) {
                                                if (typeof first.config === "object") {
                                                  if (first.config) {
                                                    const config = first.config;
                                                    let tmp7 = "temperature" in config;
                                                    if (tmp7) {
                                                      tmp7 = typeof config.temperature === "number";
                                                    }
                                                    obj = {};
                                                    if (tmp7) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                                    }
                                                    if (tmp8) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                                    }
                                                    if (tmp9) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                                    }
                                                    if (tmp10) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                                    }
                                                    if (tmp11) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                                    }
                                                    if (tmp12) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                                    }
                                                    const merged = Object.assign(obj, obj);
                                                    if ("tools" in config) {
                                                      let _Array = Array;
                                                      if (Array.isArray(config.tools)) {
                                                        const tools = config.tools;
                                                        let _JSON = JSON;
                                                        obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap(() => { ... }));
                                                        const flatMapResult = tools.flatMap(() => { ... });
                                                      }
                                                    }
                                                    tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                                    tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                                    tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                                    tmp8 = "topP" in config && typeof config.topP === "number";
                                                    tmp9 = "topK" in config && typeof config.topK === "number";
                                                  }
                                                }
                                              }
                                            }
                                            str5 = "unknown";
                                            if (tmp3) {
                                              str5 = "unknown";
                                              if (typeof tmp3 === "object") {
                                                if ("model" in tmp3) {
                                                  if (typeof tmp3.model === "string") {
                                                    str5 = tmp3.model;
                                                  }
                                                }
                                                str5 = "unknown";
                                                if ("modelVersion" in tmp3) {
                                                  str5 = "unknown";
                                                  if (typeof tmp3.modelVersion === "string") {
                                                    str5 = tmp3.modelVersion;
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            obj = {};
                                            if ("model" in obj) {
                                              if (typeof obj.model === "string") {
                                                let str2 = obj.model;
                                              }
                                              obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                                            }
                                            str2 = "unknown";
                                            if (tmp3) {
                                              str2 = "unknown";
                                              if (typeof tmp3 === "object") {
                                                if ("model" in tmp3) {
                                                  if (typeof tmp3.model === "string") {
                                                    str2 = tmp3.model;
                                                  }
                                                }
                                                str2 = "unknown";
                                                if ("modelVersion" in tmp3) {
                                                  str2 = "unknown";
                                                  if (typeof tmp3.modelVersion === "string") {
                                                    str2 = tmp3.modelVersion;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                          if (str15 == null) {
                                            str15 = "unknown";
                                          }
                                          let tmp4Result = tmp4(tmp5[3]);
                                          const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                                          tmp4Result = tmp4(tmp5[5]);
                                          const tmp4Result1 = str(dependencyMap[7]);
                                          if (isStreamingMethodResult) {
                                            obj1 = { name: null, op: null, attributes: null };
                                            const _HermesInternal2 = HermesInternal;
                                            obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                                            obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                            obj1.attributes = obj;
                                            closure_0 = closure_2(/* F120241 */ function() { ... });
                                            let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                                            const tmp4Result2 = tmp4(tmp5[3]);
                                          } else {
                                            const _HermesInternal = HermesInternal;
                                            if (closure_3) {
                                              let combined = concat(finalOperationName, " ", str15, " create");
                                            } else {
                                              combined = concat(finalOperationName, " ", str15);
                                            }
                                            let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                                            startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                                            const tmp4Result3 = tmp4(tmp5[3]);
                                          }
                                          return startSpanManualResult;
                                        }
                                };
                                let proxy = new Proxy(value, obj);
                                str = proxy;
                                return function instrumentedAndProxiedCreate() {
                                  let tmp = str(...HermesBuiltin.copyRestArgs());
                                  let proxy = tmp;
                                  if (tmp) {
                                    proxy = tmp;
                                    if (typeof tmp === "object") {
                                      closure_3_0(closure_3_1[2]).CHAT_PATH;
                                      str = undefined;
                                      closure_1 = undefined;
                                      if (str === undefined) {
                                        str = "";
                                      }
                                      closure_1 = closure_2_1;
                                      let _Proxy = Proxy;
                                      let obj = { get() { ... } };
                                      proxy = new Proxy(tmp, obj);
                                    }
                                  }
                                  return proxy;
                                };
                              } else {
                                str = methodPath;
                                dependencyMap = self;
                                closure_2 = dependencyMap;
                                closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                let _Proxy2 = Proxy;
                                obj = {
                                  apply(arr, arg1, arg2) {
                                          closure_0 = arr;
                                          dependencyMap = arg2;
                                          const first = arg2[0];
                                          let obj = {};
                                          obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                                          let obj1 = str(dependencyMap[3]);
                                          obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                                          obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                                          const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                                          if (first) {
                                            if ("model" in first) {
                                              if (typeof first.model === "string") {
                                                let str5 = first.model;
                                              }
                                              obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                                              if ("config" in first) {
                                                if (typeof first.config === "object") {
                                                  if (first.config) {
                                                    const config = first.config;
                                                    let tmp7 = "temperature" in config;
                                                    if (tmp7) {
                                                      tmp7 = typeof config.temperature === "number";
                                                    }
                                                    obj = {};
                                                    if (tmp7) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                                    }
                                                    if (tmp8) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                                    }
                                                    if (tmp9) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                                    }
                                                    if (tmp10) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                                    }
                                                    if (tmp11) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                                    }
                                                    if (tmp12) {
                                                      obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                                    }
                                                    const merged = Object.assign(obj, obj);
                                                    if ("tools" in config) {
                                                      let _Array = Array;
                                                      if (Array.isArray(config.tools)) {
                                                        const tools = config.tools;
                                                        let _JSON = JSON;
                                                        obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap(() => { ... }));
                                                        const flatMapResult = tools.flatMap(() => { ... });
                                                      }
                                                    }
                                                    tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                                    tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                                    tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                                    tmp8 = "topP" in config && typeof config.topP === "number";
                                                    tmp9 = "topK" in config && typeof config.topK === "number";
                                                  }
                                                }
                                              }
                                            }
                                            str5 = "unknown";
                                            if (tmp3) {
                                              str5 = "unknown";
                                              if (typeof tmp3 === "object") {
                                                if ("model" in tmp3) {
                                                  if (typeof tmp3.model === "string") {
                                                    str5 = tmp3.model;
                                                  }
                                                }
                                                str5 = "unknown";
                                                if ("modelVersion" in tmp3) {
                                                  str5 = "unknown";
                                                  if (typeof tmp3.modelVersion === "string") {
                                                    str5 = tmp3.modelVersion;
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            obj = {};
                                            if ("model" in obj) {
                                              if (typeof obj.model === "string") {
                                                let str2 = obj.model;
                                              }
                                              obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                                            }
                                            str2 = "unknown";
                                            if (tmp3) {
                                              str2 = "unknown";
                                              if (typeof tmp3 === "object") {
                                                if ("model" in tmp3) {
                                                  if (typeof tmp3.model === "string") {
                                                    str2 = tmp3.model;
                                                  }
                                                }
                                                str2 = "unknown";
                                                if ("modelVersion" in tmp3) {
                                                  str2 = "unknown";
                                                  if (typeof tmp3.modelVersion === "string") {
                                                    str2 = tmp3.modelVersion;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                          if (str15 == null) {
                                            str15 = "unknown";
                                          }
                                          let tmp4Result = tmp4(tmp5[3]);
                                          const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                                          tmp4Result = tmp4(tmp5[5]);
                                          const tmp4Result1 = str(dependencyMap[7]);
                                          if (isStreamingMethodResult) {
                                            obj1 = { name: null, op: null, attributes: null };
                                            const _HermesInternal2 = HermesInternal;
                                            obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                                            obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                            obj1.attributes = obj;
                                            closure_0 = closure_2(/* F120241 */ function() { ... });
                                            let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                                            const tmp4Result2 = tmp4(tmp5[3]);
                                          } else {
                                            const _HermesInternal = HermesInternal;
                                            if (closure_3) {
                                              let combined = concat(finalOperationName, " ", str15, " create");
                                            } else {
                                              combined = concat(finalOperationName, " ", str15);
                                            }
                                            let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                                            startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                                            const tmp4Result3 = tmp4(tmp5[3]);
                                          }
                                          return startSpanManualResult;
                                        }
                                };
                                let proxy1 = new Proxy(value, obj);
                                return proxy1;
                              }
                            }
                            tmpResult = tmp(tmp2[5]);
                          }
                          if (typeof value === "function") {
                            let bindResult = value.bind(self);
                          } else {
                            bindResult = value;
                            if (value) {
                              bindResult = value;
                              if (typeof value === "object") {
                                str = methodPath;
                                if (methodPath === undefined) {
                                  str = "";
                                }
                                let _Proxy = Proxy;
                                obj1 = {
                                  get(self, arg1, arg2) {
                                          let value = Reflect.get(self, arg1, arg2);
                                          let obj1 = str(dependencyMap[3]);
                                          let methodPath = obj1.buildMethodPath(str, String(arg1));
                                          if (typeof value === "function") {
                                            if (tmpResult.shouldInstrument(methodPath)) {
                                              if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                                dependencyMap = self;
                                                closure_2 = dependencyMap;
                                                closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                                let _Proxy3 = Proxy;
                                                let obj = { apply() { ... } };
                                                let proxy = new Proxy(value, obj);
                                                str = proxy;
                                                return function instrumentedAndProxiedCreate() { ... };
                                              } else {
                                                str = methodPath;
                                                dependencyMap = self;
                                                closure_2 = dependencyMap;
                                                closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                                let _Proxy2 = Proxy;
                                                obj = { apply() { ... } };
                                                let proxy1 = new Proxy(value, obj);
                                                return proxy1;
                                              }
                                            }
                                            tmpResult = tmp(tmp2[5]);
                                          }
                                          if (typeof value === "function") {
                                            let bindResult = value.bind(self);
                                          } else {
                                            bindResult = value;
                                            if (value) {
                                              bindResult = value;
                                              if (typeof value === "object") {
                                                str = methodPath;
                                                if (methodPath === undefined) {
                                                  str = "";
                                                }
                                                let _Proxy = Proxy;
                                                obj1 = { get() { ... } };
                                                bindResult = new Proxy(value, obj1);
                                              }
                                            }
                                          }
                                          return bindResult;
                                        }
                                };
                                bindResult = new Proxy(value, obj1);
                              }
                            }
                          }
                          return bindResult;
                        }
                  };
                  proxy = new Proxy(tmp, obj);
                }
              }
              return proxy;
            };
          } else {
            str = methodPath;
            dependencyMap = self;
            closure_2 = dependencyMap;
            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
            let _Proxy2 = Proxy;
            obj = {
              apply(arr, arg1, arg2) {
                      closure_0 = arr;
                      dependencyMap = arg2;
                      const first = arg2[0];
                      let obj = {};
                      obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                      let obj1 = str(dependencyMap[3]);
                      obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                      obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                      const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                      if (first) {
                        if ("model" in first) {
                          if (typeof first.model === "string") {
                            let str5 = first.model;
                          }
                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                          if ("config" in first) {
                            if (typeof first.config === "object") {
                              if (first.config) {
                                const config = first.config;
                                let tmp7 = "temperature" in config;
                                if (tmp7) {
                                  tmp7 = typeof config.temperature === "number";
                                }
                                obj = {};
                                if (tmp7) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                }
                                if (tmp8) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                }
                                if (tmp9) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                }
                                if (tmp10) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                }
                                if (tmp11) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                }
                                if (tmp12) {
                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                }
                                const merged = Object.assign(obj, obj);
                                if ("tools" in config) {
                                  let _Array = Array;
                                  if (Array.isArray(config.tools)) {
                                    const tools = config.tools;
                                    let _JSON = JSON;
                                    obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations));
                                    const flatMapResult = tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations);
                                  }
                                }
                                tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                tmp8 = "topP" in config && typeof config.topP === "number";
                                tmp9 = "topK" in config && typeof config.topK === "number";
                              }
                            }
                          }
                        }
                        str5 = "unknown";
                        if (tmp3) {
                          str5 = "unknown";
                          if (typeof tmp3 === "object") {
                            if ("model" in tmp3) {
                              if (typeof tmp3.model === "string") {
                                str5 = tmp3.model;
                              }
                            }
                            str5 = "unknown";
                            if ("modelVersion" in tmp3) {
                              str5 = "unknown";
                              if (typeof tmp3.modelVersion === "string") {
                                str5 = tmp3.modelVersion;
                              }
                            }
                          }
                        }
                      } else {
                        obj = {};
                        if ("model" in obj) {
                          if (typeof obj.model === "string") {
                            let str2 = obj.model;
                          }
                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                        }
                        str2 = "unknown";
                        if (tmp3) {
                          str2 = "unknown";
                          if (typeof tmp3 === "object") {
                            if ("model" in tmp3) {
                              if (typeof tmp3.model === "string") {
                                str2 = tmp3.model;
                              }
                            }
                            str2 = "unknown";
                            if ("modelVersion" in tmp3) {
                              str2 = "unknown";
                              if (typeof tmp3.modelVersion === "string") {
                                str2 = tmp3.modelVersion;
                              }
                            }
                          }
                        }
                      }
                      let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                      if (str15 == null) {
                        str15 = "unknown";
                      }
                      let tmp4Result = tmp4(tmp5[3]);
                      const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                      tmp4Result = tmp4(tmp5[5]);
                      const tmp4Result1 = str(dependencyMap[7]);
                      if (isStreamingMethodResult) {
                        obj1 = { name: null, op: null, attributes: null };
                        const _HermesInternal2 = HermesInternal;
                        obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                        obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                        obj1.attributes = obj;
                        closure_0 = closure_2((_function) => {
                          c5 = 0;
                          c6 = 0;
                          c4 = 0;
                          return (function*(arg0) {
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
                                    dependencyMap = tmp7;
                                    closure_129_0 = _function;
                                    closure_129_1 = undefined;
                                    c4 = 1;
                                    let recordInputs = first.recordInputs;
                                    if (recordInputs) {
                                      recordInputs = closure_2;
                                    }
                                    if (recordInputs) {
                                      tmp37(_function, closure_2);
                                    }
                                    c5 = 2;
                                    c6 = 1;
                                    const obj1 = { value: _function.apply(dependencyMap, dependencyMap), done: false };
                                    return obj1;
                                  }
                                } else if (1 === tmp7) {
                                  c4 = 0;
                                  closure_129_2 = tmp37;
                                  const obj2 = { code: str(dependencyMap[9]).SPAN_STATUS_ERROR, message: "internal_error" };
                                  closure_129_0.setStatus(obj2);
                                  let obj4 = str(dependencyMap[10]);
                                  const obj3 = { mechanism: null };
                                  obj4 = { handled: false, type: "auto.ai.google_genai", data: null };
                                  const obj5 = { function: _function };
                                  obj4.data = obj5;
                                  obj3.mechanism = obj4;
                                  obj4.captureException(closure_129_2, obj3);
                                  closure_129_0.end();
                                  throw closure_129_2;
                                } else if (arg0 === 1) {
                                  c6 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c4 = 0;
                                  c6 = 3;
                                  const obj6 = { value, done: true };
                                  return obj6;
                                } else {
                                  closure_129_1 = value;
                                  obj = str(dependencyMap[8]);
                                  const _Boolean = Boolean;
                                  c4 = 0;
                                  c6 = 3;
                                  const obj7 = { value: obj.instrumentStream(closure_129_1, closure_129_0, Boolean(first.recordOutputs)), done: true };
                                  return obj7;
                                }
                              } catch (tmp37) {
                                if (tmp4 === c4) {
                                  c6 = tmp2;
                                  throw tmp37;
                                } else {
                                  c5 = tmp;
                                }
                              }
                            }
                          })();
                        });
                        let startSpanManualResult = tmp4Result1.startSpanManual(obj1, function(arg0) {
                          const self = this;
                          const apply = closure_0.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        });
                        const tmp4Result2 = tmp4(tmp5[3]);
                      } else {
                        const _HermesInternal = HermesInternal;
                        if (closure_3) {
                          let combined = concat(finalOperationName, " ", str15, " create");
                        } else {
                          combined = concat(finalOperationName, " ", str15);
                        }
                        let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                        startSpanManualResult = tmp4Result1.startSpan(obj2, (_function) => {
                          if (tmp) {
                            closure_3(_function, first);
                          }
                          return str(dependencyMap[11]).handleCallbackErrors(() => _function.apply(closure_1, dependencyMap), (arg0) => {
                            _function(dependencyMap[10]);
                            let obj = { mechanism: null };
                            obj = { handled: false, type: "auto.ai.google_genai", data: { function: _function } };
                            obj.mechanism = obj;
                            obj.captureException(arg0, obj);
                          }, () => {

                          }, (modelVersion) => {
                            if (!closure_3) {
                              let obj = closure_0;
                              recordOutputs = recordOutputs.recordOutputs;
                              if (modelVersion) {
                                if (typeof modelVersion === "object") {
                                  if (modelVersion.modelVersion) {
                                    const attr = obj.setAttribute(str(dependencyMap[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, modelVersion.modelVersion);
                                  }
                                  if (modelVersion.usageMetadata) {
                                    if (typeof modelVersion.usageMetadata === "object") {
                                      const usageMetadata = modelVersion.usageMetadata;
                                      if (typeof usageMetadata.promptTokenCount === "number") {
                                        obj = {};
                                        obj[str(dependencyMap[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = usageMetadata.promptTokenCount;
                                        obj.setAttributes(obj);
                                      }
                                      if (typeof usageMetadata.candidatesTokenCount === "number") {
                                        obj = {};
                                        obj[str(dependencyMap[1]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = usageMetadata.candidatesTokenCount;
                                        obj.setAttributes(obj);
                                      }
                                      if (typeof usageMetadata.totalTokenCount === "number") {
                                        const obj1 = {};
                                        obj1[str(dependencyMap[1]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = usageMetadata.totalTokenCount;
                                        obj.setAttributes(obj1);
                                      }
                                    }
                                  }
                                  if (recordOutputs) {
                                    let _Array = Array;
                                    if (Array.isArray(modelVersion.candidates)) {
                                      if (modelVersion.candidates.length > 0) {
                                        const candidates = modelVersion.candidates;
                                        let mapped = candidates.map(() => { ... });
                                        let found = mapped.filter(() => { ... });
                                        if (found.length > 0) {
                                          const obj2 = {};
                                          obj2[""(dependencyMap[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = found.join("");
                                          obj.setAttributes(obj2);
                                        }
                                      }
                                    }
                                  }
                                  if (recordOutputs) {
                                    if (modelVersion.functionCalls) {
                                      const functionCalls = modelVersion.functionCalls;
                                      const _Array2 = Array;
                                      let isArray = Array.isArray(functionCalls);
                                      if (isArray) {
                                        isArray = functionCalls.length > 0;
                                      }
                                      if (isArray) {
                                        const obj3 = {};
                                        const _JSON = JSON;
                                        obj3[str(dependencyMap[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(functionCalls);
                                        obj.setAttributes(obj3);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          });
                        });
                        const tmp4Result3 = tmp4(tmp5[3]);
                      }
                      return startSpanManualResult;
                    }
            };
            let proxy1 = new Proxy(value, obj);
            return proxy1;
          }
        }
        tmpResult = tmp(tmp2[5]);
      }
      if (typeof value === "function") {
        let bindResult = value.bind(self);
      } else {
        bindResult = value;
        if (value) {
          bindResult = value;
          if (typeof value === "object") {
            str = methodPath;
            if (methodPath === undefined) {
              str = "";
            }
            let _Proxy = Proxy;
            obj1 = {
              get(self, arg1, arg2) {
                      let value = Reflect.get(self, arg1, arg2);
                      let obj1 = str(dependencyMap[3]);
                      let methodPath = obj1.buildMethodPath(str, String(arg1));
                      if (typeof value === "function") {
                        if (tmpResult.shouldInstrument(methodPath)) {
                          if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                            dependencyMap = self;
                            closure_2 = dependencyMap;
                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                            let _Proxy3 = Proxy;
                            let obj = {
                              apply(arr, arg1, arg2) {
                                      closure_0 = arr;
                                      dependencyMap = arg2;
                                      const first = arg2[0];
                                      let obj = {};
                                      obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                                      let obj1 = str(dependencyMap[3]);
                                      obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                                      obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                                      const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                                      if (first) {
                                        if ("model" in first) {
                                          if (typeof first.model === "string") {
                                            let str5 = first.model;
                                          }
                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                                          if ("config" in first) {
                                            if (typeof first.config === "object") {
                                              if (first.config) {
                                                const config = first.config;
                                                let tmp7 = "temperature" in config;
                                                if (tmp7) {
                                                  tmp7 = typeof config.temperature === "number";
                                                }
                                                obj = {};
                                                if (tmp7) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                                }
                                                if (tmp8) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                                }
                                                if (tmp9) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                                }
                                                if (tmp10) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                                }
                                                if (tmp11) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                                }
                                                if (tmp12) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                                }
                                                const merged = Object.assign(obj, obj);
                                                if ("tools" in config) {
                                                  let _Array = Array;
                                                  if (Array.isArray(config.tools)) {
                                                    const tools = config.tools;
                                                    let _JSON = JSON;
                                                    obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations));
                                                    const flatMapResult = tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations);
                                                  }
                                                }
                                                tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                                tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                                tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                                tmp8 = "topP" in config && typeof config.topP === "number";
                                                tmp9 = "topK" in config && typeof config.topK === "number";
                                              }
                                            }
                                          }
                                        }
                                        str5 = "unknown";
                                        if (tmp3) {
                                          str5 = "unknown";
                                          if (typeof tmp3 === "object") {
                                            if ("model" in tmp3) {
                                              if (typeof tmp3.model === "string") {
                                                str5 = tmp3.model;
                                              }
                                            }
                                            str5 = "unknown";
                                            if ("modelVersion" in tmp3) {
                                              str5 = "unknown";
                                              if (typeof tmp3.modelVersion === "string") {
                                                str5 = tmp3.modelVersion;
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        obj = {};
                                        if ("model" in obj) {
                                          if (typeof obj.model === "string") {
                                            let str2 = obj.model;
                                          }
                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                                        }
                                        str2 = "unknown";
                                        if (tmp3) {
                                          str2 = "unknown";
                                          if (typeof tmp3 === "object") {
                                            if ("model" in tmp3) {
                                              if (typeof tmp3.model === "string") {
                                                str2 = tmp3.model;
                                              }
                                            }
                                            str2 = "unknown";
                                            if ("modelVersion" in tmp3) {
                                              str2 = "unknown";
                                              if (typeof tmp3.modelVersion === "string") {
                                                str2 = tmp3.modelVersion;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                      if (str15 == null) {
                                        str15 = "unknown";
                                      }
                                      let tmp4Result = tmp4(tmp5[3]);
                                      const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                                      tmp4Result = tmp4(tmp5[5]);
                                      const tmp4Result1 = str(dependencyMap[7]);
                                      if (isStreamingMethodResult) {
                                        obj1 = { name: null, op: null, attributes: null };
                                        const _HermesInternal2 = HermesInternal;
                                        obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                                        obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                        obj1.attributes = obj;
                                        closure_0 = closure_2((_function) => {
                                          c5 = 0;
                                          c6 = 0;
                                          c4 = 0;
                                          return (/* F124405 */ function*() { ... })();
                                        });
                                        let startSpanManualResult = tmp4Result1.startSpanManual(obj1, function(arg0) {
                                          const self = this;
                                          const apply = closure_0.apply;
                                          if (typeof apply === "unknown") {
                                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                          } else {
                                            applyArgumentsResult = apply(self, arguments);
                                          }
                                          return applyArgumentsResult;
                                        });
                                        const tmp4Result2 = tmp4(tmp5[3]);
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        if (closure_3) {
                                          let combined = concat(finalOperationName, " ", str15, " create");
                                        } else {
                                          combined = concat(finalOperationName, " ", str15);
                                        }
                                        let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                                        startSpanManualResult = tmp4Result1.startSpan(obj2, (_function) => {
                                          if (tmp) {
                                            closure_3(_function, first);
                                          }
                                          return str(dependencyMap[11]).handleCallbackErrors(() => { ... }, () => { ... }, /* F120245 */ function() { ... }, () => { ... });
                                        });
                                        const tmp4Result3 = tmp4(tmp5[3]);
                                      }
                                      return startSpanManualResult;
                                    }
                            };
                            let proxy = new Proxy(value, obj);
                            str = proxy;
                            return function instrumentedAndProxiedCreate() {
                              let tmp = str(...HermesBuiltin.copyRestArgs());
                              let proxy = tmp;
                              if (tmp) {
                                proxy = tmp;
                                if (typeof tmp === "object") {
                                  closure_3_0(closure_3_1[2]).CHAT_PATH;
                                  str = undefined;
                                  closure_1 = undefined;
                                  if (str === undefined) {
                                    str = "";
                                  }
                                  closure_1 = closure_2_1;
                                  let _Proxy = Proxy;
                                  let obj = {
                                    get(self, arg1, arg2) {
                                          let value = Reflect.get(self, arg1, arg2);
                                          let obj1 = str(dependencyMap[3]);
                                          let methodPath = obj1.buildMethodPath(str, String(arg1));
                                          if (typeof value === "function") {
                                            if (tmpResult.shouldInstrument(methodPath)) {
                                              if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                                dependencyMap = self;
                                                closure_2 = dependencyMap;
                                                closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                                let _Proxy3 = Proxy;
                                                let obj = { apply() { ... } };
                                                let proxy = new Proxy(value, obj);
                                                str = proxy;
                                                return function instrumentedAndProxiedCreate() { ... };
                                              } else {
                                                str = methodPath;
                                                dependencyMap = self;
                                                closure_2 = dependencyMap;
                                                closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                                let _Proxy2 = Proxy;
                                                obj = { apply() { ... } };
                                                let proxy1 = new Proxy(value, obj);
                                                return proxy1;
                                              }
                                            }
                                            tmpResult = tmp(tmp2[5]);
                                          }
                                          if (typeof value === "function") {
                                            let bindResult = value.bind(self);
                                          } else {
                                            bindResult = value;
                                            if (value) {
                                              bindResult = value;
                                              if (typeof value === "object") {
                                                str = methodPath;
                                                if (methodPath === undefined) {
                                                  str = "";
                                                }
                                                let _Proxy = Proxy;
                                                obj1 = { get() { ... } };
                                                bindResult = new Proxy(value, obj1);
                                              }
                                            }
                                          }
                                          return bindResult;
                                        }
                                  };
                                  proxy = new Proxy(tmp, obj);
                                }
                              }
                              return proxy;
                            };
                          } else {
                            str = methodPath;
                            dependencyMap = self;
                            closure_2 = dependencyMap;
                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                            let _Proxy2 = Proxy;
                            obj = {
                              apply(arr, arg1, arg2) {
                                      closure_0 = arr;
                                      dependencyMap = arg2;
                                      const first = arg2[0];
                                      let obj = {};
                                      obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                                      let obj1 = str(dependencyMap[3]);
                                      obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                                      obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                                      const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                                      if (first) {
                                        if ("model" in first) {
                                          if (typeof first.model === "string") {
                                            let str5 = first.model;
                                          }
                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                                          if ("config" in first) {
                                            if (typeof first.config === "object") {
                                              if (first.config) {
                                                const config = first.config;
                                                let tmp7 = "temperature" in config;
                                                if (tmp7) {
                                                  tmp7 = typeof config.temperature === "number";
                                                }
                                                obj = {};
                                                if (tmp7) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                                }
                                                if (tmp8) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                                }
                                                if (tmp9) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                                }
                                                if (tmp10) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                                }
                                                if (tmp11) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                                }
                                                if (tmp12) {
                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                                }
                                                const merged = Object.assign(obj, obj);
                                                if ("tools" in config) {
                                                  let _Array = Array;
                                                  if (Array.isArray(config.tools)) {
                                                    const tools = config.tools;
                                                    let _JSON = JSON;
                                                    obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations));
                                                    const flatMapResult = tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations);
                                                  }
                                                }
                                                tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                                tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                                tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                                tmp8 = "topP" in config && typeof config.topP === "number";
                                                tmp9 = "topK" in config && typeof config.topK === "number";
                                              }
                                            }
                                          }
                                        }
                                        str5 = "unknown";
                                        if (tmp3) {
                                          str5 = "unknown";
                                          if (typeof tmp3 === "object") {
                                            if ("model" in tmp3) {
                                              if (typeof tmp3.model === "string") {
                                                str5 = tmp3.model;
                                              }
                                            }
                                            str5 = "unknown";
                                            if ("modelVersion" in tmp3) {
                                              str5 = "unknown";
                                              if (typeof tmp3.modelVersion === "string") {
                                                str5 = tmp3.modelVersion;
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        obj = {};
                                        if ("model" in obj) {
                                          if (typeof obj.model === "string") {
                                            let str2 = obj.model;
                                          }
                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                                        }
                                        str2 = "unknown";
                                        if (tmp3) {
                                          str2 = "unknown";
                                          if (typeof tmp3 === "object") {
                                            if ("model" in tmp3) {
                                              if (typeof tmp3.model === "string") {
                                                str2 = tmp3.model;
                                              }
                                            }
                                            str2 = "unknown";
                                            if ("modelVersion" in tmp3) {
                                              str2 = "unknown";
                                              if (typeof tmp3.modelVersion === "string") {
                                                str2 = tmp3.modelVersion;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                      if (str15 == null) {
                                        str15 = "unknown";
                                      }
                                      let tmp4Result = tmp4(tmp5[3]);
                                      const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                                      tmp4Result = tmp4(tmp5[5]);
                                      const tmp4Result1 = str(dependencyMap[7]);
                                      if (isStreamingMethodResult) {
                                        obj1 = { name: null, op: null, attributes: null };
                                        const _HermesInternal2 = HermesInternal;
                                        obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                                        obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                        obj1.attributes = obj;
                                        closure_0 = closure_2((_function) => {
                                          c5 = 0;
                                          c6 = 0;
                                          c4 = 0;
                                          return (/* F124405 */ function*() { ... })();
                                        });
                                        let startSpanManualResult = tmp4Result1.startSpanManual(obj1, function(arg0) {
                                          const self = this;
                                          const apply = closure_0.apply;
                                          if (typeof apply === "unknown") {
                                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                          } else {
                                            applyArgumentsResult = apply(self, arguments);
                                          }
                                          return applyArgumentsResult;
                                        });
                                        const tmp4Result2 = tmp4(tmp5[3]);
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        if (closure_3) {
                                          let combined = concat(finalOperationName, " ", str15, " create");
                                        } else {
                                          combined = concat(finalOperationName, " ", str15);
                                        }
                                        let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                                        startSpanManualResult = tmp4Result1.startSpan(obj2, (_function) => {
                                          if (tmp) {
                                            closure_3(_function, first);
                                          }
                                          return str(dependencyMap[11]).handleCallbackErrors(() => { ... }, () => { ... }, /* F120245 */ function() { ... }, () => { ... });
                                        });
                                        const tmp4Result3 = tmp4(tmp5[3]);
                                      }
                                      return startSpanManualResult;
                                    }
                            };
                            let proxy1 = new Proxy(value, obj);
                            return proxy1;
                          }
                        }
                        tmpResult = tmp(tmp2[5]);
                      }
                      if (typeof value === "function") {
                        let bindResult = value.bind(self);
                      } else {
                        bindResult = value;
                        if (value) {
                          bindResult = value;
                          if (typeof value === "object") {
                            str = methodPath;
                            if (methodPath === undefined) {
                              str = "";
                            }
                            let _Proxy = Proxy;
                            obj1 = {
                              get(self, arg1, arg2) {
                                      let value = Reflect.get(self, arg1, arg2);
                                      let obj1 = str(dependencyMap[3]);
                                      let methodPath = obj1.buildMethodPath(str, String(arg1));
                                      if (typeof value === "function") {
                                        if (tmpResult.shouldInstrument(methodPath)) {
                                          if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                            dependencyMap = self;
                                            closure_2 = dependencyMap;
                                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                            let _Proxy3 = Proxy;
                                            let obj = {
                                              apply(arr, arg1, arg2) {
                                                      closure_0 = arr;
                                                      dependencyMap = arg2;
                                                      const first = arg2[0];
                                                      let obj = {};
                                                      obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                                                      let obj1 = str(dependencyMap[3]);
                                                      obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                                                      obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                                                      const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                                                      if (first) {
                                                        if ("model" in first) {
                                                          if (typeof first.model === "string") {
                                                            let str5 = first.model;
                                                          }
                                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                                                          if ("config" in first) {
                                                            if (typeof first.config === "object") {
                                                              if (first.config) {
                                                                const config = first.config;
                                                                let tmp7 = "temperature" in config;
                                                                if (tmp7) {
                                                                  tmp7 = typeof config.temperature === "number";
                                                                }
                                                                obj = {};
                                                                if (tmp7) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                                                }
                                                                if (tmp8) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                                                }
                                                                if (tmp9) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                                                }
                                                                if (tmp10) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                                                }
                                                                if (tmp11) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                                                }
                                                                if (tmp12) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                                                }
                                                                const merged = Object.assign(obj, obj);
                                                                if ("tools" in config) {
                                                                  let _Array = Array;
                                                                  if (Array.isArray(config.tools)) {
                                                                    const tools = config.tools;
                                                                    let _JSON = JSON;
                                                                    obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap(() => { ... }));
                                                                    const flatMapResult = tools.flatMap(() => { ... });
                                                                  }
                                                                }
                                                                tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                                                tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                                                tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                                                tmp8 = "topP" in config && typeof config.topP === "number";
                                                                tmp9 = "topK" in config && typeof config.topK === "number";
                                                              }
                                                            }
                                                          }
                                                        }
                                                        str5 = "unknown";
                                                        if (tmp3) {
                                                          str5 = "unknown";
                                                          if (typeof tmp3 === "object") {
                                                            if ("model" in tmp3) {
                                                              if (typeof tmp3.model === "string") {
                                                                str5 = tmp3.model;
                                                              }
                                                            }
                                                            str5 = "unknown";
                                                            if ("modelVersion" in tmp3) {
                                                              str5 = "unknown";
                                                              if (typeof tmp3.modelVersion === "string") {
                                                                str5 = tmp3.modelVersion;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      } else {
                                                        obj = {};
                                                        if ("model" in obj) {
                                                          if (typeof obj.model === "string") {
                                                            let str2 = obj.model;
                                                          }
                                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                                                        }
                                                        str2 = "unknown";
                                                        if (tmp3) {
                                                          str2 = "unknown";
                                                          if (typeof tmp3 === "object") {
                                                            if ("model" in tmp3) {
                                                              if (typeof tmp3.model === "string") {
                                                                str2 = tmp3.model;
                                                              }
                                                            }
                                                            str2 = "unknown";
                                                            if ("modelVersion" in tmp3) {
                                                              str2 = "unknown";
                                                              if (typeof tmp3.modelVersion === "string") {
                                                                str2 = tmp3.modelVersion;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                                      if (str15 == null) {
                                                        str15 = "unknown";
                                                      }
                                                      let tmp4Result = tmp4(tmp5[3]);
                                                      const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                                                      tmp4Result = tmp4(tmp5[5]);
                                                      const tmp4Result1 = str(dependencyMap[7]);
                                                      if (isStreamingMethodResult) {
                                                        obj1 = { name: null, op: null, attributes: null };
                                                        const _HermesInternal2 = HermesInternal;
                                                        obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                                                        obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                                        obj1.attributes = obj;
                                                        closure_0 = closure_2(/* F120241 */ function() { ... });
                                                        let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                                                        const tmp4Result2 = tmp4(tmp5[3]);
                                                      } else {
                                                        const _HermesInternal = HermesInternal;
                                                        if (closure_3) {
                                                          let combined = concat(finalOperationName, " ", str15, " create");
                                                        } else {
                                                          combined = concat(finalOperationName, " ", str15);
                                                        }
                                                        let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                                                        startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                                                        const tmp4Result3 = tmp4(tmp5[3]);
                                                      }
                                                      return startSpanManualResult;
                                                    }
                                            };
                                            let proxy = new Proxy(value, obj);
                                            str = proxy;
                                            return function instrumentedAndProxiedCreate() {
                                              let tmp = str(...HermesBuiltin.copyRestArgs());
                                              let proxy = tmp;
                                              if (tmp) {
                                                proxy = tmp;
                                                if (typeof tmp === "object") {
                                                  closure_3_0(closure_3_1[2]).CHAT_PATH;
                                                  str = undefined;
                                                  closure_1 = undefined;
                                                  if (str === undefined) {
                                                    str = "";
                                                  }
                                                  closure_1 = closure_2_1;
                                                  let _Proxy = Proxy;
                                                  let obj = { get() { ... } };
                                                  proxy = new Proxy(tmp, obj);
                                                }
                                              }
                                              return proxy;
                                            };
                                          } else {
                                            str = methodPath;
                                            dependencyMap = self;
                                            closure_2 = dependencyMap;
                                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                            let _Proxy2 = Proxy;
                                            obj = {
                                              apply(arr, arg1, arg2) {
                                                      closure_0 = arr;
                                                      dependencyMap = arg2;
                                                      const first = arg2[0];
                                                      let obj = {};
                                                      obj[str(dependencyMap[1]).GEN_AI_SYSTEM_ATTRIBUTE] = str(dependencyMap[2]).GOOGLE_GENAI_SYSTEM_NAME;
                                                      let obj1 = str(dependencyMap[3]);
                                                      obj[str(dependencyMap[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj1.getFinalOperationName(closure_0);
                                                      obj[str(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
                                                      const GEN_AI_REQUEST_MODEL_ATTRIBUTE = str(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                                                      if (first) {
                                                        if ("model" in first) {
                                                          if (typeof first.model === "string") {
                                                            let str5 = first.model;
                                                          }
                                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
                                                          if ("config" in first) {
                                                            if (typeof first.config === "object") {
                                                              if (first.config) {
                                                                const config = first.config;
                                                                let tmp7 = "temperature" in config;
                                                                if (tmp7) {
                                                                  tmp7 = typeof config.temperature === "number";
                                                                }
                                                                obj = {};
                                                                if (tmp7) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                                                                }
                                                                if (tmp8) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                                                                }
                                                                if (tmp9) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                                                                }
                                                                if (tmp10) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                                                                }
                                                                if (tmp11) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                                                                }
                                                                if (tmp12) {
                                                                  obj[tmp4(tmp5[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                                                                }
                                                                const merged = Object.assign(obj, obj);
                                                                if ("tools" in config) {
                                                                  let _Array = Array;
                                                                  if (Array.isArray(config.tools)) {
                                                                    const tools = config.tools;
                                                                    let _JSON = JSON;
                                                                    obj[tmp4(tmp5[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap(() => { ... }));
                                                                    const flatMapResult = tools.flatMap(() => { ... });
                                                                  }
                                                                }
                                                                tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                                                                tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                                                                tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                                                                tmp8 = "topP" in config && typeof config.topP === "number";
                                                                tmp9 = "topK" in config && typeof config.topK === "number";
                                                              }
                                                            }
                                                          }
                                                        }
                                                        str5 = "unknown";
                                                        if (tmp3) {
                                                          str5 = "unknown";
                                                          if (typeof tmp3 === "object") {
                                                            if ("model" in tmp3) {
                                                              if (typeof tmp3.model === "string") {
                                                                str5 = tmp3.model;
                                                              }
                                                            }
                                                            str5 = "unknown";
                                                            if ("modelVersion" in tmp3) {
                                                              str5 = "unknown";
                                                              if (typeof tmp3.modelVersion === "string") {
                                                                str5 = tmp3.modelVersion;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      } else {
                                                        obj = {};
                                                        if ("model" in obj) {
                                                          if (typeof obj.model === "string") {
                                                            let str2 = obj.model;
                                                          }
                                                          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
                                                        }
                                                        str2 = "unknown";
                                                        if (tmp3) {
                                                          str2 = "unknown";
                                                          if (typeof tmp3 === "object") {
                                                            if ("model" in tmp3) {
                                                              if (typeof tmp3.model === "string") {
                                                                str2 = tmp3.model;
                                                              }
                                                            }
                                                            str2 = "unknown";
                                                            if ("modelVersion" in tmp3) {
                                                              str2 = "unknown";
                                                              if (typeof tmp3.modelVersion === "string") {
                                                                str2 = tmp3.modelVersion;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      let str15 = obj[tmp4(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                                      if (str15 == null) {
                                                        str15 = "unknown";
                                                      }
                                                      let tmp4Result = tmp4(tmp5[3]);
                                                      const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
                                                      tmp4Result = tmp4(tmp5[5]);
                                                      const tmp4Result1 = str(dependencyMap[7]);
                                                      if (isStreamingMethodResult) {
                                                        obj1 = { name: null, op: null, attributes: null };
                                                        const _HermesInternal2 = HermesInternal;
                                                        obj1.name = "" + finalOperationName + " " + str15 + " stream-response";
                                                        obj1.op = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                                        obj1.attributes = obj;
                                                        closure_0 = closure_2(/* F120241 */ function() { ... });
                                                        let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                                                        const tmp4Result2 = tmp4(tmp5[3]);
                                                      } else {
                                                        const _HermesInternal = HermesInternal;
                                                        if (closure_3) {
                                                          let combined = concat(finalOperationName, " ", str15, " create");
                                                        } else {
                                                          combined = concat(finalOperationName, " ", str15);
                                                        }
                                                        let obj2 = { name: combined, op: tmp4(tmp5[3]).getSpanOperation(tmp2), attributes: obj };
                                                        startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                                                        const tmp4Result3 = tmp4(tmp5[3]);
                                                      }
                                                      return startSpanManualResult;
                                                    }
                                            };
                                            let proxy1 = new Proxy(value, obj);
                                            return proxy1;
                                          }
                                        }
                                        tmpResult = tmp(tmp2[5]);
                                      }
                                      if (typeof value === "function") {
                                        let bindResult = value.bind(self);
                                      } else {
                                        bindResult = value;
                                        if (value) {
                                          bindResult = value;
                                          if (typeof value === "object") {
                                            str = methodPath;
                                            if (methodPath === undefined) {
                                              str = "";
                                            }
                                            let _Proxy = Proxy;
                                            obj1 = {
                                              get(self, arg1, arg2) {
                                                      let value = Reflect.get(self, arg1, arg2);
                                                      let obj1 = str(dependencyMap[3]);
                                                      let methodPath = obj1.buildMethodPath(str, String(arg1));
                                                      if (typeof value === "function") {
                                                        if (tmpResult.shouldInstrument(methodPath)) {
                                                          if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                                            dependencyMap = self;
                                                            closure_2 = dependencyMap;
                                                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                                            let _Proxy3 = Proxy;
                                                            let obj = { apply() { ... } };
                                                            let proxy = new Proxy(value, obj);
                                                            str = proxy;
                                                            return function instrumentedAndProxiedCreate() { ... };
                                                          } else {
                                                            str = methodPath;
                                                            dependencyMap = self;
                                                            closure_2 = dependencyMap;
                                                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                                            let _Proxy2 = Proxy;
                                                            obj = { apply() { ... } };
                                                            let proxy1 = new Proxy(value, obj);
                                                            return proxy1;
                                                          }
                                                        }
                                                        tmpResult = tmp(tmp2[5]);
                                                      }
                                                      if (typeof value === "function") {
                                                        let bindResult = value.bind(self);
                                                      } else {
                                                        bindResult = value;
                                                        if (value) {
                                                          bindResult = value;
                                                          if (typeof value === "object") {
                                                            str = methodPath;
                                                            if (methodPath === undefined) {
                                                              str = "";
                                                            }
                                                            let _Proxy = Proxy;
                                                            obj1 = { get() { ... } };
                                                            bindResult = new Proxy(value, obj1);
                                                          }
                                                        }
                                                      }
                                                      return bindResult;
                                                    }
                                            };
                                            bindResult = new Proxy(value, obj1);
                                          }
                                        }
                                      }
                                      return bindResult;
                                    }
                            };
                            bindResult = new Proxy(value, obj1);
                          }
                        }
                      }
                      return bindResult;
                    }
            };
            bindResult = new Proxy(value, obj1);
          }
        }
      }
      return bindResult;
    }
  };
  const proxy = new Proxy(arg0, obj);
  return proxy;
};