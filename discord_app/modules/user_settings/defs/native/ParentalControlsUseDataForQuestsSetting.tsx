// === Module 18599: ParentalControlsUseDataForQuestsSetting ===

// Module 18599 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1113 */;
import _modDef2701 from "module_2701" /* 2701 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17347 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17351 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8740 */;

require = fn;
const SettingBuilders = fn(12406);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2701.ZhaNu8);
  },
  parent: fn(9202).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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