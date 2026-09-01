// discord_app/modules/contact_sync/native/ContactSyncModalStore.tsx
import closure_2 from "../../../stores/ConnectedAccountsStore.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import { ContactPermissions } from "ContactSyncConstants.tsx";
import { PlatformTypes } from "../../../Constants.tsx";
import keys from "../../../../_runtime/00644_keys.js";

const require = arg1;
let obj = {
  NORMAL: 0,
  [0]: "NORMAL",
  ONBOARDING: 1,
  [1]: "ONBOARDING",
  ONBOARDING_INVITE: 2,
  [2]: "ONBOARDING_INVITE",
};
obj = keys.create(() => {
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
const result = require("set").fileFinishedImporting("modules/contact_sync/native/ContactSyncModalStore.tsx");

export const ContactSyncModes = obj;
export const useContactSyncModalStore = obj;
export const initialize = function initialize(arg0) {
  const _require = arg0;
  const localAccount = phone.getLocalAccount(PlatformTypes.CONTACTS);
  let name;
  if (localAccount != null) {
    name = localAccount.name;
  }
  currentUser = currentUser.getCurrentUser();
  phone = undefined;
  if (currentUser != null) {
    phone = currentUser.phone;
  }
  _require(name[5]).batchUpdates(() =>
    closure_1_7.setState(() => {
      obj = {};
      obj = {
        mode: closure_1_6.NORMAL,
        permissionState: closure_1_4.NOT_DETERMINED,
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
      obj.mode = closure_0;
      obj.phone = closure_2;
      obj.name = closure_1;
      return obj;
    }),
  );
};
export const setAllowSync = function setAllowSync(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.allowPhone = closure_0;
      obj.allowEmail = closure_0;
      return obj;
    });
  });
};
export const setAllowPhone = function setAllowPhone(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.allowPhone = closure_0;
      return obj;
    });
  });
};
export const setAllowEmail = function setAllowEmail(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.allowEmail = closure_0;
      return obj;
    });
  });
};
export const setSuggestions = function setSuggestions(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.suggestions = closure_0;
      obj.bulkAddToken = closure_1;
      return obj;
    });
  });
};
export const setPhone = function setPhone(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.phone = closure_0;
      return obj;
    });
  });
};
export const setPhoneToken = function setPhoneToken(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.phoneToken = closure_0;
      return obj;
    });
  });
};
export const setName = function setName(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  _require(flag[5]).batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.name = closure_0;
      obj.isNameFromContactBook = closure_1;
      return obj;
    });
  });
};
export const setPermissionState = function setPermissionState(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.permissionState = closure_0;
      return obj;
    });
  });
};
export const setError = function setError(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_7.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.error = closure_0;
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
