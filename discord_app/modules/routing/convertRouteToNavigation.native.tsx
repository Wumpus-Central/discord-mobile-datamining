// discord_app/modules/routing/convertRouteToNavigation.native.tsx
import Constants from "../../Constants.tsx";
import matchPathCompat from "matchPathCompat.tsx";
import RouteUtils from "RouteUtils.tsx";
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import useChatLayout from "../chat/native/useChatLayout.tsx";
import ConjureGuildExperiment from "../conjure/experiments/ConjureGuildExperiment.tsx";
import openChannelSecondaryViewChat from "../app_channels/native/openChannelSecondaryViewChat.tsx";
import openConjureHomeScreenDefault from "../conjure/home/native/openConjureHomeScreen.tsx";
import handleConjureRouteDefault from "../conjure/builder/native/handleConjureRoute.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
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
        obj2.path =
          "" +
          CHANNELResult +
          Routes.VOICE_CHAT_CHANNEL_PARTIAL(
            RouteParam3.guildId({ name: "voiceGuildId" }),
            RouteParam4.channelId({ name: "voiceChannelId" }),
            ":voiceMessageId?",
          );
        if (null != tmpResult.matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: null };
          const RouteParam5 = RouteUtils.RouteParam;
          const tmpResult16 = matchPathCompat;
          const RouteParam6 = RouteUtils.RouteParam;
          obj3.path = Routes.CHANNEL(RouteParam5.guildId(), RouteParam6.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult16.matchPath(pathname, obj3);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            ({ navigationReplace, openChannel } = pathname);
            if (null == channelId) {
              if (!handleConjureRouteDefault(guildId, channelId, navigationReplace, openChannel)) {
                if (tmpResult17.getChatLayout().isChatLockedOpen) {
                  if (null != channelId) {
                    if (false === navigationReplace) {
                      const tmpResult18 = NavigationRouteUtils;
                      const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
                      let currentRoute;
                      if (rootNavigationRef1 != null) {
                        currentRoute = rootNavigationRef1.getCurrentRoute();
                      }
                      const coerceGuildsRouteResult = tmpResult18.coerceGuildsRoute(currentRoute);
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
                        const tmpResult20 = NavigationRouteUtils;
                      } else {
                        const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                        NavigationRouteUtils.navigateToChannel(obj6);
                        const tmpResult21 = NavigationRouteUtils;
                      }
                      const tmpResult19 = RootNavigationRef;
                    }
                  }
                  const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  NavigationRouteUtils.navigateToRootTab(obj7);
                  const tmpResult22 = NavigationRouteUtils;
                } else if (null != channelId) {
                  if (true === navigationReplace) {
                    if (openChannel) {
                      const obj8 = {
                        channelId,
                        guildId,
                        messageId,
                        replaceChannelAndFixRoot: navigationReplace,
                        openChannel: true,
                      };
                      NavigationRouteUtils.navigateToChannel(obj8);
                      const tmpResult23 = NavigationRouteUtils;
                    }
                  }
                  if (false !== navigationReplace) {
                    const obj9 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    NavigationRouteUtils.navigateToRootTab(obj9);
                    const tmpResult24 = NavigationRouteUtils;
                  }
                  if (tmp21) {
                    const obj10 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "a" };
                    NavigationRouteUtils.navigateToChannel(obj10);
                    const tmpResult25 = NavigationRouteUtils;
                  }
                  tmp21 = null != channelId && true !== navigationReplace;
                } else {
                  const obj11 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  NavigationRouteUtils.navigateToRootTab(obj11);
                  const tmpResult26 = NavigationRouteUtils;
                }
                tmpResult17 = useChatLayout;
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
          if (pathname.startsWith(Routes.ACCOUNT_STANDING)) {
            rootNavigationRef.navigate("account-standing");
            return true;
          } else {
            const matchPathResult1 = matchPathCompat.matchPath(pathname, { path: "/conjure/:projectId?", exact: true });
            let tmp9 = null == matchPathResult1;
            if (!tmp9) {
              tmp9 = !ConjureGuildExperiment.hasConjureGuildWithoutExposure("convertRouteToNavigation");
              const tmpResult29 = ConjureGuildExperiment;
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
