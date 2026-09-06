// === Module 9425: GuildSelector ===

// Module 9425 (GuildSelector)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { selectorGroup: { display: "flex", flexDirection: "column", gap: 8 }, select: null, label: null, error: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs };
createStyles.select = createStyles;
createStyles.label = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
const obj1 = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
createStyles.error = { color: nativeDefault.unsafe_rawColors.RED_400 };
createStyles = createStyles.createStyles(createStyles);
const GuildSelector = "GuildSelector";
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/GuildSelector.tsx");

export default function GuildSelector(disabled) {
  ({ error, selectedGuildId } = disabled);
  const onGuildChange = disabled.onGuildChange;
  const guilds = disabled.guilds;
  let tmp = createStyles();
  const items = [guilds, onGuildChange, selectedGuildId];
  const callback = noop.useCallback(() => {
    const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const intl = util.intl;
    obj.title = intl.string(util.t.oM4E1A);
    const found = guilds.filter((permissions) => guilds(closure_1_3[10]).has(permissions.permissions, constants.MANAGE_GUILD));
    obj.items = found.map((label) => ({ label: label.name, value: label.id }));
    obj.onItemSelect = function onItemSelect(arg0) {
      closure_1_1(arg0);
      onGuildChange(dependencyMap[6]).hideActionSheet(GuildSelector);
    };
    obj.selectedItem = selectedGuildId;
    obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), GuildSelector, obj);
    const tmp = asyncRequireImpl(9426, dependencyMap.paths);
  }, items);
  let found = guilds.find((id) => id.id === selectedGuildId);
  let obj = { style: tmp.selectorGroup, children: null };
  obj = { variant: "eyebrow", color: "text-default", children: null };
  let intl = selectedGuildId(1114).intl;
  obj.children = intl.string(selectedGuildId(1114).t["1DXFFd"]);
  const items1 = [closure_7(selectedGuildId(4556).Text, obj), , , ];
  let tmp6Result = null;
  if (null != error) {
    tmp6Result = null;
    if ("" !== error) {
      obj = { style: tmp.error, children: error };
      tmp6Result = closure_7(selectedGuildId(1178).LegacyText, obj);
    }
  }
  items1[1] = tmp6Result;
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = selectedGuildId(1114).intl;
    name = intl2.string(selectedGuildId(1114).t.oM4E1A);
  }
  items1[2] = closure_7(selectedGuildId(8593).FormRow, { label: name, disabled: disabled.disabled, trailing: closure_7(selectedGuildId(8593).FormRow.Arrow, {}), DEPRECATED_style: tmp.select, onPress: callback });
  const obj2 = { style: tmp.label, children: null };
  const intl3 = selectedGuildId(1114).intl;
  obj2.children = intl3.format(selectedGuildId(1114).t.t9Jm9o, {});
  items1[3] = closure_7(selectedGuildId(1178).LegacyText, obj2);
  obj.children = items1;
  return closure_8(View, obj);
};
export const useStyles = createStyles;