import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4490").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    importDefault(4253).hideActionSheet();
    const obj = importDefault(4253);
    importDefault(4490).popAll();
    const obj2 = importDefault(4490);
    require(4494) /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require(4494) /* openChannelCallModal */;
  }
};