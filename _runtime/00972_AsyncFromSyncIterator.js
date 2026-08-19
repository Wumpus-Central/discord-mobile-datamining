// === Module 972: AsyncFromSyncIterator ===

// Module 972 (AsyncFromSyncIterator)
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
                obj1 = { responseTexts: null, finishReasons: null, responseId: "", responseModel: "", promptTokens: "r", completionTokens: "View", cacheCreationInputTokens: "toCharArray$esjava$1", cacheReadInputTokens: "Path", toolCalls: -36144369334270020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, activeToolBlocks: "<string:822214657>" };
                obj1[0] = [];
                obj1[1] = [];
                obj1[8] = [];
                obj1[9] = {};
                closure_4 = false;
                let callback2 = false;
                c9 = 4;
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
                let obj2 = { value: null, done: false };
                obj2[0] = callback(iter.next());
                return obj2;
              }
            break;
            case 1:
              c9 = 0;
              if (obj1.responseId) {
                const obj3 = {};
                obj3[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                store.setAttributes(obj3);
              }
              if (obj1.responseModel) {
                const obj4 = {};
                obj4[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                store.setAttributes(obj4);
              }
              let obj71 = store(960);
              const result = obj71.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
              const obj5 = {};
              obj5[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              store.setAttributes(obj5);
              if (obj1.finishReasons.length > 0) {
                const obj6 = {};
                const _JSON17 = JSON;
                obj6[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                store.setAttributes(obj6);
              }
              let tmp665 = dependencyMap;
              if (dependencyMap) {
                tmp665 = obj1.responseTexts.length > 0;
              }
              if (tmp665) {
                const obj7 = {};
                const responseTexts9 = obj1.responseTexts;
                obj7[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
                store.setAttributes(obj7);
              }
              let tmp675 = dependencyMap;
              if (dependencyMap) {
                tmp675 = obj1.toolCalls.length > 0;
              }
              if (tmp675) {
                const obj8 = {};
                const _JSON18 = JSON;
                obj8[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                store.setAttributes(obj8);
              }
              store.end();
              throw closure_10;
            case 2:
              value = closure_10;
              c9 = 3;
              let tmp615 = closure_4;
              if (closure_4) {
                tmp615 = null != iter.return;
              }
              if (!tmp615) {
                c9 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  throw value;
                }
              } else {
                c11 = 16;
                c12 = 1;
                const obj9 = { value: null, done: false };
                obj9[0] = obj1(iter.return());
                return obj9;
              }
            break;
            case 3:
              c9 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp608;
              }
            break;
            case 4:
              c9 = 2;
              callback2 = true;
              closure_3 = closure_10;
              c9 = 8;
              let tmp535 = closure_4;
              if (closure_4) {
                tmp535 = null != iter.return;
              }
              if (tmp535) {
                c11 = 15;
                c12 = 1;
                let obj10 = { value: null, done: false };
                obj10[0] = obj1(iter.return());
                return obj10;
              } else {
                c9 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj1.responseId) {
                    const obj11 = {};
                    obj11[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    store.setAttributes(obj11);
                  }
                  if (obj1.responseModel) {
                    const obj12 = {};
                    obj12[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    store.setAttributes(obj12);
                  }
                  let obj62 = store(960);
                  const result1 = obj62.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                  const obj13 = {};
                  obj13[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj13);
                  if (obj1.finishReasons.length > 0) {
                    const obj14 = {};
                    const _JSON15 = JSON;
                    obj14[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj14);
                  }
                  let tmp580 = dependencyMap;
                  if (dependencyMap) {
                    tmp580 = obj1.responseTexts.length > 0;
                  }
                  if (tmp580) {
                    const obj15 = {};
                    const responseTexts8 = obj1.responseTexts;
                    obj15[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                    store.setAttributes(obj15);
                  }
                  let tmp590 = dependencyMap;
                  if (dependencyMap) {
                    tmp590 = obj1.toolCalls.length > 0;
                  }
                  if (tmp590) {
                    const obj16 = {};
                    const _JSON16 = JSON;
                    obj16[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    store.setAttributes(obj16);
                  }
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
                  c9 = 5;
                  let tmp458 = closure_4;
                  if (closure_4) {
                    tmp458 = null != iter.return;
                  }
                  if (tmp458) {
                    c11 = 9;
                    c12 = 1;
                    const obj17 = { value: null, done: false };
                    obj17[0] = obj1(iter.return());
                    return obj17;
                  } else {
                    c9 = 1;
                    if (callback2) {
                      throw closure_3;
                    } else {
                      c9 = 0;
                      if (obj1.responseId) {
                        let obj18 = {};
                        obj18[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                        store.setAttributes(obj18);
                      }
                      if (obj1.responseModel) {
                        const obj19 = {};
                        obj19[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                        store.setAttributes(obj19);
                      }
                      let obj53 = store(960);
                      const result2 = obj53.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                      const obj20 = {};
                      obj20[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      store.setAttributes(obj20);
                      if (obj1.finishReasons.length > 0) {
                        const obj21 = {};
                        const _JSON13 = JSON;
                        obj21[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        store.setAttributes(obj21);
                      }
                      let tmp503 = dependencyMap;
                      if (dependencyMap) {
                        tmp503 = obj1.responseTexts.length > 0;
                      }
                      if (tmp503) {
                        const obj22 = {};
                        const responseTexts7 = obj1.responseTexts;
                        obj22[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                        store.setAttributes(obj22);
                      }
                      let tmp513 = dependencyMap;
                      if (dependencyMap) {
                        tmp513 = obj1.toolCalls.length > 0;
                      }
                      if (tmp513) {
                        const obj23 = {};
                        const _JSON14 = JSON;
                        obj23[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                        store.setAttributes(obj23);
                      }
                      store.end();
                      c12 = 3;
                      const obj24 = { value: null, done: true };
                      obj24[0] = callback2;
                      return obj24;
                    }
                  }
                } else {
                  value = done;
                  const done2 = done.done;
                  closure_4 = !done2;
                  if (done2) {
                    c9 = 2;
                  } else {
                    value2 = value.value;
                    callback2(value2, obj1, dependencyMap, store);
                    c11 = 6;
                    c12 = 1;
                    c9 = 6;
                    let tmp295 = closure_4;
                    if (closure_4) {
                      tmp295 = null != iter.return;
                    }
                    if (tmp295) {
                      c11 = 11;
                      c12 = 1;
                      const obj25 = { value: null, done: false };
                      obj25[0] = obj1(iter.return());
                      return obj25;
                    } else {
                      c9 = 1;
                      if (callback2) {
                        throw closure_3;
                      } else {
                        c9 = 0;
                        if (obj1.responseId) {
                          let obj26 = {};
                          obj26[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                          store.setAttributes(obj26);
                        }
                        if (obj1.responseModel) {
                          const obj27 = {};
                          obj27[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                          store.setAttributes(obj27);
                        }
                        let obj34 = store(960);
                        const result3 = obj34.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                        const obj28 = {};
                        obj28[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        store.setAttributes(obj28);
                        if (obj1.finishReasons.length > 0) {
                          const obj29 = {};
                          const _JSON9 = JSON;
                          obj29[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                          store.setAttributes(obj29);
                        }
                        let tmp340 = dependencyMap;
                        if (dependencyMap) {
                          tmp340 = obj1.responseTexts.length > 0;
                        }
                        if (tmp340) {
                          const obj30 = {};
                          const responseTexts5 = obj1.responseTexts;
                          obj30[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                          store.setAttributes(obj30);
                        }
                        let tmp350 = dependencyMap;
                        if (dependencyMap) {
                          tmp350 = obj1.toolCalls.length > 0;
                        }
                        if (tmp350) {
                          const obj31 = {};
                          const _JSON10 = JSON;
                          obj31[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                          store.setAttributes(obj31);
                        }
                        store.end();
                        c12 = 3;
                        const obj32 = { value: null, done: true };
                        obj32[0] = closure_4;
                        return obj32;
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
                  c9 = 7;
                  let tmp373 = closure_4;
                  if (closure_4) {
                    tmp373 = null != iter.return;
                  }
                  if (tmp373) {
                    c11 = 13;
                    c12 = 1;
                    const obj33 = { value: null, done: false };
                    obj33[0] = obj1(iter.return());
                    return obj33;
                  } else {
                    c9 = 1;
                    if (callback2) {
                      throw closure_3;
                    } else {
                      c9 = 0;
                      if (obj1.responseId) {
                        obj34 = {};
                        obj34[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                        store.setAttributes(obj34);
                      }
                      if (obj1.responseModel) {
                        const obj35 = {};
                        obj35[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                        store.setAttributes(obj35);
                      }
                      let obj44 = store(960);
                      const result4 = obj44.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                      const obj36 = {};
                      obj36[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      store.setAttributes(obj36);
                      if (obj1.finishReasons.length > 0) {
                        const obj37 = {};
                        const _JSON11 = JSON;
                        obj37[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                        store.setAttributes(obj37);
                      }
                      let tmp418 = dependencyMap;
                      if (dependencyMap) {
                        tmp418 = obj1.responseTexts.length > 0;
                      }
                      if (tmp418) {
                        const obj38 = {};
                        const responseTexts6 = obj1.responseTexts;
                        obj38[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                        store.setAttributes(obj38);
                      }
                      let tmp428 = dependencyMap;
                      if (dependencyMap) {
                        tmp428 = obj1.toolCalls.length > 0;
                      }
                      if (tmp428) {
                        const obj39 = {};
                        const _JSON12 = JSON;
                        obj39[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                        store.setAttributes(obj39);
                      }
                      store.end();
                      c12 = 3;
                      const obj40 = { value: null, done: true };
                      obj40[0] = closure_3;
                      return obj40;
                    }
                  }
                } else {
                  closure_4 = false;
                  c11 = 7;
                  c12 = 1;
                  const obj41 = { value: null, done: false };
                  obj41[0] = obj1(iter.next());
                  return obj41;
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
              c9 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp289;
              }
            break;
            case 9:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                c9 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj1.responseId) {
                    const obj42 = {};
                    obj42[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    store.setAttributes(obj42);
                  }
                  if (obj1.responseModel) {
                    const obj43 = {};
                    obj43[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    store.setAttributes(obj43);
                  }
                  obj26 = store(960);
                  const result5 = obj26.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                  obj44 = {};
                  obj44[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj44);
                  if (obj1.finishReasons.length > 0) {
                    const obj45 = {};
                    const _JSON7 = JSON;
                    obj45[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj45);
                  }
                  let tmp265 = dependencyMap;
                  if (dependencyMap) {
                    tmp265 = obj1.responseTexts.length > 0;
                  }
                  if (tmp265) {
                    const obj46 = {};
                    const responseTexts4 = obj1.responseTexts;
                    obj46[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                    store.setAttributes(obj46);
                  }
                  let tmp275 = dependencyMap;
                  if (dependencyMap) {
                    tmp275 = obj1.toolCalls.length > 0;
                  }
                  if (tmp275) {
                    const obj47 = {};
                    const _JSON8 = JSON;
                    obj47[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    store.setAttributes(obj47);
                  }
                  store.end();
                  c12 = 3;
                  const obj48 = { value: null, done: true };
                  obj48[0] = done;
                  return obj48;
                }
              }
            break;
            case 10:
              c9 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp220;
              }
            break;
            case 11:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                c9 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj1.responseId) {
                    const obj49 = {};
                    obj49[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    store.setAttributes(obj49);
                  }
                  if (obj1.responseModel) {
                    const obj50 = {};
                    obj50[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    store.setAttributes(obj50);
                  }
                  obj18 = store(960);
                  const result6 = obj18.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                  const obj51 = {};
                  obj51[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj51);
                  if (obj1.finishReasons.length > 0) {
                    const obj52 = {};
                    const _JSON5 = JSON;
                    obj52[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj52);
                  }
                  let tmp196 = dependencyMap;
                  if (dependencyMap) {
                    tmp196 = obj1.responseTexts.length > 0;
                  }
                  if (tmp196) {
                    obj53 = {};
                    const responseTexts3 = obj1.responseTexts;
                    obj53[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                    store.setAttributes(obj53);
                  }
                  let tmp206 = dependencyMap;
                  if (dependencyMap) {
                    tmp206 = obj1.toolCalls.length > 0;
                  }
                  if (tmp206) {
                    const obj54 = {};
                    const _JSON6 = JSON;
                    obj54[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    store.setAttributes(obj54);
                  }
                  store.end();
                  c12 = 3;
                  const obj55 = { value: null, done: true };
                  obj55[0] = done;
                  return obj55;
                }
              }
            break;
            case 12:
              c9 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp151;
              }
            break;
            case 13:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                c9 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj1.responseId) {
                    const obj56 = {};
                    obj56[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    store.setAttributes(obj56);
                  }
                  if (obj1.responseModel) {
                    const obj57 = {};
                    obj57[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    store.setAttributes(obj57);
                  }
                  obj10 = store(960);
                  const result7 = obj10.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                  const obj58 = {};
                  obj58[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj58);
                  if (obj1.finishReasons.length > 0) {
                    const obj59 = {};
                    const _JSON3 = JSON;
                    obj59[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj59);
                  }
                  let tmp127 = dependencyMap;
                  if (dependencyMap) {
                    tmp127 = obj1.responseTexts.length > 0;
                  }
                  if (tmp127) {
                    const obj60 = {};
                    const responseTexts2 = obj1.responseTexts;
                    obj60[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    store.setAttributes(obj60);
                  }
                  let tmp137 = dependencyMap;
                  if (dependencyMap) {
                    tmp137 = obj1.toolCalls.length > 0;
                  }
                  if (tmp137) {
                    const obj61 = {};
                    const _JSON4 = JSON;
                    obj61[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    store.setAttributes(obj61);
                  }
                  store.end();
                  c12 = 3;
                  obj62 = { value: null, done: true };
                  obj62[0] = done;
                  return obj62;
                }
              }
            break;
            case 14:
              c9 = 1;
              if (callback2) {
                throw closure_3;
              } else {
                throw tmp82;
              }
            break;
            case 15:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                c9 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj1.responseId) {
                    obj = {};
                    obj[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    store.setAttributes(obj);
                  }
                  if (obj1.responseModel) {
                    const obj63 = {};
                    obj63[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    store.setAttributes(obj63);
                  }
                  obj2 = store(960);
                  const result8 = obj2.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                  const obj64 = {};
                  obj64[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj64);
                  if (obj1.finishReasons.length > 0) {
                    const obj65 = {};
                    const _JSON = JSON;
                    obj65[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj65);
                  }
                  let tmp58 = dependencyMap;
                  if (dependencyMap) {
                    tmp58 = obj1.responseTexts.length > 0;
                  }
                  if (tmp58) {
                    const obj66 = {};
                    const responseTexts = obj1.responseTexts;
                    obj66[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                    store.setAttributes(obj66);
                  }
                  let tmp68 = dependencyMap;
                  if (dependencyMap) {
                    tmp68 = obj1.toolCalls.length > 0;
                  }
                  if (tmp68) {
                    const obj67 = {};
                    const _JSON2 = JSON;
                    obj67[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    store.setAttributes(obj67);
                  }
                  store.end();
                  c12 = 3;
                  const obj68 = { value: null, done: true };
                  obj68[0] = done;
                  return obj68;
                }
              }
            break;
            default:
              if (arg0 === 1) {
                c12 = 3;
                throw done;
              } else if (arg0 === 2) {
                c9 = 1;
                if (callback2) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj1.responseId) {
                    const obj69 = {};
                    obj69[store(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj1.responseId;
                    store.setAttributes(obj69);
                  }
                  if (obj1.responseModel) {
                    const obj70 = {};
                    obj70[store(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj1.responseModel;
                    store.setAttributes(obj70);
                  }
                  const obj81 = store(960);
                  const result9 = obj81.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.cacheCreationInputTokens, obj1.cacheReadInputTokens);
                  obj71 = {};
                  obj71[store(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  store.setAttributes(obj71);
                  if (obj1.finishReasons.length > 0) {
                    const obj72 = {};
                    const _JSON19 = JSON;
                    obj72[store(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                    store.setAttributes(obj72);
                  }
                  let tmp734 = dependencyMap;
                  if (dependencyMap) {
                    tmp734 = obj1.responseTexts.length > 0;
                  }
                  if (tmp734) {
                    const obj73 = {};
                    const responseTexts10 = obj1.responseTexts;
                    obj73[store(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                    store.setAttributes(obj73);
                  }
                  let tmp744 = dependencyMap;
                  if (dependencyMap) {
                    tmp744 = obj1.toolCalls.length > 0;
                  }
                  if (tmp744) {
                    const obj74 = {};
                    const _JSON20 = JSON;
                    obj74[store(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(obj1.toolCalls);
                    store.setAttributes(obj74);
                  }
                  store.end();
                  c12 = 3;
                  const obj75 = { value: null, done: true };
                  obj75[0] = done;
                  return obj75;
                }
              }
          }
        } catch (tmp757) {
          closure_10 = tmp757;
          if (tmp5 === c9) {
            c12 = tmp3;
            throw tmp757;
          } else if (tmp2 === tmp759) {
            c11 = tmp2;
          } else if (tmp === tmp759) {
            c11 = tmp;
          } else if (tmp3 === tmp759) {
            c11 = tmp3;
          } else if (tmp13 === tmp759) {
            c11 = tmp13;
          } else if (tmp6 === tmp759) {
            c11 = tmp12;
          } else if (tmp7 === tmp759) {
            c11 = tmp11;
          } else if (tmp8 === tmp759) {
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

export const instrumentAsyncIterableStream = function instrumentAsyncIterableStream(arg0, callback, c1) {
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
  let obj = { responseTexts: [], finishReasons: [], responseId: "", responseModel: "", promptTokens: "r", completionTokens: "View", cacheCreationInputTokens: "toCharArray$esjava$1", cacheReadInputTokens: "Path", toolCalls: -36144369334270020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, activeToolBlocks: "<string:822214657>" };
  obj[8] = [];
  obj[9] = {};
  applyResult.on("streamEvent", (arg0) => {
    processEvent(arg0, obj, closure_1, closure_0);
  });
  applyResult.on("message", () => {
    obj = lib;
    let tmp2 = dependencyMap;
    if (lib.isRecording()) {
      if (tmp.responseId) {
        obj = {};
        obj[lib(958).GEN_AI_RESPONSE_ID_ATTRIBUTE] = tmp.responseId;
        obj.setAttributes(obj);
      }
      if (tmp.responseModel) {
        obj = {};
        obj[lib(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = tmp.responseModel;
        obj.setAttributes(obj);
      }
      let obj3 = lib(960);
      const result = obj3.setTokenUsageAttributes(obj, tmp.promptTokens, tmp.completionTokens, tmp.cacheCreationInputTokens, tmp.cacheReadInputTokens);
      obj1 = {};
      obj1[lib(958).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
      obj.setAttributes(obj1);
      if (tmp.finishReasons.length > 0) {
        const obj2 = {};
        const _JSON = JSON;
        obj2[lib(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(tmp.finishReasons);
        obj.setAttributes(obj2);
      }
      let tmp21 = tmp2;
      if (tmp2) {
        tmp21 = tmp.responseTexts.length > 0;
      }
      if (tmp21) {
        obj3 = {};
        const responseTexts = tmp.responseTexts;
        obj3[lib(958).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
        obj.setAttributes(obj3);
      }
      if (tmp2) {
        tmp2 = tmp.toolCalls.length > 0;
      }
      if (tmp2) {
        const obj4 = {};
        const _JSON2 = JSON;
        obj4[lib(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(tmp.toolCalls);
        obj.setAttributes(obj4);
      }
      obj.end();
    }
  });
  applyResult.on("error", (arg0) => {
    obj = lib(869);
    obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.anthropic.stream_error" } });
    if (lib.isRecording()) {
      obj = { code: null, message: "stream_error" };
      obj[0] = lib(840).SPAN_STATUS_ERROR;
      lib.setStatus(obj);
      lib.end();
    }
  });
  return applyResult;
};