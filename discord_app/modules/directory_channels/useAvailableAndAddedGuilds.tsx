// === Module 12318: useAvailableAndAddedGuilds ===

// Module 12318 (useAvailableAndAddedGuilds)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 12312 */;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default function useAvailableAndAddedGuilds(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  let obj = require("initialize");
  let items = [GuildDirectoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getAdminGuildEntryIds(closure_1));
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
    (async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp2;
              closure_2_2(true);
              let obj1 = v3(stateFromStores[10]);
              c1 = 1;
              v3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.fetchGuildEntriesForIds(closure_2_1, stateFromStoresArray.map((id) => id.id));
              return obj1;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
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
  obj = { availableGuilds: null, addedGuilds: null, loading: tmp[0] };
  const items3 = [stateFromStoresArray, stateFromStores];
  obj.availableGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return !hasItem;
  }), items3);
  const items4 = [stateFromStoresArray, stateFromStores];
  obj.addedGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return hasItem;
  }), items4);
  return obj;
};