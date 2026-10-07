// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import ParentalControlledUserSettings from "../../family_center/ParentalControlledUserSettings.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11142);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
        cResult[0] = selectedTeenId;
        let first = selectedTeenId;
      } else {
        first = cResult[0];
      }
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      return !ParentalControlledDropsOptedOut.useControlledSetting(first);
    }
  : () => {
      const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
      const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
      return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
    };
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2521.ZhaNu8);
  },
  parent: fn(7645).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
          cResult[0] = selectedTeenId;
          let first = selectedTeenId;
        } else {
          first = cResult[0];
        }
        const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
        return !ParentalControlledDropsOptedOut.useControlledSetting(first);
      }
    : () => {
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
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx",
);

export default toggle;
