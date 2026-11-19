// === Module 17438: ParentalControlsMessageRequests ===

// Module 17438 (ParentalControlsMessageRequests)
import util from "util" /* 1113 */;
import _modDef2723 from "module_2723" /* 2723 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6293 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7674 */;
import useSelectedTeen from "useSelectedTeen" /* 9018 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16031 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16032 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16036 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 17424 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;

require = fn;
const SettingBuilders = fn(11875);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2723["7aYkh1"]);
  },
  parent: fn(8593).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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