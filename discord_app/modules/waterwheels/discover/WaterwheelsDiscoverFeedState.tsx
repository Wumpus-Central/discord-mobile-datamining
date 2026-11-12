// === Module 18880: WaterwheelsDiscoverFeedState ===

// Module 18880 (WaterwheelsDiscoverFeedState)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverFeedState.tsx");

export function toDiscoverAnalyticsItem(itemId) {
  return { itemId: itemId.itemId, index: itemId.displayIndex, brokerPosition: itemId.brokerPosition, loadId: itemId.loadId, score: itemId.score, cardType: itemId.card.type };
}
export function selectWaterwheelsDiscoverEntries(EMPTY_DISCOVER_SNAPSHOT, fn) {
  const loadId = EMPTY_DISCOVER_SNAPSHOT.loadId;
  if (EMPTY_DISCOVER_SNAPSHOT.hasSnapshot) {
    if (null != loadId) {
      const items1 = [];
      const _Set = Set;
      const set = new Set();
      const _Set2 = Set;
      const set1 = new Set();
      items = EMPTY_DISCOVER_SNAPSHOT.items;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let hasItem = set.has(nextResult.id);
        if (!hasItem) {
          hasItem = set1.has(tmp5.card.id);
        }
        if (!hasItem) {
          hasItem = !fn(tmp5.card);
        }
        if (!hasItem) {
          let addResult = set.add(tmp5.id);
          let addResult1 = set1.add(tmp5.card.id);
          let obj = { key: null, itemId: null, displayIndex: null, brokerPosition: null, loadId: null, score: null, card: null };
          let _HermesInternal = HermesInternal;
          obj.key = "" + loadId + ":" + tmp5.id;
          obj.itemId = tmp5.card.id;
          obj.displayIndex = items1.length;
          obj.brokerPosition = tmp5.brokerPosition;
          obj.loadId = loadId;
          let score = tmp5.score;
          if (score == null) {
            score = null;
          }
          obj.score = score;
          obj.card = tmp5.card;
          let arr = items1.push(obj);
        }
        continue;
      }
      return items1;
    }
  }
  return [];
}
export function getWaterwheelsDiscoverFeedStatus(EMPTY_DISCOVER_SNAPSHOT, length) {
  if (length > 0) {
    return "cards";
  } else {
    const status = EMPTY_DISCOVER_SNAPSHOT.status;
    if ("success" === status) {
      return "empty";
    } else if ("error" === status) {
      return "error";
    } else {
      return "loading";
    }
  }
}
export function shouldRequestWaterwheelsDiscover(visible) {
  ({ enabled, snapshot, hasRequestInFlight, isPickerOpen } = visible);
  if (enabled) {
    enabled = visible.visible;
  }
  if (enabled) {
    enabled = "idle" === snapshot.status;
  }
  if (enabled) {
    enabled = !hasRequestInFlight;
  }
  if (enabled) {
    enabled = !isPickerOpen;
  }
  return enabled;
}