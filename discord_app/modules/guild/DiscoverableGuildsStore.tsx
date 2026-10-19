// === Module 9425: DiscoverableGuildsStore ===

// Module 9425 (DiscoverableGuildsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7394 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let c3 = 3600000;
const DiscoverableGuildFetchStates = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
const dependencyMap = {};
const Store = initializeDefault.Store;
class DiscoverableGuildsStore extends Store {
}
const prototype = DiscoverableGuildsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
prototype["getGuild"] = function getGuild(arg0) {
  guild = undefined;
  if (dependencyMap[arg0] != null) {
    guild = tmp.guild;
  }
  if (guild == null) {
    guild = null;
  }
  return guild;
};
prototype["getGuilds"] = function getGuilds(arr) {
  const mapped = arr.map((item) => {
    guild = undefined;
    if (dependencyMap[item] != null) {
      guild = tmp.guild;
    }
    return guild;
  });
  return mapped.filter(GlobalUtils.isNotNullish);
};
prototype["isFetching"] = function isFetching(arr) {
  return arr.some((item) => {
    let fetchState;
    if (dependencyMap[item] != null) {
      fetchState = tmp.fetchState;
    }
    return fetchState === constants.FETCHING;
  });
};
prototype["getStaleGuildIds"] = function getStaleGuildIds(arr) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return arr.filter((item) => {
    let tmp2 = null == tmp;
    if (!tmp2) {
      tmp2 = tmp.fetchState === obj.FAILED;
    }
    if (!tmp2) {
      let tmp5 = tmp.fetchState !== obj.FETCHING;
      if (tmp5) {
        let tmp6 = null == tmp.fetchedAt;
        if (!tmp6) {
          tmp6 = timestamp - tmp.fetchedAt >= c3;
        }
        tmp5 = tmp6;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  });
};
DiscoverableGuildsStore.displayName = "DiscoverableGuildsStore";
const discoverableGuildsStore = new DiscoverableGuildsStore(DispatcherDefault, {
  DISCOVERABLE_GUILDS_FETCH_START: function handleFetchStart(arg0) {
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = dependencyMap[nextResult];
      guild = undefined;
      let tmp2 = nextResult;
      if (tmp4 != null) {
        guild = tmp4.guild;
      }
      if (guild == null) {
        guild = null;
      }
      let obj = { guild, fetchState: null, fetchedAt: null };
      obj.fetchState = obj.FETCHING;
      let tmp8 = dependencyMap[tmp2];
      let fetchedAt;
      if (tmp8 != null) {
        fetchedAt = tmp8.fetchedAt;
      }
      if (fetchedAt == null) {
        fetchedAt = null;
      }
      obj.fetchedAt = fetchedAt;
      dependencyMap[nextResult] = obj;
      continue;
    }
  },
  DISCOVERABLE_GUILDS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ guildIds, guilds } = arg0);
    const timestamp = Date.now();
    const iter = guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      value = map.get(nextResult);
      if (value == null) {
        value = null;
      }
      let obj = { guild: value, fetchState: null, fetchedAt: null };
      obj.fetchState = obj.SUCCEEDED;
      obj.fetchedAt = timestamp;
      closure_5[nextResult] = obj;
      continue;
    }
    map = new Map(guilds.map((id) => {
      const items = [id.id, GuildDiscoveryUtils.makeDiscoverableGuild(id)];
      return items;
    }));
  },
  DISCOVERABLE_GUILDS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = dependencyMap[nextResult];
      guild = undefined;
      let tmp2 = nextResult;
      if (tmp4 != null) {
        guild = tmp4.guild;
      }
      if (guild == null) {
        guild = null;
      }
      let obj = { guild, fetchState: null, fetchedAt: null };
      obj.fetchState = obj.FAILED;
      let tmp8 = dependencyMap[tmp2];
      let fetchedAt;
      if (tmp8 != null) {
        fetchedAt = tmp8.fetchedAt;
      }
      if (fetchedAt == null) {
        fetchedAt = null;
      }
      obj.fetchedAt = fetchedAt;
      dependencyMap[nextResult] = obj;
      continue;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/DiscoverableGuildsStore.tsx");

export default discoverableGuildsStore;
export const DISCOVERABLE_GUILDS_TTL_MS = 3600000;
export { DiscoverableGuildFetchStates };