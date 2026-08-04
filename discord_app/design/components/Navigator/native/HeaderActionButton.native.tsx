// discord_app/design/components/Navigator/native/HeaderActionButton.native.tsx
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { button: { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }, text: null, buttonFont: null, buttonDisabled: null };
obj = { color: require("Themes").colors.TEXT_BRAND, textTransform: "capitalize" };
obj[1] = obj;
obj[2] = { fontSize: 16, maxWidth: 80 };
obj[3] = { opacity: 0.6 };
let closure_6 = createCacheKey.createStyles(obj);
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let IconComponent;
  let IconComponentSize;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let foregroundRipple;
  let icon;
  let iconSize;
  let imageStyle;
  let onAccessibilityAction;
  let onPress;
  let source;
  let style;
  let text;
  let textStyle;
  ({ text, source, accessibilityLabel, IconComponent, disabled } = arg0);
  ({ style, textStyle, imageStyle, accessibilityHint, accessibilityActions, onAccessibilityAction, icon, IconComponentSize, onPress, foregroundRipple, iconSize } = arg0);
  const tmp = callback2();
  if (null != text) {
    let obj = { style: null, variant: "text-md/semibold", lineClamp: 1, maxFontSizeMultiplier: null, children: null };
    const items = [, , ];
    ({ text: arr[0], buttonFont: arr[1] } = tmp);
    items[2] = textStyle;
    obj[0] = items;
    obj[3] = require(4608) /* MINIMUM_HIT_AREA */.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    obj[4] = text;
    let tmp2 = callback(require(4189) /* Text */.Text, obj);
  } else if (null != IconComponent) {
    obj = { size: null };
    obj[0] = IconComponentSize;
    tmp2 = callback(IconComponent, obj);
  } else if (null != source) {
    obj = { source: null, style: null, size: null };
    obj[0] = source;
    obj[1] = imageStyle;
    obj[2] = iconSize;
    tmp2 = callback(importDefault(4606), obj);
  }
  const obj1 = { ref, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, accessibilityRole: "button", onPress: null, activeOpacity: 0.6, androidRippleConfig: null, style: null, disabled: null, children: null };
  if (accessibilityLabel == null) {
    accessibilityLabel = text;
  }
  obj1[1] = accessibilityLabel;
  obj1[2] = accessibilityHint;
  obj1[3] = accessibilityActions;
  obj1[4] = onAccessibilityAction;
  obj1[6] = onPress;
  let tmp11;
  if (foregroundRipple) {
    tmp11 = ANDROID_FOREGROUND_RIPPLE;
  }
  obj1[8] = tmp11;
  const items1 = [tmp.button, style, ];
  let buttonDisabled = disabled;
  if (disabled) {
    buttonDisabled = tmp.buttonDisabled;
  }
  items1[2] = buttonDisabled;
  obj1[9] = items1;
  obj1[10] = disabled;
  const items2 = [tmp2, icon];
  obj1[11] = items2;
  return closure_5(require(4721) /* PressableBase */.PressableOpacity, obj1);
});
const result = require("jsxProd").fileFinishedImporting("design/components/Navigator/native/HeaderActionButton.native.tsx");

export const HeaderActionButton = forwardRefResult;