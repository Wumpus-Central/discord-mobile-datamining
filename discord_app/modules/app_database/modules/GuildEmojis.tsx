// === Module 5288: getAsync ===

// Module 5288 (getAsync)
import timestampDefault from "timestamp" /* 3 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import set from "set" /* 2 */;

let set = importDefault;
let closure_3 = new timestampDefault("GuildEmojis");
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
  return callback(function*() {
    let length = tmp5;
    closure_0 = tmp2;
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = closure_1_0(closure_1_1[2]);
    length = yield closure_1_0(closure_1_1[2]).emojis(closure_1_0).getMapEntries();
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    logger.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (guilds: " + length.length + ")");
    return length;
  })();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  const items = [...unavailableGuilds.unavailableGuilds];
  const obj = set(1956);
  set(1956).emojisTransaction(database).deleteAllExcept(items);
  for (const item10027 of tmp2) {
    let handleOneGuildCreateResult = self.handleOneGuildCreate(item10027, arg1);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  this.handleOneGuildCreate(guild.guild, arg1);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  const replaced = this.replace(guild.guild.id, guild.guild.emojis, arg1);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  this.delete(guild.guild.id, arg1);
};
prototype["handleGuildEmojisUpdate"] = function handleGuildEmojisUpdate(guildId) {
  const replaced = this.replace(guildId.guildId, guildId.emojis, arg1);
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(promisesForBackgroundSyncToWaitOn) {
  const self = this;
  closure_0 = arg1;
  const prop = promisesForBackgroundSyncToWaitOn.promisesForBackgroundSyncToWaitOn;
  const emojis = promisesForBackgroundSyncToWaitOn.emojis;
  prop.push(Promise.all(emojis.map((dataMode) => {
    if ("unavailable" === dataMode.dataMode) {
      return Promise.resolve();
    } else if ("full" === dataMode.dataMode) {
      const _HermesInternal2 = HermesInternal;
      closure_1_3.verbose("Replacing " + dataMode.entities.length + " emojis for " + dataMode.guildId);
      const replaced = self.replace(dataMode.guildId, dataMode.entities, closure_0);
    } else {
      if (tmp) {
        const _HermesInternal = HermesInternal;
        closure_1_3.verbose("Updating " + dataMode.updatedEntities.length + " and deleting " + dataMode.deletedEntityIds.length + " emojis for " + dataMode.guildId);
        self.update(dataMode.guildId, dataMode.updatedEntities, dataMode.deletedEntityIds, closure_0);
      }
      tmp = dataMode.updatedEntities.length > 0 || dataMode.deletedEntityIds.length > 0;
    }
  })));
};
prototype["handleOneGuildCreate"] = function handleOneGuildCreate(emojis) {
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
  const obj = set(1956);
  const replaced = set(1956).emojisTransaction(database).replaceAll(arg0, arg1);
};
prototype["delete"] = function delete(arg0, database) {
  const obj = set(1956);
  set(1956).emojisTransaction(database).delete(arg0);
};
prototype["update"] = function update(arg0, arg1, arg2, database) {
  const emojisTransactionResult = set(1956).emojisTransaction(database);
  emojisTransactionResult.putAll(arg0, arg1);
  const obj = set(1956);
  while (tmp2 !== undefined) {
    let deleteResult = emojisTransactionResult.delete(arg0, tmp3);
    continue;
  }
};
set = Object.create(GuildEmojis.prototype);
set.actions = {
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
const result = set.fileFinishedImporting("modules/app_database/modules/GuildEmojis.tsx");

export default set;