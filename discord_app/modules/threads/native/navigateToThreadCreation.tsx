// === Module 11492: navigateToThreadCreation ===

// Module 11492 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4614 */;
import transitionToChannel from "transitionToChannel" /* 4768 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8010 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
  obj2 = NavigationRouteUtils;
};