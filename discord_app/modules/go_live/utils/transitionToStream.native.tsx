// === Module 4398: transitionToStream ===

// Module 4398 (transitionToStream)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4399").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4161).hideActionSheet();
    const obj = importDefault(4161);
    importDefault(4399).popAll();
    const obj2 = importDefault(4399);
    require(4403) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4403) /* openChannelCallModal */;
  }
};