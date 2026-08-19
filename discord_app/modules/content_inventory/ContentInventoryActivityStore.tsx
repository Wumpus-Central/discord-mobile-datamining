// discord_app/modules/content_inventory/ContentInventoryActivityStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import sortActivity from "../../stores/PresenceStore.tsx";
import map from "ContentInventoryStore.tsx";
import { ActivityTypes } from "../../Constants.tsx";

let require = fn;
function entryToKey(content) {
  return "" + content.author_id + ":" + content.id;
}
function getMatchingActivity(author_type) {
  const _require = author_type;
  let tmp3 = null;
  if (!obj.isEntryExpired(author_type)) {
    let found;
    if (tmpResult.isEntryActive(author_type)) {
      if (author_type.author_type === tmp(9062).ContentInventoryAuthorType.USER) {
        activities = activities.getActivities(author_type.author_id);
        found = activities.find((item, index) => {
          if (item.type === ActivityTypes.PLAYING) {
            if (obj.isApplicationEntry(author_type)) {
              let result = author_type(dependencyMap[7]).isMatchingApplicationActivity(author_type, item);
              const tmp2Result = author_type(dependencyMap[7]);
            }
            return result;
          }
          let tmp5 = item.type !== ActivityTypes.LISTENING;
          if (!tmp5) {
            tmp5 = !author_type(dependencyMap[6]).isListenedSessionEntry(author_type);
            const obj2 = author_type(dependencyMap[6]);
          }
          result = !tmp5;
          if (!tmp5) {
            result = author_type(dependencyMap[7]).isMatchingListeningActivity(author_type, item);
            const obj3 = author_type(dependencyMap[7]);
          }
        });
      }
    }
    tmp3 = found;
    tmpResult = tmp(8348);
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
  feeds = feeds.getFeeds();
  const values = feeds.values();
  const iter = values[Symbol.iterator]();
  while (true) {
    let nextResult = iter.next();
    if (iter === undefined) {
      let obj2 = applyDefault;
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
        entries = entries.filter((item, index) => {
          const content = item.content;
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
let items = [require("ContentInventoryEntryType").ContentInventoryEntryType.LISTENED_SESSION];
let set = new Set(items);
const map = new Map();
const Store = initializeDefault.Store;
class ContentInventoryActivityStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.canRenderContent = function canRenderContent(content_type) {
      const isEntryExpiredResult = applyArgumentsResult(dependencyMap[4]).isEntryExpired(content_type);
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
let result = require("obj132").fileFinishedImporting("modules/content_inventory/ContentInventoryActivityStore.tsx");

export default contentInventoryActivityStore;
export { entryToKey };