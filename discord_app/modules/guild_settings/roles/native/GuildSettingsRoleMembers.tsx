// === Module 17851: GuildSettingsRoleMembers ===

// Module 17851 (GuildSettingsRoleMembers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 4813 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6630 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let item;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function onMembersLoadFail() {
  let intl;
  const tmp = ToastActionCreatorsDefault;
  const open = tmp.open;
  const obj = { key: "ERROR_OCCURRED_TRY_AGAIN", icon: AssetRegistryDefault, content: intl.string(intl5.t.fEptJP) };
  intl = intl5.intl;
  open(obj);
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSearchBar: obj3, missingMembers: obj4, missingMembersText: obj5 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_12 };
obj4 = { borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
obj5 = { marginLeft: nativeDefault.space.PX_8, flex: 1 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleMembers.tsx");

export default function GuildSettingsRoleMembers(guild) {
  let id;
  let intl;
  let intl2;
  let items5;
  let items6;
  let items7;
  let str;
  let tmp3;
  guild = guild.guild;
  const role = guild.role;
  const locked = guild.locked;
  let formatted;
  let found;
  let closure_6;
  const contentContainerStyle = guild.contentContainerStyle;
  const tmp = closure_10();
  const tmp2 = formatted(found.useState(""), 2);
  [str, tmp3] = tmp2;
  const str2 = str.trim();
  formatted = str2.toLowerCase();
  let obj = guild(locked[11]);
  const queryGuildMembers = obj.useQueryGuildMembers(guild.id, formatted);
  let obj2 = guild(locked[11]);
  const guildRoleMembers = obj2.useGuildRoleMembers(guild.id, role.id, onMembersLoadFail);
  found = guildRoleMembers.filter((name) => {
    const str = name.name;
    formatted = str.toLowerCase();
    return formatted.includes(formatted);
  });
  const obj3 = guild(locked[12]);
  const obj4 = { [id]: guildRoleMembers.map((id) => id.id) };
  id = guild.id;
  const subscribeGuildMembers = obj3.useSubscribeGuildMembers(obj4, "GuildSettingsRoleMembers");
  let items = [closure_6];
  const items1 = [guild.id, role.id];
  const items2 = [guild.id, , ];
  ({ id: arr5[1], name: arr5[2] } = role);
  const obj5 = guild(locked[13]);
  const tmp9 = obj5.useStateFromStores(items, () => {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guild.id);
    let num;
    if (roleMemberCount != null) {
      num = roleMemberCount[role.id];
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items1) > guildRoleMembers.length;
  const callback = found.useCallback((name, arr) => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    found = arr.filter((item) => item !== found.id);
    if (found.length !== arr.length) {
      let obj = {
        title: intl.string(guild(locked[10]).t["7sFNfW"]),
        body: intl2.format(guild(locked[10]).t.scORUv, obj2),
        cancelText: intl3.string(guild(locked[10]).t["ETE/oC"]),
        confirmText: intl4.string(guild(locked[10]).t.N86XcP),
        onConfirm() {
            let obj = GuildSettingsActionCreatorsDefault;
            const items = [role.id];
            const updateMemberRolesResult = obj.updateMemberRoles(guild.id, name.id, found, [], items);
            updateMemberRolesResult.catch(() => {
              let intl;
              const obj = { key: "ERROR_OCCURRED_TRY_AGAIN", content: intl.string(name(closure_1_2[10]).t.fEptJP), icon: found(closure_1_2[9]) };
              const open = found(closure_1_2[8]).open;
              found(closure_1_2[8]);
              intl = name(closure_1_2[10]).intl;
              open(obj);
            });
          },
        hideActionSheet: false,
        confirmColor: guild(locked[16]).ButtonColors.RED
      };
      const show = role(locked[14]).show;
      role(locked[14]);
      intl = guild(locked[10]).intl;
      intl2 = guild(locked[10]).intl;
      obj2 = { username: name.name, roleName: found.name };
      intl3 = guild(locked[10]).intl;
      intl4 = guild(locked[10]).intl;
      show(obj);
    }
  }, items2);
  const items3 = [guild, role];
  const items4 = [callback, guild.id, locked, found];
  const callback1 = found.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Add Role Members", location_page: "Role Settings", location_section: "Members" });
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj2 = { guild, role };
    const tmp3 = asyncRequire(17832, dependencyMap.paths);
    openLazy(tmp3, "role-add-members-" + guild.id + "-" + role.id, obj2);
  }, items3);
  closure_6 = found.useCallback((item) => {
    let intl;
    let tmp4;
    let tmpResult;
    item = item.item;
    const index = item.index;
    const obj = { end: index === found.length - 1, start: tmp4, guildId: item.id, userId: item.user.id, trailing: tmpResult };
    tmp4 = 0 === index;
    const tmp3 = role(locked[21]);
    if (tmp4) {
      tmp4 = locked;
    }
    tmpResult = null;
    if (!locked) {
      const obj2 = {
        icon: closure_1_8(guild(locked[23]).CircleXIcon, {}),
        accessibilityLabel: intl.string(guild(locked[10]).t["7sFNfW"]),
        accessibilityRole: "button",
        onPress() {
            return callback(item, item.roles);
          },
        variant: "icon-only"
      };
      const IconButton = guild(locked[22]).IconButton;
      intl = guild(locked[10]).intl;
      tmpResult = closure_1_8(IconButton, obj2);
    }
    return closure_1_8(tmp3, obj, item.id);
  }, items4);
  const obj6 = { style: tmp.container, children: items5 };
  items5 = [, ];
  const obj7 = { style: tmp.containerSearchBar, children: closure_8(guild(locked[24]).SearchField, { onChange: tmp3 }) };
  items5[0] = closure_8(callback, obj7);
  let tmp12Result = null;
  const obj8 = { style: contentContainerStyle, children: items7 };
  if (tmp9) {
    const obj9 = { style: tmp.missingMembers, children: items6 };
    const obj10 = { color: role(locked[7]).colors.TEXT_LINK, size: "md" };
    const CircleInformationIcon = tmp5(tmp6[25]).CircleInformationIcon;
    items6 = [closure_8(CircleInformationIcon, obj10), ];
    const obj11 = { style: tmp.missingMembersText, variant: "text-sm/medium", children: intl.string(guild(locked[10]).t.RQxHZ8) };
    const Text = tmp5(tmp6[26]).Text;
    intl = tmp5(tmp6[10]).intl;
    items6[1] = closure_8(Text, obj11);
    tmp12Result = closure_9(tmp13, obj9);
  }
  items7 = [tmp12Result, , ];
  let tmp14Result = null;
  if (!locked) {
    const obj12 = { arrow: true, label: intl2.string(guild(locked[10]).t.ZYOK46), icon: closure_8(guild(locked[28]).CirclePlusIcon, { size: "md" }), onPress: callback1, start: true, end: 0 === found.length };
    const TableRow = tmp5(tmp6[27]).TableRow;
    intl2 = tmp5(tmp6[10]).intl;
    let num = 0;
    tmp14Result = closure_8(TableRow, obj12);
  }
  items7[1] = tmp14Result;
  items7[2] = found.map((item, index) => {
    const obj = { item, index };
    return closure_6(obj);
  });
  items5[1] = closure_9(callback, obj8);
  return closure_9(callback, obj6);
};