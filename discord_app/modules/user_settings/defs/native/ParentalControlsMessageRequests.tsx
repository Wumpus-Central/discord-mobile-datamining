// === Module 16924: ParentalControlsMessageRequests ===

// Module 16924 (ParentalControlsMessageRequests)
import util from "util" /* 1128 */;
import _modDef2571 from "module_2571" /* 2571 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6136 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7717 */;
import useSelectedTeen from "useSelectedTeen" /* 7960 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15783 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15784 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16910 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7477 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
function useIsDisabled() {
  return useParentalControlSettings.useDefaultGuildsRestricted();
}
const SettingBuilders = fn(11006);
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
    return intl.string(_modDef2571["7aYkh1"]);
  },
  parent: fn(8213).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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