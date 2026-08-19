// === Module 11123: updateImpressionCaches ===

// Module 11123 (updateImpressionCaches)
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function updateImpressionCaches(flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    const _Date2 = Date;
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    if (0 < closure_2.itemImpressions.length) {
      const tmp8 = callback(closure_2.itemImpressions[num5], 2);
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
      let itemImpressions = closure_2.itemImpressions;
      closure_2.itemImpressions = itemImpressions.slice(num7);
    }
    if (closure_2.itemImpressions.length > 2048) {
      const itemImpressions1 = closure_2.itemImpressions;
      closure_2.itemImpressions = itemImpressions1.slice(-2048);
    }
    let num10 = 1000;
    if (!c7) {
      num10 = closure_1;
    }
    const _Set = Set;
    set = new Set();
    const _Set2 = Set;
    set1 = new Set();
    const _Date3 = Date;
    let num11 = null;
    itemImpressions = closure_2.itemImpressions;
    for (const item10073 of itemImpressions) {
      let tmp28 = callback(item10073, 2);
      [tmp29, tmp30] = tmp28;
      if (tmp30 < tmp22) {
        let addResult = set.add(tmp29);
      } else if (null == num11) {
        num11 = tmp31 + num10;
      }
      let addResult1 = set1.add(tmp29);
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
let closure_1 = 3 * obj132Default.Millis.DAY;
let closure_2 = { itemImpressions: [], hidden: false };
let set = new Set();
let set1 = new Set();
let c5 = 0;
let c6 = false;
let c7 = false;
const PersistedStore = initializeDefault.PersistedStore;
class ContentInventoryPersistedStore extends PersistedStore {
}
const prototype = ContentInventoryPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = {};
  const merged = Object.assign(obj);
  if (arg0 == null) {
    obj = {};
  }
  const merged1 = Object.assign(obj);
};
prototype["getState"] = function getState() {
  return closure_2;
};
prototype["getImpressionCappedItemIds"] = function getImpressionCappedItemIds() {
  updateImpressionCaches();
  return set;
};
prototype["getDebugFastImpressionCappingEnabled"] = function getDebugFastImpressionCappingEnabled() {
  return c7;
};
Object.defineProperty(prototype, "hidden", {
  get: function hidden(closure_2) {
    return closure_2.hidden;
  },
  set: undefined
});
prototype["reset"] = function reset() {
  closure_2 = { itemImpressions: [], hidden: false };
};
ContentInventoryPersistedStore.displayName = "ContentInventoryPersistedStore";
ContentInventoryPersistedStore.persistKey = "ContentInventoryPersistedStore";
const contentInventoryPersistedStore = new ContentInventoryPersistedStore(dispatcherDefault, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function handleImpressionsTracked(arg0) {
    if (!c6) {
      updateImpressionCaches();
    }
    let flag = false;
    for (const item10017 of tmp) {
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
});
const result = require("obj132").fileFinishedImporting("modules/content_inventory/ContentInventoryPersistedStore.tsx");

export default contentInventoryPersistedStore;