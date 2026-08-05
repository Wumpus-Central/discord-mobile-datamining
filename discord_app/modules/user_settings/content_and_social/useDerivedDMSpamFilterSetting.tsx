import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { create } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { SettingsDefaultFeature } from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import { isFeatureAgeGated } from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import { explicitContentFromProto } from "../UserSettings.tsx";
// discord_app/modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { ExplicitContentFilterToDmSpamFilterV2 as closure_3 } from "items";

const require = arg1;
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = function useDerivedDmSpamFilterSettingValue() {
  let DmSpamFilterV2 = dependencyMap;
  const DmSpamFilterV22 = explicitContentFromProto /* explicitContentFromProto */.DmSpamFilterV2;
  const setting = DmSpamFilterV22.useSetting();
  const ExplicitContentFilter = explicitContentFromProto /* explicitContentFromProto */.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize /* initialize */;
  const isSettingTeenByDefault = isFeatureAgeGated /* isFeatureAgeGated */.useIsSettingTeenByDefault(SettingsDefaultFeature /* SettingsDefaultFeature */.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting !== create /* create */.DmSpamFilterV2.DEFAULT_UNSET) {
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