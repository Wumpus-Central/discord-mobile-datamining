// === Module 10784: RoleMembersActionSheet ===

// Module 10784 (RoleMembersActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { EVERYONE_CHANNEL_ID } from "getMemberListId" /* 7249 */;
import closure_7 from "createGuildRoleRecordFromRust" /* 1983 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { header: null, headerText: null, roleDot: null, memberCount: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { paddingTop: 0 };
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_MUTED };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.colors.TEXT_MUTED };
let result = require("set").fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default function RoleMembersActionSheet(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let channelId = guildId.channelId;
  dependencyMap = undefined;
  let stateFromStores;
  closure_4 = undefined;
  c5 = undefined;
  const tmp = callback();
  dependencyMap = tmp;
  let items = [guildId, roleId];
  const effect = stateFromStores.useEffect(() => {
    if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
      const membersForRole = guildId(header[9]).requestMembersForRole(guildId, roleId);
      const obj2 = guildId(header[9]);
    }
  }, items);
  let obj = guildId(589);
  const items1 = [closure_7];
  const items2 = [guildId, roleId];
  stateFromStores = obj.useStateFromStores(items1, () => closure_1_7.getRole(guildId, roleId), items2);
  const items3 = [c5];
  let tmp6 = "dot" === guildId(589).useStateFromStores(items3, () => _null.roleStyle);
  if (tmp6) {
    let colorString;
    if (stateFromStores != null) {
      colorString = stateFromStores.colorString;
    }
    tmp6 = null != colorString;
  }
  closure_4 = tmp6;
  let obj2 = guildId(589);
  const tmp3 = guildId;
  const tmp9 = roleId;
  const result = roleId(11).castGuildIdAsEveryoneGuildRoleId(guildId);
  const tmp11 = roleId(6927)(guildId);
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
    obj = { scrollable: true, header: null, children: null };
    obj[1] = tmp14;
    obj = { guildId: null, channelId: null, roleId: null, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true };
    obj[0] = guildId;
    if (channelId == null) {
      channelId = EVERYONE_CHANNEL_ID;
    }
    obj[1] = channelId;
    obj[2] = roleId;
    obj[2] = closure_8(tmp9(10785), obj);
    tmp16Result = tmp16(tmp3(6950).BottomSheet, obj);
    let tmp9Result = tmp9(10785);
  }
  return tmp16Result;
};