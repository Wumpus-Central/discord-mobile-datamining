// === Module 15507: PasswordScreen ===

// Module 15507 (PasswordScreen)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen(finish) {
  finish = finish.finish;
  importDefault = undefined;
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
      closure_2 = tmp3;
      closure_1_1(null);
      closure_1_3(true);
      let v0 = 1;
      obj1 = { mfaType: "password", data: null };
      obj1[1] = closure_1_2;
      yield closure_1_0(obj1);
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
      return arg1;
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
  obj1 = { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true };
  const intl2 = finish(first[8]).intl;
  obj1[3] = intl2.string(finish(first[8]).t["CIGa+7"]);
  obj1[5] = tmp5[0];
  obj1[7] = tmp6[1];
  obj1[8] = sendPassword;
  let tmp15 = tmp8;
  if (!tmp8) {
    tmp15 = tmp10;
  }
  obj1[9] = tmp15;
  obj[1] = jsx(finish(first[9]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true });
  obj[1] = <View style={screenStyles.inputContainer}>{null}</View>;
  const obj2 = { text: null, disabled: null, loading: null, onPress: null };
  const tmp12 = importDefault(first[7]);
  const tmp14 = View;
  const intl3 = tmp13(tmp2[8]).intl;
  obj2[0] = intl3.string(finish(first[8]).t.geKm7t);
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