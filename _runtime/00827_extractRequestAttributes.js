// === Module 827: extractRequestAttributes ===

// Module 827 (extractRequestAttributes)
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 823 */;
import _mod825 from "module_825" /* 825 */;
import extractRequestParameters from "extractRequestParameters" /* 828 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function extractRequestAttributes(model, arr) {
  let obj = { [closure_1_0(closure_1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "openai" };
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_OPERATION_NAME_ATTRIBUTE] = extractRequestParameters.getOperationName(arr);
  obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.openai";
  if (model.length > 0) {
    if (typeof model[0] === "object") {
      if (null !== model[0]) {
        const first = model[0];
        const _Array = Array;
        const tmp5 = Array.isArray(first.tools) ? first.tools : [];
        const items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(tmp5, 0);
        if (first.web_search_options) {
          if (typeof first.web_search_options === "object") {
            obj = { type: "web_search_options" };
            const merged = Object.assign(first.web_search_options);
            const items1 = [obj];
            let items2 = items1;
          }
          arraySpreadResult = HermesBuiltin.arraySpread(items2, arraySpreadResult);
          let json;
          if (items.length > 0) {
            const _JSON = JSON;
            json = JSON.stringify(items);
          }
          if (json) {
            obj[tmp(823).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = json;
          }
          const _Object = Object;
          const merged1 = Object.assign(obj, tmp(828).extractRequestParameters(first));
          const tmpResult = tmp(828);
        }
        items2 = [];
      }
      return obj;
    }
  }
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
}
function addRequestAttributes(setAttribute, input) {
  if ("input" in input) {
    input = input.input;
  } else if ("messages" in input) {
    input = input.messages;
  }
  if (input) {
    if (0 !== length) {
      const truncatedJsonString = _mod825.getTruncatedJsonString(input);
      const attr = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, truncatedJsonString);
      if (length) {
        const attr1 = setAttribute.setAttribute(tmp2(823).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length);
      }
      tmp2 = require;
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentOpenAiClient = function instrumentOpenAiClient(arg0, arg1) {
  obj = require("module_713");
  const client = obj.getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const BooleanResult = Boolean(sendDefaultPii);
  obj = { recordInputs: BooleanResult, recordOutputs: BooleanResult };
  const merged = Object.assign(arg1);
  _require = "";
  obj = {
    get(self, arg1) {
      let obj = self[arg1];
      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
      if (typeof obj === "function") {
        if (tmpResult.shouldInstrument(methodPath)) {
          closure_1 = methodPath;
          closure_2 = self;
          closure_3 = closure_1_1;
          str = closure_2_2(() => {
            closure_0 = [...arguments];
            c3 = 0;
            c4 = 0;
            const iter = (function*(arg0, value) {
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
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
                  c4 = 2;
                  if (0 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_2 = tmp5;
                      closure_129_0 = closure_0;
                      closure_129_1 = undefined;
                      closure_129_2 = undefined;
                      let operationName;
                      closure_129_4 = undefined;
                      c3 = 1;
                      c4 = 1;
                      return { value: "PX_16", done: true };
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    let obj1 = { value, done: true };
                    return obj1;
                  } else {
                    closure_129_1 = v1(closure_129_0, tmp2);
                    str = closure_129_1[str(undefined, tmp2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                    if (!str) {
                      str = "unknown";
                    }
                    closure_129_2 = str;
                    obj = str(tmp2[2]);
                    operationName = obj.getOperationName(tmp2);
                    closure_129_4 = closure_129_0[0];
                    if (closure_129_4) {
                      if (typeof closure_129_4 === "object") {
                        c4 = 3;
                      }
                      let obj2 = { name: null, op: null, attributes: null };
                      const _HermesInternal2 = HermesInternal;
                      obj2.name = "" + operationName + " " + closure_129_2 + " stream-response";
                      let obj5 = str(tmp2[5]);
                      obj2.op = str(tmp2[2]).getSpanOperation(tmp2);
                      obj2.attributes = closure_129_1;
                      obj5.startSpanManual(obj2, (() => {
                        closure_0 = closure_2(/* F125481 */ function() { ... });
                        return () => { ... };
                      })());
                      let obj7 = str(tmp2[2]);
                    }
                    obj1 = str(tmp2[5]);
                    let obj3 = { name: null, op: null, attributes: null };
                    const _HermesInternal = HermesInternal;
                    obj3.name = "" + operationName + " " + closure_129_2;
                    obj3 = str(tmp2[2]);
                    obj3.op = obj3.getSpanOperation(tmp2);
                    obj3.attributes = closure_129_1;
                    obj1.startSpan(obj3, (() => {
                      closure_0 = closure_2(/* F125483 */ function() { ... });
                      return () => { ... };
                    })());
                  }
                } catch (tmp40) {
                  c4 = tmp;
                  throw tmp40;
                }
              }
            })();
            iter.next();
            return iter;
          });
          function instrumentedMethod() {
            self = this;
            const apply = str.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
        }
        return instrumentedMethod;
      }
      if (typeof obj === "function") {
        instrumentedMethod = obj.bind(self);
      } else {
        instrumentedMethod = obj;
        if (obj) {
          instrumentedMethod = obj;
          if (typeof obj === "object") {
            if (methodPath === undefined) {
              str = "";
            }
            closure_1 = closure_1_1;
            let _Proxy = Proxy;
            obj = {
              get(self, arg1) {
                      let obj = self[arg1];
                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                      if (typeof obj === "function") {
                        if (tmpResult.shouldInstrument(methodPath)) {
                          closure_1 = methodPath;
                          closure_2 = self;
                          closure_3 = closure_1_1;
                          str = closure_2_2(() => {
                            closure_0 = [...arguments];
                            c3 = 0;
                            c4 = 0;
                            const iter = (function*(arg0, value) {
                              if (c4 === 2) {
                                c4 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp4 === 3) {
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
                                  c4 = 2;
                                  if (0 === c3) {
                                    if (arg0 === 1) {
                                      c4 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c4 = 3;
                                      obj = { value, done: true };
                                      return obj;
                                    } else {
                                      closure_2 = tmp5;
                                      closure_129_0 = closure_0;
                                      closure_129_1 = undefined;
                                      closure_129_2 = undefined;
                                      let operationName;
                                      closure_129_4 = undefined;
                                      c3 = 1;
                                      c4 = 1;
                                      return { value: "PX_16", done: true };
                                    }
                                  } else if (arg0 === 1) {
                                    c4 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c4 = 3;
                                    let obj1 = { value, done: true };
                                    return obj1;
                                  } else {
                                    closure_129_1 = v1(closure_129_0, tmp2);
                                    str = closure_129_1[str(undefined, tmp2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                    if (!str) {
                                      str = "unknown";
                                    }
                                    closure_129_2 = str;
                                    obj = str(tmp2[2]);
                                    operationName = obj.getOperationName(tmp2);
                                    closure_129_4 = closure_129_0[0];
                                    if (closure_129_4) {
                                      if (typeof closure_129_4 === "object") {
                                        c4 = 3;
                                      }
                                      let obj2 = { name: null, op: null, attributes: null };
                                      const _HermesInternal2 = HermesInternal;
                                      obj2.name = "" + operationName + " " + closure_129_2 + " stream-response";
                                      let obj5 = str(tmp2[5]);
                                      obj2.op = str(tmp2[2]).getSpanOperation(tmp2);
                                      obj2.attributes = closure_129_1;
                                      obj5.startSpanManual(obj2, (() => { ... })());
                                      let obj7 = str(tmp2[2]);
                                    }
                                    obj1 = str(tmp2[5]);
                                    let obj3 = { name: null, op: null, attributes: null };
                                    const _HermesInternal = HermesInternal;
                                    obj3.name = "" + operationName + " " + closure_129_2;
                                    obj3 = str(tmp2[2]);
                                    obj3.op = obj3.getSpanOperation(tmp2);
                                    obj3.attributes = closure_129_1;
                                    obj1.startSpan(obj3, (() => { ... })());
                                  }
                                } catch (tmp40) {
                                  c4 = tmp;
                                  throw tmp40;
                                }
                              }
                            })();
                            iter.next();
                            return iter;
                          });
                          function instrumentedMethod() {
                            self = this;
                            const apply = str.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          }
                        }
                        return instrumentedMethod;
                      }
                      if (typeof obj === "function") {
                        instrumentedMethod = obj.bind(self);
                      } else {
                        instrumentedMethod = obj;
                        if (obj) {
                          instrumentedMethod = obj;
                          if (typeof obj === "object") {
                            if (methodPath === undefined) {
                              str = "";
                            }
                            closure_1 = closure_1_1;
                            let _Proxy = Proxy;
                            obj = {
                              get(self, arg1) {
                                      let obj = self[arg1];
                                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                                      if (typeof obj === "function") {
                                        if (tmpResult.shouldInstrument(methodPath)) {
                                          closure_1 = methodPath;
                                          closure_2 = self;
                                          closure_3 = closure_1_1;
                                          str = closure_2_2(() => {
                                            closure_0 = [...arguments];
                                            c3 = 0;
                                            c4 = 0;
                                            const iter = (/* F120233 */ function*() { ... })();
                                            iter.next();
                                            return iter;
                                          });
                                          function instrumentedMethod() {
                                            self = this;
                                            const apply = str.apply;
                                            if (typeof apply === "unknown") {
                                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                            } else {
                                              applyArgumentsResult = apply(self, arguments);
                                            }
                                            return applyArgumentsResult;
                                          }
                                        }
                                        return instrumentedMethod;
                                      }
                                      if (typeof obj === "function") {
                                        instrumentedMethod = obj.bind(self);
                                      } else {
                                        instrumentedMethod = obj;
                                        if (obj) {
                                          instrumentedMethod = obj;
                                          if (typeof obj === "object") {
                                            if (methodPath === undefined) {
                                              str = "";
                                            }
                                            closure_1 = closure_1_1;
                                            let _Proxy = Proxy;
                                            obj = {
                                              get(self, arg1) {
                                                      let obj = self[arg1];
                                                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                                                      if (typeof obj === "function") {
                                                        if (tmpResult.shouldInstrument(methodPath)) {
                                                          closure_1 = methodPath;
                                                          closure_2 = self;
                                                          closure_3 = closure_1_1;
                                                          str = closure_2_2(() => { ... });
                                                          function instrumentedMethod() { ... }
                                                        }
                                                        return instrumentedMethod;
                                                      }
                                                      if (typeof obj === "function") {
                                                        instrumentedMethod = obj.bind(self);
                                                      } else {
                                                        instrumentedMethod = obj;
                                                        if (obj) {
                                                          instrumentedMethod = obj;
                                                          if (typeof obj === "object") {
                                                            if (methodPath === undefined) {
                                                              str = "";
                                                            }
                                                            closure_1 = closure_1_1;
                                                            let _Proxy = Proxy;
                                                            obj = { get() { ... } };
                                                            instrumentedMethod = new Proxy(obj, obj);
                                                          }
                                                        }
                                                      }
                                                    }
                                            };
                                            instrumentedMethod = new Proxy(obj, obj);
                                          }
                                        }
                                      }
                                    }
                            };
                            instrumentedMethod = new Proxy(obj, obj);
                          }
                        }
                      }
                    }
            };
            instrumentedMethod = new Proxy(obj, obj);
          }
        }
      }
    }
  };
  const proxy = new Proxy(arg0, obj);
  return proxy;
};