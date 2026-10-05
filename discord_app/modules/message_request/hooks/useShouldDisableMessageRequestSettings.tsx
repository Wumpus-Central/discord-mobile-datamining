// discord_app/modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = AgeVerificationUtils;
      let isVerifiedTeen = obj.useIsVerifiedTeen();
      const useIsSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault;
      RegionalFeatureConfigUtils;
      if (isVerifiedTeen) {
        isVerifiedTeen = useIsSettingTeenByDefault(
          SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS,
        );
      }
      return isVerifiedTeen;
    }
  : () => {
      const obj = AgeVerificationUtils;
      let isVerifiedTeen = obj.useIsVerifiedTeen();
      const useIsSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault;
      RegionalFeatureConfigUtils;
      if (isVerifiedTeen) {
        isVerifiedTeen = useIsSettingTeenByDefault(
          SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS,
        );
      }
      return isVerifiedTeen;
    };
const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = tmp2;
