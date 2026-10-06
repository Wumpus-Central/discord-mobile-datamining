// discord_app/modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsDefaultFeature from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = AgeVerificationUtils;
      const isVerifiedAdult = obj.useIsVerifiedAdult();
      const obj2 = RegionalFeatureConfigUtils;
      const tmp2 =
        !isVerifiedAdult &&
        obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
      return tmp2;
    }
  : () => {
      const obj = AgeVerificationUtils;
      const isVerifiedAdult = obj.useIsVerifiedAdult();
      const obj2 = RegionalFeatureConfigUtils;
      const tmp2 =
        !isVerifiedAdult &&
        obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = tmp2;
