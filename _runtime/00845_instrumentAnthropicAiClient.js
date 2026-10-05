// _runtime/00845_instrumentAnthropicAiClient.js
import SPAN_STATUS_ERROR from "00716_SPAN_STATUS_ERROR.js";
import _mod745 from "metro/00745__.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE3 from "00834_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

const require = globalThis.__r;
let _require, attributes, c6, c7;

function addPrivateRequestAttributes(setAttributes, prompt) {
  const obj = require("messagesFromParams");
  const messagesFromParamsResult = obj.messagesFromParams(prompt);
  const obj2 = require("messagesFromParams");
  obj2.setMessagesAttribute(setAttributes, messagesFromParamsResult);
  if ("prompt" in prompt) {
    const obj3 = {};
    setAttributes = setAttributes.setAttributes;
    const _JSON = JSON;
    obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE3.GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(prompt.prompt);
    setAttributes(obj3);
  }
}
function handleStreamingError(error, isRecording, _function) {
  let obj3;
  let obj4;
  const obj2 = { mechanism: obj3 };
  obj3 = { handled: false, type: "auto.ai.anthropic", data: obj4 };
  obj4 = { function: _function };
  const obj = _mod745;
  obj.captureException(error, obj2);
  if (isRecording.isRecording()) {
    const setStatus = isRecording.setStatus;
    const obj5 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj5);
    isRecording.end();
  }
  throw error;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentAnthropicAiClient = function instrumentAnthropicAiClient(arg0, arg1) {
  let c0;
  let obj2;
  function get(self, arg1) {
    let proxy;
    let obj = self[arg1];
    obj2 = require("metro/00836__.js");
    const methodPath = obj2.buildMethodPath(c0, String(arg1));
    if (typeof obj === "function") {
      const tmpResult = require("messagesFromParams");
      if (tmpResult.shouldInstrument(methodPath)) {
        let tmp7 = obj2;
        let closure_2 = self;
        let closure_3 = obj2;
        const _Proxy2 = Proxy;
        let obj3 = {
          apply(arg0, arg1, arr) {
            let str;
            let tmp2Result7;
            let tmp2Result8;
            let closure_0 = arg0;
            let closure_1 = arr;
            let tmp = closure_1;
            attributes = { [closure_1_0(closure_1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic" };
            const GEN_AI_OPERATION_NAME_ATTRIBUTE = attributes(methodPath[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE;
            obj2 = attributes(methodPath[2]);
            attributes[GEN_AI_OPERATION_NAME_ATTRIBUTE] = obj2.getFinalOperationName(closure_1);
            attributes[attributes(methodPath[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.anthropic";
            if (arr.length > 0) {
              if (typeof arr[0] === "object") {
                let startSpanResult;
                if (null !== arr[0]) {
                  const first = arr[0];
                  let tools = first.tools;
                  if (tools) {
                    let _Array = Array;
                    tools = Array.isArray(first.tools);
                  }
                  if (tools) {
                    let _JSON = JSON;
                    attributes[attributes(methodPath[1]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(
                      first.tools,
                    );
                  }
                  let str3 = first.model;
                  const GEN_AI_REQUEST_MODEL_ATTRIBUTE2 = tmp2(methodPath[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                  if (str3 == null) {
                    str3 = "unknown";
                  }
                  attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE2] = str3;
                  if ("temperature" in first) {
                    attributes[attributes(methodPath[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
                  }
                  if ("top_p" in first) {
                    attributes[attributes(methodPath[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
                  }
                  if ("stream" in first) {
                    attributes[attributes(methodPath[1]).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
                  }
                  if ("top_k" in first) {
                    attributes[attributes(methodPath[1]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = first.top_k;
                  }
                  if ("frequency_penalty" in first) {
                    attributes[attributes(methodPath[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] =
                      first.frequency_penalty;
                  }
                  if ("max_tokens" in first) {
                    attributes[attributes(methodPath[1]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = first.max_tokens;
                  }
                }
                let str10 = attributes[tmp2(undefined, methodPath[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                let tmp7 = null;
                if (str10 == null) {
                  str10 = "unknown";
                }
                const tmp2Result = attributes(methodPath[2]);
                const finalOperationName = tmp2Result.getFinalOperationName(tmp);
                let first1;
                if (typeof arr[0] === "object") {
                  first1 = arr[0];
                }
                let tmp10 = globalThis;
                let stream;
                const _Boolean = Boolean;
                if (first1 != null) {
                  stream = first1.stream;
                }
                const _BooleanResult = _Boolean(stream);
                const tmp13 = "messages.stream" === tmp;
                if (!_BooleanResult) {
                  if (!tmp13) {
                    let obj3 = {
                      name: "" + finalOperationName + " " + str10,
                      op: tmp2Result7.getSpanOperation(tmp),
                      attributes,
                    };
                    const _HermesInternal = HermesInternal;
                    const startSpan = tmp2(methodPath[7]).startSpan;
                    attributes(methodPath[7]);
                    tmp2Result7 = attributes(methodPath[2]);
                    startSpanResult = startSpan(obj3, (setAttributes) => {
                      let _function;
                      let obj;
                      let tmp = recordInputs.recordInputs && first1;
                      if (tmp) {
                        let tmp3 = obj;
                        obj = obj(methodPath[4]);
                        const messagesFromParamsResult = obj.messagesFromParams(first1);
                        obj2 = obj(methodPath[4]);
                        obj2.setMessagesAttribute(setAttributes, messagesFromParamsResult);
                        const str = "prompt";
                        if ("prompt" in first1) {
                          let obj3 = {};
                          setAttributes = setAttributes.setAttributes;
                          let tmp7 = globalThis;
                          let _JSON = JSON;
                          obj3[tmp3(methodPath[1]).GEN_AI_PROMPT_ATTRIBUTE] = JSON.stringify(first1.prompt);
                          const setAttributesResult = setAttributes(obj3);
                        }
                      }
                      let obj4 = obj(methodPath[9]);
                      return obj4.handleCallbackErrors(
                        () => setAttributes.apply(first1, _function),
                        (arg0) => {
                          let obj3;
                          let obj4;
                          obj2 = { mechanism: obj3 };
                          obj3 = { handled: false, type: "auto.ai.anthropic", data: obj4 };
                          obj4 = { function: _function };
                          const obj = setAttributes(_function[5]);
                          obj.captureException(arg0, obj2);
                        },
                        () => {},
                        function (type) {
                          function addContentAttributes(setAttributes, content) {
                            if ("content" in content) {
                              const _Array = Array;
                              if (Array.isArray(content.content)) {
                                const obj = {};
                                setAttributes = setAttributes.setAttributes;
                                const content1 = content.content;
                                const GEN_AI_RESPONSE_TEXT_ATTRIBUTE = closure_1_0(
                                  _function[1],
                                ).GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                                const mapped = content1.map((text) => text.text);
                                const found = mapped.filter((item) => item);
                                obj[GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = found.join("");
                                setAttributes(obj);
                                const items = [];
                                content = content.content;
                                const iter = content[Symbol.iterator]();
                                const nextResult = iter.next();
                                while (iter !== undefined) {
                                  let tmp9 = nextResult;
                                  let tmp10 = "tool_use" !== nextResult.type;
                                  if (tmp10) {
                                    tmp10 = "server_tool_use" !== tmp9.type;
                                  }
                                  if (!tmp10) {
                                    arr = items.push(tmp9);
                                  }
                                  continue;
                                }
                                if (items.length > 0) {
                                  obj2 = {};
                                  const setAttributes2 = setAttributes.setAttributes;
                                  const _JSON = JSON;
                                  obj2[closure_1_0(_function[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                                    JSON.stringify(items);
                                  setAttributes2(obj2);
                                }
                              }
                            }
                            if ("completion" in content) {
                              const obj3 = {};
                              obj3[closure_1_0(_function[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = content.completion;
                              setAttributes.setAttributes(obj3);
                            }
                            if ("input_tokens" in content) {
                              const obj4 = {};
                              const setAttributes3 = setAttributes.setAttributes;
                              const _JSON2 = JSON;
                              obj4[closure_1_0(_function[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = JSON.stringify(
                                content.input_tokens,
                              );
                              setAttributes3(obj4);
                            }
                          }
                          let tmp = type;
                          recordOutputs = recordOutputs.recordOutputs;
                          if (type) {
                            tmp = typeof type === "object";
                          }
                          if (tmp) {
                            if ("type" in type) {
                              if ("error" === type.type) {
                                const obj8 = closure_4_0(closure_4_1[4]);
                                obj8.handleResponseError(setAttributes, type);
                              }
                            }
                            if (recordOutputs) {
                              addContentAttributes(setAttributes, type);
                            }
                            const tmp3 = "id" in type && "model" in type;
                            if (tmp3) {
                              let obj3 = {};
                              ({
                                id: obj2[closure_4_0(undefined, closure_4_1[1]).GEN_AI_RESPONSE_ID_ATTRIBUTE],
                                model: obj2[closure_4_0(undefined, closure_4_1[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE],
                              } = type);
                              setAttributes.setAttributes(obj3);
                              const tmp7 = "created" in type && typeof type.created === "number";
                              if (tmp7) {
                                let obj4 = {};
                                setAttributes = setAttributes.setAttributes;
                                const _Date = Date;
                                const self = this;
                                const self2 = this;
                                const ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE = closure_4_0(
                                  closure_4_1[1],
                                ).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
                                const date = new Date(1000 * type.created);
                                let tmp9 = date;
                                obj4[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
                                setAttributes(obj4);
                              }
                              let tmp11 = "created_at" in type && typeof type.created_at === "number";
                              if (tmp11) {
                                const obj5 = {};
                                let setAttributes2 = setAttributes.setAttributes;
                                let tmp12 = globalThis;
                                const _Date2 = Date;
                                const self3 = this;
                                const self4 = this;
                                const ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE2 = closure_4_0(
                                  closure_4_1[1],
                                ).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
                                const date1 = new Date(1000 * type.created_at);
                                obj5[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE2] = date1.toISOString();
                                setAttributes2(obj5);
                              }
                              const tmp15 = "usage" in type && type.usage;
                              if (tmp15) {
                                const tmp4Result = closure_4_0(closure_4_1[2]);
                                const result = tmp4Result.setTokenUsageAttributes(
                                  setAttributes,
                                  type.usage.input_tokens,
                                  type.usage.output_tokens,
                                  type.usage.cache_creation_input_tokens,
                                  type.usage.cache_read_input_tokens,
                                );
                              }
                            }
                          }
                        },
                      );
                    });
                  }
                  return startSpanResult;
                }
                closure_1 = arg0;
                closure_2 = first1;
                let recordInputs = arr;
                let closure_4 = tmp;
                let closure_6 = recordInputs;
                let str14 = attributes[tmp2(undefined, methodPath[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                if (str14 == null) {
                  str14 = "unknown";
                }
                let obj4 = {
                  name: "" + finalOperationName + " " + str14 + " stream-response",
                  op: tmp2Result8.getSpanOperation(tmp),
                  attributes,
                };
                const _HermesInternal2 = HermesInternal;
                tmp2Result8 = attributes(methodPath[2]);
                if (_BooleanResult) {
                  let startSpanManualResult;
                  if (!tmp13) {
                    const startSpanManual = tmp2(methodPath[7]).startSpanManual;
                    attributes(methodPath[7]);
                    closure_0 = closure_2(function* (arg0) {
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
                          let c1;
                          c7 = 2;
                          let tmp4 = c6;
                          if (0 !== c6) {
                            if (1 === tmp4) {
                              c5 = 0;
                              tmp4 = closure_2_4(closure_4, closure_0, closure_4);
                            } else if (arg0 === 1) {
                              c7 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c5 = 0;
                              c7 = 3;
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              const recordOutputs = c6.recordOutputs;
                              c1 = recordOutputs;
                              const instrumentAsyncIterableStream = closure_0(arr[8]).instrumentAsyncIterableStream;
                              const tmp10 = c1;
                              const tmp9 = closure_0(arr[8]);
                              if (recordOutputs == null) {
                                c1 = false;
                              }
                              c5 = 0;
                              c7 = 3;
                              const obj = { value: instrumentAsyncIterableStream(tmp10, closure_0, c1), done: true };
                              return obj;
                            }
                          }
                          if (arg0 === 1) {
                            c7 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c7 = 3;
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            closure_3 = tmp;
                            closure_2 = tmp4;
                            c1 = undefined;
                            c5 = 1;
                            recordInputs = c6.recordInputs && c5;
                            if (recordInputs) {
                              recordInputs(closure_0, c5);
                            }
                            c6 = 2;
                            c7 = 1;
                            const obj5 = { value: closure_0.apply(closure_2, closure_3), done: false };
                            return obj5;
                          }
                        } catch (tmp29) {
                          closure_4 = tmp29;
                          if (0 === c5) {
                            c7 = 3;
                            throw tmp29;
                          } else {
                            c6 = 1;
                          }
                        }
                      }
                    });
                    startSpanManualResult = startSpanManual(obj4, function (arg0) {
                      return closure_0(...arguments);
                    });
                  }
                  startSpanResult = startSpanManualResult;
                }
                const tmp2Result10 = attributes(methodPath[7]);
                startSpanManualResult = tmp2Result10.startSpanManual(obj4, (arg0) => {
                  try {
                    recordInputs = recordInputs.recordInputs;
                    if (recordInputs) {
                      recordInputs = first1;
                    }
                    if (recordInputs) {
                      closure_3(arg0, first1);
                    }
                    let flag = tmp.recordOutputs;
                    const applyResult = closure_1.apply(closure_2, closure_3);
                    const instrumentMessageStream = closure_0(closure_1[8]).instrumentMessageStream;
                    closure_0(closure_1[8]);
                    if (flag == null) {
                      flag = false;
                    }
                    return instrumentMessageStream(applyResult, arg0, flag);
                  } catch (tmp13) {
                    closure_2_4(tmp13, arg0, closure_4);
                  }
                });
              }
            }
            const GEN_AI_REQUEST_MODEL_ATTRIBUTE = tmp2(methodPath[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
            if ("models.retrieve" === tmp) {
              str = arr[0];
            } else {
              str = "unknown";
              const str2 = "models.get";
            }
            attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
          },
        };
        let self3 = this;
        let self4 = this;
        let tmp9 = obj3;
        proxy = new Proxy(obj, obj3);
      }
      return proxy;
    }
    if (typeof obj === "function") {
      proxy = obj.bind(self);
    } else {
      proxy = obj;
      if (proxy) {
        proxy = obj;
        if (typeof obj === "object") {
          let str = methodPath;
          let tmp10 = obj2;
          if (methodPath === undefined) {
            str = "";
          }
          let closure_1 = tmp10;
          const _Proxy = Proxy;
          let obj4 = { get };
          self = this;
          let self2 = this;
          proxy = new Proxy(obj, obj4);
        }
      }
    }
  }
  let _Boolean = Boolean;
  let obj = require("metro/00724__.js");
  const client = obj.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  let _BooleanResult = _Boolean(sendDefaultPii);
  obj2 = { recordInputs: _BooleanResult, recordOutputs: _BooleanResult };
  const merged = Object.assign(arg1);
  _require = "";
  let obj3 = { get };
  let proxy = new Proxy(arg0, obj3);
  return proxy;
};
