// === Module 16041: PasswordScreen ===

// Module 16041 (PasswordScreen)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

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
  noop = undefined;
  function sendPassword() {
    const self = this;
    const apply = closure_6.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_6 = async function _sendPassword() {
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
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  const screenStyles = require("MfaScreenUtils").useScreenStyles(tmp3);
  [obj4.errorMessage, importDefault] = noop.useState(null);
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  first = tmp6[0];
  const obj = require("MfaScreenUtils");
  [tmp8, c3] = _slicedToArray(noop.useState(false), 2);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  [tmp10, c4] = _slicedToArray(noop.useState(false), 2);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  [tmp12, c5] = _slicedToArray(noop.useState(false), 2);
  const obj2 = { headerText: null, input: null, submit: null, screenProps: null, mfaMethod: "password" };
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  const intl = finish(first[8]).intl;
  obj2.headerText = intl.string(finish(first[8]).t.Rw1XuM);
  const obj3 = { style: screenStyles.inputContainer, children: null };
  const obj4 = { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", autoCapitalize: "none", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, disabled: null, secureTextEntry: null, trailingIcon: null, trailingPressableProps: null };
  const intl2 = finish(first[8]).intl;
  obj4.label = intl2.string(finish(first[8]).t["CIGa+7"]);
  obj4.onChange = tmp6[1];
  obj4.onSubmitEditing = sendPassword;
  let tmp17 = tmp10;
  if (!tmp10) {
    tmp17 = tmp10;
  }
  obj4.disabled = tmp17;
  obj4.secureTextEntry = !tmp12;
  if (tmp12) {
    let EyeIcon = tmp15(tmp2[10]).EyeSlashIcon;
  } else {
    EyeIcon = tmp15(tmp2[11]).EyeIcon;
  }
  obj4.trailingIcon = EyeIcon;
  const intl3 = tmp15(tmp2[8]).intl;
  const string = intl3.string;
  const t = tmp15(tmp2[8]).t;
  if (tmp12) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj4.trailingPressableProps = {
    accessibilityLabel: stringResult,
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    hitSlop: { top: 8, bottom: 8 }
  };
  obj3.children = jsx(finish(first[9]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", autoCapitalize: "none", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, disabled: null, secureTextEntry: null, trailingIcon: null, trailingPressableProps: null });
  obj2.input = <closure_6 style={screenStyles.inputContainer}>{null}</closure_6>;
  const obj5 = { text: null, disabled: null, loading: null, onPress: null };
  const tmp14 = require("MfaOptionScreen");
  const intl4 = tmp15(tmp2[8]).intl;
  obj5.text = intl4.string(finish(first[8]).t.geKm7t);
  let tmp20 = tmp10;
  if (!tmp10) {
    tmp20 = tmp10;
  }
  if (!tmp20) {
    tmp20 = 0 === first.length;
  }
  obj5.disabled = tmp20;
  obj5.loading = tmp10;
  obj5.onPress = sendPassword;
  obj2.submit = jsx(tmp(first[12]), { text: null, disabled: null, loading: null, onPress: null });
  obj2.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return <tmp14 headerText={null} input={null} submit={null} screenProps={null} mfaMethod="password" />;
};