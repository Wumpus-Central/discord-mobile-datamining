// discord_app/modules/channel/sanitizeChannelName.tsx
import set from "../../../_runtime/00002_set.js";
import set2 from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName.tsx";
import sanitizeThreadNameDefault from "../threads/sanitizeThreadName.tsx";

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
}
