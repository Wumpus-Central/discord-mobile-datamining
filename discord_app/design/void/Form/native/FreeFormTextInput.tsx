// === Module 7680: ClearButton ===

// Module 7680 (ClearButton)
import _modDef38 from "module_38" /* 38 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import PressableBase from "PressableBase" /* 5036 */;
import registerAssetDefault from "registerAsset" /* 7681 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function ClearButton(onPress) {
  let obj = { style: { borderRadius: 20, padding: 8 }, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.VkKicb);
  obj[3] = onPress.onPress;
  obj[4] = { top: 8, bottom: 8, right: 8 };
  obj = { source: registerAssetDefault, style: callback2().closeIcon, size: Button.Icon.Sizes.MEDIUM };
  obj[5] = callback(Button.Icon, obj);
  return callback(PressableBase.PressableOpacity, obj);
}
let c3 = importAllResult;
({ TouchableWithoutFeedback: c4, View: c5, TouchableOpacity: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { container: null, onPress: null, input: null, error: null, closeIcon: null, placeholder: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, height: 48, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.xs, paddingRight: 6, paddingLeft: 12, flexDirection: "row", alignItems: "center" };
obj[0] = obj;
obj[1] = { flexDirection: "row" };
createCacheKey = { flex: 1, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj[2] = createCacheKey;
obj[3] = { borderColor: ThemesDefault.unsafe_rawColors.RED_400 };
let obj2 = { borderColor: ThemesDefault.unsafe_rawColors.RED_400 };
obj[4] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
const obj3 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
obj[5] = { color: ThemesDefault.colors.TEXT_MUTED };
let closure_9 = createCacheKey.createStyles(obj);
const obj4 = { color: ThemesDefault.colors.TEXT_MUTED };
const forwardRefResult = importAllResult.forwardRef((editable, ref) => {
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
    WITH_CONTENT = onChangeText(1297).ClearButtonVisibility.WITH_CONTENT;
  }
  const merged = Object.assign(editable, Object.create(null));
  ref = undefined;
  const tmp4 = callback2();
  ref = onPress.useRef(null);
  const imperativeHandle = onPress.useImperativeHandle(ref, () => ref.current);
  let flag2 = true;
  if (onChangeText(1297).ClearButtonVisibility.ALWAYS !== WITH_CONTENT) {
    if (tmp7(1297).ClearButtonVisibility.WITH_CONTENT === WITH_CONTENT) {
      let tmp9 = null != value;
      if (tmp9) {
        tmp9 = "" !== value;
      }
      flag2 = tmp9;
    } else if (tmp7(1297).ClearButtonVisibility.NEVER === WITH_CONTENT) {
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
  obj[1] = tmp17;
  let str2;
  if (forceAccessibleContainer) {
    str2 = "button";
  }
  obj[2] = str2;
  obj[3] = forceAccessibleContainer;
  let tmp18;
  if (forceAccessibleContainer) {
    tmp18 = accessibilityLabel;
  }
  obj[4] = tmp18;
  let tmp19;
  if (forceAccessibleContainer) {
    obj = { text: null };
    obj[0] = value;
    tmp19 = obj;
  }
  obj[5] = tmp19;
  let tmp20;
  if (forceAccessibleContainer) {
    tmp20 = accessibilityHint;
  }
  obj[6] = tmp20;
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
  obj1 = {
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
      if (closure_1 != null) {
        tmp(arg0);
      }
    },
    onBlur(arg0) {
      if (closure_2 != null) {
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
  items1[1] = closure_7(onChangeText(1297).TextInput, obj1);
  let result1;
  if (renderTrailingComponent != null) {
    result1 = renderTrailingComponent();
  }
  items1[2] = result1;
  let tmp15Result = null;
  if (flag2) {
    const obj2 = { onPress: null };
    obj2[0] = function onPress() {
      let tmpResult;
      if (onChangeText != null) {
        tmpResult = tmp("");
      }
      return tmpResult;
    };
    tmp15Result = tmp15(ClearButton, obj2);
  }
  items1[3] = tmp15Result;
  obj[1] = items1;
  obj[7] = closure_8(ref, obj);
  return closure_7(null != onPress ? closure_6 : flag, obj);
});
let result = require("set").fileFinishedImporting("design/void/Form/native/FreeFormTextInput.tsx");

export default forwardRefResult;