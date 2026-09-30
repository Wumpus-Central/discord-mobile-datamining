// === Module 15720: ParentalControlsMessageRequests ===

// Module 15720 (ParentalControlsMessageRequests)
import util from "util" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8054 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8056 */;
import useSelectedTeen from "useSelectedTeen" /* 8303 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14559 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14560 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 15706 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7153 */;

require = fn;
const SettingBuilders = fn(11211);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2487["7aYkh1"]);
  },
  parent: fn(7612).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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