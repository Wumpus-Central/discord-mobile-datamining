// === Module 18053: SafetyGuildSettingGuildSelect ===

// Module 18053 (SafetyGuildSettingGuildSelect)
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import useDMPermissionsOverrideCount from "useDMPermissionsOverrideCount" /* 18056 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6892 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16733 */;

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(18054);
({ getSelectedGuildId: metroRequire, GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(8556).MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
const SettingBuilders = fn(11677);
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
        hasItem = timestampProducer() === React5;
      }
      if (hasItem) {
        React6(first);
      }
    }, items);
    return closure_9().selectedGuildId;
  },
  useDescription() {
    const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
    if (React7().selectedGuildId === React5) {
      if (0 !== dMPermissionsOverrideCount) {
        const intl = util.intl;
        const obj2 = { count: dMPermissionsOverrideCount };
        return intl.format(util.t.eugFxh, obj2);
      }
    }
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18055, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;