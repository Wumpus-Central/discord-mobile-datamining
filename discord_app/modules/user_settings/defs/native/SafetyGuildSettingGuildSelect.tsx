// discord_app/modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserSettingSearchStore from "../../UserSettingSearchStore.tsx";

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(15869);
({
  getSelectedGuildId: metroRequire,
  GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7,
  setSelectedGuildId: closure_8,
  useUserSafetySettingsSelectedGuildStore: closure_9,
} = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(7975).MobileUserSettings;
let items = [,];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
fn(11468);
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
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(15870, dependencyMap.paths),
      "SettingsPrivacyAndSafetyGuildSelectActionSheet",
    );
  },
};
SettingBuilders = SettingBuilders.createGuildSelector(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default SettingBuilders;
export const GUILD_SPECIFIC_SETTINGS = items;
