// discord_app/modules/threads/native/navigateToThreadCreation.tsx
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ThreadActionCreatorsDefault from "../ThreadActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
  obj2 = NavigationRouteUtils;
};
