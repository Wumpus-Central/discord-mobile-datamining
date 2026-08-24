// discord_app/modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useCheckboxA11yNative from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import { Pressable } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { cell: null, cellSelected: null };
createCacheKey = { alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.md, borderWidth: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: ThemesDefault.colors.BORDER_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.unsafe_rawColors.BRAND_500 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderColor: ThemesDefault.unsafe_rawColors.BRAND_500 };
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default function GuildSettingsServerTagPickerCell(accessibilityLabel) {
  ({ size, selected, accessibilityRole } = accessibilityLabel);
  if (accessibilityRole === undefined) {
    accessibilityRole = "radio";
  }
  ({ onPress, children } = accessibilityLabel);
  const tmp = callback();
  let obj = useCheckboxA11yNative;
  let radioA11yNative = obj.useRadioA11yNative({ selected });
  if ("button" === accessibilityRole) {
    obj = { accessibilityRole: "button", accessibilityState: null };
    obj = { selected: null };
    obj[0] = selected;
    obj[1] = obj;
    radioA11yNative = obj;
  }
  obj1 = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityState: radioA11yNative.accessibilityState, accessibilityLabel: accessibilityLabel.accessibilityLabel, onPress, style: null, children: null };
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