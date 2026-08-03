import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4461").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4223).hideActionSheet();
    const obj = importDefault(4223);
    importDefault(4461).popAll();
    const obj2 = importDefault(4461);
    require(4465) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4465) /* openChannelCallModal */;
  }
};