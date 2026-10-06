// === Module 813: wrapTransportError ===

// Module 813 (wrapTransportError)
import _mod698 from "module_698" /* 698 */;
import continueTrace from "continueTrace" /* 742 */;
import _mod814 from "module_814" /* 814 */;
import CLIENT_ADDRESS_ATTRIBUTE from "CLIENT_ADDRESS_ATTRIBUTE" /* 816 */;
import _mod817 from "module_817" /* 817 */;
import cleanupPendingSpansForTransport from "cleanupPendingSpansForTransport" /* 821 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _require, _self;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapTransportError = function wrapTransportError(onerror) {
  if (onerror.onerror) {
    let obj = _mod698;
    obj.fill(onerror, "onerror", (arg0) => {
      let closure_0 = arg0;
      return function(error) {
        function captureTransportError(error) {
          try {
            const obj = closure_1_0(closure_1_1[10]);
            obj.captureError(error, "transport");
          } catch (err) {
          }
        }
        captureTransportError(error);
        return closure_0.call(this, error);
      };
    });
  }
};
export const wrapTransportOnClose = function wrapTransportOnClose(onclose) {
  if (onclose.onclose) {
    let obj = _mod698;
    obj.fill(onclose, "onclose", (arg0) => {
      let closure_0 = arg0;
      return function() {
        const items = [...arguments];
        const obj = require("cleanupPendingSpansForTransport");
        const result = obj.cleanupPendingSpansForTransport(this);
        const obj2 = require("cleanupSessionDataForTransport");
        const result1 = obj2.cleanupSessionDataForTransport(this);
        const items1 = [this, ...items];
        return closure_0.call.apply(items1);
      };
    });
  }
};
export const wrapTransportOnMessage = function wrapTransportOnMessage(onmessage, _self2) {
  _require = _self2;
  if (onmessage.onmessage) {
    const tmp = _require;
    let obj = require("module_698");
    obj.fill(onmessage, "onmessage", (arg0) => {
      let closure_0 = arg0;
      return function(method, extra) {
        const self = this;
        let closure_2 = extra;
        let obj = closure_0(dependencyMap[2]);
        if (obj.isJsonRpcRequest(method)) {
          closure_0 = "initialize" === method.method;
          const tmp9 = "initialize" === method.method;
          if (closure_0) {
            try {
              let tmpResult = tmp(dependencyMap[3]);
              const result = tmpResult.extractSessionDataFromInitializeRequest(method);
              let closure_3 = result;
              const tmpResult6 = closure_0(dependencyMap[4]);
              const result1 = tmpResult6.storeSessionDataForTransport(self, result);
            } catch (err) {
            }
          }
          const tmpResult7 = closure_0(dependencyMap[5]);
          const isolationScope = tmpResult7.getIsolationScope();
          const cloneResult = isolationScope.clone();
          const tmpResult8 = closure_0(dependencyMap[5]);
          return tmpResult8.withIsolationScope(cloneResult, () => {
            const obj = _mod817;
            const mcpServerSpanConfig = obj.buildMcpServerSpanConfig(method, self, extra, _self2);
            const obj2 = continueTrace;
            const startInactiveSpanResult = obj2.startInactiveSpan(mcpServerSpanConfig);
            const tmp7 = _self2 && closure_3;
            if (tmp7) {
              const setAttributes = startInactiveSpanResult.setAttributes;
              const obj3 = {};
              const tmpResult = _mod814;
              const merged = Object.assign(tmpResult.buildClientAttributesFromInfo(closure_3.clientInfo));
              let protocolVersion = closure_3.protocolVersion;
              if (protocolVersion) {
                const obj4 = {};
                obj4[CLIENT_ADDRESS_ATTRIBUTE.MCP_PROTOCOL_VERSION_ATTRIBUTE] = closure_3.protocolVersion;
                protocolVersion = obj4;
              }
              const merged1 = Object.assign(protocolVersion);
              setAttributes(obj3);
            }
            const tmpResult3 = cleanupPendingSpansForTransport;
            tmpResult3.storeSpanForRequest(self, method.id, startInactiveSpanResult, method.method);
            const tmpResult4 = continueTrace;
            return tmpResult4.withActiveSpan(startInactiveSpanResult, () => closure_0.call(self, method, extra));
          });
        } else {
          let mcpNotificationSpan;
          const tmpResult9 = closure_0(dependencyMap[2]);
          if (tmpResult9.isJsonRpcNotification(method)) {
            let tmp7 = self;
            const tmpResult10 = closure_0(dependencyMap[6]);
            mcpNotificationSpan = tmpResult10.createMcpNotificationSpan(method, self, extra, closure_0, () => closure_0.call(self, method, extra));
          } else {
            mcpNotificationSpan = closure_0.call(self, method, extra);
          }
          return mcpNotificationSpan;
        }
      };
    });
  }
};
export const wrapTransportSend = function wrapTransportSend(send, _self2) {
  _require = _self2;
  if (send.send) {
    let tmp = _require;
    let obj = require("module_698");
    const str = "send";
    obj.fill(send, "send", (arg0) => {
      let closure_0 = arg0;
      return _asyncToGenerator(async function() {
        let self = this;
        let closure_1 = [...arguments];
        let c6 = 0;
        let c7 = 0;
        let c5 = 0;
        const iter = (async (arg0) => {
          let self;
          function captureJsonRpcErrorResponse(error) {
            try {
              const tmp = error;
              if (tmp) {
                if (typeof error === "object") {
                  if ("code" in error) {
                    if ("message" in error) {
                      if (-32603 === error.code) {
                        const _Error = Error;
                        const self = this;
                        const self2 = this;
                        error = new Error(error.message);
                        const _HermesInternal = HermesInternal;
                        error.name = "JsonRpcError_" + error.code;
                        const obj = _self(closure_1_1[10]);
                        obj.captureError(error, "protocol");
                      }
                    }
                  }
                }
              }
            } catch (err) {
            }
          }
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  return { value, done: true };
                } else {
                  closure_4 = self;
                  closure_3 = self;
                  user = undefined;
                  _self = undefined;
                  c6 = 1;
                  c7 = 1;
                  return { value: "Reflect", done: true };
                }
              } else {
                if (1 === tmp4) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    return { value, done: true };
                  } else {
                    user = closure_1[0];
                    const obj12 = _self(closure_2_1[2]);
                    if (obj12.isJsonRpcNotification(user)) {
                      c7 = 3;
                      const obj7 = _self(closure_2_1[6]);
                      const obj10 = {
                        value: obj7.createMcpOutgoingNotificationSpan(user, closure_4, self, () => {
                                      const items = [closure_1_3, ...closure_1_1];
                                      return self.call.apply(items);
                                    }),
                        done: true
                      };
                      return obj10;
                    } else {
                      let obj = _self(closure_2_1[2]);
                      if (obj.isJsonRpcResponse(user)) {
                        if (null !== user.id) {
                          if (undefined !== user.id) {
                            if (user.error) {
                              captureJsonRpcErrorResponse(user.error);
                            }
                            const obj2 = _self(closure_2_1[2]);
                            if (obj2.isValidContentItem(user.result)) {
                              if (user.result.protocolVersion) {
                                const obj3 = _self(closure_2_1[3]);
                                _self = obj3.extractSessionDataFromInitializeResponse(user.result);
                                const obj4 = _self(closure_2_1[4]);
                                const result = obj4.updateSessionDataForTransport(closure_4, _self);
                                c5 = 0;
                              }
                            }
                          }
                        }
                      }
                      const call = closure_131_0.call;
                      let items = [closure_4];
                      HermesBuiltin.arraySpread(items, closure_1, 1);
                      c7 = 3;
                      const obj11 = { value: HermesBuiltin.apply(call, items, closure_131_0), done: true };
                      return obj11;
                    }
                  }
                } else {
                  c5 = 0;
                }
                const obj5 = _self(closure_2_1[9]);
                const result1 = obj5.completeSpanWithResults(closure_4, user.id, user.result, self);
              }
            } catch (tmp61) {
              if (0 === c5) {
                c7 = 3;
                throw tmp61;
              } else {
                c6 = 2;
              }
            }
          }
        })();
        iter.next();
        return iter;
      });
    });
  }
};