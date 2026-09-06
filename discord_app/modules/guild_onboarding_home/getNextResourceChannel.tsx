// discord_app/modules/guild_onboarding_home/getNextResourceChannel.tsx
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/getNextResourceChannel.tsx");

export default function getCurrentAndNextResourceChannel(guildId, arg1) {
  closure_0 = arg1;
  const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(guildId);
  const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === closure_0);
  if (findIndexResult < 0) {
    let items = [null, null];
  } else {
    items = [resourceChannels[findIndexResult], resourceChannels[(findIndexResult + 1) % resourceChannels.length]];
  }
  return items;
}
export const usePreviousAndNextResourceChannel = function usePreviousAndNextResourceChannel(guild_id, id) {
  _require = guild_id;
  dependencyMap = id;
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0),
  );
  const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === closure_1);
  if (findIndexResult >= 0) {
    if (stateFromStores.length > 1) {
      if (2 === stateFromStores.length) {
        const items1 = [null, stateFromStores[1 - findIndexResult]];
        let items2 = items1;
      } else {
        items2 = [
          stateFromStores[(findIndexResult - 1) % stateFromStores.length],
          stateFromStores[(findIndexResult + 1) % stateFromStores.length],
        ];
      }
    }
    return items2;
  }
  items2 = [null, null];
};
