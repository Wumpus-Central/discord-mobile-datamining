// === Module 827: extractRequestAttributes ===

// Module 827 (extractRequestAttributes)
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 823 */;
import _mod825 from "module_825" /* 825 */;
import extractRequestParameters from "extractRequestParameters" /* 828 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

function extractRequestAttributes(model, arr) {
  const obj = { [closure_1_0(closure_1_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "openai" };
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_OPERATION_NAME_ATTRIBUTE] = extractRequestParameters.getOperationName(arr);
  obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.openai";
  if (model.length > 0) {
    if (typeof model[0] === "object") {
      if (null !== model[0]) {
        const first = model[0];
        const _Array = Array;
        const tmp5 = Array.isArray(first.tools) ? first.tools : [];
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(tmp5, 0);
        if (first.web_search_options) {
          if (typeof first.web_search_options === "object") {
            const obj3 = { type: "web_search_options" };
            const merged = Object.assign(first.web_search_options);
            const items1 = [obj3];
            let items2 = items1;
          }
          HermesBuiltin.arraySpread(items2, arraySpreadResult);
          let json;
          if (items.length > 0) {
            const _JSON = JSON;
            json = JSON.stringify(items);
          }
          if (json) {
            obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = json;
          }
          const _Object = Object;
          const merged1 = Object.assign(obj, extractRequestParameters.extractRequestParameters(first));
          const tmpResult = extractRequestParameters;
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
        const attr1 = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length);
      }
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentOpenAiClient = function instrumentOpenAiClient(arg0, arg1) {
  const client = require("module_713").getClient();
  let sendDefaultPii;
  if (client != null) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const BooleanResult = Boolean(sendDefaultPii);
  obj2 = { recordInputs: BooleanResult, recordOutputs: BooleanResult };
  const merged = Object.assign(arg1);
  _require = "";
  const proxy = new Proxy(arg0, {
    get(self, arg1) {
      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
      if (typeof self[arg1] === "function") {
        if (tmpResult.shouldInstrument(methodPath)) {
          closure_1 = methodPath;
          closure_2 = self;
          closure_3 = closure_1_1;
          closure_2_2(() => {
            closure_0 = [...arguments];
            c3 = 0;
            c4 = 0;
            const iter = (function*(arg0) {
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj3 = { value, done: true };
                  return obj3;
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
                      let obj6 = { value, done: true };
                      return obj6;
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
                    let obj8 = { value, done: true };
                    return obj8;
                  } else {
                    closure_129_1 = v1(closure_129_0, tmp2);
                    str = closure_129_1[str(undefined, tmp2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                    if (!str) {
                      str = "unknown";
                    }
                    closure_129_2 = str;
                    operationName = str(tmp2[2]).getOperationName(tmp2);
                    closure_129_4 = closure_129_0[0];
                    if (closure_129_4) {
                      if (typeof closure_129_4 === "object") {
                        c4 = 3;
                      }
                      let obj9 = { name: null, op: null, attributes: null };
                      const _HermesInternal2 = HermesInternal;
                      obj9.name = "" + operationName + " " + closure_129_2 + " stream-response";
                      let obj5 = str(tmp2[5]);
                      obj9.op = str(tmp2[2]).getSpanOperation(tmp2);
                      obj9.attributes = closure_129_1;
                      obj5.startSpanManual(obj9, (() => {
                        closure_0 = closure_2(/* F128180 */ function() { ... });
                        return () => { ... };
                      })());
                      let obj7 = str(tmp2[2]);
                    }
                    let obj = str(tmp2[2]);
                    let obj10 = { name: null, op: null, attributes: null };
                    const _HermesInternal = HermesInternal;
                    obj10.name = "" + operationName + " " + closure_129_2;
                    let obj2 = str(tmp2[5]);
                    obj10.op = str(tmp2[2]).getSpanOperation(tmp2);
                    obj10.attributes = closure_129_1;
                    obj2.startSpan(obj10, (() => {
                      closure_0 = closure_2(/* F128182 */ function() { ... });
                      return () => { ... };
                    })());
                    let obj4 = str(tmp2[2]);
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
      if (typeof self[arg1] === "function") {
        instrumentedMethod = obj.bind(self);
      } else {
        instrumentedMethod = obj;
        if (obj) {
          instrumentedMethod = obj;
          if (typeof obj === "object") {
            closure_1 = closure_1_1;
            let _Proxy = Proxy;
            let obj3 = {
              get(self, arg1) {
                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                      if (typeof self[arg1] === "function") {
                        if (tmpResult.shouldInstrument(methodPath)) {
                          closure_1 = methodPath;
                          closure_2 = self;
                          closure_3 = closure_1_1;
                          closure_2_2(() => {
                            closure_0 = [...arguments];
                            c3 = 0;
                            c4 = 0;
                            const iter = (function*(arg0) {
                              if (c4 === 2) {
                                c4 = 3;
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else if (tmp4 === 3) {
                                if (arg0 === 1) {
                                  throw value;
                                } else if (arg0 === 2) {
                                  let obj3 = { value, done: true };
                                  return obj3;
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
                                      let obj6 = { value, done: true };
                                      return obj6;
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
                                    let obj8 = { value, done: true };
                                    return obj8;
                                  } else {
                                    closure_129_1 = v1(closure_129_0, tmp2);
                                    str = closure_129_1[str(undefined, tmp2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                                    if (!str) {
                                      str = "unknown";
                                    }
                                    closure_129_2 = str;
                                    operationName = str(tmp2[2]).getOperationName(tmp2);
                                    closure_129_4 = closure_129_0[0];
                                    if (closure_129_4) {
                                      if (typeof closure_129_4 === "object") {
                                        c4 = 3;
                                      }
                                      let obj9 = { name: null, op: null, attributes: null };
                                      const _HermesInternal2 = HermesInternal;
                                      obj9.name = "" + operationName + " " + closure_129_2 + " stream-response";
                                      let obj5 = str(tmp2[5]);
                                      obj9.op = str(tmp2[2]).getSpanOperation(tmp2);
                                      obj9.attributes = closure_129_1;
                                      obj5.startSpanManual(obj9, (() => { ... })());
                                      let obj7 = str(tmp2[2]);
                                    }
                                    let obj = str(tmp2[2]);
                                    let obj10 = { name: null, op: null, attributes: null };
                                    const _HermesInternal = HermesInternal;
                                    obj10.name = "" + operationName + " " + closure_129_2;
                                    let obj2 = str(tmp2[5]);
                                    obj10.op = str(tmp2[2]).getSpanOperation(tmp2);
                                    obj10.attributes = closure_129_1;
                                    obj2.startSpan(obj10, (() => { ... })());
                                    let obj4 = str(tmp2[2]);
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
                      if (typeof self[arg1] === "function") {
                        instrumentedMethod = obj.bind(self);
                      } else {
                        instrumentedMethod = obj;
                        if (obj) {
                          instrumentedMethod = obj;
                          if (typeof obj === "object") {
                            closure_1 = closure_1_1;
                            let _Proxy = Proxy;
                            let obj3 = {
                              get(self, arg1) {
                                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                                      if (typeof self[arg1] === "function") {
                                        if (tmpResult.shouldInstrument(methodPath)) {
                                          closure_1 = methodPath;
                                          closure_2 = self;
                                          closure_3 = closure_1_1;
                                          closure_2_2(() => {
                                            closure_0 = [...arguments];
                                            c3 = 0;
                                            c4 = 0;
                                            const iter = (/* F122839 */ function*() { ... })();
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
                                      if (typeof self[arg1] === "function") {
                                        instrumentedMethod = obj.bind(self);
                                      } else {
                                        instrumentedMethod = obj;
                                        if (obj) {
                                          instrumentedMethod = obj;
                                          if (typeof obj === "object") {
                                            closure_1 = closure_1_1;
                                            let _Proxy = Proxy;
                                            let obj3 = {
                                              get(self, arg1) {
                                                      let methodPath = closure_2_0(closure_2_1[2]).buildMethodPath(closure_1_0, String(arg1));
                                                      if (typeof self[arg1] === "function") {
                                                        if (tmpResult.shouldInstrument(methodPath)) {
                                                          closure_1 = methodPath;
                                                          closure_2 = self;
                                                          closure_3 = closure_1_1;
                                                          closure_2_2(() => { ... });
                                                          function instrumentedMethod() { ... }
                                                        }
                                                        return instrumentedMethod;
                                                      }
                                                      if (typeof self[arg1] === "function") {
                                                        instrumentedMethod = obj.bind(self);
                                                      } else {
                                                        instrumentedMethod = obj;
                                                        if (obj) {
                                                          instrumentedMethod = obj;
                                                          if (typeof obj === "object") {
                                                            closure_1 = closure_1_1;
                                                            let _Proxy = Proxy;
                                                            let obj3 = { get() { ... } };
                                                            instrumentedMethod = new Proxy(obj, obj3);
                                                          }
                                                        }
                                                      }
                                                      let obj2 = closure_2_0(closure_2_1[2]);
                                                    }
                                            };
                                            instrumentedMethod = new Proxy(obj, obj3);
                                          }
                                        }
                                      }
                                      let obj2 = closure_2_0(closure_2_1[2]);
                                    }
                            };
                            instrumentedMethod = new Proxy(obj, obj3);
                          }
                        }
                      }
                      let obj2 = closure_2_0(closure_2_1[2]);
                    }
            };
            instrumentedMethod = new Proxy(obj, obj3);
          }
        }
      }
      let obj2 = closure_2_0(closure_2_1[2]);
    }
  });
  return proxy;
};