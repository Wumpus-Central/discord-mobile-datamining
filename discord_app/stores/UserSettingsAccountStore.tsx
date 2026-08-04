// discord_app/stores/UserSettingsAccountStore.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { FormStates } from "ME";
import { Store } from "initialize";

function handleFormClose() {
  const CLOSED = FormStates.CLOSED;
  let c4 = null;
  let closure_3 = {};
}
let CLOSED = FormStates.CLOSED;
let closure_3 = {};
let c4 = null;
class UserSettingsAccountStore extends Store {
}
const prototype = UserSettingsAccountStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
};
prototype["getErrors"] = function getErrors() {
  return closure_3;
};
prototype["getSubmitting"] = function getSubmitting() {
  return CLOSED === FormStates.SUBMITTING;
};
prototype["getSettings"] = function getSettings() {
  return c4;
};
UserSettingsAccountStore.displayName = "UserSettingsAccountStore";
const userSettingsAccountStore = new UserSettingsAccountStore(require("dispatcher"), {
  USER_SETTINGS_MODAL_OPEN: function handleFormOpen() {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      let OPEN = FormStates.CLOSED;
      let obj = null;
      let closure_3 = {};
    } else {
      OPEN = FormStates.OPEN;
      closure_3 = {};
      obj = { userId: null, username: null, discriminator: null, email: null, avatar: null, password: "", newPassword: null, claimed: null };
      ({ id: obj2[0], username: obj2[1], discriminator: obj2[2], email: obj2[3], avatar: obj2[4] } = currentUser);
      obj[7] = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(obj);
    }
  },
  USER_SETTINGS_MODAL_INIT: function handleFormInit() {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      let OPEN = FormStates.CLOSED;
      let obj = null;
      let closure_3 = {};
    } else {
      OPEN = FormStates.OPEN;
      closure_3 = {};
      obj = { userId: null, username: null, discriminator: null, email: null, avatar: null, password: "", newPassword: null, claimed: null };
      ({ id: obj2[0], username: obj2[1], discriminator: obj2[2], email: obj2[3], avatar: obj2[4] } = currentUser);
      obj[7] = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(obj);
    }
  },
  USER_SETTINGS_MODAL_CLOSE: handleFormClose,
  LOGOUT: handleFormClose,
  USER_SETTINGS_MODAL_SUBMIT: function handleFormSubmit() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    if (OPEN !== FormStates.SUBMITTING) {
      return false;
    } else {
      OPEN = tmp.OPEN;
      errors = errors.errors;
      if (errors == null) {
        errors = {};
      }
    }
  },
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function handleUpdateAccount(settings) {
    if (null == obj) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: function handleFormSubmitComplete() {
    const OPEN = FormStates.OPEN;
    let closure_3 = {};
  },
  USER_SETTINGS_MODAL_RESET: function handleFormReset() {
    const currentUser = authStore.getCurrentUser();
    const OPEN = FormStates.OPEN;
    let closure_3 = {};
    if (null != currentUser) {
      let obj = { userId: null, username: null, discriminator: null, email: null, avatar: null, password: "", newPassword: null, claimed: null };
      ({ id: obj2[0], username: obj2[1], discriminator: obj2[2], email: obj2[3], avatar: obj2[4] } = currentUser);
      obj[7] = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(obj);
    }
  }
});
const result = require("initialize").fileFinishedImporting("stores/UserSettingsAccountStore.tsx");

export default userSettingsAccountStore;