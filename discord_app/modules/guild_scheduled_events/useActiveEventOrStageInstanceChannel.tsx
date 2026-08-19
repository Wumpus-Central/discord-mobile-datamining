// === Module 15448: useActiveEventOrStageInstanceChannel ===

// Module 15448 (useActiveEventOrStageInstanceChannel)
import useGuildEvents from "useGuildEvents" /* 8891 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 15447 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

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