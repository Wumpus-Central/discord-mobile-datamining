// === Module 17048: updateGuildRole ===

// Module 17048 (updateGuildRole)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function updateGuildRole(arg0) {
  const self = this;
  const apply = _updateGuildRole.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateGuildRole() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = tmp5;
              dependencyMap = tmp2;
              let callback;
              let callback2;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              ({ guildId: c0, roleId: c1, name: c2, permissions: c3, color: c4, hoist: c5, mentionable: c6 } = callback);
              closure_7 = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = c4.GUILD_ROLE(callback, callback2);
              let obj3 = { name: null, permissions: null, color: null, hoist: null, mentionable: null };
              obj3[0] = dependencyMap;
              obj3[1] = c3;
              callback2 = c4;
              if (c4 == null) {
                callback2 = 0;
              }
              obj3[2] = callback2;
              obj3[3] = c5;
              obj3[4] = c6;
              obj2[1] = obj3;
              obj3 = callback(530);
              obj2[3] = obj3.rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj2);
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_7 = arg1;
            obj = callback2(6113);
            const result = obj.checkGuildTemplateDirty(callback);
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = closure_7;
            return obj6;
          }
        } catch (tmp19) {
          c5 = tmp;
          throw tmp19;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx");

export default {
  startReordering(guildId) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId };
    obj.dispatch(obj);
  },
  stopReordering() {
    dispatcherDefault.wait(() => callback(table[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" }));
  },
  updateRoleOrder(arg0, to) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from: arg0, to };
    obj.dispatch(obj);
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    return updateGuildRole({ guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable });
  },
  startEditingPermissions(guildId, roleId) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId };
    obj.dispatch(obj);
  },
  stopEditingPermissions() {
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission };
    obj.dispatch(obj);
  },
  denyPermission(permission) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission };
    obj.dispatch(obj);
  },
  cancelPermissionChanges() {
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
  },
  savePermissionChanges(arg0) {
    ({ guildId, roleId, name, permissions, color, hoist, mentionable } = arg0);
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    const obj = dispatcherDefault;
    updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable }).then(() => callback(709).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" }), () => callback(709).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" }));
  }
};