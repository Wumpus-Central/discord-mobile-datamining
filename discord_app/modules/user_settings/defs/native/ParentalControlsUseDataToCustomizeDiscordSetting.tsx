// === Module 18478: ParentalControlsUseDataToCustomizeDiscordSetting ===

// Module 18478 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1113 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8675 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17228 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17233 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;

require = fn;
const Consents = fn(1072).Consents;
const SettingBuilders = fn(12317);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(9136).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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