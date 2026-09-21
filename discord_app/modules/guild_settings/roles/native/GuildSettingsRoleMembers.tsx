// === Module 18070: GuildSettingsRoleMembers ===

// Module 18070 (GuildSettingsRoleMembers)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import _modDef5814 from "module_5814" /* 5814 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9855 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7373 */;

require = fn;
function onMembersLoadFail() {
  const obj2 = { key: "ERROR_OCCURRED_TRY_AGAIN", icon: _modDef5814, content: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.fEptJP);
  ToastActionCreatorsDefault.open(obj2);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 }, containerSearchBar: null, missingMembers: null, missingMembersText: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj2.containerSearchBar = { paddingBottom: nativeDefault.space.PX_12 };
let obj4 = { paddingBottom: nativeDefault.space.PX_12 };
obj2.missingMembers = { borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let obj5 = { borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
obj2.missingMembersText = { marginLeft: nativeDefault.space.PX_8, flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleMembers.tsx");

export default function GuildSettingsRoleMembers(guild) {
  guild = guild.guild;
  const role = guild.role;
  const locked = guild.locked;
  let formatted;
  let found;
  closure_6 = undefined;
  const tmp = closure_10();
  [str, tmp3] = formatted(found.useState(""), 2);
  const tmp2 = formatted(found.useState(""), 2);
  formatted = str.trim().toLowerCase();
  const str2 = str.trim();
  const queryGuildMembers = guild(locked[11]).useQueryGuildMembers(guild.id, formatted);
  let obj = guild(locked[11]);
  const guildRoleMembers = guild(locked[11]).useGuildRoleMembers(guild.id, role.id, onMembersLoadFail);
  found = guildRoleMembers.filter((name) => {
    formatted = name.name.toLowerCase();
    return formatted.includes(formatted);
  });
  let obj2 = guild(locked[11]);
  let obj3 = guild(locked[12]);
  const subscribeGuildMembers = obj3.useSubscribeGuildMembers({ [guild.id]: guildRoleMembers.map((id) => id.id) }, "GuildSettingsRoleMembers");
  const obj4 = { [guild.id]: guildRoleMembers.map((id) => id.id) };
  let items = [closure_6];
  const items1 = [guild.id, role.id];
  const items2 = [guild.id, , ];
  ({ id: arr5[1], name: arr5[2] } = role);
  const obj5 = guild(locked[13]);
  const callback = found.useCallback((name, arr) => {
    found = arr.filter((item) => item !== found.id);
    if (found.length !== arr.length) {
      let obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, confirmColor: null };
      let intl = guild(locked[10]).intl;
      obj2.title = intl.string(guild(locked[10]).t["7sFNfW"]);
      const intl2 = guild(locked[10]).intl;
      const obj3 = { username: name.name, roleName: found.name };
      obj2.body = intl2.format(guild(locked[10]).t.scORUv, obj3);
      const intl3 = guild(locked[10]).intl;
      obj2.cancelText = intl3.string(guild(locked[10]).t["ETE/oC"]);
      const intl4 = guild(locked[10]).intl;
      obj2.confirmText = intl4.string(guild(locked[10]).t.N86XcP);
      obj2.onConfirm = function onConfirm() {
        const items = [role.id];
        GuildSettingsActionCreatorsDefault.updateMemberRoles(guild.id, name.id, found, [], items).catch(() => {
          const obj2 = { key: "ERROR_OCCURRED_TRY_AGAIN", content: null, icon: null };
          const intl = name(1115).intl;
          obj2.content = intl.string(name(1115).t.fEptJP);
          obj2.icon = found(5814);
          found(4454).open(obj2);
        });
      };
      obj2.confirmColor = guild(locked[16]).ButtonColors.RED;
      role(locked[14]).show(obj2);
      let obj = role(locked[14]);
    }
  }, items2);
  const items3 = [guild, role];
  const items4 = [callback, guild.id, locked, found];
  const callback1 = found.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Add Role Members", location_page: "Role Settings", location_section: "Members" });
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequireImpl(18049, dependencyMap.paths), "role-add-members-" + guild.id + "-" + role.id, { guild, role });
  }, items3);
  closure_6 = found.useCallback((item) => {
    item = item.item;
    const index = item.index;
    const obj = { end: index === found.length - 1, start: null, guildId: null, userId: null, trailing: null };
    let tmp4 = 0 === index;
    if (tmp4) {
      tmp4 = locked;
    }
    obj.start = tmp4;
    obj.guildId = item.id;
    obj.userId = item.user.id;
    let tmpResult = null;
    if (!locked) {
      const obj2 = { icon: closure_1_8(guild(locked[23]).CircleXIcon, {}), accessibilityLabel: null, accessibilityRole: "button", onPress: null, variant: "icon-only" };
      const intl = guild(locked[10]).intl;
      obj2.accessibilityLabel = intl.string(guild(locked[10]).t["7sFNfW"]);
      obj2.onPress = function onPress() {
        return callback(item, item.roles);
      };
      tmpResult = closure_1_8(guild(locked[22]).IconButton, obj2);
    }
    obj.trailing = tmpResult;
    return closure_1_8(role(locked[21]), obj, item.id);
  }, items4);
  const obj6 = { style: tmp.container, children: null };
  const tmp9 = guild(locked[13]).useStateFromStores(items, () => {
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
  const items5 = [closure_8(callback, { style: tmp.containerSearchBar, children: closure_8(guild(locked[24]).SearchField, { onChange: tmp3 }) }), ];
  const obj8 = { style: guild.contentContainerStyle, children: null };
  let tmp12Result = null;
  if (tmp9) {
    const obj9 = { style: tmp.missingMembers, children: null };
    const obj10 = { color: role(tmp6[7]).colors.TEXT_LINK, size: "md" };
    const items6 = [closure_8(tmp5(tmp6[25]).CircleInformationIcon, obj10), ];
    const obj11 = { style: tmp.missingMembersText, variant: "text-sm/medium", children: null };
    let intl = tmp5(tmp6[10]).intl;
    obj11.children = intl.string(tmp5(tmp6[10]).t.RQxHZ8);
    items6[1] = closure_8(tmp5(tmp6[26]).Text, obj11);
    obj9.children = items6;
    tmp12Result = closure_9(tmp13, obj9);
  }
  const items7 = [tmp12Result, , ];
  let tmp14Result = null;
  if (!locked) {
    const obj12 = { arrow: true, label: null, icon: null, onPress: null, start: true, end: null };
    let intl2 = tmp5(tmp6[10]).intl;
    obj12.label = intl2.string(tmp5(tmp6[10]).t.ZYOK46);
    obj12.icon = closure_8(tmp5(tmp6[28]).CirclePlusIcon, { size: "md" });
    obj12.onPress = callback1;
    obj12.end = 0 === found.length;
    tmp14Result = closure_8(tmp5(tmp6[27]).TableRow, obj12);
  }
  items7[1] = tmp14Result;
  items7[2] = found.map((item, index) => closure_6({ item, index }));
  obj8.children = items7;
  items5[1] = closure_9(callback, obj8);
  obj6.children = items5;
  return closure_9(callback, obj6);
};