// === Module 17607: ParentalControlsUseDataForQuestsSetting ===

// Module 17607 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1112 */;
import _modDef2847 from "module_2847" /* 2847 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16324 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16328 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8212 */;

require = fn;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2847.ZhaNu8);
  },
  parent: fn(9555).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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