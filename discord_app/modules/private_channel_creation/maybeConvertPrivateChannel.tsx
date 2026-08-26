// === Module 7424: maybeConvertPrivateChannel ===

// Module 7424 (maybeConvertPrivateChannel)
import _modDef4457 from "module_4457" /* 4457 */;
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID" /* 6015 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = _modDef4457.ensurePrivateChannel(channel.recipients);
      const obj = _modDef4457;
    }
    return ensurePrivateChannelResult;
  }
};