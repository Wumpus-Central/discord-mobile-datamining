// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx
import util from "../../../../intl/index.native.tsx";
import useSelectedTeen from "../../../parent_tools/hooks/useSelectedTeen.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledQuests3PDataOptedOut =
        ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
      return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
    }
  : () => {
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledQuests3PDataOptedOut =
        ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
      return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
    };
const SettingBuilders = fn(11129);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
    }
  : () => {
      const selectedTeenId = useSelectedTeen.useSelectedTeenId();
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: fn(7634).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut =
      ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const selectedTeenId = useSelectedTeen.useSelectedTeenId();
        const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
        return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
      }
    : () => {
        const selectedTeenId = useSelectedTeen.useSelectedTeenId();
        const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
        return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
      },
  unsearchable: true,
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx",
);

export default toggle;
