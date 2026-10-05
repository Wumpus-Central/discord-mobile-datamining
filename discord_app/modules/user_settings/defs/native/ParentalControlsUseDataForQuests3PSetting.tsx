// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useSelectedTeen from "../../../parent_tools/hooks/useSelectedTeen.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useSelectedTeen;
      const selectedTeenId = obj.useSelectedTeenId();
      const ParentalControlledQuests3PDataOptedOut =
        ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
      const useControlledSetting = ParentalControlledQuests3PDataOptedOut.useControlledSetting;
      return !useControlledSetting(selectedTeenId);
    }
  : () => {
      const obj = useSelectedTeen;
      const selectedTeenId = obj.useSelectedTeenId();
      const ParentalControlledQuests3PDataOptedOut =
        ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
      const useControlledSetting = ParentalControlledQuests3PDataOptedOut.useControlledSetting;
      return !useControlledSetting(selectedTeenId);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useSelectedTeen;
      const selectedTeenId = obj.useSelectedTeenId();
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
      return useControlledSetting(selectedTeenId);
    }
  : () => {
      const obj = useSelectedTeen;
      const selectedTeenId = obj.useSelectedTeenId();
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
      return useControlledSetting(selectedTeenId);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.CyLYKZ);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut =
      ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const updateControlledSetting = ParentalControlledQuests3PDataOptedOut.updateControlledSetting;
    const result = updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: tmp3,
  unsearchable: true,
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx",
);

export default toggle;
