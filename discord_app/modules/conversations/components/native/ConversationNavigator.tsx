// === Module 8242: ConversationNavigator ===

// Module 8242 (ConversationNavigator)
import nativeDefault from "native" /* 576 */;
import RootNavigationRef from "RootNavigationRef" /* 4685 */;
import Navigator from "Navigator" /* 7331 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 8253 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 8254 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(8243);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  ({ channelId, guildId } = route.route.params);
  const obj2 = { id: "conversation-navigator", screenOptions: Navigator.useAccessibilityNativeStackOptions(), children: null };
  ({ Navigator, Screen } = Screen);
  const items = [
    React3(Screen, {
      initialParams: { channelId, guildId },
      name: ConversationNavigatorUtils.ConversationNavigatorScreens.LIST,
      options(arg0) {
        ({ route, navigation } = arg0);
        const obj = ConversationNavigatorHeader;
        return obj.conversationNavigatorListHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
      },
      getComponent() {
        return require("ConversationListScreen").default;
      }
    }),

  ];
  const obj3 = {
    initialParams: { channelId, guildId },
    name: ConversationNavigatorUtils.ConversationNavigatorScreens.LIST,
    options(arg0) {
      ({ route, navigation } = arg0);
      const obj = ConversationNavigatorHeader;
      return obj.conversationNavigatorListHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
    },
    getComponent() {
      return require("ConversationListScreen").default;
    }
  };
  items[1] = React3(Screen.Screen, {
    name: ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      ({ route, navigation } = arg0);
      const obj = ConversationNavigatorHeader;
      return obj.conversationNavigatorFocusHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
    },
    getComponent() {
      return require("ConversationFocusScreen").default;
    }
  });
  obj2.children = items;
  return React4(Navigator, obj2);
};
export const openConversationNavigator = function openConversationNavigator(arg0) {
  ({ channelId, guildId } = arg0);
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
};