// _runtime/00848_instrumentAsyncIterableStream.js
import SPAN_STATUS_ERROR from "00716_SPAN_STATUS_ERROR.js";
import _mod745 from "metro/00745__.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00834_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import _mod836 from "metro/00836__.js";
import _awaitAsyncGenerator from "00842__awaitAsyncGenerator.js";
import _wrapAsyncGenerator from "00844__wrapAsyncGenerator.js";

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
function processEvent(type, finishReasons, arg2, setStatus) {
  let str2;
  function handleContentBlockStop(type, toolCalls) {
    if ("content_block_stop" === type.type) {
      if (typeof type.index === "number") {
        if (toolCalls.activeToolBlocks[type.index]) {
          let tmp3;
          const inputJsonParts = tmp6.inputJsonParts;
          const joined = inputJsonParts.join("");
          try {
            let parsed;
            if (joined) {
              const _JSON = JSON;
              parsed = JSON.parse(joined);
            } else {
              parsed = {};
            }
            tmp3 = parsed;
          } catch (err) {
            tmp3 = { __unparsed: joined };
            obj = { __unparsed: joined };
          }
          toolCalls = toolCalls.toolCalls;
          const obj2 = { type: "tool_use", id: null, name: null, input: tmp3 };
          ({ id: obj3.id, name: obj3.name } = toolCalls.activeToolBlocks[type.index]);
          toolCalls.push(obj2);
          delete toolCalls.activeToolBlocks[type.index];
        }
      }
    }
  }
  const tmp = type;
  if (tmp) {
    if (typeof type === "object") {
      let flag = "type" in type && typeof type.type === "string";
      if (flag) {
        flag = "error" === type.type;
      }
      if (flag) {
        obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: str2 };
        setStatus = setStatus.setStatus;
        const error = type.error;
        str2 = undefined;
        if (error != null) {
          str2 = error.type;
        }
        if (str2 == null) {
          str2 = "internal_error";
        }
        setStatus(obj);
        let obj2 = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
        const tmp3Result = _mod745;
        tmp3Result.captureException(type.error, obj2);
        flag = true;
      }
      if (!flag) {
        const tmp8 =
          "message_delta" === type.type &&
          type.usage &&
          "output_tokens" in type.usage &&
          typeof type.usage.output_tokens === "number";
        if (tmp8) {
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
        const tmp11 = "content_block_start" === type.type && typeof type.index === "number" && type.content_block;
        if (tmp11) {
          const tmp12 = "tool_use" !== type.content_block.type && "server_tool_use" !== type.content_block.type;
          if (!tmp12) {
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
                    let inputJsonParts = tmp17.inputJsonParts;
                    inputJsonParts.push(type.delta.partial_json);
                  }
                }
              }
            }
            const tmp14 = arg2 && typeof type.delta.text === "string";
            if (tmp14) {
              const responseTexts = finishReasons.responseTexts;
              responseTexts.push(type.delta.text);
            }
          }
        }
        handleContentBlockStop(type, finishReasons);
      }
    }
  }
}
let obj = function _instrumentAsyncIterableStream() {
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
          let closure_3;
          let value4;
          let value5;
          let obj5;
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_7 = tmp;
                let closure_8 = tmp4;
                closure_0 = closure_1;
                closure_1 = closure_2;
                closure_3 = undefined;
                value4 = undefined;
                value5 = undefined;
                obj5 = {
                  responseTexts: [],
                  finishReasons: [],
                  responseId: "",
                  responseModel: "",
                  promptTokens: "r",
                  completionTokens: "duration",
                  cacheCreationInputTokens: "code",
                  cacheReadInputTokens: "Array",
                  toolCalls: [],
                  activeToolBlocks: {},
                };
                closure_4 = false;
                c5 = false;
                c9 = 4;
                iter = _asyncIterator(closure_0);
                c11 = 5;
                c12 = 1;
                const obj6 = { value: _awaitAsyncGenerator(iter.next()), done: false };
                return obj6;
              }
              break;
            }
            case 1: {
              c9 = 0;
              const tmp609 = closure_10;
              if (obj5.responseId) {
                const obj7 = {};
                obj7[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                closure_0.setAttributes(obj7);
              }
              if (obj5.responseModel) {
                const obj8 = {};
                obj8[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                closure_0.setAttributes(obj8);
              }
              const obj73 = closure_135_0(closure_135_1[5]);
              const result = obj73.setTokenUsageAttributes(
                closure_0,
                obj5.promptTokens,
                obj5.completionTokens,
                obj5.cacheCreationInputTokens,
                obj5.cacheReadInputTokens,
              );
              const obj9 = {};
              obj9[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_0.setAttributes(obj9);
              if (obj5.finishReasons.length > 0) {
                const obj10 = {};
                const setAttributes25 = closure_0.setAttributes;
                const _JSON17 = JSON;
                obj10[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  obj5.finishReasons,
                );
                setAttributes25(obj10);
              }
              const tmp652 = closure_1 && obj5.responseTexts.length > 0;
              if (tmp652) {
                const obj12 = {};
                const setAttributes26 = closure_0.setAttributes;
                const responseTexts9 = obj5.responseTexts;
                obj12[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
                setAttributes26(obj12);
              }
              const tmp662 = closure_1 && obj5.toolCalls.length > 0;
              if (tmp662) {
                const obj13 = {};
                const setAttributes27 = closure_0.setAttributes;
                const _JSON18 = JSON;
                obj13[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                  obj5.toolCalls,
                );
                setAttributes27(obj13);
              }
              closure_0.end();
              throw tmp609;
            }
            case 2: {
              value4 = closure_10;
              c9 = 3;
              const tmp602 = closure_4 && null != iter.return;
              if (!tmp602) {
                c9 = 1;
                const tmp675 = c5;
                if (tmp675) {
                  throw closure_3;
                } else {
                  throw value4;
                }
              } else {
                c11 = 16;
                c12 = 1;
                const obj14 = { value: closure_135_2(iter.return()), done: false };
                return obj14;
              }
              break;
            }
            case 3: {
              c9 = 1;
              const tmp597 = c5;
              if (tmp597) {
                throw closure_3;
              } else {
                throw tmp595;
              }
              break;
            }
            case 4: {
              c5 = true;
              closure_3 = closure_10;
              c9 = 8;
              const tmp522 = closure_4 && null != iter.return;
              if (tmp522) {
                c11 = 15;
                c12 = 1;
                const obj15 = { value: closure_135_2(iter.return()), done: false };
                return obj15;
              } else {
                c9 = 1;
                const tmp525 = c5;
                if (tmp525) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj5.responseId) {
                    const obj16 = {};
                    obj16[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                    closure_0.setAttributes(obj16);
                  }
                  if (obj5.responseModel) {
                    const obj17 = {};
                    obj17[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                    closure_0.setAttributes(obj17);
                  }
                  const obj64 = closure_135_0(closure_135_1[5]);
                  const result1 = obj64.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.cacheCreationInputTokens,
                    obj5.cacheReadInputTokens,
                  );
                  const obj18 = {};
                  obj18[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj18);
                  if (obj5.finishReasons.length > 0) {
                    const obj20 = {};
                    const setAttributes22 = closure_0.setAttributes;
                    const _JSON15 = JSON;
                    obj20[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes22(obj20);
                  }
                  const tmp567 = closure_1 && obj5.responseTexts.length > 0;
                  if (tmp567) {
                    const obj21 = {};
                    const setAttributes23 = closure_0.setAttributes;
                    const responseTexts8 = obj5.responseTexts;
                    obj21[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                    setAttributes23(obj21);
                  }
                  const tmp577 = closure_1 && obj5.toolCalls.length > 0;
                  if (tmp577) {
                    const obj22 = {};
                    const setAttributes24 = closure_0.setAttributes;
                    const _JSON16 = JSON;
                    obj22[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj5.toolCalls,
                    );
                    setAttributes24(obj22);
                  }
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
                  const tmp445 = closure_4 && null != iter.return;
                  if (tmp445) {
                    c11 = 9;
                    c12 = 1;
                    const obj23 = { value: closure_135_2(iter.return()), done: false };
                    return obj23;
                  } else {
                    c9 = 1;
                    const tmp448 = c5;
                    if (tmp448) {
                      throw closure_3;
                    } else {
                      c9 = 0;
                      if (obj5.responseId) {
                        const obj24 = {};
                        obj24[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                        closure_0.setAttributes(obj24);
                      }
                      if (obj5.responseModel) {
                        const obj25 = {};
                        obj25[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                        closure_0.setAttributes(obj25);
                      }
                      const obj55 = closure_135_0(closure_135_1[5]);
                      const result2 = obj55.setTokenUsageAttributes(
                        closure_0,
                        obj5.promptTokens,
                        obj5.completionTokens,
                        obj5.cacheCreationInputTokens,
                        obj5.cacheReadInputTokens,
                      );
                      const obj26 = {};
                      obj26[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      closure_0.setAttributes(obj26);
                      if (obj5.finishReasons.length > 0) {
                        const obj28 = {};
                        const setAttributes19 = closure_0.setAttributes;
                        const _JSON13 = JSON;
                        obj28[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(obj5.finishReasons);
                        setAttributes19(obj28);
                      }
                      const tmp490 = closure_1 && obj5.responseTexts.length > 0;
                      if (tmp490) {
                        const obj29 = {};
                        const setAttributes20 = closure_0.setAttributes;
                        const responseTexts7 = obj5.responseTexts;
                        obj29[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                        setAttributes20(obj29);
                      }
                      const tmp500 = closure_1 && obj5.toolCalls.length > 0;
                      if (tmp500) {
                        const obj30 = {};
                        const setAttributes21 = closure_0.setAttributes;
                        const _JSON14 = JSON;
                        obj30[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                          obj5.toolCalls,
                        );
                        setAttributes21(obj30);
                      }
                      closure_0.end();
                      c12 = 3;
                      const obj31 = { value: value3, done: true };
                      return obj31;
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
                    closure_135_5(value5, obj5, closure_1, closure_0);
                    c11 = 6;
                    c12 = 1;
                    const obj32 = { value: value5, done: false };
                    return obj32;
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
                const tmp361 = closure_4 && null != iter.return;
                if (tmp361) {
                  c11 = 13;
                  c12 = 1;
                  const obj33 = { value: closure_135_2(iter.return()), done: false };
                  return obj33;
                } else {
                  c9 = 1;
                  const tmp364 = c5;
                  if (tmp364) {
                    throw closure_3;
                  } else {
                    c9 = 0;
                    if (obj5.responseId) {
                      const obj34 = {};
                      obj34[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                      closure_0.setAttributes(obj34);
                    }
                    if (obj5.responseModel) {
                      const obj36 = {};
                      obj36[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                      closure_0.setAttributes(obj36);
                    }
                    const obj45 = closure_135_0(closure_135_1[5]);
                    const result3 = obj45.setTokenUsageAttributes(
                      closure_0,
                      obj5.promptTokens,
                      obj5.completionTokens,
                      obj5.cacheCreationInputTokens,
                      obj5.cacheReadInputTokens,
                    );
                    const obj37 = {};
                    obj37[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    closure_0.setAttributes(obj37);
                    if (obj5.finishReasons.length > 0) {
                      const obj38 = {};
                      const setAttributes16 = closure_0.setAttributes;
                      const _JSON11 = JSON;
                      obj38[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                        obj5.finishReasons,
                      );
                      setAttributes16(obj38);
                    }
                    const tmp406 = closure_1 && obj5.responseTexts.length > 0;
                    if (tmp406) {
                      const obj39 = {};
                      const setAttributes17 = closure_0.setAttributes;
                      const responseTexts6 = obj5.responseTexts;
                      obj39[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                      setAttributes17(obj39);
                    }
                    const tmp416 = closure_1 && obj5.toolCalls.length > 0;
                    if (tmp416) {
                      const obj40 = {};
                      const setAttributes18 = closure_0.setAttributes;
                      const _JSON12 = JSON;
                      obj40[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                        obj5.toolCalls,
                      );
                      setAttributes18(obj40);
                    }
                    closure_0.end();
                    c12 = 3;
                    const obj41 = { value, done: true };
                    return obj41;
                  }
                }
              } else {
                closure_4 = false;
                c11 = 7;
                c12 = 1;
                const obj42 = { value: closure_135_2(iter.next()), done: false };
                return obj42;
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
                  const tmp283 = closure_4 && null != iter.return;
                  if (tmp283) {
                    c11 = 11;
                    c12 = 1;
                    const obj43 = { value: closure_135_2(iter.return()), done: false };
                    return obj43;
                  } else {
                    c9 = 1;
                    const tmp286 = c5;
                    if (tmp286) {
                      throw closure_3;
                    } else {
                      c9 = 0;
                      if (obj5.responseId) {
                        const obj44 = {};
                        obj44[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                        closure_0.setAttributes(obj44);
                      }
                      if (obj5.responseModel) {
                        const obj46 = {};
                        obj46[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                        closure_0.setAttributes(obj46);
                      }
                      const obj35 = closure_135_0(closure_135_1[5]);
                      const result4 = obj35.setTokenUsageAttributes(
                        closure_0,
                        obj5.promptTokens,
                        obj5.completionTokens,
                        obj5.cacheCreationInputTokens,
                        obj5.cacheReadInputTokens,
                      );
                      const obj47 = {};
                      obj47[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      closure_0.setAttributes(obj47);
                      if (obj5.finishReasons.length > 0) {
                        const obj48 = {};
                        const setAttributes13 = closure_0.setAttributes;
                        const _JSON9 = JSON;
                        obj48[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(obj5.finishReasons);
                        setAttributes13(obj48);
                      }
                      const tmp328 = closure_1 && obj5.responseTexts.length > 0;
                      if (tmp328) {
                        const obj49 = {};
                        const setAttributes14 = closure_0.setAttributes;
                        const responseTexts5 = obj5.responseTexts;
                        obj49[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                        setAttributes14(obj49);
                      }
                      const tmp338 = closure_1 && obj5.toolCalls.length > 0;
                      if (tmp338) {
                        const obj50 = {};
                        const setAttributes15 = closure_0.setAttributes;
                        const _JSON10 = JSON;
                        obj50[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                          obj5.toolCalls,
                        );
                        setAttributes15(obj50);
                      }
                      closure_0.end();
                      c12 = 3;
                      const obj51 = { value: value2, done: true };
                      return obj51;
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
              const tmp279 = c5;
              if (tmp279) {
                throw closure_3;
              } else {
                throw tmp277;
              }
              break;
            }
            case 9: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp759 = c5;
                if (tmp759) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj5.responseId) {
                    const obj52 = {};
                    obj52[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                    closure_0.setAttributes(obj52);
                  }
                  if (obj5.responseModel) {
                    const obj53 = {};
                    obj53[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                    closure_0.setAttributes(obj53);
                  }
                  const obj27 = closure_135_0(closure_135_1[5]);
                  const result5 = obj27.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.cacheCreationInputTokens,
                    obj5.cacheReadInputTokens,
                  );
                  const obj54 = {};
                  obj54[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj54);
                  if (obj5.finishReasons.length > 0) {
                    const obj56 = {};
                    const setAttributes10 = closure_0.setAttributes;
                    const _JSON7 = JSON;
                    obj56[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes10(obj56);
                  }
                  const tmp253 = closure_1 && obj5.responseTexts.length > 0;
                  if (tmp253) {
                    const obj57 = {};
                    const setAttributes11 = closure_0.setAttributes;
                    const responseTexts4 = obj5.responseTexts;
                    obj57[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                    setAttributes11(obj57);
                  }
                  const tmp263 = closure_1 && obj5.toolCalls.length > 0;
                  if (tmp263) {
                    const obj58 = {};
                    const setAttributes12 = closure_0.setAttributes;
                    const _JSON8 = JSON;
                    obj58[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj5.toolCalls,
                    );
                    setAttributes12(obj58);
                  }
                  closure_0.end();
                  c12 = 3;
                  const obj59 = { value, done: true };
                  return obj59;
                }
              }
              break;
            }
            case 10: {
              c9 = 1;
              const tmp210 = c5;
              if (tmp210) {
                throw closure_3;
              } else {
                throw tmp208;
              }
              break;
            }
            case 11: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp757 = c5;
                if (tmp757) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj5.responseId) {
                    const obj60 = {};
                    obj60[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                    closure_0.setAttributes(obj60);
                  }
                  if (obj5.responseModel) {
                    const obj61 = {};
                    obj61[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                    closure_0.setAttributes(obj61);
                  }
                  const obj19 = closure_135_0(closure_135_1[5]);
                  const result6 = obj19.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.cacheCreationInputTokens,
                    obj5.cacheReadInputTokens,
                  );
                  const obj62 = {};
                  obj62[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj62);
                  if (obj5.finishReasons.length > 0) {
                    const obj63 = {};
                    const setAttributes7 = closure_0.setAttributes;
                    const _JSON5 = JSON;
                    obj63[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes7(obj63);
                  }
                  const tmp184 = closure_1 && obj5.responseTexts.length > 0;
                  if (tmp184) {
                    const obj65 = {};
                    const setAttributes8 = closure_0.setAttributes;
                    const responseTexts3 = obj5.responseTexts;
                    obj65[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                    setAttributes8(obj65);
                  }
                  const tmp194 = closure_1 && obj5.toolCalls.length > 0;
                  if (tmp194) {
                    const obj66 = {};
                    const setAttributes9 = closure_0.setAttributes;
                    const _JSON6 = JSON;
                    obj66[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj5.toolCalls,
                    );
                    setAttributes9(obj66);
                  }
                  closure_0.end();
                  c12 = 3;
                  const obj67 = { value, done: true };
                  return obj67;
                }
              }
              break;
            }
            case 12: {
              c9 = 1;
              const tmp141 = c5;
              if (tmp141) {
                throw closure_3;
              } else {
                throw tmp139;
              }
              break;
            }
            case 13: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp755 = c5;
                if (tmp755) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj5.responseId) {
                    const obj68 = {};
                    obj68[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                    closure_0.setAttributes(obj68);
                  }
                  if (obj5.responseModel) {
                    const obj69 = {};
                    obj69[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                    closure_0.setAttributes(obj69);
                  }
                  const obj11 = closure_135_0(closure_135_1[5]);
                  const result7 = obj11.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.cacheCreationInputTokens,
                    obj5.cacheReadInputTokens,
                  );
                  const obj70 = {};
                  obj70[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj70);
                  if (obj5.finishReasons.length > 0) {
                    const obj71 = {};
                    const setAttributes4 = closure_0.setAttributes;
                    const _JSON3 = JSON;
                    obj71[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes4(obj71);
                  }
                  const tmp115 = closure_1 && obj5.responseTexts.length > 0;
                  if (tmp115) {
                    const obj72 = {};
                    const setAttributes5 = closure_0.setAttributes;
                    const responseTexts2 = obj5.responseTexts;
                    obj72[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    setAttributes5(obj72);
                  }
                  const tmp125 = closure_1 && obj5.toolCalls.length > 0;
                  if (tmp125) {
                    const obj74 = {};
                    const setAttributes6 = closure_0.setAttributes;
                    const _JSON4 = JSON;
                    obj74[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj5.toolCalls,
                    );
                    setAttributes6(obj74);
                  }
                  closure_0.end();
                  c12 = 3;
                  const obj75 = { value, done: true };
                  return obj75;
                }
              }
              break;
            }
            case 14: {
              c9 = 1;
              const tmp72 = c5;
              if (tmp72) {
                throw closure_3;
              } else {
                throw tmp70;
              }
              break;
            }
            case 15: {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 1;
                const tmp753 = c5;
                if (tmp753) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  let tmp5 = obj5;
                  if (obj5.responseId) {
                    let tmp8 = closure_0;
                    obj = {};
                    obj[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                    closure_0.setAttributes(obj);
                  }
                  if (obj5.responseModel) {
                    const obj76 = {};
                    obj76[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                    closure_0.setAttributes(obj76);
                  }
                  const obj3 = closure_135_0(closure_135_1[5]);
                  const result8 = obj3.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.cacheCreationInputTokens,
                    obj5.cacheReadInputTokens,
                  );
                  const obj77 = {};
                  obj77[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj77);
                  if (obj5.finishReasons.length > 0) {
                    const obj78 = {};
                    const setAttributes = closure_0.setAttributes;
                    const _JSON = JSON;
                    obj78[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes(obj78);
                  }
                  const tmp46 = closure_1 && obj5.responseTexts.length > 0;
                  if (tmp46) {
                    const obj79 = {};
                    const setAttributes2 = closure_0.setAttributes;
                    const responseTexts = obj5.responseTexts;
                    obj79[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                    setAttributes2(obj79);
                  }
                  const tmp56 = closure_1 && obj5.toolCalls.length > 0;
                  if (tmp56) {
                    const obj80 = {};
                    const setAttributes3 = closure_0.setAttributes;
                    const _JSON2 = JSON;
                    obj80[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj5.toolCalls,
                    );
                    setAttributes3(obj80);
                  }
                  closure_0.end();
                  c12 = 3;
                  const obj81 = { value, done: true };
                  return obj81;
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
                const tmp679 = c5;
                if (tmp679) {
                  throw closure_3;
                } else {
                  c9 = 0;
                  if (obj5.responseId) {
                    const obj83 = {};
                    obj83[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = obj5.responseId;
                    closure_0.setAttributes(obj83);
                  }
                  if (obj5.responseModel) {
                    const obj84 = {};
                    obj84[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = obj5.responseModel;
                    closure_0.setAttributes(obj84);
                  }
                  const obj82 = closure_135_0(closure_135_1[5]);
                  const result9 = obj82.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.cacheCreationInputTokens,
                    obj5.cacheReadInputTokens,
                  );
                  const obj85 = {};
                  obj85[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj85);
                  if (obj5.finishReasons.length > 0) {
                    const obj86 = {};
                    const setAttributes28 = closure_0.setAttributes;
                    const _JSON19 = JSON;
                    obj86[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes28(obj86);
                  }
                  const tmp721 = closure_1 && obj5.responseTexts.length > 0;
                  if (tmp721) {
                    const obj87 = {};
                    const setAttributes29 = closure_0.setAttributes;
                    const responseTexts10 = obj5.responseTexts;
                    obj87[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                    setAttributes29(obj87);
                  }
                  const tmp731 = closure_1 && obj5.toolCalls.length > 0;
                  if (tmp731) {
                    const obj88 = {};
                    const setAttributes30 = closure_0.setAttributes;
                    const _JSON20 = JSON;
                    obj88[closure_135_0(closure_135_1[4]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
                      obj5.toolCalls,
                    );
                    setAttributes30(obj88);
                  }
                  closure_0.end();
                  c12 = 3;
                  const obj89 = { value, done: true };
                  return obj89;
                }
              }
              break;
            }
          }
        } catch (tmp744) {
          closure_10 = tmp744;
          if (0 === c9) {
            c12 = 3;
            throw tmp744;
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

export const instrumentAsyncIterableStream = function instrumentAsyncIterableStream(arg0, arg1, c1) {
  return obj(...arguments);
};
export const instrumentMessageStream = function instrumentMessageStream(applyResult, arg1, flag) {
  let closure_0 = arg1;
  let closure_1 = flag;
  let closure_2 = {
    responseTexts: [],
    finishReasons: [],
    responseId: "",
    responseModel: "",
    promptTokens: "r",
    completionTokens: "duration",
    cacheCreationInputTokens: "code",
    cacheReadInputTokens: "Array",
    toolCalls: [],
    activeToolBlocks: {},
  };
  applyResult.on("streamEvent", (arg0) => {
    processEvent(arg0, closure_2, flag, closure_0);
  });
  applyResult.on("message", () => {
    let tmp2 = closure_1;
    if (closure_0.isRecording()) {
      if (closure_2.responseId) {
        const obj2 = {};
        obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_ID_ATTRIBUTE] = closure_2.responseId;
        closure_0.setAttributes(obj2);
      }
      if (closure_2.responseModel) {
        const obj3 = {};
        obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = closure_2.responseModel;
        closure_0.setAttributes(obj3);
      }
      const obj4 = _mod836;
      const result = obj4.setTokenUsageAttributes(
        closure_0,
        closure_2.promptTokens,
        closure_2.completionTokens,
        closure_2.cacheCreationInputTokens,
        closure_2.cacheReadInputTokens,
      );
      const obj5 = {};
      closure_1 = true;
      obj5[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
      closure_0.setAttributes(obj5);
      if (closure_2.finishReasons.length > 0) {
        const obj6 = {};
        const setAttributes = closure_0.setAttributes;
        const _JSON = JSON;
        obj6[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
          closure_2.finishReasons,
        );
        setAttributes(obj6);
      }
      const tmp21 = tmp2 && closure_2.responseTexts.length > 0;
      if (tmp21) {
        const obj7 = {};
        const setAttributes2 = closure_0.setAttributes;
        const responseTexts = closure_2.responseTexts;
        obj7[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
        setAttributes2(obj7);
      }
      if (tmp2) {
        tmp2 = closure_2.toolCalls.length > 0;
      }
      if (tmp2) {
        const obj8 = {};
        const setAttributes3 = closure_0.setAttributes;
        const _JSON2 = JSON;
        obj8[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
          closure_2.toolCalls,
        );
        setAttributes3(obj8);
      }
      closure_0.end();
    }
  });
  applyResult.on("error", (error) => {
    obj = _mod745;
    obj.captureException(error, { mechanism: { handled: false, type: "auto.ai.anthropic.stream_error" } });
    if (closure_0.isRecording()) {
      const setStatus = closure_0.setStatus;
      const obj3 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "stream_error" };
      setStatus(obj3);
      closure_0.end();
    }
  });
  return applyResult;
};
