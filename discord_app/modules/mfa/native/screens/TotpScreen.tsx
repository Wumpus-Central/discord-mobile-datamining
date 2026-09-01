// === Module 15274: isValidClipboardCode ===

// Module 15274 (isValidClipboardCode)
import finishMFACheck from "finishMFACheck" /* 15275 */;
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

export default function TotpScreen() {
  let obj = _require(first[5]);
  const finish = obj.useMfaChallenge().finish;
  _require = finish;
  [tmp4, importDefault] = callback2(React.useState(false), 2);
  const tmp5 = callback2(React.useState(""), 2);
  first = tmp5[0];
  let callback = tmp5[1];
  const tmp3 = callback2(React.useState(false), 2);
  [tmp7, closure_4] = callback2(React.useState(undefined), 2);
  const tmp6 = callback2(React.useState(undefined), 2);
  [tmp9, closure_5] = callback2(React.useState(false), 2);
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
  obj = { headerText: null, input: null, submit: null, mfaMethod: "totp" };
  const tmp12 = importDefault;
  const tmp8 = callback2(React.useState(false), 2);
  const intl = _require(first[7]).intl;
  obj[0] = intl.string(_require(first[7]).t.uc00u5);
  obj = { label: null, placeholder: null, isValidClipboardCode: null, maxLength: null, onChangeCode: null, error: null, isDisabled: null, textContentType: "oneTimeCode", autoComplete: "one-time-code", keyboardType: "number-pad" };
  const tmp13 = importDefault(first[6]);
  const intl2 = _require(first[7]).intl;
  obj[0] = intl2.string(_require(first[7]).t.HZPBOd);
  const intl3 = _require(first[7]).intl;
  obj[1] = intl3.string(_require(first[7]).t.tARzgo);
  obj[2] = isValidClipboardCode;
  obj[3] = _require(first[4]).TOTP_CODE_LENGTH;
  obj[4] = callback;
  obj[5] = tmp7;
  let tmp15 = tmp4;
  if (!tmp4) {
    tmp15 = tmp9;
  }
  obj[6] = tmp15;
  obj[1] = callback(importDefault(first[8]), obj);
  obj1 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmp14 = importDefault(first[8]);
  const intl4 = tmp(tmp2[7]).intl;
  obj1[1] = intl4.string(_require(first[7]).t.geKm7t);
  let tmp17 = tmp4;
  if (!tmp4) {
    tmp17 = tmp9;
  }
  obj1[2] = tmp17;
  obj1[3] = function onPress() {
    callback(first);
  };
  if (!tmp4) {
    tmp4 = tmp9;
  }
  if (!tmp4) {
    tmp4 = first.length !== tmp(tmp2[4]).TOTP_CODE_LENGTH;
  }
  obj1[4] = tmp4;
  obj[2] = callback(tmp12(first[9]), obj1);
  return callback(tmp13, obj);
};