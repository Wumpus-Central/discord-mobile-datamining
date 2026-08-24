// _runtime/00973_addPrivateRequestAttributes.js
import _mod958 from "metro/00958__.js";
import truncateTextByBytes from "00961_truncateTextByBytes.js";
import contentUnionToMessages from "00975_contentUnionToMessages.js";
import closure_2 from "00005_asyncGeneratorStep.js";

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
    const obj2 = contentUnionToMessages;
  }
  if ("contents" in config) {
    const push3 = items.push;
    const items3 = [];
    HermesBuiltin.arraySpread(contentUnionToMessages.contentUnionToMessages(config.contents, "user"), 0);
    HermesBuiltin.apply(items3, items);
    const obj3 = contentUnionToMessages;
  }
  if ("message" in config) {
    const push4 = items.push;
    const items4 = [];
    HermesBuiltin.arraySpread(contentUnionToMessages.contentUnionToMessages(config.message, "user"), 0);
    HermesBuiltin.apply(items4, items);
    const obj4 = contentUnionToMessages;
  }
  if (tmp33) {
    obj = {};
    obj[_mod958.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = items.length;
    const _JSON = JSON;
    obj[_mod958.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = JSON.stringify(truncateTextByBytes.truncateGenAiMessages(items));
    setAttributes.setAttributes(obj);
    const obj6 = truncateTextByBytes;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractModel = function extractModel(model, obj) {
  if ("model" in model) {
    if (typeof model.model === "string") {
      return model.model;
    }
  }
  if (obj) {
    if (typeof obj === "object") {
      if ("model" in obj) {
        if (typeof obj.model === "string") {
          return obj.model;
        }
      }
      if ("modelVersion" in obj) {
        if (typeof obj.modelVersion === "string") {
          return obj.modelVersion;
        }
      }
    }
  }
  return "unknown";
};
export const instrumentGoogleGenAIClient = function instrumentGoogleGenAIClient(arg0, arg1) {
  obj = _require(obj[12]);
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
      let value = Reflect.get(self, arg1, arg2);
      let obj1 = str(table[3]);
      let methodPath = obj1.buildMethodPath(str, String(arg1));
      if (typeof value === "function") {
        if (tmpResult.shouldInstrument(methodPath)) {
          if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
            str = methodPath;
            table = self;
            closure_2 = table;
            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
            let _Proxy3 = Proxy;
            let obj = { apply: null };
            obj[0] = function apply(closure_0) {
              let dependencyMap = arg2;
              const first = arg2[0];
              let callback = first;
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
                obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                obj1[2] = obj;
                closure_0 = undefined;
                closure_0 = callback((arg0) => {
                  closure_0 = arg0;
                  c5 = 0;
                  c6 = 0;
                  c4 = 0;
                  return (function*(arg0) {
                    if (c6 === 2) {
                      c6 = 3;
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
                        c6 = 2;
                        if (0 === c5) {
                          if (arg0 === 1) {
                            c6 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c6 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_2 = tmp3;
                            let dependencyMap = tmp7;
                            dependencyMap = undefined;
                            c4 = 1;
                            let recordInputs = closure_2.recordInputs;
                            if (recordInputs) {
                              recordInputs = closure_1_2;
                            }
                            if (recordInputs) {
                              callback(lib, closure_1_2);
                            }
                            c5 = 2;
                            c6 = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = lib.apply(dependencyMap, closure_1_1);
                            return obj1;
                          }
                        } else if (1 === tmp7) {
                          c4 = 0;
                          closure_2 = callback;
                          const obj2 = { code: null, message: "internal_error" };
                          obj2[0] = str(dependencyMap[9]).SPAN_STATUS_ERROR;
                          lib.setStatus(obj2);
                          let obj4 = str(dependencyMap[10]);
                          const obj3 = { mechanism: null };
                          obj4 = { handled: false, type: "auto.ai.google_genai", data: null };
                          const obj5 = { function: null };
                          obj5[0] = lib;
                          obj4[2] = obj5;
                          obj3[0] = obj4;
                          obj4.captureException(closure_2, obj3);
                          lib.end();
                          throw closure_2;
                        } else if (arg0 === 1) {
                          c6 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c4 = 0;
                          c6 = 3;
                          const obj6 = { value: null, done: true };
                          obj6[0] = arg1;
                          return obj6;
                        } else {
                          dependencyMap = arg1;
                          obj = str(dependencyMap[8]);
                          const _Boolean = Boolean;
                          c4 = 0;
                          c6 = 3;
                          const obj7 = { value: null, done: true };
                          obj7[0] = obj.instrumentStream(dependencyMap, lib, Boolean(closure_2.recordOutputs));
                          return obj7;
                        }
                      } catch (tmp37) {
                        callback = tmp37;
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
                let obj2 = { name: null, op: null, attributes: null };
                obj2[0] = combined;
                obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                obj2[2] = obj;
                startSpanManualResult = tmp4Result1.startSpan(obj2, (arg0) => {
                  closure_0 = arg0;
                  if (tmp) {
                    callback(arg0, recordInputs);
                  }
                  return str(table[11]).handleCallbackErrors(() => callback.apply(closure_1_1, closure_1), (arg0) => {
                    let obj = callback(closure_1_1[10]);
                    obj = { function: callback };
                    obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.google_genai", data: obj } });
                  }, () => {

                  }, (obj) => {
                    if (!closure_2_3) {
                      obj = closure_0;
                      recordOutputs = recordOutputs.recordOutputs;
                      if (obj) {
                        if (typeof obj === "object") {
                          if (obj.modelVersion) {
                            const attr = obj.setAttribute(str(dependencyMap[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, obj.modelVersion);
                          }
                          if (obj.usageMetadata) {
                            if (typeof obj.usageMetadata === "object") {
                              const usageMetadata = obj.usageMetadata;
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
                            if (Array.isArray(obj.candidates)) {
                              if (obj.candidates.length > 0) {
                                const candidates = obj.candidates;
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
                            if (obj.functionCalls) {
                              const functionCalls = obj.functionCalls;
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
            };
            let proxy = new Proxy(value, obj);
            str = proxy;
            return function instrumentedAndProxiedCreate() {
              let tmp = str(...HermesBuiltin.copyRestArgs());
              let proxy = tmp;
              if (tmp) {
                proxy = tmp;
                if (typeof tmp === "object") {
                  str = closure_2_0(closure_2_1[2]).CHAT_PATH;
                  str = undefined;
                  closure_1 = undefined;
                  if (str === undefined) {
                    str = "";
                  }
                  let _Proxy = Proxy;
                  let obj = { get: null };
                  obj[0] = function get(self) {
                    let value = Reflect.get(self, arg1, arg2);
                    let obj1 = str(table[3]);
                    let methodPath = obj1.buildMethodPath(str, String(arg1));
                    if (typeof value === "function") {
                      if (tmpResult.shouldInstrument(methodPath)) {
                        if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                          str = methodPath;
                          table = self;
                          closure_2 = table;
                          closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                          let _Proxy3 = Proxy;
                          let obj = { apply: null };
                          obj[0] = function apply(closure_0) {
                            let dependencyMap = arg2;
                            const first = arg2[0];
                            let callback = first;
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
                              obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                              obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                              obj1[2] = obj;
                              closure_0 = undefined;
                              closure_0 = callback(/* F116354 */ function() { ... });
                              let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                              const tmp4Result2 = tmp4(tmp5[3]);
                            } else {
                              const _HermesInternal = HermesInternal;
                              if (closure_3) {
                                let combined = concat(finalOperationName, " ", str15, " create");
                              } else {
                                combined = concat(finalOperationName, " ", str15);
                              }
                              let obj2 = { name: null, op: null, attributes: null };
                              obj2[0] = combined;
                              obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                              obj2[2] = obj;
                              startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                              const tmp4Result3 = tmp4(tmp5[3]);
                            }
                            return startSpanManualResult;
                          };
                          let proxy = new Proxy(value, obj);
                          str = proxy;
                          return function instrumentedAndProxiedCreate() {
                            let tmp = str(...HermesBuiltin.copyRestArgs());
                            let proxy = tmp;
                            if (tmp) {
                              proxy = tmp;
                              if (typeof tmp === "object") {
                                str = closure_2_0(closure_2_1[2]).CHAT_PATH;
                                str = undefined;
                                closure_1 = undefined;
                                if (str === undefined) {
                                  str = "";
                                }
                                let _Proxy = Proxy;
                                let obj = { get: null };
                                obj[0] = function get() { ... };
                                proxy = new Proxy(tmp, obj);
                                let tmp10 = closure_1;
                              }
                            }
                            return proxy;
                          };
                        } else {
                          str = methodPath;
                          table = self;
                          closure_2 = table;
                          closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                          let _Proxy2 = Proxy;
                          obj = { apply: null };
                          obj[0] = function apply(closure_0) {
                            let dependencyMap = arg2;
                            const first = arg2[0];
                            let callback = first;
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
                              obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                              obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                              obj1[2] = obj;
                              closure_0 = undefined;
                              closure_0 = callback(/* F116354 */ function() { ... });
                              let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                              const tmp4Result2 = tmp4(tmp5[3]);
                            } else {
                              const _HermesInternal = HermesInternal;
                              if (closure_3) {
                                let combined = concat(finalOperationName, " ", str15, " create");
                              } else {
                                combined = concat(finalOperationName, " ", str15);
                              }
                              let obj2 = { name: null, op: null, attributes: null };
                              obj2[0] = combined;
                              obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                              obj2[2] = obj;
                              startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                              const tmp4Result3 = tmp4(tmp5[3]);
                            }
                            return startSpanManualResult;
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
                          obj1 = { get: null };
                          obj1[0] = function get(self) {
                            let value = Reflect.get(self, arg1, arg2);
                            let obj1 = str(table[3]);
                            let methodPath = obj1.buildMethodPath(str, String(arg1));
                            if (typeof value === "function") {
                              if (tmpResult.shouldInstrument(methodPath)) {
                                if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                  str = methodPath;
                                  table = self;
                                  closure_2 = table;
                                  closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                  let _Proxy3 = Proxy;
                                  let obj = { apply: null };
                                  obj[0] = function apply() { ... };
                                  let proxy = new Proxy(value, obj);
                                  str = proxy;
                                  return function instrumentedAndProxiedCreate() { ... };
                                } else {
                                  str = methodPath;
                                  table = self;
                                  closure_2 = table;
                                  closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                  let _Proxy2 = Proxy;
                                  obj = { apply: null };
                                  obj[0] = function apply() { ... };
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
                                  obj1 = { get: null };
                                  obj1[0] = function get() { ... };
                                  bindResult = new Proxy(value, obj1);
                                  let tmp23 = table;
                                }
                              }
                            }
                            return bindResult;
                          };
                          bindResult = new Proxy(value, obj1);
                          let tmp23 = table;
                        }
                      }
                    }
                    return bindResult;
                  };
                  proxy = new Proxy(tmp, obj);
                  let tmp10 = closure_1;
                }
              }
              return proxy;
            };
          } else {
            str = methodPath;
            table = self;
            closure_2 = table;
            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
            let _Proxy2 = Proxy;
            obj = { apply: null };
            obj[0] = function apply(closure_0) {
              let dependencyMap = arg2;
              const first = arg2[0];
              let callback = first;
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
                obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                obj1[2] = obj;
                closure_0 = undefined;
                closure_0 = callback((arg0) => {
                  closure_0 = arg0;
                  c5 = 0;
                  c6 = 0;
                  c4 = 0;
                  return (function*(arg0) {
                    if (c6 === 2) {
                      c6 = 3;
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
                        c6 = 2;
                        if (0 === c5) {
                          if (arg0 === 1) {
                            c6 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c6 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_2 = tmp3;
                            let dependencyMap = tmp7;
                            dependencyMap = undefined;
                            c4 = 1;
                            let recordInputs = closure_2.recordInputs;
                            if (recordInputs) {
                              recordInputs = closure_1_2;
                            }
                            if (recordInputs) {
                              callback(lib, closure_1_2);
                            }
                            c5 = 2;
                            c6 = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = lib.apply(dependencyMap, closure_1_1);
                            return obj1;
                          }
                        } else if (1 === tmp7) {
                          c4 = 0;
                          closure_2 = callback;
                          const obj2 = { code: null, message: "internal_error" };
                          obj2[0] = str(dependencyMap[9]).SPAN_STATUS_ERROR;
                          lib.setStatus(obj2);
                          let obj4 = str(dependencyMap[10]);
                          const obj3 = { mechanism: null };
                          obj4 = { handled: false, type: "auto.ai.google_genai", data: null };
                          const obj5 = { function: null };
                          obj5[0] = lib;
                          obj4[2] = obj5;
                          obj3[0] = obj4;
                          obj4.captureException(closure_2, obj3);
                          lib.end();
                          throw closure_2;
                        } else if (arg0 === 1) {
                          c6 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c4 = 0;
                          c6 = 3;
                          const obj6 = { value: null, done: true };
                          obj6[0] = arg1;
                          return obj6;
                        } else {
                          dependencyMap = arg1;
                          obj = str(dependencyMap[8]);
                          const _Boolean = Boolean;
                          c4 = 0;
                          c6 = 3;
                          const obj7 = { value: null, done: true };
                          obj7[0] = obj.instrumentStream(dependencyMap, lib, Boolean(closure_2.recordOutputs));
                          return obj7;
                        }
                      } catch (tmp37) {
                        callback = tmp37;
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
                let obj2 = { name: null, op: null, attributes: null };
                obj2[0] = combined;
                obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                obj2[2] = obj;
                startSpanManualResult = tmp4Result1.startSpan(obj2, (arg0) => {
                  closure_0 = arg0;
                  if (tmp) {
                    callback(arg0, recordInputs);
                  }
                  return str(table[11]).handleCallbackErrors(() => callback.apply(closure_1_1, closure_1), (arg0) => {
                    let obj = callback(closure_1_1[10]);
                    obj = { function: callback };
                    obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.google_genai", data: obj } });
                  }, () => {

                  }, (obj) => {
                    if (!closure_2_3) {
                      obj = closure_0;
                      recordOutputs = recordOutputs.recordOutputs;
                      if (obj) {
                        if (typeof obj === "object") {
                          if (obj.modelVersion) {
                            const attr = obj.setAttribute(str(dependencyMap[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, obj.modelVersion);
                          }
                          if (obj.usageMetadata) {
                            if (typeof obj.usageMetadata === "object") {
                              const usageMetadata = obj.usageMetadata;
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
                            if (Array.isArray(obj.candidates)) {
                              if (obj.candidates.length > 0) {
                                const candidates = obj.candidates;
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
                            if (obj.functionCalls) {
                              const functionCalls = obj.functionCalls;
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
            obj1 = { get: null };
            obj1[0] = function get(self) {
              let value = Reflect.get(self, arg1, arg2);
              let obj1 = str(table[3]);
              let methodPath = obj1.buildMethodPath(str, String(arg1));
              if (typeof value === "function") {
                if (tmpResult.shouldInstrument(methodPath)) {
                  if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                    str = methodPath;
                    table = self;
                    closure_2 = table;
                    closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                    let _Proxy3 = Proxy;
                    let obj = { apply: null };
                    obj[0] = function apply(closure_0) {
                      let dependencyMap = arg2;
                      const first = arg2[0];
                      let callback = first;
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
                        obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                        obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                        obj1[2] = obj;
                        closure_0 = undefined;
                        closure_0 = callback((arg0) => {
                          closure_0 = arg0;
                          c5 = 0;
                          c6 = 0;
                          c4 = 0;
                          return (/* F120454 */ function*() { ... })();
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
                        let obj2 = { name: null, op: null, attributes: null };
                        obj2[0] = combined;
                        obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                        obj2[2] = obj;
                        startSpanManualResult = tmp4Result1.startSpan(obj2, (arg0) => {
                          closure_0 = arg0;
                          if (tmp) {
                            callback(arg0, recordInputs);
                          }
                          return str(table[11]).handleCallbackErrors(() => { ... }, () => { ... }, /* F116358 */ function() { ... }, () => { ... });
                        });
                        const tmp4Result3 = tmp4(tmp5[3]);
                      }
                      return startSpanManualResult;
                    };
                    let proxy = new Proxy(value, obj);
                    str = proxy;
                    return function instrumentedAndProxiedCreate() {
                      let tmp = str(...HermesBuiltin.copyRestArgs());
                      let proxy = tmp;
                      if (tmp) {
                        proxy = tmp;
                        if (typeof tmp === "object") {
                          str = closure_2_0(closure_2_1[2]).CHAT_PATH;
                          str = undefined;
                          closure_1 = undefined;
                          if (str === undefined) {
                            str = "";
                          }
                          let _Proxy = Proxy;
                          let obj = { get: null };
                          obj[0] = function get(self) {
                            let value = Reflect.get(self, arg1, arg2);
                            let obj1 = str(table[3]);
                            let methodPath = obj1.buildMethodPath(str, String(arg1));
                            if (typeof value === "function") {
                              if (tmpResult.shouldInstrument(methodPath)) {
                                if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                  str = methodPath;
                                  table = self;
                                  closure_2 = table;
                                  closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                  let _Proxy3 = Proxy;
                                  let obj = { apply: null };
                                  obj[0] = function apply() { ... };
                                  let proxy = new Proxy(value, obj);
                                  str = proxy;
                                  return function instrumentedAndProxiedCreate() { ... };
                                } else {
                                  str = methodPath;
                                  table = self;
                                  closure_2 = table;
                                  closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                  let _Proxy2 = Proxy;
                                  obj = { apply: null };
                                  obj[0] = function apply() { ... };
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
                                  obj1 = { get: null };
                                  obj1[0] = function get() { ... };
                                  bindResult = new Proxy(value, obj1);
                                  let tmp23 = table;
                                }
                              }
                            }
                            return bindResult;
                          };
                          proxy = new Proxy(tmp, obj);
                          let tmp10 = closure_1;
                        }
                      }
                      return proxy;
                    };
                  } else {
                    str = methodPath;
                    table = self;
                    closure_2 = table;
                    closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                    let _Proxy2 = Proxy;
                    obj = { apply: null };
                    obj[0] = function apply(closure_0) {
                      let dependencyMap = arg2;
                      const first = arg2[0];
                      let callback = first;
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
                        obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                        obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                        obj1[2] = obj;
                        closure_0 = undefined;
                        closure_0 = callback((arg0) => {
                          closure_0 = arg0;
                          c5 = 0;
                          c6 = 0;
                          c4 = 0;
                          return (/* F120454 */ function*() { ... })();
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
                        let obj2 = { name: null, op: null, attributes: null };
                        obj2[0] = combined;
                        obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                        obj2[2] = obj;
                        startSpanManualResult = tmp4Result1.startSpan(obj2, (arg0) => {
                          closure_0 = arg0;
                          if (tmp) {
                            callback(arg0, recordInputs);
                          }
                          return str(table[11]).handleCallbackErrors(() => { ... }, () => { ... }, /* F116358 */ function() { ... }, () => { ... });
                        });
                        const tmp4Result3 = tmp4(tmp5[3]);
                      }
                      return startSpanManualResult;
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
                    obj1 = { get: null };
                    obj1[0] = function get(self) {
                      let value = Reflect.get(self, arg1, arg2);
                      let obj1 = str(table[3]);
                      let methodPath = obj1.buildMethodPath(str, String(arg1));
                      if (typeof value === "function") {
                        if (tmpResult.shouldInstrument(methodPath)) {
                          if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                            str = methodPath;
                            table = self;
                            closure_2 = table;
                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                            let _Proxy3 = Proxy;
                            let obj = { apply: null };
                            obj[0] = function apply(closure_0) {
                              let dependencyMap = arg2;
                              const first = arg2[0];
                              let callback = first;
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
                                obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                                obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                obj1[2] = obj;
                                closure_0 = undefined;
                                closure_0 = callback(/* F116354 */ function() { ... });
                                let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                                const tmp4Result2 = tmp4(tmp5[3]);
                              } else {
                                const _HermesInternal = HermesInternal;
                                if (closure_3) {
                                  let combined = concat(finalOperationName, " ", str15, " create");
                                } else {
                                  combined = concat(finalOperationName, " ", str15);
                                }
                                let obj2 = { name: null, op: null, attributes: null };
                                obj2[0] = combined;
                                obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                obj2[2] = obj;
                                startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                                const tmp4Result3 = tmp4(tmp5[3]);
                              }
                              return startSpanManualResult;
                            };
                            let proxy = new Proxy(value, obj);
                            str = proxy;
                            return function instrumentedAndProxiedCreate() {
                              let tmp = str(...HermesBuiltin.copyRestArgs());
                              let proxy = tmp;
                              if (tmp) {
                                proxy = tmp;
                                if (typeof tmp === "object") {
                                  str = closure_2_0(closure_2_1[2]).CHAT_PATH;
                                  str = undefined;
                                  closure_1 = undefined;
                                  if (str === undefined) {
                                    str = "";
                                  }
                                  let _Proxy = Proxy;
                                  let obj = { get: null };
                                  obj[0] = function get() { ... };
                                  proxy = new Proxy(tmp, obj);
                                  let tmp10 = closure_1;
                                }
                              }
                              return proxy;
                            };
                          } else {
                            str = methodPath;
                            table = self;
                            closure_2 = table;
                            closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                            let _Proxy2 = Proxy;
                            obj = { apply: null };
                            obj[0] = function apply(closure_0) {
                              let dependencyMap = arg2;
                              const first = arg2[0];
                              let callback = first;
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
                                obj1[0] = "" + finalOperationName + " " + str15 + " stream-response";
                                obj1[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                obj1[2] = obj;
                                closure_0 = undefined;
                                closure_0 = callback(/* F116354 */ function() { ... });
                                let startSpanManualResult = tmp4Result1.startSpanManual(obj1, () => { ... });
                                const tmp4Result2 = tmp4(tmp5[3]);
                              } else {
                                const _HermesInternal = HermesInternal;
                                if (closure_3) {
                                  let combined = concat(finalOperationName, " ", str15, " create");
                                } else {
                                  combined = concat(finalOperationName, " ", str15);
                                }
                                let obj2 = { name: null, op: null, attributes: null };
                                obj2[0] = combined;
                                obj2[1] = tmp4(tmp5[3]).getSpanOperation(tmp2);
                                obj2[2] = obj;
                                startSpanManualResult = tmp4Result1.startSpan(obj2, () => { ... });
                                const tmp4Result3 = tmp4(tmp5[3]);
                              }
                              return startSpanManualResult;
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
                            obj1 = { get: null };
                            obj1[0] = function get(self) {
                              let value = Reflect.get(self, arg1, arg2);
                              let obj1 = str(table[3]);
                              let methodPath = obj1.buildMethodPath(str, String(arg1));
                              if (typeof value === "function") {
                                if (tmpResult.shouldInstrument(methodPath)) {
                                  if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
                                    str = methodPath;
                                    table = self;
                                    closure_2 = table;
                                    closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                    let _Proxy3 = Proxy;
                                    let obj = { apply: null };
                                    obj[0] = function apply() { ... };
                                    let proxy = new Proxy(value, obj);
                                    str = proxy;
                                    return function instrumentedAndProxiedCreate() { ... };
                                  } else {
                                    str = methodPath;
                                    table = self;
                                    closure_2 = table;
                                    closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
                                    let _Proxy2 = Proxy;
                                    obj = { apply: null };
                                    obj[0] = function apply() { ... };
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
                                    obj1 = { get: null };
                                    obj1[0] = function get() { ... };
                                    bindResult = new Proxy(value, obj1);
                                    let tmp23 = table;
                                  }
                                }
                              }
                              return bindResult;
                            };
                            bindResult = new Proxy(value, obj1);
                            let tmp23 = table;
                          }
                        }
                      }
                      return bindResult;
                    };
                    bindResult = new Proxy(value, obj1);
                    let tmp23 = table;
                  }
                }
              }
              return bindResult;
            };
            bindResult = new Proxy(value, obj1);
            let tmp23 = table;
          }
        }
      }
      return bindResult;
    }
  };
  const proxy = new Proxy(arg0, obj);
  return proxy;
};