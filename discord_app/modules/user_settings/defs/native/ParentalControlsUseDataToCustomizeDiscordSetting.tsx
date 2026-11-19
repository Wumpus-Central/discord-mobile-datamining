// === Module 17447: ParentalControlsUseDataToCustomizeDiscordSetting ===

// Module 17447 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1113 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8218 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16031 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16036 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;

require = fn;
const Consents = fn(1072).Consents;
const SettingBuilders = fn(11875);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8593).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      const obj = FamilyCenterSaveErrorUtils;
      obj.showToastIfSaveFails(FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2));
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;