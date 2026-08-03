let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7132).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7132);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4263).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4263);
  }
};