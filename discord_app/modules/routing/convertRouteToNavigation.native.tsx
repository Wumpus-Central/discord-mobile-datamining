// === Module 13745: convertRouteToNavigation ===

// Module 13745 (convertRouteToNavigation)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import matchPathCompat from "matchPathCompat" /* 4951 */;
import RouteUtils from "RouteUtils" /* 4964 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import useChatLayout from "useChatLayout" /* 5092 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6657 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 8578 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12297 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export function convertRouteToNavigation(pathname) {
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
          const tmpResult17 = matchPathCompat;
          const RouteParam6 = RouteUtils.RouteParam;
          obj3.path = Routes.CHANNEL(RouteParam5.guildId(), RouteParam6.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult17.matchPath(pathname, obj3);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            const navigationReplace = pathname.navigationReplace;
            let tmp15;
            if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
              tmp15 = messageId;
            }
            if (null == channelId) {
              if (tmpResult18.getChatLayout().isChatLockedOpen) {
                if (null != channelId) {
                  if (null != tmp15) {
                    const obj4 = { channelId, guildId, subRouteId: tmp15, replaceChannelAndFixRoot: false !== navigationReplace, openChannel: true };
                    NavigationRouteUtils.navigateToChannel(obj4);
                    const tmpResult19 = NavigationRouteUtils;
                  }
                }
                if (null != channelId) {
                  if (false === navigationReplace) {
                    const tmpResult20 = NavigationRouteUtils;
                    const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
                    let currentRoute;
                    if (rootNavigationRef1 != null) {
                      currentRoute = rootNavigationRef1.getCurrentRoute();
                    }
                    const coerceGuildsRouteResult = tmpResult20.coerceGuildsRoute(currentRoute);
                    let channelId1;
                    if (coerceGuildsRouteResult != null) {
                      const params = coerceGuildsRouteResult.params;
                      if (params != null) {
                        channelId1 = params.channelId;
                      }
                    }
                    if (channelId1 === channelId) {
                      const obj6 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                      NavigationRouteUtils.navigateToRootTab(obj6);
                      const tmpResult22 = NavigationRouteUtils;
                    } else {
                      const obj7 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                      NavigationRouteUtils.navigateToChannel(obj7);
                      const tmpResult23 = NavigationRouteUtils;
                    }
                    const tmpResult21 = RootNavigationRef;
                  }
                }
                const obj8 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                NavigationRouteUtils.navigateToRootTab(obj8);
                const tmpResult24 = NavigationRouteUtils;
              } else if (null != channelId) {
                if (true === navigationReplace) {
                  if (pathname.openChannel) {
                    const obj9 = { channelId, guildId, messageId, subRouteId: tmp15, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                    NavigationRouteUtils.navigateToChannel(obj9);
                    const tmpResult25 = NavigationRouteUtils;
                  }
                }
                if (false !== navigationReplace) {
                  const obj10 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  NavigationRouteUtils.navigateToRootTab(obj10);
                  const tmpResult26 = NavigationRouteUtils;
                }
                if (tmp18) {
                  const obj11 = { channelId, guildId, messageId, subRouteId: tmp15, replaceChannelAndFixRoot: "find" };
                  NavigationRouteUtils.navigateToChannel(obj11);
                  const tmpResult27 = NavigationRouteUtils;
                }
                tmp18 = null != channelId && true !== navigationReplace;
              } else {
                const obj12 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                NavigationRouteUtils.navigateToRootTab(obj12);
                const tmpResult28 = NavigationRouteUtils;
              }
              tmpResult18 = useChatLayout;
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
          if (pathname.startsWith(Routes.ACCOUNT_STANDING)) {
            rootNavigationRef.navigate("account-standing");
            return true;
          } else {
            const matchPathResult1 = matchPathCompat.matchPath(pathname, { path: "/conjure/:projectId?", exact: true });
            let tmp9 = null == matchPathResult1;
            if (!tmp9) {
              tmp9 = !ConjureGuildExperiment.hasConjureGuildWithoutExposure("convertRouteToNavigation");
              const tmpResult31 = ConjureGuildExperiment;
            }
            let flag = !tmp9;
            if (!tmp9) {
              openConjureHomeScreenDefault(matchPathResult1.params.projectId);
              flag = true;
            }
            return flag;
          }
        }
      }
      NavigationRouteUtils.resetToAuthRoute();
      return true;
    }
  }
  return true;
}