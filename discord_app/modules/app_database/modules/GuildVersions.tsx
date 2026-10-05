// discord_app/modules/app_database/modules/GuildVersions.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6, closure_3;

let tmp2 = new LoggerDefault("GuildVersions");
let closure_6 = tmp2;
class GuildVersions {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.pending = new Map();
    new Map();
    obj.committed = new Map();
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
    new Map();
    return obj;
  }
  getCommittedVersions() {
    return (async () => {
      if (c6 === 2) {
        c6 = 3;
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
        let c4;
        try {
          let closure_1;
          let closure_0;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp4;
              closure_0 = undefined;
              c4 = 1;
              const obj4 = DatabaseDaosDefault;
              const guildVersionsResult = obj4.guildVersions();
              if (null == guildVersionsResult) {
                c4 = 0;
                c6 = 3;
                const obj5 = { value: {}, done: true };
                return obj5;
              } else {
                c5 = 2;
                c6 = 1;
                const obj6 = { value: guildVersionsResult.getMany(), done: false };
                return obj6;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            closure_130_6.warn("couldn't load guild versions", closure_1);
            c6 = 3;
            const obj7 = { value: {}, done: true };
            return obj7;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_0 = value.map((item) => {
              const items = [,];
              ({ id: arr[0], version: arr[1] } = item);
              return items;
            });
            const _Object = Object;
            if (closure_0 == null) {
              closure_0 = [];
            }
            c4 = 0;
            c6 = 3;
            const obj = { value: fromEntries(closure_0), done: true };
            return obj;
          }
        } catch (tmp17) {
          closure_3 = tmp17;
          if (0 === c4) {
            c6 = 3;
            throw tmp17;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  }
  remove(id, arg1) {
    this.deleteWith(id);
    this.commit(arg1);
  }
  handleBackgroundSync(arg0, arg1) {
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
  }
  handleConnectionOpen(unavailableGuilds, database) {
    const self = this;
    this.reset();
    const items = [...unavailableGuilds.unavailableGuilds];
    const obj = DatabaseDaosDefault;
    const result = obj.guildVersionsTransaction(database);
    result.deleteAllExcept(items);
    const guilds = unavailableGuilds.guilds;
    for (const item10029 of guilds) {
      let items1 = [item10029];
      let updateWithResult = self.updateWith(item10029.id, items1);
      continue;
    }
    self.commit(database);
  }
  handleGuildCreate(guild, arg1) {
    let writes;
    let writes2;
    let writes3;
    let writes4;
    const self = this;
    guild = guild.guild;
    const id = guild.guild.id;
    const items = [guild];
    this.updateWith(id, items);
    const emojis = guild.emojis;
    const op = emojis.op;
    const updateWith = this.updateWith;
    if ("full_sync" === op) {
      writes = emojis.items;
    } else if ("update" === op) {
      writes = emojis.writes;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(emojis);
    }
    updateWith(id, writes);
    const stickers = guild.stickers;
    const op2 = stickers.op;
    const updateWith2 = self.updateWith;
    if ("full_sync" === op2) {
      writes2 = stickers.items;
    } else if ("update" === op2) {
      writes2 = stickers.writes;
    } else {
      const obj2 = GlobalUtils;
      obj2.assertNever(stickers);
    }
    updateWith2(id, writes2);
    const channels = guild.channels;
    const op3 = channels.op;
    const updateWith3 = self.updateWith;
    if ("full_sync" === op3) {
      writes3 = channels.items;
    } else if ("update" === op3) {
      writes3 = channels.writes;
    } else {
      const obj3 = GlobalUtils;
      obj3.assertNever(channels);
    }
    updateWith3(id, writes3);
    const roles = guild.roles;
    const op4 = roles.op;
    const updateWith4 = self.updateWith;
    if ("full_sync" === op4) {
      writes4 = roles.items;
    } else if ("update" === op4) {
      writes4 = roles.writes;
    } else {
      const obj4 = GlobalUtils;
      obj4.assertNever(roles);
    }
    updateWith4(id, writes4);
    self.commit(arg1);
  }
  handleGuildUpdate(guild, arg1) {
    guild = guild.guild;
    const id = guild.guild.id;
    const items = [guild];
    this.updateWith(id, items);
    this.updateWith(id, guild.emojis);
    this.updateWith(id, guild.stickers);
    this.updateWith(id, guild.roles);
    this.commit(arg1);
  }
  handleGuildDelete(guild, arg1) {
    this.deleteWith(guild.guild.id);
    this.commit(arg1);
  }
  handleGuildRoleChange(role, arg1) {
    const items = [role.role];
    this.updateWith(role.guildId, items);
    this.commit(arg1);
  }
  handleGuildRoleDelete(version, arg1) {
    const items = [];
    const obj = { version: version.version };
    items[0] = obj;
    this.updateWith(version.guildId, items);
    this.commit(arg1);
  }
  handleGuildEmojisUpdate(guildId, arg1) {
    this.updateWith(guildId.guildId, guildId.emojis);
    this.commit(arg1);
  }
  handleGuildStickersUpdate(guildId, arg1) {
    this.updateWith(guildId.guildId, guildId.stickers);
    this.commit(arg1);
  }
  handleChannelCreate(channel, arg1) {
    const self = this;
    if (null != channel.channel.guild_id) {
      const items = [channel.channel];
      self.updateWith(channel.channel.guild_id, items);
    }
    self.commit(arg1);
  }
  handleChannelUpdates(arg0, arg1) {
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
  }
  handleChannelDelete(channel, arg1) {
    const self = this;
    if (null != channel.channel.guild_id) {
      const items = [channel.channel];
      self.updateWith(channel.channel.guild_id, items);
    }
    self.commit(arg1);
  }
  resetInMemoryState() {
    this.reset();
  }
  reset() {
    this.committed = new Map();
    new Map();
    this.pending = new Map();
    new Map();
  }
  deleteWith(id) {
    const pending = this.pending;
    const result = pending.set(id, null);
  }
  updateWith(arg0, arg1) {
    if (0 !== arg1.length) {
      const self = this;
      const committed = this.committed;
      const _Math = Math;
      let num = committed.get(arg0);
      if (num == null) {
        num = 0;
      }
      const pending = self.pending;
      let num2 = pending.get(arg0);
      if (num2 == null) {
        num2 = 0;
      }
      const maxResult = max(num, num2);
      const latestVersion = self.computeLatestVersion(maxResult, arg1);
      if (latestVersion > maxResult) {
        const pending2 = self.pending;
        const result = pending2.set(arg0, latestVersion);
      }
    }
  }
  computeLatestVersion(maxResult, arg1) {
    const tmp2 = arg1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let num = tmp3.version;
      let _Math = Math;
      if (num == null) {
        num = 0;
      }
      maxResult = max(maxResult, num);
      continue;
    }
    return maxResult;
  }
  commit(database) {
    let tmp6;
    let tmp7;
    const self = this;
    if (this.pending.size > 0) {
      const obj2 = DatabaseDaosDefault;
      const result = obj2.guildVersionsTransaction(database);
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
  }
}
const prototype = GuildVersions.prototype;
let obj = Object.create(GuildVersions.prototype);
const map = new Map();
obj.pending = map;
const map1 = new Map();
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
let result = size.fileFinishedImporting("modules/app_database/modules/GuildVersions.tsx");

export default obj;
export { GuildVersions };
