// === Module 12572: useAvailableAndAddedGuilds ===

// Module 12572 (useAvailableAndAddedGuilds)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import SortedGuildStore from "SortedGuildStore" /* 5655 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 12566 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default function useAvailableAndAddedGuilds(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  let items = [GuildDirectoryStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildDirectoryStore.getAdminGuildEntryIds(closure_1));
  let obj = require("initialize");
  const items1 = [SortedGuildStore, GuildStore, PermissionStore];
  const items2 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((item) => {
      const guild = GuildStore.getGuild(item);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
      }
      if (canResult) {
        canResult = guild.id !== closure_0;
      }
      if (canResult) {
        items.push(guild);
      }
    });
    return items;
  }, items2);
  require("useMountEffect")(() => {
    (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp2;
              closure_2_2(true);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: v3(stateFromStores[10]).fetchGuildEntriesForIds(closure_2_1, stateFromStoresArray.map((id) => id.id)), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_2(false);
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          v3 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  let obj3 = { availableGuilds: null, addedGuilds: null, loading: tmp[0] };
  const items3 = [stateFromStoresArray, stateFromStores];
  obj3.availableGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return !hasItem;
  }), items3);
  const items4 = [stateFromStoresArray, stateFromStores];
  obj3.addedGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return hasItem;
  }), items4);
  return obj3;
};