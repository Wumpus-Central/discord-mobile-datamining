// === Module 11294: navigateToThreadCreation ===

// Module 11294 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4462 */;
import transitionToChannel from "transitionToChannel" /* 4616 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7816 */;
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