// discord_app/modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import intl3 from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import DragAndDropUtilsDefault from "../../../utils/DragAndDropUtils.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _null2;

const f132052 = (id) => id.id;
function handleGuildRoleCreateOrUpdate(arg0) {
  if (c8) {
    const sortedRoles = GuildRoleStore.getSortedRoles(tmp);
    let c9 = sortedRoles.map(f132052);
  }
}
const FormStates = Constants.FormStates;
let CLOSED = FormStates.CLOSED;
let c8 = false;
let c9 = null;
const authStore = null;
let c11 = null;
let closure_12 = null;
let closure_13 = null;
let c14 = false;
let closure_15 = null;
let c16 = false;
const Store = get_initializedDefault.Store;
class GuildSettingsModalRolesStore extends Store {
  initialize() {
    this.waitFor(GuildStore, GuildRoleStore);
  }
  getUpdates() {
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
          ascending: false,
        };
        const calculatePositionDeltas = DragAndDropUtilsDefault.calculatePositionDeltas;
        DragAndDropUtilsDefault;
        const result = calculatePositionDeltas(obj);
      }
      return [];
    }
  }
}
const prototype = GuildSettingsModalRolesStore.prototype;
Object.defineProperty(prototype, "submitting", {
  get: function submitting() {
    return CLOSED === FormStates.SUBMITTING;
  },
  set: undefined,
});
Object.defineProperty(prototype, "order", {
  get: function order() {
    return c9;
  },
  set: undefined,
});
Object.defineProperty(prototype, "guild", {
  get: function guild() {
    return c10;
  },
  set: undefined,
});
Object.defineProperty(prototype, "role", {
  get: function role() {
    return c11;
  },
  set: undefined,
});
Object.defineProperty(prototype, "permissions", {
  get: function permissions() {
    return closure_13;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasPermissionChanges", {
  get: function hasPermissionChanges() {
    return c14;
  },
  set: undefined,
});
GuildSettingsModalRolesStore.displayName = "GuildSettingsModalRolesStore";
let obj = {
  GUILD_SETTINGS_MODAL_ROLES_START_REORDER: function handleStartReorder(guildId) {
    guildId = guildId.guildId;
    c8 = true;
    const sortedRoles = GuildRoleStore.getSortedRoles(guildId);
    let c9 = sortedRoles.map(f132052);
    const guild = GuildStore.getGuild(guildId);
    clearTimeout(closure_15);
  },
  GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER: function handleStopReorder() {
    c8 = false;
    let c10 = null;
    if (!c16) {
      let c9 = null;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER: function handleUpdateOrder(arg0) {
    let from;
    let to;
    ({ from, to } = arg0);
    if (null == c9) {
      return false;
    } else {
      const tmp6 = c9[from];
      const obj2 = DragAndDropUtilsDefault;
      const moveItemFromToResult = obj2.moveItemFromTo(c9, from, to);
      c9 = moveItemFromToResult;
      if (moveItemFromToResult[from] !== tmp6) {
        const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
        const announce2 = AccessibilityAnnouncer2.announce;
        const intl2 = intl3.intl;
        const obj = { from: from + 1, to: to + 1 };
        announce2(intl2.formatToPlainString(intl3.t["+tmElp"], obj));
      } else {
        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl3.intl;
        announce(intl.string(intl3.t.WaxXjc));
      }
    }
  },
  GUILD_ROLE_CREATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_DELETE: function handleGuildRoleDelete(arg0) {
    if (null == c9) {
      return false;
    } else {
      const index = c9.indexOf(tmp);
      if (-1 === index) {
        return false;
      } else {
        c9.splice(index, 1);
      }
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING: function handleStartEditingPermissions(roleId) {
    roleId = roleId.roleId;
    const guild = GuildStore.getGuild(roleId.guildId);
    _null2 = guild;
    let role;
    if (null != guild) {
      role = GuildRoleStore.getRole(_null2.id, roleId);
    }
    permissions = role;
    if (null != role) {
      permissions = permissions.permissions;
      closure_13 = permissions;
      closure_12 = permissions;
    }
    CLOSED = FormStates.OPEN;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING: function handleStopEditingPermissions() {
    closure_13 = null;
    closure_12 = null;
    let c11 = null;
    let c10 = null;
    c14 = false;
    CLOSED = FormStates.CLOSED;
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
      const obj = BigFlagUtilsAll;
      const addResult = obj.add(closure_13, tmp);
      closure_13 = addResult;
      c14 = closure_12 !== addResult;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY: function handleDenyPermission(arg0) {
    if (null == closure_13) {
      return false;
    } else {
      const obj = BigFlagUtilsAll;
      const removeResult = obj.remove(closure_13, tmp);
      closure_13 = removeResult;
      c14 = closure_12 !== removeResult;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING: function handleSubmitPermissions() {
    CLOSED = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS: function handleSubmitPermissionsSuccess() {
    CLOSED = FormStates.OPEN;
    closure_12 = closure_13;
    c14 = closure_13 !== closure_13;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE: function handleSubmitPermissionsFailure() {
    CLOSED = FormStates.OPEN;
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
    let timeout;
    c16 = false;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      c9 = null;
    }, 400);
  },
};
const guildSettingsModalRolesStore = new GuildSettingsModalRolesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx");

export default guildSettingsModalRolesStore;
