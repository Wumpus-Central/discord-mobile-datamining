// === Module 18851: useSharedICYMILogic ===

// Module 18851 (useSharedICYMILogic)
import ICYMITypes from "ICYMITypes" /* 9011 */;
import ICYMIUtils from "ICYMIUtils" /* 9015 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 9016 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 16487 */;
import ICYMIStoreUtils from "ICYMIStoreUtils" /* 18846 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8998 */;

const require = globalThis.__r;

require = fn;
const SCROLL_EVENT_THROTTLE_MS = fn(18814).SCROLL_EVENT_THROTTLE_MS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export function useSharedICYMILogic(notificationItem) {
  notificationItem = notificationItem.notificationItem;
  let unreadItems;
  let readItems;
  let allUnreadItemsHydrated;
  c11 = undefined;
  ({ showDot, isWaterwheelsCardEligible } = notificationItem);
  const tmp = readItems(allUnreadItemsHydrated.useState(false), 2);
  importDefault = tmp2;
  let tmp3 = require("useICYMIItems")({ isWaterwheelsCardEligible });
  unreadItems = tmp3.unreadItems;
  readItems = tmp3.readItems;
  allUnreadItemsHydrated = tmp3.allUnreadItemsHydrated;
  const allItemsHydrated = tmp3.allItemsHydrated;
  const discoverEnabled = tmp3.discoverEnabled;
  items = [allItemsHydrated];
  const stateFromStores = notificationItem(unreadItems[5]).useStateFromStores(items, () => allItemsHydrated.getVersion(), []);
  let obj = notificationItem(unreadItems[5]);
  const items1 = [allItemsHydrated];
  const stateFromStores1 = notificationItem(unreadItems[5]).useStateFromStores(items1, () => {
    let isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated();
    if (isFirstPageHydratedResult) {
      isFirstPageHydratedResult = stateFromStores > 0;
    }
    return !isFirstPageHydratedResult;
  });
  const items2 = [stateFromStores];
  const effect = allUnreadItemsHydrated.useEffect(() => {
    if (null != allItemsHydrated.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      ICYMIAnalytics.trackFeedShown({ homeSessionId: "gravity" });
    }
  }, items2);
  let obj2 = notificationItem(unreadItems[5]);
  const items3 = [allItemsHydrated];
  const stateFromStores2 = notificationItem(unreadItems[5]).useStateFromStores(items3, () => allItemsHydrated.isRefreshing(), []);
  let obj3 = notificationItem(unreadItems[5]);
  const items4 = [allItemsHydrated];
  const stateFromStores3 = notificationItem(unreadItems[5]).useStateFromStores(items4, () => allItemsHydrated.isHydrating(), []);
  let obj4 = notificationItem(unreadItems[5]);
  [arr6, c11] = readItems(allUnreadItemsHydrated.useState([]), 2);
  let tmp9 = readItems(allUnreadItemsHydrated.useState([]), 2);
  const items5 = [allItemsHydrated];
  const stateFromStoresObject = notificationItem(unreadItems[5]).useStateFromStoresObject(items5, () => ({ loadId: allItemsHydrated.getLoadId(), lastScrollEventTimestamp: allItemsHydrated.lastScrollEvent() }));
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  let found = arr6.filter((item) => {
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  let arr = mapped.pop();
  const tmp12 = require("usePrevValue")(arr);
  closure_14 = tmp12;
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp12, arr, stateFromStoresObject.loadId, stateFromStores1];
  const effect1 = allUnreadItemsHydrated.useEffect(() => {
    if (!stateFromStores2) {
      if (!stateFromStores1) {
        if (null != closure_14) {
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
      items = [];
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
        const obj = { id: id.id, type: notificationItem(unreadItems[11]).typeToString(id) };
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
        const obj = { id: id.id, type: notificationItem(9011).typeToString(id) };
        return obj;
      }), stateFromStores);
      const found = viewableItems.filter((item) => {
        const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(18847).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
      });
      const result1 = ICYMIActionCreatorsDefault.triggerItemsLongImpression(found.map((item) => {
        item = item.item;
        const obj = { itemId: item.id, itemType: notificationItem(9015).itemToType(item), triggerType: "list", itemFeedIndex: item.index, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
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
      const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(18847).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
    });
    closure_1(unreadItems[9]).startItemsDwell(found.map((item) => {
      item = item.item;
      const obj = { itemId: item.id, itemType: notificationItem(9015).itemToType(item), triggerType: "list", itemFeedIndex: item.index, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
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
    items = [{ viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 }, onViewableItemsChanged }, { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 1000 }, onViewableItemsChanged: callback1 }, { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 }, onViewableItemsChanged: callback2 }];
    return items;
  }, items9);
  const effect2 = allUnreadItemsHydrated.useEffect(() => {
    closure_1(unreadItems[9]).openICYMITab();
  }, []);
  let obj5 = notificationItem(unreadItems[5]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, allItemsHydrated, discoverEnabled, readItems, stateFromStores3];
  let obj6 = notificationItem(unreadItems[13]);
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
        obj = notificationItem(unreadItems[12]);
      });
      let tmp15 = discoverEnabled;
      let tmp16 = !discoverEnabled;
      if (!discoverEnabled) {
        tmp16 = allUnreadItemsHydrated;
      }
      if (tmp16) {
        const obj5 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        data.push(obj5);
      }
      const item1 = readItems.forEach((item) => {
        if (!obj.isItemNSFW(item)) {
          data.push(item);
        }
        obj = notificationItem(unreadItems[12]);
      });
      if (tmp15) {
        tmp15 = allItemsHydrated;
      }
      if (tmp15) {
        const obj6 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        data.push(obj6);
      }
      if (stateFromStores3) {
        const obj7 = { id: "bottomLoading", timestamp: 0, unread: false, data: { kind: "bottomLoading" } };
        data.push(obj7);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  const iCYMIReloadHandler = notificationItem(unreadItems[13]).useICYMIReloadHandler(showDot);
  return { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: tmp[0], isRefreshing: stateFromStores2, handleOnRefresh: notificationItem(unreadItems[13]).useICYMIReloadHandler(showDot), stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
}