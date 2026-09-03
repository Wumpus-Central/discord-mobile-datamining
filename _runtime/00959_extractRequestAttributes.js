// === Module 959: extractRequestAttributes ===

// Module 959 (extractRequestAttributes)
import _mod836 from "module_836" /* 836 */;
import _mod955 from "module_955" /* 955 */;
import buildMethodPath from "buildMethodPath" /* 957 */;
import getOperationName from "getOperationName" /* 960 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

function extractRequestAttributes(first, closure_1_1) {
  let obj = { [closure_0(closure_1[1]).GEN_AI_SYSTEM_ATTRIBUTE]: "openai" };
  obj[_mod955.GEN_AI_OPERATION_NAME_ATTRIBUTE] = getOperationName.getOperationName(closure_1_1);
  obj[_mod836.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.openai";
  if (first.length > 0) {
    if (typeof first[0] === "object") {
      if (null !== first[0]) {
        first = first[0];
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
            obj[tmp(955).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = json;
          }
          const _Object = Object;
          const merged1 = Object.assign(obj, tmp(960).extractRequestParameters(first));
          const tmpResult = tmp(960);
        }
        items2 = [];
      }
      return obj;
    }
  }
  obj[_mod955.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
}
function addRequestAttributes(setAttribute, input) {
  if ("input" in input) {
    input = input.input;
  } else if ("messages" in input) {
    input = input.messages;
  }
  if (input) {
    if (0 !== length) {
      const truncatedJsonString = buildMethodPath.getTruncatedJsonString(input);
      const attr = setAttribute.setAttribute(_mod955.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, truncatedJsonString);
      if (length) {
        const attr1 = setAttribute.setAttribute(tmp2(955).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length);
      }
      const obj = buildMethodPath;
      tmp2 = require;
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentOpenAiClient = function instrumentOpenAiClient(arg0, arg1) {
  obj = _require(obj[9]);
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
    get(self) {
      let obj = self[arg1];
      let methodPath = closure_1_0(closure_1_1[2]).buildMethodPath(str, String(arg1));
      if (typeof obj === "function") {
        if (tmpResult.shouldInstrument(methodPath)) {
          str = obj;
          closure_1 = methodPath;
          str = self;
          closure_3 = closure_1;
          str = closure_1_2(() => {
            closure_0 = [...arguments];
            c3 = 0;
            c4 = 0;
            const iter = (function*() {
              if (c4 === 2) {
                c4 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp4 === 3) {
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
                  c4 = 2;
                  if (0 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c2 = tmp5;
                      let dependencyMap = tmp2;
                      dependencyMap = undefined;
                      c2 = undefined;
                      c3 = undefined;
                      c4 = undefined;
                      c3 = 1;
                      c4 = 1;
                      return { value: "PX_16", done: true };
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    let obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    dependencyMap = v0(closure_0, closure_1_1);
                    str = dependencyMap[str(undefined, dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                    if (!str) {
                      str = "unknown";
                    }
                    obj = str(dependencyMap[2]);
                    v0 = obj.getOperationName(closure_1_1);
                    const stream = str[0];
                    if (stream) {
                      if (typeof stream === "object") {
                        c4 = 3;
                      }
                      let obj2 = { name: null, op: null, attributes: null };
                      const _HermesInternal2 = HermesInternal;
                      obj2[0] = "" + v0 + " " + str + " stream-response";
                      let obj5 = str(dependencyMap[5]);
                      obj2[1] = str(dependencyMap[2]).getSpanOperation(closure_1_1);
                      obj2[2] = dependencyMap;
                      obj5.startSpanManual(obj2, (() => {
                        closure_0 = closure_2_2(/* F124850 */ function() { ... });
                        return () => { ... };
                      })());
                      let obj7 = str(dependencyMap[2]);
                    }
                    obj1 = str(dependencyMap[5]);
                    let obj3 = { name: null, op: null, attributes: null };
                    const _HermesInternal = HermesInternal;
                    obj3[0] = "" + v0 + " " + str;
                    obj3 = str(dependencyMap[2]);
                    obj3[1] = obj3.getSpanOperation(closure_1_1);
                    obj3[2] = dependencyMap;
                    obj1.startSpan(obj3, (() => {
                      closure_0 = closure_2_2(/* F124852 */ function() { ... });
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
            const self = this;
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
            str = methodPath;
            if (methodPath === undefined) {
              str = "";
            }
            let _Proxy = Proxy;
            obj = { get: null };
            obj[0] = function get(self) {
              let obj = self[arg1];
              let methodPath = closure_1_0(closure_1_1[2]).buildMethodPath(str, String(arg1));
              if (typeof obj === "function") {
                if (tmpResult.shouldInstrument(methodPath)) {
                  str = obj;
                  closure_1 = methodPath;
                  str = self;
                  closure_3 = closure_1;
                  str = closure_1_2(() => {
                    closure_0 = [...arguments];
                    c3 = 0;
                    c4 = 0;
                    const iter = (function*() {
                      if (c4 === 2) {
                        c4 = 3;
                        HermesBuiltin.throwTypeError();
                      } else if (tmp4 === 3) {
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
                          c4 = 2;
                          if (0 === c3) {
                            if (arg0 === 1) {
                              c4 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              c4 = 3;
                              obj = { value: null, done: true };
                              obj[0] = arg1;
                              return obj;
                            } else {
                              c2 = tmp5;
                              let dependencyMap = tmp2;
                              dependencyMap = undefined;
                              c2 = undefined;
                              c3 = undefined;
                              c4 = undefined;
                              c3 = 1;
                              c4 = 1;
                              return { value: "PX_16", done: true };
                            }
                          } else if (arg0 === 1) {
                            c4 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c4 = 3;
                            let obj1 = { value: null, done: true };
                            obj1[0] = arg1;
                            return obj1;
                          } else {
                            dependencyMap = v0(closure_0, closure_1_1);
                            str = dependencyMap[str(undefined, dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
                            if (!str) {
                              str = "unknown";
                            }
                            obj = str(dependencyMap[2]);
                            v0 = obj.getOperationName(closure_1_1);
                            const stream = str[0];
                            if (stream) {
                              if (typeof stream === "object") {
                                c4 = 3;
                              }
                              let obj2 = { name: null, op: null, attributes: null };
                              const _HermesInternal2 = HermesInternal;
                              obj2[0] = "" + v0 + " " + str + " stream-response";
                              let obj5 = str(dependencyMap[5]);
                              obj2[1] = str(dependencyMap[2]).getSpanOperation(closure_1_1);
                              obj2[2] = dependencyMap;
                              obj5.startSpanManual(obj2, (() => { ... })());
                              let obj7 = str(dependencyMap[2]);
                            }
                            obj1 = str(dependencyMap[5]);
                            let obj3 = { name: null, op: null, attributes: null };
                            const _HermesInternal = HermesInternal;
                            obj3[0] = "" + v0 + " " + str;
                            obj3 = str(dependencyMap[2]);
                            obj3[1] = obj3.getSpanOperation(closure_1_1);
                            obj3[2] = dependencyMap;
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
                    const self = this;
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
                    str = methodPath;
                    if (methodPath === undefined) {
                      str = "";
                    }
                    let _Proxy = Proxy;
                    obj = { get: null };
                    obj[0] = function get(self) {
                      let obj = self[arg1];
                      let methodPath = closure_1_0(closure_1_1[2]).buildMethodPath(str, String(arg1));
                      if (typeof obj === "function") {
                        if (tmpResult.shouldInstrument(methodPath)) {
                          str = obj;
                          closure_1 = methodPath;
                          str = self;
                          closure_3 = closure_1;
                          str = closure_1_2(() => {
                            closure_0 = [...arguments];
                            c3 = 0;
                            c4 = 0;
                            const iter = (/* F119622 */ function*() { ... })();
                            iter.next();
                            return iter;
                          });
                          function instrumentedMethod() {
                            const self = this;
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
                            str = methodPath;
                            if (methodPath === undefined) {
                              str = "";
                            }
                            let _Proxy = Proxy;
                            obj = { get: null };
                            obj[0] = function get(self) {
                              let obj = self[arg1];
                              let methodPath = closure_1_0(closure_1_1[2]).buildMethodPath(str, String(arg1));
                              if (typeof obj === "function") {
                                if (tmpResult.shouldInstrument(methodPath)) {
                                  str = obj;
                                  closure_1 = methodPath;
                                  str = self;
                                  closure_3 = closure_1;
                                  str = closure_1_2(() => { ... });
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
                                    str = methodPath;
                                    if (methodPath === undefined) {
                                      str = "";
                                    }
                                    let _Proxy = Proxy;
                                    obj = { get: null };
                                    obj[0] = function get() { ... };
                                    instrumentedMethod = new Proxy(obj, obj);
                                    let tmp10 = closure_1;
                                  }
                                }
                              }
                            };
                            instrumentedMethod = new Proxy(obj, obj);
                            let tmp10 = closure_1;
                          }
                        }
                      }
                    };
                    instrumentedMethod = new Proxy(obj, obj);
                    let tmp10 = closure_1;
                  }
                }
              }
            };
            instrumentedMethod = new Proxy(obj, obj);
            let tmp10 = closure_1;
          }
        }
      }
    }
  };
  const proxy = new Proxy(arg0, obj);
  return proxy;
};