// === Module 20079: CommandPermissionLockout ===

// Module 20079 (CommandPermissionLockout)
import util from "util" /* 1112 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8527 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;

require = fn;
const InvalidAction = { REMOVE_SELF: 0, [0]: "REMOVE_SELF", REMOVE_ROLE: 1, [1]: "REMOVE_ROLE", DENY_ROLE: 2, [2]: "DENY_ROLE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/CommandPermissionLockout.tsx");

export { InvalidAction };
export function getCommandPermissionLockout(guildId, editedTargetPermissions, arg2, arg3) {
  if (0 !== arg3.length) {
    if (editedTargetPermissions[arg3[0]].type === ApplicationCommandTypes.ApplicationCommandPermissionType.USER) {
      const obj2 = { action: obj.REMOVE_SELF, name: null };
      obj = obj2;
    } else {
      obj = { action: null, name: null };
      obj.action = obj.REMOVE_ROLE;
      const id = tmp5.id;
      let str3 = "@everyone";
      if (!tmp6Result.isEveryoneRoleId(guildId, id)) {
        const role = GuildRoleStore.getRole(guildId, id);
        let str4;
        if (role != null) {
          str4 = role.name;
        }
        if (str4 == null) {
          str4 = "role";
        }
        str3 = str4;
      }
      obj.name = str3;
      tmp6Result = ChannelPermissionsUtils;
    }
    return obj;
  } else {
    const _Object = Object;
    const obj3 = { action: obj.DENY_ROLE, name: null };
    const id2 = Object.values(arg2)[0].id;
    let str2 = "@everyone";
    if (!obj5.isEveryoneRoleId(guildId, id2)) {
      const role1 = GuildRoleStore.getRole(guildId, id2);
      let str;
      if (role1 != null) {
        str = role1.name;
      }
      if (str == null) {
        str = "role";
      }
      str2 = str;
    }
    obj3.name = str2;
    return obj3;
  }
}
export function getCommandPermissionLockoutMessage(arg0, name) {
  if (obj.REMOVE_SELF === arg0) {
    const intl3 = util.intl;
    return intl3.format(util.t["/S6f5y"], {});
  } else if (tmp.REMOVE_ROLE === arg0) {
    const intl2 = util.intl;
    const obj2 = { name };
    return intl2.format(util.t.EBhv4R, obj2);
  } else if (tmp.DENY_ROLE === arg0) {
    const intl = util.intl;
    obj = { name };
    return intl.format(util.t["59Dbw0"], obj);
  }
}