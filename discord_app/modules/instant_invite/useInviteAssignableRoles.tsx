// === Module 16660: useInviteAssignableRoles ===

// Module 16660 (useInviteAssignableRoles)
import noop from "noop";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Permissions } from "ME";

const require = arg1;
const result = require("createGuildRoleRecordFromRust").fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default function useInviteAssignableRoles(arg0) {
  const _require = arg0;
  const items = [createGuildRoleRecordFromRust, mergeGuildAvatar, getUncachedChannelPermissions];
  const items1 = [arg0];
  const stateFromStoresObject = _require(currentUser[6]).useStateFromStoresObject(items, () => {
    if (null != closure_0) {
      let sortedRoles = outer1_5.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    const obj = { sortedRoles, currentUser: outer1_7.getCurrentUser(), canManageRoles: null };
    let canResult = null != tmp;
    if (canResult) {
      canResult = outer1_6.can(outer1_8.MANAGE_ROLES, tmp);
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
            const tmp = outer2_4(managed);
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
                  isRoleHigherResult = obj.isRoleHigher(closure_0, outer1_2.id, closure_0, managed);
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