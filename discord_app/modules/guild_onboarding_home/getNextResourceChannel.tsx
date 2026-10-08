// === Module 12000: getNextResourceChannel ===

// Module 12000 (getNextResourceChannel)
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6912 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
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
};
export const usePreviousAndNextResourceChannel = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreviousAndNextResourceChannel(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === closure_1);
  if (findIndexResult >= 0) {
    if (stateFromStores.length > 1) {
      if (2 === stateFromStores.length) {
        if (cResult[4] !== stateFromStores[1 - findIndexResult]) {
          const items1 = [null, tmp11];
          cResult[4] = tmp11;
          cResult[5] = items1;
          let tmp12 = items1;
        } else {
          tmp12 = cResult[5];
        }
        return tmp12;
      } else {
        if (cResult[6] === stateFromStores[(findIndexResult - 1) % stateFromStores.length]) {
          if (cResult[7] === tmp9) {
            let tmp10 = cResult[8];
          }
          return tmp10;
        }
        const items2 = [stateFromStores[(findIndexResult - 1) % stateFromStores.length], stateFromStores[(findIndexResult + 1) % stateFromStores.length]];
        cResult[6] = stateFromStores[(findIndexResult - 1) % stateFromStores.length];
        cResult[7] = stateFromStores[(findIndexResult + 1) % stateFromStores.length];
        cResult[8] = items2;
        tmp10 = items2;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [null, null];
    cResult[3] = items3;
    let tmp13 = items3;
  } else {
    tmp13 = cResult[3];
  }
  return tmp13;
}) : (function usePreviousAndNextResourceChannel(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0));
  const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === closure_1);
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
});