// === Module 9741: sanitizeChannelName ===

// Module 9741 (sanitizeChannelName)
import set from "set" /* 2 */;
import set2 from "set" /* 1094 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 4715 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7274 */;

const result = set.fileFinishedImporting("modules/channel/sanitizeChannelName.tsx");

export default function sanitizeChannelName(arg0, arg1) {
  const THREADS = set2.ChannelTypesSets.THREADS;
  if (THREADS.has(arg1)) {
    let tmp3 = sanitizeThreadNameDefault(arg0, false);
  } else {
    const LIMITED_CHANNEL_NAME = set2.ChannelTypesSets.LIMITED_CHANNEL_NAME;
    tmp3 = arg0;
    if (LIMITED_CHANNEL_NAME.has(arg1)) {
      tmp3 = sanitizeGuildTextChannelNameDefault(arg0);
    }
  }
  return tmp3;
};