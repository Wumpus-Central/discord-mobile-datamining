// === Module 16050: ParentalControlsUseDataToCustomizeDiscordSetting ===

// Module 16050 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1115 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7653 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14948 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7651 */;

require = fn;
const Consents = fn(1074).Consents;
const SettingBuilders = fn(11622);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8111).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;