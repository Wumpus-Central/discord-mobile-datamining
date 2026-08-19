// === Module 5400: getAsync ===

// Module 5400 (getAsync)
import timestampDefault from "timestamp" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import obj132 from "obj132" /* 2 */;

let obj132 = importDefault;
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
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = closure_1_0(closure_1_1[2]);
    const length = yield closure_1_0(closure_1_1[2]).stickers(closure_1_0).getMapEntries();
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    logger.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (guilds: " + length.length + ")");
    return length;
  })();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  const items = [...unavailableGuilds.unavailableGuilds];
  const obj = obj132(1955);
  obj132(1955).stickersTransaction(database).deleteAllExcept(items);
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
  prop.push(Promise.all(stickers.map((item, index) => {
    if ("unavailable" === item.dataMode) {
      return Promise.resolve();
    } else if ("full" === item.dataMode) {
      const _HermesInternal2 = HermesInternal;
      closure_1_3.verbose("Replacing " + item.entities.length + " stickers for " + item.guildId);
      const replaced = self.replace(item.guildId, item.entities, closure_0);
    } else {
      if (tmp) {
        const _HermesInternal = HermesInternal;
        closure_1_3.verbose("Updating " + item.updatedEntities.length + " and deleting " + item.deletedEntityIds.length + " stickers for " + item.guildId);
        self.update(item.guildId, item.updatedEntities, item.deletedEntityIds, closure_0);
      }
      tmp = item.updatedEntities.length > 0 || item.deletedEntityIds.length > 0;
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
  const obj = obj132(1955);
  const replaced = obj132(1955).stickersTransaction(database).replaceAll(arg0, arg1);
};
prototype["delete"] = function delete(arg0, database) {
  const obj = obj132(1955);
  obj132(1955).stickersTransaction(database).delete(arg0);
};
prototype["update"] = function update(arg0, arg1, arg2, database) {
  const stickersTransactionResult = obj132(1955).stickersTransaction(database);
  stickersTransactionResult.putAll(arg0, arg1);
  const obj = obj132(1955);
  while (tmp2 !== undefined) {
    let deleteResult = stickersTransactionResult.delete(arg0, tmp3);
    continue;
  }
};
obj132 = Object.create(GuildStickers.prototype);
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
const result = obj132.fileFinishedImporting("modules/app_database/modules/GuildStickers.tsx");

export default obj132;