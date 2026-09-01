// discord_app/modules/mfa/native/screens/PasswordScreen.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen() {
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
    const tmp = closure_1_3(function*() {
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
  let obj = finish(first[5]);
  finish = obj.useMfaChallenge().finish;
  obj1 = importDefault(first[7]);
  const screenStyles = obj1.useScreenStyles(importDefault(first[6])());
  const tmp6 = callback(_sendPassword.useState(null), 2);
  importDefault = tmp6[1];
  const tmp7 = callback(_sendPassword.useState(""), 2);
  first = tmp7[0];
  const tmp3 = importDefault;
  const tmp4 = importDefault(first[6])();
  [tmp9, closure_3] = callback(_sendPassword.useState(false), 2);
  const tmp8 = callback(_sendPassword.useState(false), 2);
  [tmp11, closure_4] = callback(_sendPassword.useState(false), 2);
  obj = { headerText: null, input: null, submit: null, mfaMethod: "password" };
  const tmp10 = callback(_sendPassword.useState(false), 2);
  const intl = finish(first[9]).intl;
  obj[0] = intl.string(finish(first[9]).t.Rw1XuM);
  obj = { style: screenStyles.inputContainer, children: null };
  obj1 = { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true };
  const intl2 = finish(first[9]).intl;
  obj1[3] = intl2.string(finish(first[9]).t["CIGa+7"]);
  obj1[5] = tmp6[0];
  obj1[7] = tmp7[1];
  obj1[8] = sendPassword;
  let tmp15 = tmp9;
  if (!tmp9) {
    tmp15 = tmp11;
  }
  obj1[9] = tmp15;
  obj[1] = jsx(finish(first[10]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true });
  obj[1] = <View style={screenStyles.inputContainer}>{null}</View>;
  const obj2 = { text: null, disabled: null, loading: null, onPress: null };
  const tmp13 = importDefault(first[8]);
  const tmp14 = View;
  const intl3 = tmp(tmp2[9]).intl;
  obj2[0] = intl3.string(finish(first[9]).t.geKm7t);
  let tmp17 = tmp9;
  if (!tmp9) {
    tmp17 = tmp11;
  }
  if (!tmp17) {
    tmp17 = 0 === first.length;
  }
  obj2[1] = tmp17;
  obj2[2] = tmp9;
  obj2[3] = sendPassword;
  obj[2] = jsx(tmp3(first[11]), { text: null, disabled: null, loading: null, onPress: null });
  return <tmp13 style={screenStyles.inputContainer}>{null}</tmp13>;
};