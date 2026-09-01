// discord_app/modules/threads/native/navigateToThreadCreation.tsx
import set from "../../../../_runtime/00002_set.js";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import patchThreadDefault from "../ThreadActionCreators.tsx";

let result = set.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = patchThreadDefault.openThreadCreationForMobile(channel, undefined, Message);
  const obj = patchThreadDefault;
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
