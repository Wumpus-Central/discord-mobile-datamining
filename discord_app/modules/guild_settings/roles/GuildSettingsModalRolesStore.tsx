// discord_app/modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { FormStates } from "ME";
import { Store } from "initialize";
import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { calculatePositionDeltas } from "../../../utils/DragAndDropUtils.tsx";

const require = arg1;
function handleGuildRoleCreateOrUpdate(arg0) {
  if (c8) {
    const sortedRoles = store.getSortedRoles(tmp);
    let closure_9 = sortedRoles.map((id) => id.id);
  }
}
let CLOSED = FormStates.CLOSED;
let c8 = false;
let c9 = null;
let c10 = null;
let c11 = null;
let c12 = null;
let c13 = null;
let c14 = false;
let c15 = null;
let c16 = false;
class GuildSettingsModalRolesStore extends Store {
}
const prototype = GuildSettingsModalRolesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(createGuildRecordFromRust, createGuildRoleRecordFromRust);
};
Object.defineProperty(prototype, "submitting", {
  get: function submitting(arg0) {
    return CLOSED === FormStates.SUBMITTING;
  },
  set: undefined
});
prototype["getUpdates"] = function getUpdates() {
  if (null != c9) {
    if (null != _null2) {
      let obj = calculatePositionDeltas;
      obj = { oldOrdering: null, newOrdering: null, idGetter: null, existingPositionGetter: null, ascending: false };
      obj[0] = store.getSortedRoles(_null2.id);
      obj[1] = store.getManyRoles(_null2.id, c9);
      obj[2] = function idGetter(id) {
        return id.id;
      };
      obj[3] = function existingPositionGetter(position) {
        return position.position;
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
  get: function role(key10, oldValue10, newValue10) {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "permissions", {
  get: function permissions(arg0) {
    return c13;
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
const guildSettingsModalRolesStore = new GuildSettingsModalRolesStore(require("dispatcher"), {
  GUILD_SETTINGS_MODAL_ROLES_START_REORDER: function handleStartReorder(guildId) {
    guildId = guildId.guildId;
    let c8 = true;
    const sortedRoles = store.getSortedRoles(guildId);
    let closure_9 = sortedRoles.map((id) => id.id);
    const guild = store2.getGuild(guildId);
    clearTimeout(c15);
  },
  GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER: function handleStopReorder() {
    let c8 = false;
    let c10 = null;
    if (!c16) {
      let c9 = null;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER: function handleUpdateOrder(arg0) {
    let from;
    let to;
    ({ from, to } = arg0);
    if (null == _null) {
      return false;
    } else {
      const moveItemFromToResult = calculatePositionDeltas.moveItemFromTo(_null, from, to);
      _null = moveItemFromToResult;
      if (moveItemFromToResult[from] !== _null[from]) {
        const AccessibilityAnnouncer2 = AccessibilityAnnouncer.AccessibilityAnnouncer;
        const intl2 = getSystemLocale.intl;
        const obj = { from: null, to: null };
        obj[0] = from + 1;
        obj[1] = to + 1;
        AccessibilityAnnouncer2.announce(intl2.formatToPlainString(getSystemLocale.t["+tmElp"], obj));
      } else {
        const AccessibilityAnnouncer = AccessibilityAnnouncer.AccessibilityAnnouncer;
        const intl = getSystemLocale.intl;
        AccessibilityAnnouncer.announce(intl.string(getSystemLocale.t.WaxXjc));
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
    const guild = store2.getGuild(guildId.guildId);
    let role;
    if (null != guild) {
      role = store.getRole(guild.id, guildId.roleId);
    }
    if (null != role) {
      const permissions = role.permissions;
    }
    const OPEN = FormStates.OPEN;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING: function handleStopEditingPermissions() {
    let c13 = null;
    let c12 = null;
    let c11 = null;
    let c10 = null;
    let c14 = false;
    const CLOSED = FormStates.CLOSED;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL: function handleCancelEditingPermissions() {
    if (null != closure_13) {
      if (closure_13 !== c12) {
        closure_13 = c12;
        let c14 = false;
      }
    }
    return false;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW: function handleAllowPermission(arg0) {
    if (null == c13) {
      return false;
    } else {
      const addResult = importAll(506).add(c13, tmp);
      c13 = addResult;
      let closure_14 = c12 !== addResult;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY: function handleDenyPermission(arg0) {
    if (null == c13) {
      return false;
    } else {
      const removeResult = importAll(506).remove(c13, tmp);
      c13 = removeResult;
      let closure_14 = c12 !== removeResult;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING: function handleSubmitPermissions() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS: function handleSubmitPermissionsSuccess() {
    const OPEN = FormStates.OPEN;
    let closure_12 = c13;
    let closure_14 = c13 !== c13;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE: function handleSubmitPermissionsFailure() {
    const OPEN = FormStates.OPEN;
    if (null != closure_13) {
      if (closure_13 !== c12) {
        closure_13 = c12;
        let c14 = false;
      }
    }
  },
  GUILD_SETTINGS_SUBMIT: function handleSubmit() {
    let c16 = true;
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess() {
    let c16 = false;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      let c9 = null;
    }, 400);
  }
});
let result = require("ME").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx");

export default guildSettingsModalRolesStore;