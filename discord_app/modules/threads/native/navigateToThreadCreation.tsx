// === Module 11019: navigateToThreadCreation ===

// Module 11019 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const obj = ThreadActionCreatorsDefault;
  const result = obj.openThreadCreationForMobile(channel, undefined, Message);
  const obj2 = NavigationRouteUtils;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    const tmp3Result = transitionToChannel;
    tmp3Result.transitionToChannel(channel.id);
  }
};