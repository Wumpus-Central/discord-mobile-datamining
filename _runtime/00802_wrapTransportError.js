// _runtime/00802_wrapTransportError.js
import _mod687 from "metro/00687__.js";
import _mod731 from "metro/00731__.js";
import extractClientInfo from "00803_extractClientInfo.js";
import CLIENT_ADDRESS_ATTRIBUTE from "00805_CLIENT_ADDRESS_ATTRIBUTE.js";
import _mod806 from "metro/00806__.js";
import _mod810 from "metro/00810__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

const require = globalThis.__r;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapTransportError = function wrapTransportError(onerror) {
  if (onerror.onerror) {
    _mod687.fill(onerror, "onerror", (arg0) => {
      closure_0 = arg0;
      return function (error) {
        const self = this;
        (function captureTransportError(error) {
          try {
            closure_1_0(dependencyMap[10]).captureError(error, "transport");
            const obj = closure_1_0(dependencyMap[10]);
          } catch (err) {}
        })(error);
        const call = closure_0.call;
        return typeof call === "unknown" ? closure_0(error) : call(self, error);
      };
    });
  }
};
export const wrapTransportOnClose = function wrapTransportOnClose(onclose) {
  if (onclose.onclose) {
    _mod687.fill(onclose, "onclose", (arg0) => {
      closure_0 = arg0;
      return function () {
        const items = [...arguments];
        const result = require("metro/00810__.js").cleanupPendingSpansForTransport(this);
        const obj = require("metro/00810__.js");
        const result1 = require("metro/00804__.js").cleanupSessionDataForTransport(this);
        const items1 = [this, ...items];
        return closure_0.call.apply(items1);
      };
    });
  }
};
export const wrapTransportOnMessage = function wrapTransportOnMessage(onmessage, arg1) {
  _require = arg1;
  if (onmessage.onmessage) {
    require("metro/00687__.js").fill(onmessage, "onmessage", (arg0) => {
      closure_0 = arg0;
      return function (method, extra) {
        const self = this;
        closure_2 = extra;
        if (obj.isJsonRpcRequest(method)) {
          closure_0 = tmp10;
          if ("initialize" === method.method) {
            try {
              const result = tmp(dependencyMap[3]).extractSessionDataFromInitializeRequest(method);
              closure_3 = result;
              let tmpResult = tmp(dependencyMap[3]);
              const result1 = tmp(dependencyMap[4]).storeSessionDataForTransport(self, result);
              const tmpResult6 = tmp(dependencyMap[4]);
            } catch (err) {}
          }
          const isolationScope = tmp(dependencyMap[5]).getIsolationScope();
          const tmpResult7 = tmp(dependencyMap[5]);
          const cloneResult = isolationScope.clone();
          return tmp(dependencyMap[5]).withIsolationScope(cloneResult, () => {
            const mcpServerSpanConfig = _mod806.buildMcpServerSpanConfig(method, self, closure_2, closure_0);
            const startInactiveSpanResult = _mod731.startInactiveSpan(mcpServerSpanConfig);
            let tmp6 = closure_0;
            if (closure_0) {
              tmp6 = result;
            }
            if (tmp6) {
              const obj3 = {};
              const merged = Object.assign(extractClientInfo.buildClientAttributesFromInfo(result.clientInfo));
              let protocolVersion = result.protocolVersion;
              if (protocolVersion) {
                const obj4 = {};
                obj4[CLIENT_ADDRESS_ATTRIBUTE.MCP_PROTOCOL_VERSION_ATTRIBUTE] = result.protocolVersion;
                protocolVersion = obj4;
              }
              const merged1 = Object.assign(protocolVersion);
              startInactiveSpanResult.setAttributes(obj3);
              const tmpResult = extractClientInfo;
            }
            _mod810.storeSpanForRequest(self, method.id, startInactiveSpanResult, method.method);
            const tmpResult3 = _mod810;
            return _mod731.withActiveSpan(startInactiveSpanResult, () => {
              const call = closure_0.call;
              return typeof call === "unknown" ? closure_0(method, extra) : call(self, method, extra);
            });
          });
        } else {
          if (tmpResult9.isJsonRpcNotification(method)) {
            const tmpResult10 = tmp(dependencyMap[6]);
            let mcpNotificationSpan = tmpResult10.createMcpNotificationSpan(method, self, extra, closure_0, () => {
              const call = closure_0.call;
              return typeof call === "unknown" ? closure_0(closure_1, closure_2) : call(self, closure_1, closure_2);
            });
          } else {
            let call = closure_0.call;
            mcpNotificationSpan = typeof call === "unknown" ? closure_0(method, extra) : call(self, method, extra);
          }
          return mcpNotificationSpan;
        }
        obj = closure_0(dependencyMap[2]);
      };
    });
    let obj = require("metro/00687__.js");
  }
};
export const wrapTransportSend = function wrapTransportSend(send, arg1) {
  _require = arg1;
  if (send.send) {
    require("metro/00687__.js").fill(send, "send", (arg0) => {
      closure_0 = arg0;
      return asyncGeneratorStep(async function () {
        const self = this;
        closure_1 = [...arguments];
        c6 = 0;
        c7 = 0;
        c5 = 0;
        const iter = (async (arg0) => {
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj6 = { value, done: true };
              return obj6;
            } else {
              return { value: "HermesInternal", done: null };
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
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  closure_4 = self;
                  closure_3 = tmp3;
                  closure_2 = self;
                  closure_130_3 = self;
                  closure_130_1 = dependencyMap;
                  closure_130_2 = undefined;
                  closure_130_0 = undefined;
                  c6 = 1;
                  c7 = 1;
                  return { value: "flex", done: true };
                }
              } else {
                if (1 === tmp7) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj9 = { value, done: true };
                    return obj9;
                  } else {
                    closure_130_2 = closure_130_1[0];
                    if (obj12.isJsonRpcNotification(closure_130_2)) {
                      const obj7 = _self(806);
                      c7 = 3;
                      const obj10 = {
                        value: obj7.createMcpOutgoingNotificationSpan(closure_130_2, closure_4, self, () => {
                          const items = [closure_1_3, ...closure_1_1];
                          return self.call.apply(items);
                        }),
                        done: true,
                      };
                      return obj10;
                    } else {
                      if (obj.isJsonRpcResponse(closure_130_2)) {
                        if (null !== closure_130_2.id) {
                          if (undefined !== closure_130_2.id) {
                            if (closure_130_2.error) {
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
                                            _self(dependencyMap[10]).captureError(error, "protocol");
                                            const obj = _self(dependencyMap[10]);
                                          }
                                        }
                                      }
                                    }
                                  }
                                } catch (err) {}
                              })(closure_130_2.error);
                            }
                            if (obj2.isValidContentItem(closure_130_2.result)) {
                              if (closure_130_2.result.protocolVersion) {
                                c5 = 1;
                                closure_130_0 = _self(803).extractSessionDataFromInitializeResponse(
                                  closure_130_2.result,
                                );
                                const obj3 = _self(803);
                                const result = _self(804).updateSessionDataForTransport(closure_4, closure_130_0);
                                c5 = 0;
                                const obj4 = _self(804);
                              }
                            }
                            obj2 = _self(801);
                          }
                        }
                      }
                      const call = closure_131_0.call;
                      let items = [closure_4];
                      HermesBuiltin.arraySpread(closure_130_1, 1);
                      c7 = 3;
                      const obj11 = { value: HermesBuiltin.apply(items, closure_131_0), done: true };
                      return obj11;
                    }
                    obj12 = _self(801);
                  }
                } else {
                  c5 = 0;
                }
                const obj5 = _self(810);
                const result1 = obj5.completeSpanWithResults(closure_4, closure_130_2.id, closure_130_2.result, self);
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
    let obj = require("metro/00687__.js");
  }
};
