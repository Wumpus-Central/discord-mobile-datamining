// === Module 16951: FriendsScreen ===

// Module 16951 (FriendsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import SendMessageIcon from "SendMessageIcon" /* 4847 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import TableRow2 from "TableRow" /* 6000 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import NoResultsDefault from "NoResults" /* 10739 */;
import WumpusCouchSpotIllustration from "WumpusCouchSpotIllustration" /* 14933 */;
import AssetRegistryDefault from "AssetRegistry" /* 16424 */;
import react from "react" /* 19 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7155 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, requestsButtonContainer: obj3, emptyContainer: { justifyContent: "center", flexGrow: 1 }, buttonContainer: obj4 };
obj2 = { paddingTop: nativeDefault.space.PX_8, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj4 = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, width: "100%" };
let closure_9 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let analyticsLocations;
  let incoming;
  let pendingIgnored;
  let spam;
  let tmp16;
  let tmp26;
  let tmp8;
  let tmp9;
  let obj = navigation(incoming[8]);
  const cResult = obj.c(57);
  let obj2 = navigation(incoming[9]);
  navigation = obj2.useNavigation();
  closure_9();
  const tmp6 = analyticsLocations;
  const tmp7 = analyticsLocations(incoming[10]);
  analyticsLocations = tmp7(analyticsLocations(incoming[11]).FRIENDS_LIST).analyticsLocations;
  const bottom = analyticsLocations(incoming[12])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RelationshipStore, GameRelationshipStore];
    const fn = function b() {
      let items;
      let items1;
      let obj2;
      let obj3;
      const obj = { incoming: obj2.getIncomingFriendRequestCount(items), outgoing: obj3.getOutgoingFriendRequestCount(items1), spam: RelationshipStore.getSpamCount(), pendingIgnored: RelationshipStore.getPendingIgnoredCount() };
      items = [RelationshipStore, GameRelationshipStore];
      items1 = [RelationshipStore, GameRelationshipStore];
      obj2 = navigation(incoming[13]);
      obj3 = navigation(incoming[13]);
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = navigation(incoming[14]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp8, tmp9);
  incoming = stateFromStoresObject.incoming;
  const outgoing = stateFromStoresObject.outgoing;
  ({ spam, pendingIgnored } = stateFromStoresObject);
  if (cResult[2] !== analyticsLocations) {
    class I {
      constructor(id) {
        const obj = KeyboardManagerUtils;
        const result = obj.dismissGlobalKeyboard();
        const obj2 = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      }
    }
    cResult[2] = analyticsLocations;
    cResult[3] = I;
  } else {
    class I {
      constructor(id) {
        const obj = KeyboardManagerUtils;
        const result = obj.dismissGlobalKeyboard();
        const obj2 = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      }
    }
  }
  if (cResult[4] !== navigation) {
    class F {
      constructor(defaultSelectedUserId) {
        let obj2;
        const obj = { screen: "new-message", params: obj2 };
        obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
        navigation.navigate("friends", obj);
      }
    }
    cResult[4] = navigation;
    cResult[5] = F;
  } else {
    class F {
      constructor(defaultSelectedUserId) {
        let obj2;
        const obj = { screen: "new-message", params: obj2 };
        obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
        navigation.navigate("friends", obj);
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(defaultSelectedUserId) {
        let obj2;
        const obj = { screen: "new-message", params: obj2 };
        obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
        navigation.navigate("friends", obj);
      }
    }
    let items1 = [];
    cResult[6] = tmp17;
    cResult[7] = items1;
    tmp16 = items1;
  } else {
    class F {
      constructor(defaultSelectedUserId) {
        let obj2;
        const obj = { screen: "new-message", params: obj2 };
        obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
        navigation.navigate("friends", obj);
      }
    }
    tmp16 = cResult[7];
  }
  const effect = outgoing.useEffect(tmp17, tmp16);
  if (cResult[8] === incoming) {
    class F {
      constructor(defaultSelectedUserId) {
        let obj2;
        const obj = { screen: "new-message", params: obj2 };
        obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
        navigation.navigate("friends", obj);
      }
    }
  }
  const items2 = [];
  const sum = incoming + spam + pendingIgnored;
  if (sum > 0) {
    let tmp20;
    class F {
      constructor(defaultSelectedUserId) {
        let obj2;
        const obj = { screen: "new-message", params: obj2 };
        obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
        navigation.navigate("friends", obj);
      }
    }
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(defaultSelectedUserId) {
          let obj2;
          const obj = { screen: "new-message", params: obj2 };
          obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
          navigation.navigate("friends", obj);
        }
      }
      const stringResult = obj4.string(navigation(incoming[19]).t.fyA115);
      cResult[14] = stringResult;
      tmp20 = stringResult;
    } else {
      class F {
        constructor(defaultSelectedUserId) {
          let obj2;
          const obj = { screen: "new-message", params: obj2 };
          obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
          navigation.navigate("friends", obj);
        }
      }
    }
    if (cResult[15] === outgoing) {
      class F {
        constructor(defaultSelectedUserId) {
          let obj2;
          const obj = { screen: "new-message", params: obj2 };
          obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
          navigation.navigate("friends", obj);
        }
      }
      if (cResult[18] !== navigation) {
        class F {
          constructor(defaultSelectedUserId) {
            let obj2;
            const obj = { screen: "new-message", params: obj2 };
            obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
            navigation.navigate("friends", obj);
          }
        }
        cResult[18] = navigation;
        cResult[19] = tmp25;
      } else {
        class F {
          constructor(defaultSelectedUserId) {
            let obj2;
            const obj = { screen: "new-message", params: obj2 };
            obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
            navigation.navigate("friends", obj);
          }
        }
      }
      if (cResult[20] === tmp22) {
        class F {
          constructor(defaultSelectedUserId) {
            let obj2;
            const obj = { screen: "new-message", params: obj2 };
            obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
            navigation.navigate("friends", obj);
          }
        }
        items2.push(tmp26);
      }
      let obj3 = { icon: tmp6(tmp2[20]), IconComponent: tmp(tmp2[21]).SendMessageIcon, iconVariant: "default", label: tmp20, subLabel: tmp22, onPress: tmp25 };
      cResult[20] = tmp22;
      cResult[21] = tmp25;
      cResult[22] = obj3;
      tmp26 = obj3;
    }
    const intl = tmp(tmp2[19]).intl;
    const obj5 = { incoming: sum, outgoing };
    cResult[15] = outgoing;
    cResult[16] = sum;
    cResult[17] = intl.formatToPlainString(navigation(incoming[19]).t["1IEawz"], obj5);
    const formatToPlainStringResult = intl.formatToPlainString(navigation(incoming[19]).t["1IEawz"], obj5);
  } else {
    class F {
      constructor(defaultSelectedUserId) {
        let obj2;
        const obj = { screen: "new-message", params: obj2 };
        obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
        navigation.navigate("friends", obj);
      }
    }
  }
  cResult[8] = incoming;
  cResult[9] = navigation;
  cResult[10] = outgoing;
  cResult[11] = pendingIgnored;
  cResult[12] = spam;
  cResult[13] = items2;
}) : (() => {
  let analyticsLocations;
  let closure_1;
  let items5;
  let outgoing;
  let spam;
  let obj = navigation(analyticsLocations[9]);
  navigation = obj.useNavigation();
  let tmp2 = closure_9();
  importDefault = tmp2;
  const tmp3 = require("useAnalyticsLocations");
  analyticsLocations = tmp3(require("AnalyticsLocation").FRIENDS_LIST).analyticsLocations;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj2 = navigation(analyticsLocations[14]);
  let items = [spam, outgoing];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let items;
    let items1;
    let obj2;
    let obj3;
    const obj = { incoming: obj2.getIncomingFriendRequestCount(items), outgoing: obj3.getOutgoingFriendRequestCount(items1), spam: spam.getSpamCount(), pendingIgnored: spam.getPendingIgnoredCount() };
    items = [spam, outgoing];
    items1 = [spam, outgoing];
    obj2 = navigation(analyticsLocations[13]);
    obj3 = navigation(analyticsLocations[13]);
    return obj;
  });
  const incoming = stateFromStoresObject.incoming;
  outgoing = stateFromStoresObject.outgoing;
  spam = stateFromStoresObject.spam;
  const pendingIgnored = stateFromStoresObject.pendingIgnored;
  let items1 = [analyticsLocations];
  const items2 = [navigation];
  const callback = bottom.useCallback((id) => {
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj2);
  }, items1);
  const callback1 = bottom.useCallback((defaultSelectedUserId) => {
    let obj2;
    const obj = { screen: "new-message", params: obj2 };
    obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
    navigation.navigate("friends", obj);
  }, items2);
  const effect = bottom.useEffect(() => {
    closure_1(analyticsLocations[17])({ tab_opened: null });
    closure_1(analyticsLocations[18])({ tab_opened: null });
  }, []);
  const items3 = [incoming, navigation, outgoing, spam, pendingIgnored];
  const items4 = [bottom, incoming, navigation, outgoing, tmp2, spam];
  const memo = bottom.useMemo(() => {
    let intl;
    let intl2;
    let obj2;
    const sum = incoming + spam + pendingIgnored;
    const items = [];
    const tmp2 = sum > 0 || outgoing > 0;
    if (tmp2) {
      const push = items.push;
      const obj = {
        icon: AssetRegistryDefault,
        IconComponent: SendMessageIcon.SendMessageIcon,
        iconVariant: "default",
        label: intl.string(intl6.t.fyA115),
        subLabel: intl2.formatToPlainString(intl6.t["1IEawz"], obj2),
        onPress() {
            return navigation.navigate("friends", { screen: "requests" });
          }
      };
      intl = intl6.intl;
      intl2 = intl6.intl;
      obj2 = { incoming: sum, outgoing };
      push(obj);
    }
    return items;
  }, items3);
  const memo1 = bottom.useMemo(() => {
    let Button;
    let Icon;
    let TableRow;
    let formatToPlainStringResult;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let items1;
    let obj10;
    let obj3;
    let obj4;
    let obj8;
    let tmp10Result = null;
    const obj = { style: closure_1.container, children: items };
    if (incoming + outgoing + spam > 0) {
      const obj2 = { style: closure_1.requestsButtonContainer, children: metroImportDefault(TableRow, obj3) };
      obj3 = {
        start: true,
        end: true,
        icon: metroImportDefault(Icon, obj4),
        trailing: metroImportDefault(TableRow2.TableRow.Arrow, {}),
        label: intl5.string(intl6.t.fyA115),
        subLabel: formatToPlainStringResult,
        onPress() {
            if (incoming + outgoing > 0) {
              navigation.navigate("friends", { screen: "requests" });
            } else {
              navigation.navigate("friends", { screen: "spam-requests" });
            }
          }
      };
      TableRow = TableRow2.TableRow;
      obj4 = { source: AssetRegistryDefault };
      Icon = TableRow2.TableRow.Icon;
      intl5 = intl6.intl;
      if (incoming + outgoing > 0) {
        const intl2 = intl6.intl;
        const obj5 = { incoming, outgoing };
        formatToPlainStringResult = intl2.formatToPlainString(intl6.t["1IEawz"], obj5);
      } else {
        const intl = intl6.intl;
        const obj6 = { spam: tmp6 };
        formatToPlainStringResult = intl.formatToPlainString(intl6.t.e6BtLq, obj6);
      }
      tmp10Result = metroImportDefault(View, obj2);
    }
    items = [tmp10Result, ];
    const obj7 = { title: intl3.string(intl6.t["oi+B4p"]), fullHeight: true, containerStyle: closure_1.emptyContainer, illustration: WumpusCouchSpotIllustration.WumpusCouchSpotIllustration, children: metroImportDefault(View, obj8) };
    const tmp9 = NoResultsDefault;
    intl3 = intl6.intl;
    obj8 = { style: items1, children: metroImportDefault(Button, obj10) };
    items1 = [closure_1.buttonContainer, ];
    const obj9 = { paddingBottom: bottom };
    items1[1] = obj9;
    obj10 = {
      text: intl4.string(intl6.t.zIJnA6),
      size: "lg",
      onPress() {
        return navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Friends Screen" } });
      },
      grow: true
    };
    Button = components_Button_Button.Button;
    intl4 = intl6.intl;
    items[1] = metroImportDefault(tmp9, obj7);
    return metroImportAll(View, obj);
  }, items4);
  let obj3 = { value: analyticsLocations, children: items5 };
  const AnalyticsLocationProvider = navigation(analyticsLocations[10]).AnalyticsLocationProvider;
  items5 = [pendingIgnored(require("SearchableUserList"), { onSelectUser: callback, handleMessage: callback1, actions: memo, withAffinitySuggestions: false, withGameFriends: true, defaultNoResultsFound: memo1, hideSearchOnDefaultNoResults: true, disableThemedGradient: true }), pendingIgnored(navigation(analyticsLocations[27]).TTIFirstContentfulPaint, { label: "friends" })];
  return closure_8(AnalyticsLocationProvider, obj3);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default tmp4;