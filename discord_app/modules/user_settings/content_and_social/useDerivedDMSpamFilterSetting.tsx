// discord_app/modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../UserSettings.tsx";
import DMSafetyConstants from "../privacy_and_safety/DMSafetyConstants.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = DMSafetyConstants.ExplicitContentFilterToDmSpamFilterV2;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
      const isSettingTeenByDefault = tmpResult2.useIsSettingTeenByDefault(
        SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS,
      );
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
    }
  : () => {
      let currentUser;
      const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
      let setting = DmSpamFilterV2.useSetting();
      const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
      const setting1 = ExplicitContentFilter.useSetting();
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj2 = RegionalFeatureConfigUtils;
      const isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(
        SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS,
      );
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
    };
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = tmp2;
