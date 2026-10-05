// === Module 2052: BasicChannelCacheStore ===

// Module 2052 (BasicChannelCacheStore)
import LoggerDefault from "Logger" /* 3 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildMembershipStore from "GuildMembershipStore" /* 2053 */;
import size from "module_2" /* 2 */;

let tmp3 = new LoggerDefault("BasicChannelCacheStore");
const Store = get_initializedDefault.Store;
class BasicChannelCacheStore extends Store {
  constructor() {
    const obj = {
      CACHE_LOADED_LAZY_NO_CACHE(arg0) {
        return closure_0.handleCacheLoadedLazyNoCache(arg0);
      },
      CACHE_LOADED_LAZY(arg0) {
        return closure_0.handleCacheLoadedLazy(arg0);
      },
      CONNECTION_OPEN(arg0) {
        return closure_0.handleConnectionOpen(arg0);
      },
      LOGOUT(arg0) {
        return closure_0.handleLogout(arg0);
      }
    };
    const tmp22 = new tmp2(DispatcherDefault, obj, new.target, tmp2, tmp, this);
    let closure_0 = tmp22;
    tmp22.channels = new Map();
    new Map();
    tmp22.guilds = new Map();
    new Map();
    return tmp22;
  }
  hasChannel(arg0) {
    const channels = this.channels;
    return channels.has(arg0);
  }
  hasGuild(guild_id) {
    const guilds = this.guilds;
    return guilds.has(guild_id);
  }
  getBasicChannel(arg0) {
    const channels = this.channels;
    let value = channels.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getGuildBasicChannels(guildId) {
    const guilds = this.guilds;
    let value = guilds.get(guildId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  invalidate(arg0) {
    this.delete(arg0);
  }
  restored(id) {
    this.delete(id);
  }
  initialize() {
    this.waitFor(GuildMembershipStore);
  }
  handleCacheLoadedLazy(arg0) {
    const self = this;
    this.guilds = new Map();
    new Map();
    this.channels = new Map();
    new Map();
    const tmp3 = arg0.basicGuildChannels[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      let arr = tmp6[1];
      let guilds = self.guilds;
      let _Object = Object;
      let result = guilds.set(tmp6[0], Object.fromEntries(arr.map((id) => {
        const items = [id.id, id];
        return items;
      })));
      for (const item10037 of arr) {
        let channels = self.channels;
        let result1 = channels.set(item10037.id, item10037);
        continue;
      }
      continue;
    }
  }
  handleCacheLoadedLazyNoCache() {
    const guilds = this.guilds;
    guilds.clear();
    const channels = this.channels;
    channels.clear();
  }
  handleConnectionOpen() {
    const self = this;
    const guilds = this.guilds;
    const allGuildIdsResult = GuildMembershipStore.allGuildIds();
    const keys = guilds.keys();
    for (const item10012 of keys) {
      if (!allGuildIdsResult.has(item10012)) {
        let deleteResult = self.delete(item10012);
      }
      continue;
    }
  }
  handleLogout() {
    const guilds = this.guilds;
    guilds.clear();
    const channels = this.channels;
    channels.clear();
  }
}
const prototype = BasicChannelCacheStore.prototype;
const _delete = function(arg0) {
  const self = this;
  const guilds = this.guilds;
  let obj = guilds.get(arg0);
  if (obj == null) {
    obj = {};
  }
  for (const key10008 in obj) {
    let channels = self.channels;
    let deleteResult = channels.delete(key10008);
    continue;
  }
  const guilds2 = self.guilds;
  guilds2.delete(arg0);
};
prototype["delete"] = _delete;
let obj = {
  CACHE_LOADED_LAZY_NO_CACHE(arg0) {
    return closure_0.handleCacheLoadedLazyNoCache(arg0);
  },
  CACHE_LOADED_LAZY(arg0) {
    return closure_0.handleCacheLoadedLazy(arg0);
  },
  CONNECTION_OPEN(arg0) {
    return closure_0.handleConnectionOpen(arg0);
  },
  LOGOUT(arg0) {
    return closure_0.handleLogout(arg0);
  }
};
const object = new Object(DispatcherDefault, obj, tmp, BasicChannelCacheStore, Object, prototype, this, undefined, _delete);
const map = new Map();
object.channels = map;
const map1 = new Map();
object.guilds = map1;
let result = size.fileFinishedImporting("modules/app_database/stores/BasicChannelCacheStore.tsx");

export default object;