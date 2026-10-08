// discord_app/modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2565 from "../../../parent_tools/FamilyCenter.messages.js";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import useSelectedTeen from "../../../parent_tools/hooks/useSelectedTeen.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import DefaultDMSettingsExperiment from "../../content_and_social/DefaultDMSettingsExperiment.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
function useIsDisabled() {
  return useParentalControlSettings.useDefaultGuildsRestricted();
}
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useValue() {
      if (typeof useIsDisabled === "function") {
        const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
        const selectedTeenId = useSelectedTeen.useSelectedTeenId();
        const ParentalControlledDefaultMessageRequestRestricted =
          ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
        let tmp6 = !defaultGuildsRestricted;
        if (!defaultGuildsRestricted) {
          tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
        }
        return tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : function useValue() {
      if (typeof useIsDisabled === "function") {
        const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
        const selectedTeenId = useSelectedTeen.useSelectedTeenId();
        const ParentalControlledDefaultMessageRequestRestricted =
          ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
        let tmp6 = !defaultGuildsRestricted;
        if (!defaultGuildsRestricted) {
          tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
        }
        return tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2565["7aYkh1"]);
  },
  parent: fn(7966).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useValue() {
        if (typeof useIsDisabled === "function") {
          const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
          const selectedTeenId = useSelectedTeen.useSelectedTeenId();
          const ParentalControlledDefaultMessageRequestRestricted =
            ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
          let tmp6 = !defaultGuildsRestricted;
          if (!defaultGuildsRestricted) {
            tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
          }
          return tmp6;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    : function useValue() {
        if (typeof useIsDisabled === "function") {
          const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
          const selectedTeenId = useSelectedTeen.useSelectedTeenId();
          const ParentalControlledDefaultMessageRequestRestricted =
            ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
          let tmp6 = !defaultGuildsRestricted;
          if (!defaultGuildsRestricted) {
            tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
          }
          return tmp6;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      },
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj3 = {
            entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS,
          };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
        }
        obj = DefaultDMSettingsExperiment;
      }
      const ParentalControlledDefaultMessageRequestRestricted =
        ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true,
});
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
