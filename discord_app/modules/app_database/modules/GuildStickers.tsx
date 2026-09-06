// === Module 5505: getAsync ===

// Module 5505 (getAsync)
import timestampDefault from "timestamp" /* 3 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import set from "set" /* 2 */;

let set = importDefault;
let closure_3 = new timestampDefault("GuildStickers");
class GuildStickers {
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
      GUILD_STICKERS_UPDATE(arg0, arg1) {
            return obj.handleGuildStickersUpdate(arg0, arg1);
          },
      GUILD_UPDATE(arg0, arg1) {
            return obj.handleGuildUpdate(arg0, arg1);
          }
    };
    return obj;
  }
}
const prototype = GuildStickers.prototype;
prototype["getAsync"] = function getAsync(arg0) {
  closure_0 = arg0;
  return callback(function*() {
    let length = tmp5;
    closure_0 = tmp2;
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = closure_1_0(closure_1_1[2]);
    length = yield closure_1_0(closure_1_1[2]).stickers(closure_1_0).getMapEntries();
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    logger.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (guilds: " + length.length + ")");
    return length;
  })();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  const items = [...unavailableGuilds.unavailableGuilds];
  const obj = set(1986);
  set(1986).stickersTransaction(database).deleteAllExcept(items);
  for (const item10027 of tmp2) {
    let handleOneGuildCreateResult = self.handleOneGuildCreate(item10027, arg1);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  this.handleOneGuildCreate(guild.guild, arg1);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  const replaced = this.replace(guild.guild.id, guild.guild.stickers, arg1);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  this.delete(guild.guild.id, arg1);
};
prototype["handleGuildStickersUpdate"] = function handleGuildStickersUpdate(guildId) {
  const replaced = this.replace(guildId.guildId, guildId.stickers, arg1);
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(promisesForBackgroundSyncToWaitOn) {
  const self = this;
  closure_0 = arg1;
  const prop = promisesForBackgroundSyncToWaitOn.promisesForBackgroundSyncToWaitOn;
  const stickers = promisesForBackgroundSyncToWaitOn.stickers;
  prop.push(Promise.all(stickers.map((dataMode) => {
    if ("unavailable" === dataMode.dataMode) {
      return Promise.resolve();
    } else if ("full" === dataMode.dataMode) {
      const _HermesInternal2 = HermesInternal;
      closure_1_3.verbose("Replacing " + dataMode.entities.length + " stickers for " + dataMode.guildId);
      const replaced = self.replace(dataMode.guildId, dataMode.entities, closure_0);
    } else {
      if (tmp) {
        const _HermesInternal = HermesInternal;
        closure_1_3.verbose("Updating " + dataMode.updatedEntities.length + " and deleting " + dataMode.deletedEntityIds.length + " stickers for " + dataMode.guildId);
        self.update(dataMode.guildId, dataMode.updatedEntities, dataMode.deletedEntityIds, closure_0);
      }
      tmp = dataMode.updatedEntities.length > 0 || dataMode.deletedEntityIds.length > 0;
    }
  })));
};
prototype["handleOneGuildCreate"] = function handleOneGuildCreate(arg0, arg1) {
  ({ id, stickers } = arg0);
  const op = stickers.op;
  const self = this;
  if ("full_sync" === op) {
    const replaced = self.replace(id, stickers.items, arg1);
  } else if ("update" === op) {
    self.update(id, stickers.writes, stickers.deletes, arg1);
  }
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
prototype["replace"] = function replace(arg0, arg1, database) {
  const obj = set(1986);
  const replaced = set(1986).stickersTransaction(database).replaceAll(arg0, arg1);
};
prototype["delete"] = function delete(arg0, database) {
  const obj = set(1986);
  set(1986).stickersTransaction(database).delete(arg0);
};
prototype["update"] = function update(arg0, arg1, arg2, database) {
  const stickersTransactionResult = set(1986).stickersTransaction(database);
  stickersTransactionResult.putAll(arg0, arg1);
  const obj = set(1986);
  while (tmp2 !== undefined) {
    let deleteResult = stickersTransactionResult.delete(arg0, tmp3);
    continue;
  }
};
set = Object.create(GuildStickers.prototype);
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
  GUILD_STICKERS_UPDATE(arg0, arg1) {
    return obj.handleGuildStickersUpdate(arg0, arg1);
  },
  GUILD_UPDATE(arg0, arg1) {
    return obj.handleGuildUpdate(arg0, arg1);
  }
};
const result = set.fileFinishedImporting("modules/app_database/modules/GuildStickers.tsx");

export default set;