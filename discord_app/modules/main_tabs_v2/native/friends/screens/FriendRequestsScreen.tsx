// discord_app/modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import NotificationCenterItemsActions from "../../../../notification_center/NotificationCenterItemsActions.tsx";
import getPendingRelationshipIds from "../hooks/getPendingRelationshipIds.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import NotificationCenterItemsStore from "../../../../notification_center/NotificationCenterItemsStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

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
const UserRowModes = fn(10860).UserRowModes;
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsSections: closure_11, RelationshipTypes: closure_12 } = Constants);
let closure_13 = fn(10874).MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let Outgoing = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
fn(4560);
let createStyles = {
  container: { flex: 1 },
  noResultsContainer: null,
  clearAllContainer: null,
  clearAll: null,
  tabs: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles.noResultsContainer = createStyles;
createStyles.clearAllContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  justifyContent: "flex-end",
  flexDirection: "row",
};
let obj1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  justifyContent: "flex-end",
  flexDirection: "row",
};
createStyles.clearAll = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_16,
  minWidth: 2 * nativeDefault.space.PX_64,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  paddingVertical: 5,
  borderWidth: 3,
};
let obj2 = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_16,
  minWidth: 2 * nativeDefault.space.PX_64,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  paddingVertical: 5,
  borderWidth: 3,
};
createStyles.tabs = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
};
let closure_17 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default function FriendRequestsScreen() {
  let tmp = onPress();
  let WumpusCouchSpotIllustration = dependencyMap;
  const analyticsLocations = first(7162)(first(7182).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(563);
  let items = [pendingOutgoingIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const localItems = pendingOutgoingIds.localItems;
    return localItems.filter((type) => {
      let tmp3 =
        type.type === analyticsLocations(dependencyMap[16]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (!tmp3) {
        tmp3 =
          type.type ===
          analyticsLocations(dependencyMap[16]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      }
      return tmp3;
    });
  });
  closure_129_0 = stateFromStoresArray;
  const NotificationCenterAckedBeforeId = analyticsLocations(1935).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  closure_129_1 = setting;
  let items1 = [stateFromStoresArray, setting];
  const effect = gameRelationshipsByType1.useEffect(() => {
    if (analyticsLocations.length > 0) {
      const mapped = analyticsLocations.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      const result = NotificationCenterItemsActions.markNotificationCenterLocalItemsAcked(found);
      const result1 = NotificationCenterItemsActions.bulkMarkNotificationCenterItemsAcked(
        analyticsLocations.filter((item) => !analyticsLocations(closure_2[19]).isRemoteAcked(item, first)),
      );
    }
  }, items1);
  const effect1 = gameRelationshipsByType1.useEffect(() => {
    first(1242);
    const obj = { friend_add_type: spam.FRIENDS_REQUESTS_MODAL };
    obj.track(outgoing.FRIEND_ADD_VIEWED, obj);
  }, []);
  let obj1 = analyticsLocations(563);
  const items2 = [spamIds];
  const tmp9 = gameRelationshipsByType(
    obj1.useStateFromStoresArray(items2, () => {
      const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
      return items;
    }),
    2,
  );
  first = tmp9[0];
  dependencyMap = tmp11;
  let obj2 = analyticsLocations(13063);
  gameRelationshipsByType = obj2.useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let obj3 = analyticsLocations(13063);
  gameRelationshipsByType1 = obj3.useGameRelationshipsByType(ignoredUsers.PENDING_OUTGOING);
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
  first(7168)(memo);
  const items4 = [first, tmp9[1]];
  const memo1 = gameRelationshipsByType1.useMemo(
    () => getPendingRelationshipIds.getPendingRelationshipIds(first, closure_2),
    items4,
  );
  const pendingIncomingIds = memo1.pendingIncomingIds;
  pendingOutgoingIds = memo1.pendingOutgoingIds;
  spamIds = memo1.spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  let obj4 = analyticsLocations(563);
  const items5 = [ignoredUserIds];
  const items6 = [
    ignoredUserIds,
    gameRelationshipsByType,
    gameRelationshipsByType1,
    pendingIncomingIds,
    pendingOutgoingIds,
    spamIds,
  ];
  const stateFromStores = obj4.useStateFromStores(
    items5,
    () => {
      const mapped = pendingIncomingIds.map((item) => ({ user: authStore.getUser(item), isGameRelationship: false }));
      const found = mapped.filter((user) => null != user.user);
      const mapped1 = gameRelationshipsByType.map((applicationId) => ({
        user: authStore.getUser(applicationId.id),
        isGameRelationship: true,
        applicationId: applicationId.applicationId,
      }));
      const found1 = mapped1.filter((user) => null != user.user);
      const mapped2 = pendingOutgoingIds.map((item) => ({ user: authStore.getUser(item), isGameRelationship: false }));
      const found2 = mapped2.filter((user) => null != user.user);
      const mapped3 = gameRelationshipsByType1.map((applicationId) => ({
        user: authStore.getUser(applicationId.id),
        isGameRelationship: true,
        applicationId: applicationId.applicationId,
      }));
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
    },
    items6,
    first(1332),
  );
  const incoming = stateFromStores.incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  ignoredUsers = stateFromStores.ignoredUsers;
  const items7 = [ignoredUsers, incoming, outgoing, spam];
  const memo2 = gameRelationshipsByType1.useMemo(() => {
    let obj = { incomingData: null, incomingSection: null, outgoingData: null, outgoingSection: null };
    obj = { items: incoming, relationship: constants.PENDING_INCOMING };
    obj.incomingData = obj;
    const items = [incoming.length];
    let num = 0;
    if (spam.length + ignoredUsers.length > 0) {
      num = 1;
    }
    items[1] = num;
    obj.incomingSection = items;
    obj = { items: outgoing, relationship: constants.PENDING_OUTGOING };
    obj.outgoingData = obj;
    const items1 = [outgoing.length];
    obj.outgoingSection = items1;
    return obj;
  }, items7);
  const incomingData = memo2.incomingData;
  const outgoingData = memo2.outgoingData;
  ({ outgoingSection, incomingSection } = memo2);
  const tmp19 = gameRelationshipsByType(
    gameRelationshipsByType1.useState(() => {
      if (0 === incoming.length) {
        if (outgoing.length > 0) {
          let Incoming = closure_16.Outgoing;
        }
        return Incoming;
      }
      Incoming = closure_16.Incoming;
    }),
    2,
  );
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
      const intl = analyticsLocations(1114).intl;
      obj.title = intl.string(analyticsLocations(1114).t["NHpP/k"]);
      element.props = obj;
      return element;
    }
  }, []);
  let obj5 = analyticsLocations(1483);
  const navigation = obj5.useNavigation();
  const items9 = [first1, incomingData, outgoingData, onPress, spam.length, ignoredUsers.length, navigation];
  let tmp26 = first1 === Outgoing.Outgoing;
  const callback2 = gameRelationshipsByType1.useCallback((arg0, arg1) => {
    if (1 === arg0) {
      let obj = {
        type: "custom",
        component() {
          let tmp4 = null;
          if (length.length > 0) {
            let obj = {
              onPress() {
                navigation.navigate("friends", { screen: "spam-requests" });
              },
              label: null,
              trailing: null,
              arrow: true,
            };
            const intl = analyticsLocations(dependencyMap[29]).intl;
            obj.label = intl.string(analyticsLocations(dependencyMap[29]).t.fUQoqD);
            obj = { variant: "text-sm/medium", color: "text-muted", children: arr.length };
            obj.trailing = outgoingData(analyticsLocations(dependencyMap[33]).Text, obj);
            tmp4 = outgoingData(analyticsLocations(dependencyMap[32]).TableRow, obj);
          }
          const children = [tmp4];
          let tmp6 = null;
          if (length2.length > 0) {
            obj = {
              onPress() {
                navigation.navigate("friends", { screen: "ignored-user-requests" });
              },
              label: null,
              trailing: null,
              arrow: true,
            };
            const intl2 = analyticsLocations(dependencyMap[29]).intl;
            obj.label = intl2.string(analyticsLocations(dependencyMap[29]).t.en1Gkz);
            const obj1 = { variant: "text-sm/medium", color: "text-muted", children: arr3.length };
            obj.trailing = outgoingData(analyticsLocations(dependencyMap[33]).Text, obj1);
            tmp6 = outgoingData(analyticsLocations(dependencyMap[32]).TableRow, obj);
          }
          children[1] = tmp6;
          return first1(analyticsLocations(dependencyMap[31]).TableRowGroup, { hasIcons: false, children });
        },
        key: "spamRequests",
        itemType: "spamRequests",
      };
      return obj;
    } else {
      const tmp = first1 === closure_16.Incoming ? incomingData : outgoingData;
      const items = tmp.items;
      const element = { type: "user", props: null };
      obj = {
        type: tmp.relationship,
        user: items[arg1].user,
        onPress,
        mode: UserRowModes.ACTIONS,
        start: 0 === arg1,
        end: arg1 === items.length - 1,
        applicationId: items[arg1].applicationId,
        isGameRelationship: items[arg1].isGameRelationship,
      };
      element.props = obj;
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
  let tmp3 = first(7162);
  obj = {
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
    items: null,
  };
  obj = { id: Outgoing.Incoming.toString(), label: null, page: null };
  let intl = tmp4(1114).intl;
  obj.label = intl.string(analyticsLocations(1114).t.bekioP);
  const items10 = [obj];
  obj1 = { id: Outgoing.Outgoing.toString(), label: null, page: null };
  let intl2 = tmp4(1114).intl;
  obj1.label = intl2.string(analyticsLocations(1114).t.tWqcIF);
  items10[1] = obj1;
  obj.items = items10;
  const segmentedControlState = analyticsLocations(9792).useSegmentedControlState(obj);
  obj2 = { value: analyticsLocations, children: null };
  const items11 = [outgoingData(first(5125), { absolute: true })];
  obj3 = { style: tmp.container, children: null };
  obj4 = { style: tmp.tabs, children: outgoingData(tmp4(9793).SegmentedControl, { state: segmentedControlState }) };
  const items12 = [outgoingData(pendingIncomingIds, obj4), ,];
  let tmp32Result = null;
  if (tmp28) {
    obj5 = { style: tmp.clearAllContainer, children: null };
    const obj6 = {
      style: tmp.clearAll,
      onPress() {
        const lazyResult = noop.lazy(() => analyticsLocations(paths[13])(paths[12], paths.paths));
        useAlertStore.openAlert(
          "clear-all-incoming-requests",
          closure_2_14(lazyResult, { incomingRequestCount: incoming.length }),
        );
      },
      children: null,
    };
    const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl3 = tmp4(1114).intl;
    obj7.children = intl3.string(tmp4(1114).t.O8k7O4);
    obj6.children = tmp32(tmp4(4556).Text, obj7);
    obj5.children = tmp32(tmp4(5123).PressableOpacity, obj6);
    tmp32Result = tmp32(tmp33, obj5);
  }
  items12[1] = tmp32Result;
  if (tmp26) {
    const obj8 = { style: tmp.noResultsContainer, children: null };
    if (first1 === tmp25.Incoming) {
      const intl5 = tmp4(1114).intl;
      let stringResult = intl5.string(tmp4(1114).t["7uvAKe"]);
    } else {
      const intl4 = tmp4(1114).intl;
      stringResult = intl4.string(tmp4(1114).t["yvzX/Z"]);
    }
    const obj9 = { title: stringResult, illustration: null, disableBackgroundOverlay: true };
    WumpusCouchSpotIllustration = tmp4(5692).WumpusCouchSpotIllustration;
    obj9.illustration = WumpusCouchSpotIllustration;
    obj8.children = tmp32(tmp2(10994), obj9);
    tmp32Result = tmp32(tmp33, obj8);
    const tmp2Result = tmp2(10994);
  } else {
    if (first1 === tmp25.Incoming) {
      outgoingSection = incomingSection;
    }
    const obj10 = { sections: outgoingSection, getItemProps: callback2, getSectionProps: callback1 };
    items12[2] = tmp32(tmp4(10866).UsersFastList, obj10);
    obj3.children = items12;
    items11[1] = tmp31(tmp33, obj3);
    obj2.children = items11;
    return tmp31(tmp4(7162).AnalyticsLocationProvider, obj2);
  }
}
