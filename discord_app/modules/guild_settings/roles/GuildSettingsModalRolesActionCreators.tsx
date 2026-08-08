// discord_app/modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx
import set from "set";
import { Endpoints } from "ME";
import { dispatcher } from "../../../Dispatcher.tsx";

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
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      const dependencyMap = tmp2;
      ({ guildId: c0, roleId: c1, name: c2, permissions: c3, color: c4, hoist: c5, mentionable: c6 } = callback);
      yield "ct";
      const HTTP = callback(530).HTTP;
      const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj2[0] = c4.GUILD_ROLE(callback, callback2);
      let obj3 = { name: null, permissions: null, color: null, hoist: null, mentionable: null };
      obj3[0] = dependencyMap;
      obj3[1] = c3;
      if (c4 == null) {
        callback2 = 0;
      }
      obj3[2] = callback2;
      obj3[3] = c5;
      obj3[4] = c6;
      obj2[1] = obj3;
      obj3 = callback(530);
      obj2[3] = obj3.rejectWithMigratedError();
      let closure_7 = yield HTTP.patch(obj2);
      const obj = callback2(5938);
      const result = obj.checkGuildTemplateDirty(callback);
      return closure_7;
    })();
    iter.next();
    return iter;
  });
  const _updateGuildRole = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("sendRequest").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx");

export default {
  startReordering(guildId) {
    let obj = dispatcher;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId };
    obj.dispatch(obj);
  },
  stopReordering() {
    dispatcher.wait(() => callback(table[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" }));
  },
  updateRoleOrder(arg0, to) {
    let obj = dispatcher;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from: arg0, to };
    obj.dispatch(obj);
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    return updateGuildRole({ guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable });
  },
  startEditingPermissions(guildId, roleId) {
    let obj = dispatcher;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId };
    obj.dispatch(obj);
  },
  stopEditingPermissions() {
    dispatcher.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    let obj = dispatcher;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission };
    obj.dispatch(obj);
  },
  denyPermission(permission) {
    let obj = dispatcher;
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission };
    obj.dispatch(obj);
  },
  cancelPermissionChanges() {
    dispatcher.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
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
    dispatcher.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    const obj = dispatcher;
    updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable }).then(() => callback(709).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" }), () => callback(709).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" }));
  }
};