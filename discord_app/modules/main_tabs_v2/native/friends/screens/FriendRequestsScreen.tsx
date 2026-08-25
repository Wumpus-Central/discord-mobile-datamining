// discord_app/modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx
import DISCORD_EPOCHDefault from "../../../../../utils/SnowflakeUtils.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../notification_center/NotificationCenterItemsStore.tsx";
import closure_7 from "../../../../../stores/RelationshipStore.tsx";
import closure_8 from "../../../../../stores/UserStore.tsx";
import { UserRowModes } from "../../shared_components/user_list/UserRowConstants.tsx";
import ME from "../../../../../Constants.tsx";
import { MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL as closure_13 } from "../../../../people/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function compareUserItems(user, user2) {
  if (user.user.id === user2.user.id) {
    let compareResult = DISCORD_EPOCHDefault.compare(user.applicationId, user2.applicationId);
    const obj2 = DISCORD_EPOCHDefault;
  } else {
    compareResult = DISCORD_EPOCHDefault.compare(user.user.id, user2.user.id);
    const obj = DISCORD_EPOCHDefault;
  }
  return compareResult;
}
({ AnalyticEvents: c10, AnalyticsSections: unpackModuleId, RelationshipTypes: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { Incoming: 0, [0]: "Incoming", Outgoing: 1, [1]: "Outgoing" };
createCacheKey = { container: { flex: 1 }, noResultsContainer: null, clearAllContainer: null, clearAll: null, tabs: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, justifyContent: "flex-end", flexDirection: "row" };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_16, minWidth: 2 * ThemesDefault.space.PX_64, borderRadius: ThemesDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
let obj2 = { backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_16, minWidth: 2 * ThemesDefault.space.PX_64, borderRadius: ThemesDefault.radii.round, alignItems: "center", paddingVertical: 5, borderWidth: 3 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8 };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsScreen.tsx");

export default function FriendRequestsScreen() {
  let tmp = callback();
  let WumpusCouchSpotIllustration = dependencyMap;
  const analyticsLocations = first(5834)(first(5854).FRIEND_REQUESTS).analyticsLocations;
  let stateFromStoresArray;
  first = undefined;
  let obj = stateFromStoresArray(647);
  let items = [pendingOutgoingIds];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const localItems = pendingOutgoingIds.localItems;
    return localItems.filter((type) => {
      let tmp3 = type.type === callback(table[16]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (!tmp3) {
        tmp3 = type.type === callback(table[16]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      }
      return tmp3;
    });
  });
  const NotificationCenterAckedBeforeId = stateFromStoresArray(4070).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  first = setting;
  let items1 = [stateFromStoresArray, setting];
  const effect = gameRelationshipsByType1.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const mapped = arr.map((local_id) => local_id.local_id);
      const _Boolean = Boolean;
      const found = mapped.filter(Boolean);
      const result = stateFromStoresArray(15771).markNotificationCenterLocalItemsAcked(found);
      const obj = stateFromStoresArray(15771);
      const result1 = stateFromStoresArray(15771).bulkMarkNotificationCenterItemsAcked(arr.filter((addResult) => !closure_1_0(closure_1_2[19]).isRemoteAcked(addResult, closure_1)));
      const obj2 = stateFromStoresArray(15771);
    }
  }, items1);
  const effect1 = gameRelationshipsByType1.useEffect(() => {
    let obj = first(698);
    obj = { friend_add_type: spam.FRIENDS_REQUESTS_MODAL };
    obj.track(outgoing.FRIEND_ADD_VIEWED, obj);
  }, []);
  obj1 = stateFromStoresArray(647);
  const items2 = [spamIds];
  const tmp9 = gameRelationshipsByType(obj1.useStateFromStoresArray(items2, () => {
    const items = [spamIds.getMutableRelationships(), spamIds.getVersion()];
    return items;
  }), 2);
  first = tmp9[0];
  dependencyMap = tmp11;
  let obj2 = stateFromStoresArray(12545);
  gameRelationshipsByType = obj2.useGameRelationshipsByType(ignoredUsers.PENDING_INCOMING);
  let obj3 = stateFromStoresArray(12545);
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
  first(5840)(memo);
  const items4 = [first, tmp9[1]];
  const memo1 = gameRelationshipsByType1.useMemo(() => stateFromStoresArray(16128).getPendingRelationshipIds(first, dependencyMap), items4);
  const pendingIncomingIds = memo1.pendingIncomingIds;
  pendingOutgoingIds = memo1.pendingOutgoingIds;
  spamIds = memo1.spamIds;
  const ignoredUserIds = memo1.ignoredUserIds;
  let obj4 = stateFromStoresArray(647);
  const items5 = [ignoredUserIds];
  const items6 = [ignoredUserIds, gameRelationshipsByType, gameRelationshipsByType1, pendingIncomingIds, pendingOutgoingIds, spamIds];
  const stateFromStores = obj4.useStateFromStores(items5, () => {
    const mapped = pendingIncomingIds.map((arg0) => ({ user: authStore.getUser(arg0), isGameRelationship: false }));
    const found = mapped.filter((user) => null != user.user);
    const mapped1 = gameRelationshipsByType.map((applicationId) => ({ user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found1 = mapped1.filter((user) => null != user.user);
    const mapped2 = pendingOutgoingIds.map((arg0) => ({ user: authStore.getUser(arg0), isGameRelationship: false }));
    const found2 = mapped2.filter((user) => null != user.user);
    const mapped3 = gameRelationshipsByType1.map((applicationId) => ({ user: authStore.getUser(applicationId.id), isGameRelationship: true, applicationId: applicationId.applicationId }));
    const found3 = mapped3.filter((user) => null != user.user);
    const obj = { incoming: items.sort(navigation), outgoing: items1.sort(navigation), spam: null, ignoredUsers: null };
    items = [...found1];
    items1 = [...found3];
    const mapped4 = spamIds.map((arg0) => ({ user: authStore.getUser(arg0) }));
    obj[2] = mapped4.filter((user) => null != user.user);
    const mapped5 = ignoredUserIds.map((arg0) => ({ user: authStore.getUser(arg0) }));
    obj[3] = mapped5.filter((user) => null != user.user);
    return obj;
  }, items6, first(659));
  const incoming = stateFromStores.incoming;
  const outgoing = stateFromStores.outgoing;
  const spam = stateFromStores.spam;
  ignoredUsers = stateFromStores.ignoredUsers;
  const items7 = [ignoredUsers, incoming, outgoing, spam];
  const memo2 = gameRelationshipsByType1.useMemo(() => {
    obj = { incomingData: obj, incomingSection: null, outgoingData: null, outgoingSection: null };
    obj = { items: incoming, relationship: ignoredUsers.PENDING_INCOMING };
    const items = [incoming.length, ];
    let num = 0;
    if (spam.length + ignoredUsers.length > 0) {
      num = 1;
    }
    items[1] = num;
    obj[1] = items;
    obj = { items: outgoing, relationship: ignoredUsers.PENDING_OUTGOING };
    obj[2] = obj;
    const items1 = [outgoing.length];
    obj[3] = items1;
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
  let Outgoing = tmp19[1];
  const items8 = [analyticsLocations];
  callback = gameRelationshipsByType1.useCallback((id) => {
    first(8930)({ userId: id.id, localUser: id, sourceAnalyticsLocations: stateFromStoresArray });
  }, items8);
  const callback1 = gameRelationshipsByType1.useCallback((arg0) => {
    if (1 === arg0) {
      let obj = { type: "section", props: null };
      obj = { title: null };
      const intl = stateFromStoresArray(1236).intl;
      obj[0] = intl.string(stateFromStoresArray(1236).t["NHpP/k"]);
      obj[1] = obj;
      return obj;
    }
  }, []);
  let obj5 = stateFromStoresArray(1500);
  const navigation = obj5.useNavigation();
  const items9 = [first1, incomingData, outgoingData, callback, spam.length, ignoredUsers.length, navigation];
  let tmp26 = first1 === Outgoing.Outgoing;
  const callback2 = gameRelationshipsByType1.useCallback((arg0, arg1) => {
    if (1 === arg0) {
      let obj = { type: "custom", component: null, key: "spamRequests", itemType: "spamRequests" };
      obj[1] = function component() {
        let tmp4 = null;
        if (length.length > 0) {
          let obj = { onPress: null, label: null, trailing: null, arrow: true };
          obj[0] = function onPress() {
            navigation.navigate("friends", { screen: "spam-requests" });
          };
          const intl = tmp2(tmp3[29]).intl;
          obj[1] = intl.string(tmp2(tmp3[29]).t.fUQoqD);
          obj = { variant: "text-sm/medium", color: "text-muted", children: null };
          obj[2] = arr.length;
          obj[2] = closure_1_14(tmp2(tmp3[33]).Text, obj);
          tmp4 = closure_1_14(tmp2(tmp3[32]).TableRow, obj);
        }
        const children = [tmp4, ];
        let tmp6 = null;
        if (length2.length > 0) {
          obj = { onPress: null, label: null, trailing: null, arrow: true };
          obj[0] = function onPress() {
            navigation.navigate("friends", { screen: "ignored-user-requests" });
          };
          const intl2 = tmp2(tmp3[29]).intl;
          obj[1] = intl2.string(tmp2(tmp3[29]).t.en1Gkz);
          obj1 = { variant: "text-sm/medium", color: "text-muted", children: null };
          obj1[2] = arr3.length;
          obj[2] = closure_1_14(tmp2(tmp3[33]).Text, obj1);
          tmp6 = closure_1_14(tmp2(tmp3[32]).TableRow, obj);
        }
        children[1] = tmp6;
        return closure_1_15(closure_1_0(closure_1_2[31]).TableRowGroup, { hasIcons: false, children });
      };
      return obj;
    } else {
      const tmp = first1 === closure_16.Incoming ? incomingData : outgoingData;
      const items = tmp.items;
      obj = { type: "user", props: null };
      obj = { type: null, user: null, onPress: null, mode: null, start: null, end: null, applicationId: null, isGameRelationship: null };
      obj[0] = tmp.relationship;
      obj[1] = items[arg1].user;
      obj[2] = callback;
      obj[3] = incoming.ACTIONS;
      obj[4] = 0 === arg1;
      obj[5] = arg1 === items.length - 1;
      obj[6] = items[arg1].applicationId;
      obj[7] = items[arg1].isGameRelationship;
      obj[1] = obj;
      return obj;
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
  let tmp3 = first(5834);
  obj = {
    pageWidth: 0,
    defaultIndex: first1,
    onSetActiveIndex(arg0) {
      if (0 === arg0) {
        let Outgoing = closure_16.Incoming;
      } else {
        Outgoing = closure_16.Outgoing;
      }
      closure_16(Outgoing);
    },
    items: null
  };
  obj = { id: str.toString(), label: null, page: null };
  let intl = tmp4(1236).intl;
  obj[1] = intl.string(stateFromStoresArray(1236).t.bekioP);
  const items10 = [obj, ];
  obj1 = { id: str2.toString(), label: null, page: null };
  let intl2 = tmp4(1236).intl;
  obj1[1] = intl2.string(stateFromStoresArray(1236).t.tWqcIF);
  items10[1] = obj1;
  obj[3] = items10;
  const segmentedControlState = stateFromStoresArray(9103).useSegmentedControlState(obj);
  obj2 = { value: analyticsLocations, children: null };
  const items11 = [outgoingData(first(4951), { absolute: true }), ];
  obj3 = { style: tmp.container, children: null };
  obj4 = { style: tmp.tabs, children: outgoingData(tmp4(9289).SegmentedControl, { state: segmentedControlState }) };
  const items12 = [outgoingData(pendingIncomingIds, obj4), , ];
  let tmp32Result = null;
  if (tmp28) {
    obj5 = { style: null, children: null };
    obj5[0] = tmp.clearAllContainer;
    const obj6 = { style: null, onPress: null, children: null };
    obj6[0] = tmp.clearAll;
    obj6[1] = function onPress() {
      const lazyResult = gameRelationshipsByType1.lazy(() => callback(paths[13])(paths[12], paths.paths));
      stateFromStoresArray(4746).openAlert("clear-all-incoming-requests", outgoingData(lazyResult, { incomingRequestCount: incoming.length }));
    };
    const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl3 = tmp4(1236).intl;
    obj7[2] = intl3.string(tmp4(1236).t.O8k7O4);
    obj6[2] = tmp32(tmp4(4376).Text, obj7);
    obj5[1] = tmp32(tmp4(4949).PressableOpacity, obj6);
    tmp32Result = tmp32(tmp33, obj5);
  }
  items12[1] = tmp32Result;
  if (tmp26) {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.noResultsContainer;
    if (first1 === tmp25.Incoming) {
      const intl5 = tmp4(1236).intl;
      let stringResult = intl5.string(tmp4(1236).t["7uvAKe"]);
    } else {
      const intl4 = tmp4(1236).intl;
      stringResult = intl4.string(tmp4(1236).t["yvzX/Z"]);
    }
    const obj9 = { title: null, illustration: null, disableBackgroundOverlay: true };
    obj9[0] = stringResult;
    WumpusCouchSpotIllustration = tmp4(6136).WumpusCouchSpotIllustration;
    obj9[1] = WumpusCouchSpotIllustration;
    obj8[1] = tmp32(tmp2(11250), obj9);
    tmp32Result = tmp32(tmp33, obj8);
    const tmp2Result = tmp2(11250);
  } else {
    if (first1 === tmp25.Incoming) {
      outgoingSection = incomingSection;
    }
    const obj10 = { sections: null, getItemProps: null, getSectionProps: null };
    obj10[0] = outgoingSection;
    obj10[1] = callback2;
    obj10[2] = callback1;
    items12[2] = tmp32(tmp4(9776).UsersFastList, obj10);
    obj3[1] = items12;
    items11[1] = tmp31(tmp33, obj3);
    obj2[1] = items11;
    return tmp31(tmp4(5834).AnalyticsLocationProvider, obj2);
  }
};