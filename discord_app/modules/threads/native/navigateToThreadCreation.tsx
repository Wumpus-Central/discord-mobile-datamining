// === Module 10424: navigateToThreadCreation ===

// Module 10424 (navigateToThreadCreation)
import obj132 from "obj132" /* 2 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import transitionToChannel from "transitionToChannel" /* 4768 */;
import patchThreadDefault from "patchThread" /* 7512 */;

let result = obj132.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = patchThreadDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
  obj2 = coerceMainRoute;
};