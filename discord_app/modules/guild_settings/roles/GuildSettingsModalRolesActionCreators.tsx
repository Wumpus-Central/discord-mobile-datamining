// === Module 17834: GuildSettingsModalRolesActionCreators ===

// Module 17834 (GuildSettingsModalRolesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

function updateGuildRole() {
  return obj(...arguments);
}
let obj = function _updateGuildRole() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let hoist;
    let obj4;
    let obj6;
    let value;
    let closure_0 = arg0;
    if (hoist === 2) {
      hoist = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let color;
        let name;
        let permissions;
        let mentionable;
        hoist = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            hoist = 3;
            throw value;
          } else if (arg0 === 2) {
            hoist = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            c0 = undefined;
            color = undefined;
            name = undefined;
            permissions = undefined;
            mentionable = undefined;
            ({ guildId: c0, roleId: c1, name: c2, permissions: c3, color: c4, hoist: c5, mentionable: c6 } = closure_0);
            value = undefined;
            c4 = 1;
            hoist = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            hoist = 3;
            throw value;
          } else if (arg0 === 2) {
            hoist = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const HTTP = closure_131_0(closure_131_2[2]).HTTP;
            const request = { url: closure_131_4.GUILD_ROLE(c0, color), body: obj6, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
            const patch = HTTP.patch;
            obj6 = { name, permissions, color, hoist, mentionable };
            color = c4;
            if (c4 == null) {
              color = 0;
            }
            obj4 = closure_131_0(closure_131_2[2]);
            c4 = 2;
            hoist = 1;
            const obj7 = { value: patch(request), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          hoist = 3;
          throw value;
        } else if (arg0 === 2) {
          hoist = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          obj = closure_131_1(closure_131_2[3]);
          const result = obj.checkGuildTemplateDirty(c0);
          hoist = 3;
          const obj9 = { value, done: true };
          return obj9;
        }
      } catch (tmp18) {
        hoist = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
obj = {
  startReordering(guildId) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId };
    obj.dispatch(obj2);
  },
  stopReordering() {
    obj = DispatcherDefault;
    obj.wait(() => {
      obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" });
    });
  },
  updateRoleOrder(to, to2) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from, to };
    obj.dispatch(obj2);
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    obj = { guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable };
    return updateGuildRole(obj);
  },
  startEditingPermissions(guildId, roleId) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId };
    obj.dispatch(obj2);
  },
  stopEditingPermissions() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission };
    obj.dispatch(obj2);
  },
  denyPermission(permission) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission };
    obj.dispatch(obj2);
  },
  cancelPermissionChanges() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
  },
  savePermissionChanges(arg0) {
    let color;
    let guildId;
    let hoist;
    let mentionable;
    let name;
    let permissions;
    let roleId;
    ({ guildId, roleId, name, permissions, color, hoist, mentionable } = arg0);
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    const promise = updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable });
    promise.then(() => {
      obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" });
    }, () => {
      obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" });
    });
  }
};
let result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx");

export default obj;