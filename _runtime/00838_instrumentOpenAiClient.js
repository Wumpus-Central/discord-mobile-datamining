// === Module 838: instrumentOpenAiClient ===

// Module 838 (instrumentOpenAiClient)
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 715 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 834 */;
import _mod836 from "module_836" /* 836 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _require, attributes, c6, c7, closure_4, message, stream;

function extractRequestAttributes(model, arr) {
  const obj = { [closure_1_0(closure_1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "openai" };
  const GEN_AI_OPERATION_NAME_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_OPERATION_NAME_ATTRIBUTE;
  const obj2 = require("extractRequestParameters");
  obj[GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj2.getOperationName(arr);
  obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.openai";
  if (model.length > 0) {
    if (typeof model[0] === "object") {
      if (null !== model[0]) {
        const first = model[0];
        const _Array = Array;
        const items = [];
        const tmp6 = Array.isArray(first.tools) ? first.tools : [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp6, 0);
        if (first.web_search_options) {
          let items2;
          if (typeof first.web_search_options === "object") {
            const obj3 = { type: "web_search_options" };
            const merged = Object.assign(first.web_search_options);
            const items1 = [obj3];
            items2 = items1;
          }
          HermesBuiltin.arraySpread(items, items2, arraySpreadResult);
          let json;
          if (items.length > 0) {
            const _JSON = JSON;
            json = JSON.stringify(items);
          }
          if (json) {
            obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = json;
          }
          const _Object = Object;
          const tmp2Result = require("extractRequestParameters");
          assign(obj, tmp2Result.extractRequestParameters(first));
        }
        items2 = [];
      }
      return obj;
    }
  }
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
}
function addRequestAttributes(setAttribute, input) {
  if ("input" in input) {
    input = input.input;
  } else if ("messages" in input) {
    input = input.messages;
  }
  if (input) {
    if (0 !== length) {
      const obj = _mod836;
      const truncatedJsonString = obj.getTruncatedJsonString(input);
      const attr = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, truncatedJsonString);
      if (length) {
        const attr1 = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length);
      }
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentOpenAiClient = function instrumentOpenAiClient(arg0, arg1) {
  let c0;
  let obj2;
  function get(self, arg1) {
    let instrumentedMethod;
    let obj = self[arg1];
    obj2 = require("extractRequestParameters");
    const methodPath = obj2.buildMethodPath(c0, String(arg1));
    if (typeof obj === "function") {
      const tmpResult = require("extractRequestParameters");
      if (tmpResult.shouldInstrument(methodPath)) {
        let closure_2 = self;
        let closure_3 = obj2;
        let closure_0 = _asyncToGenerator(async () => {
          closure_0 = [...arguments];
          let c3 = 0;
          let c4 = 0;
          const iter = (async (arg0) => {
            let obj3;
            let obj5;
            let value;
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let str;
                let operationName;
                c4 = 2;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    let obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_2 = tmp4;
                    attributes = undefined;
                    str = undefined;
                    operationName = undefined;
                    stream = undefined;
                    c3 = 1;
                    c4 = 1;
                    return { value: "Reflect", done: true };
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  let obj6 = { value, done: true };
                  return obj6;
                } else {
                  attributes = closure_2_3(closure_0, attributes);
                  str = attributes[closure_0(undefined, closure_2_1[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
                  let obj = closure_0(closure_2_1[2]);
                  let tmp9 = attributes;
                  operationName = obj.getOperationName(attributes);
                  stream = closure_0[0];
                  const tmp11 = stream;
                  if (tmp11) {
                    let tmp13 = stream;
                    if (typeof stream === "object") {
                      let startSpanManualResult;
                      if (true === stream.stream) {
                        const tmp27 = attributes;
                        const tmp31 = closure_0(closure_2_1[5]);
                        let obj7 = { name: "" + operationName + " " + str + " stream-response", op: obj5.getSpanOperation(attributes), attributes };
                        const _HermesInternal2 = HermesInternal;
                        const startSpanManual = tmp31.startSpanManual;
                        obj5 = closure_0(closure_2_1[2]);
                        startSpanManualResult = startSpanManual(obj7, (() => {
                          let _function;
                          closure_0 = closure_2(function*(arg0) {
                            let obj8;
                            let obj9;
                            closure_0 = arg0;
                            if (c7 === 2) {
                              c7 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp3 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                obj2 = { value, done: true };
                                return obj2;
                              } else {
                                return { value: "IconComponent", done: null };
                              }
                            } else {
                              let c5;
                              try {
                                let closure_1;
                                c7 = 2;
                                if (0 === c6) {
                                  if (arg0 === 1) {
                                    c7 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c7 = 3;
                                    const obj3 = { value, done: true };
                                    return obj3;
                                  } else {
                                    let closure_3 = tmp;
                                    closure_2 = tmp4;
                                    closure_1 = undefined;
                                    c5 = 1;
                                    const recordInputs = closure_2_3.recordInputs && closure_4;
                                    if (recordInputs) {
                                      stream(closure_0, closure_4);
                                    }
                                    c6 = 2;
                                    c7 = 1;
                                    const obj5 = { value: closure_0.apply(closure_2_2, closure_0), done: false };
                                    return obj5;
                                  }
                                } else if (1 === c6) {
                                  c5 = 0;
                                  closure_2 = closure_4;
                                  const obj6 = { code: closure_3_0(attributes[7]).SPAN_STATUS_ERROR, message: "internal_error" };
                                  const setStatus = closure_0.setStatus;
                                  setStatus(obj6);
                                  const obj7 = { mechanism: obj8 };
                                  obj8 = { handled: false, type: "auto.ai.openai.stream", data: obj9 };
                                  obj9 = { function: _function };
                                  const obj4 = closure_3_0(attributes[8]);
                                  obj4.captureException(closure_2, obj7);
                                  closure_0.end();
                                  throw closure_2;
                                } else if (arg0 === 1) {
                                  c7 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c5 = 0;
                                  c7 = 3;
                                  const obj10 = { value, done: true };
                                  return obj10;
                                } else {
                                  closure_1 = value;
                                  const recordOutputs = closure_2_3.recordOutputs;
                                  let c1 = recordOutputs;
                                  const instrumentStream = closure_3_0(attributes[6]).instrumentStream;
                                  const tmp10 = closure_1;
                                  const tmp9 = closure_3_0(attributes[6]);
                                  if (recordOutputs == null) {
                                    c1 = false;
                                  }
                                  c5 = 0;
                                  c7 = 3;
                                  const obj = { value: instrumentStream(tmp10, closure_0, c1), done: true };
                                  return obj;
                                }
                              } catch (tmp36) {
                                closure_4 = tmp36;
                                if (0 === c5) {
                                  c7 = 3;
                                  throw tmp36;
                                } else {
                                  c6 = 1;
                                }
                              }
                            }
                          });
                          return function(arg0) {
                            return closure_0(...arguments);
                          };
                        })());
                      }
                      c4 = 3;
                      let obj8 = { value: startSpanManualResult, done: true };
                      return obj8;
                    }
                  }
                  let obj9 = { name: "" + operationName + " " + str, op: obj3.getSpanOperation(attributes), attributes };
                  const _HermesInternal = HermesInternal;
                  const startSpan = closure_0(closure_2_1[5]).startSpan;
                  closure_0(closure_2_1[5]);
                  obj3 = closure_0(closure_2_1[2]);
                  startSpanManualResult = startSpan(obj9, (() => {
                    let _function;
                    closure_0 = closure_2(function*(arg0) {
                      let obj7;
                      let obj8;
                      let tmp;
                      let value;
                      function addResponseAttributes(setAttributes, choices, recordOutputs) {
                        const tmp = choices;
                        if (tmp) {
                          if (typeof choices === "object") {
                            const obj6 = closure_1_0(closure_1_1[2]);
                            const result = obj6.isChatCompletionResponse(choices);
                            const obj7 = closure_1_0(closure_1_1[2]);
                            if (result) {
                              const result1 = obj7.addChatCompletionAttributes(setAttributes, choices, recordOutputs);
                              if (recordOutputs) {
                                choices = choices.choices;
                                let length;
                                if (choices != null) {
                                  length = choices.length;
                                }
                                if (length) {
                                  const choices1 = choices.choices;
                                  const obj = {};
                                  const mapped = choices1.map((message) => {
                                    message = message.message;
                                    let str;
                                    if (message != null) {
                                      str = message.content;
                                    }
                                    if (!str) {
                                      str = "";
                                    }
                                    return str;
                                  });
                                  setAttributes = setAttributes.setAttributes;
                                  const _JSON = JSON;
                                  obj[closure_1_0(closure_1_1[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = JSON.stringify(mapped);
                                  setAttributes(obj);
                                }
                              }
                            } else {
                              const result2 = obj7.isResponsesApiResponse(choices);
                              const tmp17Result = closure_1_0(closure_1_1[2]);
                              if (result2) {
                                const result3 = tmp17Result.addResponsesApiAttributes(setAttributes, choices, recordOutputs);
                                const tmp7 = recordOutputs && choices.output_text;
                                if (tmp7) {
                                  obj2 = {};
                                  obj2[closure_1_0(closure_1_1[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = choices.output_text;
                                  setAttributes.setAttributes(obj2);
                                }
                              } else {
                                const isEmbeddingsResponseResult = tmp17Result.isEmbeddingsResponse(choices);
                                const tmp17Result3 = closure_1_0(closure_1_1[2]);
                                if (isEmbeddingsResponseResult) {
                                  const result4 = tmp17Result3.addEmbeddingsAttributes(setAttributes, choices);
                                } else if (tmp17Result3.isConversationResponse(choices)) {
                                  const tmp17Result4 = closure_1_0(closure_1_1[2]);
                                  const result5 = tmp17Result4.addConversationAttributes(setAttributes, choices);
                                }
                              }
                            }
                          }
                        }
                      }
                      closure_0 = arg0;
                      if (c6 === 2) {
                        c6 = 3;
                        let str = "Generator functions may not be called on executing generators";
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "IconComponent", done: null };
                        }
                      } else {
                        let c4;
                        try {
                          c6 = 2;
                          if (0 === c5) {
                            if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c6 = 3;
                              const obj4 = { value, done: true };
                              return obj4;
                            } else {
                              closure_2 = tmp;
                              value = undefined;
                              c4 = 1;
                              const recordInputs = closure_2_3.recordInputs && c4;
                              if (recordInputs) {
                                stream(closure_0, c4);
                              }
                              c5 = 2;
                              c6 = 1;
                              const obj5 = { value: closure_0.apply(closure_2_2, closure_0), done: false };
                              return obj5;
                            }
                          } else if (1 === c5) {
                            c4 = 0;
                            closure_2 = closure_3;
                            let obj6 = { mechanism: obj7 };
                            obj7 = { handled: false, type: "auto.ai.openai", data: obj8 };
                            obj8 = { function: _function };
                            const obj3 = closure_3_0(attributes[8]);
                            obj3.captureException(closure_2, obj6);
                            throw closure_2;
                          } else if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c6 = 3;
                            const obj9 = { value, done: true };
                            return obj9;
                          } else {
                            const tmp10 = addResponseAttributes(closure_0, value, closure_2_3.recordOutputs);
                            c4 = 0;
                            c6 = 3;
                            let obj = { value, done: true };
                            return obj;
                          }
                        } catch (tmp27) {
                          closure_3 = tmp27;
                          if (0 === c4) {
                            c6 = 3;
                            throw tmp27;
                          } else {
                            c5 = 1;
                          }
                        }
                      }
                    });
                    return function(arg0) {
                      return closure_0(...arguments);
                    };
                  })());
                }
              } catch (tmp40) {
                c4 = 3;
                throw tmp40;
              }
            }
          })();
          iter.next();
          return iter;
        });
        instrumentedMethod = function instrumentedMethod() {
          return closure_0(...arguments);
        };
      }
      return instrumentedMethod;
    }
    if (typeof obj === "function") {
      instrumentedMethod = obj.bind(self);
    } else {
      instrumentedMethod = obj;
      if (instrumentedMethod) {
        instrumentedMethod = obj;
        if (typeof obj === "object") {
          let str = methodPath;
          const tmp8 = obj2;
          if (methodPath === undefined) {
            str = "";
          }
          let closure_1 = tmp8;
          const _Proxy = Proxy;
          let obj3 = { get };
          self = this;
          const self2 = this;
          const tmp4 = obj;
          instrumentedMethod = new Proxy(obj, obj3);
        }
      }
    }
  }
  const _Boolean = Boolean;
  let obj = require("module_724");
  const client = obj.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const _BooleanResult = _Boolean(sendDefaultPii);
  obj2 = { recordInputs: _BooleanResult, recordOutputs: _BooleanResult };
  const merged = Object.assign(arg1);
  _require = "";
  let obj3 = { get };
  const proxy = new Proxy(arg0, obj3);
  return proxy;
};