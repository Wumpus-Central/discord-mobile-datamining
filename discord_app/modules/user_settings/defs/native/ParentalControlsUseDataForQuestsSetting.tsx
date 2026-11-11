// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2685 from "../../../parent_tools/FamilyCenter.messages.js";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterSaveErrorUtils from "../../../parent_tools/FamilyCenterSaveErrorUtils.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

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
    FamilyCenterSaveErrorUtils.showToastIfSaveFails(
      ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0),
    );
  },
  unsearchable: true,
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx",
);

export default toggle;
