// === Module 976: AsyncFromSyncIterator ===

// Module 976 (AsyncFromSyncIterator)
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 840 */;
import captureCheckIn from "captureCheckIn" /* 869 */;
import _awaitAsyncGenerator from "_awaitAsyncGenerator" /* 966 */;
import AsyncGenerator from "AsyncGenerator" /* 968 */;

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
        let finishReason;
        if (item10027 != null) {
          finishReason = item10027.finishReason;
        }
        if (finishReason) {
          let finishReasons = arg1.finishReasons;
          finishReason = !finishReasons.includes(item10027.finishReason);
        }
        if (finishReason) {
          finishReasons = arg1.finishReasons;
          let arr = finishReasons.push(item10027.finishReason);
        }
        let parts;
        if (item10027 != null) {
          let content = item10027.content;
          if (content != null) {
            parts = content.parts;
          }
        }
        if (parts == null) {
          parts = [];
        }
        for (const item10050 of parts) {
          let text = arg2;
          if (arg2) {
            text = item10050.text;
          }
          if (text) {
            let responseTexts = arg1.responseTexts;
            arr = responseTexts.push(item10050.text);
          }
          if (item10050.functionCall) {
            let toolCalls1 = arg1.toolCalls;
            let obj = { type: "function", id: null, name: null, arguments: null };
            obj[1] = item10050.functionCall.id;
            obj[2] = item10050.functionCall.name;
            obj[3] = item10050.functionCall.args;
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
  let tmp = AsyncGenerator((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c11 = 0;
    c12 = 0;
    c9 = 0;
    return (function*(arg0, done) {
      if (c12 === 2) {
        c12 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp15 === 3) {
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
                const store = dependencyMap;
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
                        let tmp10 = closure_4;
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
                c11 = 5;
                c12 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(iter.next());
                return obj2;
              }
            break;
            case 1:
              obj24 = 0;
              const obj3 = {};
              obj3[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              obj24 = obj3;
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
                const _JSON17 = JSON;
                obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
              }
              let length17 = dependencyMap;
              if (dependencyMap) {
                length17 = obj1.responseTexts.length;
              }
              if (length17) {
                const responseTexts9 = obj1.responseTexts;
                obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
              }
              let length18 = dependencyMap;
              if (dependencyMap) {
                length18 = obj1.toolCalls.length;
              }
              if (length18) {
                const _JSON18 = JSON;
                obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
              }
              store.setAttributes(obj24);
              store.end();
              throw closure_10;
            case 2:
              value = closure_10;
              obj24 = 3;
              let tmp687 = closure_4;
              if (closure_4) {
                tmp687 = null != iter.return;
              }
              if (!tmp687) {
                obj24 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  throw value;
                }
              } else {
                c11 = 16;
                c12 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = obj1(iter.return());
                return obj4;
              }
            break;
            case 3:
              obj24 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp680;
              }
            break;
            case 4:
              obj24 = 2;
              callback2 = true;
              closure_3 = closure_10;
              obj24 = 8;
              let tmp598 = closure_4;
              if (closure_4) {
                tmp598 = null != iter.return;
              }
              if (tmp598) {
                c11 = 15;
                c12 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = obj1(iter.return());
                return obj5;
              } else {
                obj24 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  obj24 = 0;
                  const obj6 = {};
                  obj6[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj24 = obj6;
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
                    const _JSON15 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                  }
                  let length15 = dependencyMap;
                  if (dependencyMap) {
                    length15 = obj1.responseTexts.length;
                  }
                  if (length15) {
                    const responseTexts8 = obj1.responseTexts;
                    obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                  }
                  let length16 = dependencyMap;
                  if (dependencyMap) {
                    length16 = obj1.toolCalls.length;
                  }
                  if (length16) {
                    const _JSON16 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                  }
                  store.setAttributes(obj24);
                  store.end();
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
                  obj24 = 5;
                  let tmp512 = closure_4;
                  if (closure_4) {
                    tmp512 = null != iter.return;
                  }
                  if (tmp512) {
                    c11 = 9;
                    c12 = 1;
                    const obj7 = { value: null, done: false };
                    obj7[0] = obj1(iter.return());
                    return obj7;
                  } else {
                    obj24 = 1;
                    if (callback2) {
                      throw closure_3;
                    } else {
                      obj24 = 0;
                      const obj8 = {};
                      obj8[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      obj24 = obj8;
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
                        const _JSON13 = JSON;
                        obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      }
                      let length13 = dependencyMap;
                      if (dependencyMap) {
                        length13 = obj1.responseTexts.length;
                      }
                      if (length13) {
                        const responseTexts7 = obj1.responseTexts;
                        obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                      }
                      let length14 = dependencyMap;
                      if (dependencyMap) {
                        length14 = obj1.toolCalls.length;
                      }
                      if (length14) {
                        const _JSON14 = JSON;
                        obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                      }
                      store.setAttributes(obj24);
                      store.end();
                      c12 = 3;
                      const obj9 = { value: null, done: true };
                      obj9[0] = callback2;
                      return obj9;
                    }
                  }
                } else {
                  value = done;
                  const done2 = done.done;
                  closure_4 = !done2;
                  if (done2) {
                    obj24 = 2;
                  } else {
                    value2 = value.value;
                    callback2(value2, obj1, dependencyMap, store);
                    c11 = 6;
                    c12 = 1;
                    obj24 = 6;
                    let tmp331 = closure_4;
                    if (closure_4) {
                      tmp331 = null != iter.return;
                    }
                    if (tmp331) {
                      c11 = 11;
                      c12 = 1;
                      const obj10 = { value: null, done: false };
                      obj10[0] = obj1(iter.return());
                      return obj10;
                    } else {
                      obj24 = 1;
                      if (callback2) {
                        throw closure_3;
                      } else {
                        obj24 = 0;
                        const obj11 = {};
                        obj11[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        obj24 = obj11;
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
                          const _JSON9 = JSON;
                          obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        }
                        let length9 = dependencyMap;
                        if (dependencyMap) {
                          length9 = obj1.responseTexts.length;
                        }
                        if (length9) {
                          const responseTexts5 = obj1.responseTexts;
                          obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                        }
                        let length10 = dependencyMap;
                        if (dependencyMap) {
                          length10 = obj1.toolCalls.length;
                        }
                        if (length10) {
                          const _JSON10 = JSON;
                          obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                        }
                        store.setAttributes(obj24);
                        store.end();
                        c12 = 3;
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
                  obj24 = 7;
                  let tmp418 = closure_4;
                  if (closure_4) {
                    tmp418 = null != iter.return;
                  }
                  if (tmp418) {
                    c11 = 13;
                    c12 = 1;
                    const obj13 = { value: null, done: false };
                    obj13[0] = obj1(iter.return());
                    return obj13;
                  } else {
                    obj24 = 1;
                    if (callback2) {
                      throw closure_3;
                    } else {
                      obj24 = 0;
                      const obj14 = {};
                      obj14[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      obj24 = obj14;
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
                        const _JSON11 = JSON;
                        obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      }
                      let length11 = dependencyMap;
                      if (dependencyMap) {
                        length11 = obj1.responseTexts.length;
                      }
                      if (length11) {
                        const responseTexts6 = obj1.responseTexts;
                        obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                      }
                      let length12 = dependencyMap;
                      if (dependencyMap) {
                        length12 = obj1.toolCalls.length;
                      }
                      if (length12) {
                        const _JSON12 = JSON;
                        obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                      }
                      store.setAttributes(obj24);
                      store.end();
                      c12 = 3;
                      const obj15 = { value: null, done: true };
                      obj15[0] = closure_3;
                      return obj15;
                    }
                  }
                } else {
                  closure_4 = false;
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
                  value = done;
                  done = done.done;
                  closure_4 = !done;
                }
              }
            break;
            case 8:
              obj24 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp325;
              }
            break;
            case 9:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                obj24 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  obj24 = 0;
                  const obj17 = {};
                  obj17[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj24 = obj17;
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
                    const _JSON7 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                  }
                  let length7 = dependencyMap;
                  if (dependencyMap) {
                    length7 = obj1.responseTexts.length;
                  }
                  if (length7) {
                    const responseTexts4 = obj1.responseTexts;
                    obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                  }
                  let length8 = dependencyMap;
                  if (dependencyMap) {
                    length8 = obj1.toolCalls.length;
                  }
                  if (length8) {
                    const _JSON8 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                  }
                  store.setAttributes(obj24);
                  store.end();
                  c12 = 3;
                  const obj18 = { value: null, done: true };
                  obj18[0] = done;
                  return obj18;
                }
              }
            break;
            case 10:
              obj24 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp247;
              }
            break;
            case 11:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                obj24 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  obj24 = 0;
                  const obj19 = {};
                  obj19[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj24 = obj19;
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
                    const _JSON5 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                  }
                  let length5 = dependencyMap;
                  if (dependencyMap) {
                    length5 = obj1.responseTexts.length;
                  }
                  if (length5) {
                    const responseTexts3 = obj1.responseTexts;
                    obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                  }
                  let length6 = dependencyMap;
                  if (dependencyMap) {
                    length6 = obj1.toolCalls.length;
                  }
                  if (length6) {
                    const _JSON6 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                  }
                  store.setAttributes(obj24);
                  store.end();
                  c12 = 3;
                  const obj20 = { value: null, done: true };
                  obj20[0] = done;
                  return obj20;
                }
              }
            break;
            case 12:
              obj24 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp169;
              }
            break;
            case 13:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                obj24 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  obj24 = 0;
                  const obj21 = {};
                  obj21[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj24 = obj21;
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
                    const _JSON3 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                  }
                  let length3 = dependencyMap;
                  if (dependencyMap) {
                    length3 = obj1.responseTexts.length;
                  }
                  if (length3) {
                    const responseTexts2 = obj1.responseTexts;
                    obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                  }
                  let length4 = dependencyMap;
                  if (dependencyMap) {
                    length4 = obj1.toolCalls.length;
                  }
                  if (length4) {
                    const _JSON4 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                  }
                  store.setAttributes(obj24);
                  store.end();
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
                if (callback2) {
                  throw closure_3;
                } else {
                  obj24 = 0;
                  obj24 = {};
                  obj24[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
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
                    const _JSON19 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                  }
                  let length19 = dependencyMap;
                  if (dependencyMap) {
                    length19 = obj1.responseTexts.length;
                  }
                  if (length19) {
                    const responseTexts10 = obj1.responseTexts;
                    obj24[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                  }
                  let length20 = dependencyMap;
                  if (dependencyMap) {
                    length20 = obj1.toolCalls.length;
                  }
                  if (length20) {
                    const _JSON20 = JSON;
                    obj24[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                  }
                  store.setAttributes(obj24);
                  store.end();
                  c12 = 3;
                  const obj25 = { value: null, done: true };
                  obj25[0] = done;
                  return obj25;
                }
              }
          }
        } catch (tmp847) {
          closure_10 = tmp847;
          if (tmp5 === obj24) {
            c12 = tmp3;
            throw tmp847;
          } else if (tmp2 === tmp849) {
            c11 = tmp2;
          } else if (tmp === tmp849) {
            c11 = tmp;
          } else if (tmp3 === tmp849) {
            c11 = tmp3;
          } else if (tmp13 === tmp849) {
            c11 = tmp13;
          } else if (tmp6 === tmp849) {
            c11 = tmp12;
          } else if (tmp7 === tmp849) {
            c11 = tmp11;
          } else if (tmp8 === tmp849) {
            c11 = tmp10;
          } else {
            c11 = tmp9;
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