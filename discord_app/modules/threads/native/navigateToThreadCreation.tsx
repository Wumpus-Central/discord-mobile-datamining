// === Module 11568: navigateToThreadCreation ===

// Module 11568 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4684 */;
import transitionToChannel from "transitionToChannel" /* 4838 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8092 */;
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