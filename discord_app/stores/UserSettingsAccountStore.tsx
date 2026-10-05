// === Module 6886: UserSettingsAccountStore ===

// Module 6886 (UserSettingsAccountStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

function handleFormClose() {
  CLOSED = FormStates.CLOSED;
  closure_3 = {};
}
const FormStates = Constants.FormStates;
let CLOSED = FormStates.CLOSED;
let closure_3 = {};
let obj = null;
const Store = get_initializedDefault.Store;
class UserSettingsAccountStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getErrors() {
    return closure_3;
  }
  getSubmitting() {
    return CLOSED === FormStates.SUBMITTING;
  }
  getSettings() {
    return obj;
  }
}
const prototype = UserSettingsAccountStore.prototype;
UserSettingsAccountStore.displayName = "UserSettingsAccountStore";
obj = {
  USER_SETTINGS_MODAL_OPEN: function handleFormOpen() {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      CLOSED = FormStates.CLOSED;
      closure_3 = {};
    } else {
      CLOSED = FormStates.OPEN;
      closure_3 = {};
      const user = { userId: null, username: null, discriminator: null, email: null, avatar: null, password: "", newPassword: null, claimed: currentUser.isClaimed() };
      ({ id: obj2.userId, username: obj2.username, discriminator: obj2.discriminator, email: obj2.email, avatar: obj2.avatar } = currentUser);
      const merged = Object.assign(user);
    }
  },
  USER_SETTINGS_MODAL_INIT: function handleFormInit() {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      CLOSED = FormStates.CLOSED;
      closure_3 = {};
    } else {
      CLOSED = FormStates.OPEN;
      closure_3 = {};
      const user = { userId: null, username: null, discriminator: null, email: null, avatar: null, password: "", newPassword: null, claimed: currentUser.isClaimed() };
      ({ id: obj2.userId, username: obj2.username, discriminator: obj2.discriminator, email: obj2.email, avatar: obj2.avatar } = currentUser);
      const merged = Object.assign(user);
    }
  },
  USER_SETTINGS_MODAL_CLOSE: handleFormClose,
  LOGOUT: handleFormClose,
  USER_SETTINGS_MODAL_SUBMIT: function handleFormSubmit() {
    CLOSED = FormStates.SUBMITTING;
  },
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    if (CLOSED !== FormStates.SUBMITTING) {
      return false;
    } else {
      CLOSED = tmp.OPEN;
      errors = errors.errors;
      if (errors == null) {
        errors = {};
      }
      closure_3 = errors;
    }
  },
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function handleUpdateAccount(settings) {
    settings = settings.settings;
    if (null == obj) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings);
  },
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: function handleFormSubmitComplete() {
    CLOSED = FormStates.OPEN;
    closure_3 = {};
  },
  USER_SETTINGS_MODAL_RESET: function handleFormReset() {
    const currentUser = UserStore.getCurrentUser();
    CLOSED = FormStates.OPEN;
    closure_3 = {};
    if (null != currentUser) {
      const user = { userId: null, username: null, discriminator: null, email: null, avatar: null, password: "", newPassword: null, claimed: currentUser.isClaimed() };
      ({ id: obj2.userId, username: obj2.username, discriminator: obj2.discriminator, email: obj2.email, avatar: obj2.avatar } = currentUser);
      const merged = Object.assign(user);
    }
  }
};
const userSettingsAccountStore = new UserSettingsAccountStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/UserSettingsAccountStore.tsx");

export default userSettingsAccountStore;