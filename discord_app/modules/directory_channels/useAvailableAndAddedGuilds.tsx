// === Module 12318: useAvailableAndAddedGuilds ===

// Module 12318 (useAvailableAndAddedGuilds)
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import closure_7 from "createGuildRecordFromRust" /* 1979 */;
import closure_8 from "getUncachedChannelPermissions" /* 4199 */;
import closure_9 from "insertUnsortedGuilds" /* 5438 */;
import closure_10 from "isFetching" /* 12312 */;
import { Permissions } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default function useAvailableAndAddedGuilds(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  const tmp = callback(React.useState(false), 2);
  closure_2 = tmp[1];
  let obj = _require(stateFromStores[8]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getAdminGuildEntryIds(closure_1));
  const items1 = [closure_9, closure_7, closure_8];
  const items2 = [arg0];
  const stateFromStoresArray = _require(stateFromStores[8]).useStateFromStoresArray(items1, () => {
    const flattenedGuildIds = closure_1_9.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((arg0) => {
      const guild = closure_2_7.getGuild(arg0);
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_2_8.can(closure_2_11.ADMINISTRATOR, guild);
      }
      if (canResult) {
        canResult = guild.id !== items;
      }
      if (canResult) {
        items.push(guild);
      }
    });
    return items;
  }, items2);
  importDefault(stateFromStores[9])(() => {
    stateFromStoresArray(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp2;
              v0(true);
              obj1 = v0(closure_1_3[10]);
              c1 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.fetchGuildEntriesForIds(c1, closure_1_4.map((id) => id.id));
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0(false);
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          v0 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  obj = {
    availableGuilds: React.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem;
      if (closure_3 != null) {
        hasItem = closure_3.has(id.id);
      }
      return !hasItem;
    }), items3),
    addedGuilds: React.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem;
      if (closure_3 != null) {
        hasItem = closure_3.has(id.id);
      }
      return hasItem;
    }), items4),
    loading: tmp[0]
  };
  items3 = [stateFromStoresArray, stateFromStores];
  items4 = [stateFromStoresArray, stateFromStores];
  return obj;
};