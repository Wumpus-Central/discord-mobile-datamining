// === Module 11392: useCanToggleCommunicationDisableOnUser ===

// Module 11392 (useCanToggleCommunicationDisableOnUser)
import Constants from "Constants" /* 1085 */;
import GuildRecord from "GuildRecord" /* 2083 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function canToggleCommunicationDisableOnUser(id, id1) {
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, GuildStore, PermissionStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  guild = obj2.getGuild(id);
  const user = obj.getUser(id1);
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp8, tmp9);
  }
  const fn = function c() {
    const items = [UserStore, GuildStore, PermissionStore];
    return canToggleCommunicationDisableOnUser(closure_0, closure_1, items);
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [UserStore, GuildStore, PermissionStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    const items = [UserStore, GuildStore, PermissionStore];
    return canToggleCommunicationDisableOnUser(closure_0, closure_1, items);
  }, items1);
});
export { canToggleCommunicationDisableOnUser };