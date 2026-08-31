// === Module 7467: maybeConvertPrivateChannel ===

// Module 7467 (maybeConvertPrivateChannel)
import _modDef4461 from "module_4461" /* 4461 */;
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID" /* 6036 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    channel = channel.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = _modDef4461.ensurePrivateChannel(channel.recipients);
      const obj = _modDef4461;
    }
    return ensurePrivateChannelResult;
  }
};