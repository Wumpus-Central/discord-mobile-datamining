// _runtime/00849_extractModel.js
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00834_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT from "00837_DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT.js";
import contentUnionToMessages from "00851_contentUnionToMessages.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

const require = globalThis.__r;
let _require, closure_1, content, recordOutputs, str;

function addPrivateRequestAttributes(setAttributes, config) {
  const systemInstruction =
    "config" in config &&
    config.config &&
    typeof config.config === "object" &&
    "systemInstruction" in config.config &&
    config.config.systemInstruction;
  const items = [];
  if (systemInstruction) {
    const push = items.push;
    const items1 = [];
    const obj = contentUnionToMessages;
    HermesBuiltin.arraySpread(items1, obj.contentUnionToMessages(config.config.systemInstruction, "system"), 0);
    HermesBuiltin.apply(push, items1, items);
  }
  if ("history" in config) {
    const push2 = items.push;
    const items2 = [];
    const obj2 = contentUnionToMessages;
    HermesBuiltin.arraySpread(items2, obj2.contentUnionToMessages(config.history, "user"), 0);
    HermesBuiltin.apply(push2, items2, items);
  }
  if ("contents" in config) {
    const push3 = items.push;
    const items3 = [];
    const obj3 = contentUnionToMessages;
    HermesBuiltin.arraySpread(items3, obj3.contentUnionToMessages(config.contents, "user"), 0);
    HermesBuiltin.apply(push3, items3, items);
  }
  if ("message" in config) {
    const push4 = items.push;
    const items4 = [];
    const obj4 = contentUnionToMessages;
    HermesBuiltin.arraySpread(items4, obj4.contentUnionToMessages(config.message, "user"), 0);
    HermesBuiltin.apply(push4, items4, items);
  }
  const tmp34 = Array.isArray(items) && items.length;
  if (tmp34) {
    const obj5 = {};
    setAttributes = setAttributes.setAttributes;
    obj5[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = items.length;
    const _JSON = JSON;
    const GEN_AI_REQUEST_MESSAGES_ATTRIBUTE =
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
    const obj6 = DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT;
    obj5[GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = stringify(obj6.truncateGenAiMessages(items));
    setAttributes(obj5);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractModel = function extractModel(model, model2) {
  if ("model" in model) {
    if (typeof model.model === "string") {
      return model.model;
    }
  }
  const tmp = model2;
  if (tmp) {
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
  let c0;
  let obj2;
  function get(self, arg1, arg2) {
    let bindResult;
    function apply(arr, arg1, arg2) {
      let startSpanManualResult;
      let tmp4Result7;
      let tmp4Result8;
      let closure_0 = arr;
      closure_1 = arg2;
      const first = arg2[0];
      const tmp2 = closure_0;
      const tmp3 = closure_1;
      let obj = {};
      obj[methodPath(closure_1[1]).GEN_AI_SYSTEM_ATTRIBUTE] = methodPath(closure_1[2]).GOOGLE_GENAI_SYSTEM_NAME;
      const GEN_AI_OPERATION_NAME_ATTRIBUTE = methodPath(closure_1[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE;
      let obj2 = methodPath(closure_1[3]);
      obj[GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj2.getFinalOperationName(closure_0);
      obj[methodPath(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.google_genai";
      const GEN_AI_REQUEST_MODEL_ATTRIBUTE = methodPath(closure_1[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
      if (first) {
        let str5;
        if ("model" in first) {
          if (typeof first.model === "string") {
            str5 = first.model;
          }
          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str5;
          if ("config" in first) {
            if (typeof first.config === "object") {
              if (first.config) {
                const config = first.config;
                let tmp7 = "temperature" in config;
                const _Object = Object;
                if (tmp7) {
                  tmp7 = typeof config.temperature === "number";
                }
                let obj3 = {};
                if (tmp7) {
                  obj3[methodPath(closure_1[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
                }
                const tmp8 = "topP" in config && typeof config.topP === "number";
                if (tmp8) {
                  obj3[methodPath(closure_1[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
                }
                const tmp9 = "topK" in config && typeof config.topK === "number";
                if (tmp9) {
                  obj3[methodPath(closure_1[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
                }
                const tmp10 = "maxOutputTokens" in config && typeof config.maxOutputTokens === "number";
                if (tmp10) {
                  obj3[methodPath(closure_1[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
                }
                const tmp11 = "frequencyPenalty" in config && typeof config.frequencyPenalty === "number";
                if (tmp11) {
                  obj3[methodPath(closure_1[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
                }
                const tmp12 = "presencePenalty" in config && typeof config.presencePenalty === "number";
                if (tmp12) {
                  obj3[methodPath(closure_1[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
                }
                let obj4 = assign(obj, obj3);
                if ("tools" in config) {
                  let _Array = Array;
                  if (Array.isArray(config.tools)) {
                    const tools = config.tools;
                    let _JSON = JSON;
                    const flatMapResult = tools.flatMap(
                      (functionDeclarations) => functionDeclarations.functionDeclarations,
                    );
                    obj[methodPath(closure_1[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] =
                      JSON.stringify(flatMapResult);
                  }
                }
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
        let str2;
        let obj5 = {};
        if ("model" in obj5) {
          if (typeof obj5.model === "string") {
            str2 = obj5.model;
          }
          obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
        }
        str = "unknown";
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
      let str15 = obj[methodPath(undefined, tmp5[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      if (str15 == null) {
        str15 = "unknown";
      }
      const tmp4Result = methodPath(closure_1[3]);
      const finalOperationName = tmp4Result.getFinalOperationName(tmp2);
      const tmp4Result5 = methodPath(closure_1[5]);
      const isStreamingMethodResult = tmp4Result5.isStreamingMethod(tmp2);
      const tmp4Result6 = methodPath(closure_1[7]);
      if (isStreamingMethodResult) {
        let obj6 = {
          name: "" + finalOperationName + " " + str15 + " stream-response",
          op: tmp4Result7.getSpanOperation(tmp2),
          attributes: obj,
        };
        const _HermesInternal2 = HermesInternal;
        const startSpanManual = tmp4Result6.startSpanManual;
        tmp4Result7 = methodPath(closure_1[3]);
        closure_0 = closure_2((_function) => {
          let c5 = 0;
          let c6 = 0;
          let c4 = 0;
          return (function* (arg0) {
            let obj;
            let obj8;
            let obj9;
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
                    closure_1 = undefined;
                    c4 = 1;
                    const recordInputs = first.recordInputs && closure_2;
                    if (recordInputs) {
                      closure_3_3(_function, closure_2);
                    }
                    c5 = 2;
                    c6 = 1;
                    const obj4 = { value: _function.apply(closure_2_1, closure_1), done: false };
                    return obj4;
                  }
                } else if (1 === c5) {
                  c4 = 0;
                  closure_2 = closure_3;
                  const setStatus = _function.setStatus;
                  const obj6 = { code: _function(closure_1[9]).SPAN_STATUS_ERROR, message: "internal_error" };
                  setStatus(obj6);
                  const obj7 = { mechanism: obj8 };
                  obj8 = { handled: false, type: "auto.ai.google_genai", data: obj9 };
                  obj9 = { function: _function };
                  const obj5 = _function(closure_1[10]);
                  obj5.captureException(closure_2, obj7);
                  _function.end();
                  throw closure_2;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = value;
                  const _Boolean = Boolean;
                  c4 = 0;
                  c6 = 3;
                  const obj11 = {
                    value: obj.instrumentStream(closure_1, _function, Boolean(first.recordOutputs)),
                    done: true,
                  };
                  obj = _function(closure_1[8]);
                  return obj11;
                }
              } catch (tmp34) {
                closure_3 = tmp34;
                if (0 === c4) {
                  c6 = 3;
                  throw tmp34;
                } else {
                  c5 = 1;
                }
              }
            }
          })();
        });
        startSpanManualResult = startSpanManual(obj6, function (arg0) {
          return closure_0(...arguments);
        });
      } else {
        let combined;
        const _HermesInternal = HermesInternal;
        const startSpan = tmp4Result6.startSpan;
        if (closure_3) {
          combined = concat(finalOperationName, " ", str15, " create");
        } else {
          combined = concat(finalOperationName, " ", str15);
        }
        let obj7 = { name: combined, op: tmp4Result8.getSpanOperation(tmp2), attributes: obj };
        tmp4Result8 = methodPath(closure_1[3]);
        startSpanManualResult = startSpan(obj7, (_function) => {
          const tmp = first.recordInputs && first;
          if (tmp) {
            closure_3(_function, first);
          }
          let obj = methodPath(closure_1[11]);
          return obj.handleCallbackErrors(
            () => _function.apply(closure_1, closure_1_1),
            (arg0) => {
              let obj3;
              let obj4;
              const obj2 = { mechanism: obj3 };
              obj3 = { handled: false, type: "auto.ai.google_genai", data: obj4 };
              obj4 = { function: _function };
              const obj = _function(closure_1[10]);
              obj.captureException(arg0, obj2);
            },
            () => {},
            (modelVersion) => {
              if (!closure_3) {
                recordOutputs = recordOutputs.recordOutputs;
                if (modelVersion) {
                  if (typeof modelVersion === "object") {
                    if (modelVersion.modelVersion) {
                      const attr = _function.setAttribute(
                        proxy(closure_4_1[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE,
                        modelVersion.modelVersion,
                      );
                    }
                    if (modelVersion.usageMetadata) {
                      if (typeof modelVersion.usageMetadata === "object") {
                        const usageMetadata = modelVersion.usageMetadata;
                        if (typeof usageMetadata.promptTokenCount === "number") {
                          const obj2 = {};
                          obj2[proxy(closure_4_1[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                            usageMetadata.promptTokenCount;
                          _function.setAttributes(obj2);
                        }
                        if (typeof usageMetadata.candidatesTokenCount === "number") {
                          const obj3 = {};
                          obj3[proxy(closure_4_1[1]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                            usageMetadata.candidatesTokenCount;
                          _function.setAttributes(obj3);
                        }
                        if (typeof usageMetadata.totalTokenCount === "number") {
                          const obj4 = {};
                          obj4[proxy(closure_4_1[1]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                            usageMetadata.totalTokenCount;
                          _function.setAttributes(obj4);
                        }
                      }
                    }
                    if (recordOutputs) {
                      let _Array = Array;
                      if (Array.isArray(modelVersion.candidates)) {
                        if (modelVersion.candidates.length > 0) {
                          const candidates = modelVersion.candidates;
                          let mapped = candidates.map((content) => {
                            content = content.content;
                            let parts;
                            if (content != null) {
                              parts = content.parts;
                            }
                            str = "";
                            if (parts) {
                              const _Array = Array;
                              str = "";
                              if (Array.isArray(content.content.parts)) {
                                const parts1 = content.content.parts;
                                const mapped = parts1.map((text) => {
                                  str = "";
                                  if (typeof text.text === "string") {
                                    str = text.text;
                                  }
                                  return str;
                                });
                                const found = mapped.filter((item) => item.length > 0);
                                str = found.join("");
                              }
                            }
                            return str;
                          });
                          let found = mapped.filter((item) => item.length > 0);
                          if (found.length > 0) {
                            const obj5 = {};
                            const setAttributes = _function.setAttributes;
                            str = "";
                            obj5[proxy(closure_4_1[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = found.join("");
                            setAttributes(obj5);
                          }
                        }
                      }
                    }
                    if (recordOutputs) {
                      if (modelVersion.functionCalls) {
                        const functionCalls = modelVersion.functionCalls;
                        const _Array2 = Array;
                        const isArray = Array.isArray(functionCalls) && functionCalls.length > 0;
                        if (isArray) {
                          const obj6 = {};
                          const setAttributes2 = _function.setAttributes;
                          const _JSON = JSON;
                          obj6[proxy(closure_4_1[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                            JSON.stringify(functionCalls);
                          setAttributes2(obj6);
                        }
                      }
                    }
                  }
                }
              }
            },
          );
        });
      }
      return startSpanManualResult;
    }
    let value = Reflect.get(self, arg1, arg2);
    let tmp = str;
    let tmp2 = closure_1;
    let obj2 = str(closure_1[3]);
    let methodPath = obj2.buildMethodPath(proxy, String(arg1));
    if (typeof value === "function") {
      let tmpResult = tmp(tmp2[5]);
      if (tmpResult.shouldInstrument(methodPath)) {
        if (methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD) {
          let tmp12 = closure_1;
          closure_1 = self;
          let closure_2 = closure_1;
          let closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
          let _Proxy3 = Proxy;
          let obj = { apply };
          let self5 = this;
          let self6 = this;
          let tmp13 = value;
          let tmp14 = obj;
          proxy = new Proxy(value, obj);
          let tmp16 = proxy;
          return instrumentedAndProxiedCreate;
        } else {
          let tmp7 = closure_1;
          closure_1 = self;
          closure_2 = closure_1;
          closure_3 = methodPath === tmp(tmp2[2]).CHATS_CREATE_METHOD;
          let _Proxy2 = Proxy;
          let obj3 = { apply };
          let self3 = this;
          let self4 = this;
          let tmp8 = value;
          let tmp9 = obj3;
          let proxy1 = new Proxy(value, obj3);
          let tmp11 = proxy1;
          return proxy1;
        }
      }
    }
    if (typeof value === "function") {
      bindResult = value.bind(self);
    } else {
      bindResult = value;
      if (bindResult) {
        bindResult = value;
        if (typeof value === "object") {
          str = methodPath;
          let tmp17 = closure_1;
          if (methodPath === undefined) {
            str = "";
          }
          closure_1 = tmp17;
          let _Proxy = Proxy;
          let obj4 = { get };
          self = this;
          let self2 = this;
          let tmp5 = value;
          let tmp6 = obj4;
          bindResult = new Proxy(value, obj4);
        }
      }
    }
    return bindResult;
  }
  const _Boolean = Boolean;
  const obj = require("metro/00724__.js");
  const client = obj.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const _BooleanResult = _Boolean(sendDefaultPii);
  obj2 = { recordInputs: _BooleanResult, recordOutputs: _BooleanResult };
  const merged = Object.assign(arg1);
  _require = "";
  const obj3 = { get };
  const proxy = new Proxy(arg0, obj3);
  return proxy;
};
