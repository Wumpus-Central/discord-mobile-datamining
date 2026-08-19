// === Module 9911: ActionButton ===

// Module 9911 (ActionButton)
import noopAll from "noop" /* 19 */;
import styleProperties from "styleProperties" /* 4750 */;
import IconButton from "IconButton" /* 8035 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

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