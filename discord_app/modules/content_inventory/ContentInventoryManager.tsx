// === Module 18006: ContentInventoryManager ===

// Module 18006 (ContentInventoryManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 8027 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 12918 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13503 */;
import ContentInventoryFeature from "ContentInventoryFeature" /* 18007 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import IdleStore from "IdleStore" /* 5567 */;
import WindowStore from "WindowStore" /* 13646 */;
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore" /* 11548 */;
import ContentInventoryStore from "ContentInventoryStore" /* 8012 */;
import module_12 from "module_12" /* 12 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c6;

function getBackoffJitter() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  return Math.random() * (num + 1) * closure_11;
}
function setFeedState(feedId, state) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId, state };
  obj.dispatch(obj2);
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
      const obj = ContentInventoryExperiments;
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
    }
    return true;
  }
}
function scheduleNextFetch() {
  let date2;
  let feedId;
  let num = map1.get(GLOBAL_FEED);
  if (num == null) {
    num = 0;
  }
  if (num <= 0) {
    let obj = DispatcherDefault;
    const obj2 = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state: { loading: false } };
    obj.dispatch(obj2);
    const value = map.get(GLOBAL_FEED);
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
          const obj9 = ContentInventoryExperiments;
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
          const self = this;
          const self2 = this;
          const _Date3 = Date;
          const date = new Date(feed.expired_at);
          const time = date.getTime();
          num3 = time - Date.now();
        }
        let num4 = 0;
        if (null != closure_17) {
          const _Date4 = Date;
          const self3 = this;
          const self4 = this;
          const _Date5 = Date;
          const date1 = new Date(closure_17);
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
        const _Date6 = Date;
        const _Date7 = Date;
        const self5 = this;
        const self6 = this;
        const obj4 = { loading: false, nextFetchDate: date2 };
        date2 = new Date(Date.now() + sum);
        const obj5 = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state: obj4 };
        const tmp2Result = DispatcherDefault;
        tmp2Result.dispatch(obj5);
        const _setTimeout = setTimeout;
        const result = map.set(GLOBAL_FEED, setTimeout(() => {
          const obj = { feedId, feature: ContentInventoryFeature.ContentInventoryFeature.INBOX };
          return fetchInventory(obj);
        }, sum));
      }
    }
  }
}
function fetchInventory() {
  return obj(...arguments);
}
let actions = function _fetchInventory() {
  let obj = _asyncToGenerator(async (feedId) => {
    let c0;
    let c1;
    let closure_2;
    let feature;
    let feed;
    let force;
    let value;
    if (1 === c6) {
      if (feedId === 1) {
        let c7 = 3;
        throw value;
      } else if (feedId === 2) {
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        let c5 = 1;
        feed.getFeed(feedId);
        set.add(feedId);
        closure_131_20(feedId, { loading: true });
        let refresh_token;
        const getMyContentInventory = closure_131_0(closure_131_2[11]).getMyContentInventory;
        const tmp58 = closure_131_0(closure_131_2[11]);
        if (refresh_token != null) {
          refresh_token = refresh_token.refresh_token;
        }
        const obj6 = { token: refresh_token, feedId, feature };
        c6 = 3;
        c7 = 1;
        const obj7 = { value: getMyContentInventory(obj6), done: false };
        return obj7;
      }
    } else if (2 === c6) {
      c5 = 0;
      value = closure_131_16.get(feedId);
      feature = value;
      if (value == null) {
        feature = 0;
      }
      let closure_5 = feature;
      if (closure_5 < 4) {
        const _Math = Math;
        let closure_6 = closure_131_1(closure_131_2[9]).Millis.MINUTE * Math.pow(2, closure_5);
        let closure_7 = closure_131_19(closure_5);
        const _setTimeout = setTimeout;
        const result = closure_131_14.set(feedId, setTimeout(() => {
          const obj = { feedId, feature, force };
          return closure_2_23(obj);
        }, closure_6 + closure_7));
        const result1 = closure_131_16.set(feedId, closure_5 + 1);
      } else {
        const obj8 = { type: "CONTENT_INVENTORY_CLEAR_FEED", feedId };
        const obj2 = closure_131_1(closure_131_2[12]);
        obj2.dispatch(obj8);
      }
      set.delete(feedId);
    } else if (feedId === 1) {
      c7 = 3;
      throw value;
    } else if (feedId === 2) {
      c5 = 0;
      c7 = 3;
      let obj = { value, done: true };
      return obj;
    } else {
      feed = value;
      const obj10 = { type: "CONTENT_INVENTORY_SET_FEED", feedId, feed };
      const obj9 = closure_131_1(closure_131_2[12]);
      obj9.dispatch(obj10);
      const result2 = closure_131_16.set(feedId, 0);
      set.delete(feedId);
      closure_131_20(feedId, { loading: false });
      if (feedId === closure_131_12) {
        let c17 = null;
        closure_131_22();
      }
      c5 = 0;
    }
    await "IconComponent";
    refresh_token = tmp;
    force = tmp4;
    ({ feedId: c0, feature: c1, force } = feedId);
    if (force === undefined) {
      force = false;
    }
    return "Set";
  });
  return obj(...arguments);
};
function handleUpdatePollingState() {
  scheduleNextFetch();
}
function handlePostConnectionOpen() {
  scheduleNextFetch();
}
function handleConnectionClosed() {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state: { loading: false } };
  obj.dispatch(obj2);
  const value = map.get(GLOBAL_FEED);
  if (undefined !== value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value);
    map.delete(GLOBAL_FEED);
  }
}
function handleManualRefresh(feedId) {
  feedId = feedId.feedId;
  const feature = feedId.feature;
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId, state: { loading: false } });
  const value = map.get(feedId);
  if (undefined !== value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value);
    map.delete(feedId);
  }
  fetchInventory({ feedId, feature, force: true });
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
    const self = this;
    const self2 = this;
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
  const feed = ContentInventoryStore.getFeed(GLOBAL_FEED);
  let tmp3 = null != feed;
  if (tmp3) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const date = new Date(feed.expired_at);
    const time = date.getTime();
    tmp3 = time > Date.now();
  }
  if (!tmp3) {
    const obj = { feedId: GLOBAL_FEED, feature: ContentInventoryFeature.ContentInventoryFeature.GAME_PROFILE };
    fetchInventory(obj);
  }
}
const ContentInventoryFeedKey = ContentInventoryConstants.ContentInventoryFeedKey;
const PlatformTypes = Constants.PlatformTypes;
let closure_11 = 2 * DurationsDefault.Millis.MINUTE;
const GLOBAL_FEED = ContentInventoryFeedKey.GLOBAL_FEED;
let closure_13 = 15 * DurationsDefault.Millis.MINUTE;
const map = new Map();
const set = new Set();
const map1 = new Map();
let closure_17 = null;
let closure_18 = module_12.debounce(ContentInventoryHttpApi.postTrackToContentInventory, 3000, { trailing: true });
class ContentInventoryManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    actions = { POST_CONNECTION_OPEN: handlePostConnectionOpen, CONNECTION_CLOSED: handleConnectionClosed, WINDOW_FOCUS: handleUpdatePollingState, IDLE: handleUpdatePollingState, CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: handleUpdatePollingState, CONTENT_INVENTORY_MANUAL_REFRESH: handleManualRefresh, CONTENT_INVENTORY_INBOX_STALE: handleInboxStale, SPOTIFY_NEW_TRACK: handleSpotifyNewTrack, GAME_PROFILE_OPEN: handleFetchGameProfileFeed };
    applyArgumentsResult.actions = actions;
    return applyArgumentsResult;
  }
}
const contentInventoryManager = new ContentInventoryManager();
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryManager.tsx");

export default contentInventoryManager;