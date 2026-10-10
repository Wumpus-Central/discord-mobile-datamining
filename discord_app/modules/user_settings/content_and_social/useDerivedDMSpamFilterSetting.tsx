// === Module 15095: useDerivedDMSpamFilterSetting ===

// Module 15095 (useDerivedDMSpamFilterSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import UserSettings from "UserSettings" /* 2041 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5921 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6997 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
let closure_3 = fn(2043).ExplicitContentFilterToDmSpamFilterV2;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = ReactCompilerGating.isReactCompilerEnabled() ? (function useDerivedDmSpamFilterSettingValue() {
  let DmSpamFilterV2 = dependencyMap;
  const cResult = c.c(4);
  const DmSpamFilterV22 = UserSettings.DmSpamFilterV2;
  const setting = DmSpamFilterV22.useSetting();
  const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmpResult = initialize;
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting !== preloaded_user_settings.DmSpamFilterV2.DEFAULT_UNSET) {
    return setting;
  } else {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false !== nsfwAllowed) {
      if (cResult[2] !== setting1) {
        let NON_FRIENDS = closure_3.get(setting1);
        if (NON_FRIENDS == null) {
          NON_FRIENDS = preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS;
        }
        cResult[2] = setting1;
        cResult[3] = NON_FRIENDS;
        let FRIENDS_AND_NON_FRIENDS = NON_FRIENDS;
      } else {
        FRIENDS_AND_NON_FRIENDS = cResult[3];
      }
    }
    DmSpamFilterV2 = preloaded_user_settings.DmSpamFilterV2;
    FRIENDS_AND_NON_FRIENDS = DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  }
  const tmpResult2 = RegionalFeatureConfigUtils;
}) : (function useDerivedDmSpamFilterSettingValue() {
  let DmSpamFilterV2 = dependencyMap;
  const DmSpamFilterV22 = UserSettings.DmSpamFilterV2;
  const setting = DmSpamFilterV22.useSetting();
  const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting !== preloaded_user_settings.DmSpamFilterV2.DEFAULT_UNSET) {
    return setting;
  } else {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false !== nsfwAllowed) {
      let FRIENDS_AND_NON_FRIENDS = closure_3.get(setting1);
      if (FRIENDS_AND_NON_FRIENDS == null) {
        FRIENDS_AND_NON_FRIENDS = preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS;
      }
    }
    DmSpamFilterV2 = preloaded_user_settings.DmSpamFilterV2;
    FRIENDS_AND_NON_FRIENDS = DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  }
});