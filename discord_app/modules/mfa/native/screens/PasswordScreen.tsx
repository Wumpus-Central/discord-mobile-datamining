// === Module 15679: PasswordScreen ===

// Module 15679 (PasswordScreen)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen(finish) {
  finish = finish.finish;
  importDefault = undefined;
  let first;
  c3 = undefined;
  _slicedToArray = undefined;
  function sendPassword() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  noop = async function _sendPassword() {
    closure_2 = tmp3;
    importDefault(null);
    asyncGeneratorStep(true);
    await finish({ mfaType: "password", data });
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = closure_3;
      const body = closure_129_0.body;
      let message;
      if (body != null) {
        message = body.message;
      }
      if (message == null) {
        message = closure_129_0.message;
      }
      closure_130_1(message);
      closure_130_3(false);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_4(true);
      c4 = 0;
    }
    return value;
  };
  let obj = require("MfaScreenUtils");
  const screenStyles = obj.useScreenStyles(require("useWideAuthView")());
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  importDefault = tmp5[1];
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  first = tmp6[0];
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  [tmp8, c3] = _slicedToArray(noop.useState(false), 2);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  [tmp10, c4] = _slicedToArray(noop.useState(false), 2);
  obj = { headerText: null, input: null, submit: null, screenProps: null, mfaMethod: "password" };
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const intl = finish(first[8]).intl;
  obj.headerText = intl.string(finish(first[8]).t.Rw1XuM);
  obj = { style: screenStyles.inputContainer, children: null };
  const obj1 = { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true };
  const intl2 = finish(first[8]).intl;
  obj1.label = intl2.string(finish(first[8]).t["CIGa+7"]);
  obj1.errorMessage = tmp5[0];
  obj1.onChange = tmp6[1];
  obj1.onSubmitEditing = sendPassword;
  let tmp15 = tmp10;
  if (!tmp10) {
    tmp15 = tmp10;
  }
  obj1.isDisabled = tmp15;
  obj.children = jsx(finish(first[9]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, isDisabled: null, isClearable: true, secureTextEntry: true });
  obj.input = <View style={screenStyles.inputContainer}>{null}</View>;
  const obj2 = { text: null, disabled: null, loading: null, onPress: null };
  const tmp12 = require("MfaOptionScreen");
  const intl3 = tmp13(tmp2[8]).intl;
  obj2.text = intl3.string(finish(first[8]).t.geKm7t);
  let tmp17 = tmp10;
  if (!tmp10) {
    tmp17 = tmp10;
  }
  if (!tmp17) {
    tmp17 = 0 === first.length;
  }
  obj2.disabled = tmp17;
  obj2.loading = tmp10;
  obj2.onPress = sendPassword;
  obj.submit = jsx(tmp(first[10]), { text: null, disabled: null, loading: null, onPress: null });
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return <tmp12 style={screenStyles.inputContainer}>{null}</tmp12>;
};