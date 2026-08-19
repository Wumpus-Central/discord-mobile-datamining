// === Module 13338: _createTwoWayLink ===

// Module 13338 (_createTwoWayLink)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;

const require = fn;
function _createTwoWayLink() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c9 = 0;
    c10 = 0;
    c8 = 0;
    return (function*(arg0, body) {
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const callback3 = tmp4;
              let state = tmp9;
              const callback = callback2;
              callback2 = dependencyMap;
              dependencyMap = undefined;
              let url;
              c4 = undefined;
              state = undefined;
              const result = callback(13337).clientIdToActivateDevicePlatform(callback);
              dependencyMap = result;
              if (null == result) {
                c9 = 1;
                c10 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_6(tmp84, 1, "authorize");
                return obj1;
              } else {
                url = null;
                c8 = 1;
                let obj10 = callback2(5223);
                const obj2 = { twoWayLinkType: null, userCode: null };
                obj2[0] = callback(9761).TwoWayLinkType.DEVICE_CODE;
                obj2[1] = tmp84;
                c9 = 4;
                c10 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj10.authorize(result, obj2);
                return obj3;
              }
              const obj20 = callback(13337);
            }
          } else if (1 === tmp9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = body;
              return obj4;
            } else {
              const _Error4 = Error;
              error = new Error("Unsupported client_id for two way link");
              throw error;
            }
          } else if (2 === tmp9) {
            c8 = 0;
            let code;
            if (closure_7 != null) {
              const body2 = closure_7.body;
              if (body2 != null) {
                code = body2.code;
              }
            }
            url = code;
            if (code == null) {
              url = 0;
            }
            c9 = 5;
            c10 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = callback3(callback2, url, "authorize");
            return obj5;
          } else if (3 === tmp9) {
            c8 = 0;
            c9 = 6;
            c10 = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = callback3(callback2, 2, "authorize");
            return obj6;
          } else if (4 === tmp9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = body;
              return obj7;
            } else {
              url = body.body.url;
              c4 = null;
              c8 = 2;
              callback2(38)(null != url, "No URL in authorize response");
              state = callback(5224).getCallbackParamsFromURL(url).state;
              callback2(38)(null != state, "Authorize URL state query parameter must be present");
              c4 = state;
              c8 = 3;
              const obj17 = callback(5224);
              const obj8 = { code: null, state: null };
              obj8[0] = callback;
              obj8[1] = c4;
              c9 = 8;
              c10 = 1;
              const obj9 = { value: null, done: false };
              obj9[0] = callback2(5223).callback(dependencyMap, obj8);
              return obj9;
            }
          } else if (5 === tmp9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c10 = 3;
              obj10 = { value: null, done: true };
              obj10[0] = body;
              return obj10;
            } else {
              const _Error3 = Error;
              const error1 = new Error("error during two way authorize");
              throw error1;
            }
          } else if (6 === tmp9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = body;
              return obj11;
            } else {
              const _Error2 = Error;
              const error2 = new Error("error parsing callback params");
              throw error2;
            }
          } else if (7 === tmp9) {
            c8 = 0;
            let code1;
            if (closure_7 != null) {
              body = closure_7.body;
              if (body != null) {
                code1 = body.code;
              }
            }
            c4 = code1;
            if (code1 == null) {
              c4 = 0;
            }
            c9 = 9;
            c10 = 1;
            const obj12 = { value: null, done: false };
            obj12[0] = callback3(callback2, c4, "callback");
            return obj12;
          } else if (8 === tmp9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              const obj13 = { value: null, done: true };
              obj13[0] = body;
              return obj13;
            } else {
              c8 = 0;
              c10 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw body;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            const _Error = Error;
            const error3 = new Error("error during two way callback");
            throw error3;
          }
        } catch (tmp50) {
          closure_7 = tmp50;
          if (tmp5 === c8) {
            c10 = tmp3;
            throw tmp50;
          } else if (tmp2 === tmp52) {
            c9 = tmp;
          } else if (tmp === tmp52) {
            c9 = tmp3;
          } else {
            c9 = tmp6;
          }
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function silentlyFinishTwoWayLinkError() {
  const self = this;
  const apply = _silentlyFinishTwoWayLinkError.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _silentlyFinishTwoWayLinkError() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      c6 = 1;
      obj1 = callback(table[7]);
      yield obj1.finishUserCodeTwoWayLinkError(callback, closure_1, table);
      if (1 === tmp6) {
        c6 = 0;
        c3 = 3;
      } else if (arg0 === 1) {
        c3 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c6 = 0;
      }
      c6 = 0;
      return arg1;
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("obj132").fileFinishedImporting("modules/activate_device/useDeviceCodeAuthorizeCallback.tsx");

export const useDeviceCodeAuthorizeCallback = function useDeviceCodeAuthorizeCallback(callback, callback2, callback1) {
  closure_1 = callback2;
  closure_2 = callback1;
  closure_0 = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
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
              closure_3 = tmp4;
              dependencyMap = tmp6;
              if (callback2) {
                if (null == callback.twoWayLinkCode) {
                  c5 = 2;
                  c6 = 4;
                  c7 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = callback(9772).finishUserCode(callback.userCode, "granted");
                  return obj1;
                } else {
                  c5 = 3;
                  c6 = 5;
                  c7 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = (function createTwoWayLink(clientId, twoWayLinkCode, userCode) {
                    const self = this;
                    const apply = c5.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(callback.clientId, callback.twoWayLinkCode, callback.userCode);
                  return obj2;
                }
              } else {
                c5 = 1;
                let obj3 = callback(9772);
                c6 = 6;
                c7 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = obj3.finishUserCode(callback.userCode, "denied");
                return obj3;
              }
            }
          } else {
            if (1 === tmp9) {
              c5 = 0;
              callback();
            } else {
              if (2 === tmp9) {
                c5 = 0;
                callback2(callback);
              } else if (3 === tmp9) {
                c5 = 0;
                callback2(callback);
              } else {
                if (4 === tmp9) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    c7 = 3;
                    const obj4 = { value: null, done: true };
                    obj4[0] = arg1;
                    return obj4;
                  } else {
                    callback1(callback);
                    c5 = 0;
                  }
                } else if (5 === tmp9) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 !== 2) {
                    callback1(callback);
                    c5 = 0;
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  c5 = 0;
                }
                c5 = 0;
                c7 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
              c7 = 3;
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp40) {
          closure_4 = tmp40;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp40;
          } else if (tmp2 === tmp42) {
            c6 = tmp2;
          } else if (tmp === tmp42) {
            c6 = tmp;
          } else {
            c6 = tmp3;
          }
        }
      }
    })();
  });
  const items = [callback, callback2, callback1];
  return React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};