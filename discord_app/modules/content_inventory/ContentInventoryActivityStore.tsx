// === Module 9386: entryToKey ===

// Module 9386 (entryToKey)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "sortActivity" /* 4569 */;
import closure_4 from "map" /* 8607 */;
import { ActivityTypes } from "ME" /* 676 */;
import set from "set" /* 2 */;

let require = arg1;
function entryToKey(content) {
  return "" + content.author_id + ":" + content.id;
}
function getMatchingActivity(author_type) {
  const _require = author_type;
  let tmp3 = null;
  if (!obj.isEntryExpired(author_type)) {
    let found;
    if (tmpResult.isEntryActive(author_type)) {
      if (author_type.author_type === tmp(8627).ContentInventoryAuthorType.USER) {
        activities = activities.getActivities(author_type.author_id);
        found = activities.find((type) => {
          if (type.type === closure_1_5.PLAYING) {
            if (obj.isApplicationEntry(author_type)) {
              let result = author_type(closure_1_2[7]).isMatchingApplicationActivity(author_type, type);
              const tmp2Result = author_type(closure_1_2[7]);
            }
            return result;
          }
          let tmp5 = type.type !== closure_1_5.LISTENING;
          if (!tmp5) {
            tmp5 = !author_type(closure_1_2[6]).isListenedSessionEntry(author_type);
            const obj2 = author_type(closure_1_2[6]);
          }
          result = !tmp5;
          if (!tmp5) {
            result = author_type(closure_1_2[7]).isMatchingListeningActivity(author_type, type);
            const obj3 = author_type(closure_1_2[7]);
          }
        });
      }
    }
    tmp3 = found;
    tmpResult = tmp(8044);
  }
  return tmp3;
}
function detectMatchingActivityForEntries(entries) {
  const updatedKeys = new Set();
  const matchedKeys = new Set();
  const iter = entries[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = getMatchingActivity;
    let tmp2 = nextResult;
    let tmp4 = getMatchingActivity(nextResult.content);
    let tmp5 = tmp4;
    if (undefined !== tmp4) {
      let tmp6 = entryToKey;
      let tmp7 = nextResult;
      let tmp8 = entryToKey(tmp2.content);
      let tmp9 = tmp8;
      let addResult = matchedKeys.add(tmp8);
      let tmp11 = tmp4;
      let obj3 = map;
      if (tmp5 !== map.get(tmp8)) {
        let tmp12 = tmp8;
        let addResult1 = updatedKeys.add(tmp9);
        let tmp14 = tmp4;
        let result = obj3.set(tmp9, tmp5);
      }
    }
    continue;
  }
  return { updatedKeys, matchedKeys };
}
function handlePresenceUpdates() {
  let flag = false;
  set = new Set();
  const set1 = new Set();
  feeds = feeds.getFeeds();
  const values = feeds.values();
  const iter = values[Symbol.iterator]();
  while (true) {
    let tmp5 = values;
    let nextResult = iter.next();
    let tmp7 = iter;
    if (iter === undefined) {
      let tmp15 = importDefault;
      let tmp16 = dependencyMap;
      let obj2 = applyDefault;
      let items = [];
      let tmp17 = items;
      let tmp18 = set1;
      let num = 0;
      let arraySpreadResult = HermesBuiltin.arraySpread(set1, 0);
      let differenceResult = obj2.difference(arr, items);
      let tmp21 = differenceResult;
      let tmp22 = differenceResult;
      for (const item10081 of differenceResult) {
        let tmp23 = map;
        let deleteResult = map.delete(item10081);
        flag = true;
        continue;
      }
      return flag;
    } else {
      let tmp8 = nextResult;
      let tmp9 = detectMatchingActivityForEntries;
      if (set.size > 0) {
        let tmp11 = nextResult;
        let entries = tmp8.entries;
        entries = entries.filter((content) => {
          content = content.content;
          return !set.has("" + content.author_id + ":" + content.id);
        });
      } else {
        let tmp10 = nextResult;
        entries = tmp8.entries;
      }
      let tmp9Result = tmp9(entries);
      let updatedKeys = tmp9Result.updatedKeys;
      let tmp13 = updatedKeys;
      let matchedKeys = tmp9Result.matchedKeys;
      let tmp14 = updatedKeys;
      tmp9 = updatedKeys[Symbol.iterator]();
    }
  }
}
let items = [require("ContentInventoryEntryType").ContentInventoryEntryType.LISTENED_SESSION];
let set = new Set(items);
const map = new Map();
const Store = initializeDefault.Store;
class ContentInventoryActivityStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.canRenderContent = function canRenderContent(content_type) {
      const isEntryExpiredResult = applyArgumentsResult(closure_1_2[4]).isEntryExpired(content_type);
      let tmp2 = !isEntryExpiredResult;
      if (!isEntryExpiredResult) {
        const hasItem = closure_1_6.has(content_type.content_type);
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
  this.waitFor(closure_4, closure_3);
  const items = [closure_3];
  this.syncWith(items, handlePresenceUpdates);
};
prototype["getMatchingActivity"] = function getMatchingActivity(author_id) {
  let value = null;
  if (!obj.isEntryExpired(author_id)) {
    const _HermesInternal = HermesInternal;
    value = map.get("" + author_id.author_id + ":" + author_id.id);
  }
  return value;
};
ContentInventoryActivityStore.displayName = "ContentInventoryActivityStore";
const contentInventoryActivityStore = new ContentInventoryActivityStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  CONTENT_INVENTORY_SET_FEED: function handleSetContentInventoryFeed(feed) {
    return detectMatchingActivityForEntries(feed.feed.entries).updatedKeys.size > 0;
  }
});
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityStore.tsx");

export default contentInventoryActivityStore;
export { entryToKey };