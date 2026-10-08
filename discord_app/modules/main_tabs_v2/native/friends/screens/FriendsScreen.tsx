// === Module 17232: FriendsScreen ===

// Module 17232 (FriendsScreen)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import SendMessageIcon from "SendMessageIcon" /* 5041 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import TableRow from "TableRow" /* 6184 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8279 */;
import NoResultsDefault from "NoResults" /* 11597 */;
import WumpusCouchSpotIllustration from "WumpusCouchSpotIllustration" /* 15195 */;
import _modDef16684 from "module_16684" /* 16684 */;
import noop from "module_19" /* 19 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7335 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_8, flex: 1 }, requestsButtonContainer: null, emptyContainer: null, buttonContainer: null };
let obj3 = { paddingTop: nativeDefault.space.PX_8, flex: 1 };
obj2.requestsButtonContainer = { marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.emptyContainer = { justifyContent: "center", flexGrow: 1 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.buttonContainer = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, width: "100%" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FriendsScreen() {
  const cResult = navigation(incoming[8]).c(57);
  let obj = navigation(incoming[8]);
  navigation = navigation(incoming[9]).useNavigation();
  closure_9();
  let obj2 = navigation(incoming[9]);
  const tmp6 = analyticsLocations;
  analyticsLocations = analyticsLocations(incoming[10])(analyticsLocations(incoming[11]).FRIENDS_LIST).analyticsLocations;
  const bottom = analyticsLocations(incoming[12])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RelationshipStore, GameRelationshipStore];
    const fn = function b() {
      const obj = { incoming: null, outgoing: null, spam: null, pendingIgnored: null };
      const items = [RelationshipStore, GameRelationshipStore];
      obj.incoming = navigation(incoming[13]).getIncomingFriendRequestCount(items);
      const obj2 = navigation(incoming[13]);
      const items1 = [RelationshipStore, GameRelationshipStore];
      obj.outgoing = navigation(incoming[13]).getOutgoingFriendRequestCount(items1);
      obj.spam = RelationshipStore.getSpamCount();
      obj.pendingIgnored = RelationshipStore.getPendingIgnoredCount();
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmp7 = analyticsLocations(incoming[10]);
  const stateFromStoresObject = navigation(incoming[14]).useStateFromStoresObject(tmp8, tmp9);
  incoming = stateFromStoresObject.incoming;
  const outgoing = stateFromStoresObject.outgoing;
  ({ spam, pendingIgnored } = stateFromStoresObject);
  if (cResult[2] !== analyticsLocations) {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_2[15]);
        result = obj.dismissGlobalKeyboard();
        obj1 = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp2 = closure_1(closure_2[16])(obj1);
        return;
      }
    }
    cResult[2] = analyticsLocations;
    cResult[3] = I;
  } else {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_2[15]);
        result = obj.dismissGlobalKeyboard();
        obj1 = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp2 = closure_1(closure_2[16])(obj1);
        return;
      }
    }
  }
  if (cResult[4] !== navigation) {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
    cResult[4] = navigation;
    cResult[5] = T;
  } else {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
    let items1 = [];
    cResult[6] = tmp17;
    cResult[7] = items1;
    let tmp16 = items1;
  } else {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
    tmp16 = cResult[7];
  }
  const effect = outgoing.useEffect(tmp17, tmp16);
  if (cResult[8] === incoming) {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
  }
  const items2 = [];
  const sum = incoming + spam + pendingIgnored;
  if (sum <= 0) {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
    const stringResult = obj4.string(tmp(tmp2[19]).t.fyA115);
    cResult[14] = stringResult;
    const tmp20 = stringResult;
  } else {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
  }
  if (cResult[15] === outgoing) {
    class T {
      constructor(arg0) {
        obj = { screen: "new-message", params: null };
        obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
        obj.params = obj1;
        navigateResult = closure_0.navigate("friends", obj);
        return;
      }
    }
    if (cResult[18] !== navigation) {
      class T {
        constructor(arg0) {
          obj = { screen: "new-message", params: null };
          obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
          obj.params = obj1;
          navigateResult = closure_0.navigate("friends", obj);
          return;
        }
      }
      cResult[18] = navigation;
      cResult[19] = tmp25;
    } else {
      class T {
        constructor(arg0) {
          obj = { screen: "new-message", params: null };
          obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
          obj.params = obj1;
          navigateResult = closure_0.navigate("friends", obj);
          return;
        }
      }
    }
    if (cResult[20] === tmp22) {
      class T {
        constructor(arg0) {
          obj = { screen: "new-message", params: null };
          obj1 = { defaultSelectedUserId: arg0.id, sourcePage: "Friends Screen" };
          obj.params = obj1;
          navigateResult = closure_0.navigate("friends", obj);
          return;
        }
      }
      items2.push(tmp26);
    }
    const obj3 = { icon: tmp6(tmp2[20]), IconComponent: tmp(tmp2[21]).SendMessageIcon, iconVariant: "default", label: tmp20, subLabel: tmp22, onPress: tmp25 };
    cResult[20] = tmp22;
    cResult[21] = tmp25;
    cResult[22] = obj3;
    tmp26 = obj3;
  }
  const intl = tmp(tmp2[19]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(navigation(incoming[19]).t["1IEawz"], { incoming: sum, outgoing });
  cResult[15] = outgoing;
  cResult[16] = sum;
  cResult[17] = formatToPlainStringResult;
  const tmpResult = navigation(incoming[14]);
}) : (function FriendsScreen() {
  navigation = navigation(analyticsLocations[9]).useNavigation();
  let tmp2 = closure_9();
  importDefault = tmp2;
  let obj = navigation(analyticsLocations[9]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").FRIENDS_LIST).analyticsLocations;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = require("useAnalyticsLocations");
  let items = [spam, outgoing];
  const stateFromStoresObject = navigation(analyticsLocations[14]).useStateFromStoresObject(items, () => {
    const obj = { incoming: null, outgoing: null, spam: null, pendingIgnored: null };
    const items = [spam, outgoing];
    obj.incoming = navigation(analyticsLocations[13]).getIncomingFriendRequestCount(items);
    const obj2 = navigation(analyticsLocations[13]);
    const items1 = [spam, outgoing];
    obj.outgoing = navigation(analyticsLocations[13]).getOutgoingFriendRequestCount(items1);
    obj.spam = spam.getSpamCount();
    obj.pendingIgnored = spam.getPendingIgnoredCount();
    return obj;
  });
  const incoming = stateFromStoresObject.incoming;
  outgoing = stateFromStoresObject.outgoing;
  spam = stateFromStoresObject.spam;
  const pendingIgnored = stateFromStoresObject.pendingIgnored;
  let items1 = [analyticsLocations];
  const items2 = [navigation];
  const callback = bottom.useCallback((id) => {
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items1);
  const callback1 = bottom.useCallback((defaultSelectedUserId) => {
    const obj = { screen: "new-message", params: { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" } };
    navigation.navigate("friends", obj);
  }, items2);
  const effect = bottom.useEffect(() => {
    closure_1(analyticsLocations[17])({ tab_opened: null });
    closure_1(analyticsLocations[18])({ tab_opened: null });
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
      const obj = { icon: _modDef16684, IconComponent: SendMessageIcon.SendMessageIcon, iconVariant: "default", label: null, subLabel: null, onPress: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.fyA115);
      const intl2 = util.intl;
      const obj2 = { incoming: sum, outgoing };
      obj.subLabel = intl2.formatToPlainString(util.t["1IEawz"], obj2);
      obj.onPress = function onPress() {
        return navigation.navigate("friends", { screen: "requests" });
      };
      items.push(obj);
    }
    return items;
  }, items3);
  const memo1 = bottom.useMemo(() => {
    const obj = { style: closure_1.container, children: null };
    if (incoming + outgoing + spam <= 0) {
      const items = [null, ];
      const obj2 = { title: null, fullHeight: true, containerStyle: null, illustration: null, children: null };
      const intl3 = util.intl;
      obj2.title = intl3.string(util.t["oi+B4p"]);
      obj2.containerStyle = closure_1.emptyContainer;
      obj2.illustration = WumpusCouchSpotIllustration.WumpusCouchSpotIllustration;
      const obj3 = { style: null, children: null };
      const items1 = [closure_1.buttonContainer, ];
      const obj4 = { paddingBottom: bottom };
      items1[1] = obj4;
      obj3.style = items1;
      const obj5 = { text: null, size: "lg", onPress: null, grow: true };
      const intl4 = util.intl;
      obj5.text = intl4.string(util.t.zIJnA6);
      obj5.onPress = function onPress() {
        return navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Friends Screen" } });
      };
      obj3.children = React5(components_Button_Button.Button, obj5);
      obj2.children = React5(View, obj3);
      items[1] = React5(NoResultsDefault, obj2);
      obj.children = items;
      return tmp(View, obj);
    } else {
      const obj6 = { style: closure_1.requestsButtonContainer, children: null };
      let v1IEawz = require;
      let obj9 = dependencyMap;
      let obj7 = { start: true, end: true, icon: null, trailing: null, label: null, subLabel: null, onPress: null };
      const obj8 = { source: _modDef16684 };
      obj7.icon = React5(TableRow.TableRow.Icon, obj8);
      obj7.trailing = React5(TableRow.TableRow.Arrow, {});
      const intl5 = util.intl;
      obj7.label = intl5.string(util.t.fyA115);
      if (incoming + outgoing > 0) {
        const intl2 = v1IEawz(1126).intl;
        v1IEawz = v1IEawz(1126).t["1IEawz"];
        obj9 = { incoming, outgoing };
        let formatToPlainStringResult = intl2.formatToPlainString(v1IEawz, obj9);
      } else {
        const intl = v1IEawz(1126).intl;
        const obj10 = { spam: tmp6 };
        formatToPlainStringResult = intl.formatToPlainString(v1IEawz(1126).t.e6BtLq, obj10);
      }
      obj7.subLabel = formatToPlainStringResult;
      obj7.onPress = function onPress() {
        if (incoming + outgoing > 0) {
          navigation.navigate("friends", { screen: "requests" });
        } else {
          navigation.navigate("friends", { screen: "spam-requests" });
        }
      };
      obj7 = React5(TableRow.TableRow, obj7);
      obj6.children = obj7;
      React5(View, obj6);
    }
  }, items4);
  let obj3 = { value: analyticsLocations, children: null };
  const items5 = [pendingIgnored(require("SearchableUserList"), { onSelectUser: callback, handleMessage: callback1, actions: memo, withAffinitySuggestions: false, withGameFriends: true, defaultNoResultsFound: memo1, hideSearchOnDefaultNoResults: true, disableThemedGradient: true }), pendingIgnored(navigation(analyticsLocations[27]).TTIFirstContentfulPaint, { label: "friends" })];
  obj3.children = items5;
  return closure_8(navigation(analyticsLocations[10]).AnalyticsLocationProvider, obj3);
});