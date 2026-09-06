// === Module 15902: ParentalControlsUseDataToCustomizeDiscordSetting ===

// Module 15902 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1114 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14824 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const Consents = fn(1074).Consents;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(7975).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default SettingBuilders;