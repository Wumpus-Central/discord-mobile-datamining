// discord_app/modules/app_database/modules/GuildVersions.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
let closure_6 = new LoggerDefault("GuildVersions");
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
      },
    };
    return obj;
  }
}
const prototype = GuildVersions.prototype;
prototype["getCommittedVersions"] = function getCommittedVersions() {
  return (async () => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            let obj3 = DatabaseDaosDefault;
            const guildVersionsResult = obj3.guildVersions();
            if (null == guildVersionsResult) {
              c4 = 0;
              c6 = 3;
              const obj1 = { value: {}, done: true };
              return obj1;
            } else {
              c5 = 2;
              c6 = 1;
              const obj2 = { value: guildVersionsResult.getMany(), done: false };
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          closure_130_6.warn("couldn't load guild versions", closure_129_1);
          c6 = 3;
          obj3 = { value: {}, done: true };
          return obj3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_0 = value.map((item) => {
            const items = [,];
            ({ id: arr[0], version: arr[1] } = item);
            return items;
          });
          closure_0 = closure_129_0;
          if (closure_129_0 == null) {
            closure_0 = [];
          }
          c4 = 0;
          c6 = 3;
          obj = { value: Object.fromEntries(closure_0), done: true };
          return obj;
        }
      } catch (tmp20) {
        closure_3 = tmp20;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp20;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
prototype["remove"] = function remove(id, arg1) {
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
    if (null == GuildStore.getGuild(tmp2.id)) {
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
  const result = DatabaseDaosDefault.guildVersionsTransaction(database);
  result.deleteAllExcept(items);
  for (const item10029 of tmp3) {
    let items1 = [item10029];
    let updateWithResult = self.updateWith(item10029.id, items1);
    continue;
  }
  self.commit(database);
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, arg1) {
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
    GlobalUtils.assertNever(emojis);
  }
  this.updateWith(id, writes);
  const stickers = guild.stickers;
  const op2 = stickers.op;
  if ("full_sync" === op2) {
    let writes2 = stickers.items;
  } else if ("update" === op2) {
    writes2 = stickers.writes;
  } else {
    GlobalUtils.assertNever(stickers);
  }
  self.updateWith(id, writes2);
  const channels = guild.channels;
  const op3 = channels.op;
  if ("full_sync" === op3) {
    let writes3 = channels.items;
  } else if ("update" === op3) {
    writes3 = channels.writes;
  } else {
    GlobalUtils.assertNever(channels);
  }
  self.updateWith(id, writes3);
  const roles = guild.roles;
  const op4 = roles.op;
  if ("full_sync" === op4) {
    let writes4 = roles.items;
  } else if ("update" === op4) {
    writes4 = roles.writes;
  } else {
    GlobalUtils.assertNever(roles);
  }
  self.updateWith(id, writes4);
  self.commit(arg1);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild, arg1) {
  guild = guild.guild;
  const id = guild.guild.id;
  const items = [guild];
  this.updateWith(id, items);
  this.updateWith(id, guild.emojis);
  this.updateWith(id, guild.stickers);
  this.updateWith(id, guild.roles);
  this.commit(arg1);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild, arg1) {
  this.deleteWith(guild.guild.id);
  this.commit(arg1);
};
prototype["handleGuildRoleChange"] = function handleGuildRoleChange(role, arg1) {
  const items = [role.role];
  this.updateWith(role.guildId, items);
  this.commit(arg1);
};
prototype["handleGuildRoleDelete"] = function handleGuildRoleDelete(version, arg1) {
  const items = [{ version: version.version }];
  this.updateWith(version.guildId, items);
  this.commit(arg1);
};
prototype["handleGuildEmojisUpdate"] = function handleGuildEmojisUpdate(guildId, arg1) {
  this.updateWith(guildId.guildId, guildId.emojis);
  this.commit(arg1);
};
prototype["handleGuildStickersUpdate"] = function handleGuildStickersUpdate(guildId, arg1) {
  this.updateWith(guildId.guildId, guildId.stickers);
  this.commit(arg1);
};
prototype["handleChannelCreate"] = function handleChannelCreate(channel, arg1) {
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
prototype["handleChannelDelete"] = function handleChannelDelete(channel, arg1) {
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
    const result = DatabaseDaosDefault.guildVersionsTransaction(database);
    const pending2 = self.pending;
    const tmp21 = pending2[Symbol.iterator]();
    while (tmp21 !== undefined) {
      let tmp5 = _slicedToArray(tmp2, 2);
      [tmp6, tmp7] = tmp5;
      if (null != tmp7) {
        let obj = { id: tmp6, version: tmp7 };
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
let size = Object.create(GuildVersions.prototype);
let closure_129_0 = size;
let tmp2 = new LoggerDefault("GuildVersions");
size.pending = new Map();
let map = new Map();
size.committed = new Map();
size.actions = {
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
  },
};
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/GuildVersions.tsx");

export default size;
export { GuildVersions };
