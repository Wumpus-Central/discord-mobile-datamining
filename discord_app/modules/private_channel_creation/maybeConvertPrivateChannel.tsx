// discord_app/modules/private_channel_creation/maybeConvertPrivateChannel.tsx
import _modDef4458 from "../../actions/ChannelActionCreators.tsx";
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "../channel/FakePlaceholderPrivateChannel.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = _modDef4458.ensurePrivateChannel(channel.recipients);
      const obj = _modDef4458;
    }
    return ensurePrivateChannelResult;
  }
};