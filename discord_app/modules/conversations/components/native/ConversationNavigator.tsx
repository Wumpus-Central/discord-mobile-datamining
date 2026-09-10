// discord_app/modules/conversations/components/native/ConversationNavigator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ConversationNavigatorHeaderDefault from "ConversationNavigatorHeader.tsx";
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function HeaderWithBorder(arg0) {
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const token1 = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  obj = {};
  const merged = Object.assign(arg0);
  const obj3 = HeaderShared;
  obj.shouldHandleSafeArea = PlatformUtils.isAndroid();
  obj.style = { borderColor: token, backgroundColor: token1 };
  return obj3.renderHeader(obj);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(7965);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  const params = route.route.params;
  const channelId = params.channelId;
  let obj = channelId(7052);
  obj = { id: "conversation-navigator", screenOptions: obj.useAccessibilityNativeStackOptions(), children: null };
  obj = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(7975).ConversationNavigatorScreens.LIST,
    options(navigation) {
      let obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_3(closure_1_5, {});
        },
        headerLeft: null,
        headerTitle: null,
      };
      obj = { badgeCutoutColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
      obj.headerLeft = HeaderShared.getRenderBackImage(navigation.navigation, obj);
      obj.headerTitle = function headerTitle() {
        const obj = { channelId, title: null };
        const intl = channelId(1114).intl;
        obj.title = intl.string(channelId(1114).t.T3WBRp);
        return closure_2_3(ConversationNavigatorHeaderDefault, obj);
      };
      return obj;
    },
    getComponent() {
      return channelId(7977).default;
    },
  };
  ({ Navigator, Screen } = Screen);
  const items = [
    closure_3(Screen, obj),
    closure_3(Screen.Screen, {
      name: channelId(7975).ConversationNavigatorScreens.FOCUS,
      options(route) {
        route = route.route;
        let obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return closure_1_3(closure_1_5, {});
          },
          headerLeft: null,
          headerTitle: null,
          headerRight: null,
        };
        obj = { badgeCutoutColor: closure_1(576).colors.MOBILE_ACTIONSHEET_BACKGROUND };
        obj.headerLeft = route(7914).getRenderBackImage(route.navigation, obj);
        obj.headerTitle = function headerTitle() {
          return closure_2_3(ConversationNavigatorHeaderDefault, {
            channelId: route.params.channelId,
            title: route.params.title,
            hasRightAction: true,
          });
        };
        obj.headerRight = function headerRight() {
          return closure_2_3(ConversationNavigatorMoreMenuDefault, {
            channelId: route.params.channelId,
            conversationId: route.params.conversationId,
          });
        };
        return obj;
      },
      getComponent() {
        return channelId(13325).default;
      },
    }),
  ];
  obj.children = items;
  return closure_4(Navigator, obj);
}
export const openConversationNavigator = function openConversationNavigator(arg0) {
  ({ channelId, guildId } = arg0);
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj);
  }
};
