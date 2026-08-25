// === Module 976: AsyncFromSyncIterator ===

// Module 976 (AsyncFromSyncIterator)
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 840 */;
import captureCheckIn from "captureCheckIn" /* 869 */;
import closure_2 from "_awaitAsyncGenerator" /* 966 */;
import closure_3 from "AsyncGenerator" /* 968 */;

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
function processChunk(promptFeedback, toolCalls, arg2, setStatus) {
  let tmp = promptFeedback;
  if (promptFeedback) {
    promptFeedback = undefined;
    if (promptFeedback != null) {
      promptFeedback = promptFeedback.promptFeedback;
    }
    let blockReason;
    if (promptFeedback != null) {
      blockReason = promptFeedback.blockReason;
    }
    let flag = false;
    if (blockReason) {
      blockReason = promptFeedback.blockReasonMessage;
      if (blockReason == null) {
        blockReason = promptFeedback.blockReason;
      }
      let obj = { code: null, message: null };
      obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
      const _HermesInternal = HermesInternal;
      obj[1] = "Content blocked: " + blockReason;
      setStatus.setStatus(obj);
      const _HermesInternal2 = HermesInternal;
      obj = { mechanism: null };
      obj[0] = { handled: false, type: "auto.ai.google_genai" };
      captureCheckIn.captureException("Content blocked: " + blockReason, obj);
      flag = true;
      const obj2 = captureCheckIn;
    }
    tmp = !flag;
  }
  if (tmp) {
    if (typeof promptFeedback.responseId === "string") {
      toolCalls.responseId = promptFeedback.responseId;
    }
    if (typeof promptFeedback.modelVersion === "string") {
      toolCalls.responseModel = promptFeedback.modelVersion;
    }
    const usageMetadata = promptFeedback.usageMetadata;
    if (usageMetadata) {
      if (typeof usageMetadata.promptTokenCount === "number") {
        toolCalls.promptTokens = usageMetadata.promptTokenCount;
      }
      if (typeof usageMetadata.candidatesTokenCount === "number") {
        toolCalls.completionTokens = usageMetadata.candidatesTokenCount;
      }
      if (typeof usageMetadata.totalTokenCount === "number") {
        toolCalls.totalTokens = usageMetadata.totalTokenCount;
      }
    }
    (function handleCandidateContent(functionCalls, toolCalls, arg2) {
      if (Array.isArray(functionCalls.functionCalls)) {
        toolCalls = toolCalls.toolCalls;
        const push = toolCalls.push;
        const items = [];
        HermesBuiltin.arraySpread(functionCalls.functionCalls, 0);
        HermesBuiltin.apply(items, toolCalls);
      }
      let candidates = functionCalls.candidates;
      if (candidates == null) {
        candidates = [];
      }
      for (const item10027 of candidates) {
        let tmp7 = item10027;
        let finishReason;
        if (item10027 != null) {
          finishReason = item10027.finishReason;
        }
        if (finishReason) {
          let finishReasons = arg1.finishReasons;
          let tmp9 = item10027;
          finishReason = !finishReasons.includes(tmp7.finishReason);
        }
        if (finishReason) {
          finishReasons = arg1.finishReasons;
          let tmp10 = item10027;
          let arr = finishReasons.push(tmp7.finishReason);
        }
        let tmp12 = item10027;
        let parts;
        if (tmp7 != null) {
          let content = tmp7.content;
          if (content != null) {
            parts = content.parts;
          }
        }
        if (parts == null) {
          parts = [];
        }
        let tmp13 = parts;
        let tmp14 = parts;
        for (const item10050 of parts) {
          let tmp15 = item10050;
          let text = arg2;
          if (arg2) {
            let tmp16 = item10050;
            text = tmp15.text;
          }
          if (text) {
            let responseTexts = arg1.responseTexts;
            let tmp17 = item10050;
            arr = responseTexts.push(tmp15.text);
          }
          let tmp19 = item10050;
          if (tmp15.functionCall) {
            let toolCalls1 = arg1.toolCalls;
            let obj = { type: "function", id: null, name: null, arguments: null };
            let tmp20 = item10050;
            obj[1] = tmp15.functionCall.id;
            obj[2] = tmp15.functionCall.name;
            obj[3] = tmp15.functionCall.args;
            let arr1 = toolCalls1.push(obj);
          }
          continue;
        }
        continue;
      }
    })(promptFeedback, toolCalls, arg2);
  }
}
function _instrumentStream() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c11 = 0;
    c12 = 0;
    c9 = 0;
    return (function*(arg0, done) {
      if (c12 === 2) {
        c12 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = done;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp14;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp15 === 3) {
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
            c12 = 2;
            switch (c11) {
              case 0:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c12 = 3;
                  obj = { value: null, done: true };
                  obj[0] = done;
                  return obj;
                } else {
                  let iter = tmp4;
                  let value2 = tmp16;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  store = dependencyMap;
                  throwTypeErrorResult = obj1;
                  dependencyMap = obj1;
                  closure_3 = undefined;
                  let value;
                  iter = undefined;
                  value2 = undefined;
                  let obj24;
                  obj1 = { responseTexts: null, finishReasons: null, toolCalls: null };
                  obj1[0] = [];
                  obj1[1] = [];
                  obj1[2] = [];
                  closure_4 = false;
                  let callback2 = false;
                  obj24 = 4;
                  iter = (function _asyncIterator(closure_0) {
                    if (typeof Symbol !== "undefined") {
                      const _Symbol = Symbol;
                      let str2 = Symbol.asyncIterator;
                      const _Symbol2 = Symbol;
                      let str = Symbol.iterator;
                    }
                    let num = 1;
                    while (true) {
                      let tmp2 = str;
                      let tmp3 = str2;
                      let tmp = num;
                      if (str2) {
                        if (null != closure_0[str2]) {
                          break;
                        }
                      }
                      if (str) {
                        let tmp5 = closure_0[str];
                        if (null != tmp5) {
                          let call = tmp5.call;
                          let tmp10 = closure_4;
                          let tmp11 = typeof call === "unknown" ? tmp5() : call(closure_0);
                          let tmp12 = new.target;
                          let tmp13 = new.target;
                          let tmp14 = tmp11;
                          tmp10 = new tmp10(tmp11);
                          let tmp16 = tmp10;
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
                        let tmp9 = typeError;
                        throw typeError;
                      }
                    }
                    const call2 = tmp4.call;
                    return typeof call2 === "unknown" ? tmp4() : call2(closure_0);
                  })(store);
                  throwTypeErrorResult = callback;
                  c11 = 5;
                  c12 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = callback(iter.next());
                  return obj2;
                }
              break;
              case 1:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = iter;
                throwTypeErrorResult = closure_10;
                obj24 = 0;
                const obj3 = {};
                throwTypeErrorResult = store;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_10;
                obj3[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                obj24 = obj3;
                throwTypeErrorResult = obj1;
                if (obj1.responseId) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = obj1;
                  obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = obj1;
                if (obj1.responseModel) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = obj1;
                  obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = obj1;
                if (undefined !== obj1.promptTokens) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = obj1;
                  obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = obj1;
                if (undefined !== obj1.completionTokens) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = obj1;
                  obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = obj1;
                if (undefined !== obj1.totalTokens) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = obj1;
                  obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = obj1;
                if (obj1.finishReasons.length) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  const _JSON17 = JSON;
                  throwTypeErrorResult = obj1;
                  obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                }
                throwTypeErrorResult = value2;
                let length17 = dependencyMap;
                if (dependencyMap) {
                  throwTypeErrorResult = obj1;
                  length17 = obj1.responseTexts.length;
                }
                if (length17) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = obj1;
                  const responseTexts9 = obj1.responseTexts;
                  obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
                }
                throwTypeErrorResult = value2;
                let length18 = dependencyMap;
                if (dependencyMap) {
                  throwTypeErrorResult = obj1;
                  length18 = obj1.toolCalls.length;
                }
                if (length18) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj24;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  const _JSON18 = JSON;
                  throwTypeErrorResult = obj1;
                  obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = store;
                throwTypeErrorResult = obj24;
                throwTypeErrorResult = store.setAttributes(obj24);
                throwTypeErrorResult = store;
                throwTypeErrorResult = store.end();
                throw throwTypeErrorResult;
              case 2:
                throwTypeErrorResult = closure_10;
                throwTypeErrorResult = closure_10;
                value = closure_10;
                throwTypeErrorResult = value2;
                obj24 = 3;
                throwTypeErrorResult = closure_4;
                if (closure_4) {
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = null != iter.return;
                }
                if (!throwTypeErrorResult) {
                  obj24 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback2;
                  if (callback2) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    throwTypeErrorResult = value;
                    throw value;
                  }
                } else {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = iter;
                  c11 = 16;
                  c12 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj1(iter.return());
                  return obj4;
                }
              break;
              case 3:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = closure_10;
                obj24 = 1;
                throwTypeErrorResult = callback2;
                if (callback2) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 4:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = closure_10;
                throwTypeErrorResult = closure_10;
                obj24 = 2;
                callback2 = true;
                closure_3 = closure_10;
                throwTypeErrorResult = value2;
                obj24 = 8;
                throwTypeErrorResult = closure_4;
                if (closure_4) {
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = null != iter.return;
                }
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = iter;
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = iter;
                  c11 = 15;
                  c12 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = obj1(iter.return());
                  return obj5;
                } else {
                  obj24 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback2;
                  if (callback2) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    obj24 = 0;
                    throwTypeErrorResult = iter;
                    const obj6 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj6[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    obj24 = obj6;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON15 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length15 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length15 = obj1.responseTexts.length;
                    }
                    if (length15) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts8 = obj1.responseTexts;
                      obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length16 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length16 = obj1.toolCalls.length;
                    }
                    if (length16) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON16 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj24;
                    throwTypeErrorResult = store.setAttributes(obj24);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c12 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                }
              break;
              case 5:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else {
                  callback2 = done;
                  if (arg0 === 2) {
                    throwTypeErrorResult = value2;
                    obj24 = 5;
                    throwTypeErrorResult = closure_4;
                    if (closure_4) {
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = null != iter.return;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = iter;
                      c11 = 9;
                      c12 = 1;
                      const obj7 = { value: null, done: false };
                      obj7[0] = obj1(iter.return());
                      return obj7;
                    } else {
                      obj24 = 1;
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = callback2;
                      if (callback2) {
                        throwTypeErrorResult = closure_3;
                        throw closure_3;
                      } else {
                        obj24 = 0;
                        throwTypeErrorResult = iter;
                        const obj8 = {};
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj8[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        obj24 = obj8;
                        throwTypeErrorResult = obj1;
                        if (obj1.responseId) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (obj1.responseModel) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (undefined !== obj1.promptTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (undefined !== obj1.completionTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (undefined !== obj1.totalTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (obj1.finishReasons.length) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON13 = JSON;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        }
                        throwTypeErrorResult = value2;
                        let length13 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = obj1;
                          length13 = obj1.responseTexts.length;
                        }
                        if (length13) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          const responseTexts7 = obj1.responseTexts;
                          obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                        }
                        throwTypeErrorResult = value2;
                        let length14 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = obj1;
                          length14 = obj1.toolCalls.length;
                        }
                        if (length14) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON14 = JSON;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj24;
                        throwTypeErrorResult = store.setAttributes(obj24);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = store.end();
                        c12 = 3;
                        throwTypeErrorResult = callback2;
                        const obj9 = { value: null, done: true };
                        obj9[0] = callback2;
                        return obj9;
                      }
                    }
                  } else {
                    throwTypeErrorResult = value2;
                    value = done;
                    const done2 = done.done;
                    closure_4 = !done2;
                    if (done2) {
                      obj24 = 2;
                    } else {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = value;
                      value2 = value.value;
                      throwTypeErrorResult = callback2;
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = callback2(value2, obj1, dependencyMap, store);
                      throwTypeErrorResult = value2;
                      c11 = 6;
                      c12 = 1;
                      throwTypeErrorResult = value2;
                      obj24 = 6;
                      throwTypeErrorResult = closure_4;
                      if (closure_4) {
                        throwTypeErrorResult = iter;
                        throwTypeErrorResult = null != iter.return;
                      }
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = iter;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = iter;
                        c11 = 11;
                        c12 = 1;
                        const obj10 = { value: null, done: false };
                        obj10[0] = obj1(iter.return());
                        return obj10;
                      } else {
                        obj24 = 1;
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = callback2;
                        if (callback2) {
                          throwTypeErrorResult = closure_3;
                          throw closure_3;
                        } else {
                          obj24 = 0;
                          throwTypeErrorResult = iter;
                          const obj11 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          obj11[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                          obj24 = obj11;
                          throwTypeErrorResult = obj1;
                          if (obj1.responseId) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = obj1;
                            obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = obj1;
                          if (obj1.responseModel) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = obj1;
                            obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = obj1;
                          if (undefined !== obj1.promptTokens) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = obj1;
                            obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = obj1;
                          if (undefined !== obj1.completionTokens) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = obj1;
                            obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = obj1;
                          if (undefined !== obj1.totalTokens) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = obj1;
                            obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = obj1;
                          if (obj1.finishReasons.length) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            const _JSON9 = JSON;
                            throwTypeErrorResult = obj1;
                            obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                          }
                          throwTypeErrorResult = value2;
                          let length9 = dependencyMap;
                          if (dependencyMap) {
                            throwTypeErrorResult = obj1;
                            length9 = obj1.responseTexts.length;
                          }
                          if (length9) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = obj1;
                            const responseTexts5 = obj1.responseTexts;
                            obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                          }
                          throwTypeErrorResult = value2;
                          let length10 = dependencyMap;
                          if (dependencyMap) {
                            throwTypeErrorResult = obj1;
                            length10 = obj1.toolCalls.length;
                          }
                          if (length10) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = iter;
                            throwTypeErrorResult = obj24;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            const _JSON10 = JSON;
                            throwTypeErrorResult = obj1;
                            obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store.setAttributes(obj24);
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = store.end();
                          c12 = 3;
                          throwTypeErrorResult = closure_4;
                          const obj12 = { value: null, done: true };
                          obj12[0] = closure_4;
                          return obj12;
                        }
                      }
                    }
                  }
                }
              break;
              case 6:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else {
                  closure_3 = done;
                  if (arg0 === 2) {
                    throwTypeErrorResult = value2;
                    obj24 = 7;
                    throwTypeErrorResult = closure_4;
                    if (closure_4) {
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = null != iter.return;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = iter;
                      c11 = 13;
                      c12 = 1;
                      const obj13 = { value: null, done: false };
                      obj13[0] = obj1(iter.return());
                      return obj13;
                    } else {
                      obj24 = 1;
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = callback2;
                      if (callback2) {
                        throwTypeErrorResult = closure_3;
                        throw closure_3;
                      } else {
                        obj24 = 0;
                        throwTypeErrorResult = iter;
                        const obj14 = {};
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj14[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        obj24 = obj14;
                        throwTypeErrorResult = obj1;
                        if (obj1.responseId) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (obj1.responseModel) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (undefined !== obj1.promptTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (undefined !== obj1.completionTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (undefined !== obj1.totalTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = obj1;
                        if (obj1.finishReasons.length) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON11 = JSON;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        }
                        throwTypeErrorResult = value2;
                        let length11 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = obj1;
                          length11 = obj1.responseTexts.length;
                        }
                        if (length11) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          const responseTexts6 = obj1.responseTexts;
                          obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                        }
                        throwTypeErrorResult = value2;
                        let length12 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = obj1;
                          length12 = obj1.toolCalls.length;
                        }
                        if (length12) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = iter;
                          throwTypeErrorResult = obj24;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON12 = JSON;
                          throwTypeErrorResult = obj1;
                          obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj24;
                        throwTypeErrorResult = store.setAttributes(obj24);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = store.end();
                        c12 = 3;
                        throwTypeErrorResult = closure_3;
                        const obj15 = { value: null, done: true };
                        obj15[0] = closure_3;
                        return obj15;
                      }
                    }
                  } else {
                    throwTypeErrorResult = value2;
                    closure_4 = false;
                    throwTypeErrorResult = iter;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = iter;
                    c11 = 7;
                    c12 = 1;
                    const obj16 = { value: null, done: false };
                    obj16[0] = obj1(iter.next());
                    return obj16;
                  }
                }
              break;
              case 7:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else {
                  closure_4 = done;
                  if (arg0 !== 2) {
                    throwTypeErrorResult = value2;
                    value = done;
                    done = done.done;
                    closure_4 = !done;
                  }
                }
              break;
              case 8:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = closure_10;
                obj24 = 1;
                throwTypeErrorResult = callback2;
                if (callback2) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 9:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  obj24 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback2;
                  if (callback2) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    obj24 = 0;
                    throwTypeErrorResult = iter;
                    const obj17 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj17[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    obj24 = obj17;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON7 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length7 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length7 = obj1.responseTexts.length;
                    }
                    if (length7) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts4 = obj1.responseTexts;
                      obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length8 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length8 = obj1.toolCalls.length;
                    }
                    if (length8) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON8 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj24;
                    throwTypeErrorResult = store.setAttributes(obj24);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c12 = 3;
                    const obj18 = { value: null, done: true };
                    obj18[0] = done;
                    return obj18;
                  }
                }
              break;
              case 10:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = closure_10;
                obj24 = 1;
                throwTypeErrorResult = callback2;
                if (callback2) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 11:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  obj24 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback2;
                  if (callback2) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    obj24 = 0;
                    throwTypeErrorResult = iter;
                    const obj19 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj19[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    obj24 = obj19;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON5 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length5 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length5 = obj1.responseTexts.length;
                    }
                    if (length5) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts3 = obj1.responseTexts;
                      obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length6 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length6 = obj1.toolCalls.length;
                    }
                    if (length6) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON6 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj24;
                    throwTypeErrorResult = store.setAttributes(obj24);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c12 = 3;
                    const obj20 = { value: null, done: true };
                    obj20[0] = done;
                    return obj20;
                  }
                }
              break;
              case 12:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = closure_10;
                obj24 = 1;
                throwTypeErrorResult = callback2;
                if (callback2) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 13:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  obj24 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback2;
                  if (callback2) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    obj24 = 0;
                    const obj21 = {};
                    obj21[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    obj24 = obj21;
                    if (obj1.responseId) {
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON3 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length3 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length3 = obj1.responseTexts.length;
                    }
                    if (length3) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts2 = obj1.responseTexts;
                      obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length4 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length4 = obj1.toolCalls.length;
                    }
                    if (length4) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON4 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj24;
                    throwTypeErrorResult = store.setAttributes(obj24);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c12 = 3;
                    const obj22 = { value: null, done: true };
                    obj22[0] = done;
                    return obj22;
                  }
                }
              break;
              case 14:
                obj24 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  throw tmp91;
                }
              break;
              case 15:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  obj24 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback2;
                  if (callback2) {
                    throw closure_3;
                  } else {
                    obj24 = 0;
                    obj = {};
                    obj[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    obj24 = obj;
                    if (obj1.responseId) {
                      obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    }
                    if (obj1.responseModel) {
                      obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    }
                    if (undefined !== obj1.promptTokens) {
                      obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                    }
                    if (undefined !== obj1.completionTokens) {
                      obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                    }
                    if (undefined !== obj1.totalTokens) {
                      obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                    }
                    if (obj1.finishReasons.length) {
                      const _JSON = JSON;
                      obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    }
                    let length = dependencyMap;
                    if (dependencyMap) {
                      length = obj1.responseTexts.length;
                    }
                    if (length) {
                      const responseTexts = obj1.responseTexts;
                      obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                    }
                    let length2 = dependencyMap;
                    if (dependencyMap) {
                      length2 = obj1.toolCalls.length;
                    }
                    if (length2) {
                      const _JSON2 = JSON;
                      obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    }
                    store.setAttributes(obj24);
                    store.end();
                    c12 = 3;
                    const obj23 = { value: null, done: true };
                    obj23[0] = done;
                    return obj23;
                  }
                }
              break;
              default:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  obj24 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback2;
                  if (callback2) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    obj24 = 0;
                    throwTypeErrorResult = iter;
                    obj24 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj24[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj1.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj1.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (undefined !== obj1.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj1.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON19 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length19 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length19 = obj1.responseTexts.length;
                    }
                    if (length19) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts10 = obj1.responseTexts;
                      obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length20 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length20 = obj1.toolCalls.length;
                    }
                    if (length20) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = iter;
                      throwTypeErrorResult = obj24;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON20 = JSON;
                      throwTypeErrorResult = obj1;
                      obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj24;
                    throwTypeErrorResult = store.setAttributes(obj24);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c12 = 3;
                    const obj25 = { value: null, done: true };
                    obj25[0] = done;
                    return obj25;
                  }
                }
            }
          } catch (throwTypeErrorResult) {
            closure_10 = throwTypeErrorResult;
            throwTypeErrorResult = obj24;
            if (tmp5 === obj24) {
              throwTypeErrorResult = tmp3;
              c12 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c11 = tmp2;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c11 = throwTypeErrorResult;
            } else if (tmp3 === throwTypeErrorResult) {
              c11 = tmp3;
            } else if (tmp13 === throwTypeErrorResult) {
              c11 = tmp13;
            } else if (tmp6 === throwTypeErrorResult) {
              c11 = tmp12;
            } else if (tmp7 === throwTypeErrorResult) {
              c11 = tmp11;
            } else if (tmp8 === throwTypeErrorResult) {
              c11 = tmp10;
            } else {
              c11 = tmp9;
            }
          }
        }
      }
    })();
  });
  closure_6 = tmp;
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