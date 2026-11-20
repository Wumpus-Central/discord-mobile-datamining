// === Module 17577: useActiveEventOrStageInstanceChannel ===

// Module 17577 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 7897 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 17576 */;
import ChannelStore from "ChannelStore" /* 4643 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildScheduledEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = ChannelStore.getChannel(id);
  }
  return firstActiveEventChannel;
}