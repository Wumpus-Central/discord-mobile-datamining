// === Module 13713: useUserCodeSubmit ===

// Module 13713 (useUserCodeSubmit)
import intl4 from "intl" /* 1126 */;
import OAuthConstants2 from "OAuthConstants" /* 13712 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, dependencyMap;

function verifyUserCodeStatusToErrorMessage(arg0) {
  let stringResult;
  if (429 === arg0) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(intl4.t.BPmZvj);
  } else {
    if (404 !== arg0) {
      if (400 !== arg0) {
        const intl = intl4.intl;
        stringResult = intl.string(intl4.t.JNQRU4);
      }
    }
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.aWa1Pw);
  }
  return stringResult;
}
let _asyncToGenerator = _asyncToGenerator_mod;
const OAuthConstants = OAuthConstants2.OAuthConstants;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_1;
  let closure_2;
  let length;
  let tmp3;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  _asyncToGenerator = arg2;
  let obj = require("react");
  const cResult = obj.c(12);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, _slicedToArray] = tmp2;
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, react] = tmp4;
  if (cResult[0] === arg2) {
    if (cResult[1] === arg1) {
      let tmp6;
      if (cResult[2] === arg0) {
        tmp6 = cResult[3];
      }
      let closure_5 = tmp6;
      if (cResult[4] === tmp6) {
        let tmp7;
        let tmp8;
        if (cResult[5] === arg0) {
          tmp7 = cResult[6];
          tmp8 = cResult[7];
        }
        const effect = react.useEffect(tmp7, tmp8);
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            let tmp10;
            if (cResult[10] === tmp3) {
              tmp10 = cResult[11];
            }
            return tmp10;
          }
        }
        let obj3 = { manualSubmit: tmp6, error: tmp5, submitting: tmp3 };
        cResult[8] = tmp5;
        cResult[9] = tmp6;
        cResult[10] = tmp3;
        cResult[11] = obj3;
        tmp10 = obj3;
      }
      const fn2 = function h() {
        if (length.length === OAuthConstants.USER_CODE_LENGTH) {
          closure_5();
        } else {
          react(null);
        }
      };
      const items = [arg0, tmp6];
      cResult[4] = tmp6;
      cResult[5] = arg0;
      cResult[6] = fn2;
      cResult[7] = items;
      tmp8 = items;
      tmp7 = fn2;
    }
  }
  _require = _asyncToGenerator(async () => {
    let obj3;
    if (c5 === 2) {
      c5 = 3;
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
      let v0;
      try {
        let userCode;
        let tmp;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            userCode = undefined;
            tmp = undefined;
            v0 = 1;
            v0(true);
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj3.verifyUserCode(userCode), done: false };
            obj3 = userCode(closure_2_1[7]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            v0 = 0;
            tmp = tmp36;
            let status;
            const tmp19 = c4;
            if (tmp != null) {
              status = tmp.status;
            }
            tmp19(verifyUserCodeStatusToErrorMessage(status));
            v0(false);
            let status1;
            if (tmp != null) {
              status1 = tmp.status;
            }
            if (401 === status1) {
              tmp36();
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            userCode = value;
            v0(false);
            const obj = { userCode, clientId: userCode.body.client_id, scopes: userCode.body.scopes, twoWayLinkCode: userCode.body.two_way_link_code };
            tmp(obj);
            v0 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        if (0 === v0) {
          c5 = 3;
          throw tmp36;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = arg2;
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1, arg2) => {
  let closure_3;
  let closure_4;
  let error;
  let submitting;
  let length = arg0;
  let closure_1 = arg1;
  _asyncToGenerator = arg2;
  [submitting, _slicedToArray] = react.useState(false);
  [error, react] = react.useState(null);
  const items = [arg0, arg1, arg2];
  const manualSubmit = react.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let obj3;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            length = undefined;
            c3 = 1;
            v0(true);
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj3.verifyUserCode(length), done: false };
            obj3 = length(tmp[7]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            let status;
            if (closure_2 != null) {
              status = tmp.status;
            }
            closure_129_4(verifyUserCodeStatusToErrorMessage(status));
            closure_129_3(false);
            let status1;
            if (closure_2 != null) {
              status1 = tmp.status;
            }
            if (401 === status1) {
              closure_129_2();
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            length = value;
            closure_129_3(false);
            const obj = { userCode: closure_129_0, clientId: length.body.client_id, scopes: length.body.scopes, twoWayLinkCode: length.body.two_way_link_code };
            closure_129_1(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        closure_2 = tmp36;
        if (0 === c3) {
          c5 = 3;
          throw tmp36;
        } else {
          c4 = 1;
        }
      }
    }
  }), items);
  const items1 = [arg0, manualSubmit];
  const effect = react.useEffect(() => {
    if (length.length === OAuthConstants.USER_CODE_LENGTH) {
      manualSubmit();
    } else {
      closure_4(null);
    }
  }, items1);
  return { manualSubmit, error, submitting };
});
const result = size.fileFinishedImporting("modules/activate_device/useUserCodeSubmit.tsx");

export const useUserCodeSubmit = tmp2;