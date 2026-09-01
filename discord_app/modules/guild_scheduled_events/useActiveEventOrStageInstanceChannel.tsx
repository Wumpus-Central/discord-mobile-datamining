// === Module 15776: useActiveEventOrStageInstanceChannel ===

// Module 15776 (useActiveEventOrStageInstanceChannel)
import useGuildEvents from "useGuildEvents" /* 9631 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 15775 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};