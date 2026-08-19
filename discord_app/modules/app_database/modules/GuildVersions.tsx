// === Module 5401: getCommittedVersions ===

// Module 5401 (getCommittedVersions)
import timestampDefault from "timestamp" /* 3 */;
import itemsDefault from "items" /* 1955 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import obj132 from "obj132" /* 2 */;

let obj132 = fn;
let closure_6 = new timestampDefault("GuildVersions");
class GuildVersions {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj.pending = map;
    map1 = new Map();
    obj.committed = map1;
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
            return obj.handleBackgroundSync(arg0, arg1);
          },
      CHANNEL_CREATE(arg0, arg1) {
            return obj.handleChannelCreate(arg0, arg1);
          },
      CHANNEL_DELETE(arg0, arg1) {
            return obj.handleChannelDelete(arg0, arg1);
          },
      CHANNEL_UPDATES(arg0, arg1) {
            return obj.handleChannelUpdates(arg0, arg1);
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
      GUILD_ROLE_CREATE(arg0, arg1) {
            return obj.handleGuildRoleChange(arg0, arg1);
          },
      GUILD_ROLE_DELETE(arg0, arg1) {
            return obj.handleGuildRoleDelete(arg0, arg1);
          },
      GUILD_ROLE_UPDATE(arg0, arg1) {
            return obj.handleGuildRoleChange(arg0, arg1);
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
const prototype = GuildVersions.prototype;
prototype["getCommittedVersions"] = function getCommittedVersions() {
  return callback2(function*() {
    if (logger === 2) {
      logger = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arr;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arr;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        logger = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            logger = 3;
            throw arr;
          } else if (arg0 === 2) {
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = arr;
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_0 = undefined;
            c4 = 1;
            let obj3 = closure_1_1(closure_1_2[4]);
            const guildVersionsResult = obj3.guildVersions();
            if (null == guildVersionsResult) {
              c4 = 0;
              logger = 3;
              obj1 = { value: null, done: true };
              obj1[0] = {};
              return obj1;
            } else {
              c5 = 2;
              logger = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = guildVersionsResult.getMany();
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_1 = closure_3;
          logger.warn("couldn't load guild versions", closure_1);
          logger = 3;
          obj3 = { value: null, done: true };
          obj3[0] = {};
          return obj3;
        } else if (arg0 === 1) {
          logger = 3;
          throw arr;
        } else if (arg0 === 2) {
          c4 = 0;
          logger = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arr;
          return obj4;
        } else {
          closure_0 = arr.map((item, index) => {
            const items = [, ];
            ({ id: arr[0], version: arr[1] } = item);
            return items;
          });
          if (closure_0 == null) {
            closure_0 = [];
          }
          c4 = 0;
          logger = 3;
          obj = { value: null, done: true };
          obj[0] = Object.fromEntries(closure_0);
          return obj;
        }
      } catch (tmp20) {
        closure_3 = tmp20;
        if (tmp4 === c4) {
          logger = tmp2;
          throw tmp20;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
prototype["remove"] = function remove(id) {
  this.deleteWith(id);
  this.commit(arg1);
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(arg0, arg1) {
  const self = this;
  const iter = arg0.guilds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("unavailable" !== nextResult.data_mode) {
      let items = [tmp2];
      let updateWithResult = self.updateWith(tmp2.id, items);
    }
    if (null == guild.getGuild(tmp2.id)) {
      let removeResult = self.remove(tmp2.id, arg1);
    }
    continue;
  }
  self.commit(arg1);
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  this.reset();
  const items = [...unavailableGuilds.unavailableGuilds];
  const result = itemsDefault.guildVersionsTransaction(database);
  result.deleteAllExcept(items);
  for (const item10029 of tmp3) {
    let items1 = [item10029];
    let updateWithResult = self.updateWith(item10029.id, items1);
    continue;
  }
  self.commit(database);
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  const self = this;
  guild = guild.guild;
  const id = guild.guild.id;
  const items = [guild];
  this.updateWith(id, items);
  const emojis = guild.emojis;
  const op = emojis.op;
  if ("full_sync" === op) {
    let writes = emojis.items;
  } else if ("update" === op) {
    writes = emojis.writes;
  } else {
    obj132(1370).assertNever(emojis);
    const obj = obj132(1370);
  }
  this.updateWith(id, writes);
  const stickers = guild.stickers;
  const op2 = stickers.op;
  if ("full_sync" === op2) {
    let writes2 = stickers.items;
  } else if ("update" === op2) {
    writes2 = stickers.writes;
  } else {
    obj132(1370).assertNever(stickers);
    const obj2 = obj132(1370);
  }
  self.updateWith(id, writes2);
  const channels = guild.channels;
  const op3 = channels.op;
  if ("full_sync" === op3) {
    let writes3 = channels.items;
  } else if ("update" === op3) {
    writes3 = channels.writes;
  } else {
    obj132(1370).assertNever(channels);
    const obj3 = obj132(1370);
  }
  self.updateWith(id, writes3);
  const roles = guild.roles;
  const op4 = roles.op;
  if ("full_sync" === op4) {
    let writes4 = roles.items;
  } else if ("update" === op4) {
    writes4 = roles.writes;
  } else {
    obj132(1370).assertNever(roles);
    const obj4 = obj132(1370);
  }
  self.updateWith(id, writes4);
  self.commit(arg1);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  guild = guild.guild;
  const id = guild.guild.id;
  const items = [guild];
  this.updateWith(id, items);
  this.updateWith(id, guild.emojis);
  this.updateWith(id, guild.stickers);
  this.updateWith(id, guild.roles);
  this.commit(arg1);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  this.deleteWith(guild.guild.id);
  this.commit(arg1);
};
prototype["handleGuildRoleChange"] = function handleGuildRoleChange(role) {
  const items = [role.role];
  this.updateWith(role.guildId, items);
  this.commit(arg1);
};
prototype["handleGuildRoleDelete"] = function handleGuildRoleDelete(version) {
  const items = [{ version: version.version }];
  this.updateWith(version.guildId, items);
  this.commit(arg1);
};
prototype["handleGuildEmojisUpdate"] = function handleGuildEmojisUpdate(guildId) {
  this.updateWith(guildId.guildId, guildId.emojis);
  this.commit(arg1);
};
prototype["handleGuildStickersUpdate"] = function handleGuildStickersUpdate(guildId) {
  this.updateWith(guildId.guildId, guildId.stickers);
  this.commit(arg1);
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  const self = this;
  if (null != channel.channel.guild_id) {
    const items = [channel.channel];
    self.updateWith(channel.channel.guild_id, items);
  }
  self.commit(arg1);
};
prototype["handleChannelUpdates"] = function handleChannelUpdates(arg0, arg1) {
  const self = this;
  const iter = arg0.channels[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.guild_id) {
      let items = [tmp2];
      let updateWithResult = self.updateWith(tmp2.guild_id, items);
    }
    continue;
  }
  self.commit(arg1);
};
prototype["handleChannelDelete"] = function handleChannelDelete(channel) {
  const self = this;
  if (null != channel.channel.guild_id) {
    const items = [channel.channel];
    self.updateWith(channel.channel.guild_id, items);
  }
  self.commit(arg1);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.reset();
};
prototype["reset"] = function reset() {
  this.committed = new Map();
  const map = new Map();
  this.pending = new Map();
};
prototype["deleteWith"] = function deleteWith(id) {
  const pending = this.pending;
  const result = pending.set(id, null);
};
prototype["updateWith"] = function updateWith(arg0, arg1) {
  if (0 !== arg1.length) {
    const self = this;
    const committed = this.committed;
    let num = committed.get(arg0);
    if (num == null) {
      num = 0;
    }
    const pending = self.pending;
    let num2 = pending.get(arg0);
    if (num2 == null) {
      num2 = 0;
    }
    const bound = Math.max(num, num2);
    const latestVersion = self.computeLatestVersion(bound, arg1);
    if (latestVersion > bound) {
      const pending2 = self.pending;
      const result = pending2.set(arg0, latestVersion);
    }
  }
};
prototype["computeLatestVersion"] = function computeLatestVersion(bound, arg1) {
  while (tmp2 !== undefined) {
    let num = tmp3.version;
    if (num == null) {
      num = 0;
    }
    bound = Math.max(bound, num);
    continue;
  }
  return bound;
};
prototype["commit"] = function commit(database) {
  const self = this;
  if (this.pending.size > 0) {
    const result = itemsDefault.guildVersionsTransaction(database);
    const pending2 = self.pending;
    const tmp21 = pending2[Symbol.iterator]();
    while (tmp21 !== undefined) {
      let tmp5 = callback(tmp2, 2);
      [tmp6, tmp7] = tmp5;
      if (null != tmp7) {
        let obj = { id: null, version: null };
        obj[0] = tmp6;
        obj[1] = tmp7;
        let putResult = result.put(obj);
        let committed2 = self.committed;
        let result1 = committed2.set(tmp6, tmp7);
      } else {
        let deleteResult = result.delete(tmp6);
        let committed = self.committed;
        let deleteResult1 = committed.delete(tmp6);
      }
      continue;
    }
    const pending = self.pending;
    pending.clear();
  }
};
obj132 = Object.create(GuildVersions.prototype);
let tmp2 = new timestampDefault("GuildVersions");
obj132.pending = new Map();
let map = new Map();
obj132.committed = new Map();
obj132.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CHANNEL_CREATE(arg0, arg1) {
    return obj.handleChannelCreate(arg0, arg1);
  },
  CHANNEL_DELETE(arg0, arg1) {
    return obj.handleChannelDelete(arg0, arg1);
  },
  CHANNEL_UPDATES(arg0, arg1) {
    return obj.handleChannelUpdates(arg0, arg1);
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
  GUILD_ROLE_CREATE(arg0, arg1) {
    return obj.handleGuildRoleChange(arg0, arg1);
  },
  GUILD_ROLE_DELETE(arg0, arg1) {
    return obj.handleGuildRoleDelete(arg0, arg1);
  },
  GUILD_ROLE_UPDATE(arg0, arg1) {
    return obj.handleGuildRoleChange(arg0, arg1);
  },
  GUILD_STICKERS_UPDATE(arg0, arg1) {
    return obj.handleGuildStickersUpdate(arg0, arg1);
  },
  GUILD_UPDATE(arg0, arg1) {
    return obj.handleGuildUpdate(arg0, arg1);
  }
};
let result = obj132.fileFinishedImporting("modules/app_database/modules/GuildVersions.tsx");

export default obj132;
export { GuildVersions };