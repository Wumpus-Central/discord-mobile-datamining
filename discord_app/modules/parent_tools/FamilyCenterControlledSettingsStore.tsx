// === Module 7285: getSettings ===

// Module 7285 (getSettings)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import create from "create" /* 1306 */;
import b64ToProto from "b64ToProto" /* 1342 */;

require = arg1;
let c2 = false;
let closure_3 = {};
let closure_4 = {};
const Store = initializeDefault.Store;
class FamilyCenterControlledSettingsStore extends Store {
}
const prototype = FamilyCenterControlledSettingsStore.prototype;
prototype["getSettings"] = function getSettings(arg0) {
  return dependencyMap[arg0];
};
prototype["getControlledSettings"] = function getControlledSettings(arg0) {
  return dependencyMap[arg0];
};
prototype["hasSettingsForUser"] = function hasSettingsForUser(arg0) {
  return null != dependencyMap[arg0];
};
prototype["getConsents"] = function getConsents(arg0) {
  return dependencyMap2[arg0];
};
prototype["hasConsented"] = function hasConsented(arg0, arg1) {
  if (null == arg0) {
    return false;
  } else {
    let tmp3 = null != tmp2;
    if (tmp3) {
      tmp3 = null != tmp2[arg1] && tmp2[arg1].consented;
      const tmp5 = null != tmp2[arg1] && tmp2[arg1].consented;
    }
    return tmp3;
  }
};
Object.defineProperty(prototype, "isLoading", {
  get: function isLoading() {
    return c2;
  },
  set: undefined
});
FamilyCenterControlledSettingsStore.displayName = "FamilyCenterControlledSettingsStore";
const familyCenterControlledSettingsStore = new FamilyCenterControlledSettingsStore(dispatcherDefault, {
  FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function handleTeenSettingsFetchStart() {
    c2 = true;
  },
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function handleTeenSettingsAndConsentsFetchSuccess(arg0) {
    ({ userId, settings, consents } = arg0);
    if (null != settings) {
      closure_3[userId] = b64ToProto.b64ToPreloadedUserSettingsProto(settings);
      const obj = b64ToProto;
    }
    if (null != consents) {
      closure_4[userId] = consents;
    }
    c2 = false;
  },
  FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function handleTeenConsentsUpdateSuccess(userId) {
    closure_4[userId.userId] = userId.consents;
  },
  FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function handleTeenUpdateSettingsSuccess(userId) {
    userId = userId.userId;
    const result = b64ToProto.b64ToPreloadedUserSettingsProto(userId.settings);
    const obj = b64ToProto;
    dependencyMap[userId] = b64ToProto.mergeTopLevelFields(create.PreloadedUserSettings, dependencyMap[userId], result);
  },
  LOGOUT: function handleLogout() {
    closure_3 = {};
    closure_4 = {};
    c2 = false;
  }
});
let result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsStore.tsx");

export default familyCenterControlledSettingsStore;