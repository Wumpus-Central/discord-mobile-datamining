// === Module 7487: HeaderActionButton ===

// Module 7487 (HeaderActionButton)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4634 */;
import IconDefault from "Icon" /* 5062 */;
import ButtonConstants from "ButtonConstants" /* 5065 */;
import Pressables from "Pressables" /* 5208 */;
import noop from "module_19" /* 19 */;

require = fn;
const ANDROID_FOREGROUND_RIPPLE = fn(1181).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj = { button: { alignSelf: "stretch", alignItems: "center", justifyContent: "center", flexDirection: "row" }, text: { color: nativeDefault.colors.TEXT_BRAND, textTransform: "capitalize" }, buttonFont: { fontSize: 16, maxWidth: 80 }, buttonDisabled: { opacity: 0.6 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.colors.TEXT_BRAND, textTransform: "capitalize" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = noop.forwardRef((arg0, ref) => {
  ({ text, source, accessibilityLabel, IconComponent, disabled } = arg0);
  ({ style, textStyle, imageStyle, accessibilityHint, accessibilityActions, onAccessibilityAction, icon, IconComponentSize, onPress, foregroundRipple, iconSize, hitSlop } = arg0);
  const tmp = closure_6();
  if (null != text) {
    const obj2 = { style: null, variant: "text-md/semibold", lineClamp: 1, maxFontSizeMultiplier: null, children: null };
    const items = [, , ];
    ({ text: arr[0], buttonFont: arr[1] } = tmp);
    items[2] = textStyle;
    obj2.style = items;
    obj2.maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    obj2.children = text;
    let tmp2 = React4(Text_Text.Text, obj2);
  } else if (null != IconComponent) {
    const obj3 = { size: IconComponentSize };
    tmp2 = React4(IconComponent, obj3);
  } else if (null != source) {
    const obj = { source, style: imageStyle, size: iconSize };
    tmp2 = React4(IconDefault, obj);
  }
  const obj4 = { ref, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, accessibilityRole: "button", onPress: null, activeOpacity: 0.6, androidRippleConfig: null, style: null, hitSlop: null, disabled: null, children: null };
  if (accessibilityLabel == null) {
    accessibilityLabel = text;
  }
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.accessibilityHint = accessibilityHint;
  obj4.accessibilityActions = accessibilityActions;
  obj4.onAccessibilityAction = onAccessibilityAction;
  obj4.onPress = onPress;
  let tmp11;
  if (foregroundRipple) {
    tmp11 = ANDROID_FOREGROUND_RIPPLE;
  }
  obj4.androidRippleConfig = tmp11;
  const items1 = [tmp.button, style, ];
  let buttonDisabled = disabled;
  if (disabled) {
    buttonDisabled = tmp.buttonDisabled;
  }
  items1[2] = buttonDisabled;
  obj4.style = items1;
  obj4.hitSlop = hitSlop;
  obj4.disabled = disabled;
  const items2 = [tmp2, icon];
  obj4.children = items2;
  return hasOwnProperty(Pressables.PressableOpacity, obj4);
});