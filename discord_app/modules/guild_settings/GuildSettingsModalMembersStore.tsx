// === Module 11837: GuildSettingsModalMembersStore ===

// Module 11837 (GuildSettingsModalMembersStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

function handleStopEditingRoles() {
  SUBMITTING = null;
  c3 = false;
  error = null;
  userId = null;
  found = null;
}
function handleChangeNicknameSuccess() {
  error = null;
}
const FormStates = fn(1074).FormStates;
let SUBMITTING = null;
let c3 = false;
let error = null;
let userId = null;
let found = null;
const Store = initializeDefault.Store;
class GuildSettingsModalMembersStore extends Store {
}
const prototype = GuildSettingsModalMembersStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildMemberStore);
};
Object.defineProperty(prototype, "isSubmitting", {
  get: function isSubmitting() {
    return SUBMITTING === FormStates.SUBMITTING;
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
    return found;
  },
  set: undefined
});
Object.defineProperty(prototype, "memberId", {
  get: function memberId() {
    return userId;
  },
  set: undefined
});
Object.defineProperty(prototype, "nicknameError", {
  get: function nicknameError() {
    return error;
  },
  set: undefined
});
GuildSettingsModalMembersStore.displayName = "GuildSettingsModalMembersStore";
const guildSettingsModalMembersStore = new GuildSettingsModalMembersStore(DispatcherDefault, {
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING: function handleStartEditingRoles(userId) {
    userId = userId.userId;
    const member = GuildMemberStore.getMember(userId.guildId, userId);
    if (null == member) {
      return false;
    } else {
      SUBMITTING = FormStates.OPEN;
      c3 = true;
      found = member.roles;
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
      found = arr.filter((item) => item !== roleId);
    }
  },
  GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE: function handleSaveRoles() {
    SUBMITTING = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME: handleChangeNicknameSuccess,
  GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS: handleChangeNicknameSuccess,
  GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE: function handleChangeNicknameFailure(error) {
    error = error.error;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersStore.tsx");

export default guildSettingsModalMembersStore;