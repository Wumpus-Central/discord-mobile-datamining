// discord_app/components_native/common/ActionButton.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import styleProperties from "../../design/components/Button/native/ButtonHooks.native.tsx";
import IconButton from "../../design/components/Button/native/IconButton.native.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = { style: style.styles, children: null };
  obj = { icon: <style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />, onPress: jsx(IconButton.IconButton, { style: style.styles, children: null }), accessibilityLabel: null, variant: str, size: "sm" };
  ({ onPress: obj3[1], accessibilityLabel: obj3[2] } = style);
  return <View icon={<style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />} onPress={jsx(IconButton.IconButton, { style: style.styles, children: null })} accessibilityLabel={null} variant={str} size="sm" />;
};