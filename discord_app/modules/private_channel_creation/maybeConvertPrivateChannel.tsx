// === Module 14322: maybeConvertPrivateChannel ===

// Module 14322 (maybeConvertPrivateChannel)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7145 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7236 */;
import ChannelStore from "ChannelStore" /* 2068 */;

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
};