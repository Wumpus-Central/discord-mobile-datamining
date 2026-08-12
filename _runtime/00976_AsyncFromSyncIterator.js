// _runtime/00976_AsyncFromSyncIterator.js
import _awaitAsyncGenerator from "_awaitAsyncGenerator";
import AsyncGenerator from "AsyncGenerator";
import { getSpanStatusFromHttpCode } from "00840_getSpanStatusFromHttpCode.js";
import { captureCheckIn } from "00869_captureCheckIn.js";

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
  const tmp = AsyncGenerator((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c11 = 0;
    let c12 = 0;
    let c9 = 0;
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
            return { value: "HermesInternal", done: null };
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
                  let closure_7 = tmp4;
                  let value2 = tmp16;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  store = dependencyMap;
                  throwTypeErrorResult = lib;
                  dependencyMap = lib;
                  let closure_3;
                  let value;
                  closure_7 = undefined;
                  value2 = undefined;
                  let c9;
                  const obj1 = { responseTexts: null, finishReasons: null, toolCalls: null };
                  obj1[0] = [];
                  obj1[1] = [];
                  obj1[2] = [];
                  lib = obj1;
                  let closure_4 = false;
                  let callback = false;
                  c9 = 4;
                  const iter = (function _asyncIterator(closure_0) {
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
                  closure_7 = iter;
                  throwTypeErrorResult = lib;
                  c11 = 5;
                  c12 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = lib(iter.next());
                  return obj2;
                }
              break;
              case 1:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = closure_7;
                throwTypeErrorResult = closure_10;
                c9 = 0;
                const obj3 = {};
                throwTypeErrorResult = store;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_10;
                obj3[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                c9 = obj3;
                throwTypeErrorResult = lib;
                if (lib.responseId) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = lib;
                  c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = lib;
                if (lib.responseModel) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = lib;
                  c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = lib;
                if (undefined !== lib.promptTokens) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = lib;
                  c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = lib;
                if (undefined !== lib.completionTokens) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = lib;
                  c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = lib;
                if (undefined !== lib.totalTokens) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = lib;
                  c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = lib;
                if (lib.finishReasons.length) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  const _JSON17 = JSON;
                  throwTypeErrorResult = lib;
                  c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                }
                throwTypeErrorResult = value2;
                let length17 = dependencyMap;
                if (dependencyMap) {
                  throwTypeErrorResult = lib;
                  length17 = lib.responseTexts.length;
                }
                if (length17) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = lib;
                  const responseTexts9 = lib.responseTexts;
                  c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
                }
                throwTypeErrorResult = value2;
                let length18 = dependencyMap;
                if (dependencyMap) {
                  throwTypeErrorResult = lib;
                  length18 = lib.toolCalls.length;
                }
                if (length18) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = c9;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  const _JSON18 = JSON;
                  throwTypeErrorResult = lib;
                  c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                }
                throwTypeErrorResult = value2;
                throwTypeErrorResult = store;
                throwTypeErrorResult = c9;
                throwTypeErrorResult = store.setAttributes(c9);
                throwTypeErrorResult = store;
                throwTypeErrorResult = store.end();
                throw throwTypeErrorResult;
              case 2:
                throwTypeErrorResult = closure_10;
                throwTypeErrorResult = closure_10;
                value = closure_10;
                throwTypeErrorResult = value2;
                c9 = 3;
                throwTypeErrorResult = closure_4;
                if (closure_4) {
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = null != closure_7.return;
                }
                if (!throwTypeErrorResult) {
                  c9 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback;
                  if (callback) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    throwTypeErrorResult = value;
                    throw value;
                  }
                } else {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = closure_7;
                  c11 = 16;
                  c12 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = lib(closure_7.return());
                  return obj4;
                }
              break;
              case 3:
                throwTypeErrorResult = value2;
                throwTypeErrorResult = closure_10;
                c9 = 1;
                throwTypeErrorResult = callback;
                if (callback) {
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
                c9 = 2;
                callback = true;
                closure_3 = closure_10;
                throwTypeErrorResult = value2;
                c9 = 8;
                throwTypeErrorResult = closure_4;
                if (closure_4) {
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = null != closure_7.return;
                }
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = closure_7;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = closure_7;
                  c11 = 15;
                  c12 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = lib(closure_7.return());
                  return obj5;
                } else {
                  c9 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback;
                  if (callback) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c9 = 0;
                    throwTypeErrorResult = closure_7;
                    const obj6 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj6[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    c9 = obj6;
                    throwTypeErrorResult = lib;
                    if (lib.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON15 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length15 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length15 = lib.responseTexts.length;
                    }
                    if (length15) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      const responseTexts8 = lib.responseTexts;
                      c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length16 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length16 = lib.toolCalls.length;
                    }
                    if (length16) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON16 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = c9;
                    throwTypeErrorResult = store.setAttributes(c9);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c12 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
              break;
              case 5:
                if (arg0 === 1) {
                  c12 = 3;
                  throw done;
                } else {
                  callback = done;
                  if (arg0 === 2) {
                    throwTypeErrorResult = value2;
                    c9 = 5;
                    throwTypeErrorResult = closure_4;
                    if (closure_4) {
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = null != closure_7.return;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_7;
                      c11 = 9;
                      c12 = 1;
                      const obj7 = { value: null, done: false };
                      obj7[0] = lib(closure_7.return());
                      return obj7;
                    } else {
                      c9 = 1;
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = callback;
                      if (callback) {
                        throwTypeErrorResult = closure_3;
                        throw closure_3;
                      } else {
                        c9 = 0;
                        throwTypeErrorResult = closure_7;
                        const obj8 = {};
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj8[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        c9 = obj8;
                        throwTypeErrorResult = lib;
                        if (lib.responseId) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (lib.responseModel) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (undefined !== lib.promptTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (undefined !== lib.completionTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (undefined !== lib.totalTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (lib.finishReasons.length) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON13 = JSON;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                        }
                        throwTypeErrorResult = value2;
                        let length13 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = lib;
                          length13 = lib.responseTexts.length;
                        }
                        if (length13) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          const responseTexts7 = lib.responseTexts;
                          c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                        }
                        throwTypeErrorResult = value2;
                        let length14 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = lib;
                          length14 = lib.toolCalls.length;
                        }
                        if (length14) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON14 = JSON;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = c9;
                        throwTypeErrorResult = store.setAttributes(c9);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = store.end();
                        c12 = 3;
                        throwTypeErrorResult = callback;
                        const obj9 = { value: null, done: true };
                        obj9[0] = callback;
                        return obj9;
                      }
                    }
                  } else {
                    throwTypeErrorResult = value2;
                    value = done;
                    const done2 = done.done;
                    closure_4 = !done2;
                    if (done2) {
                      c9 = 2;
                    } else {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = value;
                      value2 = value.value;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = callback(value2, lib, dependencyMap, store);
                      throwTypeErrorResult = value2;
                      c11 = 6;
                      c12 = 1;
                      throwTypeErrorResult = value2;
                      c9 = 6;
                      throwTypeErrorResult = closure_4;
                      if (closure_4) {
                        throwTypeErrorResult = closure_7;
                        throwTypeErrorResult = null != closure_7.return;
                      }
                      if (throwTypeErrorResult) {
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = closure_7;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = closure_7;
                        c11 = 11;
                        c12 = 1;
                        const obj10 = { value: null, done: false };
                        obj10[0] = lib(closure_7.return());
                        return obj10;
                      } else {
                        c9 = 1;
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = callback;
                        if (callback) {
                          throwTypeErrorResult = closure_3;
                          throw closure_3;
                        } else {
                          c9 = 0;
                          throwTypeErrorResult = closure_7;
                          const obj11 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          obj11[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                          c9 = obj11;
                          throwTypeErrorResult = lib;
                          if (lib.responseId) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = lib;
                            c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = lib;
                          if (lib.responseModel) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = lib;
                            c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = lib;
                          if (undefined !== lib.promptTokens) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = lib;
                            c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = lib;
                          if (undefined !== lib.completionTokens) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = lib;
                            c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = lib;
                          if (undefined !== lib.totalTokens) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = lib;
                            c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = lib;
                          if (lib.finishReasons.length) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            const _JSON9 = JSON;
                            throwTypeErrorResult = lib;
                            c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                          }
                          throwTypeErrorResult = value2;
                          let length9 = dependencyMap;
                          if (dependencyMap) {
                            throwTypeErrorResult = lib;
                            length9 = lib.responseTexts.length;
                          }
                          if (length9) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = lib;
                            const responseTexts5 = lib.responseTexts;
                            c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                          }
                          throwTypeErrorResult = value2;
                          let length10 = dependencyMap;
                          if (dependencyMap) {
                            throwTypeErrorResult = lib;
                            length10 = lib.toolCalls.length;
                          }
                          if (length10) {
                            throwTypeErrorResult = value2;
                            throwTypeErrorResult = closure_7;
                            throwTypeErrorResult = c9;
                            throwTypeErrorResult = store;
                            throwTypeErrorResult = dependencyMap;
                            const _JSON10 = JSON;
                            throwTypeErrorResult = lib;
                            c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                          }
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store.setAttributes(c9);
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
                    c9 = 7;
                    throwTypeErrorResult = closure_4;
                    if (closure_4) {
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = null != closure_7.return;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_7;
                      c11 = 13;
                      c12 = 1;
                      const obj13 = { value: null, done: false };
                      obj13[0] = lib(closure_7.return());
                      return obj13;
                    } else {
                      c9 = 1;
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = callback;
                      if (callback) {
                        throwTypeErrorResult = closure_3;
                        throw closure_3;
                      } else {
                        c9 = 0;
                        throwTypeErrorResult = closure_7;
                        const obj14 = {};
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj14[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        c9 = obj14;
                        throwTypeErrorResult = lib;
                        if (lib.responseId) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (lib.responseModel) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (undefined !== lib.promptTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (undefined !== lib.completionTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (undefined !== lib.totalTokens) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = lib;
                        if (lib.finishReasons.length) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON11 = JSON;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                        }
                        throwTypeErrorResult = value2;
                        let length11 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = lib;
                          length11 = lib.responseTexts.length;
                        }
                        if (length11) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = lib;
                          const responseTexts6 = lib.responseTexts;
                          c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                        }
                        throwTypeErrorResult = value2;
                        let length12 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = lib;
                          length12 = lib.toolCalls.length;
                        }
                        if (length12) {
                          throwTypeErrorResult = value2;
                          throwTypeErrorResult = closure_7;
                          throwTypeErrorResult = c9;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON12 = JSON;
                          throwTypeErrorResult = lib;
                          c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                        }
                        throwTypeErrorResult = value2;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = c9;
                        throwTypeErrorResult = store.setAttributes(c9);
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
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = closure_7;
                    c11 = 7;
                    c12 = 1;
                    const obj16 = { value: null, done: false };
                    obj16[0] = lib(closure_7.next());
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
                c9 = 1;
                throwTypeErrorResult = callback;
                if (callback) {
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
                  c9 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback;
                  if (callback) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c9 = 0;
                    throwTypeErrorResult = closure_7;
                    const obj17 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj17[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    c9 = obj17;
                    throwTypeErrorResult = lib;
                    if (lib.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON7 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length7 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length7 = lib.responseTexts.length;
                    }
                    if (length7) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      const responseTexts4 = lib.responseTexts;
                      c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length8 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length8 = lib.toolCalls.length;
                    }
                    if (length8) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON8 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = c9;
                    throwTypeErrorResult = store.setAttributes(c9);
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
                c9 = 1;
                throwTypeErrorResult = callback;
                if (callback) {
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
                  c9 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback;
                  if (callback) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c9 = 0;
                    throwTypeErrorResult = closure_7;
                    const obj19 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj19[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    c9 = obj19;
                    throwTypeErrorResult = lib;
                    if (lib.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON5 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length5 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length5 = lib.responseTexts.length;
                    }
                    if (length5) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      const responseTexts3 = lib.responseTexts;
                      c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length6 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length6 = lib.toolCalls.length;
                    }
                    if (length6) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON6 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = c9;
                    throwTypeErrorResult = store.setAttributes(c9);
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
                c9 = 1;
                throwTypeErrorResult = callback;
                if (callback) {
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
                  c9 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback;
                  if (callback) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c9 = 0;
                    const obj21 = {};
                    obj21[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    c9 = obj21;
                    if (lib.responseId) {
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON3 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length3 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length3 = lib.responseTexts.length;
                    }
                    if (length3) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      const responseTexts2 = lib.responseTexts;
                      c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length4 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length4 = lib.toolCalls.length;
                    }
                    if (length4) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON4 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = c9;
                    throwTypeErrorResult = store.setAttributes(c9);
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
                c9 = 1;
                if (callback) {
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
                  c9 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback;
                  if (callback) {
                    throw closure_3;
                  } else {
                    c9 = 0;
                    obj = {};
                    obj[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    c9 = obj;
                    if (lib.responseId) {
                      c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                    }
                    if (lib.responseModel) {
                      c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                    }
                    if (undefined !== lib.promptTokens) {
                      c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                    }
                    if (undefined !== lib.completionTokens) {
                      c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                    }
                    if (undefined !== lib.totalTokens) {
                      c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                    }
                    if (lib.finishReasons.length) {
                      const _JSON = JSON;
                      c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                    }
                    let length = dependencyMap;
                    if (dependencyMap) {
                      length = lib.responseTexts.length;
                    }
                    if (length) {
                      const responseTexts = lib.responseTexts;
                      c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                    }
                    let length2 = dependencyMap;
                    if (dependencyMap) {
                      length2 = lib.toolCalls.length;
                    }
                    if (length2) {
                      const _JSON2 = JSON;
                      c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                    }
                    store.setAttributes(c9);
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
                  c9 = 1;
                  throwTypeErrorResult = value2;
                  throwTypeErrorResult = callback;
                  if (callback) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c9 = 0;
                    throwTypeErrorResult = closure_7;
                    const obj24 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj24[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    c9 = obj24;
                    throwTypeErrorResult = lib;
                    if (lib.responseId) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = lib.responseId;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.responseModel) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = lib.responseModel;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.promptTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = lib.promptTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.completionTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = lib.completionTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (undefined !== lib.totalTokens) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = lib.totalTokens;
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = lib;
                    if (lib.finishReasons.length) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON19 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(lib.finishReasons);
                    }
                    throwTypeErrorResult = value2;
                    let length19 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length19 = lib.responseTexts.length;
                    }
                    if (length19) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      const responseTexts10 = lib.responseTexts;
                      c9[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                    }
                    throwTypeErrorResult = value2;
                    let length20 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = lib;
                      length20 = lib.toolCalls.length;
                    }
                    if (length20) {
                      throwTypeErrorResult = value2;
                      throwTypeErrorResult = closure_7;
                      throwTypeErrorResult = c9;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON20 = JSON;
                      throwTypeErrorResult = lib;
                      c9[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(lib.toolCalls);
                    }
                    throwTypeErrorResult = value2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = c9;
                    throwTypeErrorResult = store.setAttributes(c9);
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
            throwTypeErrorResult = c9;
            if (tmp5 === c9) {
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