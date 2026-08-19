// discord_app/modules/guild_onboarding_home/getNextResourceChannel.tsx
import handleSettingsLoadSuccess from "GuildOnboardingHomeSettingsStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/getNextResourceChannel.tsx");

export default function getCurrentAndNextResourceChannel(closure_0, closure_0) {
  resourceChannels = resourceChannels.getResourceChannels(closure_0);
  const findIndexResult = resourceChannels.findIndex((item, index) => item.channelId === closure_0);
  if (findIndexResult < 0) {
    let items = [null, null];
  } else {
    items = [resourceChannels[findIndexResult], resourceChannels[(findIndexResult + 1) % resourceChannels.length]];
  }
  return items;
};
export const usePreviousAndNextResourceChannel = function usePreviousAndNextResourceChannel(guild_id, id) {
  const _require = guild_id;
  dependencyMap = id;
  const items = [closure_2];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_2.getResourceChannels(closure_0));
  const findIndexResult = stateFromStores.findIndex((item, index) => item.channelId === closure_1);
  if (findIndexResult >= 0) {
    if (stateFromStores.length > 1) {
      if (2 === stateFromStores.length) {
        const items1 = [null, stateFromStores[1 - findIndexResult]];
        let items2 = items1;
      } else {
        items2 = [stateFromStores[(findIndexResult - 1) % stateFromStores.length], stateFromStores[(findIndexResult + 1) % stateFromStores.length]];
      }
    }
    return items2;
  }
  items2 = [null, null];
};