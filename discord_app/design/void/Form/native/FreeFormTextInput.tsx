// discord_app/design/void/Form/native/FreeFormTextInput.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../native.tsx";
import Pressables from "../../Pressables/native/Pressables.tsx";
import _modDef6612 from "../../../../../_runtime/metro/06612__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableWithoutFeedback: closure_4, View: hasOwnProperty, TouchableOpacity: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    height: 48,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.xs,
    paddingRight: 6,
    paddingLeft: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  onPress: { flexDirection: "row" },
  input: null,
  error: null,
  closeIcon: null,
  placeholder: null,
};
let obj3 = {
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
obj2.input = { flex: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { flex: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.error = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
let obj5 = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
obj2.closeIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
const obj6 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
obj2.placeholder = { color: nativeDefault.colors.TEXT_MUTED };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClearButton(onPress) {
      const cResult = c.c(8);
      onPress = onPress.onPress;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { borderRadius: 20, padding: 8 };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.VkKicb);
        cResult[1] = stringResult;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const rect = { top: 8, bottom: 8, right: 8 };
        cResult[2] = rect;
        let tmp8 = rect;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp4.closeIcon) {
        const obj3 = { source: _modDef6612, style: tmp4.closeIcon, size: native.Icon.Sizes.MEDIUM };
        const tmp12 = React5(native.Icon, obj3);
        cResult[3] = tmp4.closeIcon;
        cResult[4] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === onPress) {
        if (cResult[6] === tmp9) {
          let tmp13 = cResult[7];
        }
        return tmp13;
      }
      const tmp14 = React5(Pressables.PressableOpacity, {
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
  : function ClearButton(onPress) {
      const obj = {
        style: { borderRadius: 20, padding: 8 },
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        hitSlop: null,
        children: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.VkKicb);
      obj.onPress = onPress.onPress;
      obj.hitSlop = { top: 8, bottom: 8, right: 8 };
      const tmp = closure_9();
      obj.children = React5(native.Icon, {
        source: _modDef6612,
        style: closure_9().closeIcon,
        size: native.Icon.Sizes.MEDIUM,
      });
      return React5(Pressables.PressableOpacity, obj);
    };
const size = fn(2);
let result = size.fileFinishedImporting("design/void/Form/native/FreeFormTextInput.tsx");

export default (editable) => {
  ({ renderLeadingComponent, renderTrailingComponent, onChangeText } = editable);
  ({ onFocus: importDefault, onBlur: dependencyMap, value, onPress } = editable);
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
      ref: 0,
    }),
  );
  const tmp4 = closure_9();
  const ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(editable.ref, () => ref.current);
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
  if (tmp11) {
    tmp11 = flag;
  }
  _modDef38(!tmp11, "Cannot have an editable input w/ onPress handler");
  let items = [tmp4.container, ,];
  let error1 = null;
  if (error) {
    error1 = tmp4.error;
  }
  items[1] = error1;
  items[2] = style;
  const obj = {
    onPress: function handlePress() {
      if (flag) {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
      if (onPress != null) {
        tmp4();
      }
    },
    style: null,
    accessibilityRole: null,
    accessible: null,
    accessibilityLabel: null,
    accessibilityValue: null,
    accessibilityHint: null,
    children: null,
  };
  let tmp17 = null;
  if (null != onPress) {
    tmp17 = items;
  }
  obj.style = tmp17;
  let str2;
  if (forceAccessibleContainer) {
    str2 = "button";
  }
  obj.accessibilityRole = str2;
  obj.accessible = forceAccessibleContainer;
  let tmp18;
  if (forceAccessibleContainer) {
    tmp18 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp18;
  let tmp19;
  if (forceAccessibleContainer) {
    const obj2 = { text: value };
    tmp19 = obj2;
  }
  obj.accessibilityValue = tmp19;
  let tmp20;
  if (forceAccessibleContainer) {
    tmp20 = accessibilityHint;
  }
  obj.accessibilityHint = tmp20;
  if (null != onPress) {
    items = tmp4.onPress;
  }
  const obj3 = { style: items, children: null };
  let result;
  if (renderLeadingComponent != null) {
    result = renderLeadingComponent();
  }
  const items1 = [result, , ,];
  let str3 = "auto";
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
      if (importDefault != null) {
        tmp(arg0);
      }
    },
    onBlur(arg0) {
      if (dependencyMap != null) {
        tmp(arg0);
      }
    },
    placeholderTextColor: tmp4.placeholder.color,
    clearButtonMode: "never",
  };
  const merged1 = Object.assign(merged);
  let str4 = "no-hide-descendants";
  if (flag) {
    str4 = "yes";
  }
  obj4.importantForAccessibility = str4;
  obj4.accessibilityElementsHidden = !flag;
  items1[1] = React5(native.TextInput, obj4);
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
    tmp15Result = React5(closure_10, obj5);
  }
  items1[3] = tmp15Result;
  obj3.children = items1;
  obj.children = closure_1_8(hasOwnProperty, obj3);
  return React5(null != onPress ? timestampProducer : React4, obj);
};
