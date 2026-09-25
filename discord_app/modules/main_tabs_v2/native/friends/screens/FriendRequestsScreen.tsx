// === Module 16563: FriendRequestsScreen ===

// Module 16563 (FriendRequestsScreen)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import useAlertStore from "useAlertStore" /* 5198 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7617 */;
import NotificationCenterItemsActions from "NotificationCenterItemsActions" /* 16027 */;
import getPendingRelationshipIds from "getPendingRelationshipIds" /* 16565 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7048 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserStore from "UserStore" /* 1372 */;

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
const UserRowModes = fn(10308).UserRowModes;
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsSections: closure_11, RelationshipTypes: closure_12 } = Constants);
let closure_13 = fn(10322).MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let Outgoing = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
const createStyles = fn(4829);
let obj2 = { container: { flex: 1 }, noResultsContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 }, clearAllContainer: null, clearAll: null, tabs: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj2.clearAllContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
obj2.clearAll = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, minWidth: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
let obj5 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, minWidth: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
obj2.tabs = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default function FriendRequestsScreen() {
  let tmp = onPress();
  let WumpusCouchSpotIllustration = dependencyMap;
  const analyticsLocations = first(6578)(first(6598).FRIEND_REQUESTS).analyticsLocations;
  let tmp3 = first(6578);
  let items = [pendingOutgoingIds];
  const stateFromStoresArray = analyticsLocations(563).useStateFromStoresArray(items, () => {
    const localItems = pendingOutgoingIds.localItems;
    return localItems.filter((type) => {
      let tmp3 = type.type === analyticsLocations(dependencyMap[16]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (!tmp3) {
        tmp3 = type.type === analyticsLocations(dependencyMap[16]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      }
      return tmp3;
    });
  });
  closure_129_0 = stateFromStoresArray;
  const NotificationCenterAckedBeforeId = analyticsLocations(2020).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  closure_129_1 = setting;
  let items1 = [stateFromStoresArray, setting];
  const effect = gameRelationshipsByType1.useEffect(() => {
    if (analyticsLocations.length > 0) {
      const mapped = analyticsLocations.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      const result = NotificationCenterItemsActions.markNotificationCenterLocalItemsAcked(found);
      const result1 = NotificationCenterItemsActions.bulkMarkNotificationCenterItemsAcked(analyticsLocations.filter((item) => !analyticsLocations(closure_2[19]).isRemoteAcked(item, first)));
    }
  }, items1);
  const effect1 = gameRelationshipsByType1.useEffect(() => {
    first(1241).track(outgoing.FRIEND_ADD_VIEWED, { friend_add_type: spam.FRIENDS_REQUESTS_MODAL });
  }, []);
  let obj = analyticsLocations(563);
  const items2 = [spamIds];
  const tmp9 = gameRelationshipsByType(analyticsLocations(563).useStateFromStoresArray(items2, () => {
    const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
    return items;
  }), 2);
  first = tmp9[0];
  dependencyMap = tmp11;
  let obj2 = analyticsLocations(563);
  gameRelationshipsByType = analyticsLocations(12602).useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let obj3 = analyticsLocations(12602);
  gameRelationshipsByType1 = analyticsLocations(12602).useGameRelationshipsByType(ignoredUsers.PENDING_OUTGOING);
  const items3 = [gameRelationshipsByType, gameRelationshipsByType1];
  const memo = gameRelationshipsByType1.useMemo(() => {
    const set = new Set();
    const item = gameRelationshipsByType.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    const item1 = gameRelationshipsByType1.forEach((applicationId) => {
      set.add(applicationId.applicationId);
    });
    return Array.from(set);
  }, items3);
  first(6584)(memo);
  const items4 = [first, tmp9[1]];
  const memo1 = gameRelationshipsByType1.useMemo(() => getPendingRelationshipIds.getPendingRelationshipIds(first, closure_2), items4);
  const pendingIncomingIds = memo1.pendingIncomingIds;
  pendingOutgoingIds = memo1.pendingOutgoingIds;
  spamIds = memo1.spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  let obj4 = analyticsLocations(12602);
  const items5 = [ignoredUserIds];
  const items6 = [ignoredUserIds, gameRelationshipsByType, gameRelationshipsByType1, pendingIncomingIds, pendingOutgoingIds, spamIds];
  const stateFromStores = analyticsLocations(563).useStateFromStores(items5, () => {
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
  }, items6, first(1331));
  const incoming = stateFromStores.incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  ignoredUsers = stateFromStores.ignoredUsers;
  const items7 = [ignoredUsers, incoming, outgoing, spam];
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
  }, items7);
  const incomingData = memo2.incomingData;
  const outgoingData = memo2.outgoingData;
  ({ outgoingSection, incomingSection } = memo2);
  const tmp19 = gameRelationshipsByType(gameRelationshipsByType1.useState(() => {
    if (0 === incoming.length) {
      if (outgoing.length > 0) {
        let Incoming = closure_16.Outgoing;
      }
      return Incoming;
    }
    Incoming = closure_16.Incoming;
  }), 2);
  const first1 = tmp19[0];
  Outgoing = tmp19[1];
  const items8 = [analyticsLocations];
  onPress = gameRelationshipsByType1.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items8);
  const callback1 = gameRelationshipsByType1.useCallback((arg0) => {
    if (1 === arg0) {
      const element = { type: "section", props: null };
      const obj = { title: null };
      const intl = analyticsLocations(1115).intl;
      obj.title = intl.string(analyticsLocations(1115).t["NHpP/k"]);
      element.props = obj;
      return element;
    }
  }, []);
  const obj5 = analyticsLocations(563);
  const navigation = analyticsLocations(1484).useNavigation();
  const items9 = [first1, incomingData, outgoingData, onPress, spam.length, ignoredUsers.length, navigation];
  let tmp26 = first1 === Outgoing.Outgoing;
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
              const intl = analyticsLocations(dependencyMap[29]).intl;
              obj.label = intl.string(analyticsLocations(dependencyMap[29]).t.fUQoqD);
              const obj2 = { variant: "text-sm/medium", color: "text-muted", children: arr.length };
              obj.trailing = outgoingData(analyticsLocations(dependencyMap[33]).Text, obj2);
              tmp4 = outgoingData(analyticsLocations(dependencyMap[32]).TableRow, obj);
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
              const intl2 = analyticsLocations(dependencyMap[29]).intl;
              obj3.label = intl2.string(analyticsLocations(dependencyMap[29]).t.en1Gkz);
              const obj4 = { variant: "text-sm/medium", color: "text-muted", children: arr3.length };
              obj3.trailing = outgoingData(analyticsLocations(dependencyMap[33]).Text, obj4);
              tmp6 = outgoingData(analyticsLocations(dependencyMap[32]).TableRow, obj3);
            }
            children[1] = tmp6;
            return first1(analyticsLocations(dependencyMap[31]).TableRowGroup, { hasIcons: false, children });
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
  }, items9);
  if (tmp26) {
    tmp26 = 0 === outgoing.length;
  }
  if (!tmp26) {
    let tmp27 = first1 === tmp25.Incoming;
    if (tmp27) {
      tmp27 = 0 === incoming.length;
    }
    if (tmp27) {
      tmp27 = 0 === spam.length;
    }
    if (tmp27) {
      tmp27 = 0 === ignoredUserIds.length;
    }
    tmp26 = tmp27;
  }
  let tmp28 = first1 === tmp25.Incoming;
  if (tmp28) {
    tmp28 = incoming.length >= incomingData;
  }
  const obj6 = analyticsLocations(1484);
  const obj7 = {
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
  const obj8 = { id: Outgoing.Incoming.toString(), label: null, page: null };
  let intl = tmp4(1115).intl;
  obj8.label = intl.string(analyticsLocations(1115).t.bekioP);
  const items10 = [obj8, ];
  const obj9 = { id: Outgoing.Outgoing.toString(), label: null, page: null };
  let intl2 = tmp4(1115).intl;
  obj9.label = intl2.string(analyticsLocations(1115).t.tWqcIF);
  items10[1] = obj9;
  obj7.items = items10;
  const segmentedControlState = analyticsLocations(9072).useSegmentedControlState(obj7);
  const obj10 = { value: analyticsLocations, children: null };
  const items11 = [outgoingData(first(5430), { absolute: true }), ];
  const obj11 = { style: tmp.container, children: null };
  const tmp4Result = analyticsLocations(9072);
  const items12 = [outgoingData(pendingIncomingIds, { style: tmp.tabs, children: outgoingData(analyticsLocations(9073).SegmentedControl, { state: segmentedControlState }) }), , ];
  let tmp32Result = null;
  if (tmp28) {
    const obj13 = { style: tmp.clearAllContainer, children: null };
    const obj14 = {
      style: tmp.clearAll,
      onPress() {
          const lazyResult = noop.lazy(() => analyticsLocations(paths[13])(paths[12], paths.paths));
          useAlertStore.openAlert("clear-all-incoming-requests", closure_2_14(lazyResult, { incomingRequestCount: incoming.length }));
        },
      children: null
    };
    const obj15 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl3 = tmp4(1115).intl;
    obj15.children = intl3.string(tmp4(1115).t.O8k7O4);
    obj14.children = tmp32(tmp4(4825).Text, obj15);
    obj13.children = tmp32(tmp4(5428).PressableOpacity, obj14);
    tmp32Result = tmp32(tmp33, obj13);
  }
  items12[1] = tmp32Result;
  if (tmp26) {
    const obj16 = { style: tmp.noResultsContainer, children: null };
    if (first1 === tmp25.Incoming) {
      const intl5 = tmp4(1115).intl;
      let stringResult = intl5.string(tmp4(1115).t["7uvAKe"]);
    } else {
      const intl4 = tmp4(1115).intl;
      stringResult = intl4.string(tmp4(1115).t["yvzX/Z"]);
    }
    const obj17 = { title: stringResult, illustration: null, disableBackgroundOverlay: true };
    WumpusCouchSpotIllustration = tmp4(14620).WumpusCouchSpotIllustration;
    obj17.illustration = WumpusCouchSpotIllustration;
    obj16.children = tmp32(tmp2(10446), obj17);
    tmp32(tmp33, obj16);
    const tmp2Result = tmp2(10446);
  } else {
    if (first1 === tmp25.Incoming) {
      outgoingSection = incomingSection;
    }
    const obj18 = { sections: outgoingSection, getItemProps: callback2, getSectionProps: callback1 };
    items12[2] = tmp32(tmp4(10314).UsersFastList, obj18);
    obj11.children = items12;
    items11[1] = tmp31(tmp33, obj11);
    obj10.children = items11;
    return tmp31(tmp4(6578).AnalyticsLocationProvider, obj10);
  }
};