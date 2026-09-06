// === Module 12791: convertRouteToNavigation ===

// Module 12791 (convertRouteToNavigation)
import Constants from "Constants" /* 1074 */;
import matchPathCompat from "matchPathCompat" /* 4386 */;
import RouteUtils from "RouteUtils" /* 4399 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  pathname = pathname.pathname;
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        let tmpResult = matchPathCompat;
        obj = { path: null };
        let obj4 = Routes;
        const RouteParam = RouteUtils.RouteParam;
        const RouteParam2 = RouteUtils.RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = RouteUtils.RouteParam;
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }));
        const RouteParam4 = RouteUtils.RouteParam;
        const _HermesInternal = HermesInternal;
        obj.path = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?");
        if (null != tmpResult.matchPath(pathname, obj)) {
          return true;
        } else {
          tmpResult = matchPathCompat;
          obj = { path: null };
          const RouteParam6 = RouteUtils.RouteParam;
          const RouteParam7 = RouteUtils.RouteParam;
          obj.path = obj4.CHANNEL(RouteParam6.guildId(), RouteParam7.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult.matchPath(pathname, obj);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            ({ navigationReplace, openChannel } = pathname);
            if (tmpResult1.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const tmpResult2 = NavigationRouteUtils;
                  const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
                  let currentRoute;
                  if (rootNavigationRef1 != null) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  const coerceGuildsRouteResult = tmpResult2.coerceGuildsRoute(currentRoute);
                  channelId = undefined;
                  if (coerceGuildsRouteResult != null) {
                    const params = coerceGuildsRouteResult.params;
                    if (params != null) {
                      channelId = params.channelId;
                    }
                  }
                  if (channelId === channelId) {
                    const obj1 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    NavigationRouteUtils.navigateToRootTab(obj1);
                    const tmpResult4 = NavigationRouteUtils;
                  } else {
                    const obj2 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    NavigationRouteUtils.navigateToChannel(obj2);
                    const tmpResult5 = NavigationRouteUtils;
                  }
                  const tmpResult3 = RootNavigationRef;
                }
              }
              const obj3 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              NavigationRouteUtils.navigateToRootTab(obj3);
              const tmpResult6 = NavigationRouteUtils;
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (openChannel) {
                  obj4 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  NavigationRouteUtils.navigateToChannel(obj4);
                  const tmpResult7 = NavigationRouteUtils;
                }
              }
              if (false !== navigationReplace) {
                const obj5 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                NavigationRouteUtils.navigateToRootTab(obj5);
                const tmpResult8 = NavigationRouteUtils;
              }
              if (tmp15) {
                const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "Array" };
                NavigationRouteUtils.navigateToChannel(obj6);
                const tmpResult9 = NavigationRouteUtils;
              }
              tmp15 = null != channelId && true !== navigationReplace;
            } else {
              const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              NavigationRouteUtils.navigateToRootTab(obj7);
              const tmpResult10 = NavigationRouteUtils;
            }
            return true;
          }
          const guildIdResult2 = RouteParam6.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
      }
      if (pathname.startsWith("/member-verification/")) {
        const obj8 = { path: null };
        const RouteParam5 = RouteUtils.RouteParam;
        obj8.path = Routes.GUILD_MEMBER_VERIFICATION(RouteParam5.guildId());
        const matchPathResult1 = matchPathCompat.matchPath(pathname, obj8);
        if (null != matchPathResult1) {
          const result = NavigationRouteUtils.navigateToMemberVerification(matchPathResult1.params.guildId, matchPathResult1.params.inviteCode);
          const tmpResult12 = NavigationRouteUtils;
        }
        return true;
      } else {
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
        const tmpResult13 = NavigationRouteUtils;
      }
    }
  }
  return true;
};