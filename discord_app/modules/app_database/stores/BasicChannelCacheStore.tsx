import _slicedToArray from "_slicedToArray";
import allGuildIds from "allGuildIds";
import { Store } from "initialize";

let object = importDefault;
new require("initialize")("BasicChannelCacheStore");
class BasicChannelCacheStore extends Store {
  constructor() {
    c0 = undefined;
    obj = {
      CACHE_LOADED_LAZY_NO_CACHE(arg0) {
            return obj.handleCacheLoadedLazyNoCache(arg0);
          },
      CACHE_LOADED_LAZY(arg0) {
            return obj.handleCacheLoadedLazy(arg0);
          },
      CONNECTION_OPEN(arg0) {
            return obj.handleConnectionOpen(arg0);
          },
      LOGOUT(arg0) {
            return obj.handleLogout(arg0);
          }
    };
    tmp2 = new tmp2(require("dispatcher"), obj, new.target, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    c0 = tmp2;
    map = new Map();
    tmp2.channels = map;
    map1 = new Map();
    tmp2.guilds = map1;
    return tmp2;
  }
}
const prototype = BasicChannelCacheStore.prototype;
prototype["hasChannel"] = function hasChannel(arg0) {
  const channels = this.channels;
  return channels.has(arg0);
};
prototype["hasGuild"] = function hasGuild(guild_id) {
  const guilds = this.guilds;
  return guilds.has(guild_id);
};
prototype["getBasicChannel"] = function getBasicChannel(arg0) {
  const channels = this.channels;
  let value = channels.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getGuildBasicChannels"] = function getGuildBasicChannels(guildId) {
  const guilds = this.guilds;
  let value = guilds.get(guildId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["invalidate"] = function invalidate(arg0) {
  this.delete(arg0);
};
prototype["restored"] = function restored(id) {
  this.delete(id);
};
prototype["initialize"] = function initialize() {
  this.waitFor(allGuildIds);
};
prototype["handleCacheLoadedLazy"] = function handleCacheLoadedLazy(arg0) {
  const self = this;
  this.guilds = new Map();
  const map = new Map();
  this.channels = new Map();
  const map1 = new Map();
  while (tmp3 !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    let arr = tmp6[1];
    let guilds = self.guilds;
    let _Object = Object;
    let result = guilds.set(tmp6[0], Object.fromEntries(arr.map((id) => {
      const items = [id.id, id];
      return items;
    })));
    let tmp8 = arr;
    let tmp9 = arr;
    for (const item10037 of arr) {
      let channels = self.channels;
      let result1 = channels.set(item10037.id, item10037);
      continue;
    }
    continue;
  }
};
prototype["handleCacheLoadedLazyNoCache"] = function handleCacheLoadedLazyNoCache() {
  const guilds = this.guilds;
  guilds.clear();
  const channels = this.channels;
  channels.clear();
};
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const self = this;
  const guilds = this.guilds;
  const keys = guilds.keys();
  for (const item10012 of keys) {
    let tmp2 = item10012;
    if (!allGuildIdsResult.has(item10012)) {
      let tmp3 = item10012;
      let deleteResult = self.delete(tmp2);
    }
    continue;
  }
};
prototype["handleLogout"] = function handleLogout() {
  const guilds = this.guilds;
  guilds.clear();
  const channels = this.channels;
  channels.clear();
};
const _delete = function delete(arg0) {
  const self = this;
  const guilds = this.guilds;
  let obj = guilds.get(arg0);
  if (obj == null) {
    obj = {};
  }
  for (const key10008 in obj) {
    let tmp2 = key10008;
    let channels = self.channels;
    let deleteResult = channels.delete(key10008);
    continue;
  }
  const guilds2 = self.guilds;
  guilds2.delete(arg0);
};
prototype["delete"] = _delete;
object = undefined;
object = new Object(require("dispatcher"), {
  CACHE_LOADED_LAZY_NO_CACHE(arg0) {
    return obj.handleCacheLoadedLazyNoCache(arg0);
  },
  CACHE_LOADED_LAZY(arg0) {
    return obj.handleCacheLoadedLazy(arg0);
  },
  CONNECTION_OPEN(arg0) {
    return obj.handleConnectionOpen(arg0);
  },
  LOGOUT(arg0) {
    return obj.handleLogout(arg0);
  }
}, tmp, BasicChannelCacheStore, Object, prototype, new.target, undefined, _delete);
// ThrowIfThisInitialized (0x7c)
object.channels = new Map();
let map = new Map();
let obj = {
  CACHE_LOADED_LAZY_NO_CACHE(arg0) {
    return obj.handleCacheLoadedLazyNoCache(arg0);
  },
  CACHE_LOADED_LAZY(arg0) {
    return obj.handleCacheLoadedLazy(arg0);
  },
  CONNECTION_OPEN(arg0) {
    return obj.handleConnectionOpen(arg0);
  },
  LOGOUT(arg0) {
    return obj.handleLogout(arg0);
  }
};
object.guilds = new Map();
let map1 = new Map();
let result = require("timestamp").fileFinishedImporting("modules/app_database/stores/BasicChannelCacheStore.tsx");

export default object;