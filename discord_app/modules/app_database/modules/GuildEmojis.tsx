// === Module 5644: GuildEmojis ===

// Module 5644 (GuildEmojis)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2;

let tmp2 = new LoggerDefault("GuildEmojis");
let closure_3 = tmp2;
class GuildEmojis {
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
  getAsync(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let emojisResult;
      let logger;
      let value;
      if (logger === 2) {
        logger = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_2;
          let tmp;
          logger = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              logger = 3;
              throw value;
            } else if (arg0 === 2) {
              logger = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value = undefined;
              closure_2 = undefined;
              const _performance2 = performance;
              tmp = performance.now();
              const obj6 = tmp(value[2]);
              c2 = 1;
              logger = 1;
              const obj4 = { value: emojisResult.getMapEntries(), done: false };
              emojisResult = obj6.emojis(tmp);
              return obj4;
            }
          } else if (arg0 === 1) {
            logger = 3;
            throw value;
          } else if (arg0 === 2) {
            logger = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const _performance = performance;
            closure_2 = performance.now();
            const _HermesInternal = HermesInternal;
            logger.log("asynchronously loaded in " + closure_2 - tmp + "ms (guilds: " + value.length + ")");
            logger = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp5) {
          logger = 3;
          throw tmp5;
        }
      }
    })();
  }
  handleConnectionOpen(unavailableGuilds, database) {
    const self = this;
    const items = [...unavailableGuilds.unavailableGuilds];
    const obj = DatabaseDaosDefault;
    const emojisTransactionResult = obj.emojisTransaction(database);
    emojisTransactionResult.deleteAllExcept(items);
    const guilds = unavailableGuilds.guilds;
    for (const item10027 of guilds) {
      let handleOneGuildCreateResult = self.handleOneGuildCreate(item10027, database);
      continue;
    }
  }
  handleGuildCreate(guild, arg1) {
    this.handleOneGuildCreate(guild.guild, arg1);
  }
  handleGuildUpdate(guild, arg1) {
    const replaced = this.replace(guild.guild.id, guild.guild.emojis, arg1);
  }
  handleGuildDelete(guild, arg1) {
    this.delete(guild.guild.id, arg1);
  }
  handleGuildEmojisUpdate(guildId, arg1) {
    const replaced = this.replace(guildId.guildId, guildId.emojis, arg1);
  }
  handleBackgroundSync(promisesForBackgroundSyncToWaitOn, arg1) {
    const self = this;
    let closure_0 = arg1;
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
        const tmp = dataMode.updatedEntities.length > 0 || dataMode.deletedEntityIds.length > 0;
        if (tmp) {
          const _HermesInternal = HermesInternal;
          closure_3.verbose("Updating " + dataMode.updatedEntities.length + " and deleting " + dataMode.deletedEntityIds.length + " emojis for " + dataMode.guildId);
          self.update(dataMode.guildId, dataMode.updatedEntities, dataMode.deletedEntityIds, closure_0);
        }
      }
    })));
  }
  handleOneGuildCreate(emojis, arg1) {
    const op = emojis.emojis.op;
    const self = this;
    if ("full_sync" === op) {
      const replaced = self.replace(emojis.id, emojis.emojis.items, arg1);
    } else if ("update" === op) {
      self.update(emojis.id, emojis.emojis.writes, emojis.emojis.deletes, arg1);
    } else {
      emojis = emojis.emojis;
    }
  }
  resetInMemoryState() {

  }
  replace(arg0, arg1, database) {
    const obj = DatabaseDaosDefault;
    const emojisTransactionResult = obj.emojisTransaction(database);
    const replaced = emojisTransactionResult.replaceAll(arg0, arg1);
  }
  delete(arg0, database) {
    const obj = DatabaseDaosDefault;
    const emojisTransactionResult = obj.emojisTransaction(database);
    emojisTransactionResult.delete(arg0);
  }
  update(arg0, arg1, arg2, database) {
    const obj = DatabaseDaosDefault;
    const emojisTransactionResult = obj.emojisTransaction(database);
    emojisTransactionResult.putAll(arg0, arg1);
    const tmp2 = arg2[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let deleteResult = emojisTransactionResult.delete(arg0, tmp3);
      continue;
    }
  }
}
const prototype = GuildEmojis.prototype;
let obj = Object.create(GuildEmojis.prototype);
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
const result = size.fileFinishedImporting("modules/app_database/modules/GuildEmojis.tsx");

export default obj;