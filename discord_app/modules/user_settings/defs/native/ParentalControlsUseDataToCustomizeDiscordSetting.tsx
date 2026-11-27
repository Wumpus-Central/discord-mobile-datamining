// === Module 17613: ParentalControlsUseDataToCustomizeDiscordSetting ===

// Module 17613 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1112 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8215 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16330 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16335 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8213 */;

require = fn;
const Consents = fn(1071).Consents;
const SettingBuilders = fn(11970);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(9556).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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