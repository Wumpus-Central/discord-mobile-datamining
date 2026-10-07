// discord_app/modules/private_channel_creation/maybeConvertPrivateChannel.tsx
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import FakePlaceholderPrivateChannel from "../channel/FakePlaceholderPrivateChannel.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = ChannelActionCreatorsDefault.ensurePrivateChannel(channel.recipients);
    }
    return ensurePrivateChannelResult;
  }
}
