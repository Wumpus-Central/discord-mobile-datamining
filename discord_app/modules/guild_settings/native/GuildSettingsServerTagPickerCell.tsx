// discord_app/modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx
import "noop";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { cell: null, cellSelected: null };
createCacheKey = { alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.md, borderWidth: 2, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderColor: require("Themes").colors.BORDER_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: require("Themes").unsafe_rawColors.BRAND_500 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderColor: require("Themes").unsafe_rawColors.BRAND_500 };
const result = require("jsxProd").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default function GuildSettingsServerTagPickerCell(accessibilityLabel) {
  let accessibilityRole;
  let children;
  let onPress;
  let selected;
  let size;
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = createCacheKey();
  let obj = require("../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx") /* useCheckboxA11yNative */;
  let radioA11yNative = obj.useRadioA11yNative({ selected });
  if ("button" === accessibilityRole) {
    obj = { accessibilityRole: "button", accessibilityState: null };
    obj = { selected: null };
    obj[0] = selected;
    obj[1] = obj;
    radioA11yNative = obj;
  }
  const obj1 = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityState: radioA11yNative.accessibilityState, accessibilityLabel: accessibilityLabel.accessibilityLabel, onPress, style: null, children: null };
  const items = [tmp.cell, , ];
  if (selected) {
    selected = tmp.cellSelected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  obj1[4] = items;
  obj1[5] = children;
  return <Pressable accessibilityRole={radioA11yNative.accessibilityRole} accessibilityState={radioA11yNative.accessibilityState} accessibilityLabel={arg0.accessibilityLabel} onPress={onPress} style={null}>{null}</Pressable>;
};