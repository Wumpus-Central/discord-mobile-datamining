// === Module 17449: ParentalControlsUseDataForQuests3PSetting ===

// Module 17449 (ParentalControlsUseDataForQuests3PSetting)
import util from "util" /* 1113 */;
import useSelectedTeen from "useSelectedTeen" /* 9018 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16032 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16036 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;

require = fn;
const SettingBuilders = fn(11875);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: fn(8593).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    FamilyCenterSaveErrorUtils.showToastIfSaveFails(ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0));
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;