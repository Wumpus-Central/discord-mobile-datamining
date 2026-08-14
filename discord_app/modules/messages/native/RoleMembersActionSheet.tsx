// discord_app/modules/messages/native/RoleMembersActionSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { EVERYONE_CHANNEL_ID } from "getMemberListId";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { header: null, headerText: null, roleDot: null, memberCount: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4, paddingTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { paddingTop: 0 };
createCacheKey[3] = { color: require("Themes").colors.TEXT_MUTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").colors.TEXT_MUTED };
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/messages/native/RoleMembersActionSheet.tsx");

export default function RoleMembersActionSheet(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let channelId = guildId.channelId;
  let dependencyMap;
  let stateFromStores;
  let c4;
  let c5;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let items = [guildId, roleId];
  const effect = stateFromStores.useEffect(() => {
    if (roleId !== obj.castGuildIdAsEveryoneGuildRoleId(guildId)) {
      const membersForRole = guildId(_undefined[9]).requestMembersForRole(guildId, roleId);
      const obj2 = guildId(_undefined[9]);
    }
  }, items);
  let obj = guildId(589);
  const items1 = [createGuildRoleRecordFromRust];
  const items2 = [guildId, roleId];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_7.getRole(guildId, roleId), items2);
  const items3 = [c5];
  let tmp6 = "dot" === guildId(589).useStateFromStores(items3, () => _undefined2.roleStyle);
  if (tmp6) {
    let colorString;
    if (stateFromStores != null) {
      colorString = stateFromStores.colorString;
    }
    tmp6 = null != colorString;
  }
  c4 = tmp6;
  let obj2 = guildId(589);
  const tmp3 = guildId;
  const tmp9 = roleId;
  const result = roleId(11).castGuildIdAsEveryoneGuildRoleId(guildId);
  const tmp11 = roleId(5418)(guildId);
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
    obj[2] = closure_8(tmp9(11051), obj);
    tmp16Result = tmp16(tmp3(5458).BottomSheet, obj);
    let tmp9Result = tmp9(11051);
  }
  return tmp16Result;
};