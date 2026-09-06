// discord_app/modules/channel/sanitizeChannelName.tsx
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName.tsx";
import sanitizeThreadNameDefault from "../threads/sanitizeThreadName.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
