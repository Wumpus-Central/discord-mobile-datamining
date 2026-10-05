// discord_app/modules/guild_onboarding_home/getNextResourceChannel.tsx
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let tmp13;
      let tmp6;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(9);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingHomeSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === closure_1);
      if (findIndexResult >= 0) {
        if (stateFromStores.length > 1) {
          if (2 === stateFromStores.length) {
            let tmp12;
            if (cResult[4] !== stateFromStores[1 - findIndexResult]) {
              const items1 = [null, stateFromStores[1 - findIndexResult]];
              cResult[4] = stateFromStores[1 - findIndexResult];
              cResult[5] = items1;
              tmp12 = items1;
            } else {
              tmp12 = cResult[5];
            }
            return tmp12;
          } else {
            if (cResult[6] === stateFromStores[(findIndexResult - 1) % stateFromStores.length]) {
              let tmp10;
              if (cResult[7] === stateFromStores[(findIndexResult + 1) % stateFromStores.length]) {
                tmp10 = cResult[8];
              }
              return tmp10;
            }
            const items2 = [
              stateFromStores[(findIndexResult - 1) % stateFromStores.length],
              stateFromStores[(findIndexResult + 1) % stateFromStores.length],
            ];
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
        tmp13 = items3;
      } else {
        tmp13 = cResult[3];
      }
      return tmp13;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const items = [GuildOnboardingHomeSettingsStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () =>
        GuildOnboardingHomeSettingsStore.getResourceChannels(closure_0),
      );
      const findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === closure_1);
      if (findIndexResult >= 0) {
        let items2;
        if (stateFromStores.length > 1) {
          if (2 === stateFromStores.length) {
            const items1 = [null, stateFromStores[1 - findIndexResult]];
            items2 = items1;
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
const result = size.fileFinishedImporting("modules/guild_onboarding_home/getNextResourceChannel.tsx");

export default function getCurrentAndNextResourceChannel(guildId, arg1) {
  let items;
  let closure_0 = arg1;
  const resourceChannels = GuildOnboardingHomeSettingsStore.getResourceChannels(guildId);
  const findIndexResult = resourceChannels.findIndex((channelId) => channelId.channelId === closure_0);
  if (findIndexResult < 0) {
    items = [null, null];
  } else {
    items = [resourceChannels[findIndexResult], resourceChannels[(findIndexResult + 1) % resourceChannels.length]];
  }
  return items;
}
export const usePreviousAndNextResourceChannel = tmp2;
