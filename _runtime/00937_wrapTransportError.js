// _runtime/00937_wrapTransportError.js
import asyncGeneratorStep from "getClient";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapTransportError = function wrapTransportError(closure_0) {
  if (closure_0.onerror) {
    require("00822_addNonEnumerableProperty.js") /* addNonEnumerableProperty */.fill(closure_0, "onerror", (arg0) => {
      let closure_0 = arg0;
      return function(error) {
        const self = this;
        (function captureTransportError(error) {
          try {
            callback(table[10]).captureError(error, "transport");
          } catch (err) {
          }
        })(error);
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(error) : call(self, error);
      };
    });
    const obj = require("00822_addNonEnumerableProperty.js") /* addNonEnumerableProperty */;
  }
};
export const wrapTransportOnClose = function wrapTransportOnClose(closure_0) {
  if (closure_0.onclose) {
    require("00822_addNonEnumerableProperty.js") /* addNonEnumerableProperty */.fill(closure_0, "onclose", (arg0) => {
      let closure_0 = arg0;
      return function() {
        const items = [...arguments];
        const result = callback(outer1_1[9]).cleanupPendingSpansForTransport(this);
        const obj = callback(outer1_1[9]);
        const result1 = callback(outer1_1[4]).cleanupSessionDataForTransport(this);
        const items1 = [this, ...items];
        return callback.call.apply(items1);
      };
    });
    let obj = require("00822_addNonEnumerableProperty.js") /* addNonEnumerableProperty */;
  }
};
export const wrapTransportOnMessage = function wrapTransportOnMessage(closure_0, closure_02) {
  const _require = closure_02;
  if (closure_0.onmessage) {
    _require("00822_addNonEnumerableProperty.js").fill(closure_0, "onmessage", (arg0) => {
      let closure_0 = arg0;
      return function(method, extra) {
        let self = this;
        self = this;
        let closure_1 = method;
        let closure_2 = extra;
        if (obj.isJsonRpcRequest(method)) {
          const callback = tmp10;
          if ("initialize" === method.method) {
            try {
              let tmpResult = tmp(tmp2[3]);
              const result = tmpResult.extractSessionDataFromInitializeRequest(method);
              let closure_3 = result;
              tmpResult = tmp(tmp2[4]);
              const result1 = tmpResult.storeSessionDataForTransport(self, result);
            } catch (err) {
            }
          }
          const isolationScope = tmp(tmp2[5]).getIsolationScope();
          const tmpResult1 = tmp(tmp2[5]);
          const cloneResult = isolationScope.clone();
          return tmp(tmp2[5]).withIsolationScope(cloneResult, () => {
            let obj = tmp10(outer3_1[6]);
            const mcpServerSpanConfig = obj.buildMcpServerSpanConfig(closure_1, self, closure_2, tmp10);
            const startInactiveSpanResult = tmp10(outer3_1[7]).startInactiveSpan(mcpServerSpanConfig);
            let tmp6 = tmp10;
            if (tmp10) {
              tmp6 = closure_3;
            }
            if (tmp6) {
              obj = {};
              let tmpResult = tmp(tmp2[3]);
              const merged = Object.assign(tmpResult.buildClientAttributesFromInfo(closure_3.clientInfo));
              let protocolVersion = closure_3.protocolVersion;
              if (protocolVersion) {
                obj = {};
                obj[tmp(tmp2[8]).MCP_PROTOCOL_VERSION_ATTRIBUTE] = tmp7.protocolVersion;
                protocolVersion = obj;
              }
              const merged1 = Object.assign(protocolVersion);
              startInactiveSpanResult.setAttributes(obj);
              tmp7 = closure_3;
            }
            tmpResult = tmp(tmp2[9]);
            tmpResult.storeSpanForRequest(self, closure_1.id, startInactiveSpanResult, closure_1.method);
            const obj2 = tmp10(outer3_1[7]);
            const tmp4 = self;
            return tmp10(outer3_1[7]).withActiveSpan(startInactiveSpanResult, () => {
              const call = outer1_0.call;
              return typeof call === "unknown" ? outer1_0(closure_1, closure_2) : call(closure_4, closure_1, closure_2);
            });
          });
        } else {
          if (tmpResult3.isJsonRpcNotification(method)) {
            const tmpResult4 = tmp(tmp2[6]);
            let mcpNotificationSpan = tmpResult4.createMcpNotificationSpan(method, self, extra, callback, () => {
              const call = closure_0.call;
              return typeof call === "unknown" ? closure_0(closure_1, closure_2) : call(self, closure_1, closure_2);
            });
          } else {
            let call = callback.call;
            mcpNotificationSpan = typeof call === "unknown" ? callback(method, extra) : call(self, method, extra);
            const tmp3 = callback;
          }
          return mcpNotificationSpan;
        }
        obj = callback(outer2_1[2]);
      };
    });
    let obj = _require("00822_addNonEnumerableProperty.js");
  }
};
export const wrapTransportSend = function wrapTransportSend(closure_0, closure_02) {
  const _require = closure_02;
  if (closure_0.send) {
    _require("00822_addNonEnumerableProperty.js").fill(closure_0, "send", (arg0) => {
      let closure_0 = arg0;
      return outer1_2(function() {
        const self = this;
        let closure_1 = [...arguments];
        let c6 = 0;
        let c7 = 0;
        let c5 = 0;
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
              return { value: "HermesInternal", done: null };
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
                  let closure_4 = c0;
                  let closure_3 = tmp3;
                  let user = c0;
                  closure_3 = c0;
                  user = undefined;
                  c0 = undefined;
                  c6 = 1;
                  c7 = 1;
                  return { value: "ct", done: "Array" };
                }
              } else {
                if (1 === tmp7) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    let obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    user = table[0];
                    if (obj12.isJsonRpcNotification(user)) {
                      const obj7 = _self(outer2_1[6]);
                      c7 = 3;
                      let obj2 = { value: null, done: true };
                      obj2[0] = obj7.createMcpOutgoingNotificationSpan(user, closure_4, self, () => {
                        const items = [closure_3, ...closure_1];
                        return c0.call.apply(items);
                      });
                      return obj2;
                    } else {
                      obj = _self(outer2_1[2]);
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
                            obj1 = _self(outer2_1[2]);
                            if (obj1.isValidContentItem(outer3_2.result)) {
                              if (outer3_2.result.protocolVersion) {
                                let c5 = 1;
                                obj2 = _self(outer2_1[3]);
                                _self = obj2.extractSessionDataFromInitializeResponse(outer3_2.result);
                                let obj3 = _self(outer2_1[4]);
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
                    obj12 = _self(outer2_1[2]);
                  }
                } else {
                  c5 = 0;
                }
                const obj5 = _self(outer2_1[9]);
                const result1 = obj5.completeSpanWithResults(closure_4, outer2_2.id, outer2_2.result, self);
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
    let obj = _require("00822_addNonEnumerableProperty.js");
  }
};