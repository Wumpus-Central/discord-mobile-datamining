// === Module 18150: SafetyGuildSettingGuildSelect ===

// Module 18150 (SafetyGuildSettingGuildSelect)
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import useDMPermissionsOverrideCount from "useDMPermissionsOverrideCount" /* 18153 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6907 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16825 */;

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(18151);
({ getSelectedGuildId: closure_6, GUILD_SELECT_ALL_SERVERS_OPTION_ID: metroImportDefault, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(8573).MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
const SettingBuilders = fn(11728);
const guildSelector = SettingBuilders.createGuildSelector({
  unsearchable: true,
  useSelectedGuildId() {
    const field = UserSettingSearchStore.useField("selected");
    items = [field];
    const effect = noop.useEffect(() => {
      const first = SortedGuildStore.getFlattenedGuildIds()[0];
      let hasItem = items.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = timestampProducer() === metroImportDefault;
      }
      if (hasItem) {
        React5(first);
      }
    }, items);
    return closure_9().selectedGuildId;
  },
  useDescription() {
    const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
    if (React6().selectedGuildId === metroImportDefault) {
      if (0 !== dMPermissionsOverrideCount) {
        const intl = util.intl;
        const obj2 = { count: dMPermissionsOverrideCount };
        return intl.format(util.t.eugFxh, obj2);
      }
    }
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18152, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;