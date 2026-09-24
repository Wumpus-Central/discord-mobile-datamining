// _runtime/metro/00837__.js
import SPAN_STATUS_ERROR from "../00705_SPAN_STATUS_ERROR.js";
import captureCheckIn from "../00734_captureCheckIn.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "../00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import _mod825 from "00825__.js";
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
        let obj2 = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
        captureCheckIn.captureException(type.error, obj2);
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
            const obj3 = { id: type.content_block.id, name: type.content_block.name, inputJsonParts: [] };
            finishReasons.activeToolBlocks[type.index] = obj3;
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
                  const obj = { type: "tool_use", id: null, name: null, input: null };
                  ({ id: obj3.id, name } = name);
                  obj.name = name;
                  obj.input = tmp6;
                  toolCalls.push(obj);
                  activeToolBlocks = activeToolBlocks.activeToolBlocks;
                  delete tmp2[tmp];
                } catch (err) {
                  const obj2 = { __unparsed: tmp7 };
                  tmp6 = obj2;
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
let closure_6 = async function _instrumentAsyncIterableStream(arg0) {
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
        const obj2 = { value, done: true };
        return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_7 = tmp4;
              closure_8 = tmp16;
              closure_136_0 = closure_1;
              closure_136_1 = closure_2;
              closure_136_3 = undefined;
              closure_136_6 = undefined;
              closure_136_7 = undefined;
              let value4;
              const obj5 = {
                responseTexts: [],
                finishReasons: [],
                responseId: "",
                responseModel: "",
                promptTokens: "r",
                completionTokens: "WireType",
                cacheCreationInputTokens: "parent",
                cacheReadInputTokens: "raw",
                toolCalls: [],
                activeToolBlocks: {},
              };
              closure_136_2 = obj5;
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
                      let tmp11 = typeof call === "unknown" ? tmp5() : call(arg0);
                      let tmp12 = new.target;
                      let tmp13 = new.target;
                      let tmp102 = new value2(tmp11);
                      return tmp102;
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
              const obj6 = { value: _awaitAsyncGenerator(iter.next()), done: false };
              return obj6;
            }
            break;
          case 1:
            c9 = 0;
            if (closure_136_2.responseId) {
              const obj7 = {};
              obj7[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
              closure_136_0.setAttributes(obj7);
            }
            if (closure_136_2.responseModel) {
              const obj8 = {};
              obj8[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
              closure_136_0.setAttributes(obj8);
            }
            const obj72 = closure_135_0(closure_135_1[5]);
            const result = obj72.setTokenUsageAttributes(
              closure_136_0,
              closure_136_2.promptTokens,
              closure_136_2.completionTokens,
              closure_136_2.cacheCreationInputTokens,
              closure_136_2.cacheReadInputTokens,
            );
            const obj9 = {};
            obj9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
            closure_136_0.setAttributes(obj9);
            if (closure_136_2.finishReasons.length > 0) {
              const obj10 = {};
              const _JSON17 = JSON;
              obj10[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                closure_136_2.finishReasons,
              );
              closure_136_0.setAttributes(obj10);
            }
            let tmp665 = closure_136_1;
            if (closure_136_1) {
              tmp665 = closure_136_2.responseTexts.length > 0;
            }
            if (tmp665) {
              const obj12 = {};
              const responseTexts9 = closure_136_2.responseTexts;
              obj12[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
              closure_136_0.setAttributes(obj12);
            }
            let tmp675 = closure_136_1;
            if (closure_136_1) {
              tmp675 = closure_136_2.toolCalls.length > 0;
            }
            if (tmp675) {
              const obj13 = {};
              const _JSON18 = JSON;
              obj13[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                closure_136_2.toolCalls,
              );
              closure_136_0.setAttributes(obj13);
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
              const obj14 = { value: closure_135_2(closure_136_7.return()), done: false };
              return obj14;
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
              const obj15 = { value: closure_135_2(closure_136_7.return()), done: false };
              return obj15;
            } else {
              c9 = 1;
              if (closure_136_5) {
                throw closure_136_3;
              } else {
                c9 = 0;
                if (closure_136_2.responseId) {
                  const obj16 = {};
                  obj16[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                  closure_136_0.setAttributes(obj16);
                }
                if (closure_136_2.responseModel) {
                  const obj17 = {};
                  obj17[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                  closure_136_0.setAttributes(obj17);
                }
                const obj63 = closure_135_0(closure_135_1[5]);
                const result1 = obj63.setTokenUsageAttributes(
                  closure_136_0,
                  closure_136_2.promptTokens,
                  closure_136_2.completionTokens,
                  closure_136_2.cacheCreationInputTokens,
                  closure_136_2.cacheReadInputTokens,
                );
                const obj18 = {};
                obj18[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_0.setAttributes(obj18);
                if (closure_136_2.finishReasons.length > 0) {
                  const obj20 = {};
                  const _JSON15 = JSON;
                  obj20[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.finishReasons,
                  );
                  closure_136_0.setAttributes(obj20);
                }
                let tmp580 = closure_136_1;
                if (closure_136_1) {
                  tmp580 = closure_136_2.responseTexts.length > 0;
                }
                if (tmp580) {
                  const obj21 = {};
                  const responseTexts8 = closure_136_2.responseTexts;
                  obj21[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                  closure_136_0.setAttributes(obj21);
                }
                let tmp590 = closure_136_1;
                if (closure_136_1) {
                  tmp590 = closure_136_2.toolCalls.length > 0;
                }
                if (tmp590) {
                  const obj22 = {};
                  const _JSON16 = JSON;
                  obj22[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                  closure_136_0.setAttributes(obj22);
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
              value3 = value;
              if (arg0 === 2) {
                c9 = 5;
                let tmp458 = closure_136_4;
                if (closure_136_4) {
                  tmp458 = null != closure_136_7.return;
                }
                if (tmp458) {
                  c11 = 9;
                  c12 = 1;
                  const obj23 = { value: closure_135_2(closure_136_7.return()), done: false };
                  return obj23;
                } else {
                  c9 = 1;
                  if (closure_136_5) {
                    throw closure_136_3;
                  } else {
                    c9 = 0;
                    if (closure_136_2.responseId) {
                      const obj24 = {};
                      obj24[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                      closure_136_0.setAttributes(obj24);
                    }
                    if (closure_136_2.responseModel) {
                      const obj25 = {};
                      obj25[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                        closure_136_2.responseModel;
                      closure_136_0.setAttributes(obj25);
                    }
                    const obj54 = closure_135_0(closure_135_1[5]);
                    const result2 = obj54.setTokenUsageAttributes(
                      closure_136_0,
                      closure_136_2.promptTokens,
                      closure_136_2.completionTokens,
                      closure_136_2.cacheCreationInputTokens,
                      closure_136_2.cacheReadInputTokens,
                    );
                    const obj26 = {};
                    obj26[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    closure_136_0.setAttributes(obj26);
                    if (closure_136_2.finishReasons.length > 0) {
                      const obj28 = {};
                      const _JSON13 = JSON;
                      obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                        closure_136_2.finishReasons,
                      );
                      closure_136_0.setAttributes(obj28);
                    }
                    let tmp503 = closure_136_1;
                    if (closure_136_1) {
                      tmp503 = closure_136_2.responseTexts.length > 0;
                    }
                    if (tmp503) {
                      const obj29 = {};
                      const responseTexts7 = closure_136_2.responseTexts;
                      obj29[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                      closure_136_0.setAttributes(obj29);
                    }
                    let tmp513 = closure_136_1;
                    if (closure_136_1) {
                      tmp513 = closure_136_2.toolCalls.length > 0;
                    }
                    if (tmp513) {
                      const obj30 = {};
                      const _JSON14 = JSON;
                      obj30[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                        closure_136_2.toolCalls,
                      );
                      closure_136_0.setAttributes(obj30);
                    }
                    closure_136_0.end();
                    c12 = 3;
                    const obj31 = { value: value3, done: true };
                    return obj31;
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
                    const obj32 = { value: closure_135_2(closure_136_7.return()), done: false };
                    return obj32;
                  } else {
                    c9 = 1;
                    if (closure_136_5) {
                      throw closure_136_3;
                    } else {
                      c9 = 0;
                      if (closure_136_2.responseId) {
                        const obj33 = {};
                        obj33[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                        closure_136_0.setAttributes(obj33);
                      }
                      if (closure_136_2.responseModel) {
                        const obj34 = {};
                        obj34[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                          closure_136_2.responseModel;
                        closure_136_0.setAttributes(obj34);
                      }
                      const obj35 = closure_135_0(closure_135_1[5]);
                      const result3 = obj35.setTokenUsageAttributes(
                        closure_136_0,
                        closure_136_2.promptTokens,
                        closure_136_2.completionTokens,
                        closure_136_2.cacheCreationInputTokens,
                        closure_136_2.cacheReadInputTokens,
                      );
                      const obj36 = {};
                      obj36[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      closure_136_0.setAttributes(obj36);
                      if (closure_136_2.finishReasons.length > 0) {
                        const obj37 = {};
                        const _JSON9 = JSON;
                        obj37[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(closure_136_2.finishReasons);
                        closure_136_0.setAttributes(obj37);
                      }
                      let tmp340 = closure_136_1;
                      if (closure_136_1) {
                        tmp340 = closure_136_2.responseTexts.length > 0;
                      }
                      if (tmp340) {
                        const obj38 = {};
                        const responseTexts5 = closure_136_2.responseTexts;
                        obj38[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                        closure_136_0.setAttributes(obj38);
                      }
                      let tmp350 = closure_136_1;
                      if (closure_136_1) {
                        tmp350 = closure_136_2.toolCalls.length > 0;
                      }
                      if (tmp350) {
                        const obj39 = {};
                        const _JSON10 = JSON;
                        obj39[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                          closure_136_2.toolCalls,
                        );
                        closure_136_0.setAttributes(obj39);
                      }
                      closure_136_0.end();
                      c12 = 3;
                      const obj40 = { value: value2, done: true };
                      return obj40;
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
                const obj41 = { value: closure_135_2(closure_136_7.return()), done: false };
                return obj41;
              } else {
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
                    obj43[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] =
                      closure_136_2.responseModel;
                    closure_136_0.setAttributes(obj43);
                  }
                  const obj45 = closure_135_0(closure_135_1[5]);
                  const result4 = obj45.setTokenUsageAttributes(
                    closure_136_0,
                    closure_136_2.promptTokens,
                    closure_136_2.completionTokens,
                    closure_136_2.cacheCreationInputTokens,
                    closure_136_2.cacheReadInputTokens,
                  );
                  const obj44 = {};
                  obj44[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_136_0.setAttributes(obj44);
                  if (closure_136_2.finishReasons.length > 0) {
                    const obj46 = {};
                    const _JSON11 = JSON;
                    obj46[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      closure_136_2.finishReasons,
                    );
                    closure_136_0.setAttributes(obj46);
                  }
                  let tmp418 = closure_136_1;
                  if (closure_136_1) {
                    tmp418 = closure_136_2.responseTexts.length > 0;
                  }
                  if (tmp418) {
                    const obj47 = {};
                    const responseTexts6 = closure_136_2.responseTexts;
                    obj47[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                    closure_136_0.setAttributes(obj47);
                  }
                  let tmp428 = closure_136_1;
                  if (closure_136_1) {
                    tmp428 = closure_136_2.toolCalls.length > 0;
                  }
                  if (tmp428) {
                    const obj48 = {};
                    const _JSON12 = JSON;
                    obj48[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      closure_136_2.toolCalls,
                    );
                    closure_136_0.setAttributes(obj48);
                  }
                  closure_136_0.end();
                  c12 = 3;
                  const obj49 = { value, done: true };
                  return obj49;
                }
              }
            } else {
              closure_136_4 = false;
              c11 = 7;
              c12 = 1;
              const obj50 = { value: closure_135_2(closure_136_7.next()), done: false };
              return obj50;
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
                  const obj51 = {};
                  obj51[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                  closure_136_0.setAttributes(obj51);
                }
                if (closure_136_2.responseModel) {
                  const obj52 = {};
                  obj52[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                  closure_136_0.setAttributes(obj52);
                }
                const obj27 = closure_135_0(closure_135_1[5]);
                const result5 = obj27.setTokenUsageAttributes(
                  closure_136_0,
                  closure_136_2.promptTokens,
                  closure_136_2.completionTokens,
                  closure_136_2.cacheCreationInputTokens,
                  closure_136_2.cacheReadInputTokens,
                );
                const obj53 = {};
                obj53[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_0.setAttributes(obj53);
                if (closure_136_2.finishReasons.length > 0) {
                  const obj55 = {};
                  const _JSON7 = JSON;
                  obj55[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.finishReasons,
                  );
                  closure_136_0.setAttributes(obj55);
                }
                let tmp265 = closure_136_1;
                if (closure_136_1) {
                  tmp265 = closure_136_2.responseTexts.length > 0;
                }
                if (tmp265) {
                  const obj56 = {};
                  const responseTexts4 = closure_136_2.responseTexts;
                  obj56[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                  closure_136_0.setAttributes(obj56);
                }
                let tmp275 = closure_136_1;
                if (closure_136_1) {
                  tmp275 = closure_136_2.toolCalls.length > 0;
                }
                if (tmp275) {
                  const obj57 = {};
                  const _JSON8 = JSON;
                  obj57[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                  closure_136_0.setAttributes(obj57);
                }
                closure_136_0.end();
                c12 = 3;
                const obj58 = { value, done: true };
                return obj58;
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
                  const obj59 = {};
                  obj59[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                  closure_136_0.setAttributes(obj59);
                }
                if (closure_136_2.responseModel) {
                  const obj60 = {};
                  obj60[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                  closure_136_0.setAttributes(obj60);
                }
                const obj19 = closure_135_0(closure_135_1[5]);
                const result6 = obj19.setTokenUsageAttributes(
                  closure_136_0,
                  closure_136_2.promptTokens,
                  closure_136_2.completionTokens,
                  closure_136_2.cacheCreationInputTokens,
                  closure_136_2.cacheReadInputTokens,
                );
                const obj61 = {};
                obj61[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_0.setAttributes(obj61);
                if (closure_136_2.finishReasons.length > 0) {
                  const obj62 = {};
                  const _JSON5 = JSON;
                  obj62[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.finishReasons,
                  );
                  closure_136_0.setAttributes(obj62);
                }
                let tmp196 = closure_136_1;
                if (closure_136_1) {
                  tmp196 = closure_136_2.responseTexts.length > 0;
                }
                if (tmp196) {
                  const obj64 = {};
                  const responseTexts3 = closure_136_2.responseTexts;
                  obj64[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                  closure_136_0.setAttributes(obj64);
                }
                let tmp206 = closure_136_1;
                if (closure_136_1) {
                  tmp206 = closure_136_2.toolCalls.length > 0;
                }
                if (tmp206) {
                  const obj65 = {};
                  const _JSON6 = JSON;
                  obj65[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                  closure_136_0.setAttributes(obj65);
                }
                closure_136_0.end();
                c12 = 3;
                const obj66 = { value, done: true };
                return obj66;
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
                  const obj67 = {};
                  obj67[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                  closure_136_0.setAttributes(obj67);
                }
                if (closure_136_2.responseModel) {
                  const obj68 = {};
                  obj68[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                  closure_136_0.setAttributes(obj68);
                }
                const obj11 = closure_135_0(closure_135_1[5]);
                const result7 = obj11.setTokenUsageAttributes(
                  closure_136_0,
                  closure_136_2.promptTokens,
                  closure_136_2.completionTokens,
                  closure_136_2.cacheCreationInputTokens,
                  closure_136_2.cacheReadInputTokens,
                );
                const obj69 = {};
                obj69[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_0.setAttributes(obj69);
                if (closure_136_2.finishReasons.length > 0) {
                  const obj70 = {};
                  const _JSON3 = JSON;
                  obj70[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.finishReasons,
                  );
                  closure_136_0.setAttributes(obj70);
                }
                let tmp127 = closure_136_1;
                if (closure_136_1) {
                  tmp127 = closure_136_2.responseTexts.length > 0;
                }
                if (tmp127) {
                  const obj71 = {};
                  const responseTexts2 = closure_136_2.responseTexts;
                  obj71[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                  closure_136_0.setAttributes(obj71);
                }
                let tmp137 = closure_136_1;
                if (closure_136_1) {
                  tmp137 = closure_136_2.toolCalls.length > 0;
                }
                if (tmp137) {
                  const obj73 = {};
                  const _JSON4 = JSON;
                  obj73[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                  closure_136_0.setAttributes(obj73);
                }
                closure_136_0.end();
                c12 = 3;
                const obj74 = { value, done: true };
                return obj74;
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
                  const obj = {};
                  obj[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                  closure_136_0.setAttributes(obj);
                }
                if (closure_136_2.responseModel) {
                  const obj75 = {};
                  obj75[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                  closure_136_0.setAttributes(obj75);
                }
                const obj3 = closure_135_0(closure_135_1[5]);
                const result8 = obj3.setTokenUsageAttributes(
                  closure_136_0,
                  closure_136_2.promptTokens,
                  closure_136_2.completionTokens,
                  closure_136_2.cacheCreationInputTokens,
                  closure_136_2.cacheReadInputTokens,
                );
                const obj76 = {};
                obj76[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_0.setAttributes(obj76);
                if (closure_136_2.finishReasons.length > 0) {
                  const obj77 = {};
                  const _JSON = JSON;
                  obj77[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.finishReasons,
                  );
                  closure_136_0.setAttributes(obj77);
                }
                let tmp58 = closure_136_1;
                if (closure_136_1) {
                  tmp58 = closure_136_2.responseTexts.length > 0;
                }
                if (tmp58) {
                  const obj78 = {};
                  const responseTexts = closure_136_2.responseTexts;
                  obj78[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                  closure_136_0.setAttributes(obj78);
                }
                let tmp68 = closure_136_1;
                if (closure_136_1) {
                  tmp68 = closure_136_2.toolCalls.length > 0;
                }
                if (tmp68) {
                  const obj79 = {};
                  const _JSON2 = JSON;
                  obj79[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                  closure_136_0.setAttributes(obj79);
                }
                closure_136_0.end();
                c12 = 3;
                const obj80 = { value, done: true };
                return obj80;
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
                  const obj82 = {};
                  obj82[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_136_2.responseId;
                  closure_136_0.setAttributes(obj82);
                }
                if (closure_136_2.responseModel) {
                  const obj83 = {};
                  obj83[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_136_2.responseModel;
                  closure_136_0.setAttributes(obj83);
                }
                const obj81 = closure_135_0(closure_135_1[5]);
                const result9 = obj81.setTokenUsageAttributes(
                  closure_136_0,
                  closure_136_2.promptTokens,
                  closure_136_2.completionTokens,
                  closure_136_2.cacheCreationInputTokens,
                  closure_136_2.cacheReadInputTokens,
                );
                const obj84 = {};
                obj84[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                closure_136_0.setAttributes(obj84);
                if (closure_136_2.finishReasons.length > 0) {
                  const obj85 = {};
                  const _JSON19 = JSON;
                  obj85[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.finishReasons,
                  );
                  closure_136_0.setAttributes(obj85);
                }
                let tmp734 = closure_136_1;
                if (closure_136_1) {
                  tmp734 = closure_136_2.responseTexts.length > 0;
                }
                if (tmp734) {
                  const obj86 = {};
                  const responseTexts10 = closure_136_2.responseTexts;
                  obj86[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                  closure_136_0.setAttributes(obj86);
                }
                let tmp744 = closure_136_1;
                if (closure_136_1) {
                  tmp744 = closure_136_2.toolCalls.length > 0;
                }
                if (tmp744) {
                  const obj87 = {};
                  const _JSON20 = JSON;
                  obj87[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                    closure_136_2.toolCalls,
                  );
                  closure_136_0.setAttributes(obj87);
                }
                closure_136_0.end();
                c12 = 3;
                const obj88 = { value, done: true };
                return obj88;
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
  let obj = {
    responseTexts: [],
    finishReasons: [],
    responseId: "",
    responseModel: "",
    promptTokens: "r",
    completionTokens: "WireType",
    cacheCreationInputTokens: "parent",
    cacheReadInputTokens: "raw",
    toolCalls: [],
    activeToolBlocks: {},
  };
  applyResult.on("streamEvent", (arg0) => {
    processEvent(arg0, obj, closure_1, closure_0);
  });
  applyResult.on("message", () => {
    let tmp2 = closure_1;
    if (closure_0.isRecording()) {
      if (closure_0.responseId) {
        const obj2 = {};
        obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_0.responseId;
        closure_0.setAttributes(obj2);
      }
      if (closure_0.responseModel) {
        const obj3 = {};
        obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_0.responseModel;
        closure_0.setAttributes(obj3);
      }
      const obj4 = _mod825;
      const result = obj4.setTokenUsageAttributes(
        closure_0,
        closure_0.promptTokens,
        closure_0.completionTokens,
        closure_0.cacheCreationInputTokens,
        closure_0.cacheReadInputTokens,
      );
      const obj5 = {};
      obj5[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
      closure_0.setAttributes(obj5);
      if (closure_0.finishReasons.length > 0) {
        const obj6 = {};
        const _JSON = JSON;
        obj6[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
          closure_0.finishReasons,
        );
        closure_0.setAttributes(obj6);
      }
      let tmp21 = tmp2;
      if (tmp2) {
        tmp21 = closure_0.responseTexts.length > 0;
      }
      if (tmp21) {
        const obj7 = {};
        const responseTexts = closure_0.responseTexts;
        obj7[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
        closure_0.setAttributes(obj7);
      }
      if (tmp2) {
        tmp2 = closure_0.toolCalls.length > 0;
      }
      if (tmp2) {
        const obj8 = {};
        const _JSON2 = JSON;
        obj8[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
          closure_0.toolCalls,
        );
        closure_0.setAttributes(obj8);
      }
      closure_0.end();
    }
  });
  applyResult.on("error", (error) => {
    captureCheckIn.captureException(error, { mechanism: { handled: false, type: "auto.ai.anthropic.stream_error" } });
    if (closure_0.isRecording()) {
      const obj3 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "stream_error" };
      closure_0.setStatus(obj3);
      closure_0.end();
    }
  });
  return applyResult;
};
