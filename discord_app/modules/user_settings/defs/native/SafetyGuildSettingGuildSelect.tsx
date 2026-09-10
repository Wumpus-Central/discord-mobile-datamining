// === Module 15950: SafetyGuildSettingGuildSelect ===

// Module 15950 (SafetyGuildSettingGuildSelect)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5488 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14769 */;

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(15951);
({ getSelectedGuildId: metroRequire, GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(8027).MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
fn(11540);
let SettingBuilders = {
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
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15952, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
};
SettingBuilders = SettingBuilders.createGuildSelector(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default SettingBuilders;
export const GUILD_SPECIFIC_SETTINGS = items;