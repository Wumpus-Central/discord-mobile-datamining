// === Module 11699: handleConjureRoute ===

// Module 11699 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 4828 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5136 */;
import useChatLayout from "useChatLayout" /* 5139 */;
import openConjureModalDefault from "openConjureModal" /* 11700 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/handleConjureRoute.tsx");

export default function handleConjureRoute(guildId, channelId, arg2, arg3) {
  if (channelId === StaticChannelRoute.CONJURE) {
    if (!obj3.getChatLayout().isChatLockedOpen) {
      if (true === arg2) {
        if (true !== arg3) {
          return false;
        }
      } else if (null == arg2) {
        const obj = { screen: "guilds", guildId, channelId };
        NavigationRouteUtils.navigateToRootTab(obj);
        const tmp8Result = NavigationRouteUtils;
      }
      openConjureModalDefault(guildId);
      return true;
    }
    obj3 = useChatLayout;
  }
  return false;
};