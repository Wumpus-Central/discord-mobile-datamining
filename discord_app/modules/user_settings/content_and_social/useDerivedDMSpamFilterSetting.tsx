// === Module 14839: useDerivedDMSpamFilterSetting ===

// Module 14839 (useDerivedDMSpamFilterSetting)
import initialize from "initialize" /* 504 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7299 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_3 = fn(1937).ExplicitContentFilterToDmSpamFilterV2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = function useDerivedDmSpamFilterSettingValue() {
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
        FRIENDS_AND_NON_FRIENDS = tmp(1187).DmSpamFilterV2.NON_FRIENDS;
      }
    }
    DmSpamFilterV2 = tmp(1187).DmSpamFilterV2;
    FRIENDS_AND_NON_FRIENDS = DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  }
};