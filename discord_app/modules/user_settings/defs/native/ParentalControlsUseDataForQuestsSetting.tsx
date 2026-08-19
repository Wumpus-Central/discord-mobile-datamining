// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../parent_tools/FamilyCenter.messages.js";
import result2 from "../../family_center/ParentalControlledUserSettings.tsx";
import freshTeenActivityWithMap from "../../../parent_tools/FamilyCenterStore.tsx";
import "createToggle";

require = fn;
let createToggle = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.ZhaNu8);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = result2.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = result2.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default createToggle;