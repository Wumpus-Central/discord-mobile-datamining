// discord_app/modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import isFeatureAgeGated from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/52UYy"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    return isFeatureAgeGated.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;