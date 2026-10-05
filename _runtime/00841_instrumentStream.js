// _runtime/00841_instrumentStream.js
import SPAN_STATUS_ERROR from "00716_SPAN_STATUS_ERROR.js";
import _mod745 from "metro/00745__.js";
import INSTRUMENTED_METHODS from "00840_INSTRUMENTED_METHODS.js";
import _awaitAsyncGenerator from "00842__awaitAsyncGenerator.js";
import _wrapAsyncGenerator from "00844__wrapAsyncGenerator.js";

let c21, c22, closure_12, closure_20;

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
function processChatCompletionToolCalls(tool_calls, chatCompletionToolCalls) {
  let obj2;
  const iter = tool_calls[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let index = nextResult.index;
    let tmp3 = index;
    if (undefined !== index) {
      if (tmp2.function) {
        chatCompletionToolCalls = chatCompletionToolCalls.chatCompletionToolCalls;
        if (tmp3 in chatCompletionToolCalls.chatCompletionToolCalls) {
          let tmp10 = chatCompletionToolCalls[tmp3];
          let _arguments = tmp2.function.arguments;
          if (_arguments) {
            let _function1;
            if (tmp10 != null) {
              _function1 = tmp10.function;
            }
            _arguments = _function1;
          }
          if (_arguments) {
            let _function = tmp10.function;
            _function.arguments = _function.arguments + tmp2.function.arguments;
          }
        } else {
          obj = { function: obj2 };
          let merged = Object.assign(nextResult);
          obj2 = { name: tmp2.function.name, arguments: tmp2.function.arguments || "" };
          chatCompletionToolCalls[tmp3] = obj;
        }
      }
    }
    continue;
  }
}
function processChatCompletionChunk(id, responseId, arg2) {
  responseId = id.id;
  if (responseId == null) {
    responseId = responseId.responseId;
  }
  responseId.responseId = responseId;
  let responseModel = id.model;
  if (responseModel == null) {
    responseModel = responseId.responseModel;
  }
  responseId.responseModel = responseModel;
  let responseTimestamp = id.created;
  if (responseTimestamp == null) {
    responseTimestamp = responseId.responseTimestamp;
  }
  responseId.responseTimestamp = responseTimestamp;
  if (id.usage) {
    responseId.promptTokens = id.usage.prompt_tokens;
    responseId.completionTokens = id.usage.completion_tokens;
    responseId.totalTokens = id.usage.total_tokens;
  }
  let choices = id.choices;
  if (choices == null) {
    choices = [];
  }
  for (const item10020 of choices) {
    if (arg2) {
      let delta = item10020.delta;
      let content;
      if (delta != null) {
        content = delta.content;
      }
      if (content) {
        let responseTexts = responseId.responseTexts;
        let arr = responseTexts.push(item10020.delta.content);
      }
      let delta2 = item10020.delta;
      let tool_calls;
      if (delta2 != null) {
        tool_calls = delta2.tool_calls;
      }
      if (tool_calls) {
        let tmp10 = processChatCompletionToolCalls(item10020.delta.tool_calls, responseId);
      }
    }
    if (item10020.finish_reason) {
      let finishReasons = responseId.finishReasons;
      let arr2 = finishReasons.push(item10020.finish_reason);
    }
    continue;
  }
}
function processResponsesApiEvent(type, responsesApiToolCalls, arg2, setStatus) {
  if (type) {
    if (typeof type === "object") {
      const _Error = Error;
      if (type instanceof Error) {
        setStatus = setStatus.setStatus;
        obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        setStatus(obj);
        const obj3 = { mechanism: { handled: false, type: "auto.ai.openai.stream-response" } };
        const obj2 = _mod745;
        obj2.captureException(type, obj3);
      } else if ("type" in type) {
        const RESPONSE_EVENT_TYPES = INSTRUMENTED_METHODS.RESPONSE_EVENT_TYPES;
        if (RESPONSE_EVENT_TYPES.includes(type.type)) {
          let output_text = arg2;
          if (output_text) {
            const tmp6 = "response.output_item.done" === type.type && "item" in type;
            if (tmp6) {
              const prop = responsesApiToolCalls.responsesApiToolCalls;
              prop.push(type.item);
            }
            if ("response.output_text.delta" === type.type) {
              if ("delta" in type) {
                if (type.delta) {
                  const responseTexts = responsesApiToolCalls.responseTexts;
                  responseTexts.push(type.delta);
                }
              }
            }
          }
          if ("response" in type) {
            const response = type.response;
            let responseId = response.id;
            if (responseId == null) {
              responseId = responsesApiToolCalls.responseId;
            }
            responsesApiToolCalls.responseId = responseId;
            let responseModel = response.model;
            if (responseModel == null) {
              responseModel = responsesApiToolCalls.responseModel;
            }
            responsesApiToolCalls.responseModel = responseModel;
            let responseTimestamp = response.created_at;
            if (responseTimestamp == null) {
              responseTimestamp = responsesApiToolCalls.responseTimestamp;
            }
            responsesApiToolCalls.responseTimestamp = responseTimestamp;
            if (response.usage) {
              responsesApiToolCalls.promptTokens = response.usage.input_tokens;
              responsesApiToolCalls.completionTokens = response.usage.output_tokens;
              responsesApiToolCalls.totalTokens = response.usage.total_tokens;
            }
            if (response.status) {
              const finishReasons = responsesApiToolCalls.finishReasons;
              finishReasons.push(response.status);
            }
            if (output_text) {
              output_text = response.output_text;
            }
            if (output_text) {
              const responseTexts1 = responsesApiToolCalls.responseTexts;
              responseTexts1.push(response.output_text);
            }
          }
        } else {
          const eventTypes = responsesApiToolCalls.eventTypes;
          eventTypes.push(type.type);
        }
      }
    }
  }
  const eventTypes1 = responsesApiToolCalls.eventTypes;
  eventTypes1.push("unknown:non-object");
}
let obj = function _instrumentStream() {
  obj = _wrapAsyncGenerator(async (arg0, arg1, arg2) => {
    let tmp;
    let tmp3;
    let value;
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
            let tmp62 = new closure_1_4(callResult);
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
    if (c22 === 2) {
      c22 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let str2 = "";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c19;
        try {
          let closure_17;
          let closure_18;
          let closure_3;
          let value2;
          let items9;
          let obj5;
          let c4;
          let c5;
          let iter;
          let num = 2;
          c22 = 2;
          switch (c21) {
            case 0: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c22 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_17 = tmp;
                closure_18 = tmp4;
                closure_0 = closure_1;
                closure_1 = closure_2;
                closure_3 = undefined;
                value = undefined;
                value2 = undefined;
                items9 = undefined;
                obj5 = {
                  eventTypes: [],
                  responseTexts: [],
                  finishReasons: [],
                  responseId: "",
                  responseModel: "",
                  responseTimestamp: 0,
                  promptTokens: "r",
                  completionTokens: "enabled",
                  totalTokens: "toCharArray$esjava$1",
                  chatCompletionToolCalls: {},
                  responsesApiToolCalls: [],
                };
                c4 = false;
                c5 = false;
                c19 = 4;
                iter = _asyncIterator(closure_0);
                c21 = 5;
                c22 = 1;
                const obj6 = { value: _awaitAsyncGenerator(iter.next()), done: false };
                return obj6;
              }
              break;
            }
            case 1: {
              c19 = 0;
              const obj65 = closure_145_0(closure_145_1[5]);
              const result = obj65.setCommonResponseAttributes(
                closure_0,
                obj5.responseId,
                obj5.responseModel,
                obj5.responseTimestamp,
              );
              const obj66 = closure_145_0(closure_145_1[5]);
              const result1 = obj66.setTokenUsageAttributes(
                closure_0,
                obj5.promptTokens,
                obj5.completionTokens,
                obj5.totalTokens,
              );
              const obj7 = {};
              obj7[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
              closure_0.setAttributes(obj7);
              const tmp569 = closure_20;
              if (obj5.finishReasons.length) {
                const obj10 = {};
                const setAttributes25 = closure_0.setAttributes;
                const _JSON17 = JSON;
                obj10[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                  obj5.finishReasons,
                );
                setAttributes25(obj10);
              }
              const length9 = closure_1 && obj5.responseTexts.length;
              if (length9) {
                const obj11 = {};
                const setAttributes26 = closure_0.setAttributes;
                const responseTexts9 = obj5.responseTexts;
                obj11[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
                setAttributes26(obj11);
              }
              closure_12 = 0;
              const _Object9 = Object;
              const items = [];
              closure_12 = HermesBuiltin.arraySpread(items, Object.values(obj5.chatCompletionToolCalls), closure_12);
              closure_12 = HermesBuiltin.arraySpread(items, obj5.responsesApiToolCalls, closure_12);
              items9 = items;
              if (items9.length > 0) {
                const obj12 = {};
                const setAttributes27 = closure_0.setAttributes;
                const _JSON18 = JSON;
                obj12[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                setAttributes27(obj12);
              }
              closure_0.end();
              throw tmp569;
            }
            case 2: {
              let closure_16 = closure_20;
              c19 = 3;
              const tmp561 = c4 && null != iter.return;
              if (!tmp561) {
                c19 = 1;
                const tmp627 = c5;
                if (tmp627) {
                  throw closure_3;
                } else {
                  throw closure_16;
                }
              } else {
                c21 = 16;
                c22 = 1;
                const obj13 = { value: closure_145_2(iter.return()), done: false };
                return obj13;
              }
              break;
            }
            case 3: {
              c19 = 1;
              const tmp556 = c5;
              if (tmp556) {
                throw closure_3;
              } else {
                throw tmp554;
              }
              break;
            }
            case 4: {
              c5 = true;
              closure_3 = closure_20;
              c19 = 8;
              const tmp488 = c4 && null != iter.return;
              if (tmp488) {
                c21 = 15;
                c22 = 1;
                const obj14 = { value: closure_145_2(iter.return()), done: false };
                return obj14;
              } else {
                c19 = 1;
                const tmp491 = c5;
                if (tmp491) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  const obj57 = closure_145_0(closure_145_1[5]);
                  const result2 = obj57.setCommonResponseAttributes(
                    closure_0,
                    obj5.responseId,
                    obj5.responseModel,
                    obj5.responseTimestamp,
                  );
                  const obj58 = closure_145_0(closure_145_1[5]);
                  const result3 = obj58.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.totalTokens,
                  );
                  const obj15 = {};
                  obj15[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj15);
                  if (obj5.finishReasons.length) {
                    const obj18 = {};
                    const setAttributes22 = closure_0.setAttributes;
                    const _JSON15 = JSON;
                    obj18[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes22(obj18);
                  }
                  const length8 = closure_1 && obj5.responseTexts.length;
                  if (length8) {
                    const obj19 = {};
                    const setAttributes23 = closure_0.setAttributes;
                    const responseTexts8 = obj5.responseTexts;
                    obj19[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                    setAttributes23(obj19);
                  }
                  let closure_11 = 0;
                  const _Object8 = Object;
                  const items1 = [];
                  closure_11 = HermesBuiltin.arraySpread(
                    items1,
                    Object.values(obj5.chatCompletionToolCalls),
                    closure_11,
                  );
                  closure_11 = HermesBuiltin.arraySpread(items1, obj5.responsesApiToolCalls, closure_11);
                  items9 = items1;
                  if (items9.length > 0) {
                    const obj20 = {};
                    const setAttributes24 = closure_0.setAttributes;
                    const _JSON16 = JSON;
                    obj20[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(items9);
                    setAttributes24(obj20);
                  }
                  closure_0.end();
                  c22 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              break;
            }
            case 5: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else {
                const value5 = value;
                if (arg0 === 2) {
                  c19 = 5;
                  const tmp418 = c4 && null != iter.return;
                  if (tmp418) {
                    c21 = 8;
                    c22 = 1;
                    const obj21 = { value: closure_145_2(iter.return()), done: false };
                    return obj21;
                  } else {
                    c19 = 1;
                    const tmp421 = c5;
                    if (tmp421) {
                      throw closure_3;
                    } else {
                      c19 = 0;
                      const obj49 = closure_145_0(closure_145_1[5]);
                      const result4 = obj49.setCommonResponseAttributes(
                        closure_0,
                        obj5.responseId,
                        obj5.responseModel,
                        obj5.responseTimestamp,
                      );
                      const obj50 = closure_145_0(closure_145_1[5]);
                      const result5 = obj50.setTokenUsageAttributes(
                        closure_0,
                        obj5.promptTokens,
                        obj5.completionTokens,
                        obj5.totalTokens,
                      );
                      const obj22 = {};
                      obj22[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      closure_0.setAttributes(obj22);
                      if (obj5.finishReasons.length) {
                        const obj23 = {};
                        const setAttributes19 = closure_0.setAttributes;
                        const _JSON13 = JSON;
                        obj23[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(obj5.finishReasons);
                        setAttributes19(obj23);
                      }
                      const length7 = closure_1 && obj5.responseTexts.length;
                      if (length7) {
                        const obj26 = {};
                        const setAttributes20 = closure_0.setAttributes;
                        const responseTexts7 = obj5.responseTexts;
                        obj26[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                        setAttributes20(obj26);
                      }
                      let closure_4 = 0;
                      const _Object7 = Object;
                      const items2 = [];
                      closure_4 = HermesBuiltin.arraySpread(
                        items2,
                        Object.values(obj5.chatCompletionToolCalls),
                        closure_4,
                      );
                      closure_4 = HermesBuiltin.arraySpread(items2, obj5.responsesApiToolCalls, closure_4);
                      items9 = items2;
                      if (items9.length > 0) {
                        const obj27 = {};
                        const setAttributes21 = closure_0.setAttributes;
                        const _JSON14 = JSON;
                        obj27[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                          JSON.stringify(items9);
                        setAttributes21(obj27);
                      }
                      closure_0.end();
                      c22 = 3;
                      const obj28 = { value: value5, done: true };
                      return obj28;
                    }
                  }
                } else {
                  const done2 = value.done;
                  c4 = !done2;
                  if (done2) {
                    c19 = 2;
                  } else {
                    value2 = value.value;
                    const obj46 = closure_145_0(closure_145_1[5]);
                    if (obj46.isChatCompletionChunk(value2)) {
                      closure_145_6(value2, obj5, closure_1);
                    } else {
                      const obj47 = closure_145_0(closure_145_1[5]);
                      if (obj47.isResponsesApiStreamEvent(value2)) {
                        closure_145_7(value2, obj5, closure_1, closure_0);
                      }
                    }
                    c21 = 11;
                    c22 = 1;
                    const obj29 = { value: value2, done: false };
                    return obj29;
                  }
                }
              }
              break;
            }
            case 6: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else {
                const value4 = value;
                if (arg0 === 2) {
                  c19 = 6;
                  const tmp326 = c4 && null != iter.return;
                  if (tmp326) {
                    c21 = 10;
                    c22 = 1;
                    const obj30 = { value: closure_145_2(iter.return()), done: false };
                    return obj30;
                  } else {
                    c19 = 1;
                    const tmp329 = c5;
                    if (tmp329) {
                      throw closure_3;
                    } else {
                      c19 = 0;
                      const obj38 = closure_145_0(closure_145_1[5]);
                      const result6 = obj38.setCommonResponseAttributes(
                        closure_0,
                        obj5.responseId,
                        obj5.responseModel,
                        obj5.responseTimestamp,
                      );
                      const obj39 = closure_145_0(closure_145_1[5]);
                      const result7 = obj39.setTokenUsageAttributes(
                        closure_0,
                        obj5.promptTokens,
                        obj5.completionTokens,
                        obj5.totalTokens,
                      );
                      const obj33 = {};
                      obj33[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      closure_0.setAttributes(obj33);
                      if (obj5.finishReasons.length) {
                        const obj34 = {};
                        const setAttributes16 = closure_0.setAttributes;
                        const _JSON11 = JSON;
                        obj34[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(obj5.finishReasons);
                        setAttributes16(obj34);
                      }
                      const length6 = closure_1 && obj5.responseTexts.length;
                      if (length6) {
                        const obj35 = {};
                        const setAttributes17 = closure_0.setAttributes;
                        const responseTexts6 = obj5.responseTexts;
                        obj35[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                        setAttributes17(obj35);
                      }
                      value = 0;
                      const _Object6 = Object;
                      const items3 = [];
                      value = HermesBuiltin.arraySpread(items3, Object.values(obj5.chatCompletionToolCalls), value);
                      value = HermesBuiltin.arraySpread(items3, obj5.responsesApiToolCalls, value);
                      items9 = items3;
                      if (items9.length > 0) {
                        const obj36 = {};
                        const setAttributes18 = closure_0.setAttributes;
                        const _JSON12 = JSON;
                        obj36[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                          JSON.stringify(items9);
                        setAttributes18(obj36);
                      }
                      closure_0.end();
                      c22 = 3;
                      const obj37 = { value: value4, done: true };
                      return obj37;
                    }
                  }
                } else {
                  const done = value.done;
                  c4 = !done;
                }
              }
              break;
            }
            case 7: {
              c19 = 1;
              const tmp322 = c5;
              if (tmp322) {
                throw closure_3;
              } else {
                throw tmp320;
              }
              break;
            }
            case 8: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c19 = 1;
                const tmp704 = c5;
                if (tmp704) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  const obj31 = closure_145_0(closure_145_1[5]);
                  const result8 = obj31.setCommonResponseAttributes(
                    closure_0,
                    obj5.responseId,
                    obj5.responseModel,
                    obj5.responseTimestamp,
                  );
                  const obj32 = closure_145_0(closure_145_1[5]);
                  const result9 = obj32.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.totalTokens,
                  );
                  const obj40 = {};
                  obj40[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj40);
                  if (obj5.finishReasons.length) {
                    const obj41 = {};
                    const setAttributes13 = closure_0.setAttributes;
                    const _JSON9 = JSON;
                    obj41[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes13(obj41);
                  }
                  const length5 = closure_1 && obj5.responseTexts.length;
                  if (length5) {
                    const obj42 = {};
                    const setAttributes14 = closure_0.setAttributes;
                    const responseTexts5 = obj5.responseTexts;
                    obj42[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                    setAttributes14(obj42);
                  }
                  closure_3 = 0;
                  const _Object5 = Object;
                  const items4 = [];
                  closure_3 = HermesBuiltin.arraySpread(items4, Object.values(obj5.chatCompletionToolCalls), closure_3);
                  closure_3 = HermesBuiltin.arraySpread(items4, obj5.responsesApiToolCalls, closure_3);
                  items9 = items4;
                  if (items9.length > 0) {
                    const obj43 = {};
                    const setAttributes15 = closure_0.setAttributes;
                    const _JSON10 = JSON;
                    obj43[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(items9);
                    setAttributes15(obj43);
                  }
                  closure_0.end();
                  c22 = 3;
                  const obj44 = { value, done: true };
                  return obj44;
                }
              }
              break;
            }
            case 9: {
              c19 = 1;
              const tmp260 = c5;
              if (tmp260) {
                throw closure_3;
              } else {
                throw tmp258;
              }
              break;
            }
            case 10: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c19 = 1;
                const tmp702 = c5;
                if (tmp702) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  const obj24 = closure_145_0(closure_145_1[5]);
                  const result10 = obj24.setCommonResponseAttributes(
                    closure_0,
                    obj5.responseId,
                    obj5.responseModel,
                    obj5.responseTimestamp,
                  );
                  const obj25 = closure_145_0(closure_145_1[5]);
                  const result11 = obj25.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.totalTokens,
                  );
                  const obj45 = {};
                  obj45[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj45);
                  if (obj5.finishReasons.length) {
                    const obj48 = {};
                    const setAttributes10 = closure_0.setAttributes;
                    const _JSON7 = JSON;
                    obj48[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes10(obj48);
                  }
                  const length4 = closure_1 && obj5.responseTexts.length;
                  if (length4) {
                    const obj51 = {};
                    const setAttributes11 = closure_0.setAttributes;
                    const responseTexts4 = obj5.responseTexts;
                    obj51[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                    setAttributes11(obj51);
                  }
                  let closure_5 = 0;
                  const _Object4 = Object;
                  const items5 = [];
                  closure_5 = HermesBuiltin.arraySpread(items5, Object.values(obj5.chatCompletionToolCalls), closure_5);
                  closure_5 = HermesBuiltin.arraySpread(items5, obj5.responsesApiToolCalls, closure_5);
                  items9 = items5;
                  if (items9.length > 0) {
                    const obj52 = {};
                    const setAttributes12 = closure_0.setAttributes;
                    const _JSON8 = JSON;
                    obj52[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(items9);
                    setAttributes12(obj52);
                  }
                  closure_0.end();
                  c22 = 3;
                  const obj53 = { value, done: true };
                  return obj53;
                }
              }
              break;
            }
            case 11: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else {
                const value3 = value;
                if (arg0 === 2) {
                  c19 = 7;
                  const tmp134 = c4 && null != iter.return;
                  if (tmp134) {
                    c21 = 13;
                    c22 = 1;
                    const obj54 = { value: closure_145_2(iter.return()), done: false };
                    return obj54;
                  } else {
                    c19 = 1;
                    const tmp137 = c5;
                    if (tmp137) {
                      throw closure_3;
                    } else {
                      c19 = 0;
                      const obj16 = closure_145_0(closure_145_1[5]);
                      const result12 = obj16.setCommonResponseAttributes(
                        closure_0,
                        obj5.responseId,
                        obj5.responseModel,
                        obj5.responseTimestamp,
                      );
                      const obj17 = closure_145_0(closure_145_1[5]);
                      const result13 = obj17.setTokenUsageAttributes(
                        closure_0,
                        obj5.promptTokens,
                        obj5.completionTokens,
                        obj5.totalTokens,
                      );
                      const obj55 = {};
                      obj55[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                      closure_0.setAttributes(obj55);
                      if (obj5.finishReasons.length) {
                        const obj56 = {};
                        const setAttributes7 = closure_0.setAttributes;
                        const _JSON5 = JSON;
                        obj56[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] =
                          JSON.stringify(obj5.finishReasons);
                        setAttributes7(obj56);
                      }
                      const length3 = closure_1 && obj5.responseTexts.length;
                      if (length3) {
                        const obj59 = {};
                        const setAttributes8 = closure_0.setAttributes;
                        const responseTexts3 = obj5.responseTexts;
                        obj59[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                        setAttributes8(obj59);
                      }
                      let closure_8 = 0;
                      const _Object3 = Object;
                      const items6 = [];
                      closure_8 = HermesBuiltin.arraySpread(
                        items6,
                        Object.values(obj5.chatCompletionToolCalls),
                        closure_8,
                      );
                      closure_8 = HermesBuiltin.arraySpread(items6, obj5.responsesApiToolCalls, closure_8);
                      items9 = items6;
                      if (items9.length > 0) {
                        const obj60 = {};
                        const setAttributes9 = closure_0.setAttributes;
                        const _JSON6 = JSON;
                        obj60[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                          JSON.stringify(items9);
                        setAttributes9(obj60);
                      }
                      closure_0.end();
                      c22 = 3;
                      const obj61 = { value: value3, done: true };
                      return obj61;
                    }
                  }
                } else {
                  c4 = false;
                  c21 = 6;
                  c22 = 1;
                  const obj62 = { value: closure_145_2(iter.next()), done: false };
                  return obj62;
                }
              }
              break;
            }
            case 12: {
              c19 = 1;
              const tmp127 = c5;
              if (tmp127) {
                throw closure_3;
              } else {
                throw tmp125;
              }
              break;
            }
            case 13: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c19 = 1;
                const tmp700 = c5;
                if (tmp700) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  const obj8 = closure_145_0(closure_145_1[5]);
                  const result14 = obj8.setCommonResponseAttributes(
                    closure_0,
                    obj5.responseId,
                    obj5.responseModel,
                    obj5.responseTimestamp,
                  );
                  const obj9 = closure_145_0(closure_145_1[5]);
                  const result15 = obj9.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.totalTokens,
                  );
                  const obj63 = {};
                  obj63[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj63);
                  if (obj5.finishReasons.length) {
                    const obj64 = {};
                    const setAttributes4 = closure_0.setAttributes;
                    const _JSON3 = JSON;
                    obj64[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes4(obj64);
                  }
                  const length2 = closure_1 && obj5.responseTexts.length;
                  if (length2) {
                    const obj67 = {};
                    const setAttributes5 = closure_0.setAttributes;
                    const responseTexts2 = obj5.responseTexts;
                    obj67[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                    setAttributes5(obj67);
                  }
                  let closure_7 = 0;
                  const _Object2 = Object;
                  const items7 = [];
                  closure_7 = HermesBuiltin.arraySpread(items7, Object.values(obj5.chatCompletionToolCalls), closure_7);
                  closure_7 = HermesBuiltin.arraySpread(items7, obj5.responsesApiToolCalls, closure_7);
                  items9 = items7;
                  if (items9.length > 0) {
                    const obj68 = {};
                    const setAttributes6 = closure_0.setAttributes;
                    const _JSON4 = JSON;
                    obj68[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(items9);
                    setAttributes6(obj68);
                  }
                  closure_0.end();
                  c22 = 3;
                  const obj69 = { value, done: true };
                  return obj69;
                }
              }
              break;
            }
            case 14: {
              let tmp62 = closure_18;
              c19 = 1;
              const tmp65 = c5;
              if (tmp65) {
                throw closure_3;
              } else {
                throw tmp63;
              }
              break;
            }
            case 15: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c19 = 1;
                const tmp698 = c5;
                if (tmp698) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  let tmp5 = closure_17;
                  obj = closure_145_0(closure_145_1[5]);
                  let tmp8 = closure_0;
                  let tmp10 = obj5;
                  const result16 = obj.setCommonResponseAttributes(
                    closure_0,
                    obj5.responseId,
                    obj5.responseModel,
                    obj5.responseTimestamp,
                  );
                  let obj2 = closure_145_0(closure_145_1[5]);
                  const result17 = obj2.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.totalTokens,
                  );
                  const obj70 = {};
                  obj70[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj70);
                  if (obj5.finishReasons.length) {
                    const obj71 = {};
                    const setAttributes = closure_0.setAttributes;
                    const _JSON = JSON;
                    obj71[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes(obj71);
                  }
                  const length = closure_1 && obj5.responseTexts.length;
                  if (length) {
                    const obj72 = {};
                    const setAttributes2 = closure_0.setAttributes;
                    const responseTexts = obj5.responseTexts;
                    obj72[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                    setAttributes2(obj72);
                  }
                  let closure_9 = 0;
                  const _Object = Object;
                  const items8 = [];
                  closure_9 = HermesBuiltin.arraySpread(items8, Object.values(obj5.chatCompletionToolCalls), closure_9);
                  closure_9 = HermesBuiltin.arraySpread(items8, obj5.responsesApiToolCalls, closure_9);
                  items9 = items8;
                  if (items9.length > 0) {
                    const obj75 = {};
                    const setAttributes3 = closure_0.setAttributes;
                    const _JSON2 = JSON;
                    obj75[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(items9);
                    setAttributes3(obj75);
                  }
                  closure_0.end();
                  c22 = 3;
                  const obj76 = { value, done: true };
                  return obj76;
                }
              }
              break;
            }
            default: {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c19 = 1;
                const tmp631 = c5;
                if (tmp631) {
                  throw closure_3;
                } else {
                  c19 = 0;
                  const obj73 = closure_145_0(closure_145_1[5]);
                  const result18 = obj73.setCommonResponseAttributes(
                    closure_0,
                    obj5.responseId,
                    obj5.responseModel,
                    obj5.responseTimestamp,
                  );
                  const obj74 = closure_145_0(closure_145_1[5]);
                  const result19 = obj74.setTokenUsageAttributes(
                    closure_0,
                    obj5.promptTokens,
                    obj5.completionTokens,
                    obj5.totalTokens,
                  );
                  const obj77 = {};
                  obj77[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                  closure_0.setAttributes(obj77);
                  if (obj5.finishReasons.length) {
                    const obj78 = {};
                    const setAttributes28 = closure_0.setAttributes;
                    const _JSON19 = JSON;
                    obj78[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
                      obj5.finishReasons,
                    );
                    setAttributes28(obj78);
                  }
                  const length10 = closure_1 && obj5.responseTexts.length;
                  if (length10) {
                    const obj79 = {};
                    const setAttributes29 = closure_0.setAttributes;
                    const responseTexts10 = obj5.responseTexts;
                    obj79[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                    setAttributes29(obj79);
                  }
                  let closure_10 = 0;
                  const _Object10 = Object;
                  items9 = [];
                  closure_10 = HermesBuiltin.arraySpread(
                    items9,
                    Object.values(obj5.chatCompletionToolCalls),
                    closure_10,
                  );
                  closure_10 = HermesBuiltin.arraySpread(items9, obj5.responsesApiToolCalls, closure_10);
                  if (items9.length > 0) {
                    const obj80 = {};
                    const setAttributes30 = closure_0.setAttributes;
                    const _JSON20 = JSON;
                    obj80[closure_145_0(closure_145_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
                      JSON.stringify(items9);
                    setAttributes30(obj80);
                  }
                  closure_0.end();
                  c22 = 3;
                  const obj81 = { value, done: true };
                  return obj81;
                }
              }
              break;
            }
          }
        } catch (tmp689) {
          closure_20 = tmp689;
          if (0 === c19) {
            c22 = 3;
            throw tmp689;
          } else if (1 === c19) {
            c21 = 1;
          } else if (2 === c19) {
            c21 = 2;
          } else if (3 === c19) {
            c21 = 3;
          } else if (4 === c19) {
            c21 = 4;
          } else if (5 === c19) {
            c21 = 7;
          } else if (6 === c19) {
            c21 = 9;
          } else if (7 === c19) {
            c21 = 12;
          } else {
            c21 = 14;
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
