// === Module 17650: getBackoffJitter ===

// Module 17650 (getBackoffJitter)
import setDefault from "set" /* 684 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 5495 */;
import apexExperiment from "apexExperiment" /* 13583 */;
import mapDefault from "map" /* 13811 */;
import ContentInventoryFeature from "ContentInventoryFeature" /* 17652 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_handleConnectionOpen" /* 5230 */;
import closure_5 from "set" /* 5234 */;
import closure_6 from "checkIdleAFK" /* 5363 */;
import closure_7 from "updateImpressionCaches" /* 11738 */;
import closure_8 from "map" /* 8626 */;
import { ContentInventoryFeedKey } from "ContentInventoryFeedKey" /* 8648 */;
import { PlatformTypes } from "ME" /* 673 */;
import apply from "apply" /* 12 */;
import set from "set" /* 2 */;

require = arg1;
function getBackoffJitter() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  return Math.random() * (num + 1) * closure_11;
}
function setFeedState(feedId, state) {
  let obj = dispatcherDefault;
  obj = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId, state };
  obj.dispatch(obj);
}
function canFetch(GLOBAL_FEED) {
  if (set.has(GLOBAL_FEED)) {
    return false;
  } else {
    if (GLOBAL_FEED === ContentInventoryFeedKey.GAME_PROFILE_FEED) {
      if (undefined !== store2.getFeed(GLOBAL_FEED)) {
        return false;
      }
    }
    if (GLOBAL_FEED === GLOBAL_FEED) {
      if (obj.isEligibleForContentInventoryV1("ContentInventoryManager")) {
        if (closure_7.hidden) {
          if (null != store2.getFeed(GLOBAL_FEED)) {
            return false;
          }
        }
        if (closure_4.isConnected()) {
          const idleSince = store.getIdleSince();
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
      obj = apexExperiment;
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
    let obj = dispatcherDefault;
    obj = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: null, state: null };
    obj[1] = tmp;
    obj[2] = { loading: false };
    obj.dispatch(obj);
    const value = map.get(tmp);
    if (undefined !== value) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value);
      obj3.delete(tmp);
    }
    let flag = false;
    if (!set.has(tmp)) {
      if (tmp !== ContentInventoryFeedKey.GAME_PROFILE_FEED) {
        flag = true;
        {
          flag = false;
          if (obj9.isEligibleForContentInventoryV1("ContentInventoryManager")) {
            if (!closure_7.hidden) {
              flag = false;
              if (closure_4.isConnected()) {
                const idleSince = store.getIdleSince();
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
          obj9 = apexExperiment;
        }
      } else {
        flag = false;
      }
    }
    if (flag) {
      const feed = store2.getFeed(tmp);
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
        if (null != c17) {
          const _Date4 = Date;
          const date1 = new Date(c17);
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
        obj[1] = date2;
        obj1 = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: null, state: null };
        obj1[1] = tmp;
        obj1[2] = obj;
        tmp2(706).dispatch(obj1);
        const _setTimeout = setTimeout;
        const result = obj3.set(tmp, setTimeout(() => callback2({ feedId: closure_12, feature: callback(table[14]).ContentInventoryFeature.INBOX }), sum));
        const tmp2Result = tmp2(706);
      }
    }
    tmp2 = importDefault;
  }
}
function fetchInventory(arg0) {
  const self = this;
  const apply = _fetchInventory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchInventory() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let refresh_token = tmp3;
              force = tmp7;
              let callback;
              let callback2;
              force = undefined;
              ({ feedId: c0, feature: c1, force } = callback);
              if (force === undefined) {
                force = false;
              }
              refresh_token = undefined;
              closure_4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                if (!callback5(callback)) {
                  if (!force) {
                    c7 = 3;
                  }
                }
                c5 = 1;
                refresh_token = feed.getFeed(callback);
                set.add(callback);
                callback4(callback, { loading: true });
                let obj3 = callback(force[11]);
                refresh_token = undefined;
                if (refresh_token != null) {
                  refresh_token = refresh_token.refresh_token;
                }
                const obj2 = { token: null, feedId: null, feature: null };
                obj2[0] = refresh_token;
                obj2[1] = callback;
                obj2[2] = callback2;
                c6 = 3;
                c7 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = obj3.getMyContentInventory(obj2);
                return obj3;
              }
            } else if (2 === tmp7) {
              c5 = 0;
              const value = store.get(callback);
              callback2 = value;
              if (value == null) {
                callback2 = 0;
              }
              c5 = callback2;
              if (c5 < 4) {
                const _Math = Math;
                c6 = callback2(force[9]).Millis.MINUTE * Math.pow(2, c5);
                c7 = callback3(c5);
                const _setTimeout = setTimeout;
                const result = closure_14.set(callback, setTimeout(() => closure_1_23({ feedId: c0, feature: c1, force }), c6 + c7));
                const result1 = store.set(callback, c5 + 1);
              } else {
                obj1 = callback2(force[12]);
                const obj4 = { type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: null };
                obj4[1] = callback;
                obj1.dispatch(obj4);
              }
              set.delete(callback);
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_4 = arg1;
              const obj5 = { type: "CONTENT_INVENTORY_SET_FEED", feedId: null, feed: null };
              obj5[1] = callback;
              obj5[2] = closure_4;
              callback2(force[12]).dispatch(obj5);
              const result2 = store.set(callback, 0);
              set.delete(callback);
              callback4(callback, { loading: false });
              if (callback === closure_12) {
                c17 = null;
                callback6();
              }
              c5 = 0;
              const obj10 = callback2(force[12]);
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
    iter.next();
    return iter;
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleUpdatePollingState() {
  scheduleNextFetch();
}
function handlePostConnectionOpen() {
  scheduleNextFetch();
}
function handleConnectionClosed() {
  let obj = dispatcherDefault;
  obj = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state: { loading: false } };
  obj.dispatch(obj);
  const value = map.get(GLOBAL_FEED);
  if (undefined !== value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value);
    map.delete(GLOBAL_FEED);
  }
}
function handleManualRefresh(feature) {
  const feedId = feature.feedId;
  dispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId, state: { loading: false } });
  const value = map.get(feedId);
  if (undefined !== value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value);
    map.delete(feedId);
  }
  fetchInventory({ feedId, feature: feature.feature, force: true });
}
function handleInboxStale(refreshAfterMs) {
  let refresh_stale_inbox_after_ms = refreshAfterMs.refreshAfterMs;
  const feed = store2.getFeed(GLOBAL_FEED);
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
    account = account.getAccount(connectionId, PlatformTypes.SPOTIFY);
    let showActivity;
    if (account != null) {
      showActivity = account.showActivity;
    }
    if (showActivity) {
      callback2(connectionId, tmp);
    }
  }
}
function handleFetchGameProfileFeed() {
  fetchInventory({ feedId: ContentInventoryFeedKey.GLOBAL_FEED, feature: ContentInventoryFeature.ContentInventoryFeature.GAME_PROFILE });
}
mapDefault;
let closure_11 = 2 * setDefault.Millis.MINUTE;
const GLOBAL_FEED = ContentInventoryFeedKey.GLOBAL_FEED;
let closure_13 = 15 * setDefault.Millis.MINUTE;
const map = new Map();
let set = new Set();
const map1 = new Map();
let c17 = null;
let closure_18 = apply.debounce(require("_getMyContentInventory").postTrackToContentInventory, 3000, { trailing: true });
initializeDefault;
let prototype = function ContentInventoryManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: handlePostConnectionOpen, CONNECTION_CLOSED: handleConnectionClosed, WINDOW_FOCUS: handleUpdatePollingState, IDLE: handleUpdatePollingState, CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: handleUpdatePollingState, CONTENT_INVENTORY_MANUAL_REFRESH: handleManualRefresh, CONTENT_INVENTORY_INBOX_STALE: handleInboxStale, SPOTIFY_NEW_TRACK: handleSpotifyNewTrack, GAME_PROFILE_OPEN: handleFetchGameProfileFeed };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp6 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryManager.tsx");

export default prototype;