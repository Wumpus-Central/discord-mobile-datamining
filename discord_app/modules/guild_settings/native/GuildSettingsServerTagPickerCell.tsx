// discord_app/modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useA11yRolesNative from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { cell: null, cellSelected: null };
createStyles = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
createStyles.cell = createStyles;
createStyles.cellSelected = { borderColor: nativeDefault.unsafe_rawColors.BRAND_500 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default function GuildSettingsServerTagPickerCell(accessibilityLabel) {
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = closure_4();
  let obj = useA11yRolesNative;
  let radioA11yNative = obj.useRadioA11yNative({ selected });
  if ("button" === accessibilityRole) {
    obj = { accessibilityRole: "button", accessibilityState: null };
    obj = { selected };
    obj.accessibilityState = obj;
    radioA11yNative = obj;
  }
  const obj1 = {
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
  obj1.style = items;
  obj1.children = children;
  return (
    <Pressable
      accessibilityRole={radioA11yNative.accessibilityRole}
      accessibilityState={radioA11yNative.accessibilityState}
      accessibilityLabel={arg0.accessibilityLabel}
      onPress={onPress}
      style={null}
    >
      {null}
    </Pressable>
  );
}
