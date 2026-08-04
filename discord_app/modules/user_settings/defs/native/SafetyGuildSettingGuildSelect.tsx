import noop from "noop";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import zustandStore from "zustandStore";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ getSelectedGuildId: closure_6, GUILD_SELECT_ALL_SERVERS_OPTION_ID: error, setSelectedGuildId: metroImportAll, useUserSafetySettingsSelectedGuildStore: c9 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileSetting);
createToggle = {
  unsearchable: true,
  useSelectedGuildId() {
    const field = zustandStore.useField("selected");
    const items = [field];
    const effect = React.useEffect(() => {
      const first = outer1_4.getFlattenedGuildIds()[0];
      let hasItem = outer1_10.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = outer1_6() === outer1_7;
      }
      if (hasItem) {
        outer1_8(first);
      }
    }, items);
    return callback().selectedGuildId;
  },
  parent: MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(14780, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
};
createToggle = createToggle.createGuildSelector(createToggle);
const result = require("zustandStore").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default createToggle;
export const GUILD_SPECIFIC_SETTINGS = items;