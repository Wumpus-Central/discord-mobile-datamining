// === Module 10083: useAvailableAndAddedGuilds ===

// Module 10083 (useAvailableAndAddedGuilds)
import insertUnsortedGuilds from "insertUnsortedGuilds";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import closure_9 from "insertUnsortedGuilds";
import isFetching from "isFetching";
import { Permissions } from "ME";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default function useAvailableAndAddedGuilds(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  const tmp = callback(React.useState(false), 2);
  let closure_2 = tmp[1];
  let obj = _require(stateFromStores[8]);
  let items = [isFetching];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getAdminGuildEntryIds(closure_1));
  const items1 = [closure_9, createGuildRecordFromRust, getUncachedChannelPermissions];
  const items2 = [arg0];
  const stateFromStoresArray = _require(stateFromStores[8]).useStateFromStoresArray(items1, () => {
    const flattenedGuildIds = outer1_9.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((arg0) => {
      const guild = outer2_7.getGuild(arg0);
      let canResult = null != guild;
      if (canResult) {
        canResult = outer2_8.can(outer2_11.ADMINISTRATOR, guild);
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
              let closure_0 = tmp2;
              v0(true);
              let obj1 = v0(outer1_3[10]);
              c1 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.fetchGuildEntriesForIds(c1, outer1_4.map((id) => id.id));
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