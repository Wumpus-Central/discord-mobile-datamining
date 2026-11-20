// === Module 18859: ChannelSecondaryViewChatNavigator ===

// Module 18859 (ChannelSecondaryViewChatNavigator)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import HeaderShared from "HeaderShared" /* 8441 */;
import ChannelContainer from "ChannelContainer" /* 10978 */;
import ChatViewDefault from "ChatView" /* 11621 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18279 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderChannelSecondaryViewChatHeader(arg0) {
  const obj2 = {};
  const merged = Object.assign(arg0);
  const obj = HeaderShared;
  obj2.shouldHandleSafeArea = PlatformUtils.isAndroid();
  return obj.renderHeader(obj2);
}
function ChannelSecondaryViewChatScreen(arg0) {
  ({ channelId, guildId } = arg0);
  const obj = { guildId, channelId, children: null };
  items = [React4(ChatViewDefault, { guildId, channelId, chatInputRef: noop.useRef(null), HACK_fixModalInteraction: true, screenIndex: "channel-secondary-view-chat" }), ];
  const ref = noop.useRef(null);
  items[1] = PlatformUtils.isIOS() && React4(PortalKeyboardRenderer.PortalKeyboardRenderer, { portal: false });
  obj.children = items;
  return hasOwnProperty(ChannelContainer.ChannelContainer, obj);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const NativeStackNavigator = fn(8518);
let closure_6 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4794);
let obj3 = { actions: { marginRight: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx");

export default function ChannelSecondaryViewChatNavigator(navigation) {
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const tmp = closure_7();
  dependencyMap = tmp;
  const tmp2 = params(4966)();
  const accessibilityNativeStackOptions = navigation(6972).useAccessibilityNativeStackOptions();
  const channelId = params.channelId;
  items = [channelId, tmp, navigation, accessibilityNativeStackOptions];
  const memo = accessibilityNativeStackOptions.useMemo(() => {
    const obj = {
      header: renderChannelSecondaryViewChatHeader,
      headerTitle() {
        return channelId(params(actions[12]), { channelId, screenIndex: "channel-secondary-view-chat", isNavigationScreen: true });
      },
      headerRight() {
        return channelId(params(actions[13]), { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" });
      },
      headerLeft: HeaderShared.getRenderBackImage(navigation)
    };
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  }, items);
  const obj2 = { gradient: tmp2, children: null };
  const obj3 = {
    screenOptions: memo,
    children: channelId(closure_6.Screen, {
      name: "chat",
      children() {
        return React4(ChannelSecondaryViewChatScreen, { channelId: params.channelId, guildId: params.guildId });
      }
    })
  };
  obj2.children = channelId(closure_6.Navigator, obj3);
  return channelId(navigation(4855).ThemeContextProvider, obj2);
};