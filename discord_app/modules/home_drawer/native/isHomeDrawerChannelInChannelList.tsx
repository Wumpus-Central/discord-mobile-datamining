// discord_app/modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import updateUserGuildSettingsInternal from "../../../stores/UserGuildSettingsStore.tsx";

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