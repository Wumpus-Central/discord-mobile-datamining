// discord_app/design/void/Form/native/FreeFormTextInput.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../native.tsx";
import Pressables from "../../Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../../../_runtime/06434_AssetRegistry.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let onFocus;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let closure_3 = [
  "style",
  "error",
  "renderLeadingComponent",
  "renderTrailingComponent",
  "onChangeText",
  "onFocus",
  "accessibilityRole",
  "onBlur",
  "value",
  "onPress",
  "editable",
  "accessibilityLabel",
  "accessibilityHint",
  "forceAccessibleContainer",
  "clearButtonVisibility",
];
({ TouchableWithoutFeedback: metroRequire, View: metroImportDefault, TouchableOpacity: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  onPress: { flexDirection: "row" },
  input: obj3,
  error: obj4,
  closeIcon: obj5,
  placeholder: { color: nativeDefault.colors.TEXT_MUTED },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  height: 48,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  paddingRight: 6,
  paddingLeft: 12,
  flexDirection: "row",
  alignItems: "center",
};
createStyles = createStyles.createStyles;
obj3 = { flex: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
({ color: nativeDefault.colors.TEXT_MUTED });
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let first;
      let tmp6;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      onPress = onPress.onPress;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { borderRadius: 20, padding: 8 };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.VkKicb);
        cResult[1] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const rect = { top: 8, bottom: 8, right: 8 };
        cResult[2] = rect;
        tmp8 = rect;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp4.closeIcon) {
        const obj3 = { source: AssetRegistryDefault, style: tmp4.closeIcon, size: native.Icon.Sizes.MEDIUM };
        const Icon = native.Icon;
        const tmp12 = React4(Icon, obj3);
        cResult[3] = tmp4.closeIcon;
        cResult[4] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === onPress) {
        let tmp13;
        if (cResult[6] === tmp9) {
          tmp13 = cResult[7];
        }
        return tmp13;
      }
      const tmp14 = React4(Pressables.PressableOpacity, {
        style: first,
        accessibilityRole: "button",
        accessibilityLabel: tmp6,
        onPress,
        hitSlop: tmp8,
        children: tmp9,
      });
      cResult[5] = onPress;
      cResult[6] = tmp9;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : (onPress) => {
      let Icon;
      let intl;
      let obj2;
      onPress = onPress.onPress;
      const obj = {
        style: { borderRadius: 20, padding: 8 },
        accessibilityRole: "button",
        accessibilityLabel: intl.string(intl2.t.VkKicb),
        onPress,
        hitSlop: { top: 8, bottom: 8, right: 8 },
        children: React4(Icon, obj2),
      };
      const tmp = closure_11();
      const PressableOpacity = Pressables.PressableOpacity;
      intl = intl2.intl;
      obj2 = { source: AssetRegistryDefault, style: tmp.closeIcon, size: native.Icon.Sizes.MEDIUM };
      Icon = native.Icon;
      return React4(PressableOpacity, obj);
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onFocus, arg1) => {
        let WITH_CONTENT;
        let accessibilityHint;
        let accessibilityLabel;
        let accessibilityRole;
        let clearButtonVisibility;
        let editable;
        let error;
        let forceAccessibleContainer;
        let onBlur;
        let onChangeText;
        let onPress;
        let renderLeadingComponent;
        let renderTrailingComponent;
        let style;
        let tmp15;
        let tmp16;
        let tmp18;
        let tmp7;
        let value;
        const obj = react2;
        const cResult = obj.c(72);
        if (cResult[0] !== onFocus) {
          ({ style, error, renderLeadingComponent, renderTrailingComponent, onChangeText } = onFocus);
          let closure_1 = onChangeText;
          onFocus = onFocus.onFocus;
          let closure_2 = onFocus;
          ({ accessibilityRole, onBlur } = onFocus);
          let closure_0 = onBlur;
          ({ value, onPress } = onFocus);
          closure_3 = onPress;
          ({ editable, accessibilityLabel, accessibilityHint, forceAccessibleContainer, clearButtonVisibility } =
            onFocus);
          cResult[0] = onFocus;
          cResult[1] = accessibilityHint;
          cResult[2] = accessibilityLabel;
          cResult[3] = accessibilityRole;
          cResult[4] = error;
          cResult[5] = onBlur;
          cResult[6] = onChangeText;
          cResult[7] = onFocus;
          cResult[8] = onPress;
          cResult[9] = renderLeadingComponent;
          cResult[10] = renderTrailingComponent;
          cResult[11] = _objectWithoutProperties(onFocus, closure_3);
          cResult[12] = style;
          cResult[13] = editable;
          cResult[14] = forceAccessibleContainer;
          cResult[15] = clearButtonVisibility;
          cResult[16] = value;
          tmp18 = value;
          WITH_CONTENT = clearButtonVisibility;
          tmp16 = editable;
          tmp15 = style;
          tmp7 = error;
          let tmp5 = accessibilityLabel;
          const tmp21 = _objectWithoutProperties(onFocus, closure_3);
        } else {
          tmp5 = cResult[2];
          tmp7 = cResult[4];
          closure_0 = cResult[5];
          closure_1 = cResult[6];
          closure_2 = cResult[7];
          closure_3 = cResult[8];
          tmp15 = cResult[12];
          tmp16 = cResult[13];
          WITH_CONTENT = cResult[15];
          tmp18 = cResult[16];
        }
        let closure_4 = tmp22;
        if (undefined === WITH_CONTENT) {
          WITH_CONTENT = native.ClearButtonVisibility.WITH_CONTENT;
        }
        const tmp23 = closure_11();
        const ref = react.useRef(null);
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              return ref.current;
            }
          }
          cResult[17] = H;
        } else {
          class H {
            constructor() {
              return ref.current;
            }
          }
        }
        const imperativeHandle = react.useImperativeHandle(arg1, H);
        if (cResult[18] === WITH_CONTENT) {
          class H {
            constructor() {
              return ref.current;
            }
          }
          if (cResult[21] === (undefined === tmp16 || tmp16)) {
            class H {
              constructor() {
                return ref.current;
              }
            }
            const tmp29 = _modDef38;
            if (null != onPress) {
              class H {
                constructor() {
                  return ref.current;
                }
              }
            }
            tmp29(null == onPress, "Cannot have an editable input w/ onPress handler");
            if (tmp7) {
              class H {
                constructor() {
                  return ref.current;
                }
              }
            }
            if (cResult[24] === tmp15) {
              class H {
                constructor() {
                  return ref.current;
                }
              }
            }
            const items = [tmp23.container, null, tmp15];
            cResult[24] = tmp15;
            cResult[25] = tmp23.container;
            cResult[26] = null;
            cResult[27] = items;
          }
          const fn = function k() {
            if (closure_4) {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
            if (closure_3 != null) {
              tmp5();
            }
          };
          cResult[21] = undefined === tmp16 || tmp16;
          cResult[22] = onPress;
          cResult[23] = fn;
        }
        if (native.ClearButtonVisibility.ALWAYS !== WITH_CONTENT) {
          class H {
            constructor() {
              return ref.current;
            }
          }
        }
        cResult[18] = WITH_CONTENT;
        cResult[19] = tmp18;
        cResult[20] = true;
      }
    : (editable, arg1) => {
        let accessibilityHint;
        let accessibilityLabel;
        let accessibilityRole;
        let closure_129_1;
        let closure_129_2;
        let error;
        let forceAccessibleContainer;
        let items1;
        let obj3;
        let onChangeText;
        let onPress;
        let renderLeadingComponent;
        let renderTrailingComponent;
        let str2;
        let str4;
        let style;
        let tmp17;
        let tmp18;
        let tmp19;
        let tmp20;
        let value;
        ({ renderLeadingComponent, renderTrailingComponent, onChangeText } = editable);
        ({ onFocus: closure_129_1, onBlur: closure_129_2, value, onPress } = editable);
        let flag = editable.editable;
        ({ style, error, accessibilityRole } = editable);
        if (flag === undefined) {
          flag = true;
        }
        ({ accessibilityLabel, forceAccessibleContainer, accessibilityHint } = editable);
        if (forceAccessibleContainer === undefined) {
          forceAccessibleContainer = false;
        }
        let WITH_CONTENT = editable.clearButtonVisibility;
        if (WITH_CONTENT === undefined) {
          WITH_CONTENT = native.ClearButtonVisibility.WITH_CONTENT;
        }
        const merged = Object.assign(
          editable,
          Object.assign({
            style: 0,
            error: 0,
            renderLeadingComponent: 0,
            renderTrailingComponent: 0,
            onChangeText: 0,
            onFocus: 0,
            accessibilityRole: 0,
            onBlur: 0,
            value: 0,
            onPress: 0,
            editable: 0,
            accessibilityLabel: 0,
            accessibilityHint: 0,
            forceAccessibleContainer: 0,
            clearButtonVisibility: 0,
          }),
        );
        const tmp4 = closure_11();
        const ref = react.useRef(null);
        const imperativeHandle = react.useImperativeHandle(arg1, () => ref.current);
        let flag2 = true;
        if (native.ClearButtonVisibility.ALWAYS !== WITH_CONTENT) {
          if (native.ClearButtonVisibility.WITH_CONTENT === WITH_CONTENT) {
            let tmp9 = null != value;
            if (tmp9) {
              tmp9 = "" !== value;
            }
            flag2 = tmp9;
          } else if (native.ClearButtonVisibility.NEVER === WITH_CONTENT) {
            flag2 = false;
          }
        }
        let tmp11 = null != onPress;
        const tmp10 = _modDef38;
        if (tmp11) {
          tmp11 = flag;
        }
        tmp10(!tmp11, "Cannot have an editable input w/ onPress handler");
        let items = [tmp4.container, ,];
        let error1 = null;
        if (error) {
          error1 = tmp4.error;
        }
        items[1] = error1;
        items[2] = style;
        const obj = {
          onPress() {
            if (flag) {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
            if (onPress != null) {
              tmp5();
            }
          },
          style: tmp17,
          accessibilityRole: str2,
          accessible: forceAccessibleContainer,
          accessibilityLabel: tmp18,
          accessibilityValue: tmp19,
          accessibilityHint: tmp20,
          children: authStore(metroImportDefault, obj3),
        };
        tmp17 = null;
        const tmp16 = null != onPress ? metroImportAll : metroRequire;
        if (null != onPress) {
          tmp17 = items;
        }
        str2 = undefined;
        if (forceAccessibleContainer) {
          str2 = "button";
        }
        tmp18 = undefined;
        if (forceAccessibleContainer) {
          tmp18 = accessibilityLabel;
        }
        tmp19 = undefined;
        if (forceAccessibleContainer) {
          tmp19 = { text: value };
          const obj2 = { text: value };
        }
        tmp20 = undefined;
        if (forceAccessibleContainer) {
          tmp20 = accessibilityHint;
        }
        if (null != onPress) {
          items = tmp4.onPress;
        }
        let result;
        obj3 = { style: items, children: items1 };
        if (renderLeadingComponent != null) {
          result = renderLeadingComponent();
        }
        items1 = [result, , ,];
        let str3 = "auto";
        const TextInput = native.TextInput;
        if (null != onPress) {
          str3 = "none";
        }
        const obj4 = {
          pointerEvents: str3,
          accessibilityRole,
          accessibilityLabel,
          ref,
          editable: flag,
          style: tmp4.input,
          numberOfLines: 1,
          multiline: false,
          value,
          onChangeText,
          onFocus(arg0) {
            if (closure_1_1 != null) {
              tmp(arg0);
            }
          },
          onBlur(arg0) {
            if (closure_1_2 != null) {
              tmp(arg0);
            }
          },
          placeholderTextColor: tmp4.placeholder.color,
          clearButtonMode: "never",
          importantForAccessibility: str4,
          accessibilityElementsHidden: !flag,
        };
        const merged1 = Object.assign(merged);
        str4 = "no-hide-descendants";
        if (flag) {
          str4 = "yes";
        }
        items1[1] = React4(TextInput, obj4);
        let result1;
        if (renderTrailingComponent != null) {
          result1 = renderTrailingComponent();
        }
        items1[2] = result1;
        let tmp15Result = null;
        if (flag2) {
          const obj5 = {
            onPress() {
              let tmpResult;
              if (onChangeText != null) {
                tmpResult = tmp("");
              }
              return tmpResult;
            },
          };
          tmp15Result = React4(closure_12, obj5);
        }
        items1[3] = tmp15Result;
        return React4(tmp16, obj);
      },
);
let result = size.fileFinishedImporting("design/void/Form/native/FreeFormTextInput.tsx");

export default forwardRefResult;
