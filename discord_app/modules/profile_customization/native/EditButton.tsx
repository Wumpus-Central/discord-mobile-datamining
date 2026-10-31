// discord_app/modules/profile_customization/native/EditButton.tsx
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef8424 from "../../../../_runtime/metro/08424__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const obj = {
    style,
    children: jsx(IconButton.IconButton, {
      icon: _modDef8424,
      variant: str,
      size: "sm",
      onPress,
      accessibilityLabel,
      disabled: disabled.disabled,
    }),
  };
  return (
    <View style={style}>
      {jsx(IconButton.IconButton, {
        icon: _modDef8424,
        variant: str,
        size: "sm",
        onPress,
        accessibilityLabel,
        disabled: disabled.disabled,
      })}
    </View>
  );
}
