// === Module 11245: ActionButton ===

// Module 11245 (ActionButton)
import ButtonHooks from "ButtonHooks" /* 5279 */;
import IconButton from "IconButton" /* 8269 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  const obj2 = { style: style.styles, children: null };
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = style);
  obj2.children = jsx(IconButton.IconButton, { icon: <style.IconComponent color={ButtonHooks.useButtonTextColorStyles(str).color} size="sm" />, onPress: null, accessibilityLabel: null, variant: str, size: "sm" });
  return <View style={style.styles}>{null}</View>;
};