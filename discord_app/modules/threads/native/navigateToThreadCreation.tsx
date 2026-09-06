// discord_app/modules/threads/native/navigateToThreadCreation.tsx
import ThreadActionCreatorsDefault from "../ThreadActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const transitionToChannel = tmp3(4571);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
