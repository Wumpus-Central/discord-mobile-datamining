// === Module 7754: maybeConvertPrivateChannel ===

// Module 7754 (maybeConvertPrivateChannel)
import _modDef4573 from "module_4573" /* 4573 */;
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID" /* 7221 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = _modDef4573.ensurePrivateChannel(channel.recipients);
      const obj = _modDef4573;
    }
    return ensurePrivateChannelResult;
  }
};