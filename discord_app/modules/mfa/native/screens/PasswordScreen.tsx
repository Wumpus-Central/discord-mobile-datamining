import useWideAuthView from "useWideAuthView";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen(finish) {
  let c3;
  let c4;
  let tmp10;
  let tmp8;
  finish = finish.finish;
  let importDefault;
  let first;
  c3 = undefined;
  let callback;
  function sendPassword() {
    const self = this;
    const apply = _sendPassword.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _sendPassword() {
    const self = this;
    const tmp = _undefined(function*() {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              outer1_1(null);
              outer1_3(true);
              let v0 = 1;
              const obj1 = { mfaType: "password", data: null };
              obj1[1] = outer1_2;
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_0(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              let message = callback;
              const body = message.body;
              message = undefined;
              if (body != null) {
                message = body.message;
              }
              if (message == null) {
                message = message.message;
              }
              closure_1(message);
              callback(false);
              c6 = 3;
              const tmp15 = closure_1;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              v0(true);
              v0 = 0;
            }
            v0 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp31) {
          callback = tmp31;
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp31;
          } else {
            c5 = tmp;
          }
        }
      }
    });
    const _sendPassword = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = importDefault(first[6]);
  const screenStyles = obj.useScreenStyles(importDefault(first[5])());
  const tmp5 = callback(_sendPassword.useState(null), 2);
  importDefault = tmp5[1];
  const tmp6 = callback(_sendPassword.useState(""), 2);
  first = tmp6[0];
  let tmp = importDefault;
  const tmp3 = importDefault(first[5])();
  [tmp8, c3] = callback(_sendPassword.useState(false), 2);
  const tmp7 = callback(_sendPassword.useState(false), 2);
  [tmp10, c4] = callback(_sendPassword.useState(false), 2);
  obj = { headerText: null, input: null, submit: null, screenProps: null, mfaMethod: "password" };
  const tmp9 = callback(_sendPassword.useState(false), 2);
  const intl = finish(first[8]).intl;
  obj[0] = intl.string(finish(first[8]).t.Rw1XuM);
  obj = { style: screenStyles.inputContainer, children: null };
  let obj1 = { autoFocus: true, required: true, textContentType: "password", label: null, placeholder: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true };
  const intl2 = finish(first[8]).intl;
  obj1[3] = intl2.string(finish(first[8]).t["CIGa+7"]);
  const intl3 = finish(first[8]).intl;
  obj1[4] = intl3.string(finish(first[8]).t["CIGa+7"]);
  obj1[6] = tmp5[0];
  obj1[8] = tmp6[1];
  obj1[9] = sendPassword;
  let tmp15 = tmp8;
  if (!tmp8) {
    tmp15 = tmp10;
  }
  obj1[10] = tmp15;
  obj[1] = jsx(finish(first[9]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, placeholder: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true });
  obj[1] = <View style={screenStyles.inputContainer}>{null}</View>;
  let obj2 = { text: null, disabled: null, loading: null, onPress: null };
  const tmp12 = importDefault(first[7]);
  const tmp14 = View;
  const intl4 = tmp13(tmp2[8]).intl;
  obj2[0] = intl4.string(finish(first[8]).t.geKm7t);
  let tmp17 = tmp8;
  if (!tmp8) {
    tmp17 = tmp10;
  }
  if (!tmp17) {
    tmp17 = 0 === first.length;
  }
  obj2[1] = tmp17;
  obj2[2] = tmp8;
  obj2[3] = sendPassword;
  obj[2] = jsx(tmp(first[10]), { text: null, disabled: null, loading: null, onPress: null });
  obj[3] = { mfaChallenge: finish.mfaChallenge, finish };
  return <tmp12 style={screenStyles.inputContainer}>{null}</tmp12>;
};