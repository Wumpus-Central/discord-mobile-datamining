// === Module 15516: isValidClipboardCode ===

// Module 15516 (isValidClipboardCode)
import finishMFACheck from "finishMFACheck" /* 15517 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function isValidClipboardCode(arg0) {
  let isMatch = arg0.length === finishMFACheck.TOTP_CODE_LENGTH;
  if (isMatch) {
    isMatch = /^\d+$/.test(arg0);
    const obj = /^\d+$/;
  }
  return isMatch;
}
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/TotpScreen.tsx");

export default function TotpScreen(finish) {
  finish = finish.finish;
  let _require = finish;
  importDefault = undefined;
  let first;
  let callback;
  let callback2;
  let React;
  callback = undefined;
  [tmp2, c1] = callback2(React.useState(false), 2);
  const tmp3 = callback2(React.useState(""), 2);
  first = tmp3[0];
  callback = tmp3[1];
  const tmp = callback2(React.useState(false), 2);
  [tmp5, c4] = callback2(React.useState(undefined), 2);
  const tmp4 = callback2(React.useState(undefined), 2);
  [tmp7, c5] = callback2(React.useState(false), 2);
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
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
          let tmp7 = c6;
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
              closure_3 = tmp3;
              closure_2 = tmp7;
              closure_1_3(lib);
              tmp7 = closure_2_7(lib);
              if (tmp7) {
                closure_1_4(undefined);
                closure_1_1(true);
                let v0 = 1;
                obj1 = { mfaType: "totp", data: null };
                obj1[1] = tmp37;
                c6 = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = lib(obj1);
                return obj2;
              }
              tmp37 = lib;
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              lib = closure_4;
              let message;
              if (lib != null) {
                const body = lib.body;
                if (body != null) {
                  message = body.message;
                }
              }
              if (message == null) {
                message = lib.message;
              }
              closure_1_4(message);
              const tmp15 = closure_1_4;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              v0(true);
              v0 = 0;
            }
            tmp7 = closure_1_1(false);
          }
          c7 = 3;
        } catch (tmp28) {
          closure_4 = tmp28;
          if (tmp4 === v0) {
            c7 = tmp2;
            throw tmp28;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const items = [finish];
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let obj = { headerText: null, input: null, submit: null, screenProps: null, mfaMethod: "totp" };
  const tmp10 = importDefault;
  const tmp6 = callback2(React.useState(false), 2);
  const intl = _require(first[6]).intl;
  obj[0] = intl.string(_require(first[6]).t.uc00u5);
  obj = { label: null, placeholder: null, isValidClipboardCode: null, maxLength: null, onChangeCode: null, error: null, isDisabled: null, textContentType: "oneTimeCode", autoComplete: "one-time-code", keyboardType: "number-pad" };
  const tmp12 = importDefault(first[5]);
  const intl2 = _require(first[6]).intl;
  obj[0] = intl2.string(_require(first[6]).t.HZPBOd);
  const intl3 = _require(first[6]).intl;
  obj[1] = intl3.string(_require(first[6]).t.tARzgo);
  obj[2] = isValidClipboardCode;
  obj[3] = _require(first[4]).TOTP_CODE_LENGTH;
  obj[4] = callback;
  obj[5] = tmp5;
  let tmp15 = tmp2;
  if (!tmp2) {
    tmp15 = tmp7;
  }
  obj[6] = tmp15;
  obj[1] = callback(importDefault(first[7]), obj);
  obj = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmp14 = importDefault(first[7]);
  const intl4 = tmp13(tmp11[6]).intl;
  obj[1] = intl4.string(_require(first[6]).t.geKm7t);
  let tmp17 = tmp2;
  if (!tmp2) {
    tmp17 = tmp7;
  }
  obj[2] = tmp17;
  obj[3] = function onPress() {
    callback(first);
  };
  if (!tmp2) {
    tmp2 = tmp7;
  }
  if (!tmp2) {
    tmp2 = first.length !== tmp13(tmp11[4]).TOTP_CODE_LENGTH;
  }
  obj[4] = tmp2;
  obj[2] = callback(tmp10(first[8]), obj);
  obj[3] = { mfaChallenge: finish.mfaChallenge, finish };
  return callback(tmp12, obj);
};