// === Module 5928: RoleDot ===

// Module 5928 (RoleDot)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "createGuildRoleRecordFromRust" /* 1985 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function RoleDot(color) {
  color = color.color;
  const style = [callback2().roleDot, ];
  if (color == null) {
    color = closure_7;
  }
  style[1] = { backgroundColor: color };
  return closure_9(View, { style });
}
class RoleItem {
  constructor(arg0) {
    role = global.role;
    guildId = global.guildId;
    colorString = global.color;
    closure_2 = undefined;
    colorString = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = closure_12();
    if (role.name.length <= MAX_VISUAL_ROLE_LENGTH) {
      name = role.name;
    } else {
      name = role.name;
      num = 0;
      tmp3 = globalThis;
      _HermesInternal = HermesInternal;
      str = "...";
      str2 = "";
      name = "" + require("module_0") + "...";
    }
    closure_2 = name;
    if (colorString == null) {
      colorString = role.colorString;
    }
    tmp4 = role;
    tmp5 = closure_2;
    obj = require("useRoleIcon");
    obj = { guildId, roleId: role.id, size: 12 };
    roleIcon = obj.useRoleIcon(obj);
    closure_4 = roleIcon;
    tags = role.tags;
    guild_connections = undefined;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    renderContent = function renderContent() {
      if (closure_5) {
        let obj = { roleId: null, guildId: null, roleColor: null, size: 12, displayRoleIcon: false };
        obj[0] = role.id;
        obj[1] = guildId;
        colorString = undefined;
        if (role != null) {
          colorString = role.colorString;
        }
        obj[2] = colorString;
        let tmp3Result = tmp3(guildId(name[16]), obj);
        let tmp8 = tmp3;
        const tmp11 = guildId(name[16]);
      } else {
        obj = { color: null };
        obj[0] = colorString;
        tmp3Result = tmp3(closure_1_13, obj);
        tmp8 = tmp3;
        const tmp4 = closure_1_13;
        const tmp5 = colorString;
      }
      obj = { children: null };
      const items = [tmp3Result, tmp8(role(name[17]).Text, { variant: "text-xs/medium", children: name }), roleIcon];
      obj[0] = items;
      return closure_1_11(closure_1_10, obj);
    };
    closure_5 = undefined !== guild_connections;
    DeveloperMode = require("explicitContentFromProto").DeveloperMode;
    setting = DeveloperMode.useSetting();
    obj3 = require("experiment");
    items = [, ];
    items[0] = role.id;
    items[1] = name;
    items1 = [, , ];
    items1[0] = role;
    items1[1] = name;
    items1[2] = roleIcon;
    callback = colorString.useCallback(() => {
      role(name[11]).copy(role.id);
      const obj = role(name[11]);
      role(name[12]).roleIdCopied(name);
    }, items);
    tmp11 = jsx;
    if (setting) {
      obj1 = { onPress: null, onLongPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, style: null, children: null };
      obj1[0] = callback;
      tmp14 = undefined;
      if (setting) {
        if (obj3.useExperiment({ location: "RoleItem" }, { autoTrackExposure: false }).tidaWebformEnabled) {
          tmp14 = tmp10;
        }
      }
      obj1[1] = tmp14;
      obj1[3] = name;
      intl = require("getSystemLocale").intl;
      obj1[4] = intl.string(require("getSystemLocale").t.sMsaLg);
      obj1[5] = tmp.role;
      num3 = 0;
      obj1[6] = renderContent();
      tmp11Result = tmp11(require("PressableBase").PressableHighlight, obj1);
    } else {
      tmp12 = closure_4;
      obj2 = { style: null, children: null };
      obj2[0] = tmp.role;
      num2 = 0;
      obj2[1] = renderContent();
      tmp11Result = tmp11(closure_4, obj2);
    }
    return tmp11Result;
  }
}
function RolesList(guildMemberRoleIds) {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  let obj = guildMemberRoleIds(589);
  const items = [closure_6];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const manyRoles = closure_1_6.getManyRoles(guildId, guildMemberRoleIds);
    return manyRoles.sort(guildMemberRoleIds(closure_1_2[20]).sortRolesByVerification);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.roleContainer;
    obj[1] = stateFromStoresArray.map((id) => closure_1_9(closure_1_14, { role: id, guildId }, id.id));
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
({ DEFAULT_ROLE_COLOR_HEX: error, MAX_VISUAL_ROLE_LENGTH: closure_8 } = ME);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" }, role: null, roleDot: null };
createCacheKey = { flexDirection: "row", alignItems: "center", columnGap: 4, padding: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderRadius: ThemesDefault.radii.round, height: 12, width: 12 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.round, height: 12, width: 12 };
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default function UserProfileRolesCard(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let obj = userId(589);
  const items = [closure_5];
  const items1 = [userId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getMember(guildId, userId), items1);
  let roles;
  if (stateFromStores != null) {
    roles = stateFromStores.roles;
  }
  if (roles == null) {
    roles = [];
  }
  let tmp4 = null;
  if (0 !== roles.length) {
    obj = { title: null, style: null, children: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t["LPJmL/"]);
    obj[1] = userId.style;
    obj = { guildId: null, guildMemberRoleIds: null };
    obj[0] = guildId;
    obj[1] = roles;
    obj[2] = callback(RolesList, obj);
    tmp4 = callback(guildId(5952), obj);
    const tmp7 = guildId(5952);
  }
  return tmp4;
};
export { RoleItem };