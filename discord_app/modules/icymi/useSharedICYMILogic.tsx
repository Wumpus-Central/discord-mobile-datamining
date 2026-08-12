// discord_app/modules/icymi/useSharedICYMILogic.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import filterStaffGuild from "filterStaffGuild";
import { SCROLL_EVENT_THROTTLE_MS } from "NUM_GUILDS_EXTENDED_ONBOARDING";

const require = arg1;
let result = require("filterStaffGuild").fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export const useSharedICYMILogic = function useSharedICYMILogic(notificationItem) {
  let arr6;
  let c9;
  notificationItem = notificationItem.notificationItem;
  let importDefault;
  let unreadItems;
  let readItems;
  let allUnreadItemsHydrated;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStores3;
  c9 = undefined;
  let lastScrollEventTimestamp;
  let arr;
  let c12;
  let callback;
  let callback1;
  let callback2;
  const tmp = readItems(allUnreadItemsHydrated.useState(false), 2);
  importDefault = tmp2;
  let tmp3 = importDefault(unreadItems[4])();
  unreadItems = tmp3.unreadItems;
  readItems = tmp3.readItems;
  allUnreadItemsHydrated = tmp3.allUnreadItemsHydrated;
  let obj = notificationItem(unreadItems[5]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getVersion(), []);
  const items1 = [stateFromStores];
  stateFromStores1 = notificationItem(unreadItems[5]).useStateFromStores(items1, () => {
    let isFirstPageHydratedResult = stateFromStores.isFirstPageHydrated();
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
  stateFromStores2 = notificationItem(unreadItems[5]).useStateFromStores(items3, () => stateFromStores.isRefreshing(), []);
  let obj3 = notificationItem(unreadItems[5]);
  const items4 = [stateFromStores];
  stateFromStores3 = notificationItem(unreadItems[5]).useStateFromStores(items4, () => stateFromStores.isHydrating(), []);
  let obj4 = notificationItem(unreadItems[5]);
  [arr6, c9] = readItems(allUnreadItemsHydrated.useState([]), 2);
  let tmp9 = readItems(allUnreadItemsHydrated.useState([]), 2);
  const items5 = [stateFromStores];
  const stateFromStoresObject = notificationItem(unreadItems[5]).useStateFromStoresObject(items5, () => ({ loadId: stateFromStores.getLoadId(), lastScrollEventTimestamp: stateFromStores.lastScrollEvent() }));
  lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  let found = arr6.filter((item) => {
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  arr = mapped.pop();
  const tmp12 = importDefault(unreadItems[8])(arr);
  c12 = tmp12;
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp12, arr, stateFromStoresObject.loadId, stateFromStores1];
  const effect1 = allUnreadItemsHydrated.useEffect(() => {
    if (!stateFromStores2) {
      if (!stateFromStores1) {
        if (null != c12) {
          if (null != arr) {
            if (arr !== tmp2) {
              const _Date = Date;
              const timestamp = Date.now();
              if (timestamp - lastScrollEventTimestamp > stateFromStores1) {
                _undefined(unreadItems[9]).gravityScrollEvent(timestamp);
                const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
                const result = ICYMIAnalytics.trackFeedFirstScrollStarted();
                const obj = _undefined(unreadItems[9]);
              }
            }
          }
        }
      }
    }
  }, items6);
  const items7 = [stateFromStores, tmp[1]];
  callback = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (viewableItems.some((item) => "end" === item.item.data.kind)) {
      _undefined(true);
    }
    if (0 !== viewableItems.length) {
      _undefined2(viewableItems);
      const items = [];
      const viewableFeedItemsArray = notificationItem(unreadItems[10]).getViewableFeedItemsArray(viewableItems);
      const _Date = Date;
      let timestamp = Date.now();
      let diff = viewableFeedItemsArray.length - 1;
      if (0 <= diff) {
        do {
          let tmp3 = viewableFeedItemsArray[diff];
          let tmp4 = diff;
          let tmp5 = timestamp;
          let sum = timestamp;
          if (null != tmp3) {
            let obj = { id: null, type: null, timestamp: null };
            obj[0] = tmp3.id;
            let tmp7 = notificationItem;
            let tmp8 = unreadItems;
            let obj2 = notificationItem(unreadItems[11]);
            obj[1] = obj2.typeToString(tmp3);
            let tmp9 = +timestamp;
            sum = tmp9 + 1;
            obj[2] = tmp9;
            let arr = items.push(obj);
          }
          diff = diff - 1;
          timestamp = sum;
        } while (0 <= diff);
      }
      if (items.length > 0) {
        _undefined(unreadItems[9]).ackGravityItems(items, true);
        const obj3 = _undefined(unreadItems[9]);
      }
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemShortImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: null };
        obj[1] = callback(table[11]).typeToString(id);
        return obj;
      }), stateFromStores);
      const obj4 = notificationItem(unreadItems[10]);
    }
  }, items7);
  const items8 = [stateFromStores];
  callback1 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      const viewableFeedItemsArray = notificationItem(unreadItems[10]).getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: null };
        obj[1] = callback(7344).typeToString(id);
        return obj;
      }), stateFromStores);
      let obj = notificationItem(unreadItems[10]);
      const found = viewableItems.filter((item) => {
        const NON_ELIGIBLE_SCROLL_ITEMS = callback(8964).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
      });
      const result1 = _undefined(unreadItems[9]).triggerItemsLongImpression(found.map((item) => {
        item = item.item;
        const obj = { itemId: item.id, itemType: null, triggerType: "list", itemFeedIndex: null, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
        obj[1] = callback(8957).itemToType(item);
        obj[3] = item.index;
        let score = item.score;
        if (score == null) {
          score = null;
        }
        obj[4] = score;
        let channelType = item.channelType;
        if (channelType == null) {
          channelType = null;
        }
        obj[5] = channelType;
        return obj;
      }));
      const obj2 = _undefined(unreadItems[9]);
    }
  }, items8);
  callback2 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const found = viewableItems.filter((item) => {
      const NON_ELIGIBLE_SCROLL_ITEMS = callback(8964).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
    });
    _undefined(unreadItems[9]).startItemsDwell(found.map((item) => {
      item = item.item;
      const obj = { itemId: item.id, itemType: null, triggerType: "list", itemFeedIndex: null, itemScore: null, itemChannelType: null, isInitiallyVisible: false };
      obj[1] = callback(8957).itemToType(item);
      obj[3] = item.index;
      let score = item.score;
      if (score == null) {
        score = null;
      }
      obj[4] = score;
      let channelType = item.channelType;
      if (channelType == null) {
        channelType = null;
      }
      obj[5] = channelType;
      return obj;
    }));
  }, []);
  const items9 = [callback, callback1, callback2];
  const memo = allUnreadItemsHydrated.useMemo(() => {
    let obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 }, onViewableItemsChanged: callback };
    const items = [obj, , ];
    obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 1000 }, onViewableItemsChanged: callback1 };
    items[1] = obj;
    obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 }, onViewableItemsChanged: callback2 };
    items[2] = obj;
    return items;
  }, items9);
  const effect2 = allUnreadItemsHydrated.useEffect(() => {
    _undefined(unreadItems[9]).openICYMITab();
  }, []);
  const obj5 = notificationItem(unreadItems[5]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, readItems, stateFromStores3];
  const obj6 = notificationItem(unreadItems[12]);
  const memo1 = allUnreadItemsHydrated.useMemo(() => {
    const data = [];
    let tmp2 = stateFromStores1;
    if (stateFromStores1) {
      tmp2 = null != data;
    }
    if (tmp2) {
      tmp2 = data.type === notificationItem(unreadItems[11]).ICYMIItemTypes.CUSTOM_STATUS;
    }
    if (tmp2) {
      let obj = { id: null, timestamp: null, data: null, score: null, unread: true };
      obj[0] = data.id;
      const _Date = Date;
      obj[1] = Date.now();
      obj = { kind: "contentInventory", content: null };
      let obj2 = notificationItem(unreadItems[10]);
      obj[1] = obj2.customStatusToContentInventoryEntry(data).activity;
      obj[2] = obj;
      obj[3] = data.score;
      data.push(obj);
    }
    if (stateFromStores1) {
      obj = { id: "loading", timestamp: 0, unread: false, data: null };
      obj[3] = { kind: "loading" };
      data.push(obj);
    } else {
      const item = unreadItems.forEach((data) => {
        if (!obj.isItemNSFW(data)) {
          data.push(data);
        }
      });
      if (allUnreadItemsHydrated) {
        const obj1 = { id: "end", timestamp: 0, unread: false, data: null };
        obj1[3] = { kind: "end" };
        let arr1 = data.push(obj1);
      }
      arr1 = readItems;
      if (readItems.length > 0) {
        const item1 = arr1.forEach((data) => {
          if (!obj.isItemNSFW(data)) {
            data.push(data);
          }
        });
      }
      if (stateFromStores3) {
        obj2 = { id: "bottomLoading", timestamp: 0, unread: false, data: null };
        obj2[3] = { kind: "bottomLoading" };
        data.push(obj2);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  obj = { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: tmp[0], isRefreshing: stateFromStores2, handleOnRefresh: notificationItem(unreadItems[12]).useICYMIReloadHandler(notificationItem.showDot), stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
  return obj;
};