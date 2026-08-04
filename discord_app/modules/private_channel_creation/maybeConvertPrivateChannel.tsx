import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4295").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5752) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4295).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4295);
    }
    return ensurePrivateChannelResult;
  }
};