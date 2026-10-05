// === Module 15777: SafetyGuildSettingGuildSelect ===

// Module 15777 (SafetyGuildSettingGuildSelect)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import useDMPermissionsOverrideCount from "useDMPermissionsOverrideCount" /* 15780 */;
import react from "react" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14501 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 15778 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ getSelectedGuildId: metroRequire, GUILD_SELECT_ALL_SERVERS_OPTION_ID: metroImportDefault, setSelectedGuildId: metroImportAll, useUserSafetySettingsSelectedGuildStore: c9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let field;
  let tmp3;
  let tmp4;
  const obj = field(576);
  const cResult = obj.c(3);
  field = UserSettingSearchStore.useField("selected");
  if (cResult[0] !== field) {
    const fn = function s() {
      const first = SortedGuildStore.getFlattenedGuildIds()[0];
      const hasItem = items.includes(field) && null != first && metroRequire() === metroImportDefault;
      if (hasItem) {
        metroImportAll(first);
      }
    };
    items = [field];
    cResult[0] = field;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
  return closure_9().selectedGuildId;
}) : (() => {
  const field = UserSettingSearchStore.useField("selected");
  items = [field];
  const effect = react.useEffect(() => {
    const first = SortedGuildStore.getFlattenedGuildIds()[0];
    const hasItem = items.includes(field) && null != first && metroRequire() === metroImportDefault;
    if (hasItem) {
      metroImportAll(first);
    }
  }, items);
  return closure_9().selectedGuildId;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(2);
  const selectedGuildId = React4().selectedGuildId;
  const obj2 = useDMPermissionsOverrideCount;
  const dMPermissionsOverrideCount = obj2.useDMPermissionsOverrideCount();
  if (selectedGuildId === metroImportDefault) {
    if (0 !== dMPermissionsOverrideCount) {
      let tmp5;
      if (cResult[0] !== dMPermissionsOverrideCount) {
        const intl = intl2.intl;
        const obj3 = { count: dMPermissionsOverrideCount };
        const formatResult = intl.format(intl2.t.eugFxh, obj3);
        cResult[0] = dMPermissionsOverrideCount;
        cResult[1] = formatResult;
        tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  }
}) : (() => {
  const selectedGuildId = React4().selectedGuildId;
  const obj = useDMPermissionsOverrideCount;
  const dMPermissionsOverrideCount = obj.useDMPermissionsOverrideCount();
  if (selectedGuildId === metroImportDefault) {
    if (0 !== dMPermissionsOverrideCount) {
      const intl = intl2.intl;
      const obj2 = { count: dMPermissionsOverrideCount };
      return intl.format(intl2.t.eugFxh, obj2);
    }
  }
});
let obj = {
  unsearchable: true,
  useSelectedGuildId: tmp3,
  useDescription: tmp4,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(15779, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
};
const guildSelector = SettingBuilders.createGuildSelector(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;