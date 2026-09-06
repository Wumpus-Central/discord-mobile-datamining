// === Module 6939: FreeFormTextInput ===

// Module 6939 (FreeFormTextInput)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Pressables from "Pressables" /* 5123 */;
import _modDef6940 from "module_6940" /* 6940 */;
import noop from "module_19" /* 19 */;

require = fn;
function ClearButton(onPress) {
  let obj = { style: { borderRadius: 20, padding: 8 }, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = { top: 8, bottom: 8, right: 8 };
  obj = { source: _modDef6940, style: closure_9().closeIcon, size: native.Icon.Sizes.MEDIUM };
  obj.children = React5(native.Icon, obj);
  return React5(Pressables.PressableOpacity, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableWithoutFeedback: closure_4, View: hasOwnProperty, TouchableOpacity: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { container: null, onPress: null, input: null, error: null, closeIcon: null, placeholder: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, height: 48, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, paddingRight: 6, paddingLeft: 12, flexDirection: "row", alignItems: "center" };
obj.container = obj;
obj.onPress = { flexDirection: "row" };
const createStyles = { flex: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.input = createStyles;
obj.error = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
let obj2 = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
obj.closeIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
const obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
obj.placeholder = { color: nativeDefault.colors.TEXT_MUTED };
let closure_9 = createStyles.createStyles(obj);
const obj4 = { color: nativeDefault.colors.TEXT_MUTED };
const size = fn(2);
let result = size.fileFinishedImporting("design/void/Form/native/FreeFormTextInput.tsx");

export default noop.forwardRef((editable, ref) => {
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
  const merged = Object.assign(editable, Object.assign({ style: 0, error: 0, renderLeadingComponent: 0, renderTrailingComponent: 0, onChangeText: 0, onFocus: 0, accessibilityRole: 0, onBlur: 0, value: 0, onPress: 0, editable: 0, accessibilityLabel: 0, accessibilityHint: 0, forceAccessibleContainer: 0, clearButtonVisibility: 0 }));
  const tmp4 = closure_9();
  ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ref.current);
  let flag2 = true;
  if (native.ClearButtonVisibility.ALWAYS !== WITH_CONTENT) {
    if (tmp7(1178).ClearButtonVisibility.WITH_CONTENT === WITH_CONTENT) {
      let tmp9 = null != value;
      if (tmp9) {
        tmp9 = "" !== value;
      }
      flag2 = tmp9;
    } else if (tmp7(1178).ClearButtonVisibility.NEVER === WITH_CONTENT) {
      flag2 = false;
    }
  }
  let tmp11 = null != onPress;
  if (tmp11) {
    tmp11 = flag;
  }
  _modDef38(!tmp11, "Cannot have an editable input w/ onPress handler");
  let items = [tmp4.container, , ];
  error = null;
  if (error) {
    error = tmp4.error;
  }
  items[1] = error;
  items[2] = style;
  let obj = {
    onPress() {
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
    children: null
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
    obj = { text: value };
    tmp19 = obj;
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
  obj = { style: items, children: null };
  let result;
  if (renderLeadingComponent != null) {
    result = renderLeadingComponent();
  }
  const items1 = [result, , , ];
  let str3 = "auto";
  if (null != onPress) {
    str3 = "none";
  }
  const obj1 = {
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
    clearButtonMode: "never"
  };
  const merged1 = Object.assign(merged);
  let str4 = "no-hide-descendants";
  if (flag) {
    str4 = "yes";
  }
  obj1.importantForAccessibility = str4;
  obj1.accessibilityElementsHidden = !flag;
  items1[1] = React5(native.TextInput, obj1);
  let result1;
  if (renderTrailingComponent != null) {
    result1 = renderTrailingComponent();
  }
  items1[2] = result1;
  let tmp15Result = null;
  if (flag2) {
    const obj2 = {
      onPress() {
          let tmpResult;
          if (onChangeText != null) {
            tmpResult = tmp("");
          }
          return tmpResult;
        }
    };
    tmp15Result = tmp15(ClearButton, obj2);
  }
  items1[3] = tmp15Result;
  obj.children = items1;
  obj.children = React6(hasOwnProperty, obj);
  return React5(null != onPress ? timestampProducer : React4, obj);
});