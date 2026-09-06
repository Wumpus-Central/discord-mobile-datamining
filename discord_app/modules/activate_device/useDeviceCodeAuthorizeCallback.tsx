// === Module 13878: useDeviceCodeAuthorizeCallback ===

// Module 13878 (useDeviceCodeAuthorizeCallback)
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 5406 */;
import TwoWayLinkType from "TwoWayLinkType" /* 9231 */;
import oauth2_actions from "oauth2/actions" /* 9244 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 13877 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_5 = async function _createTwoWayLink(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c9 = 0;
  c10 = 0;
  c8 = 0;
  return (async (arg0, value, arg2) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_6 = tmp4;
            closure_5 = tmp9;
            closure_133_0 = closure_1;
            closure_133_1 = userCode;
            closure_133_2 = undefined;
            let url;
            closure_133_4 = undefined;
            let state;
            const result = ActivateDeviceUtils.clientIdToActivateDevicePlatform(closure_0);
            closure_133_2 = result;
            if (null == result) {
              c9 = 1;
              c10 = 1;
              const obj1 = { value: silentlyFinishTwoWayLinkError(userCode, 1, "authorize"), done: false };
              return obj1;
            } else {
              url = null;
              c8 = 1;
              let obj10 = ConnectedAccountsActionCreatorsDefault;
              const obj2 = { twoWayLinkType: TwoWayLinkType.TwoWayLinkType.DEVICE_CODE, userCode };
              c9 = 4;
              c10 = 1;
              const obj3 = { value: obj10.authorize(result, obj2), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const _Error4 = Error;
            const error = new Error("Unsupported client_id for two way link");
            throw error;
          }
        } else if (2 === tmp9) {
          c8 = 0;
          let code;
          if (tmp50 != null) {
            const body2 = tmp50.body;
            if (body2 != null) {
              code = body2.code;
            }
          }
          c3 = code;
          if (code == null) {
            c3 = 0;
          }
          c9 = 5;
          c10 = 1;
          const obj5 = { value: closure_134_6(closure_133_1, c3, "authorize"), done: false };
          return obj5;
        } else if (3 === tmp9) {
          c8 = 0;
          c9 = 6;
          c10 = 1;
          const obj6 = { value: closure_134_6(closure_133_1, 2, "authorize"), done: false };
          return obj6;
        } else if (4 === tmp9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            url = value.body.url;
            closure_133_4 = null;
            c8 = 2;
            closure_134_1(closure_134_2[5])(null != url, "No URL in authorize response");
            state = closure_134_0(closure_134_2[6]).getCallbackParamsFromURL(url).state;
            closure_134_1(closure_134_2[5])(null != state, "Authorize URL state query parameter must be present");
            closure_133_4 = state;
            c8 = 3;
            const obj17 = closure_134_0(closure_134_2[6]);
            const obj8 = { code: closure_133_0, state: closure_133_4 };
            c9 = 8;
            c10 = 1;
            const obj9 = { value: closure_134_1(closure_134_2[3]).callback(closure_133_2, obj8), done: false };
            return obj9;
          }
        } else if (5 === tmp9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj10 = { value, done: true };
            return obj10;
          } else {
            const _Error3 = Error;
            const error1 = new Error("error during two way authorize");
            throw error1;
          }
        } else if (6 === tmp9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            const _Error2 = Error;
            const error2 = new Error("error parsing callback params");
            throw error2;
          }
        } else if (7 === tmp9) {
          c8 = 0;
          let code1;
          if (tmp50 != null) {
            const body = tmp50.body;
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
          const obj12 = { value: closure_134_6(closure_133_1, c4, "callback"), done: false };
          return obj12;
        } else if (8 === tmp9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            c8 = 0;
            c10 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const _Error = Error;
          const error3 = new Error("error during two way callback");
          throw error3;
        }
      } catch (tmp50) {
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
};
function silentlyFinishTwoWayLinkError() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _silentlyFinishTwoWayLinkError(arg0) {
  await oauth2_actions.finishUserCodeTwoWayLinkError(closure_0, closure_1, closure_2);
  if (1 === tmp6) {
    c6 = 0;
    c3 = 3;
  } else if (arg0 === 1) {
    c3 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c6 = 0;
  }
  return value;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/activate_device/useDeviceCodeAuthorizeCallback.tsx");

export const useDeviceCodeAuthorizeCallback = function useDeviceCodeAuthorizeCallback(callback, callback2, callback1) {
  closure_2 = callback1;
  closure_0 = asyncGeneratorStep(async (arg0, arg1) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp4;
            closure_130_0 = closure_0;
            if (callback2) {
              if (null == closure_0.twoWayLinkCode) {
                c5 = 2;
                c6 = 4;
                c7 = 1;
                const obj1 = { value: closure_0(tmp6[7]).finishUserCode(closure_0.userCode, "granted"), done: false };
                return obj1;
              } else {
                c5 = 3;
                c6 = 5;
                c7 = 1;
                const obj2 = {
                  value: (function createTwoWayLink() {
                                const self = this;
                                const apply = closure_1_5.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(closure_0.clientId, closure_0.twoWayLinkCode, closure_0.userCode),
                  done: false
                };
                return obj2;
              }
            } else {
              c5 = 1;
              let obj3 = closure_0(tmp6[7]);
              c6 = 6;
              c7 = 1;
              obj3 = { value: null, done: false };
              obj3.value = obj3.finishUserCode(closure_0.userCode, "denied");
              return obj3;
            }
          }
        } else {
          if (1 === tmp9) {
            c5 = 0;
            closure_0();
          } else {
            if (2 === tmp9) {
              c5 = 0;
              callback2(closure_130_0);
            } else if (3 === tmp9) {
              c5 = 0;
              callback2(closure_130_0);
            } else {
              if (4 === tmp9) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  tmp6(closure_130_0);
                  c5 = 0;
                }
              } else if (5 === tmp9) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  tmp6(closure_130_0);
                  c5 = 0;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c5 = 0;
              }
              c5 = 0;
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            }
            c7 = 3;
          }
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
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
  });
  const items = [callback, callback2, callback1];
  return noop.useCallback(function() {
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