// === Module 14378: useDerivedDmSpamFilterSettingValue ===

// Module 14378 (useDerivedDmSpamFilterSettingValue)
import initialize from "initialize" /* 589 */;
import create from "create" /* 1306 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4141 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 4148 */;
import closure_2 from "mergeGuildAvatar" /* 1923 */;
import { ExplicitContentFilterToDmSpamFilterV2 as closure_3 } from "items" /* 4137 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = function useDerivedDmSpamFilterSettingValue() {
  let DmSpamFilterV2 = dependencyMap;
  const DmSpamFilterV22 = explicitContentFromProto.DmSpamFilterV2;
  const setting = DmSpamFilterV22.useSetting();
  const ExplicitContentFilter = explicitContentFromProto.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  const isSettingTeenByDefault = isFeatureAgeGated.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting !== create.DmSpamFilterV2.DEFAULT_UNSET) {
    return setting;
  } else {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false !== nsfwAllowed) {
      let FRIENDS_AND_NON_FRIENDS = closure_3.get(setting1);
      if (FRIENDS_AND_NON_FRIENDS == null) {
        FRIENDS_AND_NON_FRIENDS = tmp(1306).DmSpamFilterV2.NON_FRIENDS;
      }
    }
    DmSpamFilterV2 = tmp(1306).DmSpamFilterV2;
    FRIENDS_AND_NON_FRIENDS = DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  }
};