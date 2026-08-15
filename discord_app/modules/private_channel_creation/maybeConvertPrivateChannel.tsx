// discord_app/modules/private_channel_creation/maybeConvertPrivateChannel.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { ChannelActionCreators } from "../../actions/ChannelActionCreators.tsx";
import { FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID } from "../channel/FakePlaceholderPrivateChannel.tsx";

const require = arg1;
const result = require("module_4770").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = ChannelActionCreators.ensurePrivateChannel(channel.recipients);
      const obj = ChannelActionCreators;
    }
    return ensurePrivateChannelResult;
  }
};