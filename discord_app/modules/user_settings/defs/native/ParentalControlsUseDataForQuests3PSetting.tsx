// === Module 15046: toggle ===

// Module 15046 (toggle)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useSelectedTeen from "useSelectedTeen" /* 7623 */;
import result2 from "result" /* 14182 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CyLYKZ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = result2.ParentalControlledQuests3PDataOptedOut;
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = result2.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = result2.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default createToggle;