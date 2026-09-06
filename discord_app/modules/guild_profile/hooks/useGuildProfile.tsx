// === Module 9187: useGuildProfile ===

// Module 9187 (useGuildProfile)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildProfileStore from "GuildProfileStore" /* 9065 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  _require = guildId;
  let obj = require("initialize");
  const items = [GuildProfileStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildProfileStore.getProfile(closure_0));
  const items1 = [GuildProfileStore];
  obj = { guildProfile: stateFromStores, fetchGuildProfile: null, fetchStatus: null };
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildProfileStore.getFetchStatus(closure_0));
  const items2 = [guildId];
  obj.fetchGuildProfile = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_129_0 = undefined;
            let flag = guildId;
            if (guildId === undefined) {
              flag = false;
            }
            closure_129_0 = flag;
            c3 = 1;
            c4 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            let obj2 = guildId(tmp2[4]);
            c3 = 2;
            c4 = 1;
            obj2 = { value: null, done: false };
            obj2.value = obj2.getGuildProfile(closure_130_0, closure_129_0);
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        c4 = tmp;
        throw tmp12;
      }
    }
  }), items2);
  obj.fetchStatus = stateFromStores1;
  return obj;
};