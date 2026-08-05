// _runtime/00976_AsyncFromSyncIterator.js
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
      obj[0] = require("00840_getSpanStatusFromHttpCode.js") /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR;
      const _HermesInternal = HermesInternal;
      obj[1] = "Content blocked: " + blockReason;
      setStatus.setStatus(obj);
      const _HermesInternal2 = HermesInternal;
      obj = { mechanism: null };
      obj[0] = { handled: false, type: "auto.ai.google_genai" };
      require("00869_captureCheckIn.js") /* captureCheckIn */.captureException("Content blocked: " + blockReason, obj);
      flag = true;
      const obj2 = require("00869_captureCheckIn.js") /* captureCheckIn */;
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
    return (function*(arg0, arg1, arg2) {
      if (c12 === 2) {
        c12 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp13;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp14 === 3) {
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
              c12 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              while (true) {
                obj = 1;
                let tmp88 = closure_8;
                let tmp89 = closure_5;
                if (closure_5) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  obj = 0;
                  let tmp90 = closure_7;
                  obj = {};
                  let tmp91 = store;
                  let tmp92 = dependencyMap;
                  obj[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  let tmp93 = closure_2;
                  if (closure_2.responseId) {
                    let tmp94 = closure_8;
                    let tmp95 = closure_7;
                    let tmp96 = obj;
                    let tmp97 = store;
                    let tmp98 = dependencyMap;
                    let tmp99 = closure_2;
                    obj[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_2.responseId;
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = closure_2;
                  if (closure_2.responseModel) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_2;
                    obj[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_2.responseModel;
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = closure_2;
                  if (undefined !== closure_2.promptTokens) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_2;
                    obj[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = closure_2.promptTokens;
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = closure_2;
                  if (undefined !== closure_2.completionTokens) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_2;
                    obj[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = closure_2.completionTokens;
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = closure_2;
                  if (undefined !== closure_2.totalTokens) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_2;
                    obj[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = closure_2.totalTokens;
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = closure_2;
                  if (closure_2.finishReasons.length) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let _JSON3 = JSON;
                    throwTypeErrorResult = closure_2;
                    obj[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_2.finishReasons);
                  }
                  throwTypeErrorResult = closure_8;
                  let length3 = dependencyMap;
                  if (dependencyMap) {
                    throwTypeErrorResult = closure_2;
                    length3 = closure_2.responseTexts.length;
                  }
                  if (length3) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_2;
                    let responseTexts2 = closure_2.responseTexts;
                    obj[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                  }
                  throwTypeErrorResult = closure_8;
                  let length4 = dependencyMap;
                  if (dependencyMap) {
                    throwTypeErrorResult = closure_2;
                    length4 = closure_2.toolCalls.length;
                  }
                  if (length4) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = obj;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let _JSON4 = JSON;
                    throwTypeErrorResult = closure_2;
                    obj[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_2.toolCalls);
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = obj;
                  throwTypeErrorResult = store.setAttributes(obj);
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = store.end();
                  let num3 = 3;
                  c12 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            } else {
              obj = 1;
              throwTypeErrorResult = closure_8;
              throwTypeErrorResult = closure_5;
              if (closure_5) {
                throw closure_3;
              } else {
                obj = 0;
                obj = {};
                obj[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                if (closure_2.responseId) {
                  obj[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_2.responseId;
                }
                if (closure_2.responseModel) {
                  obj[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_2.responseModel;
                }
                if (undefined !== closure_2.promptTokens) {
                  obj[store(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = closure_2.promptTokens;
                }
                if (undefined !== closure_2.completionTokens) {
                  obj[store(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = closure_2.completionTokens;
                }
                if (undefined !== closure_2.totalTokens) {
                  obj[store(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = closure_2.totalTokens;
                }
                if (closure_2.finishReasons.length) {
                  const _JSON = JSON;
                  obj[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_2.finishReasons);
                }
                let length = dependencyMap;
                if (dependencyMap) {
                  length = closure_2.responseTexts.length;
                }
                if (length) {
                  const responseTexts = closure_2.responseTexts;
                  obj[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                }
                let length2 = dependencyMap;
                if (dependencyMap) {
                  length2 = closure_2.toolCalls.length;
                }
                if (length2) {
                  const _JSON2 = JSON;
                  obj[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_2.toolCalls);
                }
                store.setAttributes(obj);
                store.end();
                c12 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              }
            }
          } catch (throwTypeErrorResult) {
            let closure_10 = throwTypeErrorResult;
            throwTypeErrorResult = obj;
            if (tmp4 === obj) {
              throwTypeErrorResult = tmp3;
              c12 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              let c11 = tmp2;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c11 = throwTypeErrorResult;
            } else if (tmp3 === throwTypeErrorResult) {
              c11 = tmp3;
            } else if (tmp12 === throwTypeErrorResult) {
              c11 = tmp12;
            } else if (tmp5 === throwTypeErrorResult) {
              c11 = tmp11;
            } else if (tmp6 === throwTypeErrorResult) {
              c11 = tmp10;
            } else if (tmp7 === throwTypeErrorResult) {
              c11 = tmp9;
            } else {
              c11 = tmp8;
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