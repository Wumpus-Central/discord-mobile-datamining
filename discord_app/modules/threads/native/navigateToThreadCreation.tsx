// === Module 11360: navigateToThreadCreation ===

// Module 11360 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4497 */;
import transitionToChannel from "transitionToChannel" /* 4650 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7870 */;
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