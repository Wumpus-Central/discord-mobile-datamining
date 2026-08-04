// discord_app/modules/private_channel_creation/maybeConvertPrivateChannel.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4203").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== require(5661) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = importDefault(4203).ensurePrivateChannel(channel.recipients);
      const obj = importDefault(4203);
    }
    return ensurePrivateChannelResult;
  }
};