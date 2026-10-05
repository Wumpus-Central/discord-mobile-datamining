// discord_app/modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx
import intl2 from "../../../../intl/index.native.tsx";
import _modDef2493 from "../../../parent_tools/FamilyCenter.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import useSelectedTeen from "../../../parent_tools/hooks/useSelectedTeen.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import DefaultDMSettingsExperiment from "../../content_and_social/DefaultDMSettingsExperiment.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      if (typeof fn === "function") {
        const obj = useParentalControlSettings;
        const defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
        const obj2 = useSelectedTeen;
        const selectedTeenId = obj2.useSelectedTeenId();
        const ParentalControlledDefaultMessageRequestRestricted =
          ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
        const useControlledSetting = ParentalControlledDefaultMessageRequestRestricted.useControlledSetting;
        const tmp6 = !defaultGuildsRestricted && !useControlledSetting(selectedTeenId);
        return tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : () => {
      if (typeof fn === "function") {
        const obj = useParentalControlSettings;
        const defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
        const obj2 = useSelectedTeen;
        const selectedTeenId = obj2.useSelectedTeenId();
        const ParentalControlledDefaultMessageRequestRestricted =
          ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
        const useControlledSetting = ParentalControlledDefaultMessageRequestRestricted.useControlledSetting;
        const tmp6 = !defaultGuildsRestricted && !useControlledSetting(selectedTeenId);
        return tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const useIsDisabled = () => {
  const obj = useParentalControlSettings;
  return obj.useDefaultGuildsRestricted();
};
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3o2ojh"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2493["7aYkh1"]);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const tmp10 = arg0;
      if (!tmp10) {
        const obj = DefaultDMSettingsExperiment;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj2 = {
            entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS,
          };
          const showAgeVerificationGetStartedModal =
            AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj2);
        }
      }
      const ParentalControlledDefaultMessageRequestRestricted =
        ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true,
};
const toggle = SettingBuilders.createToggle(obj);
let result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
