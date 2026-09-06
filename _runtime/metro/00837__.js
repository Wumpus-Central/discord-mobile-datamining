// === Module 837: ? ===

// Module 837
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 823 */;
import _mod825 from "module_825" /* 825 */;
import _awaitAsyncGenerator from "_awaitAsyncGenerator" /* 831 */;
import AsyncGenerator from "AsyncGenerator" /* 833 */;

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
        let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: null };
        const error = type.error;
        let str2;
        if (error != null) {
          str2 = error.type;
        }
        if (str2 == null) {
          str2 = "internal_error";
        }
        obj.message = str2;
        setStatus.setStatus(obj);
        obj = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
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
            obj = { id: type.content_block.id, name: type.content_block.name, inputJsonParts: [] };
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
                  ({ id: obj3.id, name } = name);
                  obj.name = name;
                  obj.input = tmp6;
                  toolCalls.push(obj);
                  activeToolBlocks = activeToolBlocks.activeToolBlocks;
                  delete tmp2[tmp];
                } catch (err) {
                  obj = { __unparsed: tmp7 };
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
let closure_6 = async function _instrumentAsyncIterableStream(arg0, value) {
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
            const obj1 = { responseTexts: [], finishReasons: [], responseId: "", responseModel: "", promptTokens: "r", completionTokens: "w", cacheCreationInputTokens: "channel_id", cacheReadInputTokens: "style", toolCalls: [], activeToolBlocks: {} };
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
            let obj2 = { value: _awaitAsyncGenerator(iter.next()), done: false };
            return obj2;
          }
        break;
        case 1:
          c9 = 0;
          if (closure_136_2.responseId) {
            const obj3 = {};
            obj3[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
            closure_136_0.setAttributes(obj3);
          }
          if (closure_136_2.responseModel) {
            const obj4 = {};
            obj4[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
            closure_136_0.setAttributes(obj4);
          }
          let obj71 = closure_135_0(closure_135_1[5]);
          const result = obj71.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
          const obj5 = {};
          obj5[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
          closure_136_0.setAttributes(obj5);
          if (closure_136_2.finishReasons.length > 0) {
            const obj6 = {};
            const _JSON17 = JSON;
            obj6[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
            closure_136_0.setAttributes(obj6);
          }
          let tmp665 = closure_136_1;
          if (closure_136_1) {
            tmp665 = closure_136_2.responseTexts.length > 0;
          }
          if (tmp665) {
            const obj7 = {};
            const responseTexts9 = closure_136_2.responseTexts;
            obj7[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
            closure_136_0.setAttributes(obj7);
          }
          let tmp675 = closure_136_1;
          if (closure_136_1) {
            tmp675 = closure_136_2.toolCalls.length > 0;
          }
          if (tmp675) {
            const obj8 = {};
            const _JSON18 = JSON;
            obj8[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
            closure_136_0.setAttributes(obj8);
          }
          closure_136_0.end();
          throw closure_10;
        case 2:
          closure_6 = closure_10;
          c9 = 3;
          let tmp615 = closure_136_4;
          if (closure_136_4) {
            tmp615 = null != closure_136_7.return;
          }
          if (!tmp615) {
            c9 = 1;
            if (closure_136_5) {
              throw closure_136_3;
            } else {
              throw closure_6;
            }
          } else {
            c11 = 16;
            c12 = 1;
            const obj9 = { value: closure_135_2(closure_136_7.return()), done: false };
            return obj9;
          }
        break;
        case 3:
          c9 = 1;
          if (closure_136_5) {
            throw closure_136_3;
          } else {
            throw tmp608;
          }
        break;
        case 4:
          c9 = 2;
          closure_136_5 = true;
          closure_136_3 = closure_10;
          c9 = 8;
          let tmp535 = closure_136_4;
          if (closure_136_4) {
            tmp535 = null != closure_136_7.return;
          }
          if (tmp535) {
            c11 = 15;
            c12 = 1;
            let obj10 = { value: closure_135_2(closure_136_7.return()), done: false };
            return obj10;
          } else {
            c9 = 1;
            if (closure_136_5) {
              throw closure_136_3;
            } else {
              c9 = 0;
              if (closure_136_2.responseId) {
                const obj11 = {};
                obj11[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                closure_136_0.setAttributes(obj11);
              }
              if (closure_136_2.responseModel) {
                const obj12 = {};
                obj12[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                closure_136_0.setAttributes(obj12);
              }
              let obj62 = closure_135_0(closure_135_1[5]);
              const result1 = obj62.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
              const obj13 = {};
              obj13[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_136_0.setAttributes(obj13);
              if (closure_136_2.finishReasons.length > 0) {
                const obj14 = {};
                const _JSON15 = JSON;
                obj14[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                closure_136_0.setAttributes(obj14);
              }
              let tmp580 = closure_136_1;
              if (closure_136_1) {
                tmp580 = closure_136_2.responseTexts.length > 0;
              }
              if (tmp580) {
                const obj15 = {};
                const responseTexts8 = closure_136_2.responseTexts;
                obj15[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                closure_136_0.setAttributes(obj15);
              }
              let tmp590 = closure_136_1;
              if (closure_136_1) {
                tmp590 = closure_136_2.toolCalls.length > 0;
              }
              if (tmp590) {
                const obj16 = {};
                const _JSON16 = JSON;
                obj16[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                closure_136_0.setAttributes(obj16);
              }
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
            const value3 = value;
            if (arg0 === 2) {
              c9 = 5;
              let tmp458 = closure_136_4;
              if (closure_136_4) {
                tmp458 = null != closure_136_7.return;
              }
              if (tmp458) {
                c11 = 9;
                c12 = 1;
                const obj17 = { value: closure_135_2(closure_136_7.return()), done: false };
                return obj17;
              } else {
                c9 = 1;
                if (closure_136_5) {
                  throw closure_136_3;
                } else {
                  c9 = 0;
                  if (closure_136_2.responseId) {
                    let obj18 = {};
                    obj18[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                    closure_136_0.setAttributes(obj18);
                  }
                  if (closure_136_2.responseModel) {
                    const obj19 = {};
                    obj19[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                    closure_136_0.setAttributes(obj19);
                  }
                  let obj53 = closure_135_0(closure_135_1[5]);
                  const result2 = obj53.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
                  const obj20 = {};
                  obj20[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_136_0.setAttributes(obj20);
                  if (closure_136_2.finishReasons.length > 0) {
                    const obj21 = {};
                    const _JSON13 = JSON;
                    obj21[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                    closure_136_0.setAttributes(obj21);
                  }
                  let tmp503 = closure_136_1;
                  if (closure_136_1) {
                    tmp503 = closure_136_2.responseTexts.length > 0;
                  }
                  if (tmp503) {
                    const obj22 = {};
                    const responseTexts7 = closure_136_2.responseTexts;
                    obj22[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                    closure_136_0.setAttributes(obj22);
                  }
                  let tmp513 = closure_136_1;
                  if (closure_136_1) {
                    tmp513 = closure_136_2.toolCalls.length > 0;
                  }
                  if (tmp513) {
                    const obj23 = {};
                    const _JSON14 = JSON;
                    obj23[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                    closure_136_0.setAttributes(obj23);
                  }
                  closure_136_0.end();
                  c12 = 3;
                  const obj24 = { value: value3, done: true };
                  return obj24;
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
                let tmp295 = closure_136_4;
                if (closure_136_4) {
                  tmp295 = null != closure_136_7.return;
                }
                if (tmp295) {
                  c11 = 11;
                  c12 = 1;
                  const obj25 = { value: closure_135_2(closure_136_7.return()), done: false };
                  return obj25;
                } else {
                  c9 = 1;
                  if (closure_136_5) {
                    throw closure_136_3;
                  } else {
                    c9 = 0;
                    if (closure_136_2.responseId) {
                      let obj26 = {};
                      obj26[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                      closure_136_0.setAttributes(obj26);
                    }
                    if (closure_136_2.responseModel) {
                      const obj27 = {};
                      obj27[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                      closure_136_0.setAttributes(obj27);
                    }
                    let obj34 = closure_135_0(closure_135_1[5]);
                    const result3 = obj34.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
                    const obj28 = {};
                    obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    closure_136_0.setAttributes(obj28);
                    if (closure_136_2.finishReasons.length > 0) {
                      const obj29 = {};
                      const _JSON9 = JSON;
                      obj29[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                      closure_136_0.setAttributes(obj29);
                    }
                    let tmp340 = closure_136_1;
                    if (closure_136_1) {
                      tmp340 = closure_136_2.responseTexts.length > 0;
                    }
                    if (tmp340) {
                      const obj30 = {};
                      const responseTexts5 = closure_136_2.responseTexts;
                      obj30[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                      closure_136_0.setAttributes(obj30);
                    }
                    let tmp350 = closure_136_1;
                    if (closure_136_1) {
                      tmp350 = closure_136_2.toolCalls.length > 0;
                    }
                    if (tmp350) {
                      const obj31 = {};
                      const _JSON10 = JSON;
                      obj31[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                      closure_136_0.setAttributes(obj31);
                    }
                    closure_136_0.end();
                    c12 = 3;
                    const obj32 = { value: value2, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c9 = 7;
            let tmp373 = closure_136_4;
            if (closure_136_4) {
              tmp373 = null != closure_136_7.return;
            }
            if (tmp373) {
              c11 = 13;
              c12 = 1;
              const obj33 = { value: closure_135_2(closure_136_7.return()), done: false };
              return obj33;
            } else {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                if (closure_136_2.responseId) {
                  obj34 = {};
                  obj34[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                  closure_136_0.setAttributes(obj34);
                }
                if (closure_136_2.responseModel) {
                  const obj35 = {};
                  obj35[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                  closure_136_0.setAttributes(obj35);
                }
                let obj44 = closure_135_0(closure_135_1[5]);
                const result4 = obj44.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
                const obj36 = {};
                obj36[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_0.setAttributes(obj36);
                if (closure_136_2.finishReasons.length > 0) {
                  const obj37 = {};
                  const _JSON11 = JSON;
                  obj37[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                  closure_136_0.setAttributes(obj37);
                }
                let tmp418 = closure_136_1;
                if (closure_136_1) {
                  tmp418 = closure_136_2.responseTexts.length > 0;
                }
                if (tmp418) {
                  const obj38 = {};
                  const responseTexts6 = closure_136_2.responseTexts;
                  obj38[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                  closure_136_0.setAttributes(obj38);
                }
                let tmp428 = closure_136_1;
                if (closure_136_1) {
                  tmp428 = closure_136_2.toolCalls.length > 0;
                }
                if (tmp428) {
                  const obj39 = {};
                  const _JSON12 = JSON;
                  obj39[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                  closure_136_0.setAttributes(obj39);
                }
                closure_136_0.end();
                c12 = 3;
                const obj40 = { value, done: true };
                return obj40;
              }
            }
          } else {
            closure_136_4 = false;
            c11 = 7;
            c12 = 1;
            const obj41 = { value: closure_135_2(closure_136_7.next()), done: false };
            return obj41;
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
            throw tmp289;
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
              if (closure_136_2.responseId) {
                const obj42 = {};
                obj42[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                closure_136_0.setAttributes(obj42);
              }
              if (closure_136_2.responseModel) {
                const obj43 = {};
                obj43[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                closure_136_0.setAttributes(obj43);
              }
              obj26 = closure_135_0(closure_135_1[5]);
              const result5 = obj26.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
              obj44 = {};
              obj44[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_136_0.setAttributes(obj44);
              if (closure_136_2.finishReasons.length > 0) {
                const obj45 = {};
                const _JSON7 = JSON;
                obj45[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                closure_136_0.setAttributes(obj45);
              }
              let tmp265 = closure_136_1;
              if (closure_136_1) {
                tmp265 = closure_136_2.responseTexts.length > 0;
              }
              if (tmp265) {
                const obj46 = {};
                const responseTexts4 = closure_136_2.responseTexts;
                obj46[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                closure_136_0.setAttributes(obj46);
              }
              let tmp275 = closure_136_1;
              if (closure_136_1) {
                tmp275 = closure_136_2.toolCalls.length > 0;
              }
              if (tmp275) {
                const obj47 = {};
                const _JSON8 = JSON;
                obj47[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                closure_136_0.setAttributes(obj47);
              }
              closure_136_0.end();
              c12 = 3;
              const obj48 = { value, done: true };
              return obj48;
            }
          }
        break;
        case 10:
          c9 = 1;
          if (closure_136_5) {
            throw closure_136_3;
          } else {
            throw tmp220;
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
              if (closure_136_2.responseId) {
                const obj49 = {};
                obj49[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                closure_136_0.setAttributes(obj49);
              }
              if (closure_136_2.responseModel) {
                const obj50 = {};
                obj50[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                closure_136_0.setAttributes(obj50);
              }
              obj18 = closure_135_0(closure_135_1[5]);
              const result6 = obj18.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
              const obj51 = {};
              obj51[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_136_0.setAttributes(obj51);
              if (closure_136_2.finishReasons.length > 0) {
                const obj52 = {};
                const _JSON5 = JSON;
                obj52[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                closure_136_0.setAttributes(obj52);
              }
              let tmp196 = closure_136_1;
              if (closure_136_1) {
                tmp196 = closure_136_2.responseTexts.length > 0;
              }
              if (tmp196) {
                obj53 = {};
                const responseTexts3 = closure_136_2.responseTexts;
                obj53[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                closure_136_0.setAttributes(obj53);
              }
              let tmp206 = closure_136_1;
              if (closure_136_1) {
                tmp206 = closure_136_2.toolCalls.length > 0;
              }
              if (tmp206) {
                const obj54 = {};
                const _JSON6 = JSON;
                obj54[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                closure_136_0.setAttributes(obj54);
              }
              closure_136_0.end();
              c12 = 3;
              const obj55 = { value, done: true };
              return obj55;
            }
          }
        break;
        case 12:
          c9 = 1;
          if (closure_136_5) {
            throw closure_136_3;
          } else {
            throw tmp151;
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
              if (closure_136_2.responseId) {
                const obj56 = {};
                obj56[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                closure_136_0.setAttributes(obj56);
              }
              if (closure_136_2.responseModel) {
                const obj57 = {};
                obj57[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                closure_136_0.setAttributes(obj57);
              }
              obj10 = closure_135_0(closure_135_1[5]);
              const result7 = obj10.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
              const obj58 = {};
              obj58[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_136_0.setAttributes(obj58);
              if (closure_136_2.finishReasons.length > 0) {
                const obj59 = {};
                const _JSON3 = JSON;
                obj59[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                closure_136_0.setAttributes(obj59);
              }
              let tmp127 = closure_136_1;
              if (closure_136_1) {
                tmp127 = closure_136_2.responseTexts.length > 0;
              }
              if (tmp127) {
                const obj60 = {};
                const responseTexts2 = closure_136_2.responseTexts;
                obj60[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                closure_136_0.setAttributes(obj60);
              }
              let tmp137 = closure_136_1;
              if (closure_136_1) {
                tmp137 = closure_136_2.toolCalls.length > 0;
              }
              if (tmp137) {
                const obj61 = {};
                const _JSON4 = JSON;
                obj61[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                closure_136_0.setAttributes(obj61);
              }
              closure_136_0.end();
              c12 = 3;
              obj62 = { value, done: true };
              return obj62;
            }
          }
        break;
        case 14:
          c9 = 1;
          if (closure_136_5) {
            throw closure_136_3;
          } else {
            throw tmp82;
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
              if (closure_136_2.responseId) {
                obj = {};
                obj[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                closure_136_0.setAttributes(obj);
              }
              if (closure_136_2.responseModel) {
                const obj63 = {};
                obj63[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                closure_136_0.setAttributes(obj63);
              }
              obj2 = closure_135_0(closure_135_1[5]);
              const result8 = obj2.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
              const obj64 = {};
              obj64[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_136_0.setAttributes(obj64);
              if (closure_136_2.finishReasons.length > 0) {
                const obj65 = {};
                const _JSON = JSON;
                obj65[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                closure_136_0.setAttributes(obj65);
              }
              let tmp58 = closure_136_1;
              if (closure_136_1) {
                tmp58 = closure_136_2.responseTexts.length > 0;
              }
              if (tmp58) {
                const obj66 = {};
                const responseTexts = closure_136_2.responseTexts;
                obj66[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                closure_136_0.setAttributes(obj66);
              }
              let tmp68 = closure_136_1;
              if (closure_136_1) {
                tmp68 = closure_136_2.toolCalls.length > 0;
              }
              if (tmp68) {
                const obj67 = {};
                const _JSON2 = JSON;
                obj67[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                closure_136_0.setAttributes(obj67);
              }
              closure_136_0.end();
              c12 = 3;
              const obj68 = { value, done: true };
              return obj68;
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
              if (closure_136_2.responseId) {
                const obj69 = {};
                obj69[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                closure_136_0.setAttributes(obj69);
              }
              if (closure_136_2.responseModel) {
                const obj70 = {};
                obj70[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                closure_136_0.setAttributes(obj70);
              }
              const obj81 = closure_135_0(closure_135_1[5]);
              const result9 = obj81.setTokenUsageAttributes(closure_136_0, closure_136_2.promptTokens, closure_136_2.completionTokens, closure_136_2.cacheCreationInputTokens, closure_136_2.cacheReadInputTokens);
              obj71 = {};
              obj71[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_136_0.setAttributes(obj71);
              if (closure_136_2.finishReasons.length > 0) {
                const obj72 = {};
                const _JSON19 = JSON;
                obj72[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(closure_136_2.finishReasons);
                closure_136_0.setAttributes(obj72);
              }
              let tmp734 = closure_136_1;
              if (closure_136_1) {
                tmp734 = closure_136_2.responseTexts.length > 0;
              }
              if (tmp734) {
                const obj73 = {};
                const responseTexts10 = closure_136_2.responseTexts;
                obj73[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                closure_136_0.setAttributes(obj73);
              }
              let tmp744 = closure_136_1;
              if (closure_136_1) {
                tmp744 = closure_136_2.toolCalls.length > 0;
              }
              if (tmp744) {
                const obj74 = {};
                const _JSON20 = JSON;
                obj74[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(closure_136_2.toolCalls);
                closure_136_0.setAttributes(obj74);
              }
              closure_136_0.end();
              c12 = 3;
              const obj75 = { value, done: true };
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
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentAsyncIterableStream = function instrumentAsyncIterableStream(arg0, arg1, c1) {
  const self = this;
  const apply = closure_6.apply;
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
  let obj = { responseTexts: [], finishReasons: [], responseId: "", responseModel: "", promptTokens: "r", completionTokens: "w", cacheCreationInputTokens: "channel_id", cacheReadInputTokens: "style", toolCalls: [], activeToolBlocks: {} };
  applyResult.on("streamEvent", (arg0) => {
    processEvent(arg0, obj, closure_1, closure_0);
  });
  applyResult.on("message", () => {
    obj = closure_0;
    let tmp2 = closure_1;
    if (closure_0.isRecording()) {
      if (tmp.responseId) {
        obj = {};
        obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_ID_ATTRIBUTE] = tmp.responseId;
        obj.setAttributes(obj);
      }
      if (tmp.responseModel) {
        obj = {};
        obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = tmp.responseModel;
        obj.setAttributes(obj);
      }
      let obj3 = _mod825;
      const result = obj3.setTokenUsageAttributes(obj, tmp.promptTokens, tmp.completionTokens, tmp.cacheCreationInputTokens, tmp.cacheReadInputTokens);
      const obj1 = {};
      obj1[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
      obj.setAttributes(obj1);
      if (tmp.finishReasons.length > 0) {
        const obj2 = {};
        const _JSON = JSON;
        obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(tmp.finishReasons);
        obj.setAttributes(obj2);
      }
      let tmp21 = tmp2;
      if (tmp2) {
        tmp21 = tmp.responseTexts.length > 0;
      }
      if (tmp21) {
        obj3 = {};
        const responseTexts = tmp.responseTexts;
        obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
        obj.setAttributes(obj3);
      }
      if (tmp2) {
        tmp2 = tmp.toolCalls.length > 0;
      }
      if (tmp2) {
        const obj4 = {};
        const _JSON2 = JSON;
        obj4[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(tmp.toolCalls);
        obj.setAttributes(obj4);
      }
      obj.end();
    }
  });
  applyResult.on("error", (arg0) => {
    obj = captureCheckIn;
    obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.anthropic.stream_error" } });
    if (closure_0.isRecording()) {
      obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "stream_error" };
      obj2.setStatus(obj);
      obj2.end();
    }
  });
  return applyResult;
};