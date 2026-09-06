// discord_app/modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

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
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
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
          ({
            guildId: closure_130_0,
            roleId: closure_130_1,
            name: closure_130_2,
            permissions: closure_130_3,
            color: closure_130_4,
            hoist: closure_130_5,
            mentionable: closure_130_6,
          } = closure_0);
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const HTTP = closure_131_0(closure_131_2[2]).HTTP;
          const request = {
            url: closure_131_4.GUILD_ROLE(closure_130_0, closure_130_1),
            body: null,
            oldFormErrors: true,
            rejectWithError: null,
          };
          const obj2 = { name: closure_130_2, permissions: closure_130_3, color: null, hoist: null, mentionable: null };
          let color = closure_130_4;
          if (closure_130_4 == null) {
            color = 0;
          }
          obj2.color = color;
          obj2.hoist = closure_130_5;
          obj2.mentionable = closure_130_6;
          request.body = obj2;
          let obj3 = closure_131_0(closure_131_2[2]);
          request.rejectWithError = obj3.rejectWithMigratedError();
          c4 = 2;
          c5 = 1;
          obj3 = { value: HTTP.patch(request), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_130_7 = value;
        obj = closure_131_1(closure_131_2[3]);
        const result = obj.checkGuildTemplateDirty(closure_130_0);
        c5 = 3;
        const obj5 = { value: closure_130_7, done: true };
        return obj5;
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
    const obj = { type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId };
    obj.dispatch(obj);
  },
  stopReordering() {
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" }));
  },
  updateRoleOrder(from, to) {
    const obj = { type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from, to };
    obj.dispatch(obj);
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    return updateGuildRole({
      guildId,
      roleId: id.id,
      name: id.name,
      permissions: id.permissions,
      color: id.color,
      hoist,
      mentionable,
    });
  },
  startEditingPermissions(guildId, roleId) {
    const obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId };
    obj.dispatch(obj);
  },
  stopEditingPermissions() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    const obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission };
    obj.dispatch(obj);
  },
  denyPermission(permission) {
    const obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission };
    obj.dispatch(obj);
  },
  cancelPermissionChanges() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
  },
  savePermissionChanges(arg0) {
    ({ guildId, roleId, name, permissions, color, hoist, mentionable } = arg0);
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable }).then(
      () => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" }),
      () => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" }),
    );
  },
};
