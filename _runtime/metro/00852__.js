// _runtime/metro/00852__.js
import SPAN_STATUS_ERROR from "../00716_SPAN_STATUS_ERROR.js";
import _mod745 from "00745__.js";
import _awaitAsyncGenerator from "../00842__awaitAsyncGenerator.js";
import _wrapAsyncGenerator from "../00844__wrapAsyncGenerator.js";

let c11, c12, closure_10;

function AsyncFromSyncIterator(arg0) {
  class AsyncFromSyncIterator {
    constructor(arg0) {}
  }
  AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next() {
      let rejectResult;
      const n = this.n;
      const iter = n(...arguments);
      if (Object(iter) !== iter) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError(iter + " is not an object.");
        rejectResult = reject(typeError);
      } else {
        const done = iter.done;
        const resolved = Promise.resolve(iter.value);
        rejectResult = resolved.then((value) => ({ value, done }));
      }
      return rejectResult;
    },
    return: function (value) {
      let resolved;
      const _return = this.s.return;
      if (undefined === _return) {
        obj = { value, done: true };
        resolved = Promise.resolve(obj);
      } else {
        const iter = _return(...arguments);
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(iter + " is not an object.");
          resolved = reject(typeError);
        } else {
          const done = iter.done;
          const resolved1 = Promise.resolve(iter.value);
          resolved = resolved1.then((value) => ({ value, done }));
        }
      }
      return resolved;
    },
    throw: function (arg0) {
      let rejectResult;
      const _return = this.s.return;
      if (undefined === _return) {
        rejectResult = Promise.reject(arg0);
      } else {
        const iter = _return(...arguments);
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(iter + " is not an object.");
          rejectResult = reject(typeError);
        } else {
          const done = iter.done;
          const resolved = Promise.resolve(iter.value);
          rejectResult = resolved.then((value) => ({ value, done }));
        }
      }
      return rejectResult;
    },
  };
  const tmp = new AsyncFromSyncIterator(arg0);
  return tmp;
}
function processChunk(promptFeedback, toolCalls, arg2, setStatus) {
  function handleCandidateContent(functionCalls, toolCalls, arg2) {
    if (Array.isArray(functionCalls.functionCalls)) {
      toolCalls = toolCalls.toolCalls;
      const push = toolCalls.push;
      const items = [];
      HermesBuiltin.arraySpread(items, functionCalls.functionCalls, 0);
      HermesBuiltin.apply(push, items, toolCalls);
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
        let finishReasons = toolCalls.finishReasons;
        finishReason = !finishReasons.includes(item10027.finishReason);
      }
      if (finishReason) {
        let finishReasons1 = toolCalls.finishReasons;
        let arr = finishReasons1.push(item10027.finishReason);
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
        let text = arg2 && item10050.text;
        if (text) {
          let responseTexts = toolCalls.responseTexts;
          let arr2 = responseTexts.push(item10050.text);
        }
        if (item10050.functionCall) {
          let toolCalls1 = toolCalls.toolCalls;
          obj = {
            type: "function",
            id: item10050.functionCall.id,
            name: item10050.functionCall.name,
            arguments: item10050.functionCall.args,
          };
          let arr3 = toolCalls1.push(obj);
        }
        continue;
      }
      continue;
    }
  }
  let tmp = promptFeedback;
  if (tmp) {
    promptFeedback = undefined;
    if (promptFeedback != null) {
      promptFeedback = promptFeedback.promptFeedback;
    }
    let blockReason1;
    if (promptFeedback != null) {
      blockReason1 = promptFeedback.blockReason;
    }
    let flag = false;
    if (blockReason1) {
      let blockReason = promptFeedback.blockReasonMessage;
      if (blockReason == null) {
        blockReason = promptFeedback.blockReason;
      }
      obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "Content blocked: " + blockReason };
      setStatus = setStatus.setStatus;
      const _HermesInternal = HermesInternal;
      setStatus(obj);
      const _HermesInternal2 = HermesInternal;
      const obj3 = { mechanism: { handled: false, type: "auto.ai.google_genai" } };
      const obj2 = _mod745;
      obj2.captureException("Content blocked: " + blockReason, obj3);
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
    handleCandidateContent(promptFeedback, toolCalls, arg2);
  }
}
let obj = function _instrumentStream() {
  obj = _wrapAsyncGenerator(async (arg0, arg1, arg2) => {
    let tmp;
    let tmp3;
    function _asyncIterator(arg0) {
      let str;
      let str2;
      if (typeof Symbol !== "undefined") {
        const _Symbol = Symbol;
        str2 = Symbol.asyncIterator;
        const _Symbol2 = Symbol;
        str = Symbol.iterator;
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
          let obj2 = arg0[str];
          if (null != obj2) {
            let callResult = obj2.call(arg0);
            let self3 = this;
            let self4 = this;
            let tmp62 = new value2(callResult);
            return tmp62;
          }
        }
        num = num - 1;
        str = "@@iterator";
        str2 = "@@asyncIterator";
        if (tmp) {
          continue;
        } else {
          let _TypeError = TypeError;
          let self = this;
          let str3 = "Object is not async iterable";
          let self2 = this;
          let typeError = new TypeError("Object is not async iterable");
          throw typeError;
        }
      }
      return obj.call(arg0);
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c12 === 2) {
      c12 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let str2 = "";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c9;
        try {
          let closure_7;
          let closure_3;
          let value4;
          let value5;
          let obj28;
          let obj4;
          let closure_4;
          let c5;
          let iter;
          let num = 2;
          c12 = 2;
          switch (c11) {
            case 0: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_7 = tmp;
                let closure_8 = tmp4;
                closure_0 = closure_1;
                closure_1 = closure_2;
                closure_3 = undefined;
                value4 = undefined;
                value5 = undefined;
                obj28 = undefined;
                obj4 = { responseTexts: [], finishReasons: [], toolCalls: [] };
                closure_4 = false;
                c5 = false;
                c9 = 4;
                iter = _asyncIterator(closure_0);
                c11 = 5;
                c12 = 1;
                const obj5 = { value: _awaitAsyncGenerator(iter.next()), done: false };
                return obj5;
              }
              break;
            }
            case 1: {
              c9 = 0;
              const obj6 = {};
              obj6[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              obj28 = obj6;
              const tmp682 = closure_10;
              if (obj4.responseId) {
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
              }
              if (obj4.responseModel) {
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
              }
              if (undefined !== obj4.promptTokens) {
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
              }
              if (undefined !== obj4.completionTokens) {
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj4.completionTokens;
              }
              if (undefined !== obj4.totalTokens) {
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
              }
              if (obj4.finishReasons.length) {
                const _JSON17 = JSON;
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  obj4.finishReasons,
                );
              }
              const length17 = closure_1 && obj4.responseTexts.length;
              if (length17) {
                const responseTexts9 = obj4.responseTexts;
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
              }
              const length18 = closure_1 && obj4.toolCalls.length;
              if (length18) {
                const _JSON18 = JSON;
                obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                  obj4.toolCalls,
                );
              }
              closure_0.setAttributes(obj28);
              closure_0.end();
              throw tmp682;
            }
            case 2: {
              value4 = closure_10;
              c9 = 3;
              const tmp674 = closure_4 && null != iter.return;
              if (!tmp674) {
                c9 = 1;
                const tmp756 = c5;
                if (tmp756) {
                  throw closure_3;
                } else {
                  throw value4;
                }
              } else {
                c11 = 16;
                c12 = 1;
                const obj7 = { value: closure_135_2(iter.return()), done: false };
                return obj7;
              }
              break;
            }
            case 3: {
              c9 = 1;
              const tmp669 = c5;
              if (tmp669) {
                throw closure_3;
              } else {
                throw tmp667;
              }
              break;
            }
            case 4: {
              c5 = true;
              closure_3 = closure_10;
              c9 = 8;
              const tmp585 = closure_4 && null != iter.return;
              if (tmp585) {
                c11 = 15;
                c12 = 1;
                const obj8 = { value: closure_135_2(iter.return()), done: false };
                return obj8;
              } else {
                c9 = 1;
                const tmp588 = c5;
                if (tmp588) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  const obj9 = {};
                  obj9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj28 = obj9;
                  if (obj4.responseId) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                  }
                  if (obj4.responseModel) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                  }
                  if (undefined !== obj4.promptTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                  }
                  if (undefined !== obj4.completionTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj4.completionTokens;
                  }
                  if (undefined !== obj4.totalTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                  }
                  if (obj4.finishReasons.length) {
                    const _JSON15 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj4.finishReasons,
                    );
                  }
                  const length15 = closure_1 && obj4.responseTexts.length;
                  if (length15) {
                    const responseTexts8 = obj4.responseTexts;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                  }
                  const length16 = closure_1 && obj4.toolCalls.length;
                  if (length16) {
                    const _JSON16 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj4.toolCalls,
                    );
                  }
                  closure_0.setAttributes(obj28);
                  closure_0.end();
                  c12 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              break;
            }
            case 5: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else {
                const value3 = value;
                if (arg0 === 2) {
                  c9 = 5;
                  const tmp499 = closure_4 && null != iter.return;
                  if (tmp499) {
                    c11 = 9;
                    c12 = 1;
                    const obj10 = { value: closure_135_2(iter.return()), done: false };
                    return obj10;
                  } else {
                    c9 = 1;
                    const tmp502 = c5;
                    if (tmp502) {
                      throw closure_3;
                    } else {
                      c9 = 0;
                      const obj11 = {};
                      obj11[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      obj28 = obj11;
                      if (obj4.responseId) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                      }
                      if (obj4.responseModel) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                      }
                      if (undefined !== obj4.promptTokens) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                      }
                      if (undefined !== obj4.completionTokens) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                          obj4.completionTokens;
                      }
                      if (undefined !== obj4.totalTokens) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                      }
                      if (obj4.finishReasons.length) {
                        const _JSON13 = JSON;
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(obj4.finishReasons);
                      }
                      const length13 = closure_1 && obj4.responseTexts.length;
                      if (length13) {
                        const responseTexts7 = obj4.responseTexts;
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                      }
                      const length14 = closure_1 && obj4.toolCalls.length;
                      if (length14) {
                        const _JSON14 = JSON;
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                          obj4.toolCalls,
                        );
                      }
                      closure_0.setAttributes(obj28);
                      closure_0.end();
                      c12 = 3;
                      const obj12 = { value: value3, done: true };
                      return obj12;
                    }
                  }
                } else {
                  value4 = value;
                  const done2 = value.done;
                  closure_4 = !done2;
                  if (done2) {
                    c9 = 2;
                  } else {
                    value5 = value4.value;
                    closure_135_5(value5, obj4, closure_1, closure_0);
                    c11 = 6;
                    c12 = 1;
                    const obj13 = { value: value5, done: false };
                    return obj13;
                  }
                }
              }
              break;
            }
            case 6: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 7;
                const tmp406 = closure_4 && null != iter.return;
                if (tmp406) {
                  c11 = 13;
                  c12 = 1;
                  const obj14 = { value: closure_135_2(iter.return()), done: false };
                  return obj14;
                } else {
                  c9 = 1;
                  const tmp409 = c5;
                  if (tmp409) {
                    throw closure_3;
                  } else {
                    c9 = 0;
                    const obj15 = {};
                    obj15[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    obj28 = obj15;
                    if (obj4.responseId) {
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                    }
                    if (obj4.responseModel) {
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                    }
                    if (undefined !== obj4.promptTokens) {
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                    }
                    if (undefined !== obj4.completionTokens) {
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                        obj4.completionTokens;
                    }
                    if (undefined !== obj4.totalTokens) {
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                    }
                    if (obj4.finishReasons.length) {
                      const _JSON11 = JSON;
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                        obj4.finishReasons,
                      );
                    }
                    const length11 = closure_1 && obj4.responseTexts.length;
                    if (length11) {
                      const responseTexts6 = obj4.responseTexts;
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                    }
                    const length12 = closure_1 && obj4.toolCalls.length;
                    if (length12) {
                      const _JSON12 = JSON;
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                        obj4.toolCalls,
                      );
                    }
                    closure_0.setAttributes(obj28);
                    closure_0.end();
                    c12 = 3;
                    const obj16 = { value, done: true };
                    return obj16;
                  }
                }
              } else {
                closure_4 = false;
                c11 = 7;
                c12 = 1;
                const obj17 = { value: closure_135_2(iter.next()), done: false };
                return obj17;
              }
              break;
            }
            case 7: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else {
                const value2 = value;
                if (arg0 === 2) {
                  c9 = 6;
                  const tmp319 = closure_4 && null != iter.return;
                  if (tmp319) {
                    c11 = 11;
                    c12 = 1;
                    const obj18 = { value: closure_135_2(iter.return()), done: false };
                    return obj18;
                  } else {
                    c9 = 1;
                    const tmp322 = c5;
                    if (tmp322) {
                      throw closure_3;
                    } else {
                      c9 = 0;
                      const obj19 = {};
                      obj19[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      obj28 = obj19;
                      if (obj4.responseId) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                      }
                      if (obj4.responseModel) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                      }
                      if (undefined !== obj4.promptTokens) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                      }
                      if (undefined !== obj4.completionTokens) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                          obj4.completionTokens;
                      }
                      if (undefined !== obj4.totalTokens) {
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                      }
                      if (obj4.finishReasons.length) {
                        const _JSON9 = JSON;
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(obj4.finishReasons);
                      }
                      const length9 = closure_1 && obj4.responseTexts.length;
                      if (length9) {
                        const responseTexts5 = obj4.responseTexts;
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                      }
                      const length10 = closure_1 && obj4.toolCalls.length;
                      if (length10) {
                        const _JSON10 = JSON;
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                          obj4.toolCalls,
                        );
                      }
                      closure_0.setAttributes(obj28);
                      closure_0.end();
                      c12 = 3;
                      const obj20 = { value: value2, done: true };
                      return obj20;
                    }
                  }
                } else {
                  value4 = value;
                  const done = value.done;
                  closure_4 = !done;
                }
              }
              break;
            }
            case 8: {
              c9 = 1;
              const tmp315 = c5;
              if (tmp315) {
                throw closure_3;
              } else {
                throw tmp313;
              }
              break;
            }
            case 9: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp849 = c5;
                if (tmp849) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  const obj21 = {};
                  obj21[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj28 = obj21;
                  if (obj4.responseId) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                  }
                  if (obj4.responseModel) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                  }
                  if (undefined !== obj4.promptTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                  }
                  if (undefined !== obj4.completionTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj4.completionTokens;
                  }
                  if (undefined !== obj4.totalTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                  }
                  if (obj4.finishReasons.length) {
                    const _JSON7 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj4.finishReasons,
                    );
                  }
                  const length7 = closure_1 && obj4.responseTexts.length;
                  if (length7) {
                    const responseTexts4 = obj4.responseTexts;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                  }
                  const length8 = closure_1 && obj4.toolCalls.length;
                  if (length8) {
                    const _JSON8 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj4.toolCalls,
                    );
                  }
                  closure_0.setAttributes(obj28);
                  closure_0.end();
                  c12 = 3;
                  const obj22 = { value, done: true };
                  return obj22;
                }
              }
              break;
            }
            case 10: {
              c9 = 1;
              const tmp237 = c5;
              if (tmp237) {
                throw closure_3;
              } else {
                throw tmp235;
              }
              break;
            }
            case 11: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp847 = c5;
                if (tmp847) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  const obj23 = {};
                  obj23[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj28 = obj23;
                  if (obj4.responseId) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                  }
                  if (obj4.responseModel) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                  }
                  if (undefined !== obj4.promptTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                  }
                  if (undefined !== obj4.completionTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj4.completionTokens;
                  }
                  if (undefined !== obj4.totalTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                  }
                  if (obj4.finishReasons.length) {
                    const _JSON5 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj4.finishReasons,
                    );
                  }
                  const length5 = closure_1 && obj4.responseTexts.length;
                  if (length5) {
                    const responseTexts3 = obj4.responseTexts;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                  }
                  const length6 = closure_1 && obj4.toolCalls.length;
                  if (length6) {
                    const _JSON6 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj4.toolCalls,
                    );
                  }
                  closure_0.setAttributes(obj28);
                  closure_0.end();
                  c12 = 3;
                  const obj24 = { value, done: true };
                  return obj24;
                }
              }
              break;
            }
            case 12: {
              c9 = 1;
              const tmp159 = c5;
              if (tmp159) {
                throw closure_3;
              } else {
                throw tmp157;
              }
              break;
            }
            case 13: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp845 = c5;
                if (tmp845) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  const obj25 = {};
                  obj25[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj28 = obj25;
                  if (obj4.responseId) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                  }
                  if (obj4.responseModel) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                  }
                  if (undefined !== obj4.promptTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                  }
                  if (undefined !== obj4.completionTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj4.completionTokens;
                  }
                  if (undefined !== obj4.totalTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                  }
                  if (obj4.finishReasons.length) {
                    const _JSON3 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj4.finishReasons,
                    );
                  }
                  const length3 = closure_1 && obj4.responseTexts.length;
                  if (length3) {
                    const responseTexts2 = obj4.responseTexts;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                  }
                  const length4 = closure_1 && obj4.toolCalls.length;
                  if (length4) {
                    const _JSON4 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj4.toolCalls,
                    );
                  }
                  closure_0.setAttributes(obj28);
                  closure_0.end();
                  c12 = 3;
                  const obj26 = { value, done: true };
                  return obj26;
                }
              }
              break;
            }
            case 14: {
              c9 = 1;
              const tmp81 = c5;
              if (tmp81) {
                throw closure_3;
              } else {
                throw tmp79;
              }
              break;
            }
            case 15: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp843 = c5;
                if (tmp843) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  let tmp5 = closure_7;
                  obj = {};
                  obj[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  obj28 = obj;
                  let tmp8 = obj4;
                  if (obj4.responseId) {
                    let tmp10 = closure_7;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                  }
                  if (obj4.responseModel) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                  }
                  if (undefined !== obj4.promptTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                  }
                  if (undefined !== obj4.completionTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj4.completionTokens;
                  }
                  if (undefined !== obj4.totalTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                  }
                  if (obj4.finishReasons.length) {
                    const _JSON = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj4.finishReasons,
                    );
                  }
                  const length = closure_1 && obj4.responseTexts.length;
                  if (length) {
                    let tmp62 = obj4;
                    const responseTexts = obj4.responseTexts;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                  }
                  const length2 = closure_1 && obj4.toolCalls.length;
                  if (length2) {
                    const _JSON2 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj4.toolCalls,
                    );
                  }
                  closure_0.setAttributes(obj28);
                  closure_0.end();
                  c12 = 3;
                  const obj27 = { value, done: true };
                  return obj27;
                }
              }
              break;
            }
            default: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp760 = c5;
                if (tmp760) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  obj28 = {};
                  obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  if (obj4.responseId) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj4.responseId;
                  }
                  if (obj4.responseModel) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj4.responseModel;
                  }
                  if (undefined !== obj4.promptTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = obj4.promptTokens;
                  }
                  if (undefined !== obj4.completionTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = obj4.completionTokens;
                  }
                  if (undefined !== obj4.totalTokens) {
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = obj4.totalTokens;
                  }
                  if (obj4.finishReasons.length) {
                    const _JSON19 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj4.finishReasons,
                    );
                  }
                  const length19 = closure_1 && obj4.responseTexts.length;
                  if (length19) {
                    const responseTexts10 = obj4.responseTexts;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                  }
                  const length20 = closure_1 && obj4.toolCalls.length;
                  if (length20) {
                    const _JSON20 = JSON;
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj4.toolCalls,
                    );
                  }
                  closure_0.setAttributes(obj28);
                  closure_0.end();
                  c12 = 3;
                  const obj29 = { value, done: true };
                  return obj29;
                }
              }
              break;
            }
          }
        } catch (tmp834) {
          closure_10 = tmp834;
          if (0 === c9) {
            c12 = 3;
            throw tmp834;
          } else if (1 === c9) {
            c11 = 1;
          } else if (2 === c9) {
            c11 = 2;
          } else if (3 === c9) {
            c11 = 3;
          } else if (4 === c9) {
            c11 = 4;
          } else if (5 === c9) {
            c11 = 8;
          } else if (6 === c9) {
            c11 = 10;
          } else if (7 === c9) {
            c11 = 12;
          } else {
            c11 = 14;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentStream = function instrumentStream(arg0, arg1, arg2) {
  return obj(...arguments);
};
