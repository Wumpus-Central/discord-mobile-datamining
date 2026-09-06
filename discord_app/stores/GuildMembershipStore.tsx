// === Module 1959: GuildMembershipStore ===

// Module 1959 (GuildMembershipStore)
import initializeDefault from "initialize" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 573 */;

const Dispatcher = Dispatcher2;

require = fn;
const Store = initializeDefault.Store;
class GuildMembershipStore extends Store {
  constructor() {
    closure_0 = undefined;
    tmp2 = closure_1(closure_2[1]);
    obj = {
      CACHE_LOADED(arg0) {
            return closure_0.handleCacheLoaded(arg0);
          },
      CACHE_LOADED_LAZY(arg0) {
            return closure_0.handleCacheLoadedLazy(arg0);
          },
      CONNECTION_OPEN(arg0) {
            return closure_0.handleConnectionOpen(arg0);
          },
      GUILD_CREATE(arg0) {
            return closure_0.handleGuildCreate(arg0);
          },
      GUILD_DELETE: null
    };
    class GUILD_DELETE {
      constructor(arg0) {
        return closure_0.handleGuildDelete(global);
      }
    }
    obj.GUILD_DELETE = GUILD_DELETE;
    tmp = new tmp(tmp2, obj, closure_0(closure_2[1]).DispatchBand.Early, GUILD_DELETE, new.target, tmp, tmp2);
    closure_0 = tmp;
    set = new Set();
    tmp.guildIds = set;
    return tmp;
  }
}
const prototype = GuildMembershipStore.prototype;
prototype["allGuildIds"] = function allGuildIds() {
  return this.guildIds;
};
prototype["isMember"] = function isMember(arg0) {
  const guildIds = this.guildIds;
  return guildIds.has(arg0);
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds) {
  const items = [...unavailableGuilds.unavailableGuilds];
  this.guildIds = new Set(items);
};
prototype["handleCacheLoaded"] = function handleCacheLoaded(guilds) {
  guilds = guilds.guilds;
  this.guildIds = new Set(guilds.map((id) => id.id));
};
prototype["handleCacheLoadedLazy"] = function handleCacheLoadedLazy(arg0) {
  for (const item10007 of tmp) {
    let guildIds = this.guildIds;
    let addResult = guildIds.add(item10007.id);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  const guildIds = this.guildIds;
  guildIds.add(guild.guild.id);
};
function handleGuildDelete(guild) {
  if (true !== guild.guild.unavailable) {
    const self = this;
    const guildIds = this.guildIds;
    guildIds.delete(guild.guild.id);
  }
}
prototype["handleGuildDelete"] = handleGuildDelete;
let obj = {
  CACHE_LOADED(arg0) {
    return closure_0.handleCacheLoaded(arg0);
  },
  CACHE_LOADED_LAZY(arg0) {
    return closure_0.handleCacheLoadedLazy(arg0);
  },
  CONNECTION_OPEN(arg0) {
    return closure_0.handleConnectionOpen(arg0);
  },
  GUILD_CREATE(arg0) {
    return closure_0.handleGuildCreate(arg0);
  },
  GUILD_DELETE(arg0) {
    return closure_0.handleGuildDelete(arg0);
  }
};
tmp = new tmp(Dispatcher, obj, fn(573).DispatchBand.Early, GuildMembershipStore, tmp, Dispatcher, obj, new.target, undefined, handleGuildDelete, globalThis);
let closure_129_0 = tmp;
tmp.guildIds = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildMembershipStore.tsx");

export default tmp;