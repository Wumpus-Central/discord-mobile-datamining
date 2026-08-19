// === Module 9821: styles ===

// Module 9821 (styles)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { Permissions } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: ThemesDefault.radii.xs };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
createCacheKey[3] = { color: ThemesDefault.unsafe_rawColors.RED_400 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const GuildSelector = "GuildSelector";
const result = require("obj132").fileFinishedImporting("modules/oauth2/native/GuildSelector.tsx");

export default function GuildSelector(disabled) {
  ({ error, selectedGuildId } = disabled);
  const onGuildChange = disabled.onGuildChange;
  const guilds = disabled.guilds;
  let tmp = createCacheKey();
  const items = [guilds, onGuildChange, selectedGuildId];
  const callback = React.useCallback(() => {
    onGuildChange(dependencyMap[6]);
    const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = selectedGuildId(dependencyMap[9]).intl;
    obj[0] = intl.string(selectedGuildId(dependencyMap[9]).t.oM4E1A);
    const found = guilds.filter((item, index) => callback2(table[10]).has(item.permissions, constants.MANAGE_GUILD));
    obj[1] = found.map((item, index) => ({ label: item.name, value: item.id }));
    obj[2] = function onItemSelect(arg0) {
      callback(arg0);
      onGuildChange(closure_1_3[6]).hideActionSheet(closure_1_10);
    };
    obj[3] = selectedGuildId;
    obj.openLazy(selectedGuildId(dependencyMap[8])(dependencyMap[7], dependencyMap.paths), GuildSelector, obj);
    const tmp = selectedGuildId(dependencyMap[8])(dependencyMap[7], dependencyMap.paths);
  }, items);
  let found = guilds.find((item, index) => item.id === selectedGuildId);
  let obj = { variant: "eyebrow", color: "text-default", children: null };
  let intl = selectedGuildId(1236).intl;
  obj[2] = intl.string(selectedGuildId(1236).t["1DXFFd"]);
  const items1 = [callback(selectedGuildId(4734).Text, obj), , , ];
  let tmp6Result = null;
  if (null != error) {
    tmp6Result = null;
    if ("" !== error) {
      obj = { style: null, children: null };
      obj[0] = tmp.error;
      obj[1] = error;
      tmp6Result = tmp6(selectedGuildId(1297).LegacyText, obj);
    }
  }
  items1[1] = tmp6Result;
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = selectedGuildId(1236).intl;
    name = intl2.string(selectedGuildId(1236).t.oM4E1A);
  }
  items1[2] = callback(selectedGuildId(8083).FormRow, { label: name, disabled: disabled.disabled, trailing: callback(selectedGuildId(8083).FormRow.Arrow, {}), DEPRECATED_style: tmp.select, onPress: callback });
  const obj2 = { style: tmp.label, children: null };
  const intl3 = selectedGuildId(1236).intl;
  obj2[1] = intl3.format(selectedGuildId(1236).t.t9Jm9o, {});
  items1[3] = callback(selectedGuildId(1297).LegacyText, obj2);
  obj[1] = items1;
  return callback(View, obj);
};
export const useStyles = createCacheKey;