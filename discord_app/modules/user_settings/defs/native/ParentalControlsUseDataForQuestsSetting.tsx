// === Module 16293: ParentalControlsUseDataForQuestsSetting ===

// Module 16293 (ParentalControlsUseDataForQuestsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15074 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuestsSettingValue() {
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
}) : (function useDataToSupportQuestsSettingValue() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
});
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2568.ZhaNu8);
  },
  parent: fn(7992).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuestsSettingValue() {
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
  }) : (function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  }),
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;