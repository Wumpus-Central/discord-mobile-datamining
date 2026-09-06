// discord_app/modules/instant_invite/useInviteAssignableRoles.tsx
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
const isEveryoneRole = fn(2016).isEveryoneRole;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default function useInviteAssignableRoles(arg0) {
  _require = arg0;
  const items = [GuildRoleStore, UserStore, PermissionStore];
  const items1 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      if (null != id) {
        sortedRoles = GuildRoleStore.getSortedRoles(id.id);
      } else {
        sortedRoles = [];
      }
      const obj = { sortedRoles, currentUser: UserStore.getCurrentUser(), canManageRoles: null };
      let canResult = null != id;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_ROLES, id);
      }
      obj.canManageRoles = canResult;
      return obj;
    },
    items1,
  );
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
            const tmp = isEveryoneRole(managed);
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
                  const obj = PermissionUtilsAll;
                  isRoleHigherResult = obj.isRoleHigher(closure_0, currentUser.id, closure_0, managed);
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
}
