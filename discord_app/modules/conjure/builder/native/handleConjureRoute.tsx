// discord_app/modules/conjure/builder/native/handleConjureRoute.tsx
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import openConjureModalDefault from "openConjureModal.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
}
