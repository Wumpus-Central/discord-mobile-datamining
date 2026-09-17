// discord_app/modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useA11yRolesNative from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = {
  cell: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.md,
    borderWidth: 2,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  },
  cellSelected: null,
};
let obj3 = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
obj2.cellSelected = { borderColor: nativeDefault.unsafe_rawColors.BRAND_500 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default function GuildSettingsServerTagPickerCell(accessibilityLabel) {
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = closure_4();
  let radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  if ("button" === accessibilityRole) {
    const obj2 = { accessibilityRole: "button", accessibilityState: null };
    const obj3 = { selected };
    obj2.accessibilityState = obj3;
    radioA11yNative = obj2;
  }
  const obj4 = {
    accessibilityRole: radioA11yNative.accessibilityRole,
    accessibilityState: radioA11yNative.accessibilityState,
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    onPress,
    style: null,
    children: null,
  };
  const items = [tmp.cell, ,];
  if (selected) {
    selected = tmp.cellSelected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  obj4.style = items;
  obj4.children = children;
  return (
    <Pressable
      accessibilityRole={radioA11yNative.accessibilityRole}
      accessibilityState={radioA11yNative.accessibilityState}
      accessibilityLabel={accessibilityLabel.accessibilityLabel}
      onPress={onPress}
      style={null}
    >
      {null}
    </Pressable>
  );
}
