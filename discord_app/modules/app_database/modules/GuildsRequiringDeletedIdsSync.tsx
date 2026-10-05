// === Module 7135: GuildsRequiringDeletedIdsSync ===

// Module 7135 (GuildsRequiringDeletedIdsSync)
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let set;

class GuildsRequiringDeletedIdsSync {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
  getAll() {
    return (async function() {
      let c1;
      let c2;
      let closure_0;
      const obj7 = DatabaseDaosDefault;
      const result = obj7.guildsRequiringDeletedIdsSync();
      if (null == result) {
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set = new Set();
        return set;
      }
      await result.getMany();
      const tmp = value;
      const _Set = Set;
      const self = this;
      const self2 = this;
      const set1 = new Set(tmp.map((id) => id.id));
      return set1;
    })();
  }
  handleConnectionOpen(guilds, database) {
    guilds = guilds.guilds;
    const found = guilds.filter((unableToSyncDeletes) => unableToSyncDeletes.unableToSyncDeletes);
    const mapped = found.map((id) => ({ id: id.id }));
    if (mapped.length > 0) {
      const obj = DatabaseDaosDefault;
      const result = obj.guildsRequiringDeletedIdsSyncTransaction(database);
      result.putAll(mapped);
    }
  }
  handleBackgroundSync(guilds, database) {
    guilds = guilds.guilds;
    const found = guilds.filter((data_mode) => "partial" === data_mode.data_mode && data_mode.unable_to_sync_deletes);
    const mapped = found.map((id) => ({ id: id.id }));
    if (mapped.length > 0) {
      const obj = DatabaseDaosDefault;
      const result = obj.guildsRequiringDeletedIdsSyncTransaction(database);
      result.putAll(mapped);
    }
  }
  handleGuildCreate(guild, database) {
    guild = guild.guild;
    if (guild.unableToSyncDeletes) {
      const obj = DatabaseDaosDefault;
      const result = obj.guildsRequiringDeletedIdsSyncTransaction(database);
      const obj2 = { id: guild.id };
      result.put(obj2);
    }
  }
  handleDeletedEntityIds(guild_id, database) {
    const obj = DatabaseDaosDefault;
    const result = obj.guildsRequiringDeletedIdsSyncTransaction(database);
    result.delete(guild_id.guild_id);
  }
  resetInMemoryState() {

  }
}
const prototype = GuildsRequiringDeletedIdsSync.prototype;
let obj = Object.create(GuildsRequiringDeletedIdsSync.prototype);
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
let result = size.fileFinishedImporting("modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx");

export default obj;