// discord_app/modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import SettingsDefaultFeature from "../../../../discord_common/js/shared/shared-constants/SettingsDefaultFeature.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
      let isSettingTeenByDefault = !isExplicitlyVerifiedAdult;
      if (!isExplicitlyVerifiedAdult) {
        isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(
          SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS,
        );
      }
      return isSettingTeenByDefault;
    }
  : () => {
      const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
      let isSettingTeenByDefault = !isExplicitlyVerifiedAdult;
      if (!isExplicitlyVerifiedAdult) {
        isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(
          SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS,
        );
      }
      return isSettingTeenByDefault;
    };
