// === Module 6543: FormPhoneOrEmail ===

// Module 6543 (FormPhoneOrEmail)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import FreeFormLabelDefault from "FreeFormLabel" /* 6425 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["style", "textInputStyle", "label", "error", "value", "hint", "onChangeText", "alpha2", "countryCode", "onPressCountrySelector", "forceMode"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = { label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { flex: 1, flexDirection: "row" }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" }, separator: { borderLeftWidth: 1, borderLeftColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 } };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ alpha2, onPress } = arg0);
  ({ show, countryCode } = arg0);
  const tmp4 = closure_9();
  if (alpha2 == null) {
    alpha2 = "";
  }
  const combined = "" + alpha2 + " " + countryCode;
  if (show) {
    const _Symbol = Symbol;
    ({ selectorOuterContainer, selectorContainer, selectorPressable } = tmp4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { borderless: true };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.GwAW3k);
      cResult[1] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] === combined) {
      if (cResult[3] === tmp4.selectorText) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === combined) {
        if (cResult[6] === onPress) {
          if (cResult[7] === tmp4.selectorPressable) {
            if (cResult[8] === tmp9) {
              let tmp12 = cResult[9];
            }
            if (cResult[10] !== tmp4.separator) {
              const obj3 = { style: tmp4.separator };
              const tmp18 = React5(View, obj3);
              cResult[10] = tmp4.separator;
              cResult[11] = tmp18;
              let tmp15 = tmp18;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp4.selectorContainer) {
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp15) {
                  let tmp19 = cResult[15];
                }
                if (cResult[16] === tmp4.selectorOuterContainer) {
                  if (cResult[17] === tmp19) {
                    let tmp23 = cResult[18];
                  }
                  return tmp23;
                }
                const obj4 = { style: selectorOuterContainer, children: tmp19 };
                const tmp26 = React5(View, obj4);
                cResult[16] = tmp4.selectorOuterContainer;
                cResult[17] = tmp19;
                cResult[18] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj5 = { style: selectorContainer, children: null };
            const items = [tmp12, tmp15];
            obj5.children = items;
            const tmp22 = closure_1_8(View, obj5);
            cResult[12] = tmp4.selectorContainer;
            cResult[13] = tmp12;
            cResult[14] = tmp15;
            cResult[15] = tmp22;
            tmp19 = tmp22;
          }
        }
      }
      const obj6 = { onPress, style: selectorPressable, androidRippleConfig: first, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: tmp7, children: tmp9 };
      const tmp14 = React5(Pressables.PressableOpacity, obj6);
      cResult[5] = combined;
      cResult[6] = onPress;
      cResult[7] = tmp4.selectorPressable;
      cResult[8] = tmp9;
      cResult[9] = tmp14;
      tmp12 = tmp14;
    }
    const obj7 = { style: tmp4.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    const tmp11 = React5(Text_Text.Text, obj7);
    cResult[2] = combined;
    cResult[3] = tmp4.selectorText;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    return null;
  }
}) : ((alpha2) => {
  let str = alpha2.alpha2;
  ({ show, countryCode, onPress } = alpha2);
  const tmp = closure_9();
  if (str == null) {
    str = "";
  }
  const combined = "" + str + " " + countryCode;
  let tmp3 = null;
  if (show) {
    const obj = { style: tmp.selectorOuterContainer, children: null };
    const obj2 = { style: tmp.selectorContainer, children: null };
    const obj3 = { onPress, style: tmp.selectorPressable, androidRippleConfig: { borderless: true }, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: null, children: null };
    const intl = util.intl;
    obj3.accessibilityHint = intl.string(util.t.GwAW3k);
    const obj4 = { style: tmp.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    obj3.children = React5(Text_Text.Text, obj4);
    const items = [React5(Pressables.PressableOpacity, obj3), ];
    const obj5 = { style: tmp.separator };
    items[1] = React5(View, obj5);
    obj2.children = items;
    obj.children = closure_1_8(View, obj2);
    tmp3 = React5(View, obj);
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let obj3 = { borderLeftWidth: 1, borderLeftColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/phone/native/FormPhoneOrEmail.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((alpha2, arg1) => {
  const cResult = require("c").c(63);
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
    const tmp18 = onPress(alpha2, closure_3);
    cResult[0] = alpha2;
    cResult[1] = alpha2;
    cResult[2] = countryCode;
    cResult[3] = error;
    cResult[4] = forceMode;
    cResult[5] = hint;
    cResult[6] = label;
    cResult[7] = onChangeText;
    cResult[8] = onPressCountrySelector;
    cResult[9] = tmp18;
    cResult[10] = style;
    cResult[11] = textInputStyle;
    cResult[12] = value;
    let tmp15 = value;
    let tmp9 = label;
    const tmp11 = onPressCountrySelector;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[4];
    tmp9 = cResult[6];
    closure_3 = cResult[7];
    onPress = cResult[8];
    tmp15 = cResult[12];
  }
  const obj = require("c");
  const tmp = _require;
  if (cResult[13] === tmp7) {
    if (cResult[14] === tmp15) {
      let tmp20 = cResult[15];
    }
    show = tmp20;
    if (cResult[16] === tmp5) {
      if (cResult[17] === tmp7) {
        if (cResult[18] === onChangeText) {
          let tmp22 = cResult[19];
        }
        if (cResult[20] === tmp22) {
          if (cResult[21] === tmp15) {
            let tmp23 = cResult[22];
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
                return jsx(f38094, obj);
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
                return jsx(f38094, obj);
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
  tmp19 = closure_9();
  const result = tmp(6451).shouldShowCountryCodeSelector(tmp7, tmp15);
  cResult[13] = tmp7;
  cResult[14] = tmp15;
  cResult[15] = result;
  tmp20 = result;
  const tmpResult = tmp(6451);
}) : ((arg0, ref) => {
  ({ label, error, value, hint, onChangeText: require, alpha2: importDefault, countryCode } = arg0);
  ({ onPressCountrySelector: closure_3, forceMode } = arg0);
  ({ style, textInputStyle } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, textInputStyle: 0, label: 0, error: 0, value: 0, hint: 0, onChangeText: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }));
  function handleChangeText(cResult) {
    let str = "";
    if (obj.shouldShowCountryCodeSelector(forceMode, cResult)) {
      str = countryCode;
    }
    if (_require != null) {
      _require(cResult, str);
    }
  }
  const tmp2 = closure_9();
  show = require("PhoneOrEmailUtils").shouldShowCountryCodeSelector(forceMode, value);
  const obj2 = { handleChangeText, value };
  ref = show.useRef(obj2);
  const effect = show.useEffect(() => {
    closure_7.current = obj2;
  });
  const items = [countryCode];
  const effect1 = show.useEffect(() => {
    ref.current.handleChangeText(ref.current.value);
  }, items);
  const obj3 = { style, children: null };
  let tmp9 = null;
  if (null != label) {
    const obj4 = { style: tmp2.label, children: label };
    tmp9 = ref(require("FreeFormLabel"), obj4);
  }
  const items1 = [tmp9, , , ];
  const obj5 = {};
  const obj = require("PhoneOrEmailUtils");
  const tmp8 = obj2;
  const merged1 = Object.assign(merged);
  obj5.renderLeadingComponent = function renderLeadingComponent() {
    return React5(closure_10, { show, alpha2, countryCode, onPress });
  };
  obj5.error = null != error;
  obj5.ref = ref;
  obj5.value = value;
  const items2 = [tmp2.input, textInputStyle];
  obj5.style = items2;
  obj5.onChangeText = handleChangeText;
  let str = "emailAddress";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  obj5.textContentType = str;
  let str2 = "email-address";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  obj5.keyboardType = str2;
  obj5.accessibilityLabel = label;
  obj5.accessibilityHint = hint;
  items1[1] = ref(require("FreeFormTextInput"), obj5);
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
  obj3.children = items1;
  return closure_8(tmp8, obj3);
}));