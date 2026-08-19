// discord_app/modules/directory_channels/useAvailableAndAddedGuilds.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import insertUnsortedGuilds from "../../stores/SortedGuildStore.tsx";
import isFetching from "GuildDirectoryStore.tsx";
import { Permissions } from "../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

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
    const item = flattenedGuildIds.forEach((item, index) => {
      const guild = closure_2_7.getGuild(item);
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_2_8.can(Permissions.ADMINISTRATOR, guild);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              obj1[0] = obj1.fetchGuildEntriesForIds(c1, closure_1_4.map((item, index) => item.id));
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          v0 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  obj = {
    availableGuilds: React.useMemo(() => stateFromStoresArray.filter((item, index) => {
      let hasItem;
      if (set != null) {
        hasItem = set.has(item.id);
      }
      return !hasItem;
    }), items3),
    addedGuilds: React.useMemo(() => stateFromStoresArray.filter((item, index) => {
      let hasItem;
      if (set != null) {
        hasItem = set.has(item.id);
      }
      return hasItem;
    }), items4),
    loading: tmp[0]
  };
  items3 = [stateFromStoresArray, stateFromStores];
  items4 = [stateFromStoresArray, stateFromStores];
  return obj;
};