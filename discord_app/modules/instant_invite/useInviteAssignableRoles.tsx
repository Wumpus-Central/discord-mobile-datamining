// === Module 17637: useInviteAssignableRoles ===

// Module 17637 (useInviteAssignableRoles)
import closure_3 from "noop" /* 19 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 1985 */;
import closure_5 from "createGuildRoleRecordFromRust" /* 1984 */;
import closure_6 from "getUncachedChannelPermissions" /* 4120 */;
import closure_7 from "mergeGuildAvatar" /* 1921 */;
import { Permissions } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default function useInviteAssignableRoles(arg0) {
  const _require = arg0;
  const items = [closure_5, closure_7, closure_6];
  const items1 = [arg0];
  const stateFromStoresObject = _require(currentUser[6]).useStateFromStoresObject(items, () => {
    if (null != closure_0) {
      sortedRoles = closure_1_5.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    const obj = { sortedRoles, currentUser: closure_1_7.getCurrentUser(), canManageRoles: null };
    let canResult = null != tmp;
    if (canResult) {
      canResult = closure_1_6.can(closure_1_8.MANAGE_ROLES, tmp);
    }
    obj[2] = canResult;
    return obj;
  }, items1);
  let sortedRoles = stateFromStoresObject.sortedRoles;
  currentUser = stateFromStoresObject.currentUser;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  const items2 = [arg0, currentUser, canManageRoles, sortedRoles];
  return canManageRoles.useMemo(() => {
    if (null != highestRole) {
      if (null != currentUser) {
        if (canManageRoles) {
          highestRole = sortedRoles(currentUser[7]).getHighestRole(tmp, tmp2.id);
          return sortedRoles.filter((managed) => {
            const tmp = closure_2_4(managed);
            let tmp2 = !tmp;
            if (!tmp) {
              managed = managed.managed;
              let tmp3 = !managed;
              if (!managed) {
                const tags = managed.tags;
                let guild_connections;
                if (tags != null) {
                  guild_connections = tags.guild_connections;
                }
                let isRoleHigherResult = undefined === guild_connections;
                if (isRoleHigherResult) {
                  const obj = sortedRoles(currentUser[7]);
                  isRoleHigherResult = obj.isRoleHigher(closure_0, closure_1_2.id, closure_0, managed);
                }
                tmp3 = isRoleHigherResult;
              }
              tmp2 = tmp3;
            }
            return tmp2;
          });
        }
      }
    }
    return [];
  }, items2);
};