// === Module 16747: FriendsScreen ===

// Module 16747 (FriendsScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1874 */;
import SendMessageIcon from "SendMessageIcon" /* 4505 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import TableRow from "TableRow" /* 5605 */;
import native from "native" /* 5692 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import NoResultsDefault from "NoResults" /* 10994 */;
import _modDef16444 from "module_16444" /* 16444 */;
import noop from "module_19" /* 19 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, requestsButtonContainer: null, emptyContainer: null, buttonContainer: null };
createStyles = { paddingTop: nativeDefault.space.PX_8, flex: 1 };
createStyles.container = createStyles;
createStyles.requestsButtonContainer = { marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
createStyles.emptyContainer = { justifyContent: "center", flexGrow: 1 };
let obj1 = { marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
createStyles.buttonContainer = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, width: "100%" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default function FriendsScreen() {
  let obj = navigation(analyticsLocations[7]);
  navigation = obj.useNavigation();
  let tmp2 = closure_9();
  importDefault = tmp2;
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").FRIENDS_LIST).analyticsLocations;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = require("useAnalyticsLocations");
  let items = [spam, outgoing];
  const stateFromStoresObject = navigation(analyticsLocations[11]).useStateFromStoresObject(items, () => {
    const obj = { incoming: null, outgoing: null, spam: null, pendingIgnored: null };
    const items = [spam, outgoing];
    obj.incoming = navigation(analyticsLocations[12]).getIncomingFriendRequestCount(items);
    const obj2 = navigation(analyticsLocations[12]);
    const items1 = [spam, outgoing];
    obj.outgoing = navigation(analyticsLocations[12]).getOutgoingFriendRequestCount(items1);
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
    let obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items1);
  const callback1 = bottom.useCallback((defaultSelectedUserId) => {
    let obj = { screen: "new-message", params: null };
    obj = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
    obj.params = obj;
    navigation.navigate("friends", obj);
  }, items2);
  const effect = bottom.useEffect(() => {
    closure_1(analyticsLocations[15])({ tab_opened: null });
    closure_1(analyticsLocations[16])({ tab_opened: null });
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
      let obj = { icon: _modDef16444, IconComponent: SendMessageIcon.SendMessageIcon, iconVariant: "default", label: null, subLabel: null, onPress: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.fyA115);
      const intl2 = util.intl;
      obj = { incoming: sum, outgoing };
      obj.subLabel = intl2.formatToPlainString(util.t["1IEawz"], obj);
      obj.onPress = function onPress() {
        return navigation.navigate("friends", { screen: "requests" });
      };
      items.push(obj);
    }
    return items;
  }, items3);
  const memo1 = bottom.useMemo(() => {
    let obj = { style: closure_1.container, children: null };
    if (incoming + outgoing + spam <= 0) {
      const items = [null, ];
      obj = { title: null, fullHeight: true, containerStyle: null, illustration: null, children: null };
      const intl3 = util.intl;
      obj.title = intl3.string(util.t["oi+B4p"]);
      obj.containerStyle = tmp3.emptyContainer;
      obj.illustration = native.WumpusCouchSpotIllustration;
      obj = { style: null, children: null };
      const items1 = [tmp3.buttonContainer, ];
      const obj1 = { paddingBottom: bottom };
      items1[1] = obj1;
      obj.style = items1;
      const obj2 = { text: null, size: "lg", onPress: null, grow: true };
      const intl4 = util.intl;
      obj2.text = intl4.string(util.t.zIJnA6);
      obj2.onPress = function onPress() {
        return navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Friends Screen" } });
      };
      obj.children = React5(components_Button_Button.Button, obj2);
      obj.children = React5(tmp2, obj);
      items[1] = React5(NoResultsDefault, obj);
      obj.children = items;
      return tmp(tmp2, obj);
    } else {
      const obj3 = { style: tmp3.requestsButtonContainer, children: null };
      let v1IEawz = require;
      let obj6 = dependencyMap;
      let obj4 = { start: true, end: true, icon: null, trailing: null, label: null, subLabel: null, onPress: null };
      const obj5 = { source: _modDef16444 };
      obj4.icon = React5(TableRow.TableRow.Icon, obj5);
      obj4.trailing = React5(TableRow.TableRow.Arrow, {});
      const intl5 = util.intl;
      obj4.label = intl5.string(util.t.fyA115);
      if (tmp4 + tmp5 > 0) {
        const intl2 = v1IEawz(1114).intl;
        v1IEawz = v1IEawz(1114).t["1IEawz"];
        obj6 = { incoming: tmp4, outgoing: tmp5 };
        let formatToPlainStringResult = intl2.formatToPlainString(v1IEawz, obj6);
      } else {
        const intl = v1IEawz(1114).intl;
        const obj7 = { spam: tmp6 };
        formatToPlainStringResult = intl.formatToPlainString(v1IEawz(1114).t.e6BtLq, obj7);
      }
      obj4.subLabel = formatToPlainStringResult;
      obj4.onPress = function onPress() {
        if (incoming + outgoing > 0) {
          navigation.navigate("friends", { screen: "requests" });
        } else {
          navigation.navigate("friends", { screen: "spam-requests" });
        }
      };
      obj4 = tmp16(TableRow.TableRow, obj4);
      obj3.children = obj4;
      React5(tmp2, obj3);
    }
  }, items4);
  obj = { value: analyticsLocations, children: null };
  const items5 = [pendingIgnored(require("SearchableUserList"), { onSelectUser: callback, handleMessage: callback1, actions: memo, withAffinitySuggestions: false, withGameFriends: true, defaultNoResultsFound: memo1, hideSearchOnDefaultNoResults: true, disableThemedGradient: true }), pendingIgnored(navigation(analyticsLocations[25]).TTIFirstContentfulPaint, { label: "friends" })];
  obj.children = items5;
  return closure_8(navigation(analyticsLocations[8]).AnalyticsLocationProvider, obj);
};