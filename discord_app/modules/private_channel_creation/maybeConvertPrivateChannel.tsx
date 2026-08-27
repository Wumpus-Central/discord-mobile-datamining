// === Module 7432: maybeConvertPrivateChannel ===

// Module 7432 (maybeConvertPrivateChannel)
import _modDef4458 from "module_4458" /* 4458 */;
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID" /* 6020 */;
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
      ensurePrivateChannelResult = _modDef4458.ensurePrivateChannel(channel.recipients);
      const obj = _modDef4458;
    }
    return ensurePrivateChannelResult;
  }
};