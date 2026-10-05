// === Module 12559: convertRouteToNavigation ===

// Module 12559 (convertRouteToNavigation)
import Constants from "Constants" /* 1085 */;
import matchPathCompat from "matchPathCompat" /* 4704 */;
import RouteUtils from "RouteUtils" /* 4717 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import useChatLayout from "useChatLayout" /* 4739 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  let CHANNEL2;
  let CHANNELResult;
  let RouteParam4;
  let RouteParam6;
  let VOICE_CHAT_CHANNEL_PARTIAL;
  let channelId;
  let guildId;
  let guildIdResult1;
  let guildIdResult2;
  let messageId;
  let navigationReplace;
  let openChannel;
  pathname = pathname.pathname;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        const obj2 = { path: "" + CHANNELResult + VOICE_CHAT_CHANNEL_PARTIAL(guildIdResult1, RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?") };
        const matchPath = matchPathCompat.matchPath;
        const CHANNEL = Routes.CHANNEL;
        matchPathCompat;
        const RouteParam = RouteUtils.RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam2 = RouteUtils.RouteParam;
        VOICE_CHAT_CHANNEL_PARTIAL = Routes.VOICE_CHAT_CHANNEL_PARTIAL;
        CHANNELResult = CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }));
        const RouteParam3 = RouteUtils.RouteParam;
        guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
        RouteParam4 = RouteUtils.RouteParam;
        const _HermesInternal = HermesInternal;
        if (null != matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: CHANNEL2(guildIdResult2, RouteParam6.channelId({ optional: true }), ":messageId?") };
          const matchPath2 = matchPathCompat.matchPath;
          CHANNEL2 = Routes.CHANNEL;
          matchPathCompat;
          const RouteParam5 = RouteUtils.RouteParam;
          guildIdResult2 = RouteParam5.guildId();
          RouteParam6 = RouteUtils.RouteParam;
          const matchPath2Result = matchPath2(pathname, obj3);
          if (null != matchPath2Result) {
            ({ channelId, guildId, messageId } = matchPath2Result.params);
            ({ navigationReplace, openChannel } = pathname);
            const tmpResult14 = useChatLayout;
            if (tmpResult14.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
                  NavigationRouteUtils;
                  const tmpResult16 = RootNavigationRef;
                  const rootNavigationRef1 = tmpResult16.getRootNavigationRef();
                  let currentRoute;
                  if (rootNavigationRef1 != null) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  const coerceGuildsRouteResult = coerceGuildsRoute(currentRoute);
                  let channelId1;
                  if (coerceGuildsRouteResult != null) {
                    const params = coerceGuildsRouteResult.params;
                    if (params != null) {
                      channelId1 = params.channelId;
                    }
                  }
                  if (channelId1 === channelId) {
                    const obj4 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    const tmpResult17 = NavigationRouteUtils;
                    tmpResult17.navigateToRootTab(obj4);
                  } else {
                    const obj5 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    const tmpResult18 = NavigationRouteUtils;
                    tmpResult18.navigateToChannel(obj5);
                  }
                }
              }
              const obj6 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              const tmpResult19 = NavigationRouteUtils;
              tmpResult19.navigateToRootTab(obj6);
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (openChannel) {
                  const obj7 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  const tmpResult20 = NavigationRouteUtils;
                  tmpResult20.navigateToChannel(obj7);
                }
              }
              if (false !== navigationReplace) {
                const obj8 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                const tmpResult21 = NavigationRouteUtils;
                tmpResult21.navigateToRootTab(obj8);
              }
              const tmp14 = null != channelId && true !== navigationReplace;
              if (tmp14) {
                const obj9 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "a" };
                const tmpResult22 = NavigationRouteUtils;
                tmpResult22.navigateToChannel(obj9);
              }
            } else {
              const obj10 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              const tmpResult23 = NavigationRouteUtils;
              tmpResult23.navigateToRootTab(obj10);
            }
            return true;
          }
        }
      }
      if (!pathname.startsWith(Routes.LOGIN)) {
        let flag;
        if (!pathname.startsWith(Routes.REGISTER)) {
          flag = pathname.startsWith(Routes.ACCOUNT_STANDING);
          if (flag) {
            rootNavigationRef.navigate("account-standing");
            flag = true;
          }
        }
        return flag;
      }
      const tmpResult24 = NavigationRouteUtils;
      tmpResult24.resetToAuthRoute();
      flag = true;
    }
  }
  return true;
};