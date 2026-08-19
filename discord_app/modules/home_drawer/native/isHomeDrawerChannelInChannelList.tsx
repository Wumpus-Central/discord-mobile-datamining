// === Module 15582: useIsHomeDrawerChannelInChannelList ===

// Module 15582 (useIsHomeDrawerChannelInChannelList)
import initialize from "initialize" /* 589 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx");

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