// discord_app/modules/contact_sync/native/ContactSyncModalStore.tsx
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const ContactPermissions = fn(12678).ContactPermissions;
const PlatformTypes = fn(1074).PlatformTypes;
let obj = {
  NORMAL: 0,
  [0]: "NORMAL",
  ONBOARDING: 1,
  [1]: "ONBOARDING",
  ONBOARDING_INVITE: 2,
  [2]: "ONBOARDING_INVITE",
};
const module_560 = fn(560);
obj = module_560.create(() => {
  obj = {
    mode: obj.NORMAL,
    permissionState: ContactPermissions.NOT_DETERMINED,
    error: "",
    phone: null,
    phoneToken: null,
    name: null,
    isNameFromContactBook: false,
    allowPhone: true,
    allowEmail: true,
    bulkAddToken: null,
    suggestions: [],
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncModalStore.tsx");

export const ContactSyncModes = obj;
export const useContactSyncModalStore = obj;
export const initialize = function initialize(arg0) {
  _require = arg0;
  const localAccount = phone.getLocalAccount(PlatformTypes.CONTACTS);
  let name;
  if (localAccount != null) {
    name = localAccount.name;
  }
  const currentUser = UserStore.getCurrentUser();
  phone = undefined;
  if (currentUser != null) {
    phone = currentUser.phone;
  }
  require("ReactBatchUpdates").batchUpdates(() =>
    obj.setState(() => {
      obj = {};
      obj = {
        mode: constants2.NORMAL,
        permissionState: constants.NOT_DETERMINED,
        error: "",
        phone: null,
        phoneToken: null,
        name: null,
        isNameFromContactBook: false,
        allowPhone: true,
        allowEmail: true,
        bulkAddToken: null,
        suggestions: [],
      };
      const merged = Object.assign(obj);
      obj.mode = mode;
      obj.phone = phone;
      obj.name = name;
      return obj;
    }),
  );
};
export const setAllowSync = function setAllowSync(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.allowPhone = allowEmail;
      obj.allowEmail = allowEmail;
      return obj;
    });
  });
};
export const setAllowPhone = function setAllowPhone(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.allowPhone = allowPhone;
      return obj;
    });
  });
};
export const setAllowEmail = function setAllowEmail(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.allowEmail = allowEmail;
      return obj;
    });
  });
};
export const setSuggestions = function setSuggestions(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.suggestions = suggestions;
      obj.bulkAddToken = bulkAddToken;
      return obj;
    });
  });
};
export const setPhone = function setPhone(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.phone = phone;
      return obj;
    });
  });
};
export const setPhoneToken = function setPhoneToken(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.phoneToken = phoneToken;
      return obj;
    });
  });
};
export const setName = function setName(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.name = name;
      obj.isNameFromContactBook = isNameFromContactBook;
      return obj;
    });
  });
};
export const setPermissionState = function setPermissionState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.permissionState = permissionState;
      return obj;
    });
  });
};
export const setError = function setError(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.error = error;
      return obj;
    });
  });
};
export const useIsOnboarding = function useIsOnboarding() {
  const mode = obj().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
};
export const getIsOnboarding = function getIsOnboarding() {
  const mode = obj.getState().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
};
