// discord_app/modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useDMPermissionsOverrideCount from "../../privacy_and_safety/useDMPermissionsOverrideCount.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserSettingSearchStore from "../../UserSettingSearchStore.tsx";

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(16188);
({
  getSelectedGuildId: metroRequire,
  GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7,
  setSelectedGuildId: closure_8,
  useUserSafetySettingsSelectedGuildStore: closure_9,
} = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(8232).MobileUserSettings;
let items = [,];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
const SettingBuilders = fn(11723);
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
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(16189, dependencyMap.paths),
      "SettingsPrivacyAndSafetyGuildSelectActionSheet",
    );
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;
