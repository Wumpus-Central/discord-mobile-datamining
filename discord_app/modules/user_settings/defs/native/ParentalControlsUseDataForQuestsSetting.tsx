// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2396 from "../../../parent_tools/FamilyCenter.messages.js";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2396.ZhaNu8);
  },
  parent: fn(7975).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
  unsearchable: true,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx",
);

export default SettingBuilders;
