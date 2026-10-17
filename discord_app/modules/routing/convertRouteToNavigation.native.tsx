// === Module 11572: convertRouteToNavigation ===

// Module 11572 (convertRouteToNavigation)
import Constants from "Constants" /* 1087 */;
import matchPathCompat from "matchPathCompat" /* 5039 */;
import RouteUtils from "RouteUtils" /* 5052 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5072 */;
import RootNavigationRef from "RootNavigationRef" /* 5073 */;
import useChatLayout from "useChatLayout" /* 5075 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 9617 */;
import handleConjureRouteDefault from "handleConjureRoute" /* 11573 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  pathname = pathname.pathname;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        const obj2 = { path: null };
        const RouteParam = RouteUtils.RouteParam;
        const tmpResult = matchPathCompat;
        const RouteParam2 = RouteUtils.RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = RouteUtils.RouteParam;
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }));
        const RouteParam4 = RouteUtils.RouteParam;
        const _HermesInternal = HermesInternal;
        obj2.path = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?");
        if (null != tmpResult.matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: null };
          const RouteParam5 = RouteUtils.RouteParam;
          const tmpResult14 = matchPathCompat;
          const RouteParam6 = RouteUtils.RouteParam;
          obj3.path = Routes.CHANNEL(RouteParam5.guildId(), RouteParam6.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult14.matchPath(pathname, obj3);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            ({ navigationReplace, openChannel } = pathname);
            if (null == channelId) {
              if (!handleConjureRouteDefault(guildId, channelId, navigationReplace, openChannel)) {
                if (tmpResult15.getChatLayout().isChatLockedOpen) {
                  if (null != channelId) {
                    if (false === navigationReplace) {
                      const tmpResult16 = NavigationRouteUtils;
                      const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
                      let currentRoute;
                      if (rootNavigationRef1 != null) {
                        currentRoute = rootNavigationRef1.getCurrentRoute();
                      }
                      const coerceGuildsRouteResult = tmpResult16.coerceGuildsRoute(currentRoute);
                      let channelId1;
                      if (coerceGuildsRouteResult != null) {
                        const params = coerceGuildsRouteResult.params;
                        if (params != null) {
                          channelId1 = params.channelId;
                        }
                      }
                      if (channelId1 === channelId) {
                        const obj4 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                        NavigationRouteUtils.navigateToRootTab(obj4);
                        const tmpResult18 = NavigationRouteUtils;
                      } else {
                        const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                        NavigationRouteUtils.navigateToChannel(obj6);
                        const tmpResult19 = NavigationRouteUtils;
                      }
                      const tmpResult17 = RootNavigationRef;
                    }
                  }
                  const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  NavigationRouteUtils.navigateToRootTab(obj7);
                  const tmpResult20 = NavigationRouteUtils;
                } else if (null != channelId) {
                  if (true === navigationReplace) {
                    if (openChannel) {
                      const obj8 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                      NavigationRouteUtils.navigateToChannel(obj8);
                      const tmpResult21 = NavigationRouteUtils;
                    }
                  }
                  if (false !== navigationReplace) {
                    const obj9 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    NavigationRouteUtils.navigateToRootTab(obj9);
                    const tmpResult22 = NavigationRouteUtils;
                  }
                  if (tmp17) {
                    const obj10 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "Reflect" };
                    NavigationRouteUtils.navigateToChannel(obj10);
                    const tmpResult23 = NavigationRouteUtils;
                  }
                  tmp17 = null != channelId && true !== navigationReplace;
                } else {
                  const obj11 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  NavigationRouteUtils.navigateToRootTab(obj11);
                  const tmpResult24 = NavigationRouteUtils;
                }
                tmpResult15 = useChatLayout;
              }
            } else {
              openChannelSecondaryViewChat;
            }
            return true;
          }
          const guildIdResult2 = RouteParam5.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
      }
      if (!pathname.startsWith(Routes.LOGIN)) {
        if (!pathname.startsWith(Routes.REGISTER)) {
          let flag = pathname.startsWith(Routes.ACCOUNT_STANDING);
          if (flag) {
            rootNavigationRef.navigate("account-standing");
            flag = true;
          }
        }
        return flag;
      }
      NavigationRouteUtils.resetToAuthRoute();
      flag = true;
      const tmpResult26 = NavigationRouteUtils;
    }
  }
  return true;
};