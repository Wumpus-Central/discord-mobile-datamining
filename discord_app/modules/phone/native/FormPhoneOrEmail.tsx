// === Module 6543: FormPhoneOrEmail ===

// Module 6543 (FormPhoneOrEmail)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import FreeFormLabelDefault from "FreeFormLabel" /* 6425 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6451 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let alpha2, current, dependencyMap, handleChangeTextResult, importDefault, iter, onPress, show;

let metroImportAll;
let metroImportDefault;
let obj2;
let closure_3 = ["style", "textInputStyle", "label", "error", "value", "hint", "onChangeText", "alpha2", "countryCode", "onPressCountrySelector", "forceMode"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { flex: 1, flexDirection: "row" }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" }, separator: obj2 };
obj2 = { borderLeftWidth: 1, borderLeftColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let countryCode;
  let items;
  let selectorContainer;
  let selectorOuterContainer;
  let selectorPressable;
  const obj = react2;
  const cResult = obj.c(19);
  ({ alpha2, onPress } = arg0);
  ({ show, countryCode } = arg0);
  const tmp4 = closure_9();
  if (alpha2 == null) {
    alpha2 = "";
  }
  const combined = "" + alpha2 + " " + countryCode;
  if (show) {
    let first;
    let tmp7;
    const _Symbol = Symbol;
    ({ selectorOuterContainer, selectorContainer, selectorPressable } = tmp4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { borderless: true };
      cResult[0] = obj2;
      first = obj2;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.GwAW3k);
      cResult[1] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] === combined) {
      let tmp9;
      if (cResult[3] === tmp4.selectorText) {
        tmp9 = cResult[4];
      }
      if (cResult[5] === combined) {
        if (cResult[6] === onPress) {
          if (cResult[7] === tmp4.selectorPressable) {
            let tmp12;
            let tmp15;
            if (cResult[8] === tmp9) {
              tmp12 = cResult[9];
            }
            if (cResult[10] !== tmp4.separator) {
              const obj3 = { style: tmp4.separator };
              const tmp18 = metroImportDefault(View, obj3);
              cResult[10] = tmp4.separator;
              cResult[11] = tmp18;
              tmp15 = tmp18;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp4.selectorContainer) {
              if (cResult[13] === tmp12) {
                let tmp19;
                if (cResult[14] === tmp15) {
                  tmp19 = cResult[15];
                }
                if (cResult[16] === tmp4.selectorOuterContainer) {
                  let tmp23;
                  if (cResult[17] === tmp19) {
                    tmp23 = cResult[18];
                  }
                  return tmp23;
                }
                const obj4 = { style: selectorOuterContainer, children: tmp19 };
                const tmp26 = metroImportDefault(View, obj4);
                cResult[16] = tmp4.selectorOuterContainer;
                cResult[17] = tmp19;
                cResult[18] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj5 = { style: selectorContainer, children: items };
            items = [tmp12, tmp15];
            const tmp22 = metroImportAll(View, obj5);
            cResult[12] = tmp4.selectorContainer;
            cResult[13] = tmp12;
            cResult[14] = tmp15;
            cResult[15] = tmp22;
            tmp19 = tmp22;
          }
        }
      }
      const obj6 = { onPress, style: selectorPressable, androidRippleConfig: first, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: tmp7, children: tmp9 };
      const tmp14 = metroImportDefault(Pressables.PressableOpacity, obj6);
      cResult[5] = combined;
      cResult[6] = onPress;
      cResult[7] = tmp4.selectorPressable;
      cResult[8] = tmp9;
      cResult[9] = tmp14;
      tmp12 = tmp14;
    }
    const obj7 = { style: tmp4.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    const tmp11 = metroImportDefault(Text_Text.Text, obj7);
    cResult[2] = combined;
    cResult[3] = tmp4.selectorText;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    return null;
  }
}) : ((alpha2) => {
  let countryCode;
  let intl;
  let items;
  let obj2;
  let obj4;
  let str = alpha2.alpha2;
  ({ show, countryCode, onPress } = alpha2);
  const tmp = closure_9();
  if (str == null) {
    str = "";
  }
  const combined = "" + str + " " + countryCode;
  let tmp3 = null;
  if (show) {
    const obj = { style: tmp.selectorOuterContainer, children: metroImportAll(View, obj2) };
    obj2 = { style: tmp.selectorContainer, children: items };
    const obj3 = { onPress, style: tmp.selectorPressable, androidRippleConfig: { borderless: true }, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: intl.string(intl2.t.GwAW3k), children: metroImportDefault(Text_Text.Text, obj4) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj4 = { style: tmp.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    items = [metroImportDefault(PressableOpacity, obj3), ];
    const obj5 = { style: tmp.separator };
    items[1] = metroImportDefault(View, obj5);
    tmp3 = metroImportDefault(View, obj);
  }
  return tmp3;
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((alpha2, arg1) => {
  let _require;
  let closure_2;
  let error;
  let hint;
  let label;
  let onChangeText;
  let style;
  let textInputStyle;
  let tmp11;
  let tmp15;
  let tmp9;
  let value;
  let obj = require("react");
  const cResult = obj.c(63);
  const tmp = _require;
  if (cResult[0] !== alpha2) {
    ({ style, textInputStyle, label, error, value, hint, onChangeText } = alpha2);
    closure_3 = onChangeText;
    alpha2 = alpha2.alpha2;
    _require = alpha2;
    const countryCode = alpha2.countryCode;
    importDefault = countryCode;
    const onPressCountrySelector = alpha2.onPressCountrySelector;
    onPress = onPressCountrySelector;
    const forceMode = alpha2.forceMode;
    dependencyMap = forceMode;
    cResult[0] = alpha2;
    cResult[1] = alpha2;
    cResult[2] = countryCode;
    cResult[3] = error;
    cResult[4] = forceMode;
    cResult[5] = hint;
    cResult[6] = label;
    cResult[7] = onChangeText;
    cResult[8] = onPressCountrySelector;
    cResult[9] = onPress(alpha2, closure_3);
    cResult[10] = style;
    cResult[11] = textInputStyle;
    cResult[12] = value;
    tmp15 = value;
    tmp9 = label;
    tmp11 = onPressCountrySelector;
    const tmp18 = onPress(alpha2, closure_3);
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[4];
    tmp9 = cResult[6];
    closure_3 = cResult[7];
    onPress = cResult[8];
    tmp15 = cResult[12];
  }
  const tmp19 = closure_9();
  if (cResult[13] === tmp7) {
    let tmp20;
    if (cResult[14] === tmp15) {
      tmp20 = cResult[15];
    }
    show = tmp20;
    if (cResult[16] === tmp5) {
      if (cResult[17] === tmp7) {
        let tmp22;
        if (cResult[18] === onChangeText) {
          tmp22 = cResult[19];
        }
        if (cResult[20] === tmp22) {
          let tmp23;
          if (cResult[21] === tmp15) {
            tmp23 = cResult[22];
          }
          current = tmp23;
          class M {
            constructor(arg0) {
              obj = closure_0(closure_2[11]);
              str = "";
              if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
                str = closure_1;
              }
              if (closure_3 != null) {
                tmp = closure_3(alpha2, str);
              }
              return;
            }
          }
          if (cResult[23] !== tmp23) {
            class I {
              constructor() {
                closure_7.current = closure_6;
                return;
              }
            }
            cResult[23] = tmp23;
            class M {
              constructor(arg0) {
                obj = closure_0(closure_2[11]);
                str = "";
                if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
                  str = closure_1;
                }
                if (closure_3 != null) {
                  tmp = closure_3(alpha2, str);
                }
                return;
              }
            }
            cResult[24] = I;
          } else {
            class I {
              constructor() {
                closure_7.current = closure_6;
                return;
              }
            }
          }
          const effect = obj3.useEffect(I);
          const _Symbol = Symbol;
          let str = "react.memo_cache_sentinel";
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                iter = closure_7.current;
                handleChangeTextResult = iter.handleChangeText(iter.value);
                return;
              }
            }
            cResult[25] = B;
            class M {
              constructor(arg0) {
                obj = closure_0(closure_2[11]);
                str = "";
                if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
                  str = closure_1;
                }
                if (closure_3 != null) {
                  tmp = closure_3(alpha2, str);
                }
                return;
              }
            }
          } else {
            class B {
              constructor() {
                iter = closure_7.current;
                handleChangeTextResult = iter.handleChangeText(iter.value);
                return;
              }
            }
          }
          if (cResult[26] !== tmp5) {
            class B {
              constructor() {
                iter = closure_7.current;
                handleChangeTextResult = iter.handleChangeText(iter.value);
                return;
              }
            }
            tmp31[0] = tmp5;
            class M {
              constructor(arg0) {
                obj = closure_0(closure_2[11]);
                str = "";
                if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
                  str = closure_1;
                }
                if (closure_3 != null) {
                  tmp = closure_3(alpha2, str);
                }
                return;
              }
            }
            cResult[27] = tmp31;
          } else {
            class B {
              constructor() {
                iter = closure_7.current;
                handleChangeTextResult = iter.handleChangeText(iter.value);
                return;
              }
            }
          }
          const effect1 = obj3.useEffect(tmp29, tmp31);
          if (cResult[28] === tmp9) {
            class B {
              constructor() {
                iter = closure_7.current;
                handleChangeTextResult = iter.handleChangeText(iter.value);
                return;
              }
            }
            if (cResult[31] === tmp4) {
              class B {
                constructor() {
                  iter = closure_7.current;
                  handleChangeTextResult = iter.handleChangeText(iter.value);
                  return;
                }
              }
            }
            class G {
              constructor() {
                obj = { show: closure_5, alpha2: closure_0, countryCode: closure_1, onPress: closure_4 };
                return jsx(f38117, obj);
              }
            }
            class M {
              constructor(arg0) {
                obj = closure_0(closure_2[11]);
                str = "";
                if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
                  str = closure_1;
                }
                if (closure_3 != null) {
                  tmp = closure_3(alpha2, str);
                }
                return;
              }
            }
            cResult[31] = tmp4;
            cResult[32] = tmp5;
            cResult[33] = tmp11;
            cResult[34] = tmp20;
            cResult[35] = G;
          }
          let tmp34 = null;
          if (null != tmp9) {
            class B {
              constructor() {
                iter = closure_7.current;
                handleChangeTextResult = iter.handleChangeText(iter.value);
                return;
              }
            }
            class G {
              constructor() {
                obj = { show: closure_5, alpha2: closure_0, countryCode: closure_1, onPress: closure_4 };
                return jsx(f38117, obj);
              }
            }
            class M {
              constructor(arg0) {
                obj = closure_0(closure_2[11]);
                str = "";
                if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
                  str = closure_1;
                }
                if (closure_3 != null) {
                  tmp = closure_3(alpha2, str);
                }
                return;
              }
            }
            tmp36[1] = tmp9;
            tmp34 = ref(FreeFormLabelDefault, tmp36);
          }
          cResult[28] = tmp9;
          cResult[29] = tmp19.label;
          cResult[30] = tmp34;
        }
        class M {
          constructor(arg0) {
            obj = closure_0(closure_2[11]);
            str = "";
            if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
              str = closure_1;
            }
            if (closure_3 != null) {
              tmp = closure_3(alpha2, str);
            }
            return;
          }
        }
        tmp24[1] = tmp15;
        cResult[20] = tmp22;
        cResult[21] = tmp15;
        cResult[22] = tmp24;
        tmp23 = tmp24;
      }
    }
    class M {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        str = "";
        if (obj.shouldShowCountryCodeSelector(closure_2, alpha2)) {
          str = closure_1;
        }
        if (closure_3 != null) {
          tmp = closure_3(alpha2, str);
        }
        return;
      }
    }
    cResult[16] = tmp5;
    cResult[17] = tmp7;
    cResult[18] = onChangeText;
    cResult[19] = M;
    tmp22 = M;
  }
  const tmpResult = tmp(6451);
  const result = tmpResult.shouldShowCountryCodeSelector(tmp7, tmp15);
  cResult[13] = tmp7;
  cResult[14] = tmp15;
  cResult[15] = result;
  tmp20 = result;
}) : ((arg0, ref) => {
  let countryCode;
  let error;
  let forceMode;
  let hint;
  let items1;
  let items2;
  let label;
  let require;
  let str;
  let str2;
  let style;
  let textInputStyle;
  let value;
  ({ label, error, value, hint, onChangeText: require, alpha2: importDefault, countryCode } = arg0);
  ({ onPressCountrySelector: closure_3, forceMode } = arg0);
  ({ style, textInputStyle } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, textInputStyle: 0, label: 0, error: 0, value: 0, hint: 0, onChangeText: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }));
  function handleChangeText(cResult) {
    let str = "";
    const obj = PhoneOrEmailUtils;
    if (obj.shouldShowCountryCodeSelector(forceMode, cResult)) {
      str = countryCode;
    }
    if (_require != null) {
      _require(cResult, str);
    }
  }
  const tmp2 = closure_9();
  let obj = require("PhoneOrEmailUtils");
  show = obj.shouldShowCountryCodeSelector(forceMode, value);
  const obj2 = { handleChangeText, value };
  ref = show.useRef(obj2);
  const effect = show.useEffect(() => {
    ref.current = obj2;
  });
  const items = [countryCode];
  const effect1 = show.useEffect(() => {
    ref.current.handleChangeText(ref.current.value);
  }, items);
  let tmp9 = null;
  const obj3 = { style, children: items1 };
  const tmp8 = obj2;
  if (null != label) {
    const obj4 = { style: tmp2.label, children: label };
    tmp9 = ref(require("FreeFormLabel"), obj4);
  }
  items1 = [tmp9, , , ];
  const obj5 = {
    renderLeadingComponent() {
      const obj = { show, alpha2: importDefault, countryCode, onPress };
      return metroImportDefault(closure_10, obj);
    },
    error: null != error,
    ref,
    value,
    style: items2,
    onChangeText: handleChangeText,
    textContentType: str,
    keyboardType: str2,
    accessibilityLabel: label,
    accessibilityHint: hint
  };
  const tmp14 = require("FreeFormTextInput");
  const merged1 = Object.assign(merged);
  items2 = [tmp2.input, textInputStyle];
  str = "emailAddress";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  str2 = "email-address";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  items1[1] = ref(tmp14, obj5);
  let tmp12Result = null;
  if (null != error) {
    const obj6 = { style: tmp2.error, children: error };
    tmp12Result = tmp12(require("FreeFormErrorLabel"), obj6);
  }
  items1[2] = tmp12Result;
  let tmp12Result2 = null;
  if (null != hint) {
    const obj7 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
    tmp12Result2 = tmp12(require("Text/Text").Text, obj7);
  }
  items1[3] = tmp12Result2;
  return closure_8(tmp8, obj3);
}));
let result = size.fileFinishedImporting("modules/phone/native/FormPhoneOrEmail.tsx");

export default forwardRefResult;