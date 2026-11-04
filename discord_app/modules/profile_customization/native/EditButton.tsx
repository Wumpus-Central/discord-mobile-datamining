// === Module 16706: EditButton ===

// Module 16706 (EditButton)
import IconButton from "IconButton" /* 8168 */;
import _modDef8565 from "module_8565" /* 8565 */;
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
  const obj = { style, children: jsx(IconButton.IconButton, { icon: _modDef8565, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled }) };
  return <View style={style}>{jsx(IconButton.IconButton, { icon: _modDef8565, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled })}</View>;
};