// === Module 17701: GuildSettingsModalRolesActionCreators ===

// Module 17701 (GuildSettingsModalRolesActionCreators)
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
let closure_6 = async function _updateGuildRole() {
  closure_2 = tmp2;
  ({ guildId: closure_130_0, roleId: closure_130_1, name: closure_130_2, permissions: closure_130_3, color: closure_130_4, hoist: closure_130_5, mentionable: closure_130_6 } = closure_0);
  await "PX_16";
  const HTTP = closure_131_0(closure_131_2[2]).HTTP;
  const request = { url: closure_131_4.GUILD_ROLE(closure_130_0, closure_130_1), body: null, oldFormErrors: true, rejectWithError: null };
  const obj2 = { name: closure_130_2, permissions: closure_130_3, color: null, hoist: null, mentionable: null };
  let color = closure_130_4;
  if (closure_130_4 == null) {
    color = 0;
  }
  obj2.color = color;
  obj2.hoist = closure_130_5;
  obj2.mentionable = closure_130_6;
  request.body = obj2;
  request.rejectWithError = closure_131_0(closure_131_2[2]).rejectWithMigratedError();
  await HTTP.patch(request);
  closure_130_7 = value;
  closure_131_0(closure_131_2[2]);
  const result = closure_131_1(closure_131_2[3]).checkGuildTemplateDirty(closure_130_0);
  return closure_130_7;
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
    return updateGuildRole({ guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable });
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
    updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable }).then(() => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" }), () => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" }));
  }
};