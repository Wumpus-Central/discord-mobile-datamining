// === Module 17770: GuildSettingsModalRolesActionCreators ===

// Module 17770 (GuildSettingsModalRolesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function updateGuildRole() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = async function _updateGuildRole(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          ({ guildId: closure_130_0, roleId: closure_130_1, name: closure_130_2, permissions: closure_130_3, color: closure_130_4, hoist: closure_130_5, mentionable: closure_130_6 } = closure_0);
          closure_130_7 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const HTTP = closure_131_0(closure_131_2[2]).HTTP;
          const request = { url: closure_131_4.GUILD_ROLE(closure_130_0, closure_130_1), body: null, oldFormErrors: true, rejectWithError: null };
          const obj6 = { name: closure_130_2, permissions: closure_130_3, color: null, hoist: null, mentionable: null };
          let color = closure_130_4;
          if (closure_130_4 == null) {
            color = 0;
          }
          obj6.color = color;
          obj6.hoist = closure_130_5;
          obj6.mentionable = closure_130_6;
          request.body = obj6;
          request.rejectWithError = closure_131_0(closure_131_2[2]).rejectWithMigratedError();
          c4 = 2;
          c5 = 1;
          const obj7 = { value: HTTP.patch(request), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_130_7 = value;
        const result = closure_131_1(closure_131_2[3]).checkGuildTemplateDirty(closure_130_0);
        c5 = 3;
        const obj9 = { value: closure_130_7, done: true };
        return obj9;
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx");

export default {
  startReordering(guildId) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId });
  },
  stopReordering() {
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" }));
  },
  updateRoleOrder(from, to) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from, to });
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    return updateGuildRole({ guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable });
  },
  startEditingPermissions(guildId, roleId) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId });
  },
  stopEditingPermissions() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission });
  },
  denyPermission(permission) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission });
  },
  cancelPermissionChanges() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
  },
  savePermissionChanges(arg0) {
    ({ guildId, roleId, name, permissions, color, hoist, mentionable } = arg0);
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable }).then(() => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" }), () => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" }));
  }
};