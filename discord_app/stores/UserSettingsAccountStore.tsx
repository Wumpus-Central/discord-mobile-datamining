// === Module 6246: handleFormClose ===

// Module 6246 (handleFormClose)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "mergeGuildAvatar" /* 1922 */;
import { FormStates } from "ME" /* 676 */;

function handleFormClose() {
  CLOSED = FormStates.CLOSED;
  c4 = null;
  closure_3 = {};
}
let CLOSED = FormStates.CLOSED;
let closure_3 = {};
let c4 = null;
const Store = initializeDefault.Store;
class UserSettingsAccountStore extends Store {
}
const prototype = UserSettingsAccountStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
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
const userSettingsAccountStore = new UserSettingsAccountStore(dispatcherDefault, {
  USER_SETTINGS_MODAL_OPEN: function handleFormOpen() {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      let OPEN = FormStates.CLOSED;
      let obj = null;
      closure_3 = {};
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
      closure_3 = {};
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
    closure_3 = {};
  },
  USER_SETTINGS_MODAL_RESET: function handleFormReset() {
    const currentUser = authStore.getCurrentUser();
    const OPEN = FormStates.OPEN;
    closure_3 = {};
    if (null != currentUser) {
      let obj = { userId: null, username: null, discriminator: null, email: null, avatar: null, password: "", newPassword: null, claimed: null };
      ({ id: obj2[0], username: obj2[1], discriminator: obj2[2], email: obj2[3], avatar: obj2[4] } = currentUser);
      obj[7] = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(obj);
    }
  }
});
const result = require("set").fileFinishedImporting("stores/UserSettingsAccountStore.tsx");

export default userSettingsAccountStore;