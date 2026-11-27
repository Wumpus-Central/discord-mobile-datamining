// === Module 17614: ParentalControlsUseDataForQuestsSetting ===

// Module 17614 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1112 */;
import _modDef2847 from "module_2847" /* 2847 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16331 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16335 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8213 */;

require = fn;
const SettingBuilders = fn(11970);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2847.ZhaNu8);
  },
  parent: fn(9556).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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