// discord_app/modules/instant_invite/useInviteAssignableRoles.tsx
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const isEveryoneRole = fn(2107).isEveryoneRole;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore, UserStore, PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class R {
          constructor() {
            tmp = closure_0;
            if (null != closure_0) {
              tmp2 = closure_5;
              sortedRoles = closure_5.getSortedRoles(tmp.id);
            } else {
              sortedRoles = [];
            }
            obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
            canResult = null != tmp;
            if (canResult) {
              tmp4 = closure_6;
              tmp5 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
            }
            obj.canManageRoles = canResult;
            return obj;
          }
        }
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = R;
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        class R {
          constructor() {
            tmp = closure_0;
            if (null != closure_0) {
              tmp2 = closure_5;
              sortedRoles = closure_5.getSortedRoles(tmp.id);
            } else {
              sortedRoles = [];
            }
            obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
            canResult = null != tmp;
            if (canResult) {
              tmp4 = closure_6;
              tmp5 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
            }
            obj.canManageRoles = canResult;
            return obj;
          }
        }
        tmp9 = cResult[3];
      }
      let obj = require("c");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, R, tmp9);
      ({ sortedRoles, currentUser } = stateFromStoresObject);
      if (null != arg0) {
        class R {
          constructor() {
            tmp = closure_0;
            if (null != closure_0) {
              tmp2 = closure_5;
              sortedRoles = closure_5.getSortedRoles(tmp.id);
            } else {
              sortedRoles = [];
            }
            obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
            canResult = null != tmp;
            if (canResult) {
              tmp4 = closure_6;
              tmp5 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
            }
            obj.canManageRoles = canResult;
            return obj;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            tmp = closure_0;
            if (null != closure_0) {
              tmp2 = closure_5;
              sortedRoles = closure_5.getSortedRoles(tmp.id);
            } else {
              sortedRoles = [];
            }
            obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
            canResult = null != tmp;
            if (canResult) {
              tmp4 = closure_6;
              tmp5 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
            }
            obj.canManageRoles = canResult;
            return obj;
          }
        }
        cResult[4] = tmp12;
      } else {
        class R {
          constructor() {
            tmp = closure_0;
            if (null != closure_0) {
              tmp2 = closure_5;
              sortedRoles = closure_5.getSortedRoles(tmp.id);
            } else {
              sortedRoles = [];
            }
            obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
            canResult = null != tmp;
            if (canResult) {
              tmp4 = closure_6;
              tmp5 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
            }
            obj.canManageRoles = canResult;
            return obj;
          }
        }
      }
      return tmp12;
    }
  : (arg0) => {
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
              highestRole = sortedRoles(currentUser[9]).getHighestRole(tmp, tmp2.id);
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
    };
