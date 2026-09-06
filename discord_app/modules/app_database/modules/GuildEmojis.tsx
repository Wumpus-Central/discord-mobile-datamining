// === Module 5465: GuildEmojis ===

// Module 5465 (GuildEmojis)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = new LoggerDefault("GuildEmojis");
class GuildEmojis {
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
      GUILD_DELETE(arg0, arg1) {
            return obj.handleGuildDelete(arg0, arg1);
          },
      GUILD_EMOJIS_UPDATE(arg0, arg1) {
            return obj.handleGuildEmojisUpdate(arg0, arg1);
          },
      GUILD_UPDATE(arg0, arg1) {
            return obj.handleGuildUpdate(arg0, arg1);
          }
    };
    return obj;
  }
}
const prototype = GuildEmojis.prototype;
prototype["getAsync"] = function getAsync(arg0) {
  closure_0 = arg0;
  return (async () => {
    const _performance2 = performance;
    closure_128_0 = performance.now();
    tmp2(tmp5[2]);
    closure_128_1 = await tmp2(tmp5[2]).emojis(tmp2).getMapEntries();
    const _performance = performance;
    closure_128_2 = performance.now();
    const _HermesInternal = HermesInternal;
    logger.log("asynchronously loaded in " + closure_128_2 - closure_128_0 + "ms (guilds: " + closure_128_1.length + ")");
    return closure_128_1;
  })();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  const items = [...unavailableGuilds.unavailableGuilds];
  DatabaseDaosDefault.emojisTransaction(database).deleteAllExcept(items);
  for (const item10027 of tmp2) {
    let handleOneGuildCreateResult = self.handleOneGuildCreate(item10027, arg1);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, arg1) {
  this.handleOneGuildCreate(guild.guild, arg1);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild, arg1) {
  const replaced = this.replace(guild.guild.id, guild.guild.emojis, arg1);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild, arg1) {
  this.delete(guild.guild.id, arg1);
};
prototype["handleGuildEmojisUpdate"] = function handleGuildEmojisUpdate(guildId, arg1) {
  const replaced = this.replace(guildId.guildId, guildId.emojis, arg1);
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(promisesForBackgroundSyncToWaitOn, arg1) {
  const self = this;
  closure_0 = arg1;
  const prop = promisesForBackgroundSyncToWaitOn.promisesForBackgroundSyncToWaitOn;
  const emojis = promisesForBackgroundSyncToWaitOn.emojis;
  prop.push(Promise.all(emojis.map((dataMode) => {
    if ("unavailable" === dataMode.dataMode) {
      return Promise.resolve();
    } else if ("full" === dataMode.dataMode) {
      const _HermesInternal2 = HermesInternal;
      closure_3.verbose("Replacing " + dataMode.entities.length + " emojis for " + dataMode.guildId);
      const replaced = self.replace(dataMode.guildId, dataMode.entities, closure_0);
    } else {
      if (tmp) {
        const _HermesInternal = HermesInternal;
        closure_3.verbose("Updating " + dataMode.updatedEntities.length + " and deleting " + dataMode.deletedEntityIds.length + " emojis for " + dataMode.guildId);
        self.update(dataMode.guildId, dataMode.updatedEntities, dataMode.deletedEntityIds, closure_0);
      }
      tmp = dataMode.updatedEntities.length > 0 || dataMode.deletedEntityIds.length > 0;
    }
  })));
};
prototype["handleOneGuildCreate"] = function handleOneGuildCreate(emojis, arg1) {
  const op = emojis.emojis.op;
  const self = this;
  if ("full_sync" === op) {
    const replaced = self.replace(emojis.id, emojis.emojis.items, arg1);
  } else if ("update" === op) {
    self.update(emojis.id, emojis.emojis.writes, emojis.emojis.deletes, arg1);
  } else {
    emojis = emojis.emojis;
  }
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
prototype["replace"] = function replace(arg0, arg1, database) {
  const replaced = DatabaseDaosDefault.emojisTransaction(database).replaceAll(arg0, arg1);
};
prototype["delete"] = function delete(arg0, database) {
  DatabaseDaosDefault.emojisTransaction(database).delete(arg0);
};
prototype["update"] = function update(arg0, arg1, arg2, database) {
  const emojisTransactionResult = DatabaseDaosDefault.emojisTransaction(database);
  emojisTransactionResult.putAll(arg0, arg1);
  while (tmp2 !== undefined) {
    let deleteResult = emojisTransactionResult.delete(arg0, tmp3);
    continue;
  }
};
let size = Object.create(GuildEmojis.prototype);
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
  GUILD_DELETE(arg0, arg1) {
    return obj.handleGuildDelete(arg0, arg1);
  },
  GUILD_EMOJIS_UPDATE(arg0, arg1) {
    return obj.handleGuildEmojisUpdate(arg0, arg1);
  },
  GUILD_UPDATE(arg0, arg1) {
    return obj.handleGuildUpdate(arg0, arg1);
  }
};
size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/modules/GuildEmojis.tsx");

export default size;