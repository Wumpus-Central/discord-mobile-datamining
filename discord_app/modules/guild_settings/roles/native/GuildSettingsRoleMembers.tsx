// === Module 17634: GuildSettingsRoleMembers ===

// Module 17634 (GuildSettingsRoleMembers)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import _modDef5597 from "module_5597" /* 5597 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7128 */;

require = fn;
function onMembersLoadFail() {
  const obj = { key: "ERROR_OCCURRED_TRY_AGAIN", icon: _modDef5597, content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.fEptJP);
  obj.open(obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, containerSearchBar: null, missingMembers: null, missingMembersText: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles.container = createStyles;
createStyles.containerSearchBar = { paddingBottom: nativeDefault.space.PX_12 };
let obj1 = { paddingBottom: nativeDefault.space.PX_12 };
createStyles.missingMembers = { borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let obj2 = { borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createStyles.missingMembersText = { marginLeft: nativeDefault.space.PX_8, flex: 1 };
let closure_10 = createStyles.createStyles(createStyles);
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
  let obj = guild(locked[11]);
  const queryGuildMembers = obj.useQueryGuildMembers(guild.id, formatted);
  let obj1 = guild(locked[11]);
  const guildRoleMembers = obj1.useGuildRoleMembers(guild.id, role.id, onMembersLoadFail);
  found = guildRoleMembers.filter((name) => {
    formatted = name.name.toLowerCase();
    return formatted.includes(formatted);
  });
  let obj2 = guild(locked[12]);
  obj = { [guild.id]: guildRoleMembers.map((id) => id.id) };
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(obj, "GuildSettingsRoleMembers");
  let obj4 = guild(locked[13]);
  let items = [closure_6];
  const items1 = [guild.id, role.id];
  const items2 = [guild.id, , ];
  ({ id: arr5[1], name: arr5[2] } = role);
  const str2 = str.trim();
  const callback = found.useCallback((name, arr) => {
    found = arr.filter((item) => item !== found.id);
    if (found.length !== arr.length) {
      role(locked[14]);
      let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, confirmColor: null };
      let intl = guild(locked[10]).intl;
      obj.title = intl.string(guild(locked[10]).t["7sFNfW"]);
      const intl2 = guild(locked[10]).intl;
      obj = { username: name.name, roleName: found.name };
      obj.body = intl2.format(guild(locked[10]).t.scORUv, obj);
      const intl3 = guild(locked[10]).intl;
      obj.cancelText = intl3.string(guild(locked[10]).t["ETE/oC"]);
      const intl4 = guild(locked[10]).intl;
      obj.confirmText = intl4.string(guild(locked[10]).t.N86XcP);
      obj.onConfirm = function onConfirm() {
        const items = [role.id];
        GuildSettingsActionCreatorsDefault.updateMemberRoles(guild.id, name.id, found, [], items).catch(() => {
          found(4259);
          const obj = { key: "ERROR_OCCURRED_TRY_AGAIN", content: null, icon: null };
          const intl = name(1114).intl;
          obj.content = intl.string(name(1114).t.fEptJP);
          obj.icon = found(5597);
          obj.open(obj);
        });
      };
      obj.confirmColor = guild(locked[16]).ButtonColors.RED;
      obj.show(obj);
    }
  }, items2);
  const items3 = [guild, role];
  const items4 = [callback, guild.id, locked, found];
  const callback1 = found.useCallback(() => {
    let obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Add Role Members", location_page: "Role Settings", location_section: "Members" });
    const obj2 = ActionSheetActionCreatorsDefault;
    obj = { guild, role };
    obj2.openLazy(asyncRequireImpl(17615, dependencyMap.paths), "role-add-members-" + guild.id + "-" + role.id, obj);
  }, items3);
  closure_6 = found.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = { end: index === found.length - 1, start: null, guildId: null, userId: null, trailing: null };
    let tmp4 = 0 === index;
    if (tmp4) {
      tmp4 = locked;
    }
    obj.start = tmp4;
    obj.guildId = item.id;
    obj.userId = item.user.id;
    let tmpResult = null;
    if (!locked) {
      obj = { icon: closure_1_8(guild(locked[23]).CircleXIcon, {}), accessibilityLabel: null, accessibilityRole: "button", onPress: null, variant: "icon-only" };
      const intl = guild(locked[10]).intl;
      obj.accessibilityLabel = intl.string(guild(locked[10]).t["7sFNfW"]);
      obj.onPress = function onPress() {
        return callback(item, item.roles);
      };
      tmpResult = closure_1_8(guild(locked[22]).IconButton, obj);
    }
    obj.trailing = tmpResult;
    return closure_1_8(role(locked[21]), obj, item.id);
  }, items4);
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.containerSearchBar, children: closure_8(guild(locked[24]).SearchField, { onChange: tmp3 }) };
  const items5 = [closure_8(callback, obj1), ];
  obj2 = { style: guild.contentContainerStyle, children: null };
  let tmp12Result = null;
  if (tmp9) {
    const obj3 = { style: tmp.missingMembers, children: null };
    obj4 = { color: role(tmp6[7]).colors.TEXT_LINK, size: "md" };
    const items6 = [closure_8(tmp5(tmp6[25]).CircleInformationIcon, obj4), ];
    const obj5 = { style: tmp.missingMembersText, variant: "text-sm/medium", children: null };
    let intl = tmp5(tmp6[10]).intl;
    obj5.children = intl.string(tmp5(tmp6[10]).t.RQxHZ8);
    items6[1] = closure_8(tmp5(tmp6[26]).Text, obj5);
    obj3.children = items6;
    tmp12Result = closure_9(tmp13, obj3);
  }
  const items7 = [tmp12Result, , ];
  let tmp14Result = null;
  if (!locked) {
    const obj6 = { arrow: true, label: null, icon: null, onPress: null, start: true, end: null };
    let intl2 = tmp5(tmp6[10]).intl;
    obj6.label = intl2.string(tmp5(tmp6[10]).t.ZYOK46);
    obj6.icon = closure_8(tmp5(tmp6[28]).CirclePlusIcon, { size: "md" });
    obj6.onPress = callback1;
    obj6.end = 0 === found.length;
    tmp14Result = closure_8(tmp5(tmp6[27]).TableRow, obj6);
  }
  items7[1] = tmp14Result;
  items7[2] = found.map((item, index) => closure_6({ item, index }));
  obj2.children = items7;
  items5[1] = closure_9(callback, obj2);
  obj.children = items5;
  return closure_9(callback, obj);
};