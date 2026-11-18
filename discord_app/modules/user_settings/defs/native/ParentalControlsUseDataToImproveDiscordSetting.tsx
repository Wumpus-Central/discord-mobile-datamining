// === Module 17453: ParentalControlsUseDataToImproveDiscordSetting ===

// Module 17453 (ParentalControlsUseDataToImproveDiscordSetting)
import util from "util" /* 1113 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8249 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16040 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16045 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8247 */;

require = fn;
const Consents = fn(1072).Consents;
const SettingBuilders = fn(11897);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XuADY2);
  },
  parent: fn(8624).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.USAGE_STATISTICS).hasConsented;
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        items = [Consents.USAGE_STATISTICS];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.USAGE_STATISTICS];
      }
      const obj = FamilyCenterSaveErrorUtils;
      obj.showToastIfSaveFails(FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2));
    }
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx");

export default toggle;