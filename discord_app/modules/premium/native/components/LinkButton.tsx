// discord_app/modules/premium/native/components/LinkButton.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createCacheKey.createStyles({ defaultContainerStyle: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }, disabledContainerStyle: { opacity: 0.5 } });
const result = require("createCacheKey").fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

export const LinkButton = function LinkButton(textColor) {
  let containerStyle;
  let disabled;
  let onPress;
  let text;
  let textStyle;
  let variant;
  ({ disabled, variant } = textColor);
  ({ onPress, text, containerStyle, textStyle } = textColor);
  if (variant === undefined) {
    variant = "text-xs/medium";
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-link";
  }
  const tmp = callback2();
  const items = [tmp.defaultContainerStyle, , ];
  let disabledContainerStyle = disabled;
  if (disabled) {
    disabledContainerStyle = tmp.disabledContainerStyle;
  }
  const obj = { style: items, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", activeOpacity: 0.2, disabled, onPress, children: null };
  items[1] = disabledContainerStyle;
  items[2] = containerStyle;
  const items1 = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { style: textStyle, variant, color: str, children: text }), textColor.iconRight];
  obj[6] = items1;
  return closure_3(require("../../../../design/void/Pressables/native/Pressables.tsx") /* PressableBase */.PressableOpacity, obj);
};