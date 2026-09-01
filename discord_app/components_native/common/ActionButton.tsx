// discord_app/components_native/common/ActionButton.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import styleProperties from "../../design/components/Button/native/ButtonHooks.native.tsx";
import IconButton from "../../design/components/Button/native/IconButton.native.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = styleProperties;
  obj = { style: style.styles, children: null };
  obj = {
    icon: jsx(style.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" }),
    onPress: jsx(IconButton.IconButton, { style: style.styles, children: null }),
    accessibilityLabel: null,
    variant: str,
    size: "sm",
  };
  ({ onPress: obj3[1], accessibilityLabel: obj3[2] } = style);
  return (
    <View
      icon={jsx(arg0.IconComponent, { color: obj.useButtonTextColorStyles(str).color, size: "sm" })}
      onPress={jsx(IconButton.IconButton, { style: arg0.styles, children: null })}
      accessibilityLabel={null}
      variant={str}
      size="sm"
    />
  );
}
