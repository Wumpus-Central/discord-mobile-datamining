// === Module 15688: useActiveEventOrStageInstanceChannel ===

// Module 15688 (useActiveEventOrStageInstanceChannel)
import useGuildEvents from "useGuildEvents" /* 9552 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 15687 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;

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