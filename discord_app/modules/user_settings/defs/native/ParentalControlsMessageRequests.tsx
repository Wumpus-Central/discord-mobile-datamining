// === Module 18589: ParentalControlsMessageRequests ===

// Module 18589 (ParentalControlsMessageRequests)
import util from "util" /* 1113 */;
import _modDef2701 from "module_2701" /* 2701 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6833 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8190 */;
import useSelectedTeen from "useSelectedTeen" /* 9618 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17346 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17347 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17351 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 18575 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8740 */;

require = fn;
const SettingBuilders = fn(12406);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2701["7aYkh1"]);
  },
  parent: fn(9202).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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