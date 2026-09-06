// discord_app/modules/app_database/stores/BasicChannelCacheStore.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GuildMembershipStore from "../../../stores/GuildMembershipStore.tsx";

new LoggerDefault("BasicChannelCacheStore");
const Store = initializeDefault.Store;
class BasicChannelCacheStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
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
    tmp2 = new tmp2(closure_0(closure_1[4]), obj, new.target, tmp2, tmp, new.target);
    closure_0 = tmp2;
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
  value = channels.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getGuildBasicChannels"] = function getGuildBasicChannels(guildId) {
  const guilds = this.guilds;
  value = guilds.get(guildId);
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
  this.waitFor(GuildMembershipStore);
};
prototype["handleCacheLoadedLazy"] = function handleCacheLoadedLazy(arg0) {
  const self = this;
  this.guilds = new Map();
  const map = new Map();
  this.channels = new Map();
  map1 = new Map();
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
  tmp3 = arg0.basicGuildChannels[Symbol.iterator]();
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
    if (!allGuildIdsResult.has(item10012)) {
      let deleteResult = self.delete(item10012);
    }
    continue;
  }
  const allGuildIdsResult = GuildMembershipStore.allGuildIds();
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
    let channels = self.channels;
    let deleteResult = channels.delete(key10008);
    continue;
  }
  const guilds2 = self.guilds;
  guilds2.delete(arg0);
};
prototype["delete"] = _delete;
const object = new Object(DispatcherDefault, {
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
}, tmp, BasicChannelCacheStore, Object, prototype, new.target, undefined, _delete);
let closure_129_0 = object;
object.channels = new Map();
let map = new Map();
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
object.guilds = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/stores/BasicChannelCacheStore.tsx");

export default object;