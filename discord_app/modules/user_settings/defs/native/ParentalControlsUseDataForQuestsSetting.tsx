// === Module 17550: ParentalControlsUseDataForQuestsSetting ===

// Module 17550 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1112 */;
import _modDef2846 from "module_2846" /* 2846 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16273 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16277 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8170 */;

require = fn;
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2846.ZhaNu8);
  },
  parent: fn(9513).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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