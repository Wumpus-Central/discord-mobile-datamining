// === Module 18632: ParentalControlsMessageRequests ===

// Module 18632 (ParentalControlsMessageRequests)
import util from "util" /* 1113 */;
import _modDef2703 from "module_2703" /* 2703 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6818 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8201 */;
import useSelectedTeen from "useSelectedTeen" /* 9630 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17383 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17384 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17388 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 18618 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8751 */;

require = fn;
const SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2703["7aYkh1"]);
  },
  parent: fn(9213).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
      FamilyCenterSaveErrorUtils.showToastIfSaveFails(ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0));
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;