// === Module 18013: ChannelSecondaryViewChatNavigator ===

// Module 18013 (ChannelSecondaryViewChatNavigator)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import HeaderShared from "HeaderShared" /* 9599 */;
import ChannelActionsDefault from "ChannelActions" /* 9611 */;
import ChatViewDefault from "ChatView" /* 10671 */;
import ChannelContainer from "ChannelContainer" /* 13509 */;
import ChannelHeaderDefault from "ChannelHeader" /* 13790 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function renderChannelSecondaryViewChatHeader(arg0) {
  const obj2 = {};
  const merged = Object.assign(arg0);
  const obj = HeaderShared;
  obj2.shouldHandleSafeArea = PlatformUtils.isAndroid();
  return obj.renderHeader(obj2);
}
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(9644);
let closure_5 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5191);
let obj3 = { actions: { marginRight: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSecondaryViewChatScreen(arg0) {
  const cResult = c.c(7);
  ({ channelId, guildId } = arg0);
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === channelId) {
      if (cResult[4] === guildId) {
        if (cResult[5] === tmp5) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { guildId, channelId, children: tmp5 };
    const tmp9 = jsx(ChannelContainer.ChannelContainer, { guildId, channelId, children: tmp5 });
    cResult[3] = channelId;
    cResult[4] = guildId;
    cResult[5] = tmp5;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = jsx(ChatViewDefault, { guildId, channelId, chatInputRef: noop.useRef(null), HACK_fixModalInteraction: true, screenIndex: "channel-secondary-view-chat" });
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const ref = noop.useRef(null);
}) : (function ChannelSecondaryViewChatScreen(arg0) {
  ({ channelId, guildId } = arg0);
  const ref = noop.useRef(null);
  return jsx(ChannelContainer.ChannelContainer, { guildId, channelId, children: jsx(ChatViewDefault, { guildId, channelId, chatInputRef: noop.useRef(null), HACK_fixModalInteraction: true, screenIndex: "channel-secondary-view-chat" }) });
});
ReactCompilerGating = fn(558);
let obj4 = { marginRight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSecondaryViewChatNavigator(navigation) {
  const cResult = params(channelId[8]).c(21);
  navigation = navigation.navigation;
  params = navigation.route.params;
  const tmp4 = closure_6();
  importDefault = tmp4;
  const tmp5 = require("useColorThemeBackground")();
  const obj = params(channelId[8]);
  const accessibilityNativeStackOptions = params(channelId[12]).useAccessibilityNativeStackOptions();
  channelId = params.channelId;
  if (cResult[0] !== channelId) {
    const fn = function o() {
      return jsx(ChannelHeaderDefault, { channelId, screenIndex: "channel-secondary-view-chat", isNavigationScreen: true });
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp4) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] !== navigation) {
      const renderBackImage = tmp(tmp2[5]).getRenderBackImage(navigation);
      cResult[5] = navigation;
      cResult[6] = renderBackImage;
      let tmp9 = renderBackImage;
      const tmpResult = tmp(tmp2[5]);
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === accessibilityNativeStackOptions) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp9) {
            let tmp11 = cResult[11];
          }
          if (cResult[12] === params.channelId) {
            if (cResult[13] === params.guildId) {
              let tmp16 = cResult[14];
            }
            if (cResult[15] === tmp11) {
              if (cResult[16] === tmp16) {
                let tmp20 = cResult[17];
              }
              if (cResult[18] === tmp5) {
                if (cResult[19] === tmp20) {
                  let tmp24 = cResult[20];
                }
                return tmp24;
              }
              const obj3 = { gradient: tmp5, children: tmp20 };
              const tmp26 = jsx(tmp(tmp2[15]).ThemeContextProvider, { gradient: tmp5, children: tmp20 });
              cResult[18] = tmp5;
              cResult[19] = tmp20;
              cResult[20] = tmp26;
              tmp24 = tmp26;
            }
            const obj4 = { screenOptions: tmp11, children: tmp16 };
            const tmp23 = <closure_5.Navigator screenOptions={tmp11}>{tmp16}</closure_5.Navigator>;
            cResult[15] = tmp11;
            cResult[16] = tmp16;
            cResult[17] = tmp23;
            tmp20 = tmp23;
          }
          const obj5 = {
            name: "chat",
            children() {
                      return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
                    }
          };
          const tmp19 = <closure_5.Screen name="chat">{function children() {
            return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
          }}</closure_5.Screen>;
          cResult[12] = params.channelId;
          cResult[13] = params.guildId;
          cResult[14] = tmp19;
          tmp16 = tmp19;
        }
      }
    }
    const obj6 = { header: renderChannelSecondaryViewChatHeader, headerTitle: tmp7, headerRight: tmp8, headerLeft: tmp9 };
    const merged = Object.assign(accessibilityNativeStackOptions);
    cResult[7] = accessibilityNativeStackOptions;
    cResult[8] = tmp7;
    cResult[9] = tmp8;
    cResult[10] = tmp9;
    cResult[11] = obj6;
    tmp11 = obj6;
  }
  const fn2 = function s() {
    return jsx(ChannelActionsDefault, { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" });
  };
  cResult[2] = channelId;
  cResult[3] = tmp4;
  cResult[4] = fn2;
  tmp8 = fn2;
  const obj2 = params(channelId[12]);
}) : (function ChannelSecondaryViewChatNavigator(navigation) {
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const tmp = closure_6();
  dependencyMap = tmp;
  const tmp2 = params(5068)();
  const accessibilityNativeStackOptions = navigation(6965).useAccessibilityNativeStackOptions();
  const channelId = params.channelId;
  const items = [channelId, tmp, navigation, accessibilityNativeStackOptions];
  const memo = accessibilityNativeStackOptions.useMemo(() => {
    const obj = {
      header: renderChannelSecondaryViewChatHeader,
      headerTitle() {
        return channelId(params(actions[13]), { channelId, screenIndex: "channel-secondary-view-chat", isNavigationScreen: true });
      },
      headerRight() {
        return channelId(params(actions[14]), { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" });
      },
      headerLeft: HeaderShared.getRenderBackImage(navigation)
    };
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  }, items);
  const obj2 = { gradient: tmp2, children: null };
  const obj3 = {
    screenOptions: memo,
    children: channelId(closure_5.Screen, {
      name: "chat",
      children() {
        return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
      }
    })
  };
  obj2.children = channelId(closure_5.Navigator, obj3);
  return channelId(navigation(4922).ThemeContextProvider, obj2);
});