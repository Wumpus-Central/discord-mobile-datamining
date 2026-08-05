// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const selectedTeenId = require("../../../parent_tools/hooks/useSelectedTeen.tsx") /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = require("../../family_center/ParentalControlledUserSettings.tsx") /* result */.ParentalControlledQuests3PDataOptedOut;
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = require("../../family_center/ParentalControlledUserSettings.tsx") /* result */.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = require("../../../parent_tools/hooks/useSelectedTeen.tsx") /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = require("../../family_center/ParentalControlledUserSettings.tsx") /* result */.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default createToggle;