// discord_app/stores/UserSettingsAccountStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import UserStore from "UserStore.tsx";

function handleFormClose() {
  OPEN = FormStates.CLOSED;
  closure_3 = {};
}
const FormStates = fn(1074).FormStates;
let OPEN = FormStates.CLOSED;
let closure_3 = {};
let obj = null;
const Store = initializeDefault.Store;
class UserSettingsAccountStore extends Store {}
const prototype = UserSettingsAccountStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getErrors"] = function getErrors() {
  return closure_3;
};
prototype["getSubmitting"] = function getSubmitting() {
  return OPEN === FormStates.SUBMITTING;
};
prototype["getSettings"] = function getSettings() {
  return obj;
};
UserSettingsAccountStore.displayName = "UserSettingsAccountStore";
obj = {
  USER_SETTINGS_MODAL_OPEN: function handleFormOpen() {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      OPEN = FormStates.CLOSED;
      closure_3 = {};
    } else {
      OPEN = FormStates.OPEN;
      closure_3 = {};
      const user = {
        userId: null,
        username: null,
        discriminator: null,
        email: null,
        avatar: null,
        password: "",
        newPassword: null,
        claimed: null,
      };
      ({
        id: obj2.userId,
        username: obj2.username,
        discriminator: obj2.discriminator,
        email: obj2.email,
        avatar: obj2.avatar,
      } = currentUser);
      user.claimed = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(user);
    }
  },
  USER_SETTINGS_MODAL_INIT: function handleFormInit() {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      OPEN = FormStates.CLOSED;
      closure_3 = {};
    } else {
      OPEN = FormStates.OPEN;
      closure_3 = {};
      const user = {
        userId: null,
        username: null,
        discriminator: null,
        email: null,
        avatar: null,
        password: "",
        newPassword: null,
        claimed: null,
      };
      ({
        id: obj2.userId,
        username: obj2.username,
        discriminator: obj2.discriminator,
        email: obj2.email,
        avatar: obj2.avatar,
      } = currentUser);
      user.claimed = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(user);
    }
  },
  USER_SETTINGS_MODAL_CLOSE: handleFormClose,
  LOGOUT: handleFormClose,
  USER_SETTINGS_MODAL_SUBMIT: function handleFormSubmit() {
    OPEN = FormStates.SUBMITTING;
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
      closure_3 = errors;
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
    OPEN = FormStates.OPEN;
    closure_3 = {};
  },
  USER_SETTINGS_MODAL_RESET: function handleFormReset() {
    const currentUser = UserStore.getCurrentUser();
    OPEN = FormStates.OPEN;
    closure_3 = {};
    if (null != currentUser) {
      const user = {
        userId: null,
        username: null,
        discriminator: null,
        email: null,
        avatar: null,
        password: "",
        newPassword: null,
        claimed: null,
      };
      ({
        id: obj2.userId,
        username: obj2.username,
        discriminator: obj2.discriminator,
        email: obj2.email,
        avatar: obj2.avatar,
      } = currentUser);
      user.claimed = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(user);
    }
  },
};
const userSettingsAccountStore = new UserSettingsAccountStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/UserSettingsAccountStore.tsx");

export default userSettingsAccountStore;
