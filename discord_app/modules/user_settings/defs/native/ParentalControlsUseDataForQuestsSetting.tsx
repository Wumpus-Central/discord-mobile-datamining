// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
        cResult[0] = selectedTeenId;
        first = selectedTeenId;
      } else {
        first = cResult[0];
      }
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
      return !useControlledSetting(first);
    }
  : () => {
      const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
      return !useControlledSetting(selectedTeenId);
    };
let obj = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2521.ZhaNu8);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const updateControlledSetting = ParentalControlledDropsOptedOut.updateControlledSetting;
    const result = updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true,
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx",
);

export default toggle;
