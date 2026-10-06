// === Module 15523: TotpScreen ===

// Module 15523 (TotpScreen)
import Fragment from "Fragment" /* 21 */;
import MFA from "MFA" /* 15524 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, c7, importDefault;

function isValidClipboardCode(arg0) {
  let isMatch = arg0.length === MFA.TOTP_CODE_LENGTH;
  if (isMatch) {
    const obj = /^\d+$/;
    isMatch = obj.test(arg0);
  }
  return isMatch;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_3;
  let closure_6;
  let finish;
  let first;
  let mfaChallenge;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp5;
  let tmp8;
  let obj = finish(first[6]);
  const cResult = obj.c(24);
  ({ mfaChallenge, finish } = arg0);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, importDefault] = tmp4;
  [first, _asyncToGenerator] = react.useState("");
  const tmp7 = _slicedToArray(react.useState(undefined), 2);
  [tmp8, _slicedToArray] = tmp7;
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [tmp10, react] = tmp9;
  if (cResult[0] !== finish) {
    let closure_0 = _asyncToGenerator(async (arg0) => {
      let closure_4;
      let message2;
      closure_0 = arg0;
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
        let v0;
        try {
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
              let closure_2 = tmp4;
              closure_0 = undefined;
              tmp(closure_0);
              const tmp33 = closure_0;
              if (isValidClipboardCode(closure_0)) {
                tmp26(undefined);
                message2(true);
                v0 = 1;
                const obj4 = { mfaType: "totp", data: tmp33 };
                c6 = 2;
                c7 = 1;
                const obj5 = { value: closure_0(obj4), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === c6) {
              v0 = 0;
              closure_0 = tmp26;
              let message;
              if (closure_0 != null) {
                const body = closure_0.body;
                if (body != null) {
                  message = body.message;
                }
              }
              message2 = message;
              if (message == null) {
                message2 = closure_0.message;
              }
              tmp26(message2);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v0(true);
              v0 = 0;
            }
            message2(false);
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp26) {
          if (0 === v0) {
            c7 = 3;
            throw tmp26;
          } else {
            c6 = 1;
          }
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[0] = finish;
    cResult[1] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  jsx = tmp11;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = finish(tmp2[7]).intl;
    const stringResult = intl.string(finish(first[7]).t.uc00u5);
    cResult[2] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = finish(tmp2[7]).intl;
    const stringResult1 = intl2.string(finish(first[7]).t.HZPBOd);
    const intl3 = finish(tmp2[7]).intl;
    const stringResult2 = intl3.string(finish(first[7]).t.tARzgo);
    cResult[3] = stringResult1;
    cResult[4] = stringResult2;
    tmp16 = stringResult2;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    if (cResult[6] === tmp11) {
      let tmp20;
      let tmp23;
      if (cResult[7] === (tmp5 || tmp10)) {
        tmp20 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = finish(tmp2[7]).intl;
        const stringResult3 = intl4.string(finish(first[7]).t.geKm7t);
        cResult[9] = stringResult3;
        tmp23 = stringResult3;
      } else {
        tmp23 = cResult[9];
      }
      if (cResult[10] === first) {
        let tmp26;
        if (cResult[11] === tmp11) {
          tmp26 = cResult[12];
        }
        if (!tmp5) {
          tmp5 = tmp10;
        }
        if (!tmp5) {
          tmp5 = first.length !== finish(tmp2[4]).TOTP_CODE_LENGTH;
        }
        if (cResult[13] === tmp5) {
          if (cResult[14] === (tmp5 || tmp10)) {
            let tmp27;
            if (cResult[15] === tmp26) {
              tmp27 = cResult[16];
            }
            if (cResult[17] === finish) {
              let tmp32;
              if (cResult[18] === mfaChallenge) {
                tmp32 = cResult[19];
              }
              if (cResult[20] === tmp27) {
                if (cResult[21] === tmp32) {
                  let tmp33;
                  if (cResult[22] === tmp20) {
                    tmp33 = cResult[23];
                  }
                  return tmp33;
                }
              }
              class A {
                constructor() {
                  closure_6(first);
                }
              }
              const tmp36 = jsx(require("MfaOptionScreen"), { headerText: tmp13, input: null, submit: tmp27, screenProps: tmp32, mfaMethod: "totp" });
              cResult[20] = tmp27;
              cResult[21] = tmp32;
              cResult[22] = tmp20;
              cResult[23] = tmp36;
              tmp33 = tmp36;
            }
            let obj3 = { mfaChallenge, finish };
            class A {
              constructor() {
                closure_6(first);
              }
            }
            cResult[18] = mfaChallenge;
            cResult[19] = obj3;
            tmp32 = obj3;
          }
        }
        class A {
          constructor() {
            closure_6(first);
          }
        }
        tmp30[1] = tmp23;
        tmp30[2] = tmp5 || tmp10;
        tmp30[3] = tmp26;
        tmp30[4] = tmp5;
        const tmp31 = jsx(require("button"), tmp30);
        cResult[13] = tmp5;
        cResult[14] = tmp5 || tmp10;
        cResult[15] = tmp26;
        cResult[16] = tmp31;
        tmp27 = tmp31;
      }
      class A {
        constructor() {
          closure_6(first);
        }
      }
      cResult[10] = first;
      cResult[11] = tmp11;
      cResult[12] = A;
      tmp26 = A;
    }
  }
  require("ClipboardCopyInput");
  const tmp22 = <tmp21 label={tmp15} placeholder={tmp16} isValidClipboardCode={isValidClipboardCode} maxLength={finish(first[4]).TOTP_CODE_LENGTH} onChangeCode={tmp11} error={tmp8} isDisabled={tmp5 || tmp10} textContentType="oneTimeCode" autoComplete="one-time-code" keyboardType="number-pad" />;
  cResult[5] = tmp8;
  cResult[6] = tmp11;
  cResult[7] = tmp5 || tmp10;
  cResult[8] = tmp22;
  tmp20 = tmp22;
}) : ((finish) => {
  let c1;
  let c4;
  let c5;
  let closure_3;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj2;
  let obj3;
  let tmp10Result;
  let tmp14;
  let tmp2;
  let tmp5;
  let tmp7;
  finish = finish.finish;
  importDefault = undefined;
  first = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const mfaChallenge = finish.mfaChallenge;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c1] = tmp;
  [first, _asyncToGenerator] = react.useState("");
  const tmp4 = _slicedToArray(react.useState(undefined), 2);
  [tmp5, c4] = tmp4;
  [tmp7, c5] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let closure_4;
    let message2;
    closure_0 = arg0;
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
      let v0;
      try {
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
            let closure_2 = tmp4;
            tmp(closure_0);
            const tmp33 = closure_0;
            if (isValidClipboardCode(closure_0)) {
              tmp26(undefined);
              message2(true);
              v0 = 1;
              const obj4 = { mfaType: "totp", data: tmp33 };
              c6 = 2;
              c7 = 1;
              const obj5 = { value: closure_0(obj4), done: false };
              return obj5;
            }
          }
        } else {
          if (1 === c6) {
            v0 = 0;
            closure_0 = tmp26;
            let message;
            if (closure_0 != null) {
              const body = closure_0.body;
              if (body != null) {
                message = body.message;
              }
            }
            message2 = message;
            if (message == null) {
              message2 = closure_0.message;
            }
            tmp26(message2);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0(true);
            v0 = 0;
          }
          message2(false);
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp26) {
        if (0 === v0) {
          c7 = 3;
          throw tmp26;
        } else {
          c6 = 1;
        }
      }
    }
  });
  const items = [finish];
  const onChangeCode = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  let obj = { headerText: intl.string(finish(first[7]).t.uc00u5), input: onChangeCode(tmp14, obj2), submit: onChangeCode(tmp10Result, obj3), screenProps: { mfaChallenge, finish }, mfaMethod: "totp" };
  const tmp12 = require("MfaOptionScreen");
  intl = finish(first[7]).intl;
  obj2 = { label: intl2.string(finish(first[7]).t.HZPBOd), placeholder: intl3.string(finish(first[7]).t.tARzgo), isValidClipboardCode, maxLength: finish(first[4]).TOTP_CODE_LENGTH, onChangeCode, error: tmp5, isDisabled: tmp2 || tmp7, textContentType: "oneTimeCode", autoComplete: "one-time-code", keyboardType: "number-pad" };
  tmp14 = require("ClipboardCopyInput");
  intl2 = finish(first[7]).intl;
  intl3 = finish(first[7]).intl;
  obj3 = {
    variant: "primary",
    text: intl4.string(finish(first[7]).t.geKm7t),
    loading: tmp2 || tmp7,
    onPress() {
      callback(first);
    },
    disabled: tmp2
  };
  tmp10Result = require("button");
  intl4 = tmp13(tmp11[7]).intl;
  if (!tmp2) {
    tmp2 = tmp7;
  }
  if (!tmp2) {
    tmp2 = first.length !== tmp13(tmp11[4]).TOTP_CODE_LENGTH;
  }
  return onChangeCode(tmp12, obj);
});
const result = size.fileFinishedImporting("modules/mfa/native/screens/TotpScreen.tsx");

export default tmp2;