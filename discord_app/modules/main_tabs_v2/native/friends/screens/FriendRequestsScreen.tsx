// === Module 17408: FriendRequestsScreen ===

// Module 17408 (FriendRequestsScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 587 */;
import useAlertStore from "useAlertStore" /* 5300 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import NotificationCenterItemsActions from "NotificationCenterItemsActions" /* 16780 */;
import getPendingRelationshipIds from "getPendingRelationshipIds" /* 17410 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 6064 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function compareUserItems(user, user2) {
  if (user.user.id === user2.user.id) {
    let compareResult = SnowflakeUtilsDefault.compare(user.applicationId, user2.applicationId);
  } else {
    compareResult = SnowflakeUtilsDefault.compare(user.user.id, user2.user.id);
  }
  return compareResult;
}
const View = fn(17).View;
const UserRowModes = fn(10187).UserRowModes;
const Constants = fn(1085);
({ AnalyticEvents: c10, AnalyticsSections: closure_11, RelationshipTypes: closure_12 } = Constants);
let closure_13 = fn(10203).MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let Outgoing = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
const createStyles = fn(5091);
let obj2 = { container: { flex: 1 }, noResultsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 }, clearAllContainer: null, clearAll: null, tabs: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.clearAllContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
obj2.clearAll = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, minWidth: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
let obj5 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, minWidth: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
obj2.tabs = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNotificationCenterAckFriendRequests() {
  const cResult = stateFromStoresArray(576).c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationCenterItemsStore];
    const fn = function o() {
      localItems = localItems.localItems;
      return localItems.filter((type) => {
        let tmp3 = type.type === stateFromStoresArray(dependencyMap[17]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
        if (!tmp3) {
          tmp3 = type.type === stateFromStoresArray(dependencyMap[17]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        }
        return tmp3;
      });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStoresArray(576);
  stateFromStoresArray = stateFromStoresArray(573).useStateFromStoresArray(tmp4, tmp5);
  const NotificationCenterAckedBeforeId = tmp(2041).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  if (cResult[2] === setting) {
    if (cResult[3] === stateFromStoresArray) {
      let tmp9 = cResult[4];
      let tmp10 = cResult[5];
    }
    const effect = noop.useEffect(tmp9, tmp10);
  }
  const fn2 = function l() {
    if (stateFromStoresArray.length > 0) {
      const mapped = stateFromStoresArray.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      const result = NotificationCenterItemsActions.markNotificationCenterLocalItemsAcked(found);
      const result1 = NotificationCenterItemsActions.bulkMarkNotificationCenterItemsAcked(stateFromStoresArray.filter((item) => !stateFromStoresArray(dependencyMap[21]).isRemoteAcked(item, setting)));
    }
  };
  const items1 = [stateFromStoresArray, setting];
  cResult[2] = setting;
  cResult[3] = stateFromStoresArray;
  cResult[4] = fn2;
  cResult[5] = items1;
  tmp10 = items1;
  tmp9 = fn2;
  const tmpResult = stateFromStoresArray(573);
}) : (function useNotificationCenterAckFriendRequests() {
  const items = [NotificationCenterItemsStore];
  stateFromStoresArray = stateFromStoresArray(573).useStateFromStoresArray(items, () => {
    localItems = localItems.localItems;
    return localItems.filter((type) => {
      let tmp3 = type.type === stateFromStoresArray(dependencyMap[17]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (!tmp3) {
        tmp3 = type.type === stateFromStoresArray(dependencyMap[17]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      }
      return tmp3;
    });
  });
  const NotificationCenterAckedBeforeId = stateFromStoresArray(2041).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  const items1 = [stateFromStoresArray, setting];
  const effect = noop.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const mapped = stateFromStoresArray.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      const result = NotificationCenterItemsActions.markNotificationCenterLocalItemsAcked(found);
      const result1 = NotificationCenterItemsActions.bulkMarkNotificationCenterItemsAcked(stateFromStoresArray.filter((item) => !stateFromStoresArray(dependencyMap[21]).isRemoteAcked(item, setting)));
    }
  }, items1);
});
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FriendRequestsScreen() {
  const cResult = analyticsLocations(gameRelationshipsByType[16]).c(79);
  closure_17();
  let obj = analyticsLocations(gameRelationshipsByType[16]);
  const tmp5 = set;
  analyticsLocations = set(gameRelationshipsByType[23])(set(gameRelationshipsByType[24]).FRIEND_REQUESTS).analyticsLocations;
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      set(gameRelationshipsByType[25]).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: constants2.FRIENDS_REQUESTS_MODAL });
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp8 = fn;
    tmp9 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [RelationshipStore];
    class E {
      constructor() {
        items = [, ];
        items[0] = ignoredUserIds.getMutableRelationships();
        items[1] = ignoredUserIds.getVersion();
        return items;
      }
    }
    cResult[2] = items1;
    cResult[3] = E;
    let tmp12 = E;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  let tmp6 = set(gameRelationshipsByType[23]);
  const tmpResult = analyticsLocations(gameRelationshipsByType[18]);
  [tmp15, tmp16] = gameRelationshipsByType1(analyticsLocations(gameRelationshipsByType[18]).useStateFromStoresArray(tmp11, tmp12), 2);
  const tmp14 = gameRelationshipsByType1(analyticsLocations(gameRelationshipsByType[18]).useStateFromStoresArray(tmp11, tmp12), 2);
  gameRelationshipsByType = analyticsLocations(gameRelationshipsByType[26]).useGameRelationshipsByType(constants.PENDING_INCOMING);
  const tmpResult4 = analyticsLocations(gameRelationshipsByType[26]);
  gameRelationshipsByType1 = analyticsLocations(gameRelationshipsByType[26]).useGameRelationshipsByType(constants.PENDING_OUTGOING);
  if (cResult[4] === gameRelationshipsByType) {
    if (cResult[5] === gameRelationshipsByType1) {
      set = cResult[6];
    }
    if (cResult[7] !== tmp17) {
      const _Array = Array;
      const arr = Array.from(tmp17);
      class E {
        constructor() {
          items = [, ];
          items[0] = ignoredUserIds.getMutableRelationships();
          items[1] = ignoredUserIds.getVersion();
          return items;
        }
      }
      cResult[8] = arr;
      let tmp21 = arr;
    } else {
      tmp21 = cResult[8];
    }
    tmp5(tmp2[27])(tmp21);
    class E {
      constructor() {
        items = [, ];
        items[0] = ignoredUserIds.getMutableRelationships();
        items[1] = ignoredUserIds.getVersion();
        return items;
      }
    }
    const pendingRelationshipIds = tmp(tmp2[28]).getPendingRelationshipIds(tmp15, tmp16);
    cResult[9] = tmp16;
    cResult[10] = tmp15;
    cResult[11] = pendingRelationshipIds;
    const tmpResult6 = tmp(tmp2[28]);
  }
  set = new Set();
  const item = gameRelationshipsByType.forEach((applicationId) => {
    set.add(applicationId.applicationId);
  });
  const item1 = gameRelationshipsByType1.forEach((applicationId) => {
    set.add(applicationId.applicationId);
  });
  cResult[4] = gameRelationshipsByType;
  cResult[5] = gameRelationshipsByType1;
  cResult[6] = set;
  const tmpResult5 = analyticsLocations(gameRelationshipsByType[26]);
}) : (function FriendRequestsScreen() {
  let tmp = onPress();
  let WumpusCouchSpotIllustration = dependencyMap;
  const analyticsLocations = first(6848)(first(6872).FRIEND_REQUESTS).analyticsLocations;
  navigation();
  const effect = gameRelationshipsByType1.useEffect(() => {
    first(1265).track(outgoing.FRIEND_ADD_VIEWED, { friend_add_type: spam.FRIENDS_REQUESTS_MODAL });
  }, []);
  const tmp3 = first(6848);
  let items = [spamIds];
  const tmp7 = gameRelationshipsByType(analyticsLocations(573).useStateFromStoresArray(items, () => {
    const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
    return items;
  }), 2);
  first = tmp7[0];
  dependencyMap = tmp9;
  let obj = analyticsLocations(573);
  gameRelationshipsByType = analyticsLocations(13134).useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let obj2 = analyticsLocations(13134);
  gameRelationshipsByType1 = analyticsLocations(13134).useGameRelationshipsByType(ignoredUsers.PENDING_OUTGOING);
  let items1 = [gameRelationshipsByType, gameRelationshipsByType1];
  const memo = gameRelationshipsByType1.useMemo(() => {
    const set = new Set();
    const item = gameRelationshipsByType.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    const item1 = gameRelationshipsByType1.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    return Array.from(set);
  }, items1);
  first(6854)(memo);
  const items2 = [first, tmp7[1]];
  const memo1 = gameRelationshipsByType1.useMemo(() => getPendingRelationshipIds.getPendingRelationshipIds(first, closure_2), items2);
  const pendingIncomingIds = memo1.pendingIncomingIds;
  const pendingOutgoingIds = memo1.pendingOutgoingIds;
  spamIds = memo1.spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  let obj3 = analyticsLocations(13134);
  const items3 = [ignoredUserIds];
  const items4 = [ignoredUserIds, gameRelationshipsByType, gameRelationshipsByType1, pendingIncomingIds, pendingOutgoingIds, spamIds];
  const stateFromStores = analyticsLocations(573).useStateFromStores(items3, () => {
    const mapped = pendingIncomingIds.map((item) => ({ user: authStore.getUser(item), isGameRelationship: false }));
    const found = mapped.filter((user) => null != user.user);
    const mapped1 = gameRelationshipsByType.map((applicationId) => ({ user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found1 = mapped1.filter((user) => null != user.user);
    const mapped2 = pendingOutgoingIds.map((item) => ({ user: authStore.getUser(item), isGameRelationship: false }));
    const found2 = mapped2.filter((user) => null != user.user);
    const mapped3 = gameRelationshipsByType1.map((applicationId) => ({ user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found3 = mapped3.filter((user) => null != user.user);
    const obj = { incoming: null, outgoing: null, spam: null, ignoredUsers: null };
    const items = [...found1];
    obj.incoming = items.sort(compareUserItems);
    const items1 = [...found3];
    obj.outgoing = items1.sort(compareUserItems);
    const mapped4 = spamIds.map((item) => ({ user: authStore.getUser(item) }));
    obj.spam = mapped4.filter((user) => null != user.user);
    const mapped5 = ignoredUserIds.map((item) => ({ user: authStore.getUser(item) }));
    obj.ignoredUsers = mapped5.filter((user) => null != user.user);
    return obj;
  }, items4, first(1355));
  const incoming = stateFromStores.incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  ignoredUsers = stateFromStores.ignoredUsers;
  const items5 = [ignoredUsers, incoming, outgoing, spam];
  const memo2 = gameRelationshipsByType1.useMemo(() => {
    const obj = { incomingData: { items: incoming, relationship: constants.PENDING_INCOMING }, incomingSection: null, outgoingData: null, outgoingSection: null };
    const items = [incoming.length, ];
    let num = 0;
    if (spam.length + ignoredUsers.length > 0) {
      num = 1;
    }
    items[1] = num;
    obj.incomingSection = items;
    obj.outgoingData = { items: outgoing, relationship: constants.PENDING_OUTGOING };
    const items1 = [outgoing.length];
    obj.outgoingSection = items1;
    return obj;
  }, items5);
  const incomingData = memo2.incomingData;
  const outgoingData = memo2.outgoingData;
  ({ outgoingSection, incomingSection } = memo2);
  const tmp17 = gameRelationshipsByType(gameRelationshipsByType1.useState(() => {
    if (0 === incoming.length) {
      if (outgoing.length > 0) {
        let Incoming = closure_16.Outgoing;
      }
      return Incoming;
    }
    Incoming = closure_16.Incoming;
  }), 2);
  const first1 = tmp17[0];
  Outgoing = tmp17[1];
  const items6 = [analyticsLocations];
  onPress = gameRelationshipsByType1.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items6);
  const callback1 = gameRelationshipsByType1.useCallback((arg0) => {
    if (1 === arg0) {
      const element = { type: "section", props: null };
      const obj = { title: null };
      const intl = analyticsLocations(1126).intl;
      obj.title = intl.string(analyticsLocations(1126).t["NHpP/k"]);
      element.props = obj;
      return element;
    }
  }, []);
  let obj4 = analyticsLocations(573);
  navigation = analyticsLocations(1503).useNavigation();
  const items7 = [first1, incomingData, outgoingData, onPress, spam.length, ignoredUsers.length, navigation];
  let tmp24 = first1 === Outgoing.Outgoing;
  const callback2 = gameRelationshipsByType1.useCallback((arg0, arg1) => {
    if (1 === arg0) {
      let obj = {
        type: "custom",
        component() {
            let tmp4 = null;
            if (length.length > 0) {
              const obj = {
                onPress() {
                    navigation.navigate("friends", { screen: "spam-requests" });
                  },
                label: null,
                trailing: null,
                arrow: true
              };
              const intl = analyticsLocations(dependencyMap[31]).intl;
              obj.label = intl.string(analyticsLocations(dependencyMap[31]).t.fUQoqD);
              const obj2 = { variant: "text-sm/medium", color: "text-muted", children: arr.length };
              obj.trailing = outgoingData(analyticsLocations(dependencyMap[35]).Text, obj2);
              tmp4 = outgoingData(analyticsLocations(dependencyMap[34]).TableRow, obj);
            }
            const children = [tmp4, ];
            let tmp6 = null;
            if (length2.length > 0) {
              const obj3 = {
                onPress() {
                    navigation.navigate("friends", { screen: "ignored-user-requests" });
                  },
                label: null,
                trailing: null,
                arrow: true
              };
              const intl2 = analyticsLocations(dependencyMap[31]).intl;
              obj3.label = intl2.string(analyticsLocations(dependencyMap[31]).t.en1Gkz);
              const obj4 = { variant: "text-sm/medium", color: "text-muted", children: arr3.length };
              obj3.trailing = outgoingData(analyticsLocations(dependencyMap[35]).Text, obj4);
              tmp6 = outgoingData(analyticsLocations(dependencyMap[34]).TableRow, obj3);
            }
            children[1] = tmp6;
            return first1(analyticsLocations(dependencyMap[33]).TableRowGroup, { hasIcons: false, children });
          },
        key: "spamRequests",
        itemType: "spamRequests"
      };
      return obj;
    } else {
      const tmp = first1 === closure_16.Incoming ? incomingData : outgoingData;
      const items = tmp.items;
      const element = { type: "user", props: null };
      let obj2 = { type: tmp.relationship, user: items[arg1].user, onPress, mode: UserRowModes.ACTIONS, start: 0 === arg1, end: arg1 === items.length - 1, applicationId: items[arg1].applicationId, isGameRelationship: items[arg1].isGameRelationship };
      element.props = obj2;
      return element;
    }
  }, items7);
  if (tmp24) {
    tmp24 = 0 === outgoing.length;
  }
  if (!tmp24) {
    let tmp25 = first1 === tmp23.Incoming;
    if (tmp25) {
      tmp25 = 0 === incoming.length;
    }
    if (tmp25) {
      tmp25 = 0 === spam.length;
    }
    if (tmp25) {
      tmp25 = 0 === ignoredUserIds.length;
    }
    tmp24 = tmp25;
  }
  let tmp26 = first1 === tmp23.Incoming;
  if (tmp26) {
    tmp26 = incoming.length >= incomingData;
  }
  const obj5 = analyticsLocations(1503);
  const obj6 = {
    pageWidth: 0,
    defaultIndex: first1,
    onSetActiveIndex(arg0) {
      if (0 === arg0) {
        Outgoing = closure_16.Incoming;
      } else {
        Outgoing = closure_16.Outgoing;
      }
      closure_16(Outgoing);
    },
    items: null
  };
  const obj7 = { id: Outgoing.Incoming.toString(), label: null, page: null };
  let intl = tmp6(1126).intl;
  obj7.label = intl.string(analyticsLocations(1126).t.bekioP);
  const items8 = [obj7, ];
  const obj8 = { id: Outgoing.Outgoing.toString(), label: null, page: null };
  let intl2 = tmp6(1126).intl;
  obj8.label = intl2.string(analyticsLocations(1126).t.tWqcIF);
  items8[1] = obj8;
  obj6.items = items8;
  const segmentedControlState = analyticsLocations(8513).useSegmentedControlState(obj6);
  const obj9 = { value: analyticsLocations, children: null };
  const items9 = [outgoingData(first(10196), { absolute: true }), ];
  const obj10 = { style: tmp.container, children: null };
  const tmp6Result = analyticsLocations(8513);
  const items10 = [outgoingData(pendingIncomingIds, { style: tmp.tabs, children: outgoingData(analyticsLocations(8761).SegmentedControl, { state: segmentedControlState }) }), , ];
  let tmp30Result = null;
  if (tmp26) {
    const obj12 = { style: tmp.clearAllContainer, children: null };
    const obj13 = {
      style: tmp.clearAll,
      onPress() {
          const lazyResult = noop.lazy(() => analyticsLocations(paths[13])(paths[12], paths.paths));
          useAlertStore.openAlert("clear-all-incoming-requests", state(lazyResult, { incomingRequestCount: incoming.length }));
        },
      children: null
    };
    const obj14 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl3 = tmp6(1126).intl;
    obj14.children = intl3.string(tmp6(1126).t.O8k7O4);
    obj13.children = tmp30(tmp6(5087).Text, obj14);
    obj12.children = tmp30(tmp6(6191).PressableOpacity, obj13);
    tmp30Result = tmp30(tmp31, obj12);
  }
  items10[1] = tmp30Result;
  if (tmp24) {
    const obj15 = { style: tmp.noResultsContainer, children: null };
    if (first1 === tmp23.Incoming) {
      const intl5 = tmp6(1126).intl;
      let stringResult = intl5.string(tmp6(1126).t["7uvAKe"]);
    } else {
      const intl4 = tmp6(1126).intl;
      stringResult = intl4.string(tmp6(1126).t["yvzX/Z"]);
    }
    const obj16 = { title: stringResult, illustration: null, disableBackgroundOverlay: true };
    WumpusCouchSpotIllustration = tmp6(15306).WumpusCouchSpotIllustration;
    obj16.illustration = WumpusCouchSpotIllustration;
    obj15.children = tmp30(tmp2(11530), obj16);
    tmp30(tmp31, obj15);
    const tmp2Result = tmp2(11530);
  } else {
    if (first1 === tmp23.Incoming) {
      outgoingSection = incomingSection;
    }
    const obj17 = { sections: outgoingSection, getItemProps: callback2, getSectionProps: callback1 };
    items10[2] = tmp30(tmp6(10193).UsersFastList, obj17);
    obj10.children = items10;
    items9[1] = tmp29(tmp31, obj10);
    obj9.children = items9;
    return tmp29(tmp6(6848).AnalyticsLocationProvider, obj9);
  }
});