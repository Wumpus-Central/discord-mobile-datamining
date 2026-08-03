// === Module 15370: YouBarNavigatorScreens ===

// Module 15370 (YouBarNavigatorScreens)
import encodeProperties from "encodeProperties";
import initialize from "initialize";
import { View } from "ChannelListLayoutTypes";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import mergeGuildAvatar from "mergeGuildAvatar";
import _validate from "_validate";
import handleLoadFinished from "handleLoadFinished";
import { AnalyticEvents } from "ME";
import MODE_CHANGE_PHYSICS from "MODE_CHANGE_PHYSICS";
import { ReadStateTypes } from "ReadStateTypes";
import { jsx } from "useSuggestedFriends";
import set from "get ActivityIndicator";

let RootNavigatorScreen;
let YouBarNavigatorScreens;
const require = arg1;
({ RootNavigatorScreen, YouBarNavigatorScreens } = MODE_CHANGE_PHYSICS);
let items = [, , , , ];
({ YOU: arr[0], SETTINGS: arr[1] } = RootNavigatorScreen);
({ GUILDS: arr[2], ICYMI: arr[3], NOTIFICATIONS: arr[4] } = YouBarNavigatorScreens);
let set = new Set(items);
let result = set.fileFinishedImporting("modules/notification_center/native/NotificationCenterForYou.tsx");

export const NotificationCenterForYou = (panelVariant) => {
  let loadMore;
  let loadingMore;
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let isFocused;
  let currentNavigationRouteName;
  let setting;
  let memo;
  let height;
  let c5;
  let initialized;
  let hasMore;
  let items;
  let setReadNotifItemToAcked;
  let errored;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStores3;
  let first;
  let c16;
  let c17;
  let first1;
  let first2;
  let closure_20;
  let closure_21;
  let closure_22;
  let callback3;
  let setAdded;
  let friendSuggestions;
  let shouldAgeVerifyForAgeGate;
  let memo2;
  const merged = Object.assign(panelVariant, Object.create(null));
  let obj = isFocused(setting[13]);
  isFocused = obj.useIsFocused();
  let obj1 = isFocused(setting[14]);
  currentNavigationRouteName = obj1.useCurrentNavigationRouteName();
  const NotificationCenterAckedBeforeId = isFocused(setting[15]).NotificationCenterAckedBeforeId;
  setting = NotificationCenterAckedBeforeId.useSetting();
  items = [currentNavigationRouteName, isFocused];
  memo = height.useMemo(() => {
    let tmp3 = !isFocused;
    const hasItem = first.has(currentNavigationRouteName);
    if (!isFocused) {
      tmp3 = currentNavigationRouteName !== stateFromStores1.NOTIFICATIONS;
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
  c5 = tmp9;
  let items1 = [tmp9, height];
  const memo1 = height.useMemo(() => {
    let num = 68;
    if (c5) {
      num = 48;
    }
    return Math.min(50, Math.max(8, Math.ceil(height / num)));
  }, items1);
  let obj2 = isFocused(setting[18]);
  const notificationCenterItemsLoader = obj2.useNotificationCenterItemsLoader({ isFocused, navigatedAway: memo, withMentions: true, initialPageSize: memo1 });
  initialized = notificationCenterItemsLoader.initialized;
  hasMore = notificationCenterItemsLoader.hasMore;
  items = notificationCenterItemsLoader.items;
  setReadNotifItemToAcked = notificationCenterItemsLoader.setReadNotifItemToAcked;
  errored = notificationCenterItemsLoader.errored;
  ({ loadMore, loadingMore } = notificationCenterItemsLoader);
  let obj3 = isFocused(setting[19]);
  let items2 = [errored];
  stateFromStores = obj3.useStateFromStores(items2, () => errored.hasNewMentions());
  let items3 = [setReadNotifItemToAcked];
  stateFromStores1 = isFocused(setting[19]).useStateFromStores(items3, () => setReadNotifItemToAcked.localItems, []);
  const obj5 = isFocused(setting[19]);
  const tmp2 = isFocused;
  let tmp3 = setting;
  const getOrFetchNotificationCenterItemsApplications = isFocused(setting[20]).useGetOrFetchNotificationCenterItemsApplications(stateFromStores1);
  const obj6 = isFocused(setting[20]);
  let items4 = [items, hasMore];
  stateFromStores2 = isFocused(setting[19]).useStateFromStores(items4, () => {
    const currentUser = items.getCurrentUser();
    let ackMessageIdResult = null;
    if (null != currentUser) {
      ackMessageIdResult = hasMore.ackMessageId(currentUser.id, stateFromStores2.NOTIFICATION_CENTER);
    }
    return ackMessageIdResult;
  });
  const obj7 = isFocused(setting[19]);
  let items5 = [initialized];
  stateFromStores3 = isFocused(setting[19]).useStateFromStores(items5, () => initialized.getTotalNotificationsMentionCount(true));
  const tmp17 = memo(height.useState(stateFromStores2), 2);
  first = tmp17[0];
  c16 = tmp19;
  const tmp20 = memo(height.useState(false), 2);
  c17 = tmp21;
  const obj8 = isFocused(setting[19]);
  first1 = memo(height.useState(Date.now()), 2)[0];
  let tmp22 = memo(height.useState(Date.now()), 2);
  const tmp25 = memo(height.useState(new Set()), 2);
  first2 = tmp25[0];
  closure_20 = tmp25[1];
  let items6 = [first2];
  let items7 = [first2];
  const callback = height.useCallback((arg0) => first2.has(arg0), items6);
  const callback1 = height.useCallback((forceUnacked) => {
    if (!forceUnacked.forceUnacked) {
      if (!first2.has(forceUnacked.id)) {
        const _Set = Set;
        const set = new Set(tmp);
        set.add(forceUnacked.id);
        callback(set);
      }
    }
  }, items7);
  let set = new Set();
  closure_21 = height.useRef(new Set());
  const set1 = new Set();
  closure_22 = height.useRef(new Set());
  const callback2 = height.useCallback((id) => {
    const current = ref.current;
    current.add(id.id);
  }, []);
  callback3 = height.useCallback((id) => {
    const current = ref.current;
    return current.has(id.id);
  }, []);
  const tmp33 = currentNavigationRouteName(setting[21])();
  setAdded = tmp33.setAdded;
  friendSuggestions = tmp33.friendSuggestions;
  let items8 = [setAdded];
  let items9 = [setAdded];
  const callback4 = height.useCallback((arg0) => {
    let closure_0 = arg0;
    setAdded((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }, items8);
  const callback5 = height.useCallback((arg0) => {
    let closure_0 = arg0;
    setAdded((arr) => arr.filter((user) => user.user.id !== user.user.id));
  }, items9);
  const set2 = new Set();
  shouldAgeVerifyForAgeGate = isFocused(setting[22]).useShouldAgeVerifyForAgeGate();
  let items10 = [items, hasMore, stateFromStores1, friendSuggestions, initialized, stateFromStores, errored, setting, first, setReadNotifItemToAcked, callback3, stateFromStores3, shouldAgeVerifyForAgeGate];
  memo2 = height.useMemo(() => {
    let arr7;
    let arr8;
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
            forceUnacked = currentNavigationRouteName(setting[23]).compare(forceUnacked.id, id) > 0;
            const obj = currentNavigationRouteName(setting[23]);
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
              tmp22 = !errored.isLocalItemAcked(addResult);
            }
            let flag = tmp22;
          } else {
            if (obj4.isMentionItem(addResult)) {
              if (!addResult.acked) {
                if (null != addResult.message_channel_id) {
                  const current = outer1_21.current;
                  if (!current.has(addResult.id)) {
                    const ackMessageIdResult = hasMore.ackMessageId(addResult.message_channel_id);
                    if (obj.compare(addResult.message_id, ackMessageIdResult) <= 0) {
                      outer1_9(addResult);
                      flag = false;
                    }
                    obj = currentNavigationRouteName(setting[23]);
                  }
                }
                if (null != outer1_15) {
                  flag = currentNavigationRouteName(setting[23]).compare(addResult.id, tmp9) > 0;
                  const obj2 = currentNavigationRouteName(setting[23]);
                }
              }
            }
            obj4 = isFocused(setting[24]);
            const isRemoteAckedResult = isFocused(setting[24]).isRemoteAcked(addResult, items2);
            if ("go_live_push" === addResult.type) {
              if (null != addResult.deeplink) {
                let tmp16 = currentNavigationRouteName(setting[25])(addResult.deeplink).payload.type === isFocused(setting[26]).LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
                const tmp21 = currentNavigationRouteName(setting[25])(addResult.deeplink).payload.type === isFocused(setting[26]).LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
              }
              flag = tmp16;
            }
            tmp16 = !isRemoteAckedResult;
            const obj3 = isFocused(setting[24]);
          }
          if (!flag) {
            outer1_9(addResult);
          }
          const current2 = outer1_22.current;
          if (current2.has(addResult.id)) {
            arr7.push(addResult);
            addResult.acked = false;
            const current3 = outer1_21.current;
            addResult = current3.add(addResult.id);
          } else if (addResult.type !== isFocused(setting[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
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
        obj = { kind: "notification-center-item", type: null, id: null, local_id: "friend_requests_grouped", acked: false, other_user: null, other_users: null, forceUnacked: true };
        obj[1] = isFocused(setting[12]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED;
        obj[2] = arr6[0].id;
        obj[5] = arr6[0].other_user;
        obj[6] = arr6.map((other_user) => other_user.other_user);
        arr = arr7.push(obj);
        arr9 = arr7;
      }
      const item1 = arr9.forEach((arg0) => {
        const tmp = !callback(arg0);
        arg0.enableBadge = tmp;
        return tmp;
      });
      const items4 = [];
      if (friendSuggestions.length > 0) {
        obj = { kind: "suggested-friends-header", id: "suggested-friends-header", showDivider: null };
        obj[2] = arr9.length > 0;
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
          const obj1 = { kind: "suggested-friends-show-all-row", id: "suggested-friends-show-all-row", suggestedFriends: null };
          obj1[2] = arr11;
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
              obj2[1] = "mp-" + num10;
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
      let obj = currentNavigationRouteName(setting[28]);
      obj = { version: "v2", load_start_timestamp: null, tti_millis: null };
      obj[1] = first1;
      const _Date = Date;
      obj[2] = Date.now() - first1;
      obj.track(stateFromStores.NOTIFICATION_CENTER_LOADED, obj);
    }
  }, items11);
  const items12 = [memo, stateFromStores2, first, memo2, setting, tmp17[1], callback3];
  const effect = height.useEffect(() => {
    if (memo) {
      const found = memo2.filter((kind) => "notification-center-item" === kind.kind);
      const current = ref.current;
      current.clear();
      const item = found.forEach((type) => {
        if (type.type !== callback(table[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
          type.enableBadge = false;
        }
      });
      if (stateFromStores2 !== first) {
        _undefined(tmp5);
        const found1 = found.filter((local_id) => {
          let tmp = null != local_id.local_id;
          if (tmp) {
            tmp = !localItemAcked.isLocalItemAcked(local_id);
          }
          return tmp;
        });
        const mapped = found1.map((local_id) => local_id.local_id);
        const result = isFocused(setting[29]).markNotificationCenterLocalItemsAcked(mapped);
        const obj = isFocused(setting[29]);
        const result1 = isFocused(setting[29]).bulkMarkNotificationCenterItemsAcked(found.filter((addResult) => !outer1_0(outer1_2[24]).isRemoteAcked(addResult, closure_2)));
        const obj2 = isFocused(setting[29]);
        const result2 = isFocused(setting[30]).clearNotificationGuildMentions();
        const obj3 = isFocused(setting[30]);
      }
    }
  }, items12);
  const items13 = [isFocused, tmp20[1]];
  const effect1 = height.useEffect(() => {
    if (isFocused) {
      _undefined2(false);
    }
    const result = isFocused(setting[29]).setNotificationCenterTabFocused(isFocused);
    return () => callback(table[29]).setNotificationCenterTabFocused(false);
  }, items13);
  const items14 = [memo, tmp20[1]];
  const effect2 = height.useEffect(() => {
    if (memo) {
      _undefined2(true);
    }
  }, items14);
  obj = { type: null, name: null, properties: null };
  const obj9 = isFocused(setting[22]);
  obj[0] = isFocused(setting[32]).ImpressionTypes.VIEW;
  obj[1] = isFocused(setting[32]).ImpressionNames.NOTIFICATION_CENTER_LANDING;
  obj = { empty: 0 === memo2.length };
  obj[2] = obj;
  obj1 = { disableTrack: !initialized };
  const items15 = [initialized];
  currentNavigationRouteName(setting[31])(obj, obj1, items15);
  if (initialized) {
    obj2 = { items: null, loadingMore: null, loadMore: null, nestedInLaunchPad: null, shouldScrollToTop: null, isSoftAcked: null, onSoftAckItem: null, forceHoistItem: null, isForceHoisted: null, suggestedFriendAdded: null, onAddSuggestionAnimationFinish: null, panelVariant: null };
    obj2[0] = memo2;
    obj2[1] = loadingMore;
    obj2[2] = loadMore;
    obj2[3] = merged.nestedInLaunchPad;
    obj2[4] = tmp20[0];
    obj2[5] = callback;
    obj2[6] = callback1;
    obj2[7] = callback2;
    obj2[8] = callback3;
    obj2[9] = callback4;
    obj2[10] = callback5;
    obj2[11] = flag;
    let tmp43Result = tmp43(tmp2(tmp3[34]).ForYouItems, obj2);
  } else {
    obj3 = { children: null };
    const _Array = Array;
    const _Array2 = Array;
    obj3[0] = Array.from(Array(10)).map((arg0, arg1) => stateFromStores3(isFocused(setting[33]).ForYouMentionPlaceholder, {}, arg1));
    tmp43Result = tmp43(c5, obj3);
    let arr = Array.from(Array(10));
  }
  return tmp43Result;
};