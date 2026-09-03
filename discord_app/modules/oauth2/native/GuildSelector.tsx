// === Module 9380: styles ===

// Module 9380 (styles)
import ThemesDefault from "Themes" /* 709 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { Permissions } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { selectorGroup: { display: "flex", flexDirection: "column", gap: 8 }, select: null, label: null, error: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: ThemesDefault.radii.xs };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
const obj1 = { color: ThemesDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
createCacheKey[3] = { color: ThemesDefault.unsafe_rawColors.RED_400 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const GuildSelector = "GuildSelector";
let obj2 = { color: ThemesDefault.unsafe_rawColors.RED_400 };
const result = require("set").fileFinishedImporting("modules/oauth2/native/GuildSelector.tsx");

export default function GuildSelector(disabled) {
  ({ error, selectedGuildId } = disabled);
  const onGuildChange = disabled.onGuildChange;
  const guilds = disabled.guilds;
  const tmp = createCacheKey();
  const items = [guilds, onGuildChange, selectedGuildId];
  const callback = React.useCallback(() => {
    let obj = onGuildChange(closure_1_3[6]);
    obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = selectedGuildId(closure_1_3[9]).intl;
    obj[0] = intl.string(selectedGuildId(closure_1_3[9]).t.oM4E1A);
    const found = guilds.filter((permissions) => callback2(table[10]).has(permissions.permissions, constants.MANAGE_GUILD));
    obj[1] = found.map((label) => ({ label: label.name, value: label.id }));
    obj[2] = function onItemSelect(arg0) {
      callback(arg0);
      closure_1_1(closure_1_3[6]).hideActionSheet(closure_1_10);
    };
    obj[3] = selectedGuildId;
    obj.openLazy(selectedGuildId(closure_1_3[8])(closure_1_3[7], closure_1_3.paths), closure_1_10, obj);
  }, items);
  let found = guilds.find((id) => id.id === selectedGuildId);
  let obj = { style: tmp.selectorGroup, children: null };
  obj = { variant: "eyebrow", color: "text-default", children: null };
  let intl = selectedGuildId(1233).intl;
  obj[2] = intl.string(selectedGuildId(1233).t["1DXFFd"]);
  const items1 = [callback(selectedGuildId(4474).Text, obj), , , ];
  let tmp6Result = null;
  if (null != error) {
    tmp6Result = null;
    if ("" !== error) {
      obj = { style: null, children: null };
      obj[0] = tmp.error;
      obj[1] = error;
      tmp6Result = tmp6(tmp7(1296).LegacyText, obj);
    }
  }
  items1[1] = tmp6Result;
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = tmp7(1233).intl;
    name = intl2.string(tmp7(1233).t.oM4E1A);
  }
  items1[2] = callback(selectedGuildId(8376).FormRow, { label: name, disabled: disabled.disabled, trailing: callback(selectedGuildId(8376).FormRow.Arrow, {}), DEPRECATED_style: tmp.select, onPress: callback });
  const obj2 = { style: tmp.label, children: null };
  const intl3 = tmp7(1233).intl;
  obj2[1] = intl3.format(selectedGuildId(1233).t.t9Jm9o, {});
  items1[3] = callback(selectedGuildId(1296).LegacyText, obj2);
  obj[1] = items1;
  return closure_8(View, obj);
};
export const useStyles = createCacheKey;