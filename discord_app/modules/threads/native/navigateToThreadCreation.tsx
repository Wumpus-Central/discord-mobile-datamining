// discord_app/modules/threads/native/navigateToThreadCreation.tsx
import { patchThread } from "../ThreadActionCreators.tsx";
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = patchThread.openThreadCreationForMobile(channel, undefined, Message);
  const obj = patchThread;
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4293).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4293);
  }
};