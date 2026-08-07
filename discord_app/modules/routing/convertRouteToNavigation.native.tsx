// discord_app/modules/routing/convertRouteToNavigation.native.tsx
import { Routes } from "ME";
import { getRootNavigationRef } from "../main_tabs_v2/RootNavigationRef.native.tsx";

let result = require("navigationToRootTabHelper").fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  let channelId;
  let guildId;
  let messageId;
  let navigationReplace;
  let openChannel;
  pathname = pathname.pathname;
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        let tmpResult = tmp(4123);
        obj = { path: null };
        let obj4 = Routes;
        const RouteParam = tmp(4136).RouteParam;
        const RouteParam2 = tmp(4136).RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = tmp(4136).RouteParam;
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }));
        const RouteParam4 = tmp(4136).RouteParam;
        const _HermesInternal = HermesInternal;
        obj[0] = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?");
        if (null != tmpResult.matchPath(pathname, obj)) {
          return true;
        } else {
          tmpResult = tmp(4123);
          obj = { path: null };
          const RouteParam6 = tmp(4136).RouteParam;
          const RouteParam7 = tmp(4136).RouteParam;
          obj[0] = obj4.CHANNEL(RouteParam6.guildId(), RouteParam7.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult.matchPath(pathname, obj);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            ({ navigationReplace, openChannel } = pathname);
            if (tmpResult1.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const tmpResult2 = tmp(4152);
                  const rootNavigationRef1 = tmp(4153).getRootNavigationRef();
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
                    const obj1 = { screen: "guilds", guildId: null, channelId: null, resetRoot: null };
                    obj1[1] = guildId;
                    obj1[2] = channelId;
                    obj1[3] = navigationReplace;
                    tmp(4152).navigateToRootTab(obj1);
                    const tmpResult4 = tmp(4152);
                  } else {
                    const obj2 = { channelId: null, guildId: null, messageId: null, replaceChannelAndFixRoot: null };
                    obj2[0] = channelId;
                    obj2[1] = guildId;
                    obj2[2] = messageId;
                    obj2[3] = navigationReplace;
                    tmp(4152).navigateToChannel(obj2);
                    const tmpResult5 = tmp(4152);
                  }
                  const tmpResult3 = tmp(4153);
                }
              }
              const obj3 = { screen: "guilds", guildId: null, channelId: null, resetRoot: null };
              obj3[1] = guildId;
              obj3[2] = channelId;
              obj3[3] = navigationReplace;
              tmp(4152).navigateToRootTab(obj3);
              const tmpResult6 = tmp(4152);
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (openChannel) {
                  obj4 = { channelId: null, guildId: null, messageId: null, replaceChannelAndFixRoot: null, openChannel: true };
                  obj4[0] = channelId;
                  obj4[1] = guildId;
                  obj4[2] = messageId;
                  obj4[3] = navigationReplace;
                  tmp(4152).navigateToChannel(obj4);
                  const tmpResult7 = tmp(4152);
                }
              }
              if (false !== navigationReplace) {
                const obj5 = { screen: "guilds", guildId: null, channelId: null, resetRoot: null };
                obj5[1] = guildId;
                obj5[2] = channelId;
                obj5[3] = navigationReplace;
                tmp(4152).navigateToRootTab(obj5);
                const tmpResult8 = tmp(4152);
              }
              if (tmp15) {
                const obj6 = { channelId: null, guildId: null, messageId: null, replaceChannelAndFixRoot: "Array" };
                obj6[0] = channelId;
                obj6[1] = guildId;
                obj6[2] = messageId;
                tmp(4152).navigateToChannel(obj6);
                const tmpResult9 = tmp(4152);
              }
              tmp15 = null != channelId && true !== navigationReplace;
            } else {
              const obj7 = { screen: "guilds", guildId: null, channelId: null, resetRoot: null };
              obj7[1] = guildId;
              obj7[2] = channelId;
              obj7[3] = navigationReplace;
              tmp(4152).navigateToRootTab(obj7);
              const tmpResult10 = tmp(4152);
            }
            return true;
          }
          const guildIdResult2 = RouteParam6.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
      }
      if (pathname.startsWith("/member-verification/")) {
        const obj8 = { path: null };
        const RouteParam5 = tmp(4136).RouteParam;
        obj8[0] = Routes.GUILD_MEMBER_VERIFICATION(RouteParam5.guildId());
        const matchPathResult1 = tmp(4123).matchPath(pathname, obj8);
        if (null != matchPathResult1) {
          const result = tmp(4152).navigateToMemberVerification(matchPathResult1.params.guildId, matchPathResult1.params.inviteCode);
          const tmpResult12 = tmp(4152);
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
        tmp(4152).resetToAuthRoute();
        flag = true;
        const tmpResult13 = tmp(4152);
      }
    }
  }
  return true;
};