// === Module 13001: ContentInventoryActivityStore ===

// Module 13001 (ContentInventoryActivityStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import utils from "utils" /* 8135 */;
import matchUtils from "matchUtils" /* 8337 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8341 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import ContentInventoryStore from "ContentInventoryStore" /* 8336 */;

require = fn;
function entryToKey(content) {
  return "" + content.author_id + ":" + content.id;
}
function getMatchingActivity(author_type) {
  _require = author_type;
  let tmp3 = null;
  if (!obj.isEntryExpired(author_type)) {
    let found;
    if (tmpResult.isEntryActive(author_type)) {
      if (author_type.author_type === tmp(8356).ContentInventoryAuthorType.USER) {
        const activities = PresenceStore.getActivities(author_type.author_id);
        found = activities.find((type) => {
          if (type.type === ActivityTypes.PLAYING) {
            if (obj.isApplicationEntry(closure_0)) {
              let result = matchUtils.isMatchingApplicationActivity(closure_0, type);
              const tmp2Result = matchUtils;
            }
            return result;
          }
          let tmp5 = type.type !== ActivityTypes.LISTENING;
          if (!tmp5) {
            tmp5 = !ContentInventoryTypes.isListenedSessionEntry(closure_0);
          }
          result = !tmp5;
          if (!tmp5) {
            result = matchUtils.isMatchingListeningActivity(closure_0, type);
          }
        });
      }
    }
    tmp3 = found;
    tmpResult = tmp(8135);
  }
  return tmp3;
}
function detectMatchingActivityForEntries(entries) {
  const updatedKeys = new Set();
  const matchedKeys = new Set();
  const iter = entries[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp4 = getMatchingActivity(nextResult.content);
    let tmp5 = tmp4;
    if (undefined !== tmp4) {
      let tmp8 = entryToKey(tmp2.content);
      let tmp9 = tmp8;
      let addResult = matchedKeys.add(tmp8);
      if (tmp5 !== map.get(tmp8)) {
        let addResult1 = updatedKeys.add(tmp9);
        let result = map.set(tmp9, tmp5);
      }
    }
    continue;
  }
  return { updatedKeys, matchedKeys };
}
function handlePresenceUpdates() {
  let flag = false;
  const arr = Array.from(map.keys());
  const set1 = new Set();
  const feeds = ContentInventoryStore.getFeeds();
  const values = feeds.values();
  const iter = values[Symbol.iterator]();
  while (true) {
    let nextResult = iter.next();
    if (iter === undefined) {
      let obj2 = _modDef12;
      let items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(set1, 0);
      let differenceResult = obj2.difference(arr, items);
      for (const item10081 of differenceResult) {
        let deleteResult = map.delete(item10081);
        flag = true;
        continue;
      }
      return flag;
    } else {
      let tmp8 = nextResult;
      let tmp9 = detectMatchingActivityForEntries;
      if (set.size > 0) {
        let entries = tmp8.entries;
        entries = entries.filter((content) => {
          content = content.content;
          return !set.has("" + content.author_id + ":" + content.id);
        });
      } else {
        entries = tmp8.entries;
      }
      let tmp9Result = tmp9(entries);
      let updatedKeys = tmp9Result.updatedKeys;
      let matchedKeys = tmp9Result.matchedKeys;
      tmp9 = updatedKeys[Symbol.iterator]();
    }
  }
  set = new Set();
}
const ActivityTypes = fn(1074).ActivityTypes;
let items = [fn(8130).ContentInventoryEntryType.LISTENED_SESSION];
let set = new Set(items);
const map = new Map();
const Store = initializeDefault.Store;
class ContentInventoryActivityStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.canRenderContent = function canRenderContent(content_type) {
      const isEntryExpiredResult = utils.isEntryExpired(content_type);
      let tmp2 = !isEntryExpiredResult;
      if (!isEntryExpiredResult) {
        const hasItem = set.has(content_type.content_type);
        let tmp5 = !hasItem;
        if (hasItem) {
          tmp5 = null != applyArgumentsResult.getMatchingActivity(content_type);
        }
        tmp2 = tmp5;
      }
      return tmp2;
    };
    return applyArgumentsResult;
  }
}
const prototype = ContentInventoryActivityStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ContentInventoryStore, PresenceStore);
  const items = [PresenceStore];
  this.syncWith(items, handlePresenceUpdates);
};
prototype["getMatchingActivity"] = function getMatchingActivity(author_id) {
  value = null;
  if (!obj.isEntryExpired(author_id)) {
    const _HermesInternal = HermesInternal;
    value = map.get("" + author_id.author_id + ":" + author_id.id);
  }
  return value;
};
ContentInventoryActivityStore.displayName = "ContentInventoryActivityStore";
const contentInventoryActivityStore = new ContentInventoryActivityStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feed) {
    return detectMatchingActivityForEntries(feed.feed.entries).updatedKeys.size > 0;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityStore.tsx");

export default contentInventoryActivityStore;
export { entryToKey };