// _runtime/00937_wrapTransportError.js
import addNonEnumerableProperty from "00822_addNonEnumerableProperty.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import { addNonEnumerableProperty } from "00822_addNonEnumerableProperty.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapTransportError = function wrapTransportError(closure_0) {
  if (_require.onerror) {
    addNonEnumerableProperty.fill(_require, "onerror", (arg0) => {
      closure_0 = arg0;
      return function(error) {
        const self = this;
        (function captureTransportError(error) {
          try {
            callback(table[10]).captureError(error, "transport");
            const obj = callback(table[10]);
          } catch (err) {
          }
        })(error);
        const call = callback.call;
        return typeof call === "unknown" ? callback(error) : call(self, error);
      };
    });
  }
};
export const wrapTransportOnClose = function wrapTransportOnClose(closure_0) {
  if (_require.onclose) {
    addNonEnumerableProperty.fill(_require, "onclose", (arg0) => {
      closure_0 = arg0;
      return function() {
        const items = [...arguments];
        const result = callback(closure_1_1[9]).cleanupPendingSpansForTransport(this);
        const obj = callback(closure_1_1[9]);
        const result1 = callback(closure_1_1[4]).cleanupSessionDataForTransport(this);
        const items1 = [this, ...items];
        return callback.call.apply(items1);
      };
    });
  }
};
export const wrapTransportOnMessage = function wrapTransportOnMessage(closure_0, closure_02) {
  const _require = closure_02;
  if (_require.onmessage) {
    require("00822_addNonEnumerableProperty.js").fill(_require, "onmessage", (arg0) => {
      closure_0 = arg0;
      return function(method, extra) {
        const self = this;
        closure_1 = method;
        closure_2 = extra;
        if (obj.isJsonRpcRequest(method)) {
          const callback = tmp10;
          if ("initialize" === method.method) {
            try {
              let tmpResult = tmp(dependencyMap[3]);
              const result = tmpResult.extractSessionDataFromInitializeRequest(method);
              closure_3 = result;
              tmpResult = tmp(dependencyMap[4]);
              const result1 = tmpResult.storeSessionDataForTransport(self, result);
            } catch (err) {
            }
          }
          const isolationScope = tmp(dependencyMap[5]).getIsolationScope();
          const tmpResult1 = tmp(dependencyMap[5]);
          const cloneResult = isolationScope.clone();
          return tmp(dependencyMap[5]).withIsolationScope(cloneResult, () => {
            let obj = callback(dependencyMap[6]);
            const mcpServerSpanConfig = obj.buildMcpServerSpanConfig(method, self, closure_2, callback);
            const startInactiveSpanResult = callback(dependencyMap[7]).startInactiveSpan(mcpServerSpanConfig);
            let tmp6 = callback;
            if (callback) {
              tmp6 = closure_3;
            }
            if (tmp6) {
              obj = {};
              let tmpResult = callback(dependencyMap[3]);
              const merged = Object.assign(tmpResult.buildClientAttributesFromInfo(closure_3.clientInfo));
              let protocolVersion = closure_3.protocolVersion;
              if (protocolVersion) {
                obj = {};
                obj[callback(dependencyMap[8]).MCP_PROTOCOL_VERSION_ATTRIBUTE] = closure_3.protocolVersion;
                protocolVersion = obj;
              }
              const merged1 = Object.assign(protocolVersion);
              startInactiveSpanResult.setAttributes(obj);
            }
            tmpResult = callback(dependencyMap[9]);
            tmpResult.storeSpanForRequest(self, method.id, startInactiveSpanResult, method.method);
            const obj2 = callback(dependencyMap[7]);
            return callback(dependencyMap[7]).withActiveSpan(startInactiveSpanResult, () => {
              const call = closure_1_0.call;
              return typeof call === "unknown" ? closure_1_0(closure_1, closure_2) : call(closure_4, closure_1, closure_2);
            });
          });
        } else {
          if (tmpResult3.isJsonRpcNotification(method)) {
            const tmpResult4 = tmp(dependencyMap[6]);
            let mcpNotificationSpan = tmpResult4.createMcpNotificationSpan(method, self, extra, callback, () => {
              const call = callback.call;
              return typeof call === "unknown" ? callback(closure_1, closure_2) : call(self, closure_1, closure_2);
            });
          } else {
            let call = callback.call;
            mcpNotificationSpan = typeof call === "unknown" ? callback(method, extra) : call(self, method, extra);
          }
          return mcpNotificationSpan;
        }
        obj = callback(dependencyMap[2]);
      };
    });
    let obj = addNonEnumerableProperty;
  }
};
export const wrapTransportSend = function wrapTransportSend(closure_0, closure_02) {
  const _require = closure_02;
  if (_require.send) {
    require("00822_addNonEnumerableProperty.js").fill(_require, "send", (arg0) => {
      closure_0 = arg0;
      return asyncGeneratorStep(function() {
        const self = this;
        closure_1 = [...arguments];
        c6 = 0;
        c7 = 0;
        c5 = 0;
        const iter = (function*() {
          if (c7 === 2) {
            c7 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_4 = c0;
                  closure_3 = tmp3;
                  let user = c0;
                  closure_3 = c0;
                  user = undefined;
                  c0 = undefined;
                  c6 = 1;
                  c7 = 1;
                  return { value: "ct", done: true };
                }
              } else {
                if (1 === tmp7) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    user = table[0];
                    if (obj12.isJsonRpcNotification(user)) {
                      const obj7 = _self(closure_2_1[6]);
                      c7 = 3;
                      let obj2 = { value: null, done: true };
                      obj2[0] = obj7.createMcpOutgoingNotificationSpan(user, closure_4, self, () => {
                        const items = [closure_3, ...closure_1];
                        return c0.call.apply(items);
                      });
                      return obj2;
                    } else {
                      obj = _self(closure_2_1[2]);
                      if (obj.isJsonRpcResponse(user)) {
                        if (null !== user.id) {
                          if (undefined !== user.id) {
                            if (user.error) {
                              (function captureJsonRpcErrorResponse(error) {
                                try {
                                  if (error) {
                                    if (typeof error === "object") {
                                      if ("code" in error) {
                                        if ("message" in error) {
                                          if (-32603 === error.code) {
                                            const _Error = Error;
                                            error = new Error(error.message);
                                            const _HermesInternal = HermesInternal;
                                            error.name = "JsonRpcError_" + error.code;
                                            _undefined(table[10]).captureError(error, "protocol");
                                            const obj = _undefined(table[10]);
                                          }
                                        }
                                      }
                                    }
                                  }
                                } catch (err) {
                                }
                              })(user.error);
                            }
                            obj1 = _self(closure_2_1[2]);
                            if (obj1.isValidContentItem(asyncGeneratorStep.result)) {
                              if (asyncGeneratorStep.result.protocolVersion) {
                                c5 = 1;
                                obj2 = _self(closure_2_1[3]);
                                _self = obj2.extractSessionDataFromInitializeResponse(asyncGeneratorStep.result);
                                let obj3 = _self(closure_2_1[4]);
                                const result = obj3.updateSessionDataForTransport(closure_4, _self);
                                c5 = 0;
                              }
                            }
                          }
                        }
                      }
                      const call = self.call;
                      let items = [closure_4];
                      HermesBuiltin.arraySpread(table, 1);
                      c7 = 3;
                      obj3 = { value: null, done: true };
                      obj3[0] = HermesBuiltin.apply(items, self);
                      return obj3;
                    }
                    obj12 = _self(closure_2_1[2]);
                  }
                } else {
                  c5 = 0;
                }
                const obj5 = _self(closure_2_1[9]);
                const result1 = obj5.completeSpanWithResults(closure_4, closure_2_2.id, closure_2_2.result, self);
              }
            } catch (tmp65) {
              if (tmp4 === c5) {
                c7 = tmp2;
                throw tmp65;
              } else {
                c6 = tmp;
              }
            }
          }
        })();
        iter.next();
        return iter;
      });
    });
    let obj = addNonEnumerableProperty;
  }
};