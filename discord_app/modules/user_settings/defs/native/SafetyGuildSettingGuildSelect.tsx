// === Module 15010: MobileUserSettings ===

// Module 15010 (MobileUserSettings)
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "insertUnsortedGuilds" /* 5078 */;
import closure_5 from "zustandStore" /* 13993 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 15011 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

require = arg1;
({ getSelectedGuildId: closure_6, GUILD_SELECT_ALL_SERVERS_OPTION_ID: error, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: c9 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
createToggle = {
  unsearchable: true,
  useSelectedGuildId() {
    const field = closure_5.useField("selected");
    items = [field];
    const effect = React.useEffect(() => {
      const first = closure_1_4.getFlattenedGuildIds()[0];
      let hasItem = closure_1_10.includes(field);
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
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default createToggle;
export const GUILD_SPECIFIC_SETTINGS = items;