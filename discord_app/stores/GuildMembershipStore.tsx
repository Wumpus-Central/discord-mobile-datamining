// === Module 2053: GuildMembershipStore ===

// Module 2053 (GuildMembershipStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Dispatcher2 from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const Dispatcher = Dispatcher2;
let _require;

function CACHE_LOADED(arg0) {
  return closure_0.handleCacheLoaded(arg0);
}
function CACHE_LOADED_LAZY(arg0) {
  return closure_0.handleCacheLoadedLazy(arg0);
}
function CONNECTION_OPEN(arg0) {
  return closure_0.handleConnectionOpen(arg0);
}
function GUILD_CREATE(arg0) {
  return closure_0.handleGuildCreate(arg0);
}
const Store = get_initializedDefault.Store;
class GuildMembershipStore extends Store {
  constructor() {
    _require = undefined;
    const tmp2 = Dispatcher;
    const obj = { CACHE_LOADED, CACHE_LOADED_LAZY, CONNECTION_OPEN, GUILD_CREATE, GUILD_DELETE };
    class GUILD_DELETE {
      constructor(arg0) {
        return closure_0.handleGuildDelete(arg0);
      }
    }
    const tmp3 = new tmp(tmp2, obj, Dispatcher2.DispatchBand.Early, GUILD_DELETE, new.target, tmp, tmp2);
    _require = tmp3;
    tmp3.guildIds = new Set();
    new Set();
    return tmp3;
  }
  allGuildIds() {
    return this.guildIds;
  }
  isMember(arg0) {
    const guildIds = this.guildIds;
    return guildIds.has(arg0);
  }
  handleConnectionOpen(unavailableGuilds) {
    const items = [...unavailableGuilds.unavailableGuilds];
    this.guildIds = new Set(items);
    new Set(items);
  }
  handleCacheLoaded(guilds) {
    const f85889 = (id) => id.id;
    guilds = guilds.guilds;
    this.guildIds = new Set(guilds.map(f85889));
    new Set(guilds.map(f85889));
  }
  handleCacheLoadedLazy(guilds) {
    guilds = guilds.guilds;
    for (const item10007 of guilds) {
      let guildIds = this.guildIds;
      let addResult = guildIds.add(item10007.id);
      continue;
    }
  }
  handleGuildCreate(guild) {
    const guildIds = this.guildIds;
    guildIds.add(guild.guild.id);
  }
}
function handleGuildDelete(guild) {
  if (true !== guild.guild.unavailable) {
    const self = this;
    const guildIds = this.guildIds;
    guildIds.delete(guild.guild.id);
  }
}
GuildMembershipStore.prototype["handleGuildDelete"] = handleGuildDelete;
let obj = {
  CACHE_LOADED,
  CACHE_LOADED_LAZY,
  CONNECTION_OPEN,
  GUILD_CREATE,
  GUILD_DELETE(arg0) {
    return closure_0.handleGuildDelete(arg0);
  }
};
let tmp2 = new tmp(Dispatcher, obj, Dispatcher2.DispatchBand.Early, GuildMembershipStore, tmp, Dispatcher, obj, this, undefined, handleGuildDelete, globalThis);
const React = tmp2;
const set = new Set();
tmp2.guildIds = set;
const result = size.fileFinishedImporting("stores/GuildMembershipStore.tsx");

export default tmp2;