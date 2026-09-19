// === Module 9538: GuildSelector ===

// Module 9538 (GuildSelector)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { selectorGroup: { display: "flex", flexDirection: "column", gap: 8 }, select: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs }, label: null, error: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs };
obj2.label = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
const obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
obj2.error = { color: nativeDefault.unsafe_rawColors.RED_400 };
const styles = createStyles.createStyles(obj2);
const GuildSelector = "GuildSelector";
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/GuildSelector.tsx");

export default function GuildSelector(disabled) {
  ({ error, selectedGuildId } = disabled);
  const onGuildChange = disabled.onGuildChange;
  const guilds = disabled.guilds;
  let tmp = styles();
  const items = [guilds, onGuildChange, selectedGuildId];
  const callback = noop.useCallback(() => {
    const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.oM4E1A);
    const found = guilds.filter((permissions) => guilds(closure_1_3[10]).has(permissions.permissions, constants.MANAGE_GUILD));
    obj2.items = found.map((label) => ({ label: label.name, value: label.id }));
    obj2.onItemSelect = function onItemSelect(arg0) {
      closure_1_1(arg0);
      onGuildChange(dependencyMap[6]).hideActionSheet(GuildSelector);
    };
    obj2.selectedItem = selectedGuildId;
    obj.openLazy(asyncRequireImpl(9539, dependencyMap.paths), GuildSelector, obj2);
    const tmp = asyncRequireImpl(9539, dependencyMap.paths);
  }, items);
  let found = guilds.find((id) => id.id === selectedGuildId);
  let obj = { style: tmp.selectorGroup, children: null };
  let obj2 = { variant: "eyebrow", color: "text-default", children: null };
  let intl = selectedGuildId(1115).intl;
  obj2.children = intl.string(selectedGuildId(1115).t["1DXFFd"]);
  const items1 = [closure_7(selectedGuildId(4752).Text, obj2), , , ];
  let tmp6Result = null;
  if (null != error) {
    tmp6Result = null;
    if ("" !== error) {
      const obj3 = { style: tmp.error, children: error };
      tmp6Result = closure_7(selectedGuildId(1177).LegacyText, obj3);
    }
  }
  items1[1] = tmp6Result;
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = selectedGuildId(1115).intl;
    name = intl2.string(selectedGuildId(1115).t.oM4E1A);
  }
  items1[2] = closure_7(selectedGuildId(8870).FormRow, { label: name, disabled: disabled.disabled, trailing: closure_7(selectedGuildId(8870).FormRow.Arrow, {}), DEPRECATED_style: tmp.select, onPress: callback });
  const obj5 = { style: tmp.label, children: null };
  const intl3 = selectedGuildId(1115).intl;
  obj5.children = intl3.format(selectedGuildId(1115).t.t9Jm9o, {});
  items1[3] = closure_7(selectedGuildId(1177).LegacyText, obj5);
  obj.children = items1;
  return closure_8(View, obj);
};
export const useStyles = styles;