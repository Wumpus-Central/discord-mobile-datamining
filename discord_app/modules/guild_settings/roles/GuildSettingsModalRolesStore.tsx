// === Module 17604: GuildSettingsModalRolesStore ===

// Module 17604 (GuildSettingsModalRolesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import DragAndDropUtilsDefault from "DragAndDropUtils" /* 12416 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function handleGuildRoleCreateOrUpdate(arg0) {
  if (c8) {
    const sortedRoles = GuildRoleStore.getSortedRoles(tmp);
    c9 = sortedRoles.map((id) => id.id);
  }
}
const FormStates = fn(1074).FormStates;
let OPEN = FormStates.CLOSED;
let c8 = false;
let c9 = null;
let c10 = null;
let c11 = null;
let closure_12 = null;
let closure_13 = null;
let c14 = false;
let closure_15 = null;
let c16 = false;
const Store = initializeDefault.Store;
class GuildSettingsModalRolesStore extends Store {
}
const prototype = GuildSettingsModalRolesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore, GuildRoleStore);
};
Object.defineProperty(prototype, "submitting", {
  get: function submitting() {
    return OPEN === FormStates.SUBMITTING;
  },
  set: undefined
});
prototype["getUpdates"] = function getUpdates() {
  if (null != c9) {
    if (null != _null2) {
      const obj = {
        oldOrdering: GuildRoleStore.getSortedRoles(_null2.id),
        newOrdering: GuildRoleStore.getManyRoles(_null2.id, c9),
        idGetter(id) {
              return id.id;
            },
        existingPositionGetter(position) {
              return position.position;
            },
        ascending: false
      };
      const result = obj.calculatePositionDeltas(obj);
    }
    return [];
  }
};
Object.defineProperty(prototype, "order", {
  get: function order() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "guild", {
  get: function guild() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "role", {
  get: function role() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "permissions", {
  get: function permissions() {
    return closure_13;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasPermissionChanges", {
  get: function hasPermissionChanges() {
    return c14;
  },
  set: undefined
});
GuildSettingsModalRolesStore.displayName = "GuildSettingsModalRolesStore";
const guildSettingsModalRolesStore = new GuildSettingsModalRolesStore(DispatcherDefault, {
  GUILD_SETTINGS_MODAL_ROLES_START_REORDER: function handleStartReorder(guildId) {
    guildId = guildId.guildId;
    c8 = true;
    const sortedRoles = GuildRoleStore.getSortedRoles(guildId);
    c9 = sortedRoles.map((id) => id.id);
    const guild = GuildStore.getGuild(guildId);
    clearTimeout(closure_15);
  },
  GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER: function handleStopReorder() {
    c8 = false;
    c10 = null;
    if (!c16) {
      c9 = null;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER: function handleUpdateOrder(arg0) {
    ({ from, to } = arg0);
    if (null == _null) {
      return false;
    } else {
      const moveItemFromToResult = DragAndDropUtilsDefault.moveItemFromTo(_null, from, to);
      _null = moveItemFromToResult;
      if (moveItemFromToResult[from] !== _null[from]) {
        const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
        const intl2 = util.intl;
        const obj = { from: from + 1, to: to + 1 };
        AccessibilityAnnouncer2.announce(intl2.formatToPlainString(util.t["+tmElp"], obj));
      } else {
        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
        const intl = util.intl;
        AccessibilityAnnouncer.announce(intl.string(util.t.WaxXjc));
      }
    }
  },
  GUILD_ROLE_CREATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_DELETE: function handleGuildRoleDelete(arg0) {
    if (null == _null) {
      return false;
    } else {
      const index = _null.indexOf(tmp);
      if (-1 === index) {
        return false;
      } else {
        _null.splice(index, 1);
      }
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING: function handleStartEditingPermissions(guildId) {
    const guild = GuildStore.getGuild(guildId.guildId);
    _null2 = guild;
    let role;
    if (null != guild) {
      role = GuildRoleStore.getRole(_null2.id, guildId.roleId);
    }
    _null3 = role;
    if (null != role) {
      const permissions = _null3.permissions;
      closure_13 = permissions;
      closure_12 = permissions;
    }
    OPEN = FormStates.OPEN;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING: function handleStopEditingPermissions() {
    closure_13 = null;
    closure_12 = null;
    c11 = null;
    c10 = null;
    c14 = false;
    OPEN = FormStates.CLOSED;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL: function handleCancelEditingPermissions() {
    if (null != closure_13) {
      if (closure_13 !== closure_12) {
        closure_13 = closure_12;
        c14 = false;
      }
    }
    return false;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW: function handleAllowPermission(arg0) {
    if (null == closure_13) {
      return false;
    } else {
      const addResult = BigFlagUtilsAll.add(closure_13, tmp);
      closure_13 = addResult;
      c14 = closure_12 !== addResult;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY: function handleDenyPermission(arg0) {
    if (null == closure_13) {
      return false;
    } else {
      const removeResult = BigFlagUtilsAll.remove(closure_13, tmp);
      closure_13 = removeResult;
      c14 = closure_12 !== removeResult;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING: function handleSubmitPermissions() {
    OPEN = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS: function handleSubmitPermissionsSuccess() {
    OPEN = FormStates.OPEN;
    closure_12 = closure_13;
    c14 = closure_13 !== closure_13;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE: function handleSubmitPermissionsFailure() {
    OPEN = FormStates.OPEN;
    if (null != closure_13) {
      if (closure_13 !== closure_12) {
        closure_13 = closure_12;
        c14 = false;
      }
    }
  },
  GUILD_SETTINGS_SUBMIT: function handleSubmit() {
    c16 = true;
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess() {
    c16 = false;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      c9 = null;
    }, 400);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx");

export default guildSettingsModalRolesStore;