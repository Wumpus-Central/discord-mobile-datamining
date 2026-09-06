// _runtime/00830_AsyncFromSyncIterator.js
import SPAN_STATUS_ERROR from "00705_SPAN_STATUS_ERROR.js";
import captureCheckIn from "00734_captureCheckIn.js";
import INSTRUMENTED_METHODS from "00829_INSTRUMENTED_METHODS.js";
import _awaitAsyncGenerator from "00831__awaitAsyncGenerator.js";
import AsyncGenerator from "00833_AsyncGenerator.js";

function AsyncFromSyncIterator(arg0) {
  class AsyncFromSyncIterator {
    constructor(arg0) {
      return;
    }
  }
  AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next() {
      const n = this.n;
      const apply = n.apply;
      const s = this.s;
      if (typeof apply === "unknown") {
        let iter = HermesBuiltin.applyArguments(s);
      } else {
        iter = apply(s, arguments);
      }
      if (Object(iter) !== iter) {
        const _TypeError = TypeError;
        const typeError = new TypeError(iter + " is not an object.");
        let rejectResult = Promise.reject(typeError);
      } else {
        const done = iter.done;
        const resolved = Promise.resolve(iter.value);
        rejectResult = resolved.then((value) => ({ value, done }));
      }
      return rejectResult;
    },
    return(value) {
      const _return = this.s.return;
      if (undefined === _return) {
        const obj = { value, done: true };
        let resolved = Promise.resolve(obj);
      } else {
        const apply = _return.apply;
        const s = tmp.s;
        if (typeof apply === "unknown") {
          let iter = HermesBuiltin.applyArguments(s);
        } else {
          iter = apply(s, arguments);
        }
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const typeError = new TypeError(iter + " is not an object.");
          resolved = Promise.reject(typeError);
        } else {
          const done = iter.done;
          const resolved1 = Promise.resolve(iter.value);
          resolved = resolved1.then((value) => ({ value, done }));
        }
      }
      return resolved;
    },
    throw(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        let rejectResult = Promise.reject(arg0);
      } else {
        const apply = _return.apply;
        const s = tmp.s;
        if (typeof apply === "unknown") {
          let iter = HermesBuiltin.applyArguments(s);
        } else {
          iter = apply(s, arguments);
        }
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const typeError = new TypeError(iter + " is not an object.");
          rejectResult = Promise.reject(typeError);
        } else {
          const done = iter.done;
          const resolved = Promise.resolve(iter.value);
          rejectResult = resolved.then((value) => ({ value, done }));
        }
      }
      return rejectResult;
    },
  };
  return new AsyncFromSyncIterator(arg0);
}
function processChatCompletionToolCalls(tool_calls, chatCompletionToolCalls) {
  const iter = tool_calls[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let index = nextResult.index;
    let tmp3 = index;
    if (undefined !== index) {
      if (tmp2.function) {
        chatCompletionToolCalls = chatCompletionToolCalls.chatCompletionToolCalls;
        if (tmp3 in chatCompletionToolCalls.chatCompletionToolCalls) {
          let tmp10 = chatCompletionToolCalls[tmp3];
          let _arguments = tmp2.function.arguments;
          if (_arguments) {
            let _function;
            if (tmp10 != null) {
              _function = tmp10.function;
            }
            _arguments = _function;
          }
          if (_arguments) {
            _function = tmp10.function;
            _function.arguments = _function.arguments + tmp2.function.arguments;
          }
        } else {
          let obj = {};
          let merged = Object.assign(nextResult);
          obj = { name: tmp2.function.name, arguments: tmp2.function.arguments || "" };
          obj.function = obj;
          chatCompletionToolCalls[tmp3] = obj;
        }
      }
    }
    continue;
  }
}
function processChatCompletionChunk(id, responseId, arg2) {
  responseId = id.id;
  if (responseId == null) {
    responseId = responseId.responseId;
  }
  responseId.responseId = responseId;
  let responseModel = id.model;
  if (responseModel == null) {
    responseModel = responseId.responseModel;
  }
  responseId.responseModel = responseModel;
  let responseTimestamp = id.created;
  if (responseTimestamp == null) {
    responseTimestamp = responseId.responseTimestamp;
  }
  responseId.responseTimestamp = responseTimestamp;
  if (id.usage) {
    responseId.promptTokens = id.usage.prompt_tokens;
    responseId.completionTokens = id.usage.completion_tokens;
    responseId.totalTokens = id.usage.total_tokens;
  }
  let choices = id.choices;
  if (choices == null) {
    choices = [];
  }
  for (const item10020 of choices) {
    let tmp = item10020;
    if (arg2) {
      let delta = tmp.delta;
      let content;
      if (delta != null) {
        content = delta.content;
      }
      if (content) {
        let responseTexts = arg1.responseTexts;
        let arr = responseTexts.push(tmp.delta.content);
      }
      let delta2 = tmp.delta;
      let tool_calls;
      if (delta2 != null) {
        tool_calls = delta2.tool_calls;
      }
      if (tool_calls) {
        let tmp10 = processChatCompletionToolCalls(tmp.delta.tool_calls, arg1);
      }
    }
    if (tmp.finish_reason) {
      let finishReasons = arg1.finishReasons;
      arr = finishReasons.push(tmp.finish_reason);
    }
    continue;
  }
}
function processResponsesApiEvent(type, responsesApiToolCalls, arg2, setStatus) {
  if (type) {
    if (typeof type === "object") {
      const _Error = Error;
      if (type instanceof Error) {
        let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        setStatus.setStatus(obj);
        obj = { mechanism: { handled: false, type: "auto.ai.openai.stream-response" } };
        captureCheckIn.captureException(type, obj);
      } else if ("type" in type) {
        const RESPONSE_EVENT_TYPES = INSTRUMENTED_METHODS.RESPONSE_EVENT_TYPES;
        if (RESPONSE_EVENT_TYPES.includes(type.type)) {
          let output_text = arg2;
          if (arg2) {
            let tmp6 = "response.output_item.done" === type.type;
            if (tmp6) {
              tmp6 = "item" in type;
            }
            if (tmp6) {
              const prop = responsesApiToolCalls.responsesApiToolCalls;
              prop.push(type.item);
            }
            if ("response.output_text.delta" === type.type) {
              if ("delta" in type) {
                if (type.delta) {
                  const responseTexts = responsesApiToolCalls.responseTexts;
                  responseTexts.push(type.delta);
                }
              }
            }
          }
          if ("response" in type) {
            const response = type.response;
            let responseId = response.id;
            if (responseId == null) {
              responseId = responsesApiToolCalls.responseId;
            }
            responsesApiToolCalls.responseId = responseId;
            let responseModel = response.model;
            if (responseModel == null) {
              responseModel = responsesApiToolCalls.responseModel;
            }
            responsesApiToolCalls.responseModel = responseModel;
            let responseTimestamp = response.created_at;
            if (responseTimestamp == null) {
              responseTimestamp = responsesApiToolCalls.responseTimestamp;
            }
            responsesApiToolCalls.responseTimestamp = responseTimestamp;
            if (response.usage) {
              responsesApiToolCalls.promptTokens = response.usage.input_tokens;
              responsesApiToolCalls.completionTokens = response.usage.output_tokens;
              responsesApiToolCalls.totalTokens = response.usage.total_tokens;
            }
            if (response.status) {
              const finishReasons = responsesApiToolCalls.finishReasons;
              finishReasons.push(response.status);
            }
            if (output_text) {
              output_text = response.output_text;
            }
            if (output_text) {
              const responseTexts1 = responsesApiToolCalls.responseTexts;
              responseTexts1.push(response.output_text);
            }
          }
        } else {
          const eventTypes = responsesApiToolCalls.eventTypes;
          eventTypes.push(type.type);
        }
      }
    }
  }
  const eventTypes1 = responsesApiToolCalls.eventTypes;
  eventTypes1.push("unknown:non-object");
}
let closure_8 = async function _instrumentStream(arg0, value) {
  if (c22 === 2) {
    c22 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp14 === 3) {
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
      c22 = 2;
      switch (c21) {
        case 0:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c22 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_17 = tmp4;
            closure_18 = tmp15;
            closure_146_0 = closure_1;
            closure_146_1 = closure_2;
            closure_146_3 = undefined;
            closure_146_6 = undefined;
            closure_146_7 = undefined;
            let value4;
            closure_146_9 = undefined;
            let obj1 = {
              eventTypes: [],
              responseTexts: [],
              finishReasons: [],
              responseId: "",
              responseModel: "",
              responseTimestamp: 0,
              promptTokens: "r",
              completionTokens: "WireType",
              totalTokens: "isArray",
              chatCompletionToolCalls: {},
              responsesApiToolCalls: [],
            };
            closure_146_2 = obj1;
            closure_146_4 = false;
            closure_146_5 = false;
            c19 = 4;
            const iter = (function _asyncIterator(arg0) {
              if (typeof Symbol !== "undefined") {
                const _Symbol = Symbol;
                let str2 = Symbol.asyncIterator;
                const _Symbol2 = Symbol;
                let str = Symbol.iterator;
              }
              let num = 1;
              while (true) {
                let tmp = num;
                if (str2) {
                  if (null != arg0[str2]) {
                    break;
                  }
                }
                if (str) {
                  let tmp5 = arg0[str];
                  if (null != tmp5) {
                    let call = tmp5.call;
                    let tmp10 = closure_1_4;
                    let tmp11 = typeof call === "unknown" ? tmp5() : call(arg0);
                    let tmp12 = new.target;
                    let tmp13 = new.target;
                    tmp10 = new tmp10(tmp11);
                    return tmp10;
                  }
                }
                num = num - 1;
                str = "@@iterator";
                str2 = "@@asyncIterator";
                if (tmp) {
                  continue;
                } else {
                  let _TypeError = TypeError;
                  let tmp6 = new.target;
                  let str3 = "Object is not async iterable";
                  let tmp7 = new.target;
                  let typeError = new TypeError("Object is not async iterable");
                  throw typeError;
                }
              }
              const call2 = tmp4.call;
              return typeof call2 === "unknown" ? tmp4() : call2(arg0);
            })(closure_0);
            closure_146_7 = iter;
            c21 = 5;
            c22 = 1;
            const obj2 = { value: _awaitAsyncGenerator(iter.next()), done: false };
            return obj2;
          }
          break;
        case 1:
          c19 = 0;
          const obj64 = closure_145_0(closure_145_1[5]);
          const result = obj64.setCommonResponseAttributes(
            closure_146_0,
            closure_146_2.responseId,
            closure_146_2.responseModel,
            closure_146_2.responseTimestamp,
          );
          const obj65 = closure_145_0(closure_145_1[5]);
          const result1 = obj65.setTokenUsageAttributes(
            closure_146_0,
            closure_146_2.promptTokens,
            closure_146_2.completionTokens,
            closure_146_2.totalTokens,
          );
          const obj3 = {};
          obj3[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
          closure_146_0.setAttributes(obj3);
          if (closure_146_2.finishReasons.length) {
            const obj4 = {};
            const _JSON17 = JSON;
            obj4[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
              closure_146_2.finishReasons,
            );
            closure_146_0.setAttributes(obj4);
          }
          let length9 = closure_146_1;
          if (closure_146_1) {
            length9 = closure_146_2.responseTexts.length;
          }
          if (length9) {
            const obj5 = {};
            const responseTexts9 = closure_146_2.responseTexts;
            obj5[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
            closure_146_0.setAttributes(obj5);
          }
          closure_12 = 0;
          const _Object9 = Object;
          const items = [];
          closure_12 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_12);
          closure_12 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_12);
          closure_146_9 = items;
          if (closure_146_9.length > 0) {
            const obj6 = {};
            const _JSON18 = JSON;
            obj6[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_146_9);
            closure_146_0.setAttributes(obj6);
          }
          closure_146_0.end();
          throw closure_20;
        case 2:
          closure_16 = closure_20;
          c19 = 3;
          let tmp573 = closure_146_4;
          if (closure_146_4) {
            tmp573 = null != closure_146_7.return;
          }
          if (!tmp573) {
            c19 = 1;
            if (closure_146_5) {
              throw closure_146_3;
            } else {
              throw closure_16;
            }
          } else {
            c21 = 16;
            c22 = 1;
            let obj7 = { value: closure_145_2(closure_146_7.return()), done: false };
            return obj7;
          }
          break;
        case 3:
          c19 = 1;
          if (closure_146_5) {
            throw closure_146_3;
          } else {
            throw tmp566;
          }
          break;
        case 4:
          c19 = 2;
          closure_146_5 = true;
          closure_146_3 = closure_20;
          c19 = 8;
          let tmp500 = closure_146_4;
          if (closure_146_4) {
            tmp500 = null != closure_146_7.return;
          }
          if (tmp500) {
            c21 = 15;
            c22 = 1;
            let obj8 = { value: closure_145_2(closure_146_7.return()), done: false };
            return obj8;
          } else {
            c19 = 1;
            if (closure_146_5) {
              throw closure_146_3;
            } else {
              c19 = 0;
              let obj55 = closure_145_0(closure_145_1[5]);
              const result2 = obj55.setCommonResponseAttributes(
                closure_146_0,
                closure_146_2.responseId,
                closure_146_2.responseModel,
                closure_146_2.responseTimestamp,
              );
              let obj56 = closure_145_0(closure_145_1[5]);
              const result3 = obj56.setTokenUsageAttributes(
                closure_146_0,
                closure_146_2.promptTokens,
                closure_146_2.completionTokens,
                closure_146_2.totalTokens,
              );
              const obj9 = {};
              obj9[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_146_0.setAttributes(obj9);
              if (closure_146_2.finishReasons.length) {
                const obj10 = {};
                const _JSON15 = JSON;
                obj10[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  closure_146_2.finishReasons,
                );
                closure_146_0.setAttributes(obj10);
              }
              let length8 = closure_146_1;
              if (closure_146_1) {
                length8 = closure_146_2.responseTexts.length;
              }
              if (length8) {
                const obj11 = {};
                const responseTexts8 = closure_146_2.responseTexts;
                obj11[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                closure_146_0.setAttributes(obj11);
              }
              closure_11 = 0;
              const _Object8 = Object;
              const items1 = [];
              closure_11 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_11);
              closure_11 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_11);
              closure_146_9 = items1;
              if (closure_146_9.length > 0) {
                const obj12 = {};
                const _JSON16 = JSON;
                obj12[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                  JSON.stringify(closure_146_9);
                closure_146_0.setAttributes(obj12);
              }
              closure_146_0.end();
              c22 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          break;
        case 5:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else {
            const value3 = value;
            if (arg0 === 2) {
              c19 = 5;
              let tmp430 = closure_146_4;
              if (closure_146_4) {
                tmp430 = null != closure_146_7.return;
              }
              if (tmp430) {
                c21 = 8;
                c22 = 1;
                const obj13 = { value: closure_145_2(closure_146_7.return()), done: false };
                return obj13;
              } else {
                c19 = 1;
                if (closure_146_5) {
                  throw closure_146_3;
                } else {
                  c19 = 0;
                  let obj47 = closure_145_0(closure_145_1[5]);
                  const result4 = obj47.setCommonResponseAttributes(
                    closure_146_0,
                    closure_146_2.responseId,
                    closure_146_2.responseModel,
                    closure_146_2.responseTimestamp,
                  );
                  let obj48 = closure_145_0(closure_145_1[5]);
                  const result5 = obj48.setTokenUsageAttributes(
                    closure_146_0,
                    closure_146_2.promptTokens,
                    closure_146_2.completionTokens,
                    closure_146_2.totalTokens,
                  );
                  const obj14 = {};
                  obj14[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_146_0.setAttributes(obj14);
                  if (closure_146_2.finishReasons.length) {
                    let obj15 = {};
                    const _JSON13 = JSON;
                    obj15[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      closure_146_2.finishReasons,
                    );
                    closure_146_0.setAttributes(obj15);
                  }
                  let length7 = closure_146_1;
                  if (closure_146_1) {
                    length7 = closure_146_2.responseTexts.length;
                  }
                  if (length7) {
                    let obj16 = {};
                    const responseTexts7 = closure_146_2.responseTexts;
                    obj16[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                    closure_146_0.setAttributes(obj16);
                  }
                  closure_4 = 0;
                  const _Object7 = Object;
                  const items2 = [];
                  closure_4 = HermesBuiltin.arraySpread(
                    Object.values(closure_146_2.chatCompletionToolCalls),
                    closure_4,
                  );
                  closure_4 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_4);
                  closure_146_9 = items2;
                  if (closure_146_9.length > 0) {
                    const obj17 = {};
                    const _JSON14 = JSON;
                    obj17[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(closure_146_9);
                    closure_146_0.setAttributes(obj17);
                  }
                  closure_146_0.end();
                  c22 = 3;
                  const obj18 = { value: value3, done: true };
                  return obj18;
                }
              }
            } else {
              closure_146_6 = value;
              const done2 = value.done;
              closure_146_4 = !done2;
              if (done2) {
                c19 = 2;
              } else {
                value4 = closure_146_6.value;
                let obj45 = closure_145_0(closure_145_1[5]);
                if (obj45.isChatCompletionChunk(value4)) {
                  closure_145_6(value4, closure_146_2, closure_146_1);
                } else {
                  let obj46 = closure_145_0(closure_145_1[5]);
                  if (obj46.isResponsesApiStreamEvent(value4)) {
                    closure_145_7(value4, closure_146_2, closure_146_1, closure_146_0);
                  }
                }
                c21 = 11;
                c22 = 1;
              }
            }
          }
          break;
        case 6:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else {
            value2 = value;
            if (arg0 === 2) {
              c19 = 6;
              let tmp337 = closure_146_4;
              if (closure_146_4) {
                tmp337 = null != closure_146_7.return;
              }
              if (tmp337) {
                c21 = 10;
                c22 = 1;
                const obj19 = { value: closure_145_2(closure_146_7.return()), done: false };
                return obj19;
              } else {
                c19 = 1;
                if (closure_146_5) {
                  throw closure_146_3;
                } else {
                  c19 = 0;
                  let obj37 = closure_145_0(closure_145_1[5]);
                  const result6 = obj37.setCommonResponseAttributes(
                    closure_146_0,
                    closure_146_2.responseId,
                    closure_146_2.responseModel,
                    closure_146_2.responseTimestamp,
                  );
                  let obj38 = closure_145_0(closure_145_1[5]);
                  const result7 = obj38.setTokenUsageAttributes(
                    closure_146_0,
                    closure_146_2.promptTokens,
                    closure_146_2.completionTokens,
                    closure_146_2.totalTokens,
                  );
                  const obj20 = {};
                  obj20[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_146_0.setAttributes(obj20);
                  if (closure_146_2.finishReasons.length) {
                    const obj21 = {};
                    const _JSON11 = JSON;
                    obj21[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      closure_146_2.finishReasons,
                    );
                    closure_146_0.setAttributes(obj21);
                  }
                  let length6 = closure_146_1;
                  if (closure_146_1) {
                    length6 = closure_146_2.responseTexts.length;
                  }
                  if (length6) {
                    const obj22 = {};
                    const responseTexts6 = closure_146_2.responseTexts;
                    obj22[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                    closure_146_0.setAttributes(obj22);
                  }
                  closure_6 = 0;
                  const _Object6 = Object;
                  const items3 = [];
                  closure_6 = HermesBuiltin.arraySpread(
                    Object.values(closure_146_2.chatCompletionToolCalls),
                    closure_6,
                  );
                  closure_6 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_6);
                  closure_146_9 = items3;
                  if (closure_146_9.length > 0) {
                    let obj23 = {};
                    const _JSON12 = JSON;
                    obj23[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(closure_146_9);
                    closure_146_0.setAttributes(obj23);
                  }
                  closure_146_0.end();
                  c22 = 3;
                  let obj24 = { value: value2, done: true };
                  return obj24;
                }
              }
            } else {
              closure_146_6 = value;
              const done = value.done;
              closure_146_4 = !done;
            }
          }
          break;
        case 7:
          c19 = 1;
          if (closure_146_5) {
            throw closure_146_3;
          } else {
            throw tmp331;
          }
          break;
        case 8:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c19 = 1;
            if (closure_146_5) {
              throw closure_146_3;
            } else {
              c19 = 0;
              let obj30 = closure_145_0(closure_145_1[5]);
              const result8 = obj30.setCommonResponseAttributes(
                closure_146_0,
                closure_146_2.responseId,
                closure_146_2.responseModel,
                closure_146_2.responseTimestamp,
              );
              let obj31 = closure_145_0(closure_145_1[5]);
              const result9 = obj31.setTokenUsageAttributes(
                closure_146_0,
                closure_146_2.promptTokens,
                closure_146_2.completionTokens,
                closure_146_2.totalTokens,
              );
              const obj25 = {};
              obj25[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_146_0.setAttributes(obj25);
              if (closure_146_2.finishReasons.length) {
                const obj26 = {};
                const _JSON9 = JSON;
                obj26[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  closure_146_2.finishReasons,
                );
                closure_146_0.setAttributes(obj26);
              }
              let length5 = closure_146_1;
              if (closure_146_1) {
                length5 = closure_146_2.responseTexts.length;
              }
              if (length5) {
                const obj27 = {};
                const responseTexts5 = closure_146_2.responseTexts;
                obj27[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                closure_146_0.setAttributes(obj27);
              }
              closure_3 = 0;
              const _Object5 = Object;
              const items4 = [];
              closure_3 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_3);
              closure_3 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_3);
              closure_146_9 = items4;
              if (closure_146_9.length > 0) {
                const obj28 = {};
                const _JSON10 = JSON;
                obj28[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                  JSON.stringify(closure_146_9);
                closure_146_0.setAttributes(obj28);
              }
              closure_146_0.end();
              c22 = 3;
              const obj29 = { value, done: true };
              return obj29;
            }
          }
          break;
        case 9:
          c19 = 1;
          if (closure_146_5) {
            throw closure_146_3;
          } else {
            throw tmp269;
          }
          break;
        case 10:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c19 = 1;
            if (closure_146_5) {
              throw closure_146_3;
            } else {
              c19 = 0;
              obj23 = closure_145_0(closure_145_1[5]);
              const result10 = obj23.setCommonResponseAttributes(
                closure_146_0,
                closure_146_2.responseId,
                closure_146_2.responseModel,
                closure_146_2.responseTimestamp,
              );
              obj24 = closure_145_0(closure_145_1[5]);
              const result11 = obj24.setTokenUsageAttributes(
                closure_146_0,
                closure_146_2.promptTokens,
                closure_146_2.completionTokens,
                closure_146_2.totalTokens,
              );
              obj30 = {};
              obj30[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_146_0.setAttributes(obj30);
              if (closure_146_2.finishReasons.length) {
                obj31 = {};
                const _JSON7 = JSON;
                obj31[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  closure_146_2.finishReasons,
                );
                closure_146_0.setAttributes(obj31);
              }
              let length4 = closure_146_1;
              if (closure_146_1) {
                length4 = closure_146_2.responseTexts.length;
              }
              if (length4) {
                const obj32 = {};
                const responseTexts4 = closure_146_2.responseTexts;
                obj32[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                closure_146_0.setAttributes(obj32);
              }
              closure_5 = 0;
              const _Object4 = Object;
              const items5 = [];
              closure_5 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_5);
              closure_5 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_5);
              closure_146_9 = items5;
              if (closure_146_9.length > 0) {
                const obj33 = {};
                const _JSON8 = JSON;
                obj33[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                  JSON.stringify(closure_146_9);
                closure_146_0.setAttributes(obj33);
              }
              closure_146_0.end();
              c22 = 3;
              const obj34 = { value, done: true };
              return obj34;
            }
          }
          break;
        case 11:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c19 = 7;
            let tmp145 = closure_146_4;
            if (closure_146_4) {
              tmp145 = null != closure_146_7.return;
            }
            if (tmp145) {
              c21 = 13;
              c22 = 1;
              const obj35 = { value: closure_145_2(closure_146_7.return()), done: false };
              return obj35;
            } else {
              c19 = 1;
              if (closure_146_5) {
                throw closure_146_3;
              } else {
                c19 = 0;
                obj15 = closure_145_0(closure_145_1[5]);
                const result12 = obj15.setCommonResponseAttributes(
                  closure_146_0,
                  closure_146_2.responseId,
                  closure_146_2.responseModel,
                  closure_146_2.responseTimestamp,
                );
                obj16 = closure_145_0(closure_145_1[5]);
                const result13 = obj16.setTokenUsageAttributes(
                  closure_146_0,
                  closure_146_2.promptTokens,
                  closure_146_2.completionTokens,
                  closure_146_2.totalTokens,
                );
                const obj36 = {};
                obj36[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_146_0.setAttributes(obj36);
                if (closure_146_2.finishReasons.length) {
                  obj37 = {};
                  const _JSON5 = JSON;
                  obj37[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                    closure_146_2.finishReasons,
                  );
                  closure_146_0.setAttributes(obj37);
                }
                let length3 = closure_146_1;
                if (closure_146_1) {
                  length3 = closure_146_2.responseTexts.length;
                }
                if (length3) {
                  obj38 = {};
                  const responseTexts3 = closure_146_2.responseTexts;
                  obj38[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                  closure_146_0.setAttributes(obj38);
                }
                closure_8 = 0;
                const _Object3 = Object;
                const items6 = [];
                closure_8 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_8);
                closure_8 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_8);
                closure_146_9 = items6;
                if (closure_146_9.length > 0) {
                  const obj39 = {};
                  const _JSON6 = JSON;
                  obj39[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                    JSON.stringify(closure_146_9);
                  closure_146_0.setAttributes(obj39);
                }
                closure_146_0.end();
                c22 = 3;
                const obj40 = { value, done: true };
                return obj40;
              }
            }
          } else {
            closure_146_4 = false;
            c21 = 6;
            c22 = 1;
            const obj41 = { value: closure_145_2(closure_146_7.next()), done: false };
            return obj41;
          }
          break;
        case 12:
          c19 = 1;
          if (closure_146_5) {
            throw closure_146_3;
          } else {
            throw tmp136;
          }
          break;
        case 13:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c19 = 1;
            if (closure_146_5) {
              throw closure_146_3;
            } else {
              c19 = 0;
              obj7 = closure_145_0(closure_145_1[5]);
              const result14 = obj7.setCommonResponseAttributes(
                closure_146_0,
                closure_146_2.responseId,
                closure_146_2.responseModel,
                closure_146_2.responseTimestamp,
              );
              obj8 = closure_145_0(closure_145_1[5]);
              const result15 = obj8.setTokenUsageAttributes(
                closure_146_0,
                closure_146_2.promptTokens,
                closure_146_2.completionTokens,
                closure_146_2.totalTokens,
              );
              const obj42 = {};
              obj42[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_146_0.setAttributes(obj42);
              if (closure_146_2.finishReasons.length) {
                const obj43 = {};
                const _JSON3 = JSON;
                obj43[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  closure_146_2.finishReasons,
                );
                closure_146_0.setAttributes(obj43);
              }
              let length2 = closure_146_1;
              if (closure_146_1) {
                length2 = closure_146_2.responseTexts.length;
              }
              if (length2) {
                const obj44 = {};
                const responseTexts2 = closure_146_2.responseTexts;
                obj44[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                closure_146_0.setAttributes(obj44);
              }
              closure_7 = 0;
              const _Object2 = Object;
              const items7 = [];
              closure_7 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_7);
              closure_7 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_7);
              closure_146_9 = items7;
              if (closure_146_9.length > 0) {
                obj45 = {};
                const _JSON4 = JSON;
                obj45[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                  JSON.stringify(closure_146_9);
                closure_146_0.setAttributes(obj45);
              }
              closure_146_0.end();
              c22 = 3;
              obj46 = { value, done: true };
              return obj46;
            }
          }
          break;
        case 14:
          c19 = 1;
          if (closure_146_5) {
            throw closure_146_3;
          } else {
            throw tmp74;
          }
          break;
        case 15:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c19 = 1;
            if (closure_146_5) {
              throw closure_146_3;
            } else {
              c19 = 0;
              obj = closure_145_0(closure_145_1[5]);
              const result16 = obj.setCommonResponseAttributes(
                closure_146_0,
                closure_146_2.responseId,
                closure_146_2.responseModel,
                closure_146_2.responseTimestamp,
              );
              obj1 = closure_145_0(closure_145_1[5]);
              const result17 = obj1.setTokenUsageAttributes(
                closure_146_0,
                closure_146_2.promptTokens,
                closure_146_2.completionTokens,
                closure_146_2.totalTokens,
              );
              obj47 = {};
              obj47[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_146_0.setAttributes(obj47);
              if (closure_146_2.finishReasons.length) {
                obj48 = {};
                const _JSON = JSON;
                obj48[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  closure_146_2.finishReasons,
                );
                closure_146_0.setAttributes(obj48);
              }
              let length = closure_146_1;
              if (closure_146_1) {
                length = closure_146_2.responseTexts.length;
              }
              if (length) {
                const obj49 = {};
                const responseTexts = closure_146_2.responseTexts;
                obj49[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                closure_146_0.setAttributes(obj49);
              }
              closure_9 = 0;
              const _Object = Object;
              const items8 = [];
              closure_9 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_9);
              closure_9 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_9);
              closure_146_9 = items8;
              if (closure_146_9.length > 0) {
                const obj50 = {};
                const _JSON2 = JSON;
                obj50[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                  JSON.stringify(closure_146_9);
                closure_146_0.setAttributes(obj50);
              }
              closure_146_0.end();
              c22 = 3;
              const obj51 = { value, done: true };
              return obj51;
            }
          }
          break;
        default:
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c19 = 1;
            if (closure_146_5) {
              throw closure_146_3;
            } else {
              c19 = 0;
              const obj72 = closure_145_0(closure_145_1[5]);
              const result18 = obj72.setCommonResponseAttributes(
                closure_146_0,
                closure_146_2.responseId,
                closure_146_2.responseModel,
                closure_146_2.responseTimestamp,
              );
              const obj73 = closure_145_0(closure_145_1[5]);
              const result19 = obj73.setTokenUsageAttributes(
                closure_146_0,
                closure_146_2.promptTokens,
                closure_146_2.completionTokens,
                closure_146_2.totalTokens,
              );
              const obj52 = {};
              obj52[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_146_0.setAttributes(obj52);
              if (closure_146_2.finishReasons.length) {
                const obj53 = {};
                const _JSON19 = JSON;
                obj53[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  closure_146_2.finishReasons,
                );
                closure_146_0.setAttributes(obj53);
              }
              let length10 = closure_146_1;
              if (closure_146_1) {
                length10 = closure_146_2.responseTexts.length;
              }
              if (length10) {
                const obj54 = {};
                const responseTexts10 = closure_146_2.responseTexts;
                obj54[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                closure_146_0.setAttributes(obj54);
              }
              closure_10 = 0;
              const _Object10 = Object;
              const items9 = [];
              closure_10 = HermesBuiltin.arraySpread(Object.values(closure_146_2.chatCompletionToolCalls), closure_10);
              closure_10 = HermesBuiltin.arraySpread(closure_146_2.responsesApiToolCalls, closure_10);
              closure_146_9 = items9;
              if (closure_146_9.length > 0) {
                obj55 = {};
                const _JSON20 = JSON;
                obj55[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                  JSON.stringify(closure_146_9);
                closure_146_0.setAttributes(obj55);
              }
              closure_146_0.end();
              c22 = 3;
              obj56 = { value, done: true };
              return obj56;
            }
          }
      }
    } catch (tmp701) {
      closure_20 = tmp701;
      if (tmp5 === c19) {
        c22 = tmp3;
        throw tmp701;
      } else if (tmp2 === tmp703) {
        c21 = tmp2;
      } else if (tmp === tmp703) {
        c21 = tmp;
      } else if (tmp3 === tmp703) {
        c21 = tmp3;
      } else if (tmp12 === tmp703) {
        c21 = tmp12;
      } else if (tmp6 === tmp703) {
        c21 = tmp11;
      } else if (tmp7 === tmp703) {
        c21 = tmp10;
      } else if (tmp11 === tmp703) {
        c21 = tmp9;
      } else {
        c21 = tmp8;
      }
    }
  }
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentStream = function instrumentStream(arg0, arg1, arg2) {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
