// === Module 7328: NavigationHistoryStore ===

// Module 7328 (NavigationHistoryStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function getIdFromHistoryItem(str) {
  return str.replace(regExp, "");
}
function removeHistoryItem(arg0) {
  closure_0 = arg0;
  let flag = map.delete(arg0);
  if (flag) {
    history = history.filter((item) => item !== combined);
    flag = true;
  }
  return flag;
}
function handleChannelDelete(channel) {
  const combined = "" + c3 + channel.channel.id;
  let flag = map.delete(combined);
  if (flag) {
    history = history.filter((item) => item !== combined);
    flag = true;
  }
  return flag;
}
let c3 = "channel-";
let c4 = "guild-";
const regExp = new RegExp("^(?:" + "channel-" + "|" + "guild-" + ")");
let history = [];
const map = new Map();
const PersistedStore = initializeDefault.PersistedStore;
class NavigationHistoryStore extends PersistedStore {
}
const prototype = NavigationHistoryStore.prototype;
prototype["initialize"] = function initialize(history) {
  this.waitFor(ChannelStore);
  map.clear();
  history = undefined;
  if (history != null) {
    history = history.history;
  }
  if (history == null) {
    history = [];
  }
  for (const item10015 of history) {
    let result = map.set(item10015, undefined);
    continue;
  }
  closure_6 = Array.from(map.keys());
};
prototype["getState"] = function getState() {
  return { history };
};
prototype["getLastHistory"] = function getLastHistory() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1;
  }
  return history[history.length - num];
};
prototype["getLastFocusedTimestampForHistoryItem"] = function getLastFocusedTimestampForHistoryItem(arg0) {
  return map.get(arg0);
};
NavigationHistoryStore.displayName = "NavigationHistoryStore";
NavigationHistoryStore.persistKey = "NavigationHistoryStore";
const navigationHistoryStore = new NavigationHistoryStore(DispatcherDefault, {
  LOGOUT() {
    closure_6 = [];
    map.clear();
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (true === guild.unavailable) {
      return false;
    } else {
      const _HermesInternal = HermesInternal;
      let flag = removeHistoryItem("" + c4 + guild.id);
      const items = [];
      HermesBuiltin.arraySpread(closure_6, 0);
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (nextResult.startsWith(c3)) {
          let basicChannel = ChannelStore.getBasicChannel(getIdFromHistoryItem(tmp3));
          let tmp10 = null != basicChannel;
          if (tmp10) {
            tmp10 = tmp9.guild_id !== guild.id;
          }
          if (!tmp10) {
            if (removeHistoryItem(tmp3)) {
              flag = true;
            }
          }
        }
        continue;
      }
      return flag;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/NavigationHistoryStore.tsx");

export default navigationHistoryStore;
export const CHANNEL_PREFIX = "channel-";
export const GUILD_PREFIX = "guild-";
export { getIdFromHistoryItem };
export const handleHistoryStoreNavigationChange = function handleHistoryStoreNavigationChange() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    const currentRoute = rootNavigationRef.getCurrentRoute();
    if (null != currentRoute) {
      if (null != currentRoute.params) {
        let tmpResult = tmp(4417);
        const coerceChannelRouteResult = tmpResult.coerceChannelRoute(currentRoute);
        if (null == coerceChannelRouteResult) {
          tmpResult = tmp(4417);
          const coerceGuildsRouteResult = tmpResult.coerceGuildsRoute(currentRoute);
          if (null != coerceGuildsRouteResult) {
            if (tmpResult1.getChatLayout().isChatLockedOpen) {
              const params = coerceGuildsRouteResult.params;
              let channelId;
              if (params != null) {
                channelId = params.channelId;
              }
              if (null != channelId) {
                const _HermesInternal = HermesInternal;
                const combined = "" + c3 + channelId;
                let combined2 = combined;
                if (map.has(combined)) {
                  history = history.filter((item) => item !== combined2);
                }
                if (null != history[history.length - 1]) {
                  const _Date3 = Date;
                  const result = obj4.set(tmp30, Date.now());
                }
                const result1 = obj4.set(combined, undefined);
                history.push(combined);
                if (history.length > 100) {
                  history.shift();
                }
                navigationHistoryStore.emitChange();
              }
            }
            const params2 = coerceGuildsRouteResult.params;
            let guildId;
            if (params2 != null) {
              guildId = params2.guildId;
            }
            if (null != guildId) {
              const _HermesInternal3 = HermesInternal;
              const combined1 = "" + c4 + guildId;
              combined2 = combined1;
              if (map.has(combined1)) {
                history = history.filter((item) => item !== combined2);
              }
              if (null != history[history.length - 1]) {
                const _Date2 = Date;
                const result2 = obj8.set(tmp52, Date.now());
              }
              const result3 = obj8.set(combined1, undefined);
              history.push(combined1);
              if (history.length > 100) {
                history.shift();
              }
              navigationHistoryStore.emitChange();
            }
            tmpResult1 = tmp(4420);
          }
        } else {
          const _HermesInternal2 = HermesInternal;
          combined2 = "" + c3 + coerceChannelRouteResult.params.channelId;
          if (map.has(combined2)) {
            history = history.filter((item) => item !== combined2);
          }
          if (null != history[history.length - 1]) {
            const _Date = Date;
            const result4 = obj6.set(tmp47, Date.now());
          }
          const result5 = obj6.set(combined2, undefined);
          history.push(combined2);
          if (history.length > 100) {
            history.shift();
          }
          navigationHistoryStore.emitChange();
        }
      }
    }
  }
};
export function getNavigationHistory() {
  return closure_6;
}