// === Module 17306: ParentalControlsUseDataToImproveDiscordSetting ===

// Module 17306 (ParentalControlsUseDataToImproveDiscordSetting)
import util from "util" /* 1128 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7647 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16109 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7645 */;

require = fn;
const Consents = fn(1087).Consents;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11206);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XuADY2);
  },
  parent: fn(8332).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.USAGE_STATISTICS).hasConsented;
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.USAGE_STATISTICS];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.USAGE_STATISTICS];
      }
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  },
  unsearchable: true
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx");

export default toggle;