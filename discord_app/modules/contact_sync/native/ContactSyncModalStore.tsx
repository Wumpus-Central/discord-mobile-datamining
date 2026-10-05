// discord_app/modules/contact_sync/native/ContactSyncModalStore.tsx
import Constants from "../../../Constants.tsx";
import ContactSyncConstants from "ContactSyncConstants.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const ContactPermissions = ContactSyncConstants.ContactPermissions;
const PlatformTypes = Constants.PlatformTypes;
const ContactSyncModes = { NORMAL: 0, [0]: "NORMAL", ONBOARDING: 1, [1]: "ONBOARDING", ONBOARDING_INVITE: 2, [2]: "ONBOARDING_INVITE" };
let obj2 = module_570.create(() => {
  let obj;
  obj = { mode: obj.NORMAL, permissionState: ContactPermissions.NOT_DETERMINED, error: "", phone: null, phoneToken: null, name: null, isNameFromContactBook: false, allowPhone: true, allowEmail: true, bulkAddToken: null, suggestions: [] };
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const mode = obj2().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
}) : (() => {
  const mode = obj2().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
});
const result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncModalStore.tsx");

export { ContactSyncModes };
export const useContactSyncModalStore = obj2;
export const initialize = function initialize(arg0) {
  let closure_0;
  let constants2;
  let phone;
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
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let mode;
    return obj2.setState(() => {
      const obj = { mode, phone, name };
      obj2 = { mode: constants2.NORMAL, permissionState: constants.NOT_DETERMINED, error: "", phone: null, phoneToken: null, name: null, isNameFromContactBook: false, allowPhone: true, allowEmail: true, bulkAddToken: null, suggestions: [] };
      const merged = Object.assign(obj2);
      return obj;
    });
  });
};
export const setAllowSync = function setAllowSync(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    obj2.setState((arg0) => {
      const obj = { allowPhone: allowEmail, allowEmail };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setAllowPhone = function setAllowPhone(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let allowPhone;
    obj2.setState((arg0) => {
      const obj = { allowPhone };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setAllowEmail = function setAllowEmail(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let allowEmail;
    obj2.setState((arg0) => {
      const obj = { allowEmail };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setSuggestions = function setSuggestions(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let bulkAddToken;
    let suggestions;
    obj2.setState((arg0) => {
      const obj = { suggestions, bulkAddToken };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setPhone = function setPhone(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let phone;
    obj2.setState((arg0) => {
      const obj = { phone };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setPhoneToken = function setPhoneToken(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let phoneToken;
    obj2.setState((arg0) => {
      const obj = { phoneToken };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setName = function setName(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let isNameFromContactBook;
    let name;
    obj2.setState((arg0) => {
      const obj = { name, isNameFromContactBook };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setPermissionState = function setPermissionState(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let permissionState;
    obj2.setState((arg0) => {
      const obj = { permissionState };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const setError = function setError(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let error;
    obj2.setState((arg0) => {
      const obj = { error };
      const merged = Object.assign(arg0);
      return obj;
    });
  });
};
export const useIsOnboarding = tmp3;
export const getIsOnboarding = function getIsOnboarding() {
  const mode = obj2.getState().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
};