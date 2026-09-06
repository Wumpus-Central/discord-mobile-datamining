// === Module 17810: ContentInventoryManager ===

// Module 17810 (ContentInventoryManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13692 */;
import ContentInventoryFeature from "ContentInventoryFeature" /* 17812 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import IdleStore from "IdleStore" /* 5410 */;
import WindowStore from "WindowStore" /* 13833 */;
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore" /* 11937 */;
import ContentInventoryStore from "ContentInventoryStore" /* 8336 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function getBackoffJitter() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  return Math.random() * (num + 1) * closure_11;
}
function setFeedState(feedId, state) {
  const obj = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId, state };
  obj.dispatch(obj);
}
function canFetch(GLOBAL_FEED) {
  if (set.has(GLOBAL_FEED)) {
    return false;
  } else {
    if (GLOBAL_FEED === ContentInventoryFeedKey.GAME_PROFILE_FEED) {
      if (undefined !== ContentInventoryStore.getFeed(GLOBAL_FEED)) {
        return false;
      }
    }
    if (GLOBAL_FEED === GLOBAL_FEED) {
      if (obj.isEligibleForContentInventoryV1("ContentInventoryManager")) {
        if (ContentInventoryPersistedStore.hidden) {
          if (null != ContentInventoryStore.getFeed(GLOBAL_FEED)) {
            return false;
          }
        }
        if (GatewayConnectionStore.isConnected()) {
          const idleSince = IdleStore.getIdleSince();
          if (null != idleSince) {
            const _Date = Date;
            if (Date.now() - idleSince > closure_13) {
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      obj = ContentInventoryExperiments;
    }
    return true;
  }
}
function scheduleNextFetch() {
  let num = map1.get(GLOBAL_FEED);
  if (num == null) {
    num = 0;
  }
  if (num <= 0) {
    let obj = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state: { loading: false } };
    obj.dispatch(obj);
    value = map.get(GLOBAL_FEED);
    if (undefined !== value) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value);
      map.delete(GLOBAL_FEED);
    }
    let flag = false;
    if (!set.has(GLOBAL_FEED)) {
      if (GLOBAL_FEED !== ContentInventoryFeedKey.GAME_PROFILE_FEED) {
        flag = true;
        {
          flag = false;
          if (obj9.isEligibleForContentInventoryV1("ContentInventoryManager")) {
            if (!ContentInventoryPersistedStore.hidden) {
              flag = false;
              if (GatewayConnectionStore.isConnected()) {
                const idleSince = IdleStore.getIdleSince();
                flag = true;
                if (null != idleSince) {
                  const _Date = Date;
                  flag = true;
                  if (Date.now() - idleSince > closure_13) {
                    flag = false;
                  }
                }
              }
            } else {
              flag = false;
            }
          }
          obj9 = ContentInventoryExperiments;
        }
      } else {
        flag = false;
      }
    }
    if (flag) {
      const feed = ContentInventoryStore.getFeed(GLOBAL_FEED);
      let prop;
      if (feed != null) {
        prop = feed.refresh_stale_inbox_after_ms;
      }
      if (null == prop) {
        let expired_at;
        if (feed != null) {
          expired_at = feed.expired_at;
        }
        let num3 = 0;
        if (null != expired_at) {
          const _Date2 = Date;
          const date = new Date(feed.expired_at);
          const _Date3 = Date;
          const time = date.getTime();
          num3 = time - Date.now();
        }
        let num4 = 0;
        if (null != closure_17) {
          const _Date4 = Date;
          const date1 = new Date(closure_17);
          const _Date5 = Date;
          const time1 = date1.getTime();
          num4 = time1 - Date.now();
        }
        let num5 = 0;
        if (num > 0) {
          const _Math = Math;
          num5 = Math.random() * closure_11;
        }
        const _Math2 = Math;
        const sum = Math.max(0, num4, num3) + num5;
        obj = { loading: false, nextFetchDate: null };
        const _Date6 = Date;
        const _Date7 = Date;
        const date2 = new Date(Date.now() + sum);
        obj.nextFetchDate = date2;
        const obj1 = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state: obj };
        DispatcherDefault.dispatch(obj1);
        const _setTimeout = setTimeout;
        const result = map.set(GLOBAL_FEED, setTimeout(() => fetchInventory({ feedId, feature: ContentInventoryFeature.ContentInventoryFeature.INBOX }), sum));
        const tmp2Result = DispatcherDefault;
      }
    }
  }
}
function fetchInventory() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _fetchInventory(arg0) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          force = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          ({ feedId: closure_130_0, feature: closure_130_1, force } = feedId);
          if (force === undefined) {
            force = false;
          }
          closure_130_2 = force;
          let feed;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            if (!closure_131_21(closure_130_0)) {
              if (!closure_130_2) {
                c7 = 3;
              }
            }
            c5 = 1;
            feed = closure_131_8.getFeed(closure_130_0);
            closure_131_15.add(closure_130_0);
            closure_131_20(closure_130_0, { loading: true });
            let obj3 = closure_131_0(closure_131_2[11]);
            let refresh_token;
            if (feed != null) {
              refresh_token = feed.refresh_token;
            }
            const obj2 = { token: refresh_token, feedId: closure_130_0, feature: closure_130_1 };
            c6 = 3;
            c7 = 1;
            obj3 = { value: null, done: false };
            obj3.value = obj3.getMyContentInventory(obj2);
            return obj3;
          }
        } else if (2 === tmp7) {
          c5 = 0;
          value = closure_131_16.get(closure_130_0);
          c1 = value;
          if (value == null) {
            c1 = 0;
          }
          closure_130_5 = c1;
          if (closure_130_5 < 4) {
            const _Math = Math;
            closure_130_6 = closure_131_1(closure_131_2[9]).Millis.MINUTE * Math.pow(2, closure_130_5);
            closure_130_7 = closure_131_19(closure_130_5);
            const _setTimeout = setTimeout;
            const result = closure_131_14.set(closure_130_0, setTimeout(() => closure_2_23({ feedId, feature, force }), closure_130_6 + closure_130_7));
            const result1 = closure_131_16.set(closure_130_0, closure_130_5 + 1);
          } else {
            obj1 = closure_131_1(closure_131_2[12]);
            const obj4 = { type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: closure_130_0 };
            obj1.dispatch(obj4);
          }
          closure_131_15.delete(closure_130_0);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_4 = value;
          const obj5 = { type: "CONTENT_INVENTORY_SET_FEED", feedId: closure_130_0, feed: closure_130_4 };
          closure_131_1(closure_131_2[12]).dispatch(obj5);
          const result2 = closure_131_16.set(closure_130_0, 0);
          closure_131_15.delete(closure_130_0);
          closure_131_20(closure_130_0, { loading: false });
          if (closure_130_0 === closure_131_12) {
            closure_131_17 = null;
            closure_131_22();
          }
          c5 = 0;
          const obj10 = closure_131_1(closure_131_2[12]);
        }
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp66) {
      closure_4 = tmp66;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp66;
      } else {
        c6 = tmp;
      }
    }
  }
};
function handleUpdatePollingState() {
  scheduleNextFetch();
}
function handlePostConnectionOpen() {
  scheduleNextFetch();
}
function handleConnectionClosed() {
  const obj = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state: { loading: false } };
  obj.dispatch(obj);
  value = map.get(GLOBAL_FEED);
  if (undefined !== value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value);
    map.delete(GLOBAL_FEED);
  }
}
function handleManualRefresh(feature) {
  const feedId = feature.feedId;
  DispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId, state: { loading: false } });
  value = map.get(feedId);
  if (undefined !== value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value);
    map.delete(feedId);
  }
  fetchInventory({ feedId, feature: feature.feature, force: true });
}
function handleInboxStale(refreshAfterMs) {
  let refresh_stale_inbox_after_ms = refreshAfterMs.refreshAfterMs;
  const feed = ContentInventoryStore.getFeed(GLOBAL_FEED);
  let prop;
  if (feed != null) {
    prop = feed.refresh_stale_inbox_after_ms;
  }
  if (null != prop) {
    const _Date = Date;
    const timestamp = Date.now();
    if (refresh_stale_inbox_after_ms == null) {
      refresh_stale_inbox_after_ms = feed.refresh_stale_inbox_after_ms;
    }
    const _Date2 = Date;
    const date = new Date(timestamp + refresh_stale_inbox_after_ms);
    closure_17 = date.toUTCString();
    scheduleNextFetch();
  }
}
function handleSpotifyNewTrack(connectionId) {
  connectionId = connectionId.connectionId;
  if (null != connectionId) {
    const account = ConnectedAccountsStore.getAccount(connectionId, PlatformTypes.SPOTIFY);
    let showActivity;
    if (account != null) {
      showActivity = account.showActivity;
    }
    if (showActivity) {
      closure_18(connectionId, tmp);
    }
  }
}
function handleFetchGameProfileFeed() {
  fetchInventory({ feedId: ContentInventoryFeedKey.GLOBAL_FEED, feature: ContentInventoryFeature.ContentInventoryFeature.GAME_PROFILE });
}
const ContentInventoryFeedKey = fn(8358).ContentInventoryFeedKey;
const PlatformTypes = fn(1074).PlatformTypes;
let closure_11 = 2 * DurationsDefault.Millis.MINUTE;
const GLOBAL_FEED = ContentInventoryFeedKey.GLOBAL_FEED;
let closure_13 = 15 * DurationsDefault.Millis.MINUTE;
const map = new Map();
const set = new Set();
const map1 = new Map();
let closure_17 = null;
let apply = fn(12);
let closure_18 = apply.debounce(fn(17811).postTrackToContentInventory, 3000, { trailing: true });
let prototype = function ContentInventoryManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: handlePostConnectionOpen, CONNECTION_CLOSED: handleConnectionClosed, WINDOW_FOCUS: handleUpdatePollingState, IDLE: handleUpdatePollingState, CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: handleUpdatePollingState, CONTENT_INVENTORY_MANUAL_REFRESH: handleManualRefresh, CONTENT_INVENTORY_INBOX_STALE: handleInboxStale, SPOTIFY_NEW_TRACK: handleSpotifyNewTrack, GAME_PROFILE_OPEN: handleFetchGameProfileFeed };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp6 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryManager.tsx");

export default prototype;