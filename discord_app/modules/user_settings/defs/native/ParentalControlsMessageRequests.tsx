// === Module 15800: ParentalControlsMessageRequests ===

// Module 15800 (ParentalControlsMessageRequests)
import util from "util" /* 1126 */;
import _modDef2493 from "module_2493" /* 2493 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import useSelectedTeen from "useSelectedTeen" /* 8297 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14621 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14622 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 15786 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const useIsDisabled = () => useParentalControlSettings.useDefaultGuildsRestricted();
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  if (typeof fn === "function") {
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
}) : (() => {
  if (typeof fn === "function") {
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
    return intl.string(_modDef2493["7aYkh1"]);
  },
  parent: fn(7634).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    if (typeof fn === "function") {
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
  }) : (() => {
    if (typeof fn === "function") {
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