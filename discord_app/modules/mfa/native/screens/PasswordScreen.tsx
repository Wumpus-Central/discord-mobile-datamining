// === Module 15790: PasswordScreen ===

// Module 15790 (PasswordScreen)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import TextInput from "TextInput" /* 6283 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6617 */;
import EyeSlashIcon from "EyeSlashIcon" /* 6641 */;
import EyeIcon2 from "EyeIcon" /* 6643 */;
import MfaScreenUtilsDefault from "MfaScreenUtils" /* 15783 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PasswordScreen(arg0) {
  const cResult = c.c(33);
  ({ mfaChallenge, finish } = arg0);
  closure_0 = finish;
  const tmp4 = useWideAuthViewDefault();
  const screenStyles = MfaScreenUtilsDefault.useScreenStyles(tmp4);
  [tmp7, importDefault] = noop.useState(null);
  const tmp8 = _slicedToArray(noop.useState(""), 2);
  const first = tmp8[0];
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp11, asyncGeneratorStep] = noop.useState(false);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  [tmp13, _slicedToArray] = noop.useState(false);
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  [tmp15, noop] = noop.useState(false);
  if (cResult[0] === finish) {
    if (cResult[1] === first) {
      let tmp16 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.Rw1XuM);
      cResult[3] = stringResult;
    }
    const _Symbol2 = Symbol;
    const inputContainer = screenStyles.inputContainer;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t["CIGa+7"]);
      cResult[4] = stringResult1;
      let tmp20 = stringResult1;
    } else {
      tmp20 = cResult[4];
    }
    let tmp22 = tmp11;
    if (!tmp11) {
      tmp22 = tmp13;
    }
    if (tmp15) {
      let EyeIcon = EyeSlashIcon.EyeSlashIcon;
    } else {
      EyeIcon = EyeIcon2.EyeIcon;
    }
    if (cResult[5] !== tmp15) {
      const intl3 = util.intl;
      const string = intl3.string;
      let Nusip4 = util.t;
      if (tmp15) {
        Nusip4 = Nusip4.Nusip4;
        let stringResult2 = string(Nusip4);
      } else {
        stringResult2 = string(Nusip4.nFzpM5);
      }
      cResult[5] = tmp15;
      cResult[6] = stringResult2;
    } else {
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
        const rect = { top: 8, bottom: 8 };
        cResult[7] = rect;
        cResult[8] = D;
        let tmp28 = D;
        const tmp27 = rect;
      } else {
        class D {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
        tmp28 = cResult[8];
      }
      if (cResult[9] !== cResult[6]) {
        class D {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
        tmp30[0] = tmp24;
        tmp30[1] = tmp28;
        tmp30[2] = tmp27;
        cResult[9] = tmp24;
        cResult[10] = tmp30;
      } else {
        class D {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
      }
      if (cResult[11] === tmp7) {
        class D {
          constructor() {
            return closure_5((arg0) => !arg0);
          }
        }
      }
      const obj3 = { autoFocus: true, required: true, textContentType: "password", label: tmp20, autoComplete: "current-password", autoCapitalize: "none", errorMessage: tmp7, returnKeyType: "done", onChange: tmp8[1], onSubmitEditing: tmp16, disabled: tmp22, secureTextEntry: tmp23, trailingIcon: EyeIcon, trailingPressableProps: tmp30 };
      const tmp33 = jsx(TextInput.TextInput, { autoFocus: true, required: true, textContentType: "password", label: tmp20, autoComplete: "current-password", autoCapitalize: "none", errorMessage: tmp7, returnKeyType: "done", onChange: tmp8[1], onSubmitEditing: tmp16, disabled: tmp22, secureTextEntry: tmp23, trailingIcon: EyeIcon, trailingPressableProps: tmp30 });
      cResult[11] = tmp7;
      cResult[12] = tmp16;
      cResult[13] = tmp30;
      cResult[14] = tmp22;
      cResult[15] = tmp23;
      cResult[16] = EyeIcon;
      cResult[17] = tmp33;
    }
  }
  closure_0 = asyncGeneratorStep(async () => {
    const data = tmp3;
    closure_1(null);
    tmp31(true);
    let v0 = 1;
    await message({ mfaType: "password", data });
    if (1 === tmp7) {
      v0 = 0;
      closure_129_0 = tmp31;
      const body = closure_129_0.body;
      message = undefined;
      if (body != null) {
        message = body.message;
      }
      if (message == null) {
        message = closure_129_0.message;
      }
      closure_1(message);
      tmp31(false);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      v0(true);
      v0 = 0;
    }
    v0 = 0;
    return value;
  });
  function sendPassword() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = finish;
  cResult[1] = first;
  cResult[2] = sendPassword;
  tmp16 = sendPassword;
  const tmp14 = _slicedToArray(noop.useState(false), 2);
}) : (function PasswordScreen(finish) {
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
  closure_6 = async function _sendPassword2() {
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
  const intl = finish(first[9]).intl;
  obj2.headerText = intl.string(finish(first[9]).t.Rw1XuM);
  const obj3 = { style: screenStyles.inputContainer, children: null };
  const obj4 = { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", autoCapitalize: "none", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, disabled: null, secureTextEntry: null, trailingIcon: null, trailingPressableProps: null };
  const intl2 = finish(first[9]).intl;
  obj4.label = intl2.string(finish(first[9]).t["CIGa+7"]);
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
  const intl3 = tmp15(tmp2[9]).intl;
  const string = intl3.string;
  const t = tmp15(tmp2[9]).t;
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
  obj3.children = jsx(finish(first[12]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", autoCapitalize: "none", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, disabled: null, secureTextEntry: null, trailingIcon: null, trailingPressableProps: null });
  obj2.input = <closure_6 style={screenStyles.inputContainer}>{null}</closure_6>;
  const obj5 = { text: null, disabled: null, loading: null, onPress: null };
  const tmp14 = require("MfaOptionScreen");
  const intl4 = tmp15(tmp2[9]).intl;
  obj5.text = intl4.string(finish(first[9]).t.geKm7t);
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
  obj2.submit = jsx(tmp(first[13]), { text: null, disabled: null, loading: null, onPress: null });
  obj2.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return <tmp14 headerText={null} input={null} submit={null} screenProps={null} mfaMethod="password" />;
});