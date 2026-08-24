// discord_app/stores/GuildMembershipStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import importDefaultResult from "../Dispatcher.tsx";
import set from "../../_runtime/00002_set.js";

let closure_0 = arg1;
const Store = initializeDefault.Store;
class GuildMembershipStore extends Store {
  constructor() {
    closure_0 = undefined;
    tmp2 = require("dispatcher");
    obj = {
      CACHE_LOADED(arg0) {
            return obj.handleCacheLoaded(arg0);
          },
      CACHE_LOADED_LAZY(arg0) {
            return obj.handleCacheLoadedLazy(arg0);
          },
      CONNECTION_OPEN(arg0) {
            return obj.handleConnectionOpen(arg0);
          },
      GUILD_CREATE(arg0) {
            return obj.handleGuildCreate(arg0);
          },
      GUILD_DELETE: null
    };
    class GUILD_DELETE {
      constructor(arg0) {
        return obj.handleGuildDelete(global);
      }
    }
    obj[4] = GUILD_DELETE;
    tmp = new tmp(tmp2, obj, require("dispatcher").DispatchBand.Early, GUILD_DELETE, new.target, tmp, tmp2);
    // ThrowIfThisInitialized (0x7c)
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
closure_0 = undefined;
let obj = {
  CACHE_LOADED(arg0) {
    return obj.handleCacheLoaded(arg0);
  },
  CACHE_LOADED_LAZY(arg0) {
    return obj.handleCacheLoadedLazy(arg0);
  },
  CONNECTION_OPEN(arg0) {
    return obj.handleConnectionOpen(arg0);
  },
  GUILD_CREATE(arg0) {
    return obj.handleGuildCreate(arg0);
  },
  GUILD_DELETE(arg0) {
    return obj.handleGuildDelete(arg0);
  }
};
tmp = new tmp(importDefaultResult, obj, require("dispatcher").DispatchBand.Early, GuildMembershipStore, tmp, importDefaultResult, obj, new.target, undefined, handleGuildDelete, globalThis);
// ThrowIfThisInitialized (0x7c)
closure_0 = tmp;
let set = new Set();
tmp.guildIds = set;
const result = set.fileFinishedImporting("stores/GuildMembershipStore.tsx");

export default tmp;