// === Module 16469: useSharedICYMILogic ===

// Module 16469 (useSharedICYMILogic)
import ICYMITypes from "ICYMITypes" /* 8034 */;
import ICYMIUtils from "ICYMIUtils" /* 8038 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 14183 */;
import ICYMIConstants from "ICYMIConstants" /* 16433 */;
import ICYMIStoreUtils from "ICYMIStoreUtils" /* 16437 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8021 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_12, importDefault, notificationItem;

const SCROLL_EVENT_THROTTLE_MS = ICYMIConstants.SCROLL_EVENT_THROTTLE_MS;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let allUnreadItemsHydrated;
  let arr8;
  let lastScrollEventTimestamp;
  let loadId;
  let readItems;
  let require;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let tmp10;
  let tmp13;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp33;
  let tmp34;
  let tmp8;
  let tmp9;
  let unreadItems;
  let obj = require("react");
  const cResult = obj.c(71);
  let tmp4 = stateFromStores2;
  let tmp5 = stateFromStores2(react.useState(false), 2);
  [r10018, require] = tmp5;
  const tmp6 = stateFromStores;
  ({ unreadItems, readItems, allUnreadItemsHydrated } = stateFromStores(stateFromStores1[6])());
  stateFromStores(stateFromStores1[6])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [lastScrollEventTimestamp];
    const fn = function c() {
      return lastScrollEventTimestamp.getVersion();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp9 = fn;
    tmp10 = items1;
    tmp8 = items;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [lastScrollEventTimestamp];
    cResult[3] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = E;
  } else {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
  }
  const tmpResult5 = require("get initialized");
  stateFromStores1 = tmpResult5.useStateFromStores(tmp13, E);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    cResult[6] = tmp18;
  } else {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
  }
  if (cResult[7] !== stateFromStores) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    tmp20[0] = stateFromStores;
    cResult[7] = stateFromStores;
    cResult[8] = tmp20;
  } else {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
  }
  const effect = react.useEffect(tmp18, tmp20);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
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
    tmp24 = O;
    tmp23 = items3;
    tmp22 = items4;
  } else {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    tmp23 = cResult[10];
    tmp24 = cResult[11];
  }
  const tmpResult6 = require("get initialized");
  stateFromStores2 = tmpResult6.useStateFromStores(tmp23, tmp24, tmp22);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    const items5 = [lastScrollEventTimestamp];
    class R {
      constructor() {
        return lastScrollEventTimestamp.isHydrating();
      }
    }
    const items6 = [];
    cResult[12] = items5;
    cResult[13] = R;
    cResult[14] = items6;
    tmp28 = items6;
    tmp27 = R;
    tmp26 = items5;
  } else {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    tmp27 = cResult[13];
    tmp28 = cResult[14];
  }
  const tmpResult7 = require("get initialized");
  const stateFromStores3 = tmpResult7.useStateFromStores(tmp26, tmp27, tmp28);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    cResult[15] = tmp31;
    class R {
      constructor() {
        return lastScrollEventTimestamp.isHydrating();
      }
    }
  } else {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
  }
  const tmp4Result = tmp4(react.useState(tmp30), 2);
  [arr8, react] = tmp4Result;
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    const items7 = [lastScrollEventTimestamp];
    class G {
      constructor() {
        const obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
        return obj;
      }
    }
    cResult[16] = items7;
    cResult[17] = G;
    tmp34 = G;
    tmp33 = items7;
  } else {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    tmp34 = cResult[17];
  }
  const tmpResult8 = require("get initialized");
  const stateFromStoresObject = tmpResult8.useStateFromStoresObject(tmp33, tmp34);
  ({ loadId, lastScrollEventTimestamp } = stateFromStoresObject);
  if (cResult[18] !== arr8) {
    class E {
      constructor() {
        const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
        return !isFirstPageHydratedResult;
      }
    }
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
          return !isFirstPageHydratedResult;
        }
      }
      cResult[20] = tmp38;
      class G {
        constructor() {
          const obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
          return obj;
        }
      }
    } else {
      class E {
        constructor() {
          const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
          return !isFirstPageHydratedResult;
        }
      }
    }
    class G {
      constructor() {
        const obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
        return obj;
      }
    }
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(item) {
          return item.item.id;
        }
      }
      cResult[21] = J;
      class G {
        constructor() {
          const obj = { loadId: lastScrollEventTimestamp.getLoadId(), lastScrollEventTimestamp: lastScrollEventTimestamp.lastScrollEvent() };
          return obj;
        }
      }
    } else {
      class J {
        constructor(item) {
          return item.item.id;
        }
      }
    }
    let found = arr8.filter(tmp37);
    const mapped = found.map(tmp39);
    let arr = mapped.pop();
    cResult[18] = arr8;
    cResult[19] = arr;
  } else {
    class J {
      constructor(item) {
        return item.item.id;
      }
    }
  }
  arr = tmp36;
  const tmp41 = tmp6(stateFromStores1[10])(tmp36);
  let closure_7 = tmp41;
  if (cResult[22] === stateFromStores2) {
    class J {
      constructor(item) {
        return item.item.id;
      }
    }
  }
  class Z {
    constructor() {
      if (!stateFromStores2) {
        if (!stateFromStores1) {
          if (null != closure_7) {
            if (null != arr) {
              if (arr !== tmp3) {
                const _Date = Date;
                const timestamp = Date.now();
                if (timestamp - lastScrollEventTimestamp > SCROLL_EVENT_THROTTLE_MS) {
                  const obj = ICYMIActionCreatorsDefault;
                  obj.gravityScrollEvent(timestamp);
                  const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
                  const result = ICYMIAnalytics.trackFeedFirstScrollStarted();
                }
              }
            }
          }
        }
      }
    }
  }
  cResult[22] = stateFromStores2;
  cResult[23] = tmp41;
  cResult[24] = lastScrollEventTimestamp;
  cResult[25] = tmp36;
  cResult[26] = stateFromStores1;
  cResult[27] = Z;
}) : ((notificationItem) => {
  let _undefined;
  let arr6;
  let c9;
  let closure_1;
  notificationItem = notificationItem.notificationItem;
  let unreadItems;
  let readItems;
  let allUnreadItemsHydrated;
  let stateFromStores;
  c9 = undefined;
  const showDot = notificationItem.showDot;
  const tmp = readItems(allUnreadItemsHydrated.useState(false), 2);
  let tmp3 = tmp[1];
  importDefault = tmp3;
  const first = tmp[0];
  let tmp4 = require("useICYMIItems")();
  unreadItems = tmp4.unreadItems;
  readItems = tmp4.readItems;
  allUnreadItemsHydrated = tmp4.allUnreadItemsHydrated;
  let obj = notificationItem(unreadItems[7]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getVersion(), []);
  let obj2 = notificationItem(unreadItems[7]);
  const items1 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
    return !isFirstPageHydratedResult;
  });
  const items2 = [stateFromStores];
  const effect = allUnreadItemsHydrated.useEffect(() => {
    if (null != stateFromStores.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[8]).ICYMIAnalytics;
      ICYMIAnalytics.trackFeedShown({ homeSessionId: "gravity" });
    }
  }, items2);
  let obj3 = notificationItem(unreadItems[7]);
  const items3 = [stateFromStores];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => stateFromStores.isRefreshing(), []);
  let obj4 = notificationItem(unreadItems[7]);
  const items4 = [stateFromStores];
  const stateFromStores3 = obj4.useStateFromStores(items4, () => stateFromStores.isHydrating(), []);
  [arr6, c9] = readItems(allUnreadItemsHydrated.useState([]), 2);
  readItems(allUnreadItemsHydrated.useState([]), 2);
  let obj5 = notificationItem(unreadItems[7]);
  const items5 = [stateFromStores];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items5, () => {
    const obj = { loadId: stateFromStores.getLoadId(), lastScrollEventTimestamp: stateFromStores.lastScrollEvent() };
    return obj;
  });
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  const loadId = stateFromStoresObject.loadId;
  let found = arr6.filter((item) => {
    item = item.item;
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[9]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  let arr = mapped.pop();
  const tmp13 = require("react")(arr);
  closure_12 = tmp13;
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp13, arr, loadId, stateFromStores1];
  const effect1 = allUnreadItemsHydrated.useEffect(() => {
    if (!stateFromStores2) {
      if (!stateFromStores1) {
        if (null != closure_12) {
          if (null != arr) {
            if (arr !== tmp3) {
              const _Date = Date;
              const timestamp = Date.now();
              if (timestamp - lastScrollEventTimestamp > SCROLL_EVENT_THROTTLE_MS) {
                const obj = ICYMIActionCreatorsDefault;
                obj.gravityScrollEvent(timestamp);
                const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
                const result = ICYMIAnalytics.trackFeedFirstScrollStarted();
              }
            }
          }
        }
      }
    }
  }, items6);
  const items7 = [stateFromStores, tmp3];
  const onViewableItemsChanged = allUnreadItemsHydrated.useCallback((viewableItems) => {
    let obj2;
    let tmp9;
    viewableItems = viewableItems.viewableItems;
    if (viewableItems.some((item) => "end" === item.item.data.kind)) {
      closure_1(true);
    }
    if (0 !== viewableItems.length) {
      _undefined(viewableItems);
      const items = [];
      const obj4 = ICYMIStoreUtils;
      const viewableFeedItemsArray = obj4.getViewableFeedItemsArray(viewableItems);
      const _Date = Date;
      let timestamp = Date.now();
      let diff = viewableFeedItemsArray.length - 1;
      if (0 <= diff) {
        do {
          let tmp3 = viewableFeedItemsArray[diff];
          let sum = timestamp;
          if (null != tmp3) {
            let obj = { id: tmp3.id, type: obj2.typeToString(tmp3), timestamp: tmp9 };
            let push = items.push;
            obj2 = ICYMITypes;
            tmp9 = +timestamp;
            sum = tmp9 + 1;
            arr = push(obj);
          }
          diff = diff - 1;
          timestamp = sum;
        } while (0 <= diff);
      }
      if (items.length > 0) {
        const obj3 = ICYMIActionCreatorsDefault;
        obj3.ackGravityItems(items, true);
      }
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemShortImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        let obj2;
        const obj = { id: id.id, type: obj2.typeToString(id) };
        obj2 = notificationItem(unreadItems[13]);
        return obj;
      }), stateFromStores);
    }
  }, items7);
  const items8 = [stateFromStores];
  const callback1 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      let obj = ICYMIStoreUtils;
      const viewableFeedItemsArray = obj.getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        let obj2;
        const obj = { id: id.id, type: obj2.typeToString(id) };
        obj2 = notificationItem(unreadItems[13]);
        return obj;
      }), stateFromStores);
      const triggerItemsLongImpression = ICYMIActionCreatorsDefault.triggerItemsLongImpression;
      ICYMIActionCreatorsDefault;
      const found = viewableItems.filter((item) => {
        item = item.item;
        const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[9]).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
      });
      const result1 = triggerItemsLongImpression(found.map((item) => {
        let channelType;
        let index;
        let obj2;
        let score;
        item = item.item;
        const obj = { itemId: item.id, itemType: obj2.itemToType(item), triggerType: "list", itemFeedIndex: index, itemScore: score, itemChannelType: channelType, isInitiallyVisible: false };
        index = item.index;
        score = item.score;
        obj2 = notificationItem(unreadItems[14]);
        if (score == null) {
          score = null;
        }
        channelType = item.channelType;
        if (channelType == null) {
          channelType = null;
        }
        return obj;
      }));
    }
  }, items8);
  const callback2 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const startItemsDwell = closure_1(unreadItems[11]).startItemsDwell;
    closure_1(unreadItems[11]);
    const found = viewableItems.filter((item) => {
      item = item.item;
      const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[9]).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
    });
    startItemsDwell(found.map((item) => {
      let channelType;
      let index;
      let obj2;
      let score;
      item = item.item;
      const obj = { itemId: item.id, itemType: obj2.itemToType(item), triggerType: "list", itemFeedIndex: index, itemScore: score, itemChannelType: channelType, isInitiallyVisible: false };
      index = item.index;
      score = item.score;
      obj2 = notificationItem(unreadItems[14]);
      if (score == null) {
        score = null;
      }
      channelType = item.channelType;
      if (channelType == null) {
        channelType = null;
      }
      return obj;
    }));
  }, []);
  const items9 = [onViewableItemsChanged, callback1, callback2];
  const memo = allUnreadItemsHydrated.useMemo(() => {
    const items = [, , ];
    const obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 }, onViewableItemsChanged };
    items[0] = obj;
    const obj2 = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 1000 }, onViewableItemsChanged: callback1 };
    items[1] = obj2;
    const obj3 = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 }, onViewableItemsChanged: callback2 };
    items[2] = obj3;
    return items;
  }, items9);
  const effect2 = allUnreadItemsHydrated.useEffect(() => {
    const obj = closure_1(unreadItems[11]);
    obj.openICYMITab();
  }, []);
  let obj6 = notificationItem(unreadItems[15]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, readItems, stateFromStores3];
  const iCYMIReloadHandler = obj6.useICYMIReloadHandler(showDot);
  const memo1 = allUnreadItemsHydrated.useMemo(() => {
    let obj2;
    let obj3;
    const data = [];
    const tmp2 = stateFromStores1 && null != notificationItem && notificationItem.type === ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS;
    if (tmp2) {
      let obj = { id: notificationItem.id, timestamp: Date.now(), data: obj2, score: notificationItem.score, unread: true };
      const _Date = Date;
      const push = data.push;
      obj2 = { kind: "contentInventory", content: obj3.customStatusToContentInventoryEntry(notificationItem).activity };
      obj3 = ICYMIUtils;
      push(obj);
    }
    if (stateFromStores1) {
      const obj4 = { id: "loading", timestamp: 0, unread: false, data: { kind: "loading" } };
      data.push(obj4);
    } else {
      const item = unreadItems.forEach((item) => {
        const obj = notificationItem(unreadItems[14]);
        if (!obj.isItemNSFW(item)) {
          data.push(item);
        }
      });
      if (allUnreadItemsHydrated) {
        const obj5 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        data.push(obj5);
      }
      if (readItems.length > 0) {
        const item1 = readItems.forEach((item) => {
          const obj = notificationItem(unreadItems[14]);
          if (!obj.isItemNSFW(item)) {
            data.push(item);
          }
        });
      }
      if (stateFromStores3) {
        const obj6 = { id: "bottomLoading", timestamp: 0, unread: false, data: { kind: "bottomLoading" } };
        data.push(obj6);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  return { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: first, isRefreshing: stateFromStores2, handleOnRefresh: iCYMIReloadHandler, stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
});
let result = size.fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export const useSharedICYMILogic = tmp2;