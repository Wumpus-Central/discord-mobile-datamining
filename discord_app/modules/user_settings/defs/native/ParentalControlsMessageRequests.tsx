// === Module 16613: ParentalControlsMessageRequests ===

// Module 16613 (ParentalControlsMessageRequests)
import util from "util" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5918 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7498 */;
import useSelectedTeen from "useSelectedTeen" /* 7741 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15417 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15418 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16599 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7259 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
function useIsDisabled() {
  return useParentalControlSettings.useDefaultGuildsRestricted();
}
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
  if (typeof useIsDisabled === "function") {
    const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    let tmp6 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useValue() {
  if (typeof useIsDisabled === "function") {
    const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    let tmp6 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2568["7aYkh1"]);
  },
  parent: fn(7993).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
    if (typeof useIsDisabled === "function") {
      const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      let tmp6 = !defaultGuildsRestricted;
      if (!defaultGuildsRestricted) {
        tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
      }
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }) : (function useValue() {
    if (typeof useIsDisabled === "function") {
      const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      let tmp6 = !defaultGuildsRestricted;
      if (!defaultGuildsRestricted) {
        tmp6 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
      }
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }),
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
        }
        obj = DefaultDMSettingsExperiment;
      }
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;