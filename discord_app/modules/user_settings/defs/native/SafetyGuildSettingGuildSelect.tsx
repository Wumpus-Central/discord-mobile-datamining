// discord_app/modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import insertUnsortedGuilds from "../../../../stores/SortedGuildStore.tsx";
import zustandStore from "../../UserSettingSearchStore.tsx";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "../../privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx";
import { MobileUserSettings } from "../../core/native/SettingsConstants.tsx";
import "createToggle";

require = fn;
({ getSelectedGuildId: closure_6, GUILD_SELECT_ALL_SERVERS_OPTION_ID: error, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: c9 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
let createToggle = {
  unsearchable: true,
  useSelectedGuildId() {
    const field = closure_5.useField("selected");
    items = [field];
    const effect = React.useEffect(() => {
      const first = closure_1_4.getFlattenedGuildIds()[0];
      let hasItem = items.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = closure_1_6() === closure_1_7;
      }
      if (hasItem) {
        closure_1_8(first);
      }
    }, items);
    return callback().selectedGuildId;
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15012, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
};
createToggle = createToggle.createGuildSelector(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default createToggle;
export const GUILD_SPECIFIC_SETTINGS = items;