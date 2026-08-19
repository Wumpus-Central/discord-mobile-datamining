// discord_app/modules/threads/native/navigateToThreadCreation.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import coerceMainRoute from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import patchThreadDefault from "../ThreadActionCreators.tsx";

let result = obj132.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = patchThreadDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
  obj2 = coerceMainRoute;
};