// discord_app/modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ChannelActionsDefault from "../../main_tabs_v2/native/channel/ChannelActions.tsx";
import ChatViewDefault from "../../chat/native/ChatView.tsx";
import ChannelContainer from "../../../components_native/ChannelContainer.tsx";
import ChannelHeaderDefault from "../../main_tabs_v2/native/channel/header/ChannelHeader.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function renderChannelSecondaryViewChatHeader(arg0) {
  const obj2 = {};
  const merged = Object.assign(arg0);
  const obj = HeaderShared;
  obj2.shouldHandleSafeArea = PlatformUtils.isAndroid();
  return obj.renderHeader(obj2);
}
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(9580);
let closure_5 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5154);
let obj3 = { actions: { marginRight: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelSecondaryViewChatScreen(arg0) {
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
      const tmp6 = jsx(ChatViewDefault, {
        guildId,
        channelId,
        chatInputRef: noop.useRef(null),
        HACK_fixModalInteraction: true,
        screenIndex: "channel-secondary-view-chat",
      });
      cResult[0] = channelId;
      cResult[1] = guildId;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const ref = noop.useRef(null);
    }
  : function ChannelSecondaryViewChatScreen(arg0) {
      ({ channelId, guildId } = arg0);
      const ref = noop.useRef(null);
      return jsx(ChannelContainer.ChannelContainer, {
        guildId,
        channelId,
        children: jsx(ChatViewDefault, {
          guildId,
          channelId,
          chatInputRef: noop.useRef(null),
          HACK_fixModalInteraction: true,
          screenIndex: "channel-secondary-view-chat",
        }),
      });
    };
ReactCompilerGating = fn(558);
let obj4 = { marginRight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelSecondaryViewChatNavigator(navigation) {
      const cResult = params(channelId[8]).c(18);
      navigation = navigation.navigation;
      params = navigation.route.params;
      const tmp4 = closure_6();
      const actions = tmp4;
      const obj = params(channelId[8]);
      const tmp = params;
      const tmp2 = channelId;
      const accessibilityNativeStackOptions = params(channelId[11]).useAccessibilityNativeStackOptions();
      channelId = params.channelId;
      if (cResult[0] !== channelId) {
        const fn = function o() {
          return jsx(ChannelHeaderDefault, {
            channelId,
            screenIndex: "channel-secondary-view-chat",
            isNavigationScreen: true,
          });
        };
        cResult[0] = channelId;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === channelId) {
        if (cResult[3] === tmp4) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] !== navigation) {
          const renderBackImage = tmp(tmp2[5]).getRenderBackImage(navigation);
          cResult[5] = navigation;
          cResult[6] = renderBackImage;
          let tmp8 = renderBackImage;
          const tmpResult = tmp(tmp2[5]);
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] === accessibilityNativeStackOptions) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp7) {
              if (cResult[10] === tmp8) {
                let tmp10 = cResult[11];
              }
              if (cResult[12] === params.channelId) {
                if (cResult[13] === params.guildId) {
                  let tmp15 = cResult[14];
                }
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp15) {
                    let tmp19 = cResult[17];
                  }
                  return tmp19;
                }
                const obj3 = { screenOptions: tmp10, children: tmp15 };
                const tmp22 = <closure_5.Navigator screenOptions={tmp10}>{tmp15}</closure_5.Navigator>;
                cResult[15] = tmp10;
                cResult[16] = tmp15;
                cResult[17] = tmp22;
                tmp19 = tmp22;
              }
              const obj4 = {
                name: "chat",
                children() {
                  return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
                },
              };
              const tmp18 = (
                <closure_5.Screen name="chat">
                  {function children() {
                    return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
                  }}
                </closure_5.Screen>
              );
              cResult[12] = params.channelId;
              cResult[13] = params.guildId;
              cResult[14] = tmp18;
              tmp15 = tmp18;
            }
          }
        }
        const obj5 = {
          header: renderChannelSecondaryViewChatHeader,
          headerTitle: tmp6,
          headerRight: tmp7,
          headerLeft: tmp8,
        };
        const merged = Object.assign(accessibilityNativeStackOptions);
        cResult[7] = accessibilityNativeStackOptions;
        cResult[8] = tmp6;
        cResult[9] = tmp7;
        cResult[10] = tmp8;
        cResult[11] = obj5;
        tmp10 = obj5;
      }
      const fn2 = function s() {
        return jsx(ChannelActionsDefault, {
          containerStyle: actions.actions,
          channelId,
          screenIndex: "channel-secondary-view-chat",
        });
      };
      cResult[2] = channelId;
      cResult[3] = tmp4;
      cResult[4] = fn2;
      tmp7 = fn2;
      const obj2 = params(channelId[11]);
    }
  : function ChannelSecondaryViewChatNavigator(navigation) {
      navigation = navigation.navigation;
      const params = navigation.route.params;
      const tmp = closure_6();
      dependencyMap = tmp;
      const accessibilityNativeStackOptions = navigation(6912).useAccessibilityNativeStackOptions();
      const channelId = params.channelId;
      const items = [channelId, tmp, navigation, accessibilityNativeStackOptions];
      const obj2 = {
        screenOptions: accessibilityNativeStackOptions.useMemo(() => {
          const obj = {
            header: renderChannelSecondaryViewChatHeader,
            headerTitle() {
              return channelId(params(actions[12]), {
                channelId,
                screenIndex: "channel-secondary-view-chat",
                isNavigationScreen: true,
              });
            },
            headerRight() {
              return channelId(params(actions[13]), {
                containerStyle: actions.actions,
                channelId,
                screenIndex: "channel-secondary-view-chat",
              });
            },
            headerLeft: HeaderShared.getRenderBackImage(navigation),
          };
          const merged = Object.assign(accessibilityNativeStackOptions);
          return obj;
        }, items),
        children: channelId(closure_5.Screen, {
          name: "chat",
          children() {
            return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
          },
        }),
      };
      return channelId(closure_5.Navigator, obj2);
    };
