// === Module 15679: useIsHomeDrawerChannelInChannelList ===

// Module 15679 (useIsHomeDrawerChannelInChannelList)
import initialize from "initialize" /* 589 */;
import closure_2 from "updateUserGuildSettingsInternal" /* 4589 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

export const useIsHomeDrawerChannelInChannelList = function useIsHomeDrawerChannelInChannelList() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => (guild_id) => {
    const result = callback(table[2]).isOptInEnabledForGuild(guild_id.guild_id);
    let result1 = !result;
    if (result) {
      result1 = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(guild_id);
    }
    return result1;
  }, [], initialize.statesWillNeverBeEqual);
};