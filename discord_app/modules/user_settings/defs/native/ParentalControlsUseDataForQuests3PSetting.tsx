// === Module 16111: ParentalControlsUseDataForQuests3PSetting ===

// Module 16111 (ParentalControlsUseDataForQuests3PSetting)
import util from "util" /* 1126 */;
import useSelectedTeen from "useSelectedTeen" /* 7713 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14903 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuests3PSettingValue() {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
  return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
}) : (function useDataToSupportQuests3PSettingValue() {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
  return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
});
const SettingBuilders = fn(11262);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuests3PSettingIsDisabled() {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
}) : (function useDataToSupportQuests3PSettingIsDisabled() {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: fn(7966).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  }) : (function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  }),
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;