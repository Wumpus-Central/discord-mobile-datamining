// === Module 15512: PasswordScreen ===

// Module 15512 (PasswordScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6098 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6432 */;
import EyeSlashIcon from "EyeSlashIcon" /* 6456 */;
import EyeIcon2 from "EyeIcon" /* 6458 */;
import MfaScreenUtilsDefault from "MfaScreenUtils" /* 15505 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, importDefault;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_1;
  let closure_129_3;
  let closure_129_4;
  let closure_129_5;
  let finish;
  let first;
  let mfaChallenge;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(33);
  ({ mfaChallenge, finish } = arg0);
  const tmp4 = useWideAuthViewDefault();
  let obj2 = MfaScreenUtilsDefault;
  const screenStyles = obj2.useScreenStyles(tmp4);
  [tmp7, closure_129_1] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  [first, tmp10] = react.useState("");
  [tmp12, closure_129_3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp14, closure_129_4] = _slicedToArray(react.useState(false), 2);
  const tmp13 = _slicedToArray(react.useState(false), 2);
  [tmp16, closure_129_5] = _slicedToArray(react.useState(false), 2);
  const tmp15 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] === finish) {
    let tmp17;
    let tmp21;
    let EyeIcon;
    let tmp25;
    let tmp28;
    let tmp27;
    if (cResult[1] === first) {
      tmp17 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl5.intl;
      const stringResult = intl.string(intl5.t.Rw1XuM);
      cResult[3] = stringResult;
    }
    const _Symbol2 = Symbol;
    const inputContainer = screenStyles.inputContainer;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl5.intl;
      const stringResult1 = intl2.string(intl5.t["CIGa+7"]);
      cResult[4] = stringResult1;
      tmp21 = stringResult1;
    } else {
      tmp21 = cResult[4];
    }
    if (tmp16) {
      EyeIcon = EyeSlashIcon.EyeSlashIcon;
    } else {
      EyeIcon = EyeIcon2.EyeIcon;
    }
    if (cResult[5] !== tmp16) {
      let stringResult2;
      const intl3 = intl5.intl;
      const string = intl3.string;
      const t = intl5.t;
      if (tmp16) {
        stringResult2 = string(t.Nusip4);
      } else {
        stringResult2 = string(t.nFzpM5);
      }
      cResult[5] = tmp16;
      cResult[6] = stringResult2;
      tmp25 = stringResult2;
    } else {
      tmp25 = cResult[6];
    }
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
      tmp28 = D;
      tmp27 = rect;
    } else {
      class D {
        constructor() {
          return closure_5((arg0) => !arg0);
        }
      }
      tmp28 = cResult[8];
    }
    if (cResult[9] !== tmp25) {
      class D {
        constructor() {
          return closure_5((arg0) => !arg0);
        }
      }
      tmp30[0] = tmp25;
      tmp30[1] = tmp28;
      tmp30[2] = tmp27;
      cResult[9] = tmp25;
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
    const tmp33 = jsx(TextInput_TextInput.TextInput, { autoFocus: true, required: true, textContentType: "password", label: tmp21, autoComplete: "current-password", autoCapitalize: "none", errorMessage: tmp7, returnKeyType: "done", onChange: tmp10, onSubmitEditing: tmp17, disabled: tmp12 || tmp14, secureTextEntry: !tmp16, trailingIcon: EyeIcon, trailingPressableProps: tmp30 });
    cResult[11] = tmp7;
    cResult[12] = tmp17;
    cResult[13] = tmp30;
    cResult[14] = tmp12 || tmp14;
    cResult[15] = !tmp16;
    cResult[16] = EyeIcon;
    cResult[17] = tmp33;
  }
  let closure_0 = _asyncToGenerator(async () => {
    let closure_3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let v0;
      try {
        let closure_1;
        let message2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const data = tmp;
            closure_1 = tmp4;
            message2 = undefined;
            closure_1(null);
            tmp28(true);
            v0 = 1;
            const obj4 = { mfaType: "password", data };
            c5 = 2;
            c6 = 1;
            const obj5 = { value: message2(obj4), done: false };
            return obj5;
          }
        } else {
          if (1 === c5) {
            v0 = 0;
            message2 = tmp28;
            const body = message2.body;
            let message;
            const tmp12 = closure_1;
            if (body != null) {
              message = body.message;
            }
            message2 = message;
            if (message == null) {
              message2 = message2.message;
            }
            tmp12(message2);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0(true);
            v0 = 0;
          }
          tmp28(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        if (0 === v0) {
          c6 = 3;
          throw tmp28;
        } else {
          c5 = 1;
        }
      }
    }
  });
  function sendPassword() {
    return closure_0(...arguments);
  }
  cResult[0] = finish;
  cResult[1] = first;
  cResult[2] = sendPassword;
  tmp17 = sendPassword;
}) : ((finish) => {
  let EyeIcon;
  let _undefined;
  let c3;
  let c4;
  let c5;
  let first;
  let first1;
  let intl2;
  let intl4;
  let stringResult;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp21;
  let tmp8;
  finish = finish.finish;
  importDefault = undefined;
  first1 = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  function sendPassword() {
    return obj(...arguments);
  }
  let obj = function _sendPassword2() {
    let data;
    obj = _asyncToGenerator(async () => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp4;
              closure_2_1(null);
              _undefined(true);
              c4 = 1;
              const obj4 = { mfaType: "password", data };
              c5 = 2;
              c6 = 1;
              const obj5 = { value: finish(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              let message2 = closure_3;
              const body = message2.body;
              let message;
              if (body != null) {
                message = body.message;
              }
              message2 = message;
              if (message == null) {
                message2 = message2.message;
              }
              closure_130_1(message2);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_130_4(true);
              c4 = 0;
            }
            closure_130_3(false);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const mfaChallenge = finish.mfaChallenge;
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  obj = require("MfaScreenUtils");
  const screenStyles = obj.useScreenStyles(tmp3);
  [first, importDefault] = react.useState(null);
  [first1, tmp8] = react.useState("");
  [tmp10, c3] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [tmp12, c4] = _slicedToArray(react.useState(false), 2);
  const tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp14, c5] = _slicedToArray(react.useState(false), 2);
  const tmp13 = _slicedToArray(react.useState(false), 2);
  require("MfaOptionScreen");
  const intl = finish(first1[9]).intl;
  let obj3 = { style: screenStyles.inputContainer, children: null };
  let obj4 = {
    autoFocus: true,
    required: true,
    textContentType: "password",
    label: intl2.string(finish(first1[9]).t["CIGa+7"]),
    autoComplete: "current-password",
    autoCapitalize: "none",
    errorMessage: first,
    returnKeyType: "done",
    onChange: tmp8,
    onSubmitEditing: sendPassword,
    disabled: tmp12 || tmp12,
    secureTextEntry: !tmp14,
    trailingIcon: EyeIcon,
    trailingPressableProps: {
      accessibilityLabel: stringResult,
      onPress() {
        return _undefined((arg0) => !arg0);
      },
      hitSlop: { top: 8, bottom: 8 }
    }
  };
  const TextInput = finish(first1[12]).TextInput;
  intl2 = finish(first1[9]).intl;
  if (tmp14) {
    EyeIcon = tmp17(tmp2[10]).EyeSlashIcon;
  } else {
    EyeIcon = tmp17(tmp2[11]).EyeIcon;
  }
  const intl3 = tmp17(tmp2[9]).intl;
  const string = intl3.string;
  const t = tmp17(tmp2[9]).t;
  if (tmp14) {
    stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  let obj5 = { text: intl4.string(tmp17(first1[9]).t.geKm7t), disabled: tmp21, loading: tmp12, onPress: sendPassword };
  tmp(first1[13]);
  intl4 = tmp17(tmp2[9]).intl;
  tmp21 = tmp12 || tmp12;
  if (!tmp21) {
    tmp21 = 0 === first1.length;
  }
  return <tmp16 headerText={intl.string(finish(first1[9]).t.Rw1XuM)} input={null} submit={null} screenProps={{ mfaChallenge, finish }} mfaMethod="password" />;
});
const result = size.fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default tmp2;