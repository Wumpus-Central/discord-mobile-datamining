// _runtime/metro/00841__.js
import SPAN_STATUS_ERROR from "../00705_SPAN_STATUS_ERROR.js";
import captureCheckIn from "../00734_captureCheckIn.js";
import _awaitAsyncGenerator from "../00831__awaitAsyncGenerator.js";
import AsyncGenerator from "../00833_AsyncGenerator.js";

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
      let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: null };
      const _HermesInternal = HermesInternal;
      obj.message = "Content blocked: " + blockReason;
      setStatus.setStatus(obj);
      const _HermesInternal2 = HermesInternal;
      obj = { mechanism: { handled: false, type: "auto.ai.google_genai" } };
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
            let obj = {
              type: "function",
              id: item10050.functionCall.id,
              name: item10050.functionCall.name,
              arguments: item10050.functionCall.args,
            };
            let arr1 = toolCalls1.push(obj);
          }
          continue;
        }
        continue;
      }
    })(promptFeedback, toolCalls, arg2);
  }
}
let closure_6 = async function _instrumentStream(arg0) {
  closure_0 = arg0;
  closure_1 = value;
  closure_2 = arg2;
  c11 = 0;
  c12 = 0;
  c9 = 0;
  return (async (arg0, value, arg2) => {
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp15 === 3) {
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
        c12 = 2;
        switch (c11) {
          case 0:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_7 = tmp4;
              closure_8 = tmp16;
              closure_136_0 = closure_1;
              closure_136_1 = closure_2;
              closure_136_3 = undefined;
              closure_136_6 = undefined;
              closure_136_7 = undefined;
              let value4;
              closure_136_9 = undefined;
              const obj1 = { responseTexts: [], finishReasons: [], toolCalls: [] };
              closure_136_2 = obj1;
              closure_136_4 = false;
              closure_136_5 = false;
              c9 = 4;
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
                      let tmp10 = value2;
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
              closure_136_7 = iter;
              c11 = 5;
              c12 = 1;
              const obj2 = { value: _awaitAsyncGenerator(iter.next()), done: false };
              return obj2;
            }
            break;
          case 1:
            c9 = 0;
            const obj3 = {};
            obj3[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
            closure_136_9 = obj3;
            if (closure_136_2.responseId) {
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
            }
            if (closure_136_2.responseModel) {
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                closure_136_2.responseModel;
            }
            if (undefined !== closure_136_2.promptTokens) {
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                closure_136_2.promptTokens;
            }
            if (undefined !== closure_136_2.completionTokens) {
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                closure_136_2.completionTokens;
            }
            if (undefined !== closure_136_2.totalTokens) {
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                closure_136_2.totalTokens;
            }
            if (closure_136_2.finishReasons.length) {
              const _JSON17 = JSON;
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                closure_136_2.finishReasons,
              );
            }
            let length17 = closure_136_1;
            if (closure_136_1) {
              length17 = closure_136_2.responseTexts.length;
            }
            if (length17) {
              const responseTexts9 = closure_136_2.responseTexts;
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
            }
            let length18 = closure_136_1;
            if (closure_136_1) {
              length18 = closure_136_2.toolCalls.length;
            }
            if (length18) {
              const _JSON18 = JSON;
              closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                closure_136_2.toolCalls,
              );
            }
            closure_136_0.setAttributes(closure_136_9);
            closure_136_0.end();
            throw closure_10;
          case 2:
            closure_6 = closure_10;
            c9 = 3;
            let tmp687 = closure_136_4;
            if (closure_136_4) {
              tmp687 = null != closure_136_7.return;
            }
            if (!tmp687) {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                throw closure_6;
              }
            } else {
              c11 = 16;
              c12 = 1;
              const obj4 = { value: closure_135_2(closure_136_7.return()), done: false };
              return obj4;
            }
            break;
          case 3:
            c9 = 1;
            if (closure_136_5) {
              throw closure_136_3;
            } else {
              throw tmp680;
            }
            break;
          case 4:
            c9 = 2;
            closure_136_5 = true;
            closure_136_3 = closure_10;
            c9 = 8;
            let tmp598 = closure_136_4;
            if (closure_136_4) {
              tmp598 = null != closure_136_7.return;
            }
            if (tmp598) {
              c11 = 15;
              c12 = 1;
              const obj5 = { value: closure_135_2(closure_136_7.return()), done: false };
              return obj5;
            } else {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                const obj6 = {};
                obj6[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_9 = obj6;
                if (closure_136_2.responseId) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                    closure_136_2.responseId;
                }
                if (closure_136_2.responseModel) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                    closure_136_2.responseModel;
                }
                if (undefined !== closure_136_2.promptTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.promptTokens;
                }
                if (undefined !== closure_136_2.completionTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.completionTokens;
                }
                if (undefined !== closure_136_2.totalTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                    closure_136_2.totalTokens;
                }
                if (closure_136_2.finishReasons.length) {
                  const _JSON15 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                    JSON.stringify(closure_136_2.finishReasons);
                }
                let length15 = closure_136_1;
                if (closure_136_1) {
                  length15 = closure_136_2.responseTexts.length;
                }
                if (length15) {
                  const responseTexts8 = closure_136_2.responseTexts;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                    responseTexts8.join("");
                }
                let length16 = closure_136_1;
                if (closure_136_1) {
                  length16 = closure_136_2.toolCalls.length;
                }
                if (length16) {
                  const _JSON16 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                }
                closure_136_0.setAttributes(closure_136_9);
                closure_136_0.end();
                c12 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            break;
          case 5:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              value3 = value;
              if (arg0 === 2) {
                c9 = 5;
                let tmp512 = closure_136_4;
                if (closure_136_4) {
                  tmp512 = null != closure_136_7.return;
                }
                if (tmp512) {
                  c11 = 9;
                  c12 = 1;
                  const obj7 = { value: closure_135_2(closure_136_7.return()), done: false };
                  return obj7;
                } else {
                  c9 = 1;
                  if (closure_136_5) {
                    throw closure_136_3;
                  } else {
                    c9 = 0;
                    const obj8 = {};
                    obj8[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    closure_136_9 = obj8;
                    if (closure_136_2.responseId) {
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                        closure_136_2.responseId;
                    }
                    if (closure_136_2.responseModel) {
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                        closure_136_2.responseModel;
                    }
                    if (undefined !== closure_136_2.promptTokens) {
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                        closure_136_2.promptTokens;
                    }
                    if (undefined !== closure_136_2.completionTokens) {
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                        closure_136_2.completionTokens;
                    }
                    if (undefined !== closure_136_2.totalTokens) {
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                        closure_136_2.totalTokens;
                    }
                    if (closure_136_2.finishReasons.length) {
                      const _JSON13 = JSON;
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                        JSON.stringify(closure_136_2.finishReasons);
                    }
                    let length13 = closure_136_1;
                    if (closure_136_1) {
                      length13 = closure_136_2.responseTexts.length;
                    }
                    if (length13) {
                      const responseTexts7 = closure_136_2.responseTexts;
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                        responseTexts7.join("");
                    }
                    let length14 = closure_136_1;
                    if (closure_136_1) {
                      length14 = closure_136_2.toolCalls.length;
                    }
                    if (length14) {
                      const _JSON14 = JSON;
                      closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                        JSON.stringify(closure_136_2.toolCalls);
                    }
                    closure_136_0.setAttributes(closure_136_9);
                    closure_136_0.end();
                    c12 = 3;
                    const obj9 = { value: value3, done: true };
                    return obj9;
                  }
                }
              } else {
                closure_136_6 = value;
                const done2 = value.done;
                closure_136_4 = !done2;
                if (done2) {
                  c9 = 2;
                } else {
                  value4 = closure_136_6.value;
                  closure_135_5(value4, closure_136_2, closure_136_1, closure_136_0);
                  c11 = 6;
                  c12 = 1;
                  c9 = 6;
                  let tmp331 = closure_136_4;
                  if (closure_136_4) {
                    tmp331 = null != closure_136_7.return;
                  }
                  if (tmp331) {
                    c11 = 11;
                    c12 = 1;
                    const obj10 = { value: closure_135_2(closure_136_7.return()), done: false };
                    return obj10;
                  } else {
                    c9 = 1;
                    if (closure_136_5) {
                      throw closure_136_3;
                    } else {
                      c9 = 0;
                      const obj11 = {};
                      obj11[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      closure_136_9 = obj11;
                      if (closure_136_2.responseId) {
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                          closure_136_2.responseId;
                      }
                      if (closure_136_2.responseModel) {
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                          closure_136_2.responseModel;
                      }
                      if (undefined !== closure_136_2.promptTokens) {
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                          closure_136_2.promptTokens;
                      }
                      if (undefined !== closure_136_2.completionTokens) {
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                          closure_136_2.completionTokens;
                      }
                      if (undefined !== closure_136_2.totalTokens) {
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                          closure_136_2.totalTokens;
                      }
                      if (closure_136_2.finishReasons.length) {
                        const _JSON9 = JSON;
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(closure_136_2.finishReasons);
                      }
                      let length9 = closure_136_1;
                      if (closure_136_1) {
                        length9 = closure_136_2.responseTexts.length;
                      }
                      if (length9) {
                        const responseTexts5 = closure_136_2.responseTexts;
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                          responseTexts5.join("");
                      }
                      let length10 = closure_136_1;
                      if (closure_136_1) {
                        length10 = closure_136_2.toolCalls.length;
                      }
                      if (length10) {
                        const _JSON10 = JSON;
                        closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                          JSON.stringify(closure_136_2.toolCalls);
                      }
                      closure_136_0.setAttributes(closure_136_9);
                      closure_136_0.end();
                      c12 = 3;
                      const obj12 = { value: value2, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c9 = 7;
              let tmp418 = closure_136_4;
              if (closure_136_4) {
                tmp418 = null != closure_136_7.return;
              }
              if (tmp418) {
                c11 = 13;
                c12 = 1;
                const obj13 = { value: closure_135_2(closure_136_7.return()), done: false };
                return obj13;
              } else {
                c9 = 1;
                if (closure_136_5) {
                  throw closure_136_3;
                } else {
                  c9 = 0;
                  const obj14 = {};
                  obj14[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_136_9 = obj14;
                  if (closure_136_2.responseId) {
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                      closure_136_2.responseId;
                  }
                  if (closure_136_2.responseModel) {
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                      closure_136_2.responseModel;
                  }
                  if (undefined !== closure_136_2.promptTokens) {
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                      closure_136_2.promptTokens;
                  }
                  if (undefined !== closure_136_2.completionTokens) {
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                      closure_136_2.completionTokens;
                  }
                  if (undefined !== closure_136_2.totalTokens) {
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                      closure_136_2.totalTokens;
                  }
                  if (closure_136_2.finishReasons.length) {
                    const _JSON11 = JSON;
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                      JSON.stringify(closure_136_2.finishReasons);
                  }
                  let length11 = closure_136_1;
                  if (closure_136_1) {
                    length11 = closure_136_2.responseTexts.length;
                  }
                  if (length11) {
                    const responseTexts6 = closure_136_2.responseTexts;
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                      responseTexts6.join("");
                  }
                  let length12 = closure_136_1;
                  if (closure_136_1) {
                    length12 = closure_136_2.toolCalls.length;
                  }
                  if (length12) {
                    const _JSON12 = JSON;
                    closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(closure_136_2.toolCalls);
                  }
                  closure_136_0.setAttributes(closure_136_9);
                  closure_136_0.end();
                  c12 = 3;
                  const obj15 = { value, done: true };
                  return obj15;
                }
              }
            } else {
              closure_136_4 = false;
              c11 = 7;
              c12 = 1;
              const obj16 = { value: closure_135_2(closure_136_7.next()), done: false };
              return obj16;
            }
            break;
          case 7:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              value2 = value;
              if (arg0 !== 2) {
                closure_136_6 = value;
                const done = value.done;
                closure_136_4 = !done;
              }
            }
            break;
          case 8:
            c9 = 1;
            if (closure_136_5) {
              throw closure_136_3;
            } else {
              throw tmp325;
            }
            break;
          case 9:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                const obj17 = {};
                obj17[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_9 = obj17;
                if (closure_136_2.responseId) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                    closure_136_2.responseId;
                }
                if (closure_136_2.responseModel) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                    closure_136_2.responseModel;
                }
                if (undefined !== closure_136_2.promptTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.promptTokens;
                }
                if (undefined !== closure_136_2.completionTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.completionTokens;
                }
                if (undefined !== closure_136_2.totalTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                    closure_136_2.totalTokens;
                }
                if (closure_136_2.finishReasons.length) {
                  const _JSON7 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                    JSON.stringify(closure_136_2.finishReasons);
                }
                let length7 = closure_136_1;
                if (closure_136_1) {
                  length7 = closure_136_2.responseTexts.length;
                }
                if (length7) {
                  const responseTexts4 = closure_136_2.responseTexts;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                    responseTexts4.join("");
                }
                let length8 = closure_136_1;
                if (closure_136_1) {
                  length8 = closure_136_2.toolCalls.length;
                }
                if (length8) {
                  const _JSON8 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                }
                closure_136_0.setAttributes(closure_136_9);
                closure_136_0.end();
                c12 = 3;
                const obj18 = { value, done: true };
                return obj18;
              }
            }
            break;
          case 10:
            c9 = 1;
            if (closure_136_5) {
              throw closure_136_3;
            } else {
              throw tmp247;
            }
            break;
          case 11:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                const obj19 = {};
                obj19[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_9 = obj19;
                if (closure_136_2.responseId) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                    closure_136_2.responseId;
                }
                if (closure_136_2.responseModel) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                    closure_136_2.responseModel;
                }
                if (undefined !== closure_136_2.promptTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.promptTokens;
                }
                if (undefined !== closure_136_2.completionTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.completionTokens;
                }
                if (undefined !== closure_136_2.totalTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                    closure_136_2.totalTokens;
                }
                if (closure_136_2.finishReasons.length) {
                  const _JSON5 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                    JSON.stringify(closure_136_2.finishReasons);
                }
                let length5 = closure_136_1;
                if (closure_136_1) {
                  length5 = closure_136_2.responseTexts.length;
                }
                if (length5) {
                  const responseTexts3 = closure_136_2.responseTexts;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                    responseTexts3.join("");
                }
                let length6 = closure_136_1;
                if (closure_136_1) {
                  length6 = closure_136_2.toolCalls.length;
                }
                if (length6) {
                  const _JSON6 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                }
                closure_136_0.setAttributes(closure_136_9);
                closure_136_0.end();
                c12 = 3;
                const obj20 = { value, done: true };
                return obj20;
              }
            }
            break;
          case 12:
            c9 = 1;
            if (closure_136_5) {
              throw closure_136_3;
            } else {
              throw tmp169;
            }
            break;
          case 13:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                const obj21 = {};
                obj21[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_9 = obj21;
                if (closure_136_2.responseId) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                    closure_136_2.responseId;
                }
                if (closure_136_2.responseModel) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                    closure_136_2.responseModel;
                }
                if (undefined !== closure_136_2.promptTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.promptTokens;
                }
                if (undefined !== closure_136_2.completionTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.completionTokens;
                }
                if (undefined !== closure_136_2.totalTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                    closure_136_2.totalTokens;
                }
                if (closure_136_2.finishReasons.length) {
                  const _JSON3 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                    JSON.stringify(closure_136_2.finishReasons);
                }
                let length3 = closure_136_1;
                if (closure_136_1) {
                  length3 = closure_136_2.responseTexts.length;
                }
                if (length3) {
                  const responseTexts2 = closure_136_2.responseTexts;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                    responseTexts2.join("");
                }
                let length4 = closure_136_1;
                if (closure_136_1) {
                  length4 = closure_136_2.toolCalls.length;
                }
                if (length4) {
                  const _JSON4 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                }
                closure_136_0.setAttributes(closure_136_9);
                closure_136_0.end();
                c12 = 3;
                const obj22 = { value, done: true };
                return obj22;
              }
            }
            break;
          case 14:
            c9 = 1;
            if (closure_136_5) {
              throw closure_136_3;
            } else {
              throw tmp91;
            }
            break;
          case 15:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                obj = {};
                obj[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_9 = obj;
                if (closure_136_2.responseId) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                    closure_136_2.responseId;
                }
                if (closure_136_2.responseModel) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                    closure_136_2.responseModel;
                }
                if (undefined !== closure_136_2.promptTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.promptTokens;
                }
                if (undefined !== closure_136_2.completionTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.completionTokens;
                }
                if (undefined !== closure_136_2.totalTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                    closure_136_2.totalTokens;
                }
                if (closure_136_2.finishReasons.length) {
                  const _JSON = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                    JSON.stringify(closure_136_2.finishReasons);
                }
                let length = closure_136_1;
                if (closure_136_1) {
                  length = closure_136_2.responseTexts.length;
                }
                if (length) {
                  const responseTexts = closure_136_2.responseTexts;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                    responseTexts.join("");
                }
                let length2 = closure_136_1;
                if (closure_136_1) {
                  length2 = closure_136_2.toolCalls.length;
                }
                if (length2) {
                  const _JSON2 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                }
                closure_136_0.setAttributes(closure_136_9);
                closure_136_0.end();
                c12 = 3;
                const obj23 = { value, done: true };
                return obj23;
              }
            }
            break;
          default:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                const obj24 = {};
                obj24[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_9 = obj24;
                if (closure_136_2.responseId) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] =
                    closure_136_2.responseId;
                }
                if (closure_136_2.responseModel) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                    closure_136_2.responseModel;
                }
                if (undefined !== closure_136_2.promptTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.promptTokens;
                }
                if (undefined !== closure_136_2.completionTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] =
                    closure_136_2.completionTokens;
                }
                if (undefined !== closure_136_2.totalTokens) {
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
                    closure_136_2.totalTokens;
                }
                if (closure_136_2.finishReasons.length) {
                  const _JSON19 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                    JSON.stringify(closure_136_2.finishReasons);
                }
                let length19 = closure_136_1;
                if (closure_136_1) {
                  length19 = closure_136_2.responseTexts.length;
                }
                if (length19) {
                  const responseTexts10 = closure_136_2.responseTexts;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] =
                    responseTexts10.join("");
                }
                let length20 = closure_136_1;
                if (closure_136_1) {
                  length20 = closure_136_2.toolCalls.length;
                }
                if (length20) {
                  const _JSON20 = JSON;
                  closure_136_9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                }
                closure_136_0.setAttributes(closure_136_9);
                closure_136_0.end();
                c12 = 3;
                const obj25 = { value, done: true };
                return obj25;
              }
            }
        }
      } catch (tmp847) {
        closure_10 = tmp847;
        if (tmp5 === c9) {
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
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentStream = function instrumentStream(arg0, arg1, arg2) {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
