// === Module 9268: ActionButton ===

// Module 9268 (ActionButton)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = require(4671) /* styleProperties */;
  obj = { style: style.styles, children: null };
  obj = { icon: null, onPress: null, accessibilityLabel: null, variant: null, size: "sm" };
  obj[0] = jsx(style.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" });
  ({ onPress: obj3[1], accessibilityLabel: obj3[2] } = style);
  obj[3] = str;
  obj[1] = jsx(require(7660) /* IconButton */.IconButton, { icon: null, onPress: null, accessibilityLabel: null, variant: null, size: "sm" });
  return <View icon={null} onPress={null} accessibilityLabel={null} variant={null} size="sm" />;
};