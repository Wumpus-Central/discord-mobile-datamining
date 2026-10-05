// discord_app/modules/parent_tools/FamilyCenterControlledSettingsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import user_settings_UserSettingsUtils from "../user_settings/UserSettingsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3, closure_4;

let c2 = false;
const _false = {};
const React3 = {};
const Store = get_initializedDefault.Store;
class FamilyCenterControlledSettingsStore extends Store {
  getSettings(arg0) {
    return closure_3[arg0];
  }
  getControlledSettings(arg0) {
    return closure_3[arg0];
  }
  hasSettingsForUser(arg0) {
    return null != closure_3[arg0];
  }
  getConsents(arg0) {
    return closure_4[arg0];
  }
  hasConsented(arg0, arg1) {
    if (null == arg0) {
      return false;
    } else {
      let tmp3 = null != tmp2;
      if (tmp3) {
        tmp3 = null != closure_4[arg0][arg1] && closure_4[arg0][arg1].consented;
      }
      return tmp3;
    }
  }
}
Object.defineProperty(FamilyCenterControlledSettingsStore.prototype, "isLoading", {
  get: function isLoading() {
    return c2;
  },
  set: undefined,
});
FamilyCenterControlledSettingsStore.displayName = "FamilyCenterControlledSettingsStore";
let obj = {
  FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function handleTeenSettingsFetchStart() {
    c2 = true;
  },
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function handleTeenSettingsAndConsentsFetchSuccess(arg0) {
    let consents;
    let settings;
    let userId;
    ({ userId, settings, consents } = arg0);
    if (null != settings) {
      const obj = user_settings_UserSettingsUtils;
      closure_3[userId] = obj.b64ToPreloadedUserSettingsProto(settings);
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
    const settings = userId.settings;
    const obj = user_settings_UserSettingsUtils;
    const result = obj.b64ToPreloadedUserSettingsProto(settings);
    const obj2 = user_settings_UserSettingsUtils;
    closure_3[userId] = obj2.mergeTopLevelFields(
      preloaded_user_settings.PreloadedUserSettings,
      closure_3[userId],
      result,
    );
  },
  LOGOUT: function handleLogout() {
    closure_3 = {};
    closure_4 = {};
    c2 = false;
  },
};
const familyCenterControlledSettingsStore = new FamilyCenterControlledSettingsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsStore.tsx");

export default familyCenterControlledSettingsStore;
