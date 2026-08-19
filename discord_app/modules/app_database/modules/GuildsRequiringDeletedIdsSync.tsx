// === Module 5398: getAll ===

// Module 5398 (getAll)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import obj132 from "obj132" /* 2 */;

let obj132 = importDefault;
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
          }
    };
    return obj;
  }
}
const prototype = GuildsRequiringDeletedIdsSync.prototype;
prototype["getAll"] = function getAll() {
  return callback(function*() {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp2;
            closure_0 = undefined;
            const result = closure_1_0(table[1]).guildsRequiringDeletedIdsSync();
            if (null == result) {
              const _Set2 = Set;
              const set = new Set();
              c2 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = set;
              return obj1;
            } else {
              table = 1;
              c2 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = result.getMany();
              return obj2;
            }
            const obj7 = closure_1_0(table[1]);
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          const _Set = Set;
          const set1 = new Set(closure_0.map((item, index) => item.id));
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = set1;
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
  const found = guilds.filter((item, index) => item.unableToSyncDeletes);
  const mapped = found.map((item, index) => ({ id: item.id }));
  if (mapped.length > 0) {
    const result = obj132(1955).guildsRequiringDeletedIdsSyncTransaction(database);
    result.putAll(mapped);
    const obj = obj132(1955);
  }
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(guilds, database) {
  guilds = guilds.guilds;
  const found = guilds.filter((item, index) => "partial" === item.data_mode && item.unable_to_sync_deletes);
  const mapped = found.map((item, index) => ({ id: item.id }));
  if (mapped.length > 0) {
    const result = obj132(1955).guildsRequiringDeletedIdsSyncTransaction(database);
    result.putAll(mapped);
    const obj = obj132(1955);
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, database) {
  guild = guild.guild;
  if (guild.unableToSyncDeletes) {
    let obj = obj132(1955);
    const result = obj.guildsRequiringDeletedIdsSyncTransaction(database);
    obj = { id: null };
    obj[0] = guild.id;
    result.put(obj);
  }
};
prototype["handleDeletedEntityIds"] = function handleDeletedEntityIds(guild_id, database) {
  const result = obj132(1955).guildsRequiringDeletedIdsSyncTransaction(database);
  result.delete(guild_id.guild_id);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
obj132 = Object.create(GuildsRequiringDeletedIdsSync.prototype);
obj132.actions = {
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
  }
};
let result = obj132.fileFinishedImporting("modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx");

export default obj132;