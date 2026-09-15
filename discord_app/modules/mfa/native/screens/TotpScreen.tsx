// === Module 15776: TotpScreen ===

// Module 15776 (TotpScreen)
import MFA from "MFA" /* 15777 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function isValidClipboardCode(arg0) {
  let isMatch = arg0.length === MFA.TOTP_CODE_LENGTH;
  if (isMatch) {
    isMatch = /^\d+$/.test(arg0);
    const obj = /^\d+$/;
  }
  return isMatch;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/TotpScreen.tsx");

export default function TotpScreen(finish) {
  finish = finish.finish;
  importDefault = undefined;
  first = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp2, c1] = noop.useState(false);
  [first, asyncGeneratorStep] = noop.useState("");
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp5, c4] = noop.useState(undefined);
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  [tmp7, c5] = noop.useState(false);
  _require = asyncGeneratorStep(async (data) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp7;
              tmp3(data);
              tmp7 = isValidClipboardCode(data);
              if (tmp7) {
                tmp28(undefined);
                message(true);
                v0 = 1;
                const obj4 = { mfaType: "totp", data };
                c6 = 2;
                c7 = 1;
                const obj5 = { value: data(obj4), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              closure_130_0 = tmp28;
              message = undefined;
              if (closure_130_0 != null) {
                const body = closure_130_0.body;
                if (body != null) {
                  message = body.message;
                }
              }
              if (message == null) {
                message = closure_130_0.message;
              }
              tmp28(message);
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
            tmp7 = message(false);
          }
          c7 = 3;
        } catch (tmp28) {
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
  const onChangeCode = noop.useCallback(function() {
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
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const intl = require("util").intl;
  obj.headerText = intl.string(require("util").t.uc00u5);
  let obj2 = { label: null, placeholder: null, isValidClipboardCode: null, maxLength: null, onChangeCode: null, error: null, isDisabled: null, textContentType: "oneTimeCode", autoComplete: "one-time-code", keyboardType: "number-pad" };
  const tmp12 = require("MfaOptionScreen");
  const intl2 = require("util").intl;
  obj2.label = intl2.string(require("util").t.HZPBOd);
  const intl3 = require("util").intl;
  obj2.placeholder = intl3.string(require("util").t.tARzgo);
  obj2.isValidClipboardCode = isValidClipboardCode;
  obj2.maxLength = require("MFA").TOTP_CODE_LENGTH;
  obj2.onChangeCode = onChangeCode;
  obj2.error = tmp5;
  let tmp15 = tmp2;
  if (!tmp2) {
    tmp15 = tmp7;
  }
  obj2.isDisabled = tmp15;
  obj.input = onChangeCode(require("ClipboardCopyInput"), obj2);
  let obj3 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmp14 = require("ClipboardCopyInput");
  const intl4 = tmp13(tmp11[6]).intl;
  obj3.text = intl4.string(require("util").t.geKm7t);
  let tmp17 = tmp2;
  if (!tmp2) {
    tmp17 = tmp7;
  }
  obj3.loading = tmp17;
  obj3.onPress = function onPress() {
    callback(first);
  };
  if (!tmp2) {
    tmp2 = tmp7;
  }
  if (!tmp2) {
    tmp2 = first.length !== tmp13(tmp11[4]).TOTP_CODE_LENGTH;
  }
  obj3.disabled = tmp2;
  obj.submit = onChangeCode(tmp10(first[8]), obj3);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return onChangeCode(tmp12, obj);
};