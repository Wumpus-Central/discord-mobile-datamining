// discord_app/modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../game_relationships/GameRelationshipStore.tsx";
import closure_6 from "../../../../../stores/RelationshipStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, requestsButtonContainer: null, emptyContainer: null, buttonContainer: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_8, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[2] = { justifyContent: "center", flexGrow: 1 };
let obj1 = { marginHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[3] = { flexDirection: "row", marginBottom: ThemesDefault.space.PX_16, width: "100%" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flexDirection: "row", marginBottom: ThemesDefault.space.PX_16, width: "100%" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default function FriendsScreen() {
  let obj = navigation(analyticsLocations[7]);
  navigation = obj.useNavigation();
  let tmp2 = callback2();
  importDefault = tmp2;
  analyticsLocations = importDefault(analyticsLocations[8])(importDefault(analyticsLocations[9]).FRIENDS_LIST).analyticsLocations;
  const bottom = importDefault(analyticsLocations[10])().bottom;
  const tmp3 = importDefault(analyticsLocations[8]);
  let items = [spam, outgoing];
  const stateFromStoresObject = navigation(analyticsLocations[11]).useStateFromStoresObject(items, () => {
    const obj = { incoming: navigation(analyticsLocations[12]).getIncomingFriendRequestCount(items), outgoing: null, spam: null, pendingIgnored: null };
    items = [spam, outgoing];
    const obj2 = navigation(analyticsLocations[12]);
    const items1 = [spam, outgoing];
    obj[1] = navigation(analyticsLocations[12]).getOutgoingFriendRequestCount(items1);
    obj[2] = spam.getSpamCount();
    obj[3] = spam.getPendingIgnoredCount();
    return obj;
  });
  const incoming = stateFromStoresObject.incoming;
  outgoing = stateFromStoresObject.outgoing;
  spam = stateFromStoresObject.spam;
  const pendingIgnored = stateFromStoresObject.pendingIgnored;
  let items1 = [analyticsLocations];
  const items2 = [navigation];
  const callback = bottom.useCallback((id) => {
    let obj = navigation(analyticsLocations[13]);
    const result = obj.dismissGlobalKeyboard();
    obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    lib(analyticsLocations[14])(obj);
  }, items1);
  const callback1 = bottom.useCallback((defaultSelectedUserId) => {
    navigation.navigate("friends", { screen: "new-message", params: { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" } });
  }, items2);
  const effect = bottom.useEffect(() => {
    lib(analyticsLocations[15])({ tab_opened: null });
    lib(analyticsLocations[16])({ tab_opened: null });
  }, []);
  const items3 = [incoming, navigation, outgoing, spam, pendingIgnored];
  const items4 = [bottom, incoming, navigation, outgoing, tmp2, spam];
  const memo = bottom.useMemo(() => {
    const sum = incoming + spam + pendingIgnored;
    let tmp2 = sum > 0;
    if (!tmp2) {
      tmp2 = outgoing > 0;
    }
    const items = [];
    if (tmp2) {
      let obj = { icon: null, IconComponent: null, iconVariant: "default", label: null, subLabel: null, onPress: null };
      obj[0] = lib(analyticsLocations[17]);
      obj[1] = navigation(analyticsLocations[18]).SendMessageIcon;
      const intl = navigation(analyticsLocations[19]).intl;
      obj[3] = intl.string(navigation(analyticsLocations[19]).t.fyA115);
      const intl2 = navigation(analyticsLocations[19]).intl;
      obj = { incoming: null, outgoing: null };
      obj[0] = sum;
      obj[1] = outgoing;
      obj[4] = intl2.formatToPlainString(navigation(analyticsLocations[19]).t["1IEawz"], obj);
      obj[5] = function onPress() {
        return navigation.navigate("friends", { screen: "requests" });
      };
      items.push(obj);
    }
    return items;
  }, items3);
  const memo1 = bottom.useMemo(() => {
    let obj = { style: lib.container, children: null };
    if (incoming + outgoing + spam <= 0) {
      const items = [null, ];
      obj = { title: null, fullHeight: true, containerStyle: null, illustration: null, children: null };
      const intl3 = navigation(analyticsLocations[19]).intl;
      obj[0] = intl3.string(navigation(analyticsLocations[19]).t["oi+B4p"]);
      obj[2] = tmp3.emptyContainer;
      obj[3] = navigation(analyticsLocations[22]).WumpusCouchSpotIllustration;
      obj = { style: null, children: null };
      const items1 = [tmp3.buttonContainer, ];
      obj1 = { paddingBottom: null };
      obj1[0] = bottom;
      items1[1] = obj1;
      obj[0] = items1;
      const obj2 = { text: null, size: "lg", onPress: null, grow: true };
      const intl4 = navigation(analyticsLocations[19]).intl;
      obj2[0] = intl4.string(navigation(analyticsLocations[19]).t.zIJnA6);
      obj2[2] = function onPress() {
        return navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Friends Screen" } });
      };
      obj[1] = pendingIgnored(navigation(analyticsLocations[23]).Button, obj2);
      obj[4] = pendingIgnored(tmp2, obj);
      items[1] = pendingIgnored(lib(analyticsLocations[21]), obj);
      obj[1] = items;
      return tmp(tmp2, obj);
    } else {
      const obj3 = { style: null, children: null };
      obj3[0] = tmp3.requestsButtonContainer;
      let obj6 = analyticsLocations;
      let obj4 = { start: true, end: true, icon: null, trailing: null, label: null, subLabel: null, onPress: null };
      const obj5 = { source: null };
      obj5[0] = lib(analyticsLocations[17]);
      obj4[2] = pendingIgnored(navigation(analyticsLocations[20]).TableRow.Icon, obj5);
      obj4[3] = pendingIgnored(navigation(analyticsLocations[20]).TableRow.Arrow, {});
      const intl5 = navigation(analyticsLocations[19]).intl;
      obj4[4] = intl5.string(navigation(analyticsLocations[19]).t.fyA115);
      if (tmp4 + tmp5 > 0) {
        const intl2 = _1IEawz(obj6[19]).intl;
        obj6 = { incoming: null, outgoing: null };
        obj6[0] = tmp4;
        obj6[1] = tmp5;
        let formatToPlainStringResult = intl2.formatToPlainString(_1IEawz, obj6);
      } else {
        const intl = _1IEawz(obj6[19]).intl;
        const obj7 = { spam: null };
        obj7[0] = tmp6;
        formatToPlainStringResult = intl.formatToPlainString(_1IEawz(obj6[19]).t.e6BtLq, obj7);
      }
      obj4[5] = formatToPlainStringResult;
      obj4[6] = function onPress() {
        if (closure_4 + closure_5 > 0) {
          navigation.navigate("friends", { screen: "requests" });
        } else {
          navigation.navigate("friends", { screen: "spam-requests" });
        }
      };
      obj4 = tmp15(navigation(analyticsLocations[20]).TableRow, obj4);
      obj3[1] = obj4;
      pendingIgnored(tmp2, obj3);
    }
  }, items4);
  obj = { value: analyticsLocations, children: null };
  const items5 = [pendingIgnored(importDefault(analyticsLocations[24]), { onSelectUser: callback, handleMessage: callback1, actions: memo, withAffinitySuggestions: false, withGameFriends: true, defaultNoResultsFound: memo1, hideSearchOnDefaultNoResults: true, disableThemedGradient: true }), pendingIgnored(navigation(analyticsLocations[25]).TTIFirstContentfulPaint, { label: "friends" })];
  obj[1] = items5;
  return callback(navigation(analyticsLocations[8]).AnalyticsLocationProvider, obj);
};