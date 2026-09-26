// discord_app/modules/conversations/components/native/ConversationNavigator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ConversationsActionCreators from "../../ConversationsActionCreators.tsx";
import useSelectedConversationDefault from "../../useSelectedConversation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConversationsStore from "../../ConversationsStore.tsx";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const NativeStackNavigator = fn(7339);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  ({ channelId, guildId } = route.route.params);
  _require = undefined;
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  _require = useSelectedConversationDefault(channelId);
  const first = _slicedToArray(
    noop.useState(() => {
      let tmp = null;
      if (ConversationsStore.consumeFocusRequest()) {
        let tmp3 = null;
        if (null != closure_0) {
          const obj = { conversationId: null, title: null };
          ({ id: obj.conversationId, title: obj.title } = closure_0);
          tmp3 = obj;
        }
        tmp = tmp3;
      }
      return tmp;
    }),
    1,
  )[0];
  const obj2 = {
    id: "conversation-navigator",
    screenOptions: accessibilityNativeStackOptions,
    initialRouteName: null,
    children: null,
  };
  if (null != first) {
    let LIST = tmp(7351).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(7351).ConversationNavigatorScreens.LIST;
  }
  obj2.initialRouteName = LIST;
  let obj = require("Navigator");
  const items = [
    closure_6(Navigator.Screen, {
      initialParams: { channelId, guildId },
      name: require("ConversationNavigatorUtils").ConversationNavigatorScreens.LIST,
      options(arg0) {
        ({ route, navigation } = arg0);
        const obj = closure_0(7352);
        return obj.conversationNavigatorListHeaderOptions(route, navigation, {
          backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
        });
      },
      getComponent() {
        return closure_0(7367).default;
      },
    }),
  ];
  const obj4 = {
    name: require("ConversationNavigatorUtils").ConversationNavigatorScreens.FOCUS,
    initialParams: null,
    options: null,
    getComponent: null,
  };
  let tmp8;
  if (null != first) {
    const obj5 = { channelId, guildId };
    const merged = Object.assign(first);
    tmp8 = obj5;
  }
  obj4.initialParams = tmp8;
  obj4.options = function options(arg0) {
    ({ route, navigation } = arg0);
    const obj = closure_0(7352);
    return obj.conversationNavigatorFocusHeaderOptions(route, navigation, {
      backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
    });
  };
  obj4.getComponent = function getComponent() {
    return closure_0(12824).default;
  };
  items[1] = closure_6(Navigator.Screen, obj4);
  obj2.children = items;
  return closure_7(Navigator.Navigator, obj2);
}
export const openConversationNavigator = function openConversationNavigator(focusSelectedConversation) {
  let flag = focusSelectedConversation.focusSelectedConversation;
  ({ channelId, guildId } = focusSelectedConversation);
  if (flag === undefined) {
    flag = false;
  }
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp3) {
    if (flag) {
      const conversationFocus = ConversationsActionCreators.requestConversationFocus();
      const tmpResult = ConversationsActionCreators;
    }
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
  tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
};
