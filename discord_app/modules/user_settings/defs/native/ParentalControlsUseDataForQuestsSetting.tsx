// === Module 17275: ParentalControlsUseDataForQuestsSetting ===

// Module 17275 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1112 */;
import _modDef2725 from "module_2725" /* 2725 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15996 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16000 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8215 */;

require = fn;
const SettingBuilders = fn(11817);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2725.ZhaNu8);
  },
  parent: fn(8592).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    FamilyCenterSaveErrorUtils.showToastIfSaveFails(ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0));
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;