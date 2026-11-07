// === Module 14250: navigateToThreadCreation ===

// Module 14250 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import transitionToChannel from "transitionToChannel" /* 5885 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8271 */;
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