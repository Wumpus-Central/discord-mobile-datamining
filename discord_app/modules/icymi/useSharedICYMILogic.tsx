// === Module 16485: useSharedICYMILogic ===

// Module 16485 (useSharedICYMILogic)
import ICYMITypes from "ICYMITypes" /* 8348 */;
import ICYMIUtils from "ICYMIUtils" /* 8350 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 8359 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

require = fn;
const SCROLL_EVENT_THROTTLE_MS = fn(16451).SCROLL_EVENT_THROTTLE_MS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export const useSharedICYMILogic = function useSharedICYMILogic(notificationItem) {
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
  let obj = notificationItem(unreadItems[5]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getVersion(), []);
  const items1 = [stateFromStores];
  const stateFromStores1 = notificationItem(unreadItems[5]).useStateFromStores(items1, () => {
    let isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated();
    if (isFirstPageHydratedResult) {
      isFirstPageHydratedResult = stateFromStores > 0;
    }
    return !isFirstPageHydratedResult;
  });
  const items2 = [stateFromStores];
  const effect = allUnreadItemsHydrated.useEffect(() => {
    if (null != stateFromStores.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      ICYMIAnalytics.trackFeedShown({ homeSessionId: "gravity" });
    }
  }, items2);
  let obj2 = notificationItem(unreadItems[5]);
  const items3 = [stateFromStores];
  const stateFromStores2 = notificationItem(unreadItems[5]).useStateFromStores(items3, () => stateFromStores.isRefreshing(), []);
  let obj3 = notificationItem(unreadItems[5]);
  const items4 = [stateFromStores];
  const stateFromStores3 = notificationItem(unreadItems[5]).useStateFromStores(items4, () => stateFromStores.isHydrating(), []);
  let obj4 = notificationItem(unreadItems[5]);
  [arr6, c9] = readItems(allUnreadItemsHydrated.useState([]), 2);
  let tmp9 = readItems(allUnreadItemsHydrated.useState([]), 2);
  const items5 = [stateFromStores];
  const stateFromStoresObject = notificationItem(unreadItems[5]).useStateFromStoresObject(items5, () => ({ loadId: stateFromStores.getLoadId(), lastScrollEventTimestamp: stateFromStores.lastScrollEvent() }));
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  let found = arr6.filter((item) => {
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
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
      const viewableFeedItemsArray = ICYMIUtils.getViewableFeedItemsArray(viewableItems);
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
        const obj = { id: id.id, type: notificationItem(unreadItems[11]).typeToString(id) };
        return obj;
      }), stateFromStores);
    }
  }, items7);
  const items8 = [stateFromStores];
  const callback1 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      const viewableFeedItemsArray = ICYMIUtils.getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: notificationItem(8348).typeToString(id) };
        return obj;
      }), stateFromStores);
      const found = viewableItems.filter((item) => {
        const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(8357).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
      });
      const result1 = ICYMIActionCreatorsDefault.triggerItemsLongImpression(found.map((item) => {
        item = item.item;
        const obj = { itemId: item.id, itemType: notificationItem(8350).itemToType(item), triggerType: "list", itemFeedIndex: item.index, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
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
      const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(8357).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
    });
    closure_1(unreadItems[9]).startItemsDwell(found.map((item) => {
      item = item.item;
      const obj = { itemId: item.id, itemType: notificationItem(8350).itemToType(item), triggerType: "list", itemFeedIndex: item.index, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
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
    let obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 }, onViewableItemsChanged };
    const items = [obj, , ];
    obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 1000 }, onViewableItemsChanged: callback1 };
    items[1] = obj;
    obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 }, onViewableItemsChanged: callback2 };
    items[2] = obj;
    return items;
  }, items9);
  const effect2 = allUnreadItemsHydrated.useEffect(() => {
    closure_1(unreadItems[9]).openICYMITab();
  }, []);
  const obj5 = notificationItem(unreadItems[5]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, readItems, stateFromStores3];
  const obj6 = notificationItem(unreadItems[12]);
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
      obj = { kind: "contentInventory", content: null };
      let obj2 = ICYMIUtils;
      obj.content = obj2.customStatusToContentInventoryEntry(notificationItem).activity;
      obj.data = obj;
      obj.score = notificationItem.score;
      data.push(obj);
    }
    if (stateFromStores1) {
      obj = { id: "loading", timestamp: 0, unread: false, data: { kind: "loading" } };
      data.push(obj);
    } else {
      const item = unreadItems.forEach((item) => {
        if (!obj.isItemNSFW(item)) {
          data.push(item);
        }
      });
      if (allUnreadItemsHydrated) {
        const obj1 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        let arr1 = data.push(obj1);
      }
      arr1 = readItems;
      if (readItems.length > 0) {
        const item1 = arr1.forEach((item) => {
          if (!obj.isItemNSFW(item)) {
            data.push(item);
          }
        });
      }
      if (stateFromStores3) {
        obj2 = { id: "bottomLoading", timestamp: 0, unread: false, data: { kind: "bottomLoading" } };
        data.push(obj2);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  obj = { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: tmp[0], isRefreshing: stateFromStores2, handleOnRefresh: notificationItem(unreadItems[12]).useICYMIReloadHandler(notificationItem.showDot), stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
  return obj;
};