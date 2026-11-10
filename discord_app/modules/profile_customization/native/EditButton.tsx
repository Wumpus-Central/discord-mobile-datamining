// === Module 16802: EditButton ===

// Module 16802 (EditButton)
import IconButton from "IconButton" /* 8102 */;
import _modDef8499 from "module_8499" /* 8499 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/EditButton.tsx");

export default function EditButton(disabled) {
  let str = disabled.variant;
  ({ onPress, accessibilityLabel, style } = disabled);
  if (str === undefined) {
    str = "primary-overlay";
  }
  const obj = { style, children: jsx(IconButton.IconButton, { icon: _modDef8499, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled }) };
  return <View style={style}>{jsx(IconButton.IconButton, { icon: _modDef8499, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled })}</View>;
};