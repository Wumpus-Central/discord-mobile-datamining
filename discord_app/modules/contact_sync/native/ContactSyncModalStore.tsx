// === Module 14047: ContactSyncModalStore ===

// Module 14047 (ContactSyncModalStore)
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6559 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

const require = fn;
const ContactPermissions = fn(14048).ContactPermissions;
const PlatformTypes = fn(1084).PlatformTypes;
const ContactSyncModes = { NORMAL: 0, [0]: "NORMAL", ONBOARDING: 1, [1]: "ONBOARDING", ONBOARDING_INVITE: 2, [2]: "ONBOARDING_INVITE" };
const module_570 = fn(570);
const obj5 = module_570.create(() => {
  obj = { mode: obj.NORMAL, permissionState: ContactPermissions.NOT_DETERMINED, error: "", phone: null, phoneToken: null, name: null, isNameFromContactBook: false, allowPhone: true, allowEmail: true, bulkAddToken: null, suggestions: [] };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncModalStore.tsx");

export { ContactSyncModes };
export const useContactSyncModalStore = obj5;
export function initialize(arg0) {
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
  require("ReactBatchUpdates").batchUpdates(() => obj5.setState(() => {
    const obj = {};
    const merged = Object.assign({ mode: constants2.NORMAL, permissionState: constants.NOT_DETERMINED, error: "", phone: null, phoneToken: null, name: null, isNameFromContactBook: false, allowPhone: true, allowEmail: true, bulkAddToken: null, suggestions: [] });
    obj.mode = mode;
    obj.phone = phone;
    obj.name = name;
    return obj;
  }));
}
export function setAllowSync(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.allowPhone = allowEmail;
      obj.allowEmail = allowEmail;
      return obj;
    });
  });
}
export function setAllowPhone(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.allowPhone = allowPhone;
      return obj;
    });
  });
}
export function setAllowEmail(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.allowEmail = allowEmail;
      return obj;
    });
  });
}
export function setSuggestions(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.suggestions = suggestions;
      obj.bulkAddToken = bulkAddToken;
      return obj;
    });
  });
}
export function setPhone(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.phone = phone;
      return obj;
    });
  });
}
export function setPhoneToken(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.phoneToken = phoneToken;
      return obj;
    });
  });
}
export function setName(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.name = name;
      obj.isNameFromContactBook = isNameFromContactBook;
      return obj;
    });
  });
}
export function setPermissionState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.permissionState = permissionState;
      return obj;
    });
  });
}
export function setError(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj5.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.error = error;
      return obj;
    });
  });
}
export const useIsOnboarding = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsOnboarding() {
  const mode = obj5().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
}) : (function useIsOnboarding() {
  const mode = obj5().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
});
export function getIsOnboarding() {
  const mode = obj5.getState().mode;
  return mode === obj.ONBOARDING || mode === obj.ONBOARDING_INVITE;
}