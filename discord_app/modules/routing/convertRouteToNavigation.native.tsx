// === Module 12791: convertRouteToNavigation ===

// Module 12791 (convertRouteToNavigation)
import Constants from "Constants" /* 1074 */;
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
        let tmpResult = tmp(4386);
        obj = { path: null };
        let obj4 = Routes;
        const RouteParam = tmp(4399).RouteParam;
        const RouteParam2 = tmp(4399).RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = tmp(4399).RouteParam;
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }));
        const RouteParam4 = tmp(4399).RouteParam;
        const _HermesInternal = HermesInternal;
        obj.path = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?");
        if (null != tmpResult.matchPath(pathname, obj)) {
          return true;
        } else {
          tmpResult = tmp(4386);
          obj = { path: null };
          const RouteParam6 = tmp(4399).RouteParam;
          const RouteParam7 = tmp(4399).RouteParam;
          obj.path = obj4.CHANNEL(RouteParam6.guildId(), RouteParam7.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult.matchPath(pathname, obj);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            ({ navigationReplace, openChannel } = pathname);
            if (tmpResult1.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const tmpResult2 = tmp(4417);
                  const rootNavigationRef1 = tmp(4418).getRootNavigationRef();
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
                    tmp(4417).navigateToRootTab(obj1);
                    const tmpResult4 = tmp(4417);
                  } else {
                    const obj2 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    tmp(4417).navigateToChannel(obj2);
                    const tmpResult5 = tmp(4417);
                  }
                  const tmpResult3 = tmp(4418);
                }
              }
              const obj3 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              tmp(4417).navigateToRootTab(obj3);
              const tmpResult6 = tmp(4417);
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (openChannel) {
                  obj4 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  tmp(4417).navigateToChannel(obj4);
                  const tmpResult7 = tmp(4417);
                }
              }
              if (false !== navigationReplace) {
                const obj5 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                tmp(4417).navigateToRootTab(obj5);
                const tmpResult8 = tmp(4417);
              }
              if (tmp15) {
                const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "Array" };
                tmp(4417).navigateToChannel(obj6);
                const tmpResult9 = tmp(4417);
              }
              tmp15 = null != channelId && true !== navigationReplace;
            } else {
              const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              tmp(4417).navigateToRootTab(obj7);
              const tmpResult10 = tmp(4417);
            }
            return true;
          }
          const guildIdResult2 = RouteParam6.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
      }
      if (pathname.startsWith("/member-verification/")) {
        const obj8 = { path: null };
        const RouteParam5 = tmp(4399).RouteParam;
        obj8.path = Routes.GUILD_MEMBER_VERIFICATION(RouteParam5.guildId());
        const matchPathResult1 = tmp(4386).matchPath(pathname, obj8);
        if (null != matchPathResult1) {
          const result = tmp(4417).navigateToMemberVerification(matchPathResult1.params.guildId, matchPathResult1.params.inviteCode);
          const tmpResult12 = tmp(4417);
        }
        return true;
      } else {
        if (!pathname.startsWith(Routes.LOGIN)) {
          if (!pathname.startsWith(tmp7.REGISTER)) {
            let flag = pathname.startsWith(tmp7.ACCOUNT_STANDING);
            if (flag) {
              rootNavigationRef.navigate("account-standing");
              flag = true;
            }
          }
          return flag;
        }
        tmp(4417).resetToAuthRoute();
        flag = true;
        const tmpResult13 = tmp(4417);
      }
    }
  }
  return true;
};