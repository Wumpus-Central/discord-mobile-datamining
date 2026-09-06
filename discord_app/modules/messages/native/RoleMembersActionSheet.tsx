// discord_app/modules/messages/native/RoleMembersActionSheet.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildRoleMemberActionCreators from "../../guild_settings/GuildRoleMemberActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";

require = fn;
const View = fn(17).View;
const EVERYONE_CHANNEL_ID = fn(7279).EVERYONE_CHANNEL_ID;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { header: null, headerText: null, roleDot: null, memberCount: null };
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.header = createStyles;
createStyles.headerText = { flex: 1 };
createStyles.roleDot = { paddingTop: 0 };
createStyles.memberCount = { color: nativeDefault.colors.TEXT_MUTED };
let closure_10 = createStyles.createStyles(createStyles);
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
  let obj = guildId(504);
  const items1 = [GuildRoleStore];
  const items2 = [guildId, roleId];
  stateFromStores = obj.useStateFromStores(items1, () => GuildRoleStore.getRole(guildId, roleId), items2);
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
  const tmp3 = guildId;
  const tmp9 = roleId;
  const result = roleId(11).castGuildIdAsEveryoneGuildRoleId(guildId);
  const tmp11 = roleId(7127)(guildId);
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
    obj = { scrollable: true, header: tmp14, children: null };
    obj = {
      guildId,
      channelId: null,
      roleId: null,
      headerShown: false,
      inActionSheet: true,
      disableStickySections: true,
      disableThemedGradient: true,
    };
    if (channelId == null) {
      channelId = EVERYONE_CHANNEL_ID;
    }
    obj.channelId = channelId;
    obj.roleId = roleId;
    obj.children = closure_8(tmp9(11588), obj);
    tmp16Result = closure_8(tmp3(7150).BottomSheet, obj);
    let tmp9Result = tmp9(11588);
  }
  return tmp16Result;
}
