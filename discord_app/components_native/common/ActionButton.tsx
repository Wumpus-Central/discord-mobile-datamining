// === Module 10896: ActionButton ===

// Module 10896 (ActionButton)
import ButtonHooks from "ButtonHooks" /* 4981 */;
import IconButton from "IconButton" /* 8097 */;
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
  let obj = { style: style.styles, children: null };
  obj = { icon: <style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />, onPress: null, accessibilityLabel: null, variant: str, size: "sm" };
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = style);
  obj.children = jsx(IconButton.IconButton, { icon: <style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />, onPress: null, accessibilityLabel: null, variant: str, size: "sm" });
  return <View icon={<style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />} onPress={null} accessibilityLabel={null} variant={str} size="sm" />;
};