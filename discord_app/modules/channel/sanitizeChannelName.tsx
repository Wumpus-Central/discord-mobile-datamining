// === Module 8607: sanitizeChannelName ===

// Module 8607 (sanitizeChannelName)
import ChannelTypes from "ChannelTypes" /* 1106 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 5423 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6976 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/sanitizeChannelName.tsx");

export default function sanitizeChannelName(arg0, arg1) {
  const THREADS = ChannelTypes.ChannelTypesSets.THREADS;
  if (THREADS.has(arg1)) {
    let tmp3 = sanitizeThreadNameDefault(arg0, false);
  } else {
    const LIMITED_CHANNEL_NAME = ChannelTypes.ChannelTypesSets.LIMITED_CHANNEL_NAME;
    tmp3 = arg0;
    if (LIMITED_CHANNEL_NAME.has(arg1)) {
      tmp3 = sanitizeGuildTextChannelNameDefault(arg0);
    }
  }
  return tmp3;
};