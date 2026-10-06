// === Module 11561: ContentInventoryPersistedStore ===

// Module 11561 (ContentInventoryPersistedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function updateImpressionCaches() {
  let tmp25;
  let tmp26;
  if (flag) {
    const _Date2 = Date;
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    if (0 < closure_2.itemImpressions.length) {
      const tmp8 = _slicedToArray(closure_2.itemImpressions[num5], 2);
      const first = tmp8[0];
      num7 = num6;
      while (tmp8[1] < tmp4) {
        num5 = num5 + 1;
        num6 = num5;
        num7 = num5;
        if (num5 >= closure_2.itemImpressions.length) {
          break;
        }
      }
    }
    if (0 < num7) {
      const itemImpressions1 = closure_2.itemImpressions;
      closure_2.itemImpressions = itemImpressions1.slice(num7);
    }
    if (closure_2.itemImpressions.length > 2048) {
      const itemImpressions2 = closure_2.itemImpressions;
      closure_2.itemImpressions = itemImpressions2.slice(-2048);
    }
    let num10 = 1000;
    if (!closure_7) {
      num10 = closure_1;
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    set = new Set();
    const _Date3 = Date;
    num11 = null;
    const itemImpressions = closure_2.itemImpressions;
    set1 = new Set();
    for (const item10073 of itemImpressions) {
      let tmp24 = _slicedToArray(item10073, 2);
      [tmp25, tmp26] = tmp24;
      if (tmp26 < tmp18) {
        let addResult = set.add(tmp25);
      } else if (null == num11) {
        num11 = tmp27 + num10;
      }
      let addResult1 = set1.add(tmp25);
      continue;
    }
    if (num11 == null) {
      num11 = Infinity;
    }
    c6 = true;
  } else {
    const _Date = Date;
  }
}
let closure_1 = 3 * DurationsDefault.Millis.DAY;
let closure_2 = { itemImpressions: [], hidden: false };
let set = new Set();
let set1 = new Set();
let num11 = 0;
let c6 = false;
let closure_7 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ContentInventoryPersistedStore extends PersistedStore {
  initialize(arg0) {
    let obj = arg0;
    const obj2 = {};
    const merged = Object.assign(closure_2);
    if (arg0 == null) {
      obj = {};
    }
    const merged1 = Object.assign(obj);
    closure_2 = obj2;
  }
  getState() {
    return closure_2;
  }
  getImpressionCappedItemIds() {
    updateImpressionCaches();
    return set;
  }
  getDebugFastImpressionCappingEnabled() {
    return closure_7;
  }
  reset() {
    closure_2 = { itemImpressions: [], hidden: false };
  }
}
Object.defineProperty(ContentInventoryPersistedStore.prototype, "hidden", {
  get: function hidden() {
    return closure_2.hidden;
  },
  set: undefined
});
ContentInventoryPersistedStore.displayName = "ContentInventoryPersistedStore";
ContentInventoryPersistedStore.persistKey = "ContentInventoryPersistedStore";
let obj = {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function handleImpressionsTracked(itemIds) {
    itemIds = itemIds.itemIds;
    if (!c6) {
      updateImpressionCaches();
    }
    let flag = false;
    for (const item10017 of itemIds) {
      if (!set1.has(item10017)) {
        let itemImpressions = closure_2.itemImpressions;
        let items = [item10017, tmp4];
        let arr = itemImpressions.push(items);
        flag = true;
      }
      continue;
    }
    updateImpressionCaches(flag);
    return flag;
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function handleDebugClearImpressions() {
    closure_2.itemImpressions = [];
    updateImpressionCaches(true);
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function handleDebugLogImpressions() {
    return false;
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function handleDebugToggleFastImpressionCapping() {
    closure_7 = !closure_7;
  },
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function handleToggleContentInventoryFeedHidden() {
    closure_2.hidden = !closure_2.hidden;
  }
};
const contentInventoryPersistedStore = new ContentInventoryPersistedStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryPersistedStore.tsx");

export default contentInventoryPersistedStore;