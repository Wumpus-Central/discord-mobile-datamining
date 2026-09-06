// === Module 16411: NotificationCenterForYou ===

// Module 16411 (NotificationCenterForYou)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import parseURLDefault from "parseURL" /* 4540 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7640 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7641 */;
import NotificationCenterItemsActions from "NotificationCenterItemsActions" /* 16414 */;
import NotificationCenterStoreActions from "NotificationCenterStoreActions" /* 16416 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserStore from "UserStore" /* 1371 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7639 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16412 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const MainTabsConstants = fn(11084);
({ RootNavigatorScreen, YouBarNavigatorScreens } = MainTabsConstants);
const ReadStateTypes = fn(4742).ReadStateTypes;
const jsx = fn(21).jsx;
let items = [, , , , ];
({ YOU: arr[0], SETTINGS: arr[1] } = RootNavigatorScreen);
({ GUILDS: arr[2], ICYMI: arr[3], NOTIFICATIONS: arr[4] } = YouBarNavigatorScreens);
let set = new Set(items);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterForYou.tsx");

export const NotificationCenterForYou = (panelVariant) => {
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let isFocused;
  let setting;
  let height;
  const merged = Object.assign(panelVariant, Object.assign({ panelVariant: 0 }));
  let obj = isFocused(setting[13]);
  isFocused = obj.useIsFocused();
  let obj1 = isFocused(setting[14]);
  const currentNavigationRouteName = obj1.useCurrentNavigationRouteName();
  const NotificationCenterAckedBeforeId = isFocused(setting[15]).NotificationCenterAckedBeforeId;
  setting = NotificationCenterAckedBeforeId.useSetting();
  let items = [currentNavigationRouteName, isFocused];
  const memo = height.useMemo(() => {
    let tmp3 = !isFocused;
    const hasItem = set.has(currentNavigationRouteName);
    if (!isFocused) {
      tmp3 = currentNavigationRouteName !== YouBarNavigatorScreens.NOTIFICATIONS;
    }
    if (tmp3) {
      tmp3 = hasItem;
    }
    return tmp3;
  }, items);
  height = currentNavigationRouteName(setting[16])().height;
  const ChannelListLayoutSetting = isFocused(setting[15]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp9 = setting1 === isFocused(setting[17]).ChannelListLayoutTypes.COMPACT;
  closure_5 = tmp9;
  let items1 = [tmp9, height];
  const memo1 = height.useMemo(() => {
    let num = 68;
    if (closure_5) {
      num = 48;
    }
    return Math.min(50, Math.max(8, Math.ceil(height / num)));
  }, items1);
  let obj2 = isFocused(setting[18]);
  const notificationCenterItemsLoader = obj2.useNotificationCenterItemsLoader({ isFocused, navigatedAway: memo, withMentions: true, initialPageSize: memo1 });
  const initialized = notificationCenterItemsLoader.initialized;
  const hasMore = notificationCenterItemsLoader.hasMore;
  items = notificationCenterItemsLoader.items;
  const setReadNotifItemToAcked = notificationCenterItemsLoader.setReadNotifItemToAcked;
  const errored = notificationCenterItemsLoader.errored;
  ({ loadMore, loadingMore } = notificationCenterItemsLoader);
  let obj3 = isFocused(setting[19]);
  let items2 = [errored];
  const stateFromStores = obj3.useStateFromStores(items2, () => errored.hasNewMentions());
  let items3 = [setReadNotifItemToAcked];
  const stateFromStores1 = isFocused(setting[19]).useStateFromStores(items3, () => setReadNotifItemToAcked.localItems, []);
  const obj5 = isFocused(setting[19]);
  const tmp2 = isFocused;
  let tmp3 = setting;
  const getOrFetchNotificationCenterItemsApplications = isFocused(setting[20]).useGetOrFetchNotificationCenterItemsApplications(stateFromStores1);
  const obj6 = isFocused(setting[20]);
  let items4 = [items, hasMore];
  const stateFromStores2 = isFocused(setting[19]).useStateFromStores(items4, () => {
    const currentUser = items.getCurrentUser();
    let ackMessageIdResult = null;
    if (null != currentUser) {
      ackMessageIdResult = hasMore.ackMessageId(currentUser.id, stateFromStores2.NOTIFICATION_CENTER);
    }
    return ackMessageIdResult;
  });
  const obj7 = isFocused(setting[19]);
  let items5 = [initialized];
  const stateFromStores3 = isFocused(setting[19]).useStateFromStores(items5, () => initialized.getTotalNotificationsMentionCount(true));
  const tmp17 = memo(height.useState(stateFromStores2), 2);
  const first = tmp17[0];
  closure_16 = tmp19;
  const tmp20 = memo(height.useState(false), 2);
  closure_17 = tmp21;
  const obj8 = isFocused(setting[19]);
  const first1 = memo(height.useState(Date.now()), 2)[0];
  let tmp22 = memo(height.useState(Date.now()), 2);
  const tmp25 = memo(height.useState(new Set()), 2);
  const first2 = tmp25[0];
  closure_20 = tmp25[1];
  let items6 = [first2];
  let items7 = [first2];
  const callback = height.useCallback((arg0) => first2.has(arg0), items6);
  const callback1 = height.useCallback((forceUnacked) => {
    if (!forceUnacked.forceUnacked) {
      if (!first2.has(forceUnacked.id)) {
        const _Set = Set;
        set = new Set(tmp);
        set.add(forceUnacked.id);
        closure_20(set);
      }
    }
  }, items7);
  set = new Set();
  closure_21 = height.useRef(new Set());
  const set1 = new Set();
  height.useRef(new Set());
  const callback2 = height.useCallback((id) => {
    const current = ref.current;
    current.add(id.id);
  }, []);
  const callback3 = height.useCallback((id) => {
    const current = ref.current;
    return current.has(id.id);
  }, []);
  const tmp33 = currentNavigationRouteName(setting[21])();
  const setAdded = tmp33.setAdded;
  const friendSuggestions = tmp33.friendSuggestions;
  let items8 = [setAdded];
  let items9 = [setAdded];
  const callback4 = height.useCallback((arg0) => {
    closure_0 = arg0;
    setAdded((arg0) => {
      items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }, items8);
  const callback5 = height.useCallback((arg0) => {
    closure_0 = arg0;
    setAdded((arr) => arr.filter((user) => user.user.id !== user.user.id));
  }, items9);
  const set2 = new Set();
  const shouldAgeVerifyForAgeGate = isFocused(setting[22]).useShouldAgeVerifyForAgeGate();
  let items10 = [items, hasMore, stateFromStores1, friendSuggestions, initialized, stateFromStores, errored, setting, first, setReadNotifItemToAcked, callback3, stateFromStores3, shouldAgeVerifyForAgeGate];
  const memo2 = height.useMemo(() => {
    let arr = items;
    let id;
    if (items.length > 0) {
      id = arr[arr.length - 1].id;
    }
    if (hasMore) {
      if (null != id) {
        let found = stateFromStores1.filter((forceUnacked) => {
          forceUnacked = forceUnacked.forceUnacked;
          if (!forceUnacked) {
            forceUnacked = SnowflakeUtilsDefault.compare(forceUnacked.id, id) > 0;
          }
          return forceUnacked;
        });
      }
      items = [];
      HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(arr, 0));
      let found1 = items;
      if (shouldAgeVerifyForAgeGate) {
        found1 = items.filter((kind) => {
          let tmp = "notification-center-item" !== kind.kind;
          if (!tmp) {
            tmp = !id(items2[22]).shouldShowAgeGateForChannelId(kind.message_channel_id);
            const obj = id(items2[22]);
          }
          return tmp;
        });
      }
      const items1 = [];
      arr7 = items1;
      const items2 = [];
      const items3 = [];
      const item = found1.forEach((kind) => {
        let addResult = kind;
        if ("notification-center-item" === kind.kind) {
          if (null != addResult.local_id) {
            const acked = addResult.acked;
            let tmp22 = !acked;
            if (!acked) {
              tmp22 = !NotificationCenterStore.isLocalItemAcked(addResult);
            }
            let flag = tmp22;
          } else {
            if (obj4.isMentionItem(addResult)) {
              if (!addResult.acked) {
                if (null != addResult.message_channel_id) {
                  const current = ref.current;
                  if (!current.has(addResult.id)) {
                    const ackMessageIdResult = ReadStateStore.ackMessageId(addResult.message_channel_id);
                    if (obj.compare(addResult.message_id, ackMessageIdResult) <= 0) {
                      setReadNotifItemToAcked(addResult);
                      flag = false;
                    }
                    obj = SnowflakeUtilsDefault;
                  }
                }
                if (null != first) {
                  flag = SnowflakeUtilsDefault.compare(addResult.id, tmp9) > 0;
                }
              }
            }
            obj4 = NotificationCenterUtils;
            const isRemoteAckedResult = NotificationCenterUtils.isRemoteAcked(addResult, setting);
            if ("go_live_push" === addResult.type) {
              if (null != addResult.deeplink) {
                let tmp16 = parseURLDefault(addResult.deeplink).payload.type === ConstantsIOS.LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
                const tmp21 = parseURLDefault(addResult.deeplink).payload.type === ConstantsIOS.LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
              }
              flag = tmp16;
            }
            tmp16 = !isRemoteAckedResult;
          }
          if (!flag) {
            setReadNotifItemToAcked(addResult);
          }
          const current2 = ref2.current;
          if (current2.has(addResult.id)) {
            arr7.push(addResult);
            addResult.acked = false;
            const current3 = ref.current;
            addResult = current3.add(addResult.id);
          } else if (addResult.type !== NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
            if (!flag) {
              items3.push(addResult);
            }
          } else {
            arr7.push(addResult);
          }
          items2.push(addResult);
        }
      });
      const sorted = items1.sort((id, id2) => -1 * arr7(items2[23]).compare(id.id, id2.id));
      const sorted1 = items2.sort((id, id2) => -1 * arr7(items2[23]).compare(id.id, id2.id));
      const sorted2 = items3.sort((id, id2) => -1 * arr7(items2[23]).compare(id.id, id2.id));
      let obj = currentNavigationRouteName(setting[27]);
      [arr7, arr8] = memo(obj.partition(items1, (type) => type.type === id(items2[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && type.acked), 2);
      let arr9 = items1;
      if (arr6.length > 3) {
        obj = { kind: "notification-center-item", type: isFocused(setting[12]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED, id: arr6[0].id, local_id: "friend_requests_grouped", acked: false, other_user: arr6[0].other_user, other_users: arr6.map((other_user) => other_user.other_user), forceUnacked: true };
        arr = arr7.push(obj);
        arr9 = arr7;
      }
      const item1 = arr9.forEach((item) => {
        const tmp = !callback3(item);
        item.enableBadge = tmp;
        return tmp;
      });
      const items4 = [];
      if (friendSuggestions.length > 0) {
        obj = { kind: "suggested-friends-header", id: "suggested-friends-header", showDivider: arr9.length > 0 };
        arr = items4.push(obj);
        let num5 = 2;
        if (arr11.length <= 3) {
          num5 = arr11.length;
        }
        const _Math = Math;
        const substr = arr11.slice(0, Math.min(arr11.length, num5));
        const item2 = substr.forEach((id) => {
          items4.push({ kind: "suggested-friends-row", id: id.user.id, suggestedFriend: id });
        });
        if (arr11.length > 3) {
          const obj1 = { kind: "suggested-friends-show-all-row", id: "suggested-friends-show-all-row", suggestedFriends: arr11 };
          items4.push(obj1);
        }
      }
      const items5 = [];
      HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items2, 0));
      let num7 = 0;
      if (initialized) {
        num7 = 0;
        if (stateFromStores) {
          const _Math2 = Math;
          const _Math3 = Math;
          const bound = Math.min(Math.max(stateFromStores3, 1), 6);
          let num10 = 0;
          num7 = bound;
          if (0 < bound) {
            do {
              let obj2 = { kind: "mentions-placeholder", id: null };
              let _HermesInternal = HermesInternal;
              obj2.id = "mp-" + num10;
              let arr2 = items5.unshift(obj2);
              num10 = num10 + 1;
              num7 = bound;
            } while (num10 < bound);
          }
        }
      }
      if (errored) {
        items5.push({ kind: "load-more", id: "load-more" });
      }
      if (arr9.length > 0) {
        arr9.unshift({ kind: "hoisted-items-header", id: "hoisted-items-header" });
      }
      let obj3 = { kind: "recent-activity-section-header", id: "rash" };
      const items6 = [];
      if (arr9.length > 0) {
        const spliceResult = items5.splice(0, 3);
        const push3 = items6.push;
        const items7 = [];
        HermesBuiltin.arraySpread(items4, HermesBuiltin.arraySpread(arr9, 0));
        HermesBuiltin.apply(items7, items6);
        if (tmp69) {
          items6.push(obj3);
        }
        const push4 = items6.push;
        const items8 = [];
        HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(spliceResult, 0));
        HermesBuiltin.apply(items8, items6);
        tmp69 = spliceResult.length > 0 || items5.length > 0;
      } else {
        let num11 = 3;
        if (items2.length > 0) {
          num11 = 3;
          if (items5.length > 0) {
            num11 = 3;
            if ("mentions-placeholder" === items5[0].kind) {
              num11 = num7 + items2.length - 1;
            }
          }
        }
        const spliceResult1 = items5.splice(0, num11);
        let flag = false;
        if (tmp40) {
          arr6 = items6.push(obj3);
          flag = true;
        }
        const push = items6.push;
        const items9 = [];
        HermesBuiltin.arraySpread(items4, HermesBuiltin.arraySpread(spliceResult1, 0));
        HermesBuiltin.apply(items9, items6);
        let tmp51 = !flag;
        if (!flag) {
          tmp51 = items5.length > 0;
        }
        if (tmp51) {
          arr7 = items6.push(obj3);
        }
        const push2 = items6.push;
        const items10 = [];
        HermesBuiltin.arraySpread(items5, 0);
        HermesBuiltin.apply(items10, items6);
        tmp40 = 0 === items4.length && items5.length > 0;
      }
      return items6;
    }
    found = stateFromStores1;
  }, items10);
  const items11 = [initialized, first1];
  const layoutEffect = height.useLayoutEffect(() => {
    if (initialized) {
      const obj = { version: "v2", load_start_timestamp: first1, tti_millis: null };
      const _Date = Date;
      obj.tti_millis = Date.now() - first1;
      obj.track(AnalyticEvents.NOTIFICATION_CENTER_LOADED, obj);
    }
  }, items11);
  const items12 = [memo, stateFromStores2, first, memo2, setting, tmp17[1], callback3];
  const effect = height.useEffect(() => {
    if (memo) {
      const found = memo2.filter((kind) => "notification-center-item" === kind.kind);
      const current = ref.current;
      current.clear();
      const item = found.forEach((type) => {
        if (type.type !== isFocused(setting[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
          type.enableBadge = false;
        }
      });
      if (stateFromStores2 !== first) {
        closure_16(tmp5);
        const found1 = found.filter((local_id) => {
          let tmp = null != local_id.local_id;
          if (tmp) {
            tmp = !localItemAcked.isLocalItemAcked(local_id);
          }
          return tmp;
        });
        const mapped = found1.map((local_id) => local_id.local_id);
        const result = NotificationCenterItemsActions.markNotificationCenterLocalItemsAcked(mapped);
        const result1 = NotificationCenterItemsActions.bulkMarkNotificationCenterItemsAcked(found.filter((item) => !isFocused(setting[24]).isRemoteAcked(item, closure_1_2)));
        const result2 = NotificationCenterStoreActions.clearNotificationGuildMentions();
      }
    }
  }, items12);
  const items13 = [isFocused, tmp20[1]];
  const effect1 = height.useEffect(() => {
    if (isFocused) {
      closure_17(false);
    }
    const result = NotificationCenterItemsActions.setNotificationCenterTabFocused(isFocused);
    return () => isFocused(setting[29]).setNotificationCenterTabFocused(false);
  }, items13);
  const items14 = [memo, tmp20[1]];
  const effect2 = height.useEffect(() => {
    if (memo) {
      closure_17(true);
    }
  }, items14);
  obj = { type: null, name: null, properties: null };
  const obj9 = isFocused(setting[22]);
  obj.type = isFocused(setting[32]).ImpressionTypes.VIEW;
  obj.name = isFocused(setting[32]).ImpressionNames.NOTIFICATION_CENTER_LANDING;
  obj = { empty: 0 === memo2.length };
  obj.properties = obj;
  obj1 = { disableTrack: !initialized };
  const items15 = [initialized];
  currentNavigationRouteName(setting[31])(obj, obj1, items15);
  if (initialized) {
    obj2 = { items: memo2, loadingMore, loadMore, nestedInLaunchPad: merged.nestedInLaunchPad, shouldScrollToTop: tmp20[0], isSoftAcked: callback, onSoftAckItem: callback1, forceHoistItem: callback2, isForceHoisted: callback3, suggestedFriendAdded: callback4, onAddSuggestionAnimationFinish: callback5, panelVariant: flag };
    let tmp43Result = tmp43(tmp2(tmp3[34]).ForYouItems, obj2);
  } else {
    obj3 = { children: null };
    const _Array = Array;
    const _Array2 = Array;
    obj3.children = Array.from(Array(10)).map((item, index) => stateFromStores3(isFocused(setting[33]).ForYouMentionPlaceholder, {}, index));
    tmp43Result = tmp43(closure_5, obj3);
    let arr = Array.from(Array(10));
  }
  return tmp43Result;
};