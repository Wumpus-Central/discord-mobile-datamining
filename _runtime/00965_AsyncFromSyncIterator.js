// _runtime/00965_AsyncFromSyncIterator.js
import _awaitAsyncGenerator from "_awaitAsyncGenerator";
import AsyncGenerator from "AsyncGenerator";

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
    return(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        const obj = { value: null, done: true };
        obj[0] = arg0;
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
    }
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
      let tmp16 = nextResult;
      if (tmp2.function) {
        let tmp4 = index;
        chatCompletionToolCalls = chatCompletionToolCalls.chatCompletionToolCalls;
        let tmp5 = index;
        if (tmp3 in chatCompletionToolCalls.chatCompletionToolCalls) {
          let tmp10 = chatCompletionToolCalls[tmp3];
          let tmp11 = nextResult;
          let _arguments = tmp2.function.arguments;
          if (_arguments) {
            let tmp12 = tmp10;
            let _function;
            if (tmp10 != null) {
              _function = tmp10.function;
            }
            _arguments = _function;
          }
          if (_arguments) {
            let tmp14 = tmp10;
            _function = tmp10.function;
            let tmp15 = nextResult;
            _function.arguments = _function.arguments + tmp2.function.arguments;
          }
        } else {
          let obj = {};
          let tmp6 = nextResult;
          let tmp7 = obj;
          let tmp8 = tmp2;
          let merged = Object.assign(nextResult);
          obj = { name: null, arguments: null };
          obj[0] = tmp2.function.name;
          obj[1] = tmp2.function.arguments || "";
          obj.function = obj;
          chatCompletionToolCalls[tmp3] = obj;
        }
      }
    }
    continue;
  }
}
function processChatCompletionChunk(id, responseId) {
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
      let tmp2 = item10020;
      let delta = tmp.delta;
      let content;
      if (delta != null) {
        content = delta.content;
      }
      if (content) {
        let responseTexts = arg1.responseTexts;
        let tmp4 = item10020;
        let arr = responseTexts.push(tmp.delta.content);
      }
      let tmp6 = item10020;
      let delta2 = tmp.delta;
      let tool_calls;
      if (delta2 != null) {
        tool_calls = delta2.tool_calls;
      }
      if (tool_calls) {
        let tmp8 = processChatCompletionToolCalls;
        let tmp9 = item10020;
        let tmp10 = processChatCompletionToolCalls(tmp.delta.tool_calls, arg1);
      }
    }
    let tmp11 = item10020;
    if (tmp.finish_reason) {
      let finishReasons = arg1.finishReasons;
      let tmp12 = item10020;
      arr = finishReasons.push(tmp.finish_reason);
    }
    continue;
  }
}
function processResponsesApiEvent(type, responsesApiToolCalls, arg2, setStatus) {
  if (type) {
    if (typeof type === "ay") {
      const _Error = Error;
      if (type instanceof Error) {
        let obj = { code: null, message: "internal_error" };
        obj[0] = require(840) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR;
        setStatus.setStatus(obj);
        obj = { mechanism: null };
        obj[0] = { handled: false, type: "auto.ai.openai.stream-response" };
        require(869) /* captureCheckIn */.captureException(type, obj);
      } else if ("type" in type) {
        const RESPONSE_EVENT_TYPES = require(964) /* items */.RESPONSE_EVENT_TYPES;
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
function _instrumentStream() {
  const self = this;
  const tmp = AsyncGenerator((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c21 = 0;
    let c22 = 0;
    let c19 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c22 === 2) {
        c22 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp12;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp13 === 3) {
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
            if (arg0 === 1) {
              c22 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              while (true) {
                let c19 = 1;
                let tmp71 = closure_18;
                let tmp72 = closure_5;
                if (closure_5) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  c19 = 0;
                  let tmp73 = closure_17;
                  let tmp74 = store;
                  let tmp75 = dependencyMap;
                  let obj7 = store(963);
                  let tmp76 = store;
                  let tmp77 = closure_2;
                  let tmp78 = closure_2;
                  let tmp79 = closure_2;
                  let tmp80 = obj7;
                  let result = obj7.setCommonResponseAttributes(store, closure_2.responseId, closure_2.responseModel, closure_2.responseTimestamp);
                  let tmp82 = store;
                  let tmp83 = dependencyMap;
                  let obj8 = store(963);
                  let tmp84 = store;
                  let tmp85 = closure_2;
                  let tmp86 = closure_2;
                  let tmp87 = closure_2;
                  let tmp88 = obj8;
                  let result1 = obj8.setTokenUsageAttributes(store, closure_2.promptTokens, closure_2.completionTokens, closure_2.totalTokens);
                  let tmp90 = store;
                  obj = {};
                  let tmp91 = store;
                  let tmp92 = dependencyMap;
                  obj[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  let setAttributesResult = store.setAttributes(obj);
                  let tmp94 = closure_2;
                  if (closure_2.finishReasons.length) {
                    let tmp95 = closure_18;
                    let tmp96 = closure_17;
                    let tmp97 = store;
                    let obj1 = {};
                    let tmp98 = store;
                    let tmp99 = dependencyMap;
                    let _JSON3 = JSON;
                    throwTypeErrorResult = closure_2;
                    obj1[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_2.finishReasons);
                    throwTypeErrorResult = store.setAttributes(obj1);
                  }
                  throwTypeErrorResult = closure_18;
                  let length2 = dependencyMap;
                  if (dependencyMap) {
                    throwTypeErrorResult = closure_2;
                    length2 = closure_2.responseTexts.length;
                  }
                  if (length2) {
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = store;
                    let obj2 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_2;
                    let responseTexts2 = closure_2.responseTexts;
                    obj2[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    throwTypeErrorResult = store.setAttributes(obj2);
                  }
                  throwTypeErrorResult = closure_18;
                  let closure_11 = 0;
                  let _Object2 = Object;
                  throwTypeErrorResult = closure_2;
                  let items = [];
                  throwTypeErrorResult = closure_11;
                  throwTypeErrorResult = items;
                  closure_11 = HermesBuiltin.arraySpread(Object.values(closure_2.chatCompletionToolCalls), closure_11);
                  throwTypeErrorResult = closure_2;
                  throwTypeErrorResult = closure_11;
                  throwTypeErrorResult = items;
                  closure_11 = HermesBuiltin.arraySpread(closure_2.responsesApiToolCalls, closure_11);
                  let items1 = items;
                  throwTypeErrorResult = items1;
                  if (items1.length > 0) {
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = store;
                    let obj3 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let _JSON4 = JSON;
                    throwTypeErrorResult = items1;
                    obj3[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items1);
                    throwTypeErrorResult = store.setAttributes(obj3);
                  }
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = store.end();
                  let num3 = 3;
                  c22 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            } else {
              c19 = 1;
              throwTypeErrorResult = closure_18;
              throwTypeErrorResult = closure_5;
              if (closure_5) {
                throw closure_3;
              } else {
                c19 = 0;
                obj = store(963);
                const result2 = obj.setCommonResponseAttributes(store, closure_2.responseId, closure_2.responseModel, closure_2.responseTimestamp);
                obj1 = store(963);
                const result3 = obj1.setTokenUsageAttributes(store, closure_2.promptTokens, closure_2.completionTokens, closure_2.totalTokens);
                const obj4 = {};
                obj4[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                store.setAttributes(obj4);
                if (closure_2.finishReasons.length) {
                  const obj5 = {};
                  const _JSON = JSON;
                  obj5[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_2.finishReasons);
                  store.setAttributes(obj5);
                }
                let length = dependencyMap;
                if (dependencyMap) {
                  length = closure_2.responseTexts.length;
                }
                if (length) {
                  const obj6 = {};
                  const responseTexts = closure_2.responseTexts;
                  obj6[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                  store.setAttributes(obj6);
                }
                items1 = 0;
                const _Object = Object;
                items1 = [];
                items1 = HermesBuiltin.arraySpread(Object.values(closure_2.chatCompletionToolCalls), items1);
                items1 = HermesBuiltin.arraySpread(closure_2.responsesApiToolCalls, items1);
                if (items1.length > 0) {
                  obj7 = {};
                  const _JSON2 = JSON;
                  obj7[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items1);
                  store.setAttributes(obj7);
                }
                store.end();
                c22 = 3;
                obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              }
            }
          } catch (throwTypeErrorResult) {
            throwTypeErrorResult = c19;
            if (tmp4 === c19) {
              throwTypeErrorResult = tmp3;
              c22 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              let c21 = tmp2;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c21 = throwTypeErrorResult;
            } else if (tmp3 === throwTypeErrorResult) {
              c21 = tmp3;
            } else if (tmp11 === throwTypeErrorResult) {
              c21 = tmp11;
            } else if (tmp5 === throwTypeErrorResult) {
              c21 = tmp10;
            } else if (tmp6 === throwTypeErrorResult) {
              c21 = tmp9;
            } else if (tmp10 === throwTypeErrorResult) {
              c21 = tmp8;
            } else {
              c21 = tmp7;
            }
          }
        }
      }
    })();
  });
  const _instrumentStream = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentStream = function instrumentStream(arg0, arg1, arg2) {
  const self = this;
  const apply = _instrumentStream.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};