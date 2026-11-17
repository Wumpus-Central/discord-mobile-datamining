// === Module 17116: EditButton ===

// Module 17116 (EditButton)
import IconButton from "IconButton" /* 7999 */;
import _modDef9205 from "module_9205" /* 9205 */;
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
  const obj = { style, children: jsx(IconButton.IconButton, { icon: _modDef9205, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled }) };
  return <View style={style}>{jsx(IconButton.IconButton, { icon: _modDef9205, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled })}</View>;
};