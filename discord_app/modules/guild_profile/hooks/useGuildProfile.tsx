// === Module 9222: useGuildProfile ===

// Module 9222 (useGuildProfile)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildProfileStore from "GuildProfileStore" /* 9221 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  _require = guildId;
  const items = [GuildProfileStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildProfileStore.getProfile(closure_0));
  const obj = require("initialize");
  const items1 = [GuildProfileStore];
  const obj3 = { guildProfile: stateFromStores, fetchGuildProfile: null, fetchStatus: null };
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildProfileStore.getFetchStatus(closure_0));
  const items2 = [guildId];
  obj3.fetchGuildProfile = noop.useCallback(asyncGeneratorStep(async () => {
    let flag = guildId;
    if (guildId === undefined) {
      flag = false;
    }
    closure_129_0 = flag;
    await "flex";
    await closure_0(tmp2[4]).getGuildProfile(closure_130_0, closure_129_0);
    return value;
  }), items2);
  obj3.fetchStatus = stateFromStores1;
  return obj3;
};