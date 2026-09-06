// discord_app/modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

class GuildsRequiringDeletedIdsSync {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
        return obj.handleBackgroundSync(arg0, arg1);
      },
      CONNECTION_OPEN(arg0, arg1) {
        return obj.handleConnectionOpen(arg0, arg1);
      },
      GUILD_CREATE(arg0, arg1) {
        return obj.handleGuildCreate(arg0, arg1);
      },
      DELETED_ENTITY_IDS(arg0, arg1) {
        return obj.handleDeletedEntityIds(arg0, arg1);
      },
    };
    return obj;
  }
}
const prototype = GuildsRequiringDeletedIdsSync.prototype;
prototype["getAll"] = function getAll() {
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            const result = DatabaseDaosDefault.guildsRequiringDeletedIdsSync();
            if (null == result) {
              const _Set2 = Set;
              const set = new Set();
              c2 = 3;
              const obj1 = { value: set, done: true };
              return obj1;
            } else {
              c1 = 1;
              c2 = 1;
              const obj2 = { value: result.getMany(), done: false };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_128_0 = value;
          const _Set = Set;
          const set1 = new Set(closure_128_0.map((id) => id.id));
          c2 = 3;
          obj = { value: set1, done: true };
          return obj;
        }
      } catch (tmp18) {
        c2 = tmp;
        throw tmp18;
      }
    }
  })();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(guilds, database) {
  guilds = guilds.guilds;
  const found = guilds.filter((unableToSyncDeletes) => unableToSyncDeletes.unableToSyncDeletes);
  const mapped = found.map((id) => ({ id: id.id }));
  if (mapped.length > 0) {
    const result = DatabaseDaosDefault.guildsRequiringDeletedIdsSyncTransaction(database);
    result.putAll(mapped);
  }
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(guilds, database) {
  guilds = guilds.guilds;
  const found = guilds.filter((data_mode) => "partial" === data_mode.data_mode && data_mode.unable_to_sync_deletes);
  const mapped = found.map((id) => ({ id: id.id }));
  if (mapped.length > 0) {
    const result = DatabaseDaosDefault.guildsRequiringDeletedIdsSyncTransaction(database);
    result.putAll(mapped);
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, database) {
  guild = guild.guild;
  if (guild.unableToSyncDeletes) {
    let obj = DatabaseDaosDefault;
    const result = obj.guildsRequiringDeletedIdsSyncTransaction(database);
    obj = { id: guild.id };
    result.put(obj);
  }
};
prototype["handleDeletedEntityIds"] = function handleDeletedEntityIds(guild_id, database) {
  const result = DatabaseDaosDefault.guildsRequiringDeletedIdsSyncTransaction(database);
  result.delete(guild_id.guild_id);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {};
let size = Object.create(GuildsRequiringDeletedIdsSync.prototype);
let closure_129_0 = size;
size.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  GUILD_CREATE(arg0, arg1) {
    return obj.handleGuildCreate(arg0, arg1);
  },
  DELETED_ENTITY_IDS(arg0, arg1) {
    return obj.handleDeletedEntityIds(arg0, arg1);
  },
};
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx");

export default size;
