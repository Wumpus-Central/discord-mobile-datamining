// === Module 18479: ParentalControlsUseDataForQuestsSetting ===

// Module 18479 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1113 */;
import _modDef2685 from "module_2685" /* 2685 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17229 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17233 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;

require = fn;
const SettingBuilders = fn(12317);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2685.ZhaNu8);
  },
  parent: fn(9136).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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