// === Module 17018: useInviteAssignableRoles ===

// Module 17018 (useInviteAssignableRoles)
import noop from "noop" /* 19 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 1984 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default function useInviteAssignableRoles(arg0) {
  const _require = arg0;
  const items = [closure_5, closure_7, closure_6];
  const items1 = [arg0];
  const stateFromStoresObject = _require(currentUser[6]).useStateFromStoresObject(items, () => {
    if (null != id) {
      sortedRoles = closure_1_5.getSortedRoles(id.id);
    } else {
      sortedRoles = [];
    }
    const obj = { sortedRoles, currentUser: closure_1_7.getCurrentUser(), canManageRoles: null };
    let canResult = null != id;
    if (canResult) {
      canResult = closure_1_6.can(Permissions.MANAGE_ROLES, id);
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
          return sortedRoles.filter((item, index) => {
            const tmp = isEveryoneRole(item);
            let tmp2 = !tmp;
            if (!tmp) {
              const managed = item.managed;
              let tmp3 = !managed;
              if (!managed) {
                const tags = item.tags;
                let guild_connections;
                if (tags != null) {
                  guild_connections = tags.guild_connections;
                }
                let isRoleHigherResult = undefined === guild_connections;
                if (isRoleHigherResult) {
                  const obj = sortedRoles(currentUser[7]);
                  isRoleHigherResult = obj.isRoleHigher(closure_0, closure_1_2.id, closure_0, item);
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