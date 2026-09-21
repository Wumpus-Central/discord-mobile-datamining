// === Module 9517: useCanToggleCommunicationDisableOnUser ===

// Module 9517 (useCanToggleCommunicationDisableOnUser)
import Constants from "Constants" /* 1074 */;
import GuildRecord from "GuildRecord" /* 2059 */;
import PermissionUtilsAll from "PermissionUtils" /* 4400 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function canToggleCommunicationDisableOnUser(id, id2) {
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, GuildStore, PermissionStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const guild = obj2.getGuild(id);
  const user = obj.getUser(id2);
  let tmp6 = null != guild && null != user;
  if (tmp6) {
    const isNonUserBotResult = user.isNonUserBot();
    let tmp8 = !isNonUserBotResult;
    if (!isNonUserBotResult) {
      let canResult = isGuildOwner(guild, user);
      if (!canResult) {
        const obj4 = { permission: Permissions.ADMINISTRATOR, user, context: guild };
        canResult = PermissionUtilsAll.can(obj4);
      }
      let canManageUserResult = !canResult;
      if (!canResult) {
        canManageUserResult = obj3.canManageUser(Permissions.MODERATE_MEMBERS, user, guild);
      }
      tmp8 = canManageUserResult;
    }
    tmp6 = tmp8;
  }
  return tmp6;
}
const isGuildOwner = GuildRecord.isGuildOwner;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx");

export default function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [UserStore, GuildStore, PermissionStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    const items = [UserStore, GuildStore, PermissionStore];
    return canToggleCommunicationDisableOnUser(closure_0, closure_1, items);
  }, items1);
};
export { canToggleCommunicationDisableOnUser };