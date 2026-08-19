// _runtime/00965_AsyncFromSyncIterator.js
import getSpanStatusFromHttpCode from "00840_getSpanStatusFromHttpCode.js";
import captureCheckIn from "00869_captureCheckIn.js";
import items10 from "00964_items.js";
import _awaitAsyncGenerator from "00966__awaitAsyncGenerator.js";
import AsyncGenerator from "00968_AsyncGenerator.js";

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
        rejectResult = resolved.then((result) => ({ value: result, done }));
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
          resolved = resolved1.then((result) => ({ value: result, done }));
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
          rejectResult = resolved.then((result) => ({ value: result, done }));
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
    if (arg2) {
      let delta = item10020.delta;
      let content;
      if (delta != null) {
        content = delta.content;
      }
      if (content) {
        let responseTexts = arg1.responseTexts;
        let arr = responseTexts.push(item10020.delta.content);
      }
      let delta2 = item10020.delta;
      let tool_calls;
      if (delta2 != null) {
        tool_calls = delta2.tool_calls;
      }
      if (tool_calls) {
        let tmp10 = processChatCompletionToolCalls(item10020.delta.tool_calls, arg1);
      }
    }
    if (item10020.finish_reason) {
      let finishReasons = arg1.finishReasons;
      arr = finishReasons.push(item10020.finish_reason);
    }
    continue;
  }
}
function processResponsesApiEvent(type, responsesApiToolCalls, arg2, setStatus) {
  if (type) {
    if (typeof type === "object") {
      const _Error = Error;
      if (type instanceof Error) {
        let obj = { code: null, message: "internal_error" };
        obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
        setStatus.setStatus(obj);
        obj = { mechanism: null };
        obj[0] = { handled: false, type: "auto.ai.openai.stream-response" };
        captureCheckIn.captureException(type, obj);
      } else if ("type" in type) {
        const RESPONSE_EVENT_TYPES = items10.RESPONSE_EVENT_TYPES;
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
  let tmp = AsyncGenerator((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c21 = 0;
    c22 = 0;
    c19 = 0;
    return (function*(arg0, done) {
      if (c22 === 2) {
        c22 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp14 === 3) {
        if (arg0 === 1) {
          throw done;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = done;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c22 = 2;
          switch (c21) {
            case 0:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else if (arg0 === 2) {
                c22 = 3;
                obj = { value: null, done: true };
                obj[0] = done;
                return obj;
              } else {
                closure_17 = tmp4;
                closure_18 = tmp15;
                const store = dependencyMap;
                dependencyMap = obj1;
                closure_3 = undefined;
                let lib;
                let lib2;
                let value;
                let items9;
                obj1 = { eventTypes: null, responseTexts: null, finishReasons: null, responseId: "", responseModel: "", responseTimestamp: 0, promptTokens: "r", completionTokens: "accessibilityRole", totalTokens: "limit", chatCompletionToolCalls: false, responsesApiToolCalls: false };
                obj1[0] = [];
                obj1[1] = [];
                obj1[2] = [];
                obj1[9] = {};
                obj1[10] = [];
                c4 = false;
                closure_5 = false;
                c19 = 4;
                const iter = (function _asyncIterator(closure_0) {
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
                      if (null != dependencyMap[str2]) {
                        break;
                      }
                    }
                    if (str) {
                      let tmp5 = dependencyMap[str];
                      if (null != tmp5) {
                        let call = tmp5.call;
                        let tmp10 = c4;
                        let tmp11 = typeof call === "unknown" ? tmp5() : call(dependencyMap);
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
                      let typeError = new TypeError("Object is not async iterable");
                      throw typeError;
                    }
                  }
                  const call2 = tmp4.call;
                  return typeof call2 === "unknown" ? tmp4() : call2(dependencyMap);
                })(store);
                lib2 = iter;
                c21 = 5;
                c22 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(iter.next());
                return obj2;
              }
            break;
            case 1:
              c19 = 0;
              const obj64 = store(963);
              const result = obj64.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
              const obj65 = store(963);
              const result1 = obj65.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
              const obj3 = {};
              obj3[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              store.setAttributes(obj3);
              if (obj1.finishReasons.length) {
                const obj4 = {};
                const _JSON17 = JSON;
                obj4[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                store.setAttributes(obj4);
              }
              let length9 = dependencyMap;
              if (dependencyMap) {
                length9 = obj1.responseTexts.length;
              }
              if (length9) {
                const obj5 = {};
                const responseTexts9 = obj1.responseTexts;
                obj5[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
                store.setAttributes(obj5);
              }
              closure_12 = 0;
              const _Object9 = Object;
              const items = [];
              closure_12 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_12);
              closure_12 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_12);
              items9 = items;
              if (items9.length > 0) {
                const obj6 = {};
                const _JSON18 = JSON;
                obj6[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                store.setAttributes(obj6);
              }
              store.end();
              throw closure_20;
            case 2:
              closure_16 = closure_20;
              c19 = 3;
              let tmp573 = c4;
              if (c4) {
                tmp573 = null != lib2.return;
              }
              if (!tmp573) {
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  throw closure_16;
                }
              } else {
                c21 = 16;
                c22 = 1;
                let obj7 = { value: null, done: false };
                obj7[0] = obj1(lib2.return());
                return obj7;
              }
            break;
            case 3:
              c19 = 1;
              if (closure_5) {
                throw closure_3;
              } else {
                throw tmp566;
              }
            break;
            case 4:
              c19 = 2;
              closure_5 = true;
              closure_3 = closure_20;
              c19 = 8;
              let tmp500 = c4;
              if (c4) {
                tmp500 = null != lib2.return;
              }
              if (tmp500) {
                c21 = 15;
                c22 = 1;
                let obj8 = { value: null, done: false };
                obj8[0] = obj1(lib2.return());
                return obj8;
              } else {
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  let obj55 = store(963);
                  const result2 = obj55.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                  let obj56 = store(963);
                  const result3 = obj56.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                  const obj9 = {};
                  obj9[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj9);
                  if (obj1.finishReasons.length) {
                    const obj10 = {};
                    const _JSON15 = JSON;
                    obj10[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj10);
                  }
                  let length8 = dependencyMap;
                  if (dependencyMap) {
                    length8 = obj1.responseTexts.length;
                  }
                  if (length8) {
                    const obj11 = {};
                    const responseTexts8 = obj1.responseTexts;
                    obj11[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                    store.setAttributes(obj11);
                  }
                  closure_11 = 0;
                  const _Object8 = Object;
                  const items1 = [];
                  closure_11 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_11);
                  closure_11 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_11);
                  items9 = items1;
                  if (items9.length > 0) {
                    const obj12 = {};
                    const _JSON16 = JSON;
                    obj12[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                    store.setAttributes(obj12);
                  }
                  store.end();
                  c22 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              }
            break;
            case 5:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else {
                closure_15 = done;
                if (arg0 === 2) {
                  c19 = 5;
                  let tmp430 = c4;
                  if (c4) {
                    tmp430 = null != lib2.return;
                  }
                  if (tmp430) {
                    c21 = 8;
                    c22 = 1;
                    const obj13 = { value: null, done: false };
                    obj13[0] = obj1(lib2.return());
                    return obj13;
                  } else {
                    c19 = 1;
                    if (closure_5) {
                      throw closure_3;
                    } else {
                      c19 = 0;
                      let obj47 = store(963);
                      const result4 = obj47.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                      let obj48 = store(963);
                      const result5 = obj48.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                      const obj14 = {};
                      obj14[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      store.setAttributes(obj14);
                      if (obj1.finishReasons.length) {
                        let obj15 = {};
                        const _JSON13 = JSON;
                        obj15[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        store.setAttributes(obj15);
                      }
                      let length7 = dependencyMap;
                      if (dependencyMap) {
                        length7 = obj1.responseTexts.length;
                      }
                      if (length7) {
                        let obj16 = {};
                        const responseTexts7 = obj1.responseTexts;
                        obj16[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                        store.setAttributes(obj16);
                      }
                      c4 = 0;
                      const _Object7 = Object;
                      const items2 = [];
                      c4 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), c4);
                      c4 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, c4);
                      items9 = items2;
                      if (items9.length > 0) {
                        const obj17 = {};
                        const _JSON14 = JSON;
                        obj17[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                        store.setAttributes(obj17);
                      }
                      store.end();
                      c22 = 3;
                      const obj18 = { value: null, done: true };
                      obj18[0] = closure_15;
                      return obj18;
                    }
                  }
                } else {
                  lib = done;
                  const done2 = done.done;
                  c4 = !done2;
                  if (done2) {
                    c19 = 2;
                  } else {
                    value = lib.value;
                    let obj45 = store(963);
                    if (obj45.isChatCompletionChunk(value)) {
                      lib(value, obj1, dependencyMap);
                    } else {
                      let obj46 = store(963);
                      if (obj46.isResponsesApiStreamEvent(value)) {
                        lib2(value, obj1, dependencyMap, store);
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
                throw done;
              } else {
                closure_14 = done;
                if (arg0 === 2) {
                  c19 = 6;
                  let tmp337 = c4;
                  if (c4) {
                    tmp337 = null != lib2.return;
                  }
                  if (tmp337) {
                    c21 = 10;
                    c22 = 1;
                    const obj19 = { value: null, done: false };
                    obj19[0] = obj1(lib2.return());
                    return obj19;
                  } else {
                    c19 = 1;
                    if (closure_5) {
                      throw closure_3;
                    } else {
                      c19 = 0;
                      let obj37 = store(963);
                      const result6 = obj37.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                      let obj38 = store(963);
                      const result7 = obj38.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                      const obj20 = {};
                      obj20[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      store.setAttributes(obj20);
                      if (obj1.finishReasons.length) {
                        const obj21 = {};
                        const _JSON11 = JSON;
                        obj21[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        store.setAttributes(obj21);
                      }
                      let length6 = dependencyMap;
                      if (dependencyMap) {
                        length6 = obj1.responseTexts.length;
                      }
                      if (length6) {
                        const obj22 = {};
                        const responseTexts6 = obj1.responseTexts;
                        obj22[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                        store.setAttributes(obj22);
                      }
                      lib = 0;
                      const _Object6 = Object;
                      const items3 = [];
                      lib = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), lib);
                      lib = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, lib);
                      items9 = items3;
                      if (items9.length > 0) {
                        let obj23 = {};
                        const _JSON12 = JSON;
                        obj23[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                        store.setAttributes(obj23);
                      }
                      store.end();
                      c22 = 3;
                      let obj24 = { value: null, done: true };
                      obj24[0] = closure_14;
                      return obj24;
                    }
                  }
                } else {
                  lib = done;
                  done = done.done;
                  c4 = !done;
                }
              }
            break;
            case 7:
              c19 = 1;
              if (closure_5) {
                throw closure_3;
              } else {
                throw tmp331;
              }
            break;
            case 8:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else if (arg0 === 2) {
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  let obj30 = store(963);
                  const result8 = obj30.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                  let obj31 = store(963);
                  const result9 = obj31.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                  const obj25 = {};
                  obj25[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj25);
                  if (obj1.finishReasons.length) {
                    const obj26 = {};
                    const _JSON9 = JSON;
                    obj26[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj26);
                  }
                  let length5 = dependencyMap;
                  if (dependencyMap) {
                    length5 = obj1.responseTexts.length;
                  }
                  if (length5) {
                    const obj27 = {};
                    const responseTexts5 = obj1.responseTexts;
                    obj27[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                    store.setAttributes(obj27);
                  }
                  closure_3 = 0;
                  const _Object5 = Object;
                  const items4 = [];
                  closure_3 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_3);
                  closure_3 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_3);
                  items9 = items4;
                  if (items9.length > 0) {
                    const obj28 = {};
                    const _JSON10 = JSON;
                    obj28[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                    store.setAttributes(obj28);
                  }
                  store.end();
                  c22 = 3;
                  const obj29 = { value: null, done: true };
                  obj29[0] = done;
                  return obj29;
                }
              }
            break;
            case 9:
              c19 = 1;
              if (closure_5) {
                throw closure_3;
              } else {
                throw tmp269;
              }
            break;
            case 10:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else if (arg0 === 2) {
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  obj23 = store(963);
                  const result10 = obj23.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                  obj24 = store(963);
                  const result11 = obj24.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                  obj30 = {};
                  obj30[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj30);
                  if (obj1.finishReasons.length) {
                    obj31 = {};
                    const _JSON7 = JSON;
                    obj31[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj31);
                  }
                  let length4 = dependencyMap;
                  if (dependencyMap) {
                    length4 = obj1.responseTexts.length;
                  }
                  if (length4) {
                    const obj32 = {};
                    const responseTexts4 = obj1.responseTexts;
                    obj32[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                    store.setAttributes(obj32);
                  }
                  closure_5 = 0;
                  const _Object4 = Object;
                  const items5 = [];
                  closure_5 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_5);
                  closure_5 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_5);
                  items9 = items5;
                  if (items9.length > 0) {
                    const obj33 = {};
                    const _JSON8 = JSON;
                    obj33[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                    store.setAttributes(obj33);
                  }
                  store.end();
                  c22 = 3;
                  const obj34 = { value: null, done: true };
                  obj34[0] = done;
                  return obj34;
                }
              }
            break;
            case 11:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else {
                closure_13 = done;
                if (arg0 === 2) {
                  c19 = 7;
                  let tmp145 = c4;
                  if (c4) {
                    tmp145 = null != lib2.return;
                  }
                  if (tmp145) {
                    c21 = 13;
                    c22 = 1;
                    const obj35 = { value: null, done: false };
                    obj35[0] = obj1(lib2.return());
                    return obj35;
                  } else {
                    c19 = 1;
                    if (closure_5) {
                      throw closure_3;
                    } else {
                      c19 = 0;
                      obj15 = store(963);
                      const result12 = obj15.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                      obj16 = store(963);
                      const result13 = obj16.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                      const obj36 = {};
                      obj36[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      store.setAttributes(obj36);
                      if (obj1.finishReasons.length) {
                        obj37 = {};
                        const _JSON5 = JSON;
                        obj37[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        store.setAttributes(obj37);
                      }
                      let length3 = dependencyMap;
                      if (dependencyMap) {
                        length3 = obj1.responseTexts.length;
                      }
                      if (length3) {
                        obj38 = {};
                        const responseTexts3 = obj1.responseTexts;
                        obj38[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                        store.setAttributes(obj38);
                      }
                      value = 0;
                      const _Object3 = Object;
                      const items6 = [];
                      value = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), value);
                      value = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, value);
                      items9 = items6;
                      if (items9.length > 0) {
                        const obj39 = {};
                        const _JSON6 = JSON;
                        obj39[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                        store.setAttributes(obj39);
                      }
                      store.end();
                      c22 = 3;
                      const obj40 = { value: null, done: true };
                      obj40[0] = closure_13;
                      return obj40;
                    }
                  }
                } else {
                  c4 = false;
                  c21 = 6;
                  c22 = 1;
                  const obj41 = { value: null, done: false };
                  obj41[0] = obj1(lib2.next());
                  return obj41;
                }
              }
            break;
            case 12:
              c19 = 1;
              if (closure_5) {
                throw closure_3;
              } else {
                throw tmp136;
              }
            break;
            case 13:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else if (arg0 === 2) {
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  obj7 = store(963);
                  const result14 = obj7.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                  obj8 = store(963);
                  const result15 = obj8.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                  const obj42 = {};
                  obj42[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj42);
                  if (obj1.finishReasons.length) {
                    const obj43 = {};
                    const _JSON3 = JSON;
                    obj43[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj43);
                  }
                  let length2 = dependencyMap;
                  if (dependencyMap) {
                    length2 = obj1.responseTexts.length;
                  }
                  if (length2) {
                    const obj44 = {};
                    const responseTexts2 = obj1.responseTexts;
                    obj44[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    store.setAttributes(obj44);
                  }
                  lib2 = 0;
                  const _Object2 = Object;
                  const items7 = [];
                  lib2 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), lib2);
                  lib2 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, lib2);
                  items9 = items7;
                  if (items9.length > 0) {
                    obj45 = {};
                    const _JSON4 = JSON;
                    obj45[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                    store.setAttributes(obj45);
                  }
                  store.end();
                  c22 = 3;
                  obj46 = { value: null, done: true };
                  obj46[0] = done;
                  return obj46;
                }
              }
            break;
            case 14:
              c19 = 1;
              if (closure_5) {
                throw closure_3;
              } else {
                throw tmp74;
              }
            break;
            case 15:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else if (arg0 === 2) {
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  obj = store(963);
                  const result16 = obj.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                  obj1 = store(963);
                  const result17 = obj1.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                  obj47 = {};
                  obj47[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj47);
                  if (obj1.finishReasons.length) {
                    obj48 = {};
                    const _JSON = JSON;
                    obj48[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj48);
                  }
                  let length = dependencyMap;
                  if (dependencyMap) {
                    length = obj1.responseTexts.length;
                  }
                  if (length) {
                    const obj49 = {};
                    const responseTexts = obj1.responseTexts;
                    obj49[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                    store.setAttributes(obj49);
                  }
                  items9 = 0;
                  const _Object = Object;
                  const items8 = [];
                  items9 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), items9);
                  items9 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, items9);
                  items9 = items8;
                  if (items9.length > 0) {
                    const obj50 = {};
                    const _JSON2 = JSON;
                    obj50[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                    store.setAttributes(obj50);
                  }
                  store.end();
                  c22 = 3;
                  const obj51 = { value: null, done: true };
                  obj51[0] = done;
                  return obj51;
                }
              }
            break;
            default:
              if (arg0 === 1) {
                c22 = 3;
                throw done;
              } else if (arg0 === 2) {
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  const obj72 = store(963);
                  const result18 = obj72.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                  const obj73 = store(963);
                  const result19 = obj73.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                  const obj52 = {};
                  obj52[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj52);
                  if (obj1.finishReasons.length) {
                    const obj53 = {};
                    const _JSON19 = JSON;
                    obj53[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj53);
                  }
                  let length10 = dependencyMap;
                  if (dependencyMap) {
                    length10 = obj1.responseTexts.length;
                  }
                  if (length10) {
                    const obj54 = {};
                    const responseTexts10 = obj1.responseTexts;
                    obj54[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                    store.setAttributes(obj54);
                  }
                  closure_10 = 0;
                  const _Object10 = Object;
                  items9 = [];
                  closure_10 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_10);
                  closure_10 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_10);
                  if (items9.length > 0) {
                    obj55 = {};
                    const _JSON20 = JSON;
                    obj55[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                    store.setAttributes(obj55);
                  }
                  store.end();
                  c22 = 3;
                  obj56 = { value: null, done: true };
                  obj56[0] = done;
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
    })();
  });
  closure_8 = tmp;
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