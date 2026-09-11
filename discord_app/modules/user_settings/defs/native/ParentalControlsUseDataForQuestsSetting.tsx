// === Module 15970: ParentalControlsUseDataForQuestsSetting ===

// Module 15970 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14880 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7610 */;

require = fn;
fn(11562);
let SettingBuilders = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2396.ZhaNu8);
  },
  parent: fn(8049).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default SettingBuilders;