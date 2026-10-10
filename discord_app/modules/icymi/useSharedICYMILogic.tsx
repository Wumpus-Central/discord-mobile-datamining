// === Module 16923: useSharedICYMILogic ===

// Module 16923 (useSharedICYMILogic)
import ICYMITypes from "ICYMITypes" /* 8466 */;
import ICYMIUtils from "ICYMIUtils" /* 8470 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8471 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 14632 */;
import ICYMIStoreUtils from "ICYMIStoreUtils" /* 16893 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8453 */;

const require = globalThis.__r;

require = fn;
let SCROLL_EVENT_THROTTLE_MS = fn(16889).SCROLL_EVENT_THROTTLE_MS;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export const useSharedICYMILogic = ReactCompilerGating.isReactCompilerEnabled() ? (function useSharedICYMILogic(arg0) {
  const cResult = require("c").c(71);
  let obj = require("c");
  let tmp4 = stateFromStores2;
  [r10018, require] = stateFromStores2(noop.useState(false), 2);
  let tmp5 = stateFromStores2(noop.useState(false), 2);
  const tmp6 = stateFromStores;
  ({ unreadItems, readItems, allUnreadItemsHydrated } = stateFromStores(stateFromStores1[6])());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [lastScrollEventTimestamp];
    const fn = function c() {
      return lastScrollEventTimestamp.getVersion();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp10 = items1;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  const tmp7 = stateFromStores(stateFromStores1[6])();
  stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [lastScrollEventTimestamp];
    cResult[3] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = L;
  } else {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
  }
  const tmpResult = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp13, L);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    cResult[6] = tmp18;
  } else {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
  }
  if (cResult[7] !== stateFromStores) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    tmp20[0] = stateFromStores;
    cResult[7] = stateFromStores;
    cResult[8] = tmp20;
  } else {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
  }
  const effect = noop.useEffect(tmp18, tmp20);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    const items3 = [lastScrollEventTimestamp];
    class O {
      constructor() {
        return lastScrollEventTimestamp.isRefreshing();
      }
    }
    const items4 = [];
    cResult[9] = items4;
    cResult[10] = items3;
    cResult[11] = O;
    let tmp24 = O;
    let tmp23 = items3;
    const tmp22 = items4;
  } else {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    tmp23 = cResult[10];
    tmp24 = cResult[11];
  }
  const tmpResult5 = require("initialize");
  stateFromStores2 = require("initialize").useStateFromStores(tmp23, tmp24, tmp22);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    const items5 = [lastScrollEventTimestamp];
    class N {
      constructor() {
        return lastScrollEventTimestamp.isHydrating();
      }
    }
    const items6 = [];
    cResult[12] = items5;
    cResult[13] = N;
    cResult[14] = items6;
    let tmp28 = items6;
    let tmp27 = N;
    const tmp26 = items5;
  } else {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    tmp27 = cResult[13];
    tmp28 = cResult[14];
  }
  const tmpResult6 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp26, tmp27, tmp28);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    cResult[15] = tmp31;
    class N {
      constructor() {
        return lastScrollEventTimestamp.isHydrating();
      }
    }
  } else {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
  }
  const tmpResult7 = require("initialize");
  [arr8, noop] = tmp4(noop.useState(tmp30), 2);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    const items7 = [lastScrollEventTimestamp];
    class G {
      constructor() {
        obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
        return obj;
      }
    }
    cResult[16] = items7;
    cResult[17] = G;
    let tmp34 = G;
    const tmp33 = items7;
  } else {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    tmp34 = cResult[17];
  }
  const tmp4Result = tmp4(noop.useState(tmp30), 2);
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp33, tmp34);
  ({ loadId, lastScrollEventTimestamp } = stateFromStoresObject);
  if (cResult[18] !== arr8) {
    class L {
      constructor() {
        isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
        if (isFirstPageHydratedResult) {
          tmp2 = closure_1;
          num = 0;
          isFirstPageHydratedResult = closure_1 > 0;
        }
        return !isFirstPageHydratedResult;
      }
    }
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
          if (isFirstPageHydratedResult) {
            tmp2 = closure_1;
            num = 0;
            isFirstPageHydratedResult = closure_1 > 0;
          }
          return !isFirstPageHydratedResult;
        }
      }
      cResult[20] = tmp37;
      class G {
        constructor() {
          obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
          return obj;
        }
      }
    } else {
      class L {
        constructor() {
          isFirstPageHydratedResult = closure_5.isFirstPageHydrated();
          if (isFirstPageHydratedResult) {
            tmp2 = closure_1;
            num = 0;
            isFirstPageHydratedResult = closure_1 > 0;
          }
          return !isFirstPageHydratedResult;
        }
      }
    }
    class G {
      constructor() {
        obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
        return obj;
      }
    }
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(arg0) {
          return arg0.item.id;
        }
      }
      cResult[21] = J;
      class G {
        constructor() {
          obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
          return obj;
        }
      }
    } else {
      class J {
        constructor(arg0) {
          return arg0.item.id;
        }
      }
    }
    let found = arr8.filter(mapped);
    mapped = found.map(tmp38);
    let arr = mapped.pop();
    cResult[18] = arr8;
    cResult[19] = arr;
  } else {
    class J {
      constructor(arg0) {
        return arg0.item.id;
      }
    }
    SCROLL_EVENT_THROTTLE_MS = tmp36;
    class G {
      constructor() {
        obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
        return obj;
      }
    }
    if (cResult[22] === stateFromStores2) {
      class J {
        constructor(arg0) {
          return arg0.item.id;
        }
      }
    }
    class Z {
      constructor() {
        if (!closure_3) {
          tmp = closure_2;
          if (!closure_2) {
            tmp3 = null;
            if (null != closure_7) {
              if (null != closure_6) {
                if (closure_6 !== tmp2) {
                  tmp4 = globalThis;
                  _Date = Date;
                  timestamp = Date.now();
                  tmp6 = lastScrollEventTimestamp;
                  tmp7 = SCROLL_EVENT_THROTTLE_MS;
                  if (timestamp - lastScrollEventTimestamp > SCROLL_EVENT_THROTTLE_MS) {
                    tmp8 = closure_1;
                    tmp9 = closure_2;
                    obj = closure_1(closure_2[11]);
                    gravityScrollEventResult = obj.gravityScrollEvent(timestamp);
                    tmp11 = closure_0;
                    ICYMIAnalytics = closure_0(closure_2[8]).ICYMIAnalytics;
                    result = ICYMIAnalytics.trackFeedFirstScrollStarted();
                  }
                }
              }
            }
          }
        }
        return;
      }
    }
    cResult[22] = stateFromStores2;
    cResult[23] = tmp6(tmp2[10])(tmp36);
    cResult[24] = lastScrollEventTimestamp;
    cResult[25] = tmp36;
    cResult[26] = stateFromStores1;
    cResult[27] = Z;
    const tmp41 = tmp6(tmp2[10])(tmp36);
  }
  const tmpResult8 = require("initialize");
}) : (function useSharedICYMILogic(notificationItem) {
  notificationItem = notificationItem.notificationItem;
  let unreadItems;
  let readItems;
  let allUnreadItemsHydrated;
  let stateFromStores;
  c9 = undefined;
  const tmp = readItems(allUnreadItemsHydrated.useState(false), 2);
  importDefault = tmp2;
  let tmp3 = require("useICYMIItems")();
  unreadItems = tmp3.unreadItems;
  readItems = tmp3.readItems;
  allUnreadItemsHydrated = tmp3.allUnreadItemsHydrated;
  let items = [stateFromStores];
  stateFromStores = notificationItem(unreadItems[7]).useStateFromStores(items, () => stateFromStores.getVersion(), []);
  let obj = notificationItem(unreadItems[7]);
  const items1 = [stateFromStores];
  const stateFromStores1 = notificationItem(unreadItems[7]).useStateFromStores(items1, () => {
    let isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated();
    if (isFirstPageHydratedResult) {
      isFirstPageHydratedResult = stateFromStores > 0;
    }
    return !isFirstPageHydratedResult;
  });
  const items2 = [stateFromStores];
  const effect = allUnreadItemsHydrated.useEffect(() => {
    if (null != stateFromStores.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[8]).ICYMIAnalytics;
      ICYMIAnalytics.trackFeedShown({ homeSessionId: "gravity" });
    }
  }, items2);
  let obj2 = notificationItem(unreadItems[7]);
  const items3 = [stateFromStores];
  const stateFromStores2 = notificationItem(unreadItems[7]).useStateFromStores(items3, () => stateFromStores.isRefreshing(), []);
  let obj3 = notificationItem(unreadItems[7]);
  const items4 = [stateFromStores];
  const stateFromStores3 = notificationItem(unreadItems[7]).useStateFromStores(items4, () => stateFromStores.isHydrating(), []);
  let obj4 = notificationItem(unreadItems[7]);
  [arr6, c9] = readItems(allUnreadItemsHydrated.useState([]), 2);
  let tmp9 = readItems(allUnreadItemsHydrated.useState([]), 2);
  const items5 = [stateFromStores];
  const stateFromStoresObject = notificationItem(unreadItems[7]).useStateFromStoresObject(items5, () => ({ loadId: stateFromStores.getLoadId(), lastScrollEventTimestamp: stateFromStores.lastScrollEvent() }));
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  let found = arr6.filter((item) => {
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[9]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  let arr = mapped.pop();
  const tmp12 = require("usePrevValue")(arr);
  closure_12 = tmp12;
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp12, arr, stateFromStoresObject.loadId, stateFromStores1];
  const effect1 = allUnreadItemsHydrated.useEffect(() => {
    if (!stateFromStores2) {
      if (!stateFromStores1) {
        if (null != closure_12) {
          if (null != arr) {
            if (arr !== tmp2) {
              const _Date = Date;
              const timestamp = Date.now();
              if (timestamp - lastScrollEventTimestamp > SCROLL_EVENT_THROTTLE_MS) {
                ICYMIActionCreatorsDefault.gravityScrollEvent(timestamp);
                const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
                const result = ICYMIAnalytics.trackFeedFirstScrollStarted();
              }
            }
          }
        }
      }
    }
  }, items6);
  const items7 = [stateFromStores, tmp[1]];
  const onViewableItemsChanged = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (viewableItems.some((item) => "end" === item.item.data.kind)) {
      closure_1(true);
    }
    if (0 !== viewableItems.length) {
      _undefined(viewableItems);
      const items = [];
      const viewableFeedItemsArray = ICYMIStoreUtils.getViewableFeedItemsArray(viewableItems);
      const _Date = Date;
      let timestamp = Date.now();
      let diff = viewableFeedItemsArray.length - 1;
      if (0 <= diff) {
        do {
          let tmp3 = viewableFeedItemsArray[diff];
          let sum = timestamp;
          if (null != tmp3) {
            let obj = { id: tmp3.id, type: null, timestamp: null };
            let obj2 = ICYMITypes;
            obj.type = obj2.typeToString(tmp3);
            let tmp9 = +timestamp;
            sum = tmp9 + 1;
            obj.timestamp = tmp9;
            arr = items.push(obj);
          }
          diff = diff - 1;
          timestamp = sum;
        } while (0 <= diff);
      }
      if (items.length > 0) {
        ICYMIActionCreatorsDefault.ackGravityItems(items, true);
      }
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemShortImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: notificationItem(unreadItems[13]).typeToString(id) };
        return obj;
      }), stateFromStores);
    }
  }, items7);
  const items8 = [stateFromStores];
  const callback1 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      const viewableFeedItemsArray = ICYMIStoreUtils.getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: notificationItem(8466).typeToString(id) };
        return obj;
      }), stateFromStores);
      const found = viewableItems.filter((item) => {
        const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(16894).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
      });
      const result1 = ICYMIActionCreatorsDefault.triggerItemsLongImpression(found.map((item) => {
        item = item.item;
        const obj = { itemId: item.id, itemType: notificationItem(8470).itemToType(item), triggerType: "list", itemFeedIndex: item.index, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
        let score = item.score;
        if (score == null) {
          score = null;
        }
        obj.itemScore = score;
        let channelType = item.channelType;
        if (channelType == null) {
          channelType = null;
        }
        obj.itemChannelType = channelType;
        return obj;
      }));
    }
  }, items8);
  const callback2 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const found = viewableItems.filter((item) => {
      const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(16894).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
    });
    closure_1(unreadItems[11]).startItemsDwell(found.map((item) => {
      item = item.item;
      const obj = { itemId: item.id, itemType: notificationItem(8470).itemToType(item), triggerType: "list", itemFeedIndex: item.index, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
      let score = item.score;
      if (score == null) {
        score = null;
      }
      obj.itemScore = score;
      let channelType = item.channelType;
      if (channelType == null) {
        channelType = null;
      }
      obj.itemChannelType = channelType;
      return obj;
    }));
  }, []);
  const items9 = [onViewableItemsChanged, callback1, callback2];
  const memo = allUnreadItemsHydrated.useMemo(() => {
    const items = [{ viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 }, onViewableItemsChanged }, { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 1000 }, onViewableItemsChanged: callback1 }, { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 }, onViewableItemsChanged: callback2 }];
    return items;
  }, items9);
  const effect2 = allUnreadItemsHydrated.useEffect(() => {
    closure_1(unreadItems[11]).openICYMITab();
  }, []);
  let obj5 = notificationItem(unreadItems[7]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, readItems, stateFromStores3];
  let obj6 = notificationItem(unreadItems[15]);
  const memo1 = allUnreadItemsHydrated.useMemo(() => {
    const data = [];
    let tmp2 = stateFromStores1;
    if (stateFromStores1) {
      tmp2 = null != notificationItem;
    }
    if (tmp2) {
      tmp2 = notificationItem.type === ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS;
    }
    if (tmp2) {
      let obj = { id: notificationItem.id, timestamp: null, data: null, score: null, unread: true };
      const _Date = Date;
      obj.timestamp = Date.now();
      const obj2 = { kind: "contentInventory", content: ICYMIUtils.customStatusToContentInventoryEntry(notificationItem).activity };
      obj.data = obj2;
      obj.score = notificationItem.score;
      data.push(obj);
    }
    if (stateFromStores1) {
      const obj4 = { id: "loading", timestamp: 0, unread: false, data: { kind: "loading" } };
      data.push(obj4);
    } else {
      const item = unreadItems.forEach((item) => {
        if (!obj.isItemNSFW(item)) {
          data.push(item);
        }
        obj = notificationItem(unreadItems[14]);
      });
      if (allUnreadItemsHydrated) {
        const obj5 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        data.push(obj5);
      }
      if (readItems.length > 0) {
        const item1 = readItems.forEach((item) => {
          if (!obj.isItemNSFW(item)) {
            data.push(item);
          }
          obj = notificationItem(unreadItems[14]);
        });
      }
      if (stateFromStores3) {
        const obj6 = { id: "bottomLoading", timestamp: 0, unread: false, data: { kind: "bottomLoading" } };
        data.push(obj6);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  const iCYMIReloadHandler = notificationItem(unreadItems[15]).useICYMIReloadHandler(notificationItem.showDot);
  return { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: tmp[0], isRefreshing: stateFromStores2, handleOnRefresh: notificationItem(unreadItems[15]).useICYMIReloadHandler(notificationItem.showDot), stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
});