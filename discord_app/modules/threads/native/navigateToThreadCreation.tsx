// === Module 11526: navigateToThreadCreation ===

// Module 11526 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4970 */;
import transitionToChannel from "transitionToChannel" /* 5527 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8339 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
  obj2 = NavigationRouteUtils;
}