// discord_app/components_native/common/ActionButton.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { styleProperties } from "../../design/components/Button/native/ButtonHooks.native.tsx";
import { IconButton } from "../../design/components/Button/native/IconButton.native.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = styleProperties;
  obj = { style: style.styles, children: null };
  obj = { icon: null, onPress: null, accessibilityLabel: null, variant: null, size: "sm" };
  obj[0] = jsx(style.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" });
  ({ onPress: obj3[1], accessibilityLabel: obj3[2] } = style);
  obj[3] = str;
  obj[1] = jsx(IconButton.IconButton, { icon: null, onPress: null, accessibilityLabel: null, variant: null, size: "sm" });
  return <View icon={null} onPress={null} accessibilityLabel={null} variant={null} size="sm" />;
};