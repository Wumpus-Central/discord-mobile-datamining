// === Module 18298: ParentalControlsMessageRequests ===

// Module 18298 (ParentalControlsMessageRequests)
import util from "util" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6786 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8028 */;
import useSelectedTeen from "useSelectedTeen" /* 8446 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17065 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17066 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17070 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 18284 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7794 */;

require = fn;
const SettingBuilders = fn(11694);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2664["7aYkh1"]);
  },
  parent: fn(8507).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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