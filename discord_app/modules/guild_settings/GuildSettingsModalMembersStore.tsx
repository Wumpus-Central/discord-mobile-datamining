// === Module 11398: handleStopEditingRoles ===

// Module 11398 (handleStopEditingRoles)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "trackCommunicationDisabled" /* 1992 */;
import { FormStates } from "ME" /* 676 */;

function handleStopEditingRoles() {
  c2 = null;
  c3 = false;
  c4 = null;
  c5 = null;
  c6 = null;
}
function handleChangeNicknameSuccess() {
  c4 = null;
}
let c2 = null;
let c3 = false;
let c4 = null;
let c5 = null;
let c6 = null;
const Store = initializeDefault.Store;
class GuildSettingsModalMembersStore extends Store {
}
const prototype = GuildSettingsModalMembersStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
Object.defineProperty(prototype, "isSubmitting", {
  get: function isSubmitting() {
    return c2 === FormStates.SUBMITTING;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEditing", {
  get: function isEditing() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "roles", {
  get: function roles() {
    return c6;
  },
  set: undefined
});
Object.defineProperty(prototype, "memberId", {
  get: function memberId() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "nicknameError", {
  get: function nicknameError() {
    return c4;
  },
  set: undefined
});
GuildSettingsModalMembersStore.displayName = "GuildSettingsModalMembersStore";
const guildSettingsModalMembersStore = new GuildSettingsModalMembersStore(dispatcherDefault, {
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING: function handleStartEditingRoles(userId) {
    userId = userId.userId;
    member = member.getMember(userId.guildId, userId);
    if (null == member) {
      return false;
    } else {
      const OPEN = FormStates.OPEN;
      c3 = true;
      const roles = member.roles;
    }
  },
  GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING: handleStopEditingRoles,
  GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE: handleStopEditingRoles,
  GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE: function handleToggleRole(roleId) {
    roleId = roleId.roleId;
    if (null == found) {
      return false;
    } else if (tmp) {
      const items = [];
      items[HermesBuiltin.arraySpread(arr, 0)] = roleId;
      found = items;
    } else {
      found = arr.filter((arg0) => arg0 !== roleId);
    }
  },
  GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE: function handleSaveRoles() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME: handleChangeNicknameSuccess,
  GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS: handleChangeNicknameSuccess,
  GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE: function handleChangeNicknameFailure(error) {
    error = error.error;
  }
});
const result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersStore.tsx");

export default guildSettingsModalMembersStore;