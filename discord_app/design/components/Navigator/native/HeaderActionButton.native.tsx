// discord_app/design/components/Navigator/native/HeaderActionButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import ButtonConstants from "../../Button/native/ButtonConstants.native.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ANDROID_FOREGROUND_RIPPLE = fn(1182).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = {
  button: { alignSelf: "stretch", alignItems: "center", justifyContent: "center", flexDirection: "row" },
  text: null,
  buttonFont: null,
  buttonDisabled: null,
};
obj = { color: nativeDefault.colors.TEXT_BRAND, textTransform: "capitalize" };
obj.text = obj;
obj.buttonFont = { fontSize: 16, maxWidth: 80 };
obj.buttonDisabled = { opacity: 0.6 };
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = noop.forwardRef((arg0, ref) => {
  ({ text, source, accessibilityLabel, IconComponent, disabled } = arg0);
  ({
    style,
    textStyle,
    imageStyle,
    accessibilityHint,
    accessibilityActions,
    onAccessibilityAction,
    icon,
    IconComponentSize,
    onPress,
    foregroundRipple,
    iconSize,
    hitSlop,
  } = arg0);
  const tmp = closure_6();
  if (null != text) {
    let obj = { style: null, variant: "text-md/semibold", lineClamp: 1, maxFontSizeMultiplier: null, children: null };
    const items = [, ,];
    ({ text: arr[0], buttonFont: arr[1] } = tmp);
    items[2] = textStyle;
    obj.style = items;
    obj.maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    obj.children = text;
    let tmp2 = React4(Text_Text.Text, obj);
  } else if (null != IconComponent) {
    obj = { size: IconComponentSize };
    tmp2 = React4(IconComponent, obj);
  } else if (null != source) {
    obj = { source, style: imageStyle, size: iconSize };
    tmp2 = React4(IconDefault, obj);
  }
  const obj1 = {
    ref,
    accessibilityLabel: null,
    accessibilityHint: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    accessibilityRole: "button",
    onPress: null,
    activeOpacity: 0.6,
    androidRippleConfig: null,
    style: null,
    hitSlop: null,
    disabled: null,
    children: null,
  };
  if (accessibilityLabel == null) {
    accessibilityLabel = text;
  }
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.accessibilityHint = accessibilityHint;
  obj1.accessibilityActions = accessibilityActions;
  obj1.onAccessibilityAction = onAccessibilityAction;
  obj1.onPress = onPress;
  let tmp11;
  if (foregroundRipple) {
    tmp11 = ANDROID_FOREGROUND_RIPPLE;
  }
  obj1.androidRippleConfig = tmp11;
  const items1 = [tmp.button, style];
  let buttonDisabled = disabled;
  if (disabled) {
    buttonDisabled = tmp.buttonDisabled;
  }
  items1[2] = buttonDisabled;
  obj1.style = items1;
  obj1.hitSlop = hitSlop;
  obj1.disabled = disabled;
  const items2 = [tmp2, icon];
  obj1.children = items2;
  return hasOwnProperty(Pressables.PressableOpacity, obj1);
});
