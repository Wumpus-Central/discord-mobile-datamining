// === Module 17540: ParentalControlsMessageRequests ===

// Module 17540 (ParentalControlsMessageRequests)
import util from "util" /* 1112 */;
import _modDef2846 from "module_2846" /* 2846 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6797 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7836 */;
import useSelectedTeen from "useSelectedTeen" /* 8175 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16272 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16273 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16277 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 17526 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8170 */;

require = fn;
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2846["7aYkh1"]);
  },
  parent: fn(9513).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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