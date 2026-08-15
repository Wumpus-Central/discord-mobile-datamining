// discord_app/modules/user_profile/native/UserProfileRolesCard.tsx
import initialize from "initialize";
import { View } from "Text";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import ME from "ME";
import jsxProd from "Divider";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function RoleDot(color) {
  color = color.color;
  const style = [createCacheKey().roleDot, ];
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
    name = undefined;
    colorString = undefined;
    c4 = undefined;
    c5 = undefined;
    tmp = jsxs();
    if (role.name.length <= MAX_VISUAL_ROLE_LENGTH) {
      name = role.name;
    } else {
      name = role.name;
      num = 0;
      tmp3 = globalThis;
      _HermesInternal = HermesInternal;
      str = "...";
      str2 = "";
      name = "" + require("noop") + "...";
    }
    if (colorString == null) {
      colorString = role.colorString;
    }
    tmp4 = role;
    tmp5 = name;
    obj = require("useRoleIcon");
    obj = { guildId, roleId: role.id, size: 12 };
    roleIcon = obj.useRoleIcon(obj);
    c4 = roleIcon;
    tags = role.tags;
    guild_connections = undefined;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    renderContent = function renderContent() {
      if (trackCommunicationDisabled) {
        let obj = { roleId: null, guildId: null, roleColor: null, size: 12, displayRoleIcon: false };
        obj[0] = role.id;
        obj[1] = guildId;
        let colorString;
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
        tmp3Result = tmp3(outer1_13, obj);
        tmp8 = tmp3;
        const tmp4 = outer1_13;
        const tmp5 = colorString;
      }
      obj = { children: null };
      const items = [tmp3Result, roleIcon, tmp8(role(name[17]).Text, { variant: "text-xs/medium", children: name })];
      obj[0] = items;
      return outer1_11(outer1_10, obj);
    };
    c5 = undefined !== guild_connections;
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
      tmp12 = c4;
      obj2 = { style: null, children: null };
      obj2[0] = tmp.role;
      num2 = 0;
      obj2[1] = renderContent();
      tmp11Result = tmp11(c4, obj2);
    }
    return tmp11Result;
  }
}
function RolesList(guildMemberRoleIds) {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  let obj = guildMemberRoleIds(589);
  const items = [createGuildRoleRecordFromRust];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const manyRoles = outer1_6.getManyRoles(guildId, guildMemberRoleIds);
    return manyRoles.sort(guildMemberRoleIds(outer1_2[20]).sortRolesByVerification);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.roleContainer;
    obj[1] = stateFromStoresArray.map((id) => outer1_9(outer1_14, { role: id, guildId }, id.id));
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
({ DEFAULT_ROLE_COLOR_HEX: error, MAX_VISUAL_ROLE_LENGTH: metroImportAll } = ME);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { roleContainer: { flexDirection: "row", gap: 8, flexWrap: "wrap" }, role: null, roleDot: null };
createCacheKey = { flexDirection: "row", alignItems: "center", columnGap: 4, padding: 6, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, borderRadius: require("Themes").radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderRadius: require("Themes").radii.round, height: 12, width: 12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: require("Themes").radii.round, height: 12, width: 12 };
let result = require("trackCommunicationDisabled").fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default function UserProfileRolesCard(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let obj = userId(589);
  const items = [trackCommunicationDisabled];
  const items1 = [userId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getMember(guildId, userId), items1);
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
    tmp4 = callback(guildId(7185), obj);
    const tmp7 = guildId(7185);
  }
  return tmp4;
};
export { RoleItem };