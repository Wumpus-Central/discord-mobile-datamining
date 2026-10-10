// === Module 12157: navigateToThreadCreation ===

// Module 12157 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import transitionToChannel from "transitionToChannel" /* 5103 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7901 */;
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