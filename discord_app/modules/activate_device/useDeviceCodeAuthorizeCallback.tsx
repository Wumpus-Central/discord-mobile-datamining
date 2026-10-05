// discord_app/modules/activate_device/useDeviceCodeAuthorizeCallback.tsx
import ConnectedAccountsActionCreatorsDefault from "../../actions/ConnectedAccountsActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c7, closure_6, code, dependencyMap, state;

function createTwoWayLink() {
  return obj(...arguments);
}
let obj = function _createTwoWayLink() {
  obj = _asyncToGenerator(async (code, arg1, userCode) => {
    let closure_7;
    let closure_1 = arg1;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async function (arg0, value, arg2) {
      let obj17;
      if (c10 === 2) {
        c10 = 3;
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
          let url;
          let c2;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp;
              closure_5 = tmp4;
              code = closure_1;
              closure_1 = userCode;
              url = undefined;
              state = undefined;
              const obj19 = require("ActivateDeviceUtils");
              const result = obj19.clientIdToActivateDevicePlatform(code);
              c2 = result;
              if (null == result) {
                c9 = 1;
                c10 = 1;
                const obj4 = { value: silentlyFinishTwoWayLinkError(userCode, 1, "authorize"), done: false };
                return obj4;
              } else {
                url = null;
                c8 = 1;
                const obj5 = { twoWayLinkType: require("TwoWayLinkType").TwoWayLinkType.DEVICE_CODE, userCode };
                const authorize = ConnectedAccountsActionCreatorsDefault.authorize;
                ConnectedAccountsActionCreatorsDefault;
                c9 = 4;
                c10 = 1;
                const obj6 = { value: authorize(result, obj5), done: false };
                return obj6;
              }
            }
          } else if (1 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              const _Error4 = Error;
              const self7 = this;
              const self8 = this;
              const error = new Error("Unsupported client_id for two way link");
              throw error;
            }
          } else if (2 === c9) {
            c8 = 0;
            code = undefined;
            const tmp27 = closure_1;
            if (tmp38 != null) {
              const body2 = tmp38.body;
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
            const obj8 = { value: closure_134_7(tmp27, c3, "authorize"), done: false };
            return obj8;
          } else if (3 === c9) {
            c8 = 0;
            c9 = 6;
            c10 = 1;
            const obj9 = { value: closure_134_7(closure_1, 2, "authorize"), done: false };
            return obj9;
          } else if (4 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              return { value, done: true };
            } else {
              url = value.body.url;
              closure_134_1(closure_134_2[5])(null != url, "No URL in authorize response");
              const obj16 = closure_134_0(closure_134_2[6]);
              state = obj16.getCallbackParamsFromURL(url).state;
              closure_134_1(closure_134_2[5])(null != state, "Authorize URL state query parameter must be present");
              c8 = 3;
              c9 = 8;
              c10 = 1;
              const obj11 = { code, state };
              const obj12 = { value: obj17.callback(c2, obj11), done: false };
              obj17 = closure_134_1(closure_134_2[3]);
              return obj12;
            }
          } else if (5 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              const _Error3 = Error;
              const self5 = this;
              const self6 = this;
              const error1 = new Error("error during two way authorize");
              throw error1;
            }
          } else if (6 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error2 = new Error("error parsing callback params");
              throw error2;
            }
          } else if (7 === c9) {
            c8 = 0;
            let code1;
            const tmp11 = closure_1;
            if (tmp38 != null) {
              const body = tmp38.body;
              if (body != null) {
                code1 = body.code;
              }
            }
            let c4 = code1;
            if (code1 == null) {
              c4 = 0;
            }
            c9 = 9;
            c10 = 1;
            const obj15 = { value: closure_134_7(tmp11, c4, "callback"), done: false };
            return obj15;
          } else if (8 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              return { value, done: true };
            } else {
              c8 = 0;
              c10 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            return { value, done: true };
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error3 = new Error("error during two way callback");
            throw error3;
          }
        } catch (tmp38) {
          if (0 === c8) {
            c10 = 3;
            throw tmp38;
          } else if (1 === c8) {
            c9 = 2;
          } else if (2 === c8) {
            c9 = 3;
          } else {
            c9 = 7;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function silentlyFinishTwoWayLinkError() {
  return obj(...arguments);
}
obj = function _silentlyFinishTwoWayLinkError() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c6 = 1;
            c4 = 2;
            c3 = 1;
            const obj5 = { value: obj2.finishUserCodeTwoWayLinkError(closure_0, closure_1, closure_2), done: false };
            obj2 = require("oauth2/actions");
            return obj5;
          }
        } else {
          if (1 === tmp3) {
            c6 = 0;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        let closure_5 = tmp10;
        if (0 === c6) {
          c3 = 3;
          throw tmp10;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_2;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          let tmp2;
          if (cResult[2] === arg2) {
            tmp2 = cResult[3];
          }
          return tmp2;
        }
      }
      _require = _asyncToGenerator(async (arg0, arg1) => {
        let obj4;
        closure_0 = arg0;
        closure_1 = arg1;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c5;
          try {
            let twoWayLinkCode;
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_3 = tmp;
                twoWayLinkCode = closure_1;
                if (twoWayLinkCode) {
                  twoWayLinkCode = closure_0.twoWayLinkCode;
                  if (null == twoWayLinkCode) {
                    c5 = 2;
                    const obj7 = closure_0(closure_2_2[7]);
                    twoWayLinkCode = obj7.finishUserCode(closure_0.userCode, "granted");
                    c6 = 4;
                    c7 = 1;
                    const obj5 = { value: twoWayLinkCode, done: false };
                    return obj5;
                  } else {
                    c5 = 3;
                    c6 = 5;
                    c7 = 1;
                    const obj6 = {
                      value: createTwoWayLink(closure_0.clientId, closure_0.twoWayLinkCode, closure_0.userCode),
                      done: false,
                    };
                    return obj6;
                  }
                } else {
                  c5 = 1;
                  c6 = 6;
                  c7 = 1;
                  const obj8 = { value: obj4.finishUserCode(closure_0.userCode, "denied"), done: false };
                  obj4 = closure_0(closure_2_2[7]);
                  return obj8;
                }
              }
            } else {
              if (1 === c6) {
                c5 = 0;
                closure_0();
              } else if (2 === c6) {
                c5 = 0;
                twoWayLinkCode = closure_1;
                closure_1(closure_0);
              } else if (3 === c6) {
                c5 = 0;
                twoWayLinkCode = closure_1;
                closure_1(closure_0);
              } else if (4 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  twoWayLinkCode(closure_0);
                  c5 = 0;
                }
              } else if (5 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  twoWayLinkCode(closure_0);
                  c5 = 0;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c5 = 0;
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp32) {
            let closure_4 = tmp32;
            if (0 === c5) {
              c7 = 3;
              throw tmp32;
            } else if (1 === c5) {
              c6 = 1;
            } else if (2 === c5) {
              c6 = 2;
            } else {
              c6 = 3;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = arg2;
      cResult[3] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1, arg2) => {
      let closure_1 = arg1;
      let closure_2 = arg2;
      const useCallback = react.useCallback;
      let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
        let obj4;
        closure_0 = arg0;
        closure_1 = arg1;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c5;
          try {
            let twoWayLinkCode;
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_3 = tmp;
                twoWayLinkCode = closure_1;
                if (twoWayLinkCode) {
                  twoWayLinkCode = closure_0.twoWayLinkCode;
                  if (null == twoWayLinkCode) {
                    c5 = 2;
                    const obj7 = closure_0(closure_2_2[7]);
                    twoWayLinkCode = obj7.finishUserCode(closure_0.userCode, "granted");
                    c6 = 4;
                    c7 = 1;
                    const obj5 = { value: twoWayLinkCode, done: false };
                    return obj5;
                  } else {
                    c5 = 3;
                    c6 = 5;
                    c7 = 1;
                    const obj6 = {
                      value: createTwoWayLink(closure_0.clientId, closure_0.twoWayLinkCode, closure_0.userCode),
                      done: false,
                    };
                    return obj6;
                  }
                } else {
                  c5 = 1;
                  c6 = 6;
                  c7 = 1;
                  const obj8 = { value: obj4.finishUserCode(closure_0.userCode, "denied"), done: false };
                  obj4 = closure_0(closure_2_2[7]);
                  return obj8;
                }
              }
            } else {
              if (1 === c6) {
                c5 = 0;
                closure_0();
              } else if (2 === c6) {
                c5 = 0;
                twoWayLinkCode = closure_1;
                closure_1(closure_0);
              } else if (3 === c6) {
                c5 = 0;
                twoWayLinkCode = closure_1;
                closure_1(closure_0);
              } else if (4 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  twoWayLinkCode(closure_0);
                  c5 = 0;
                }
              } else if (5 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  twoWayLinkCode(closure_0);
                  c5 = 0;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c5 = 0;
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp32) {
            let closure_4 = tmp32;
            if (0 === c5) {
              c7 = 3;
              throw tmp32;
            } else if (1 === c5) {
              c6 = 1;
            } else if (2 === c5) {
              c6 = 2;
            } else {
              c6 = 3;
            }
          }
        }
      });
      const items = [arg0, arg1, arg2];
      return useCallback(function () {
        return closure_0(...arguments);
      }, items);
    };
let result = size.fileFinishedImporting("modules/activate_device/useDeviceCodeAuthorizeCallback.tsx");

export const useDeviceCodeAuthorizeCallback = tmp2;
