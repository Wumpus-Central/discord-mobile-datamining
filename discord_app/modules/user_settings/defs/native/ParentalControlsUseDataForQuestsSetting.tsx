// === Module 18227: ParentalControlsUseDataForQuestsSetting ===

// Module 18227 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1113 */;
import _modDef2667 from "module_2667" /* 2667 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16992 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16996 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7860 */;

require = fn;
const SettingBuilders = fn(11737);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2667.ZhaNu8);
  },
  parent: fn(8578).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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