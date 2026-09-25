// discord_app/modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import SendMessageIcon from "../../../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import NoResultsDefault from "../../shared_components/user_list/NoResults.tsx";
import WumpusCouchSpotIllustration from "../../../../../design/components/mana-assets/native/generated/WumpusCouchSpotIllustration.native.tsx";
import _modDef16057 from "../../../../../../_runtime/metro/16057__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GameRelationshipStore from "../../../../game_relationships/GameRelationshipStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { paddingTop: nativeDefault.space.PX_8, flex: 1 },
  requestsButtonContainer: null,
  emptyContainer: null,
  buttonContainer: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_8, flex: 1 };
obj2.requestsButtonContainer = {
  marginHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
obj2.emptyContainer = { justifyContent: "center", flexGrow: 1 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj2.buttonContainer = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default function FriendsScreen() {
  navigation = navigation(analyticsLocations[7]).useNavigation();
  let tmp2 = closure_9();
  importDefault = tmp2;
  let obj = navigation(analyticsLocations[7]);
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
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items1);
  const callback1 = bottom.useCallback((defaultSelectedUserId) => {
    const obj = {
      screen: "new-message",
      params: { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" },
    };
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
      const obj = {
        icon: _modDef16057,
        IconComponent: SendMessageIcon.SendMessageIcon,
        iconVariant: "default",
        label: null,
        subLabel: null,
        onPress: null,
      };
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
      const items = [null];
      const obj2 = { title: null, fullHeight: true, containerStyle: null, illustration: null, children: null };
      const intl3 = util.intl;
      obj2.title = intl3.string(util.t["oi+B4p"]);
      obj2.containerStyle = closure_1.emptyContainer;
      obj2.illustration = WumpusCouchSpotIllustration.WumpusCouchSpotIllustration;
      const obj3 = { style: null, children: null };
      const items1 = [closure_1.buttonContainer];
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
      const obj8 = { source: _modDef16057 };
      obj7.icon = React5(TableRow.TableRow.Icon, obj8);
      obj7.trailing = React5(TableRow.TableRow.Arrow, {});
      const intl5 = util.intl;
      obj7.label = intl5.string(util.t.fyA115);
      if (incoming + outgoing > 0) {
        const intl2 = v1IEawz(1115).intl;
        v1IEawz = v1IEawz(1115).t["1IEawz"];
        obj9 = { incoming, outgoing };
        let formatToPlainStringResult = intl2.formatToPlainString(v1IEawz, obj9);
      } else {
        const intl = v1IEawz(1115).intl;
        const obj10 = { spam: tmp6 };
        formatToPlainStringResult = intl.formatToPlainString(v1IEawz(1115).t.e6BtLq, obj10);
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
  const items5 = [
    pendingIgnored(require("SearchableUserList"), {
      onSelectUser: callback,
      handleMessage: callback1,
      actions: memo,
      withAffinitySuggestions: false,
      withGameFriends: true,
      defaultNoResultsFound: memo1,
      hideSearchOnDefaultNoResults: true,
      disableThemedGradient: true,
    }),
    pendingIgnored(navigation(analyticsLocations[25]).TTIFirstContentfulPaint, { label: "friends" }),
  ];
  obj3.children = items5;
  return closure_8(navigation(analyticsLocations[8]).AnalyticsLocationProvider, obj3);
}
