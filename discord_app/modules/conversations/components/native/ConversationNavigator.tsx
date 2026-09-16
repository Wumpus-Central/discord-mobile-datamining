// === Module 8028: ConversationNavigator ===

// Module 8028 (ConversationNavigator)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useToken from "useToken" /* 4339 */;
import RootNavigationRef from "RootNavigationRef" /* 4496 */;
import HeaderShared from "HeaderShared" /* 7978 */;
import ConversationNavigatorHeaderDefault from "ConversationNavigatorHeader" /* 8040 */;
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu" /* 13397 */;
import noop from "module_19" /* 19 */;

require = fn;
function HeaderWithBorder(arg0) {
  const token = useToken.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const token1 = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj4 = {};
  const merged = Object.assign(arg0);
  const obj3 = HeaderShared;
  obj4.shouldHandleSafeArea = PlatformUtils.isAndroid();
  obj4.style = { borderColor: token, backgroundColor: token1 };
  return obj3.renderHeader(obj4);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(8029);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  const params = route.route.params;
  const channelId = params.channelId;
  let obj2 = { id: "conversation-navigator", screenOptions: channelId(7110).useAccessibilityNativeStackOptions(), children: null };
  let obj = channelId(7110);
  ({ Navigator, Screen } = Screen);
  const items = [
    closure_3(Screen, {
      initialParams: { channelId, guildId: params.guildId },
      name: channelId(8039).ConversationNavigatorScreens.LIST,
      options(navigation) {
        let obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return closure_1_3(closure_1_5, {});
          },
          headerLeft: null,
          headerTitle: null
        };
        const obj2 = HeaderShared;
        obj.headerLeft = obj2.getRenderBackImage(navigation.navigation, { badgeCutoutColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
        obj.headerTitle = function headerTitle() {
          const obj = { channelId, title: null };
          const intl = channelId(1115).intl;
          obj.title = intl.string(channelId(1115).t.T3WBRp);
          return closure_2_3(ConversationNavigatorHeaderDefault, obj);
        };
        return obj;
      },
      getComponent() {
        return channelId(8041).default;
      }
    }),

  ];
  const obj3 = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(8039).ConversationNavigatorScreens.LIST,
    options(navigation) {
      let obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_3(closure_1_5, {});
        },
        headerLeft: null,
        headerTitle: null
      };
      const obj2 = HeaderShared;
      obj.headerLeft = obj2.getRenderBackImage(navigation.navigation, { badgeCutoutColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
      obj.headerTitle = function headerTitle() {
        const obj = { channelId, title: null };
        const intl = channelId(1115).intl;
        obj.title = intl.string(channelId(1115).t.T3WBRp);
        return closure_2_3(ConversationNavigatorHeaderDefault, obj);
      };
      return obj;
    },
    getComponent() {
      return channelId(8041).default;
    }
  };
  items[1] = closure_3(Screen.Screen, {
    name: channelId(8039).ConversationNavigatorScreens.FOCUS,
    options(route) {
      route = route.route;
      const obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_3(closure_1_5, {});
        },
        headerLeft: null,
        headerTitle: null,
        headerRight: null
      };
      const obj2 = route(7978);
      obj.headerLeft = obj2.getRenderBackImage(route.navigation, { badgeCutoutColor: closure_1(576).colors.MOBILE_ACTIONSHEET_BACKGROUND });
      obj.headerTitle = function headerTitle() {
        return closure_2_3(ConversationNavigatorHeaderDefault, { channelId: route.params.channelId, title: route.params.title, hasRightAction: true });
      };
      obj.headerRight = function headerRight() {
        return closure_2_3(ConversationNavigatorMoreMenuDefault, { channelId: route.params.channelId, conversationId: route.params.conversationId });
      };
      return obj;
    },
    getComponent() {
      return channelId(13398).default;
    }
  });
  obj2.children = items;
  return closure_4(Navigator, obj2);
};
export const openConversationNavigator = function openConversationNavigator(arg0) {
  ({ channelId, guildId } = arg0);
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
};