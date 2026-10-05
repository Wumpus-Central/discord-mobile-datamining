// === Module 16947: FriendRequestsScreen ===

// Module 16947 (FriendRequestsScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import UserRowConstants from "UserRowConstants" /* 10592 */;
import Constants2 from "Constants" /* 10607 */;
import NotificationCenterItemsActions from "NotificationCenterItemsActions" /* 16356 */;
import getPendingRelationshipIds from "getPendingRelationshipIds" /* 16949 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7124 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, localItems, navigation, set;

let c10;
let closure_12;
let closure_14;
let closure_15;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function compareUserItems(user, user2) {
  let compareResult;
  if (user.user.id === user2.user.id) {
    const obj2 = SnowflakeUtilsDefault;
    compareResult = obj2.compare(user.applicationId, user2.applicationId);
  } else {
    const obj = SnowflakeUtilsDefault;
    compareResult = obj.compare(user.user.id, user2.user.id);
  }
  return compareResult;
}
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
({ AnalyticEvents: c10, AnalyticsSections: unpackModuleId, RelationshipTypes: closure_12 } = Constants);
let closure_13 = Constants2.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let Outgoing = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, noResultsContainer: obj2, clearAllContainer: obj3, clearAll: obj4, tabs: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
obj4 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, minWidth: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStoresArray;
  let tmp4;
  let tmp5;
  let obj = stateFromStoresArray(576);
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationCenterItemsStore];
    const fn = function o() {
      localItems = localItems.localItems;
      return localItems.filter((type) => {
        const tmp3 = type.type === stateFromStoresArray(closure_1_2[17]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS || type.type === stateFromStoresArray(closure_1_2[17]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
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
  const tmpResult = stateFromStoresArray(573);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  const NotificationCenterAckedBeforeId = tmp(2028).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  if (cResult[2] === setting) {
    let tmp9;
    let tmp10;
    if (cResult[3] === stateFromStoresArray) {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const effect = react.useEffect(tmp9, tmp10);
  }
  const fn2 = function l() {
    if (stateFromStoresArray.length > 0) {
      const mapped = stateFromStoresArray.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      let obj = NotificationCenterItemsActions;
      const result = obj.markNotificationCenterLocalItemsAcked(found);
      const obj2 = NotificationCenterItemsActions;
      const result1 = obj2.bulkMarkNotificationCenterItemsAcked(stateFromStoresArray.filter((item) => {
        const obj = stateFromStoresArray(dependencyMap[21]);
        return !obj.isRemoteAcked(item, setting);
      }));
    }
  };
  const items1 = [stateFromStoresArray, setting];
  cResult[2] = setting;
  cResult[3] = stateFromStoresArray;
  cResult[4] = fn2;
  cResult[5] = items1;
  tmp10 = items1;
  tmp9 = fn2;
}) : (() => {
  let stateFromStoresArray;
  let obj = stateFromStoresArray(573);
  const items = [NotificationCenterItemsStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    localItems = localItems.localItems;
    return localItems.filter((type) => {
      const tmp3 = type.type === stateFromStoresArray(closure_1_2[17]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS || type.type === stateFromStoresArray(closure_1_2[17]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      return tmp3;
    });
  });
  const NotificationCenterAckedBeforeId = stateFromStoresArray(2028).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  const items1 = [stateFromStoresArray, setting];
  const effect = react.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const mapped = stateFromStoresArray.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      let obj = NotificationCenterItemsActions;
      const result = obj.markNotificationCenterLocalItemsAcked(found);
      const obj2 = NotificationCenterItemsActions;
      const result1 = obj2.bulkMarkNotificationCenterItemsAcked(stateFromStoresArray.filter((item) => {
        const obj = stateFromStoresArray(dependencyMap[21]);
        return !obj.isRemoteAcked(item, setting);
      }));
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let analyticsLocations;
  let constants2;
  let gameRelationshipsByType;
  let gameRelationshipsByType1;
  let onPress;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp8;
  let tmp9;
  let tmp = analyticsLocations;
  let obj = analyticsLocations(gameRelationshipsByType[16]);
  const cResult = obj.c(79);
  let tmp4 = closure_17();
  let tmp6 = set(gameRelationshipsByType[23]);
  analyticsLocations = tmp6(set(gameRelationshipsByType[24]).FRIEND_REQUESTS).analyticsLocations;
  closure_18();
  const tmp5 = set;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function a() {
      const obj = set(gameRelationshipsByType[25]);
      const obj2 = { friend_add_type: constants2.FRIENDS_REQUESTS_MODAL };
      obj.track(constants.FRIEND_ADD_VIEWED, obj2);
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp8 = fn;
    tmp9 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [RelationshipStore];
    class C {
      constructor() {
        const items = [RelationshipStore.getMutableRelationships(), RelationshipStore.getVersion()];
        return items;
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    tmp12 = C;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult = tmp(gameRelationshipsByType[18]);
  [tmp15, tmp16] = gameRelationshipsByType1(tmpResult.useStateFromStoresArray(tmp11, tmp12), 2);
  gameRelationshipsByType1(tmpResult.useStateFromStoresArray(tmp11, tmp12), 2);
  const tmpResult4 = tmp(gameRelationshipsByType[26]);
  gameRelationshipsByType = tmpResult4.useGameRelationshipsByType(constants.PENDING_INCOMING);
  const tmpResult5 = tmp(gameRelationshipsByType[26]);
  gameRelationshipsByType1 = tmpResult5.useGameRelationshipsByType(constants.PENDING_OUTGOING);
  if (cResult[4] === gameRelationshipsByType) {
    let tmp21;
    if (cResult[5] === gameRelationshipsByType1) {
      set = cResult[6];
    }
    if (cResult[7] !== tmp17) {
      const _Array = Array;
      const arr = Array.from(tmp17);
      class C {
        constructor() {
          const items = [RelationshipStore.getMutableRelationships(), RelationshipStore.getVersion()];
          return items;
        }
      }
      cResult[8] = arr;
      tmp21 = arr;
    } else {
      tmp21 = cResult[8];
    }
    tmp5(gameRelationshipsByType[27])(tmp21);
    class C {
      constructor() {
        const items = [RelationshipStore.getMutableRelationships(), RelationshipStore.getVersion()];
        return items;
      }
    }
    const tmpResult6 = tmp(gameRelationshipsByType[28]);
    const pendingRelationshipIds = tmpResult6.getPendingRelationshipIds(tmp15, tmp16);
    cResult[9] = tmp16;
    cResult[10] = tmp15;
    cResult[11] = pendingRelationshipIds;
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
}) : (() => {
  let PressableOpacity;
  let Text;
  let closure_16;
  let closure_2;
  let first;
  let gameRelationshipsByType;
  let gameRelationshipsByType1;
  let ignoredUsers;
  let incomingSection;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items8;
  let items9;
  let obj13;
  let obj14;
  let obj16;
  let onPress;
  let outgoingSection;
  let spamIds;
  let str;
  let str2;
  let tmp2Result;
  let tmp32Result2;
  let tmp = onPress();
  let tmp4 = first(6657);
  const analyticsLocations = tmp4(first(6681).FRIEND_REQUESTS).analyticsLocations;
  navigation();
  const effect = gameRelationshipsByType1.useEffect(() => {
    const obj = first(closure_2[25]);
    const obj2 = { friend_add_type: spam.FRIENDS_REQUESTS_MODAL };
    obj.track(outgoing.FRIEND_ADD_VIEWED, obj2);
  }, []);
  let obj = analyticsLocations(573);
  let items = [spamIds];
  const tmp8 = gameRelationshipsByType(obj.useStateFromStoresArray(items, () => {
    const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
    return items;
  }), 2);
  first = tmp8[0];
  dependencyMap = tmp10;
  let obj2 = analyticsLocations(12884);
  gameRelationshipsByType = obj2.useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let obj3 = analyticsLocations(12884);
  gameRelationshipsByType1 = obj3.useGameRelationshipsByType(ignoredUsers.PENDING_OUTGOING);
  let items1 = [gameRelationshipsByType, gameRelationshipsByType1];
  const memo = gameRelationshipsByType1.useMemo(() => {
    set = new Set();
    const item = gameRelationshipsByType.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    const item1 = gameRelationshipsByType1.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    return Array.from(set);
  }, items1);
  first(6663)(memo);
  const items2 = [first, tmp8[1]];
  const memo1 = gameRelationshipsByType1.useMemo(() => {
    const obj = getPendingRelationshipIds;
    return obj.getPendingRelationshipIds(first, closure_2);
  }, items2);
  const pendingIncomingIds = memo1.pendingIncomingIds;
  const pendingOutgoingIds = memo1.pendingOutgoingIds;
  spamIds = memo1.spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  let obj4 = analyticsLocations(573);
  const items3 = [ignoredUserIds];
  const items4 = [ignoredUserIds, gameRelationshipsByType, gameRelationshipsByType1, pendingIncomingIds, pendingOutgoingIds, spamIds];
  const stateFromStores = obj4.useStateFromStores(items3, () => {
    let items;
    let items1;
    let mapped4;
    let mapped5;
    const mapped = pendingIncomingIds.map((item) => {
      const obj = { user: authStore.getUser(item), isGameRelationship: false };
      return obj;
    });
    const found = mapped.filter((user) => null != user.user);
    const mapped1 = gameRelationshipsByType.map((applicationId) => {
      const obj = { user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId };
      return obj;
    });
    const found1 = mapped1.filter((user) => null != user.user);
    const mapped2 = pendingOutgoingIds.map((item) => {
      const obj = { user: authStore.getUser(item), isGameRelationship: false };
      return obj;
    });
    const found2 = mapped2.filter((user) => null != user.user);
    const mapped3 = gameRelationshipsByType1.map((applicationId) => {
      const obj = { user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId };
      return obj;
    });
    const found3 = mapped3.filter((user) => null != user.user);
    let obj = { incoming: items.sort(compareUserItems), outgoing: items1.sort(compareUserItems), spam: mapped4.filter((user) => null != user.user), ignoredUsers: mapped5.filter((user) => null != user.user) };
    items = [...found1];
    items1 = [...found3];
    mapped4 = spamIds.map((item) => {
      const obj = { user: authStore.getUser(item) };
      return obj;
    });
    mapped5 = ignoredUserIds.map((item) => {
      const obj = { user: authStore.getUser(item) };
      return obj;
    });
    return obj;
  }, items4, first(1342));
  const incoming = stateFromStores.incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  ignoredUsers = stateFromStores.ignoredUsers;
  const items5 = [ignoredUsers, incoming, outgoing, spam];
  const memo2 = gameRelationshipsByType1.useMemo(() => {
    let items;
    let items1;
    let obj2;
    const obj = { incomingData: obj2, incomingSection: items, outgoingData: obj3, outgoingSection: items1 };
    items = [incoming.length, ];
    let num = 0;
    obj2 = { items: incoming, relationship: ignoredUsers.PENDING_INCOMING };
    if (spam.length + ignoredUsers.length > 0) {
      num = 1;
    }
    items[1] = num;
    items1 = [outgoing.length];
    return obj;
  }, items5);
  const incomingData = memo2.incomingData;
  const outgoingData = memo2.outgoingData;
  ({ outgoingSection, incomingSection } = memo2);
  const tmp18 = gameRelationshipsByType(gameRelationshipsByType1.useState(() => {
    if (0 === incoming.length) {
      let Incoming;
      if (outgoing.length > 0) {
        Incoming = Outgoing.Outgoing;
      }
      return Incoming;
    }
    Incoming = Outgoing.Incoming;
  }), 2);
  const first1 = tmp18[0];
  Outgoing = tmp18[1];
  const items6 = [analyticsLocations];
  onPress = gameRelationshipsByType1.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items6);
  const callback1 = gameRelationshipsByType1.useCallback((arg0) => {
    let intl;
    let obj;
    if (1 === arg0) {
      const element = { type: "section", props: obj };
      obj = { title: intl.string(analyticsLocations(closure_2[31]).t["NHpP/k"]) };
      intl = analyticsLocations(closure_2[31]).intl;
      return element;
    }
  }, []);
  const obj5 = analyticsLocations(1490);
  navigation = obj5.useNavigation();
  const items7 = [first1, incomingData, outgoingData, onPress, spam.length, ignoredUsers.length, navigation];
  let tmp25 = first1 === Outgoing.Outgoing;
  const callback2 = gameRelationshipsByType1.useCallback((arg0, arg1) => {
    let length;
    let length2;
    let obj2;
    if (1 === arg0) {
      let obj = {
        type: "custom",
        component() {
            let intl;
            let intl2;
            let obj2;
            let obj4;
            let tmp4 = null;
            const TableRowGroup = analyticsLocations(closure_2[33]).TableRowGroup;
            if (length.length > 0) {
              const obj = {
                onPress() {
                    navigation.navigate("friends", { screen: "spam-requests" });
                  },
                label: intl.string(analyticsLocations(closure_2[31]).t.fUQoqD),
                trailing: outgoingData(analyticsLocations(closure_2[35]).Text, obj2),
                arrow: true
              };
              const TableRow = analyticsLocations(closure_2[34]).TableRow;
              intl = analyticsLocations(closure_2[31]).intl;
              obj2 = { variant: "text-sm/medium", color: "text-muted", children: arr.length };
              tmp4 = outgoingData(TableRow, obj);
            }
            const children = [tmp4, ];
            let tmp6 = null;
            if (length2.length > 0) {
              const obj3 = {
                onPress() {
                    navigation.navigate("friends", { screen: "ignored-user-requests" });
                  },
                label: intl2.string(analyticsLocations(closure_2[31]).t.en1Gkz),
                trailing: outgoingData(analyticsLocations(closure_2[35]).Text, obj4),
                arrow: true
              };
              const TableRow2 = analyticsLocations(closure_2[34]).TableRow;
              intl2 = analyticsLocations(closure_2[31]).intl;
              obj4 = { variant: "text-sm/medium", color: "text-muted", children: arr3.length };
              tmp6 = outgoingData(TableRow2, obj3);
            }
            children[1] = tmp6;
            return first1(TableRowGroup, { hasIcons: false, children });
          },
        key: "spamRequests",
        itemType: "spamRequests"
      };
      return obj;
    } else {
      const tmp = first1 === Outgoing.Incoming ? incomingData : outgoingData;
      const items = tmp.items;
      const element = { type: "user", props: obj2 };
      obj2 = { type: tmp.relationship, user: items[arg1].user, onPress, mode: UserRowModes.ACTIONS, start: 0 === arg1, end: arg1 === items.length - 1, applicationId: items[arg1].applicationId, isGameRelationship: items[arg1].isGameRelationship };
      return element;
    }
  }, items7);
  if (tmp25) {
    let num = 0;
    tmp25 = 0 === outgoing.length;
  }
  if (!tmp25) {
    tmp25 = first1 === tmp24.Incoming && 0 === incoming.length && 0 === spam.length && 0 === ignoredUserIds.length;
    const tmp26 = first1 === tmp24.Incoming && 0 === incoming.length && 0 === spam.length && 0 === ignoredUserIds.length;
  }
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
    items: items8
  };
  const tmp27 = first1 === tmp24.Incoming && incoming.length >= incomingData;
  const obj7 = { id: str.toString(), label: intl.string(analyticsLocations(1126).t.bekioP), page: null };
  const useSegmentedControlState = analyticsLocations(9282).useSegmentedControlState;
  str = Outgoing.Incoming;
  analyticsLocations(9282);
  intl = tmp7(1126).intl;
  items8 = [obj7, ];
  const obj8 = { id: str2.toString(), label: intl2.string(analyticsLocations(1126).t.tWqcIF), page: null };
  str2 = Outgoing.Outgoing;
  intl2 = tmp7(1126).intl;
  items8[1] = obj8;
  const segmentedControlState = useSegmentedControlState(obj6);
  const obj9 = { value: analyticsLocations, children: items9 };
  const AnalyticsLocationProvider = tmp7(6657).AnalyticsLocationProvider;
  items9 = [outgoingData(tmp2(5911), { absolute: true }), ];
  const obj10 = { style: tmp.container, children: items10 };
  items10 = [, , ];
  const obj11 = { style: tmp.tabs, children: outgoingData(analyticsLocations(9283).SegmentedControl, { state: segmentedControlState }) };
  items10[0] = outgoingData(pendingIncomingIds, obj11);
  let tmp32Result = null;
  if (tmp27) {
    const obj12 = { style: tmp.clearAllContainer, children: outgoingData(PressableOpacity, obj13) };
    obj13 = {
      style: tmp.clearAll,
      onPress() {
          let paths;
          const length = incoming.length;
          const lazyResult = react.lazy(() => analyticsLocations(paths[13])(paths[12], paths.paths));
          const obj = useAlertStore;
          obj.openAlert("clear-all-incoming-requests", authStore2(lazyResult, { incomingRequestCount: length }));
        },
      children: outgoingData(Text, obj14)
    };
    PressableOpacity = tmp7(5909).PressableOpacity;
    obj14 = { variant: "text-sm/semibold", color: "text-brand", children: intl3.string(analyticsLocations(1126).t.O8k7O4) };
    Text = tmp7(4886).Text;
    intl3 = tmp7(1126).intl;
    tmp32Result = tmp32(tmp33, obj12);
  }
  items10[1] = tmp32Result;
  if (tmp25) {
    let stringResult;
    const obj15 = { style: tmp.noResultsContainer, children: outgoingData(tmp2Result, obj16) };
    tmp2Result = first(10726);
    if (first1 === Outgoing.Incoming) {
      const intl5 = tmp7(1126).intl;
      stringResult = intl5.string(tmp7(1126).t["7uvAKe"]);
    } else {
      const intl4 = tmp7(1126).intl;
      stringResult = intl4.string(tmp7(1126).t["yvzX/Z"]);
    }
    obj16 = { title: stringResult, illustration: analyticsLocations(14917).WumpusCouchSpotIllustration, disableBackgroundOverlay: true };
    tmp32Result2 = tmp32(tmp33, obj15);
  } else {
    const UsersFastList = tmp7(10598).UsersFastList;
    if (first1 === Outgoing.Incoming) {
      outgoingSection = incomingSection;
    }
    const obj17 = { sections: outgoingSection, getItemProps: callback2, getSectionProps: callback1 };
    tmp32Result2 = tmp32(UsersFastList, obj17);
  }
  items10[2] = tmp32Result2;
  items9[1] = first1(pendingIncomingIds, obj10);
  return first1(AnalyticsLocationProvider, obj9);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default tmp5;