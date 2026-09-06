// discord_app/modules/mfa/native/screens/TotpScreen.tsx
import MFA from "../../../../../discord_common/js/shared/MFA.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  _slicedToArray = undefined;
  noop = undefined;
  [tmp2, c1] = _slicedToArray(noop.useState(false), 2);
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  const first = tmp3[0];
  asyncGeneratorStep = tmp3[1];
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp5, c4] = _slicedToArray(noop.useState(undefined), 2);
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  [tmp7, c5] = _slicedToArray(noop.useState(false), 2);
  _require = asyncGeneratorStep(async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        let tmp7 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp7;
            tmp3(closure_0);
            tmp7 = isValidClipboardCode(closure_0);
            if (tmp7) {
              tmp28(undefined);
              message(true);
              let v0 = 1;
              const obj1 = { mfaType: "totp", data: tmp36 };
              c6 = 2;
              c7 = 1;
              const obj2 = { value: closure_0(obj1), done: false };
              return obj2;
            }
            tmp36 = closure_0;
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
            obj = { value, done: true };
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
  });
  const items = [finish];
  const onChangeCode = noop.useCallback(function () {
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
  obj = {
    label: null,
    placeholder: null,
    isValidClipboardCode: null,
    maxLength: null,
    onChangeCode: null,
    error: null,
    isDisabled: null,
    textContentType: "oneTimeCode",
    autoComplete: "one-time-code",
    keyboardType: "number-pad",
  };
  const tmp12 = require("MfaOptionScreen");
  const intl2 = require("util").intl;
  obj.label = intl2.string(require("util").t.HZPBOd);
  const intl3 = require("util").intl;
  obj.placeholder = intl3.string(require("util").t.tARzgo);
  obj.isValidClipboardCode = isValidClipboardCode;
  obj.maxLength = require("MFA").TOTP_CODE_LENGTH;
  obj.onChangeCode = onChangeCode;
  obj.error = tmp5;
  let tmp15 = tmp2;
  if (!tmp2) {
    tmp15 = tmp7;
  }
  obj.isDisabled = tmp15;
  obj.input = onChangeCode(require("ClipboardCopyInput"), obj);
  obj = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmp14 = require("ClipboardCopyInput");
  const intl4 = tmp13(tmp11[6]).intl;
  obj.text = intl4.string(require("util").t.geKm7t);
  let tmp17 = tmp2;
  if (!tmp2) {
    tmp17 = tmp7;
  }
  obj.loading = tmp17;
  obj.onPress = function onPress() {
    callback(first);
  };
  if (!tmp2) {
    tmp2 = tmp7;
  }
  if (!tmp2) {
    tmp2 = first.length !== tmp13(tmp11[4]).TOTP_CODE_LENGTH;
  }
  obj.disabled = tmp2;
  obj.submit = onChangeCode(tmp10(first[8]), obj);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return onChangeCode(tmp12, obj);
}
