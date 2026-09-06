// === Module 837: AsyncFromSyncIterator ===

// Module 837 (AsyncFromSyncIterator)
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import closure_2 from "_awaitAsyncGenerator" /* 831 */;
import closure_3 from "AsyncGenerator" /* 833 */;

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
function processEvent(type, finishReasons, arg2, setStatus) {
  if (type) {
    if (typeof type === "object") {
      let flag = "type" in type && typeof type.type === "string";
      if (flag) {
        flag = "error" === type.type;
      }
      if (flag) {
        let obj = { code: null, message: null };
        obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
        error = type.error;
        let str2;
        if (error != null) {
          str2 = error.type;
        }
        if (str2 == null) {
          str2 = "internal_error";
        }
        obj[1] = str2;
        setStatus.setStatus(obj);
        obj = { mechanism: null };
        obj[0] = { handled: false, type: "auto.ai.anthropic.anthropic_error" };
        captureCheckIn.captureException(type.error, obj);
        flag = true;
        const tmp2 = require;
        const tmp2Result = captureCheckIn;
      }
      if (!flag) {
        let tmp7 = "message_delta" === type.type && type.usage;
        if (tmp7) {
          tmp7 = "output_tokens" in type.usage;
        }
        if (tmp7) {
          tmp7 = typeof type.usage.output_tokens === "number";
        }
        if (tmp7) {
          finishReasons.completionTokens = type.usage.output_tokens;
        }
        if (type.message) {
          const message = type.message;
          if (message.id) {
            finishReasons.responseId = message.id;
          }
          if (message.model) {
            finishReasons.responseModel = message.model;
          }
          if (message.stop_reason) {
            finishReasons = finishReasons.finishReasons;
            finishReasons.push(message.stop_reason);
          }
          if (message.usage) {
            if (typeof message.usage.input_tokens === "number") {
              finishReasons.promptTokens = message.usage.input_tokens;
            }
            if (typeof message.usage.cache_creation_input_tokens === "number") {
              finishReasons.cacheCreationInputTokens = message.usage.cache_creation_input_tokens;
            }
            if (typeof message.usage.cache_read_input_tokens === "number") {
              finishReasons.cacheReadInputTokens = message.usage.cache_read_input_tokens;
            }
          }
        }
        if (tmp10) {
          let tmp11 = "tool_use" !== type.content_block.type;
          if (tmp11) {
            tmp11 = "server_tool_use" !== type.content_block.type;
          }
          if (!tmp11) {
            obj = { id: null, name: null, inputJsonParts: null };
            obj[0] = type.content_block.id;
            obj[1] = type.content_block.name;
            obj[2] = [];
            finishReasons.activeToolBlocks[type.index] = obj;
          }
        }
        if ("content_block_delta" === type.type) {
          if (type.delta) {
            if (typeof type.index === "number") {
              if ("partial_json" in type.delta) {
                if (typeof type.delta.partial_json === "string") {
                  if (finishReasons.activeToolBlocks[type.index]) {
                    let inputJsonParts = tmp16.inputJsonParts;
                    inputJsonParts.push(type.delta.partial_json);
                  }
                }
              }
            }
            let tmp13 = arg2;
            if (arg2) {
              tmp13 = typeof type.delta.text === "string";
            }
            if (tmp13) {
              const responseTexts = finishReasons.responseTexts;
              responseTexts.push(type.delta.text);
            }
          }
        }
        (function handleContentBlockStop(type, finishReasons) {
          if ("content_block_stop" === type.type) {
            if (typeof tmp3.index === "number") {
              let activeToolBlocks = finishReasons;
              name = finishReasons.activeToolBlocks[tmp3.index];
              if (name) {
                const inputJsonParts = name.inputJsonParts;
                const joined = inputJsonParts.join("");
                try {
                  if (joined) {
                    const _JSON = JSON;
                    let parsed = JSON.parse(joined);
                  } else {
                    parsed = {};
                  }
                  let tmp6 = parsed;
                  const toolCalls = activeToolBlocks.toolCalls;
                  let obj = { type: "tool_use", id: null, name: null, input: null };
                  ({ id: obj3[1], name } = name);
                  obj[2] = name;
                  obj[3] = tmp6;
                  toolCalls.push(obj);
                  activeToolBlocks = activeToolBlocks.activeToolBlocks;
                  delete tmp2[tmp];
                } catch (err) {
                  obj = { __unparsed: null };
                  obj[0] = tmp7;
                  tmp6 = obj;
                }
              }
            }
          }
        })(type, finishReasons);
        tmp10 = "content_block_start" === type.type && typeof type.index === "number" && type.content_block;
      }
    }
  }
}
function _instrumentAsyncIterableStream() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c11 = 0;
    c12 = 0;
    c9 = 0;
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
                c9 = 1;
                let tmp79 = closure_8;
                let tmp80 = closure_5;
                if (closure_5) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  c9 = 0;
                  let tmp81 = closure_2;
                  if (closure_2.responseId) {
                    let tmp82 = closure_8;
                    let tmp83 = closure_7;
                    let tmp84 = store;
                    obj = {};
                    let tmp85 = store;
                    let tmp86 = dependencyMap;
                    let tmp87 = closure_2;
                    obj[store(823).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_2.responseId;
                    let setAttributesResult = store.setAttributes(obj);
                  }
                  let tmp89 = closure_8;
                  let tmp90 = closure_2;
                  if (closure_2.responseModel) {
                    let tmp91 = closure_8;
                    let tmp92 = closure_7;
                    let tmp93 = store;
                    obj1 = {};
                    let tmp94 = store;
                    let tmp95 = dependencyMap;
                    let tmp96 = closure_2;
                    obj1[store(823).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_2.responseModel;
                    let setAttributesResult1 = store.setAttributes(obj1);
                  }
                  let tmp98 = closure_8;
                  let tmp99 = closure_7;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  let obj10 = store(825);
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = closure_2;
                  throwTypeErrorResult = closure_2;
                  throwTypeErrorResult = closure_2;
                  throwTypeErrorResult = closure_2;
                  throwTypeErrorResult = obj10;
                  throwTypeErrorResult = obj10.setTokenUsageAttributes(store, closure_2.promptTokens, closure_2.completionTokens, closure_2.cacheCreationInputTokens, closure_2.cacheReadInputTokens);
                  throwTypeErrorResult = store;
                  let obj2 = {};
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  obj2[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  throwTypeErrorResult = store.setAttributes(obj2);
                  throwTypeErrorResult = closure_2;
                  if (closure_2.finishReasons.length > 0) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = store;
                    let obj3 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let _JSON3 = JSON;
                    throwTypeErrorResult = closure_2;
                    obj3[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_2.finishReasons);
                    throwTypeErrorResult = store.setAttributes(obj3);
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = dependencyMap;
                  if (dependencyMap) {
                    throwTypeErrorResult = closure_2;
                    throwTypeErrorResult = closure_2.responseTexts.length > 0;
                  }
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = store;
                    let obj4 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_2;
                    let responseTexts2 = closure_2.responseTexts;
                    obj4[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    throwTypeErrorResult = store.setAttributes(obj4);
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = dependencyMap;
                  if (dependencyMap) {
                    throwTypeErrorResult = closure_2;
                    throwTypeErrorResult = closure_2.toolCalls.length > 0;
                  }
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = closure_8;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = store;
                    let obj5 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let _JSON4 = JSON;
                    throwTypeErrorResult = closure_2;
                    obj5[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_2.toolCalls);
                    throwTypeErrorResult = store.setAttributes(obj5);
                  }
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = store.end();
                  let num3 = 3;
                  c12 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            } else {
              c9 = 1;
              throwTypeErrorResult = closure_8;
              throwTypeErrorResult = closure_5;
              if (closure_5) {
                throw closure_3;
              } else {
                c9 = 0;
                if (closure_2.responseId) {
                  obj = {};
                  obj[store(823).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_2.responseId;
                  store.setAttributes(obj);
                }
                if (closure_2.responseModel) {
                  const obj6 = {};
                  obj6[store(823).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_2.responseModel;
                  store.setAttributes(obj6);
                }
                obj2 = store(825);
                const result = obj2.setTokenUsageAttributes(store, closure_2.promptTokens, closure_2.completionTokens, closure_2.cacheCreationInputTokens, closure_2.cacheReadInputTokens);
                const obj7 = {};
                obj7[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                store.setAttributes(obj7);
                if (closure_2.finishReasons.length > 0) {
                  const obj8 = {};
                  const _JSON = JSON;
                  obj8[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_2.finishReasons);
                  store.setAttributes(obj8);
                }
                let tmp56 = dependencyMap;
                if (dependencyMap) {
                  tmp56 = closure_2.responseTexts.length > 0;
                }
                if (tmp56) {
                  const obj9 = {};
                  const responseTexts = closure_2.responseTexts;
                  obj9[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                  store.setAttributes(obj9);
                }
                let tmp66 = dependencyMap;
                if (dependencyMap) {
                  tmp66 = closure_2.toolCalls.length > 0;
                }
                if (tmp66) {
                  obj10 = {};
                  const _JSON2 = JSON;
                  obj10[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_2.toolCalls);
                  store.setAttributes(obj10);
                }
                store.end();
                c12 = 3;
                const obj11 = { value: null, done: true };
                obj11[0] = arg1;
                return obj11;
              }
            }
          } catch (throwTypeErrorResult) {
            closure_10 = throwTypeErrorResult;
            throwTypeErrorResult = c9;
            if (tmp4 === c9) {
              throwTypeErrorResult = tmp3;
              c12 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c11 = tmp2;
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

export const instrumentAsyncIterableStream = function instrumentAsyncIterableStream(arg0, arg1, c1) {
  const self = this;
  const apply = _instrumentAsyncIterableStream.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const instrumentMessageStream = function instrumentMessageStream(applyResult, arg1, flag) {
  closure_0 = arg1;
  closure_1 = flag;
  let obj = { responseTexts: [], finishReasons: [], responseId: "", responseModel: "", promptTokens: "r", completionTokens: "w", cacheCreationInputTokens: "channel_id", cacheReadInputTokens: "style", toolCalls: false, activeToolBlocks: false };
  obj[8] = [];
  obj[9] = {};
  applyResult.on("streamEvent", (arg0) => {
    closure_1_5(arg0, obj, closure_1, closure_0);
  });
  applyResult.on("message", () => {
    obj = lib;
    let tmp2 = dependencyMap;
    if (lib.isRecording()) {
      if (tmp.responseId) {
        obj = {};
        obj[lib(823).GEN_AI_RESPONSE_ID_ATTRIBUTE] = tmp.responseId;
        obj.setAttributes(obj);
      }
      if (tmp.responseModel) {
        obj = {};
        obj[lib(823).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = tmp.responseModel;
        obj.setAttributes(obj);
      }
      let obj3 = lib(825);
      const result = obj3.setTokenUsageAttributes(obj, tmp.promptTokens, tmp.completionTokens, tmp.cacheCreationInputTokens, tmp.cacheReadInputTokens);
      obj1 = {};
      obj1[lib(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
      obj.setAttributes(obj1);
      if (tmp.finishReasons.length > 0) {
        const obj2 = {};
        const _JSON = JSON;
        obj2[lib(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(tmp.finishReasons);
        obj.setAttributes(obj2);
      }
      let tmp21 = tmp2;
      if (tmp2) {
        tmp21 = tmp.responseTexts.length > 0;
      }
      if (tmp21) {
        obj3 = {};
        const responseTexts = tmp.responseTexts;
        obj3[lib(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
        obj.setAttributes(obj3);
      }
      if (tmp2) {
        tmp2 = tmp.toolCalls.length > 0;
      }
      if (tmp2) {
        const obj4 = {};
        const _JSON2 = JSON;
        obj4[lib(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(tmp.toolCalls);
        obj.setAttributes(obj4);
      }
      obj.end();
    }
  });
  applyResult.on("error", (arg0) => {
    obj = lib(734);
    obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.anthropic.stream_error" } });
    if (lib.isRecording()) {
      obj = { code: null, message: "stream_error" };
      obj[0] = lib(705).SPAN_STATUS_ERROR;
      obj2.setStatus(obj);
      obj2.end();
    }
  });
  return applyResult;
};