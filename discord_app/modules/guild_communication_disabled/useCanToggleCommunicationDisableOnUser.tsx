// === Module 9403: useCanToggleCommunicationDisableOnUser ===

// Module 9403 (useCanToggleCommunicationDisableOnUser)
import Constants from "Constants" /* 1074 */;
import GuildRecord from "GuildRecord" /* 1975 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import size from "module_2" /* 2 */;

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
        obj = { permission: Permissions.ADMINISTRATOR, user, context: guild };
        canResult = PermissionUtilsAll.can(obj);
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