// === Module 5690: GuildStickers ===

// Module 5690 (GuildStickers)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2;

let tmp2 = new LoggerDefault("GuildStickers");
let closure_3 = tmp2;
class GuildStickers {
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
      GUILD_STICKERS_UPDATE(arg0, arg1) {
        return obj.handleGuildStickersUpdate(arg0, arg1);
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
      let logger;
      let stickersResult;
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
              const obj4 = { value: stickersResult.getMapEntries(), done: false };
              stickersResult = obj6.stickers(tmp);
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
    const stickersTransactionResult = obj.stickersTransaction(database);
    stickersTransactionResult.deleteAllExcept(items);
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
    const replaced = this.replace(guild.guild.id, guild.guild.stickers, arg1);
  }
  handleGuildDelete(guild, arg1) {
    this.delete(guild.guild.id, arg1);
  }
  handleGuildStickersUpdate(guildId, arg1) {
    const replaced = this.replace(guildId.guildId, guildId.stickers, arg1);
  }
  handleBackgroundSync(promisesForBackgroundSyncToWaitOn, arg1) {
    const self = this;
    let closure_0 = arg1;
    const prop = promisesForBackgroundSyncToWaitOn.promisesForBackgroundSyncToWaitOn;
    const stickers = promisesForBackgroundSyncToWaitOn.stickers;
    prop.push(Promise.all(stickers.map((dataMode) => {
      if ("unavailable" === dataMode.dataMode) {
        return Promise.resolve();
      } else if ("full" === dataMode.dataMode) {
        const _HermesInternal2 = HermesInternal;
        closure_3.verbose("Replacing " + dataMode.entities.length + " stickers for " + dataMode.guildId);
        const replaced = self.replace(dataMode.guildId, dataMode.entities, closure_0);
      } else {
        const tmp = dataMode.updatedEntities.length > 0 || dataMode.deletedEntityIds.length > 0;
        if (tmp) {
          const _HermesInternal = HermesInternal;
          closure_3.verbose("Updating " + dataMode.updatedEntities.length + " and deleting " + dataMode.deletedEntityIds.length + " stickers for " + dataMode.guildId);
          self.update(dataMode.guildId, dataMode.updatedEntities, dataMode.deletedEntityIds, closure_0);
        }
      }
    })));
  }
  handleOneGuildCreate(arg0, arg1) {
    let id;
    let stickers;
    ({ id, stickers } = arg0);
    const op = stickers.op;
    const self = this;
    if ("full_sync" === op) {
      const replaced = self.replace(id, stickers.items, arg1);
    } else if ("update" === op) {
      self.update(id, stickers.writes, stickers.deletes, arg1);
    }
  }
  resetInMemoryState() {

  }
  replace(arg0, arg1, database) {
    const obj = DatabaseDaosDefault;
    const stickersTransactionResult = obj.stickersTransaction(database);
    const replaced = stickersTransactionResult.replaceAll(arg0, arg1);
  }
  delete(arg0, database) {
    const obj = DatabaseDaosDefault;
    const stickersTransactionResult = obj.stickersTransaction(database);
    stickersTransactionResult.delete(arg0);
  }
  update(arg0, arg1, arg2, database) {
    const obj = DatabaseDaosDefault;
    const stickersTransactionResult = obj.stickersTransaction(database);
    stickersTransactionResult.putAll(arg0, arg1);
    const tmp2 = arg2[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let deleteResult = stickersTransactionResult.delete(arg0, tmp3);
      continue;
    }
  }
}
const prototype = GuildStickers.prototype;
let obj = Object.create(GuildStickers.prototype);
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
const result = size.fileFinishedImporting("modules/app_database/modules/GuildStickers.tsx");

export default obj;