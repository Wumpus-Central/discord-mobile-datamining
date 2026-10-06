// === Module 16393: NotificationCenterForYou ===

// Module 16393 (NotificationCenterForYou)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import parseURLDefault from "parseURL" /* 4873 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7138 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7139 */;
import NotificationCenterItemsActions from "NotificationCenterItemsActions" /* 16396 */;
import NotificationCenterStoreActions from "NotificationCenterStoreActions" /* 16398 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7134 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import UserStore from "UserStore" /* 1377 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7137 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16394 */;
import MainTabsConstants from "MainTabsConstants" /* 10833 */;
import size from "module_2" /* 2 */;

let set2;

let RootNavigatorScreen;
let YouBarNavigatorScreens;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ RootNavigatorScreen, YouBarNavigatorScreens } = MainTabsConstants);
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const jsx = Fragment.jsx;
let items = [, , , , ];
({ YOU: arr[0], SETTINGS: arr[1] } = RootNavigatorScreen);
({ GUILDS: arr[2], ICYMI: arr[3], NOTIFICATIONS: arr[4] } = YouBarNavigatorScreens);
let set = new Set(items);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterForYou.tsx");

export const NotificationCenterForYou = (panelVariant) => {
  let arr;
  let loadMore;
  let loadingMore;
  let obj11;
  let tmp44Result;
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let isFocused;
  let setting;
  let height;
  const merged = Object.assign(panelVariant, Object.assign({ panelVariant: 0 }));
  let tmp3 = setting;
  let obj = isFocused(setting[13]);
  const tmp2 = isFocused;
  isFocused = obj.useIsFocused();
  let obj2 = isFocused(setting[14]);
  const currentNavigationRouteName = obj2.useCurrentNavigationRouteName();
  const NotificationCenterAckedBeforeId = isFocused(setting[15]).NotificationCenterAckedBeforeId;
  setting = NotificationCenterAckedBeforeId.useSetting();
  let items1 = [currentNavigationRouteName, isFocused];
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
  }, items1);
  height = currentNavigationRouteName(setting[16])().height;
  const ChannelListLayoutSetting = isFocused(setting[15]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp9 = setting1 === isFocused(setting[17]).ChannelListLayoutTypes.COMPACT;
  let closure_5 = tmp9;
  let items2 = [tmp9, height];
  const memo1 = height.useMemo(() => {
    let num = 68;
    if (closure_5) {
      num = 48;
    }
    return Math.min(50, Math.max(8, Math.ceil(height / num)));
  }, items2);
  let obj3 = isFocused(setting[18]);
  const notificationCenterItemsLoader = obj3.useNotificationCenterItemsLoader({ isFocused, navigatedAway: memo, withMentions: true, initialPageSize: memo1 });
  const initialized = notificationCenterItemsLoader.initialized;
  const hasMore = notificationCenterItemsLoader.hasMore;
  let items = notificationCenterItemsLoader.items;
  const setReadNotifItemToAcked = notificationCenterItemsLoader.setReadNotifItemToAcked;
  const errored = notificationCenterItemsLoader.errored;
  ({ loadMore, loadingMore } = notificationCenterItemsLoader);
  let obj4 = isFocused(setting[19]);
  let items3 = [errored];
  const stateFromStores = obj4.useStateFromStores(items3, () => errored.hasNewMentions());
  let obj5 = isFocused(setting[19]);
  let items4 = [setReadNotifItemToAcked];
  const stateFromStores1 = obj5.useStateFromStores(items4, () => setReadNotifItemToAcked.localItems, []);
  let obj6 = isFocused(setting[20]);
  const getOrFetchNotificationCenterItemsApplications = obj6.useGetOrFetchNotificationCenterItemsApplications(stateFromStores1);
  let items5 = [items, hasMore];
  const obj7 = isFocused(setting[19]);
  const stateFromStores2 = obj7.useStateFromStores(items5, () => {
    const currentUser = items.getCurrentUser();
    let ackMessageIdResult = null;
    if (null != currentUser) {
      ackMessageIdResult = hasMore.ackMessageId(currentUser.id, stateFromStores2.NOTIFICATION_CENTER);
    }
    return ackMessageIdResult;
  });
  let items6 = [initialized];
  const obj8 = isFocused(setting[19]);
  const stateFromStores3 = obj8.useStateFromStores(items6, () => initialized.getTotalNotificationsMentionCount(true));
  const tmp17 = memo(height.useState(stateFromStores2), 2);
  const first = tmp17[0];
  let closure_16 = tmp19;
  let tmp20 = memo(height.useState(false), 2);
  let closure_17 = tmp22;
  const first1 = tmp20[0];
  const first2 = memo(height.useState(Date.now()), 2)[0];
  const useState = height.useState;
  memo(height.useState(Date.now()), 2);
  set = new Set();
  const tmp26 = memo(useState(set), 2);
  const first3 = tmp26[0];
  let closure_20 = tmp26[1];
  let items7 = [first3];
  let items8 = [first3];
  const callback = height.useCallback((arg0) => first3.has(arg0), items7);
  const callback1 = height.useCallback(function(forceUnacked) {
    if (!forceUnacked.forceUnacked) {
      if (!first3.has(forceUnacked.id)) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(first3);
        set.add(forceUnacked.id);
        closure_20(set);
      }
    }
  }, items8);
  const useRef = height.useRef;
  const set1 = new Set();
  let closure_21 = useRef(set1);
  const useRef2 = height.useRef;
  set2 = new Set();
  const ref = useRef2(set2);
  const callback2 = height.useCallback((id) => {
    const current = ref.current;
    current.add(id.id);
  }, []);
  const callback3 = height.useCallback((id) => {
    const current = ref.current;
    return current.has(id.id);
  }, []);
  const tmp34 = currentNavigationRouteName(setting[21])();
  const setAdded = tmp34.setAdded;
  const friendSuggestions = tmp34.friendSuggestions;
  let items9 = [setAdded];
  let items10 = [setAdded];
  const callback4 = height.useCallback((arg0) => {
    let closure_0 = arg0;
    setAdded((arg0) => {
      items = [];
      items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
      return items;
    });
  }, items9);
  const callback5 = height.useCallback((arg0) => {
    let closure_0 = arg0;
    setAdded((arr) => {
      let user;
      return arr.filter((user) => user.user.id !== user.user.id);
    });
  }, items10);
  const obj9 = isFocused(setting[22]);
  const shouldAgeVerifyForAgeGate = obj9.useShouldAgeVerifyForAgeGate();
  const items11 = [items, hasMore, stateFromStores1, friendSuggestions, initialized, stateFromStores, errored, setting, first, setReadNotifItemToAcked, callback3, stateFromStores3, shouldAgeVerifyForAgeGate];
  const memo2 = height.useMemo(() => {
    let arr7;
    let arr8;
    let ref2;
    const f153618 = (id, id2) => {
      const obj = arr8(items2[23]);
      return -1 * obj.compare(id.id, id2.id);
    };
    let id;
    if (items.length > 0) {
      id = arr[arr.length - 1].id;
    }
    if (hasMore) {
      let found;
      if (null != id) {
        found = stateFromStores1.filter((forceUnacked) => {
          forceUnacked = forceUnacked.forceUnacked;
          if (!forceUnacked) {
            const obj = SnowflakeUtilsDefault;
            forceUnacked = obj.compare(forceUnacked.id, id) > 0;
          }
          return forceUnacked;
        });
      }
      items = [];
      const tmp8 = arr;
      HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, items, 0));
      let found1 = items;
      if (shouldAgeVerifyForAgeGate) {
        found1 = items.filter((kind) => {
          let tmp = "notification-center-item" !== kind.kind;
          if (!tmp) {
            const obj = id(items2[22]);
            tmp = !obj.shouldShowAgeGateForChannelId(kind.message_channel_id);
          }
          return tmp;
        });
      }
      const items1 = [];
      arr8 = items1;
      const items2 = [];
      const items3 = [];
      const item = found1.forEach((kind) => {
        if ("notification-center-item" === kind.kind) {
          let flag;
          if (null != kind.local_id) {
            flag = !kind.acked && !NotificationCenterStore.isLocalItemAcked(kind);
            const tmp21 = !kind.acked && !NotificationCenterStore.isLocalItemAcked(kind);
          } else {
            const obj4 = NotificationCenterUtils;
            if (obj4.isMentionItem(kind)) {
              if (!kind.acked) {
                if (null != kind.message_channel_id) {
                  const current = ref.current;
                  if (!current.has(kind.id)) {
                    const ackMessageIdResult = ReadStateStore.ackMessageId(kind.message_channel_id);
                    const obj = SnowflakeUtilsDefault;
                    if (obj.compare(kind.message_id, ackMessageIdResult) <= 0) {
                      setReadNotifItemToAcked(kind);
                      flag = false;
                    }
                  }
                }
                if (null != first) {
                  const obj2 = SnowflakeUtilsDefault;
                  flag = obj2.compare(kind.id, tmp8) > 0;
                }
              }
            }
            const obj3 = NotificationCenterUtils;
            const isRemoteAckedResult = obj3.isRemoteAcked(kind, setting);
            if ("go_live_push" === kind.type) {
              let tmp15;
              if (null != kind.deeplink) {
                tmp15 = parseURLDefault(kind.deeplink).payload.type === ConstantsIOS.LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
                parseURLDefault(kind.deeplink).payload.type === ConstantsIOS.LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
              }
              flag = tmp15;
            }
            tmp15 = !isRemoteAckedResult;
          }
          if (!flag) {
            setReadNotifItemToAcked(kind);
          }
          const current2 = ref2.current;
          if (current2.has(kind.id)) {
            arr8.push(kind);
            kind.acked = false;
          } else if (kind.type !== NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
            if (flag) {
              items2.push(kind);
            } else {
              items3.push(kind);
            }
          } else {
            arr8.push(kind);
          }
          const current3 = ref.current;
          current3.add(kind.id);
        }
      });
      const sorted = items1.sort(f153618);
      const sorted1 = items2.sort(f153618);
      const sorted2 = items3.sort(f153618);
      let obj = currentNavigationRouteName(setting[27]);
      const tmp20 = memo(obj.partition(items1, (type) => {
        const tmp = type.type === id(items2[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && type.acked;
        return tmp;
      }), 2);
      [arr7, arr8] = tmp20;
      let arr9 = items1;
      if (arr7.length > 3) {
        let obj2 = { kind: "notification-center-item", type: isFocused(setting[12]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED, id: arr7[0].id, local_id: "friend_requests_grouped", acked: false, other_user: arr7[0].other_user, other_users: arr7.map((other_user) => other_user.other_user), forceUnacked: true };
        const push = arr8.push;
        push(obj2);
        arr9 = arr8;
      }
      const item1 = arr9.forEach((item) => {
        const tmp = !callback3(item);
        item.enableBadge = tmp;
        return tmp;
      });
      const items4 = [];
      if (friendSuggestions.length > 0) {
        let obj3 = { kind: "suggested-friends-header", id: "suggested-friends-header", showDivider: arr9.length > 0 };
        items4.push(obj3);
        let num5 = 2;
        if (friendSuggestions.length <= 3) {
          num5 = friendSuggestions.length;
        }
        const _Math = Math;
        const substr = friendSuggestions.slice(0, Math.min(friendSuggestions.length, num5));
        const item2 = substr.forEach((id) => {
          const obj = { kind: "suggested-friends-row", id: id.user.id, suggestedFriend: id };
          items4.push(obj);
        });
        if (friendSuggestions.length > 3) {
          let obj4 = { kind: "suggested-friends-show-all-row", id: "suggested-friends-show-all-row", suggestedFriends: friendSuggestions };
          items4.push(obj4);
        }
      }
      const items5 = [];
      HermesBuiltin.arraySpread(items5, items3, HermesBuiltin.arraySpread(items5, items2, 0));
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
              let obj5 = { kind: "mentions-placeholder", id: "mp-" + num10 };
              let _HermesInternal = HermesInternal;
              let unshift = items5.unshift;
              let arr5 = unshift(obj5);
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
      const obj6 = { kind: "recent-activity-section-header", id: "rash" };
      const items6 = [];
      if (arr9.length > 0) {
        const spliceResult = items5.splice(0, 3);
        const push4 = items6.push;
        const items7 = [];
        HermesBuiltin.arraySpread(items7, items4, HermesBuiltin.arraySpread(items7, arr9, 0));
        HermesBuiltin.apply(push4, items7, items6);
        const tmp71 = spliceResult.length > 0 || items5.length > 0;
        if (tmp71) {
          items6.push(obj6);
        }
        const push5 = items6.push;
        const items8 = [];
        HermesBuiltin.arraySpread(items8, items5, HermesBuiltin.arraySpread(items8, spliceResult, 0));
        HermesBuiltin.apply(push5, items8, items6);
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
        let flag = false;
        const spliceResult1 = items5.splice(0, num11);
        const tmp42 = 0 === items4.length && items5.length > 0;
        if (tmp42) {
          items6.push(obj6);
          flag = true;
        }
        const push2 = items6.push;
        const items9 = [];
        HermesBuiltin.arraySpread(items9, items4, HermesBuiltin.arraySpread(items9, spliceResult1, 0));
        HermesBuiltin.apply(push2, items9, items6);
        const tmp53 = !flag && items5.length > 0;
        if (tmp53) {
          items6.push(obj6);
        }
        const push3 = items6.push;
        const items10 = [];
        HermesBuiltin.arraySpread(items10, items5, 0);
        HermesBuiltin.apply(push3, items10, items6);
      }
      return items6;
    }
    found = stateFromStores1;
  }, items11);
  const items12 = [initialized, first2];
  const layoutEffect = height.useLayoutEffect(() => {
    if (initialized) {
      const _Date = Date;
      const obj = { version: "v2", load_start_timestamp: first2, tti_millis: Date.now() - first2 };
      const track = AnalyticsUtilsDefault.track;
      const NOTIFICATION_CENTER_LOADED = AnalyticEvents.NOTIFICATION_CENTER_LOADED;
      AnalyticsUtilsDefault;
      track(NOTIFICATION_CENTER_LOADED, obj);
    }
  }, items12);
  const items13 = [memo, stateFromStores2, first, memo2, setting, tmp17[1], callback3];
  const effect = height.useEffect(() => {
    let localItemAcked;
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
        closure_16(tmp6);
        const found1 = found.filter((local_id) => {
          const tmp = null != local_id.local_id && !localItemAcked.isLocalItemAcked(local_id);
          return tmp;
        });
        const mapped = found1.map((local_id) => local_id.local_id);
        let obj = NotificationCenterItemsActions;
        const result = obj.markNotificationCenterLocalItemsAcked(mapped);
        const obj2 = NotificationCenterItemsActions;
        const result1 = obj2.bulkMarkNotificationCenterItemsAcked(found.filter((item) => {
          const obj = isFocused(setting[24]);
          return !obj.isRemoteAcked(item, closure_1_2);
        }));
        const obj3 = NotificationCenterStoreActions;
        const result2 = obj3.clearNotificationGuildMentions();
      }
    }
  }, items13);
  const items14 = [isFocused, tmp20[1]];
  const effect1 = height.useEffect(() => {
    if (isFocused) {
      closure_17(false);
    }
    let obj = NotificationCenterItemsActions;
    const result = obj.setNotificationCenterTabFocused(isFocused);
    return () => {
      const obj = isFocused(setting[29]);
      return obj.setNotificationCenterTabFocused(false);
    };
  }, items14);
  const items15 = [memo, tmp20[1]];
  const effect2 = height.useEffect(() => {
    if (memo) {
      closure_17(true);
    }
  }, items15);
  const obj10 = { type: isFocused(setting[32]).ImpressionTypes.VIEW, name: isFocused(setting[32]).ImpressionNames.NOTIFICATION_CENTER_LANDING, properties: obj11 };
  let tmp42 = currentNavigationRouteName(setting[31]);
  const items16 = [];
  obj11 = { empty: 0 === memo2.length };
  const obj12 = { disableTrack: !initialized };
  items16[0] = initialized;
  tmp42(obj10, obj12, items16);
  if (initialized) {
    const obj13 = { items: memo2, loadingMore, loadMore, nestedInLaunchPad: merged.nestedInLaunchPad, shouldScrollToTop: first1, isSoftAcked: callback, onSoftAckItem: callback1, forceHoistItem: callback2, isForceHoisted: callback3, suggestedFriendAdded: callback4, onAddSuggestionAnimationFinish: callback5, panelVariant: flag };
    tmp44Result = tmp44(tmp2(tmp3[34]).ForYouItems, obj13);
  } else {
    const _Array = Array;
    const _Array2 = Array;
    let num = 10;
    const obj14 = { children: arr.map((item, index) => stateFromStores3(isFocused(setting[33]).ForYouMentionPlaceholder, {}, index)) };
    arr = Array.from(Array(10));
    tmp44Result = tmp44(closure_5, obj14);
  }
  return tmp44Result;
};