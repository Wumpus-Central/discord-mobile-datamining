// === Module 14647: useDerivedDMSpamFilterSetting ===

// Module 14647 (useDerivedDMSpamFilterSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 2028 */;
import DMSafetyConstants from "DMSafetyConstants" /* 2030 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6802 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = DMSafetyConstants.ExplicitContentFilterToDmSpamFilterV2;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(4);
  const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
  let setting = DmSpamFilterV2.useSetting();
  const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmpResult2 = RegionalFeatureConfigUtils;
  const isSettingTeenByDefault = tmpResult2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting === preloaded_user_settings.DmSpamFilterV2.DEFAULT_UNSET) {
    let FRIENDS_AND_NON_FRIENDS;
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      if (isSettingTeenByDefault) {
        FRIENDS_AND_NON_FRIENDS = preloaded_user_settings.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
      }
      setting = FRIENDS_AND_NON_FRIENDS;
    }
    if (cResult[2] !== setting1) {
      let NON_FRIENDS = closure_3.get(setting1);
      if (NON_FRIENDS == null) {
        NON_FRIENDS = preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS;
      }
      cResult[2] = setting1;
      cResult[3] = NON_FRIENDS;
      FRIENDS_AND_NON_FRIENDS = NON_FRIENDS;
    } else {
      FRIENDS_AND_NON_FRIENDS = cResult[3];
    }
  }
  return setting;
}) : (() => {
  let currentUser;
  const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
  let setting = DmSpamFilterV2.useSetting();
  const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = RegionalFeatureConfigUtils;
  const isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting === preloaded_user_settings.DmSpamFilterV2.DEFAULT_UNSET) {
    let NON_FRIENDS;
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      if (isSettingTeenByDefault) {
        NON_FRIENDS = preloaded_user_settings.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
      }
      setting = NON_FRIENDS;
    }
    NON_FRIENDS = closure_3.get(setting1);
    if (NON_FRIENDS == null) {
      NON_FRIENDS = preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS;
    }
  }
  return setting;
});
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = tmp2;