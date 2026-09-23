// === Module 16284: ParentalControlsMessageRequests ===

// Module 16284 (ParentalControlsMessageRequests)
import util from "util" /* 1115 */;
import _modDef2484 from "module_2484" /* 2484 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8757 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8759 */;
import useSelectedTeen from "useSelectedTeen" /* 9001 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15154 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15155 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16270 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7865 */;

require = fn;
const SettingBuilders = fn(11805);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2484["7aYkh1"]);
  },
  parent: fn(8319).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return useParentalControlSettings.useDefaultGuildsRestricted();
  },
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;