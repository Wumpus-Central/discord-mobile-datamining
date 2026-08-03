// === Module 11042: handleStopEditingRoles ===

// Module 11042 (handleStopEditingRoles)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { FormStates } from "ME";
import { Store } from "initialize";

function handleStopEditingRoles() {
  let c2 = null;
  let c3 = false;
  let c4 = null;
  let c5 = null;
  let c6 = null;
}
function handleChangeNicknameSuccess() {
  let c4 = null;
}
let c2 = null;
let c3 = false;
let c4 = null;
let c5 = null;
let c6 = null;
class GuildSettingsModalMembersStore extends Store {
}
const prototype = GuildSettingsModalMembersStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(trackCommunicationDisabled);
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
const guildSettingsModalMembersStore = new GuildSettingsModalMembersStore(require("dispatcher"), {
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING: function handleStartEditingRoles(userId) {
    userId = userId.userId;
    member = member.getMember(userId.guildId, userId);
    if (null == member) {
      return false;
    } else {
      const OPEN = FormStates.OPEN;
      let c3 = true;
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
const result = require("initialize").fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersStore.tsx");

export default guildSettingsModalMembersStore;