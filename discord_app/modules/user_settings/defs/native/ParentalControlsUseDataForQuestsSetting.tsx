// === Module 18642: ParentalControlsUseDataForQuestsSetting ===

// Module 18642 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1113 */;
import _modDef2703 from "module_2703" /* 2703 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17384 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17388 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8751 */;

require = fn;
const SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2703.ZhaNu8);
  },
  parent: fn(9213).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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