// === Module 16224: ParentalControlsUseDataForQuestsSetting ===

// Module 16224 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15097 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7777 */;

require = fn;
const SettingBuilders = fn(11723);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2482.ZhaNu8);
  },
  parent: fn(8232).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;