// === Module 11842: RoleMembersActionSheet ===

// Module 11842 (RoleMembersActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4753 */;
import GuildRoleMemberActionCreators from "GuildRoleMemberActionCreators" /* 7376 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;

require = fn;
const View = fn(17).View;
const EVERYONE_CHANNEL_ID = fn(7523).EVERYONE_CHANNEL_ID;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, headerText: { flex: 1 }, roleDot: { paddingTop: 0 }, memberCount: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.memberCount = { color: nativeDefault.colors.TEXT_MUTED };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default function RoleMembersActionSheet(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let channelId = guildId.channelId;
  let stateFromStores;
  closure_4 = undefined;
  c5 = undefined;
  const tmp = closure_10();
  dependencyMap = tmp;
  let items = [guildId, roleId];
  const effect = stateFromStores.useEffect(() => {
    if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
      const membersForRole = GuildRoleMemberActionCreators.requestMembersForRole(guildId, roleId);
    }
    obj = SnowflakeUtilsDefault;
  }, items);
  const items1 = [GuildRoleStore];
  const items2 = [guildId, roleId];
  stateFromStores = guildId(504).useStateFromStores(items1, () => GuildRoleStore.getRole(guildId, roleId), items2);
  let obj = guildId(504);
  const tmp3 = guildId;
  const items3 = [c5];
  let tmp6 = "dot" === guildId(504).useStateFromStores(items3, () => _null.roleStyle);
  if (tmp6) {
    let colorString;
    if (stateFromStores != null) {
      colorString = stateFromStores.colorString;
    }
    tmp6 = null != colorString;
  }
  closure_4 = tmp6;
  let obj2 = guildId(504);
  const tmp9 = roleId;
  const result = roleId(11).castGuildIdAsEveryoneGuildRoleId(guildId);
  const tmp11 = roleId(7374)(guildId);
  let tmp12 = null;
  if (roleId !== result) {
    let tmp13;
    if (tmp11 != null) {
      tmp13 = tmp11[roleId];
    }
    if (tmp13 == null) {
      tmp13 = null;
    }
    tmp12 = tmp13;
  }
  c5 = tmp12;
  const items4 = [tmp6, stateFromStores, tmp12, tmp];
  let tmp16Result = null;
  if (null != stateFromStores) {
    let obj4 = { scrollable: true, header: tmp14, children: null };
    const obj5 = { guildId, channelId: null, roleId: null, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true };
    if (channelId == null) {
      channelId = EVERYONE_CHANNEL_ID;
    }
    obj5.channelId = channelId;
    obj5.roleId = roleId;
    obj4.children = closure_8(tmp9(11843), obj5);
    tmp16Result = closure_8(tmp3(7397).BottomSheet, obj4);
    let tmp9Result = tmp9(11843);
  }
  return tmp16Result;
};