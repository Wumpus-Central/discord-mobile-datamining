// discord_app/modules/content_inventory/ContentInventoryStore.tsx
import { Store } from "initialize";
import { isMatchingListeningActivity } from "matchUtils.tsx";

const require = arg1;
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let c6 = false;
class ContentInventoryStore extends Store {
}
const prototype = ContentInventoryStore.prototype;
prototype["getFeeds"] = function getFeeds() {
  return map;
};
prototype["getFeed"] = function getFeed(GLOBAL_FEED) {
  return map.get(GLOBAL_FEED);
};
prototype["getFeedState"] = function getFeedState(arg0) {
  return map1.get(arg0);
};
prototype["getLastFeedFetchDate"] = function getLastFeedFetchDate(arg0) {
  return map2.get(arg0);
};
prototype["getFilters"] = function getFilters() {
  return closure_2;
};
prototype["getFeedRequestId"] = function getFeedRequestId(GLOBAL_FEED) {
  const feed = this.getFeed(GLOBAL_FEED);
  let request_id;
  if (feed != null) {
    request_id = feed.request_id;
  }
  return request_id;
};
prototype["getDebugImpressionCappingDisabled"] = function getDebugImpressionCappingDisabled() {
  return c6;
};
prototype["getMatchingInboxEntry"] = function getMatchingInboxEntry(feedId) {
  let activity;
  let require;
  ({ activity, userId: require } = feedId);
  const feed = this.getFeed(feedId.feedId);
  if (null != feed) {
    if (null != activity) {
      const entries = feed.entries;
      const reduced = entries.reduce((arg0, content) => {
        if (content.content.author_id === closure_0) {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = content.content;
          let items1 = items;
        } else {
          items1 = [];
          HermesBuiltin.arraySpread(arg0, 0);
        }
        return items1;
      }, []);
      return isMatchingListeningActivity.findMatchingEntry(reduced, activity);
    }
  }
};
ContentInventoryStore.displayName = "ContentInventoryStore";
const contentInventoryStore = new ContentInventoryStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const map = new Map();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feedId) {
    feedId = feedId.feedId;
    const result = map.set(feedId, feedId.feed);
    map = new Map(map);
    const result1 = map2.set(feedId, new Date());
  },
  CONTENT_INVENTORY_SET_FEED_STATE: function handleSetContentInventoryFeedState(feedId) {
    const result = map1.set(feedId.feedId, feedId.state);
  },
  CONTENT_INVENTORY_SET_FILTERS: function handleSetFilters(filters) {
    filters = filters.filters;
  },
  CONTENT_INVENTORY_CLEAR_FEED: function handleClearContentInventoryFeed(feedId) {
    feedId = feedId.feedId;
    if (map.has(feedId)) {
      map.delete(feedId);
      const _Map = Map;
      map = new Map(map);
    } else {
      return false;
    }
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function handleDebugToggleImpressionCapping() {
    closure_6 = !closure_6;
  }
});
let result = require("dispatcher").fileFinishedImporting("modules/content_inventory/ContentInventoryStore.tsx");

export default contentInventoryStore;