// === Module 8022: ContentInventoryStore ===

// Module 8022 (ContentInventoryStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import matchUtils from "matchUtils" /* 8023 */;
import size from "module_2" /* 2 */;

let set;

let map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_6 = false;
const Store = get_initializedDefault.Store;
class ContentInventoryStore extends Store {
  getFeeds() {
    return map;
  }
  getFeed(GLOBAL_FEED) {
    return map.get(GLOBAL_FEED);
  }
  getFeedState(arg0) {
    return map1.get(arg0);
  }
  getLastFeedFetchDate(arg0) {
    return map2.get(arg0);
  }
  getFilters() {
    return filters;
  }
  getFeedRequestId(GLOBAL_FEED) {
    const feed = this.getFeed(GLOBAL_FEED);
    let request_id;
    if (feed != null) {
      request_id = feed.request_id;
    }
    return request_id;
  }
  getDebugImpressionCappingDisabled() {
    return closure_6;
  }
  getMatchingInboxEntry(feedId) {
    let activity;
    let closure_129_0;
    ({ activity, userId: closure_129_0 } = feedId);
    const feed = this.getFeed(feedId.feedId);
    if (null != feed) {
      if (null != activity) {
        const entries = feed.entries;
        const reduced = entries.reduce((acc, content) => {
          let items1;
          if (content.content.author_id === closure_1_0) {
            const items = [];
            items[HermesBuiltin.arraySpread(items, acc, 0)] = content.content;
            items1 = items;
          } else {
            items1 = [];
            HermesBuiltin.arraySpread(items1, acc, 0);
          }
          return items1;
        }, []);
        const obj = matchUtils;
        return obj.findMatchingEntry(reduced, activity);
      }
    }
  }
}
const prototype = ContentInventoryStore.prototype;
ContentInventoryStore.displayName = "ContentInventoryStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map = new Map();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feedId) {
    feedId = feedId.feedId;
    const result = map.set(feedId, feedId.feed);
    map = new Map(map);
    set = map2.set;
    const date = new Date();
    const result1 = set(feedId, date);
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
      const self = this;
      const self2 = this;
      map = new Map(map);
    } else {
      return false;
    }
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function handleDebugToggleImpressionCapping() {
    closure_6 = !closure_6;
  }
};
const contentInventoryStore = new ContentInventoryStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryStore.tsx");

export default contentInventoryStore;